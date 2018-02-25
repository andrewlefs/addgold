<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


require_once APPPATH . 'core/v1/Controller.php';

require_once APPPATH . 'controllers/v1/autoloader.php';

use Misc\Controller;
use Misc\Models\TabModels;
use Misc\Authorize;
use Misc\Models\AppHashKeyModels;
use Misc\Object\Values\ResultObject;
use Misc\Http\Util;
use Misc\Security;
use Misc\Utility;
use Misc\Models\GSVInfoModels;
use Misc\Object\Fields\HeaderField;

class AppController extends Controller {

    protected $gsvModel;
    protected $scopeModel;

    public function __construct() {
        parent::__construct();
        $this->setDbConfig(array('db' => 'system_info', 'type' => 'slave'));
    }

    /**
     * 
     * @return GSVInfoModels
     */
    public function getGsvModel() {
        if ($this->gsvModel == null) {
            $this->gsvModel = new GSVInfoModels($this->getDbConfig(), $this);
        }
        return $this->gsvModel;
    }

    public function setGsvModel($gsvModel) {
        $this->gsvModel = $gsvModel;
    }

    /**
     * 
     * @return AppHashKeyModels
     */
    public function getScopeModel() {
        if ($this->scopeModel == null) {
            $this->scopeModel = new AppHashKeyModels($this->getDbConfig());
            $this->scopeModel->setController($this);
        }
        return $this->scopeModel;
    }

    //tam thoi chua su dung
    public function init() {
        try {
            $paramBodys = $this->getReceiver()->getBodys();
            $paramHeaders = $this->getReceiver()->getHeaders();

            $author = new Authorize();
            $author->setDbConfig($this->getDbConfig());

            $resultAuthor = $author->AuthorizeRequest($paramBodys, null);
            if ($resultAuthor->getCode() === ResultObject::AUTHORIZE_SUCCESS) {
                $prepareBodys = $this->prepareQuerySecure();
				(new Misc\Logger\NullLogger())->captureReceiver("request", $this->getReceiver());
                $channel = isset($prepareBodys["channel_cfg"]) ? $prepareBodys["channel_cfg"] : $prepareBodys["channel"];
                $gsv = Utility::parseGsv($channel);
                $type = Utility::parseGsvType($channel);
                //reset response
                $resultAuthor->setCode(ResultObject::NORMAL_STATE);
                $resultAuthor->setDataWithoutValidation(array("float_button" => true));

                $config = $this->getGsvModel()->getConfig(array("service_id" => $this->getAppId()));
                //var_dump($config);die;
                $fields = array("forgot", "event", "support", "privacypolicy");
                foreach ($fields as $key => $value) {
                    if (isset($config[$value]))
                        $resultAuthor->setDataWithoutValidation(array($value => $config[$value]));
                }

                $info = $this->getGsvModel()->getInfo(array("gsv_id" => $gsv, "platform" => $prepareBodys["platform"], "service_id" => $this->getAppId()));  
				(new Misc\Logger\NullLogger())->captureReceiver("request", $this->getReceiver(),array("info"=>$info,"config"=>$config) ) ;
                if (strtolower($type) == "store") {
                    //get status approved                    
                    $resultAuthor->setDataWithoutValidation(array("float_button" => $info["me_button"] == "on"));
                    if ($info == true && isset($info["status"]) && $info["status"] == "approving") {
                        $resultAuthor->setDataWithoutValidation(array("payment" => json_decode($config["guide"], true)));
                        $resultAuthor->OutOfJsonResponse();
                    }
                }
                //default show payment list
                $resultAuthor->setDataWithoutValidation(array("payment" => json_decode($config["payplist"], true)));
                //check force update or force message            
                //set message data response
                if (isset($info["msg_login"]) && empty($info["msg_login"]) == false && is_array($msgData = json_decode($info["msg_login"], true))) {
                    $resultAuthor->setDataWithoutValidation($msgData);
                }
                //var_dump($info);die;
                //check state code                
                if (isset($info["state"]) && $info["state"] == "FORCE_UPDATE_STATE") {
                    $resultAuthor->setCode(ResultObject::FORCE_UPDATE_STATE);
                } elseif (isset($info["state"]) && $info["state"] == "INFORMATION_UPDATE_STATE") {
                    $resultAuthor->setCode(ResultObject::INFORMATION_UPDATE_STATE);
                }
                $resultAuthor->OutOfJsonResponse();
            } else {
                $resultAuthor->OutOfJsonResponse();
            }
        } catch (Exception $ex) {
            $resultAuthor = new ResultObject();
            $resultAuthor->setCode(ResultObject::EXCEPTION);
            $resultAuthor->setMessage($ex->getMessage());
            $resultAuthor->OutOfJsonResponse();
        }
    }

    //get domain list
    public function domainList() {
        try {
            $paramBodys = $this->getReceiver()->getBodys();
            $paramHeaders = $this->getReceiver()->getHeaders();

            $author = new Authorize();
            $author->setDbConfig($this->getDbConfig());

            $resultAuthor = $author->AuthorizeRequest($paramBodys, $paramHeaders);
            if ($resultAuthor->getCode() === ResultObject::AUTHORIZE_SUCCESS || true) {
                $params = $this->ParseParams($paramBodys, $paramHeaders);

                //var_dump($params);die;
                $resultAuthor->setApp($this->getAppId());
                $resultAuthor->setHashKey($this->getSecret());
                $resultAuthor->setCode(ResultObject::REQUEST_SUCCESS);
                $domainList = $this->getScopeModel()->getScope(array("app_id" => $this->getAppId()), array("domain_list"));
                //var_dump($domainList);die;
                if ($domainList == true && empty($domainList["domainlist"]) == false && ($domainData = json_decode($domainList["domainlist"], true)) == true) {                    
                    $resultAuthor->setData(array("data" => $domainData));
                } else {
                    $resultAuthor->setData(array("data" => array(
                            "graph" => "https://graph.addgold.net/",
                            "plist" => "https://misc.addgold.net/payment/",
                            "cdn" => "https://cdn.addgold.net/",
                            "tk" => "https://tk.addgold.net/",
                            "ck" => "https://ck.addgold.net/",
                    )));
                }

                //var_dump($resultAuthor);die;

                $resultAuthor->OutOfEncryptResponse();
            } else {
                $resultAuthor->OutOfEncryptResponse();
            }
        } catch (Exception $ex) {
            $resultAuthor = new ResultObject();
            $resultAuthor->setCode(ResultObject::EXCEPTION);
            $resultAuthor->setMessage($ex->getMessage());
            $resultAuthor->OutOfJsonResponse();
        }
    }

    public function ParseParams(array $datas, array $headers) {
        $appid = $headers[HeaderField::APP];
        $otp = $headers[HeaderField::OTP];
        $token = $headers[HeaderField::TOKEN];
        $hashkey = $this->getSecret();
        $q = $datas["q"];
        return Security::decrypt($q, $hashkey);
    }

    public function SecretList() {
        try {
            $paramBodys = $this->getReceiver()->getBodys();
            $paramHeaders = $this->getReceiver()->getHeaders();

            $author = new Authorize();
            $author->setDbConfig($this->getDbConfig());

            $resultAuthor = $author->AuthorizeRequest($paramBodys);

            if ($resultAuthor->getCode() === ResultObject::AUTHORIZE_SUCCESS) {
                //to chức cache data tại chổ này
                //nếu cache == true return kết quả ngược lại đọc db
                $apps = $this->getAppHashKeyModel()->getHashKeyList(array("app_id", "app_name", "hash_key"));
                $data = Security::encrypt($apps, $this->getSecret());
                $resultAuthor->setData(array("data" => $data));
                $resultAuthor->setCode(ResultObject::REQUEST_SUCCESS);
                $resultAuthor->OutOfJsonResponse();
            } else {
                $resultAuthor->OutOfJsonResponse();
            }
        } catch (Exception $ex) {
            $resultAuthor = new ResultObject();
            $resultAuthor->setCode(ResultObject::EXCEPTION);
            $resultAuthor->setMessage($ex->getMessage());
            $resultAuthor->OutOfJsonResponse();
        }
    }

}
