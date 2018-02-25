<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

require_once APPPATH . 'controllers/app/v1/autoloader.php';

require_once APPPATH . 'core/EI_Controller.php';

use Payment\Http\DataReceivers;
use Payment\Authorize;
use Payment\Http\HeaderReceivers;
use Payment\Security;
use Payment\Object\Fields\HeaderField;
use Payment\Object\Values\SecretKeyList;
use Payment\Validation;
use Payment\Object\Values\ReturnRequest;
use Payment\Object\Apple;
use Payment\Object\Google;
use Payment\Object\Fields\PayMethod;
use Payment\Object\Values\AbsModelField;
use Payment\Http\Client\GAPIClient;
use Payment\Api;
use Payment\Object\WindowPhone;

class PayController extends EI_Controller {

    protected $modelField;
    protected $receive;

    public function __construct() {
        parent::__construct();
        $this->modelField = new AbsModelField();
        //echo $this->modelField->getPath();die;
        $this->receive = new DataReceivers();
        $this->load->model($this->modelField->getPath(), AbsModelField::NAME);
    }

    public function Verify_WindowPhone() {
        try {
            $datas = $this->receive->getArrayCopy();
            $headers = (new HeaderReceivers())->getArrayCopy();
            $this->captureRequest($datas, "", $this->get_remote_ip());
            $this->captureRequest($headers, "", $this->get_remote_ip());

            $author = (new Authorize())->ValidateAuthorizeRequest($datas, $headers);
            if ($author->getCode() == ReturnRequest::AUTHORIZE_SUCCESS) {
                $params = $this->ParseParams($datas, $headers);
                $windows = new WindowPhone();
                $result = $windows->verifyReceipt($params);
                //check result reciept
                if ($result->getCode() === 100000) {
                    $data = $result->exportData();
                    $accountInfo = $data["account"];

                    $receiptDetail = $data["receipt"];

                    $account_id = $accountInfo['account_id'];
                    $product_id = $receiptDetail['productId'];
                    $transaction_id = $receiptDetail["orderId"];

                    $temp_product = explode('.', $product_id);
                    $usd = $temp_product[count($temp_product) - 1];
                    $vnd = $value = $usd * 22000;
                    $request_id = "inapp_" . strtolower(PayMethod::WINDOW_PHONE) . "_" . $transaction_id . "_" . $usd;

                    $gameInfo = json_decode($params["info"], true);
                    $data_log = array(
                        'account_id' => $account_id,
                        'app_id' => $params[HeaderField::APP],
                        'request_id' => $request_id,
                        'supplier_transid' => $transaction_id,
                        'product_id' => $product_id,
                        'packagename' => $receiptDetail['packageName'],
                        'value' => $value,
                        'usd' => $usd,
                        'character_id' => $gameInfo["character_id"],
                        'character_name' => $gameInfo["character_name"],
                        'server_id' => $gameInfo["server_id"],
                        'gameInfo' => $params["info"],
                        'capture_receipt' => json_encode($receiptDetail),
                        'purchase_time' => date("Y-m-d H:i:s", time())
                    );
                    //begin login db
                    $log_id = $this->{AbsModelField::NAME}->insert(AbsModelField::TABLE_PAYMENT_LOG_PURCHASE, $data_log);
                    //die;
                    if (!$log_id) {
                        $result->setCode(ReturnRequest::DUPLICATE_TRANSACTION);
                        $result->setData(array("data" => array("msg" => $this->{AbsModelField::NAME}->error_message())));
                        $result->OutOfJsonResponse();
                    } else {
                        //call gapi input
                        $secret = new SecretKeyList();
                        $hashkey = $secret->getSecretKey($params[HeaderField::APP]);
                        $gapi = new GAPIClient();

                        $gapi->setApp($params[HeaderField::APP]);
                        $gapi->setSecret($hashkey);

                        $api = new Api($gapi);
                        $path = array(
                            "control" => "payment",
                            "func" => "recharge",
                        );
                        $gameInfo["platform"] = $params["platform"];
                        $recData = array(
                            "transaction_id" => $request_id,
                            "date" => time(),
                            "account_id" => $account_id,
                            "money" => $value,
                            "payment_type" => PayMethod::TYPE,
                            "service_name" => $params[HeaderField::APP],
                            "service_id" => $params[HeaderField::APP],
                            "tracking" => $params["tracking_info"],
                            "game_info" => json_encode($gameInfo),
                            "channel" => $params["channel"],
                            "desc" => json_encode($receiptDetail),
                            "lang" => $params["lang"],
                            "packagename" => $receiptDetail['packageName']
                        );

                        $response = $api->call($path, "GET", $recData);
                        $resultData = $response->getContent();
                        if ($resultData["code"] === 0) {
                            $this->{AbsModelField::NAME}->update(AbsModelField::TABLE_PAYMENT_LOG_PURCHASE, array('request_gapi' => $response->getRequest()->getUrl(), "pay_status" => 0, "pay_response" => json_encode($resultData), "pay_time" => date("Y-m-d H:i:s", time())), array("id" => $log_id));
                            $result->setCode(ReturnRequest::WP_SUCCESS);
                            $result->setData(array("data" => array("msg" => $resultData["data"]["msg"])));
                            $result->OutOfJsonResponse();
                        } else {
                            $this->{AbsModelField::NAME}->update(AbsModelField::TABLE_PAYMENT_LOG_PURCHASE, array('request_gapi' => $response->getRequest()->getUrl(), "pay_status" => 1, "pay_response" => json_encode($resultData), "pay_time" => date("Y-m-d H:i:s", time())), array("id" => $log_id));
                            $result->setCode(ReturnRequest::WP_ADDMONEY_FAIL);
                            $result->setData(array("data" => array("msg" => $resultData["message"])));
                            $result->OutOfJsonResponse();
                        }
                    }
                } else {
                    $result->OutOfJsonResponse();
                }
            } else {
                $author->OutOfJsonResponse();
            }
        } catch (Exception $ex) {
            $headers = (new HeaderReceivers())->getArrayCopy();
            $return = new ReturnRequest();
            $return->setApp($headers[HeaderField::APP]);
            $return->setCode($ex->getCode());
            $return->setMessage($ex->getMessage());
            $return->OutOfJsonResponse();
        }
    }

    public function Verify_Apple() {
        try {
            $datas = $this->receive->getArrayCopy();
            //$headers = (new HeaderReceivers())->getArrayCopy();
            $this->captureRequest($datas, "", $this->get_remote_ip());
            //$author = (new Authorize())->ValidateAuthorizeRequest($datas, $headers);
            //if ($author->getCode() == ReturnRequest::AUTHORIZE_SUCCESS) {
                $params = $this->ParseParams($datas);
                $apple = new Apple();

                $result = $apple->verifyReceipt($params);

                //check result reciept
                if ($result->getCode() === 100000) {
                    $data = $result->exportData();

                    $accountInfo = $data["account"];

                    $receiptDetail = $data["receipt"];

                    if (isset($receiptDetail["in_app"]) && isset($receiptDetail['in_app'][0]['quantity'])) {
                        $receiptDetail = $receiptDetail['in_app'][0];
                        $is_mac = 1;
                    }


                    $account_id = $accountInfo['account_id'];
                    $product_id = $receiptDetail['product_id'];
                    $transaction_id = $receiptDetail["transaction_id"];

                    $temp_product = explode('.', $product_id);
                    $usd = $temp_product[count($temp_product) - 1];
                    $vnd = $value = $usd * 23000;
                    $request_id = "inapp_" . strtolower(PayMethod::APPLE) . "_" . $transaction_id . "_" . $usd;

                    $gameInfo = json_decode($params["info"], true);
                    //var_dump($params["info"]);
                    //var_dump(json_last_error_msg());die;
                    $data_log = array(
                        'account_id' => $account_id,
                        'app_id' => $params[HeaderField::APP],
                        'request_id' => $request_id,
                        'supplier_transid' => $transaction_id,
                        'product_id' => $product_id,
                        'packagename' => $receiptDetail['bid'],
                        'value' => $value,
                        'usd' => $usd,
                        'character_id' => $gameInfo["character_id"],
                        'character_name' => $gameInfo["character_name"],
                        'server_id' => $gameInfo["server_id"],
                        'gameInfo' => $params["info"],
                        'capture_receipt' => json_encode($receiptDetail)
                    );
                    //begin login db
                    $log_id = $this->{AbsModelField::NAME}->insert(AbsModelField::TABLE_PAYMENT_LOG_PURCHASE, $data_log);
                    //die;
                    if (!$log_id) {
                        $result->setCode(ReturnRequest::DUPLICATE_TRANSACTION);
                        $result->setData(array("data" => array("msg" => $this->{AbsModelField::NAME}->error_message())));
                        $result->OutOfJsonResponse();
                    } else {
                        //call gapi input
                        $secret = new SecretKeyList();
                        $hashkey = $secret->getSecretKey($params[HeaderField::APP]);
                        $gapi = new GAPIClient();

                        $gapi->setApp($params[HeaderField::APP]);
                        $gapi->setSecret($hashkey);

                        $api = new Api($gapi);
                        $path = array(
                            "control" => "payment",
                            "func" => "recharge",
                        );
                        $gameInfo["platform"] = $params["platform"];
                        $recData = array(
                            "transaction_id" => $request_id,
                            "date" => strtotime($receiptDetail["original_purchase_date_pst"]),
                            "account_id" => $account_id,
                            "money" => $value,
                            "payment_type" => PayMethod::TYPE,
                            "service_name" => $params[HeaderField::APP],
                            "service_id" => $params[HeaderField::APP],
                            "tracking" => $params["tracking_info"],
                            "game_info" => json_encode($gameInfo),
                            "channel" => $params["channel"],
                            "desc" => json_encode($receiptDetail),
                            "lang" => $params["lang"],
                            "packagename" => $receiptDetail['bid']
                        );

                        $response = $api->call($path, "GET", $recData);
                        $resultData = $response->getContent();
                        if ($resultData["code"] === 0) {
                            $this->{AbsModelField::NAME}->update(AbsModelField::TABLE_PAYMENT_LOG_PURCHASE, array('request_gapi' => $response->getRequest()->getUrl(), "pay_status" => 0, "pay_response" => json_encode($resultData), "pay_time" => date("Y-m-d H:i:s", time())), array("id" => $log_id));
                            $result->setCode(ReturnRequest::APPLE_SUCCESS);
                            $result->setData(array("data" => array("msg" => $resultData["data"]["msg"])));
                            $result->setMessage($resultData["data"]["msg"]);
                            $result->OutOfJsonResponse();
                        } else {
                            $this->{AbsModelField::NAME}->update(AbsModelField::TABLE_PAYMENT_LOG_PURCHASE, array('request_gapi' => $response->getRequest()->getUrl(), "pay_status" => 2, "pay_response" => json_encode($resultData), "pay_time" => date("Y-m-d H:i:s", time())), array("id" => $log_id));
                            $result->setCode(ReturnRequest::APPLE_ADDMONEY_FAIL);
                            $result->setData(array("data" => array("msg" => $resultData["message"])));
                            $result->setMessage($resultData["message"]);
                            $result->OutOfJsonResponse();
                        }
                    }
                } else {
                    $result->OutOfJsonResponse();
                }
            //} else {
            //    $author->OutOfJsonResponse();
            //}
        } catch (Exception $ex) {
            $headers = (new HeaderReceivers())->getArrayCopy();
            $return = new ReturnRequest();
            $return->setApp($headers[HeaderField::APP]);
            $return->setCode($ex->getCode());
            $return->setMessage($ex->getMessage());
            $return->OutOfJsonResponse();
        }
    }

    public function Verify_Google() {
        try {
            $datas = $this->receive->getArrayCopy();
            $headers = (new HeaderReceivers())->getArrayCopy();
            $this->captureRequest($datas, "", $this->get_remote_ip());
            $author = (new Authorize())->ValidateAuthorizeRequest($datas, $headers);
            if ($author->getCode() == ReturnRequest::AUTHORIZE_SUCCESS) {
                //$headers["app"] = 1003;
                $params = $this->ParseParams($datas, $headers);

                $package = $params["package_name"];
                $resultPackage = $this->{AbsModelField::NAME}->getPublicKeyOfPackageName($package);
                if (empty($resultPackage)) {
                    $author->setCode(ReturnRequest::PACKAGE_NONE_INIT);
                    $author->OutOfJsonResponse();
                }

                $publicKey = $resultPackage["public_key"];

                $google = new Google();
                $result = $google->verifyReceipt($params, $publicKey);
                //check result reciept
                if ($result->getCode() === 100000) {
                    $data = $result->exportData();
                    $accountInfo = $data["account"];

                    $receiptDetail = json_decode($data["receipt"], true);

                    $account_id = $accountInfo['account_id'];
                    $product_id = $receiptDetail['productId'];
                    $transaction_id = $receiptDetail["orderId"];

                    $temp_product = explode('.', $product_id);
                    $usd = $temp_product[count($temp_product) - 1];
                    $vnd = $value = $usd * 23000;
                    $request_id = "inapp_" . strtolower(PayMethod::GOOGLE) . "_" . $transaction_id . "_" . $usd;

                    $gameInfo = json_decode($params["info"], true);
                    $data_log = array(
                        'account_id' => $account_id,
                        'app_id' => $params[HeaderField::APP],
                        'request_id' => $request_id,
                        'supplier_transid' => $transaction_id,
                        'product_id' => $product_id,
                        'packagename' => $receiptDetail['packageName'],
                        'value' => $value,
                        'usd' => $usd,
                        'character_id' => $gameInfo["character_id"],
                        'character_name' => $gameInfo["character_name"],
                        'server_id' => $gameInfo["server_id"],
                        'gameInfo' => $params["info"],
                        'capture_receipt' => json_encode($receiptDetail),
                        'purchase_time' => date("Y-m-d H:i:s", time())
                    );
                    //begin login db
                    $log_id = $this->{AbsModelField::NAME}->insert(AbsModelField::TABLE_PAYMENT_LOG_PURCHASE, $data_log);
                    //die;
                    if (!$log_id) {
                        $result->setCode(ReturnRequest::DUPLICATE_TRANSACTION);
                        $result->setData(array("data" => array("msg" => $this->{AbsModelField::NAME}->error_message())));
                        $result->OutOfJsonResponse();
                    } else {
                        //call gapi input
                        $secret = new SecretKeyList();
                        $hashkey = $secret->getSecretKey($params[HeaderField::APP]);
                        $gapi = new GAPIClient();

                        $gapi->setApp($params[HeaderField::APP]);
                        $gapi->setSecret($hashkey);

                        $api = new Api($gapi);
                        $path = array(
                            "control" => "payment",
                            "func" => "recharge",
                        );
                        $gameInfo["platform"] = $params["platform"];
                        $recData = array(
                            "transaction_id" => $request_id,
                            "date" => time(),
                            "account_id" => $account_id,
                            "money" => $value,
                            "payment_type" => PayMethod::TYPE,
                            "service_name" => $params[HeaderField::APP],
                            "service_id" => $params[HeaderField::APP],
                            "tracking" => $params["tracking_info"],
                            "game_info" => json_encode($gameInfo),
                            "channel" => $params["channel"],
                            "desc" => json_encode($receiptDetail),
                            "lang" => $params["lang"],
                            "packagename" => $receiptDetail['packageName']
                        );

                        $response = $api->call($path, "GET", $recData);
                        $resultData = $response->getContent();
                        //$resultData = json_decode('{"code":0,"desc":"ADD_MONEY_SUCCESS","data":{"credit":1100,"money":"23000","unit":"Ng\u1ecdc","gapi_transid":36,"msg":"B\u1ea1n \u0111\u00e3 n\u1ea1p th\u00e0nh c\u00f4ng 1100 Ng\u1ecdc"},"message":"ADD_MONEY_SUCCESS"}', true);
                        //var_dump($resultData);die;
                        if ($resultData["code"] === 0) {
                            $this->{AbsModelField::NAME}->update(AbsModelField::TABLE_PAYMENT_LOG_PURCHASE, array('request_gapi' => $response->getRequest()->getUrl(), "pay_status" => 0, "pay_response" => json_encode($resultData), "pay_time" => date("Y-m-d H:i:s", time())), array("id" => $log_id));
                            $result->setCode(ReturnRequest::GOOGLE_SUCCESS);
                            $result->setData(array("data" => array("msg" => $resultData["data"]["msg"])));
                            $result->setMessage($resultData["data"]["msg"]);
                            $result->OutOfJsonResponse();
                        } else {
                            $this->{AbsModelField::NAME}->update(AbsModelField::TABLE_PAYMENT_LOG_PURCHASE, array('request_gapi' => $response->getRequest()->getUrl(), "pay_status" => 1, "pay_response" => json_encode($resultData), "pay_time" => date("Y-m-d H:i:s", time())), array("id" => $log_id));
                            $result->setCode(ReturnRequest::GOOGLE_ADDMONEY_FAIL);
                            $result->setData(array("data" => array("msg" => $resultData["message"])));
                            $result->OutOfJsonResponse();
                        }
                    }
                } else {
                    $result->OutOfJsonResponse();
                }
            } else {
                $author->OutOfJsonResponse();
            }
        } catch (Exception $ex) {
            $headers = (new HeaderReceivers())->getArrayCopy();
            $return = new ReturnRequest();
            $return->setApp($headers[HeaderField::APP]);
            $return->setCode($ex->getCode());
            $return->setMessage($ex->getMessage());
            $return->OutOfJsonResponse();
        }
    }

    public function ParseParams(array $datas, array $headers) {
        $appid = $headers[HeaderField::APP];
        $appid = 10000;
        $otp = $headers[HeaderField::OTP];
        $token = $headers[HeaderField::TOKEN];
        $secret = new SecretKeyList();
        $hashkey = $secret->getSecretKey($appid);

        $q = $datas["q"];
        $params = Security::decrypt($q, $hashkey);
        return array_merge($headers, $params);
    }

}
