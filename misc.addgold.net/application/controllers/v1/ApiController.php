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
use Misc\Models\GSVInfoModels;

class ApiController extends Controller {

    public function __construct() {
        parent::__construct();
        $this->setDbConfig(array('db' => 'system_info', 'type' => 'slave'));
    }

    public function init() {
        try {
            $paramBodys = $this->getReceiver()->getBodys();
            $paramHeaders = $this->getReceiver()->getHeaders();

            $author = new Authorize();
            $author->setDbConfig($this->getDbConfig());

            $resultAuthor = $author->AuthorizeRequest($paramBodys, $paramHeaders);

            if ($resultAuthor->getCode() === ResultObject::AUTHORIZE_SUCCESS) {
                //to chức cache data tại chổ này
                //nếu cache == true return kết quả ngược lại đọc db
            } else {
                $resultAuthor->OutOfEncryptResponse();
            }
        } catch (Exception $ex) {
            $resultAuthor = new ResultObject();
            $resultAuthor->setCode(ResultObject::EXCEPTION);
            $resultAuthor->setMessage($ex->getMessage());
            $resultAuthor->OutOfEncryptResponse();
        }
    }

    public function StateApproved() {
        //chưa hỗ trợ post
        try {
            $paramBodys = $this->getReceiver()->getBodys();
            $resultAuthor = new ResultObject();
            if (isset($paramBodys["channel"])) {

                $gsvInfo = new GSVInfoModels($this->getDbConfig(), $this);
                $channel = $paramBodys["channel"];
                $pos = mb_strpos($channel, "gsv_");
                $posId = mb_strpos(mb_substr($channel, $pos + 4), "_");                
                $gsv = mb_substr($channel, $pos, $posId + 4);                
                $info = $gsvInfo->getConfig(array("gsv_id" => $gsv, "platform" => $paramBodys["platform"], "service_id" => $paramBodys["app"]), array("status"));                
                $resultAuthor->setCode(ResultObject::REQUEST_SUCCESS);
                $resultAuthor->setData($info);
                $resultAuthor->OutOfJsonResponse();
            } else {
                $resultAuthor->setCode(ResultObject::REQUEST_FAILED);
                $resultAuthor->OutOfJsonResponse();
            }
        } catch (Exception $ex) {
            $resultAuthor = new ResultObject();
            $resultAuthor->setCode(ResultObject::EXCEPTION);
            $resultAuthor->setMessage($ex->getMessage());
            $resultAuthor->OutOfJsonResponse();
        }
    }


    public function register_mu(){

        $paramBodys = $this->getReceiver()->getBodys();
        $resultAuthor = new ResultObject();


        $resultAuthor->setCode(ResultObject::REQUEST_SUCCESS);
        $resultAuthor->setData(array("messager"=>"Success"));
        $resultAuthor->OutOfJsonResponse();
    }

    //tam thoi chua su dung
    public function gm_support() {
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

    public function icon_mobo() {
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


    public function get_gm_support() {
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

    public function get_icon_mobo() {
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



}
