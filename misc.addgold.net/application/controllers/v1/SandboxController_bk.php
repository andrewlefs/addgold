<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


require_once APPPATH . 'core/v1/Controller.php';
require_once APPPATH . 'libraries/phpqrcode.php';

require_once APPPATH . 'controllers/v1/autoloader.php';

use Misc\Controller;
use Misc\Authorize;
use Misc\Object\Values\UtilityListObject;
use Misc\Http\Receiver;
use Misc\Http\OneTimePassword;
use Misc\Object\Values\ResultObject;
use Misc\Security;

class SandboxController extends Controller {

    public function __construct() {
        parent::__construct();
        $this->setPathRoot("v1/Sandbox/");
    }

    public function index() {
        //$author = $this->getAuthorize();
		$author = true;
        if ($author === true) {
            $params = $this->getReceiver()->getQueryParams();
            if (isset($params["access_token"])) {
                $verify = $this->getGraphClient()->verifyAccessToken(args_with_not_empty_keys($params, array("access_token")));
                //$verify = array_merge($params,json_decode(base64_decode($params['access_token']),true));
                if ($verify === false) {
                    $this->setMessage("Truy cập đã hết hạn");
                    $this->Render("deny", true);
                } else {
                    $is1900 = $this->is190066($verify["mobo_id"]);
                    if ($is1900 === false) {
                        $this->setMessage("Chức năng này chỉ áp dụng cho các tài khoản 19006611");
                        $this->Render("deny", true);
                    } else {
                        //var_dump($verify);die;
                        $userInfo = json_decode($params["info"], true);

                        $cardList = $this->getInsideClient()->getSandboxCampaginItemList($verify["mobo_id"], $this->getAppId(), $userInfo["server_id"]);
                        //var_dump($cardList);die;
                        if ($cardList == FALSE) {
                            $this->setMessage("Không có chiến dịch nào trong đợt này");
                            $this->Render("deny", true);
                        } else {

                            //set status login
                            $c_user = $_SESSION["c_user"] = md5(uniqid(mt_rand(), true) . json_encode($verify) . $this->getSecret());
                            setcookie("c_user", $c_user, time() + 3600, "/", $this->getReceiver()->getDomain(), 0, 1);

                            //var_dump($cardList);
                            //parse type card
                            $cardType = array();
                            foreach ($cardList as $key => $value) {
                                if (!isset($cardType[$value["type"]])) {
                                    $items = array();
                                    foreach ($cardList as $k => $val) {
                                        if ($val["type"] == $value["type"] && !isset($items[$val["subtype"]])) {
                                            $items[$val["subtype"]] = $val["subtype_name"];
                                        }
                                    }
                                    $cardType[$value["type"]] = $items;
                                }
                            }
                            $endParams = array_merge($params, $verify);
                            $filterData = args_with_not_empty_keys($endParams, array("mobo_id", "mobo_service_id", "service_name", "service_id", "tracking", "info", "channel", "desc", "lang", "env", "distribution", "platform", "ip_user","version","package_name"));

                            //set time request dataToken 10 minute 
                            OneTimePassword::getInstance()->setWaiting(10 * 60);

                            $this->addData("dataOtp", OneTimePassword::getInstance()->getCode($this->getSecret()));
                            $this->addData("filterData", $filterData);
                            $this->addData("cardTypes", $cardType);
                            $this->addData("cardLists", $cardList);
                            $this->Render("index", false);
                        }
                    }
                }
            } else {
                $this->setMessage("Truy cập không hợp lệ");
                $this->Render("deny", true);
            }
        } else {
            $this->setMessage("Truy cập không hợp lệ");
            $this->Render("deny", true);
        }
    }

    public function Recharge() {

        $domain = ($_SERVER['HTTP_HOST'] == 'mis.mobo.vn') ? $_SERVER['HTTP_HOST'] : "misc.mobo.vn";
        header("Access-Control-Allow-Origin: http(s)://{$domain}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 6400');    // cache for 1 day
        header("Access-Control-Request-Method: GET");
        header("Access-Control-Allow-Methods: GET, POST");
        header("Content-Type: json");
        header("X-Powered-By", "1");
        header("X-Frame-Options", "DENY");

        //$author = $this->getAuthorize();
        $author = true;
        $response = new ResultObject();
        if ($author === true) {
            $c_user = $this->getReceiver()->getCookie("c_user");
            if (empty($c_user) == true || hash_equals($c_user, $_SESSION["c_user"]) == false) {
                $response->setMessage("Access has expired please try again later.");
                $response->setCode(-100);
                $response->OutOfJsonResponse();
            } else {
                $data = $this->getReceiver()->getPostParams();

                //verify csrf Token
                if ($this->verifyCsrfToken($data["csrfToken"]) === false) {
                    $response->setMessage("Data access is invalid.");
                    $response->setCode(-10);
                    $response->OutOfJsonResponse();
                } else {
                    //reset token
                    $response->setDataWithoutValidation(array("csrfToken" => $this->establishCSRFTokenState()));
                    //decrypt dataToken request
                    $dataToken = Security::decrypt($data["dataToken"], $this->getSecret());
                    //verify data otp
                    //set time request dataToken 10 minute 
                    OneTimePassword::getInstance()->setWaiting(10 * 60);
                    $curOtp = OneTimePassword::getInstance()->getCode($this->getSecret());


                    if ($dataToken["otp"] != $curOtp) {
                        $response->setCode(-100);
                        $response->setMessage("Transactions overdue please try again in a few minutes.");
                        $response->OutOfJsonResponse();
                    } else {

                        //notify cap nhật giao dịch log inside
                        //todo: developer
                        
                        $notifyResult = $this->getInsideClient()->callUseCampaginItem($this->getAppId(), $dataToken["item"]["campaign_id"], $dataToken["item"]["id"], $dataToken["request"]["info"]["server_id"], $dataToken["request"]["info"]["character_id"], $dataToken["request"]["info"]["character_name"]);
                        //$response->setDataWithoutValidation(array("requddireData" => $notifyResult));
                        //map voi data token
                        //call recharge
                        //
                        if ($notifyResult["code"] != 0) {
                            $response->setCode(-1);
                            $response->setMessage($notifyResult["message"]);
                            $response->OutOfJsonResponse();
                        } else {
                            $this->getGApiClient()->setServiceId($this->getAppId());

                            $params = array_level_up($dataToken);
                            $params = array_merge($params, $dataToken["request"]);

                            $params["transaction_id"] = "sbx" . md5(uniqid(mt_rand(), true) . json_encode($params) . $this->getSecret());
                            //xu lý từ function rate
                            $params["money"] = $dataToken["item"]["mcoin"];
                            $params["mcoin"] = $dataToken["item"]["mcoin"];
                            $params["credit"] = 0;
                            $params["credit_original"] = 0;
                            $params["payment_type"] = "mopay";
                            $params["payment_subtype"] = $dataToken["item"]["subtype"];
                            $params["env"] = "sandbox";
                            $params["source_type"] = $dataToken["item"]["type"];
                            $params["source_value"] = $dataToken["item"]["value"];
                            $params["info"]['platform'] = $params["platform"];

                            $requireData = args_with_not_empty_keys($params, array("source_value", "source_type", "env", "payment_subtype", "payment_type", "credit_original", "credit", "mcoin", "money", "transaction_id", "mobo_id", "mobo_service_id", "service_name", "service_id", "tracking", "info", "channel", "desc", "lang", "env", "distribution", "platform", "ip_user"));

                            //$response->setDataWithoutValidation(array("requireData" => $requireData));

                            if(!empty($notifyResult['data']['campaign']['content'])){
                                foreach ($notifyResult['data']['campaign']['content'] as $k => $v) {
                                    if($v['id'] == $dataToken["item"]["id"]){
                                        $recharResult["data"]['num'] = $v['available'] ."/".$v['num'];
                                        break;
                                    }
                                }
                            }

                            $response->setData($recharResult['data']);

                            //add money
                            $recharResult = $this->getGApiClient()->addMoney($requireData);
                            if ($recharResult == true) {
                                $response->setCode(0);
                                $response->setMessage($recharResult["data"]["message"]);
                                $response->OutOfJsonResponse();
                            } else {
                                $response->setCode(ResultObject::REQUEST_FAILED);
                                $response->setMessage("Nạp thất bại");
                                $response->OutOfJsonResponse();
                            }
                        }
                    }
                }
            }
        } else {
            $response->setMessage("Truy cập không hợp lệ");
            $response->OutOfJsonResponse();
        }
    }

}
