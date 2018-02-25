<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


require_once APPPATH . 'core/EI_Controller.php';

//require_once APPPATH . 'controllers/graphs/v10/autoloader.php';

abstract class AbsEnumField {

    const modelPath = "../third_party/API/Models/InsideModel";
    const models = "models";
    const FORCE_UPDATE_STATE = "FORCE_UPDATE_STATE";
    const APPROVING_STATE = "APPROVING_STATE";
    const INFORMATION_UPDATE_STATE = "INFORMATION_UPDATE_STATE";
    const NORMAL_STATE = "NORMAL_STATE";

}

abstract class Response {

    const INVALID_TOKEN = -100001;
    const REQUEST_SUCCESS = 100000;

    public static function outResponse($code, array $data, $typeOutput = "json") {
        $oClass = new ReflectionClass(__CLASS__);
        $oContants = $oClass->getConstants();
        if ($type = array_search($code, $oContants)) {
            $out = array("code" => $code, "desc" => $type, "data" => $data);
            return $typeOutput == "json" ? json_encode($out) : $out;
        } else {
            $out = array("code" => null, "desc" => null, "data" => $data);
            return $typeOutput == "json" ? json_encode($out) : $out;
        }
    }

}

abstract class ActionEnum {

    const OPEN_WEBVIEW = "OPEN_WEBVIEW";
    const OPEN_MAIN_PAGE = "OPEN_MAIN_PAGE";
    const OPEN_BROWSER = "OPEN_BROWSER";
    const COPY = "COPY";
    const COLSE = "COLSE";

}

class portal extends EI_Controller {

    private $DataResponses = array();
    private $gsv_id = 0;

    public function __construct() {
        parent::__construct();
        $this->load->model(AbsEnumField::modelPath, AbsEnumField::models);
    }

    public function init() {
        $gets = $this->input->get();
        if ($gets == true) {
            $posts = $this->input->post();
            if ($posts == true) {
                $params = array_filter(array_merge($gets, $posts));
            } else {
                $params = $gets;
            }
        } else {
            $params = $this->input->post();
        }
        //init data response 
        //$this->DataResponses[""]
        // verify link            
        $q = $params["q"];
        $otp = $params["otp"];
        $appid = $params["app"];
        if ($q == true) {
            $inputData = $this->decrypt($q, $this->hash_secret_key($appid));
            $endjson = json_encode($inputData);
            $encrypt = $this->encrypt($endjson);
        }
        //die;
        $token = trim($params['token']);
        $access_token = $params["access_token"];
        unset($params['token'], $params["app"]);
        $source = implode('', $params);
        $valid = md5($source . $this->hash_secret_key($appid));
        $this->captureRequest($params, "", $this->get_remote_ip());
        if ($valid != $token) {
            echo Response::outResponse(Response::INVALID_TOKEN, array("source" => $source, "valid" => $valid, "token" => $token));
            die;
        }
        echo Response::outResponse(Response::REQUEST_SUCCESS
                , array(
            "page_init" => "http://bai888.net/home/?" . http_build_query($params) . "&app=" . $appid . "&token=" . $token
            , "tabs" => array(
                array("title" => "Home"
                    , "active" => true
                    , "url" => "http://bai888.net/home/?" . http_build_query($params) . "&app=" . $appid . "&token=" . $token
                    , "icon" => array("normal" => "http://s1-service.mobo.vn/assets/icon/v2/icon_mopay.png"
                        , "active" => "http://s1-service.mobo.vn/assets/icon/v2/icon_mopay.png"
                    )
                    , "color" => array("normal" => "#fff", "active" => "#000")
                    , "action" => ActionEnum::OPEN_MAIN_PAGE
                ),
                array("title" => "Đổi Thưởng"
                    , "active" => false
                    , "url" => "http://bai888.net/change_award/?" . http_build_query($params) . "&app=" . $appid . "&token=" . $token
                    , "icon" => array("normal" => "http://s1-service.mobo.vn/assets/icon/v2/icon_mopay.png"
                        , "active" => "http://s1-service.mobo.vn/assets/icon/v2/icon_mopay.png"
                    )
                    , "color" => array("normal" => "#fff", "active" => "#000")
                    , "action" => ActionEnum::OPEN_MAIN_PAGE
                ),
                array("title" => "Sự Kiện"
                    , "active" => false
                    , "url" => "http://bai888.net/events/?" . http_build_query($params) . "&app=" . $appid . "&token=" . $token
                    , "icon" => array("normal" => "http://s1-service.mobo.vn/assets/icon/v2/icon_mopay.png"
                        , "active" => "http://s1-service.mobo.vn/assets/icon/v2/icon_mopay.png"
                    )
                    , "color" => array("normal" => "#fff", "active" => "#000")
                    , "action" => ActionEnum::OPEN_MAIN_PAGE
                ),
                array("title" => "Đại lý"
                    , "active" => false
                    , "url" => "http://bai888.net/agency/?" . http_build_query($params) . "&app=" . $appid . "&token=" . $token
                    , "icon" => array("normal" => "http://s1-service.mobo.vn/assets/icon/v2/icon_mopay.png"
                        , "active" => "http://s1-service.mobo.vn/assets/icon/v2/icon_mopay.png"
                    )
                    , "color" => array("normal" => "#fff", "active" => "#000")
                    , "action" => ActionEnum::OPEN_MAIN_PAGE
                ),
                array("title" => "Tài khoản"
                    , "active" => false
                    , "url" => "http://bai888.net/accounts/?" . http_build_query($params) . "&app=" . $appid . "&token=" . $token
                    , "icon" => array("normal" => "http://s1-service.mobo.vn/assets/icon/v2/icon_mopay.png"
                        , "active" => "http://s1-service.mobo.vn/assets/icon/v2/icon_mopay.png"
                    )
                    , "color" => array("normal" => "#fff", "active" => "#000")
                    , "action" => ActionEnum::OPEN_MAIN_PAGE
                )
            )
                )
        );
        die;
    }

    public function requests($appid = 0, $package = null) {
        $params = array();
        $gets = $this->input->get();
        if ($gets == true) {
            $posts = $this->input->post();
            if ($posts == true) {
                $params = array_filter(array_merge($gets, $posts));
            } else {
                $params = $gets;
            }
        } else {
            $params = $this->input->post();
        }
    }

    public function test_curl() {
        $time = time();
        $url = "http://misc.dllglobal.net/assets/volam/1.png";
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);
        $raw = curl_exec($ch);
        curl_close($ch);
        echo time() - $time;
        echo "<br>";
        var_dump($raw);
        die;
    }

    public function test_m() {
        $time = time();
        $url = "http://game.mobo.vn/volam/asset-grashs/st/3.jpg";
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);
        $raw = curl_exec($ch);
        curl_close($ch);
        echo time() - $time;
        echo "<br>";
        var_dump($raw);


        die;
    }

}
