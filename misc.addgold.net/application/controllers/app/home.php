<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require_once APPPATH . 'core/EI_Controller.php';
//require_once APPPATH . 'models/inside/m_app_home.php';

require_once APPPATH . 'controllers/v1/autoloader.php';

abstract class AbsEnumField {

    const modelPath = "../models/inside/m_app_home";
    const models = "models";

}

abstract class Response {

    const INVALID_PARAMS = -100002;
    const INVALID_TOKEN = -100001;
    const INVALID_ACCESS_TOKEN = -100005;
	const INVALID_DATA = -100006;
    const REQUEST_SUCCESS = 100000;
    const UPDATE_SUCCESS = 1000;
    const UPDATE_FAILED = -100001;
    const FORCE_UPDATE_STATE = 400001;
    const APPROVING_STATE = 400003;
    const INFORMATION_UPDATE_STATE = 400002;
    const NORMAL_STATE = 400000;
    const PAYMENT_LIST_SUCCESS = 500040;
    const PAYMENT_LIST_FAIL = 500041;

    public static function outResponse($code, array $data, $appid = null, $typeOutput = "encrypt") {
        $oClass = new ReflectionClass(__CLASS__);
        $oContants = $oClass->getConstants();
        $ei = new EI_Controller();
        if ($type = array_search($code, $oContants)) {
            $out = array("code" => $code, "desc" => $type, "data" => $data);
            return $typeOutput == "encrypt" ? $ei->encrypt($out, $ei->hash_secret_key($appid)) :
                    ($typeOutput == "json" ? json_encode($out) : $out);
        } else {
            $out = array("code" => null, "desc" => null, "data" => $data);
            return $typeOutput == "encrypt" ? $ei->encrypt($out, $ei->hash_secret_key($appid)) :
                    ($typeOutput == "json" ? json_encode($out) : $out);
        }
    }

    public static function outResponseInit($code, array $data, $typeOutput = "json") {
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

    public static function getKeyName($code) {
        $oClass = new ReflectionClass(__CLASS__);
        $oContants = $oClass->getConstants();
        if ($type = array_search($code, $oContants)) {
            return $type;
        } else {
            return null;
        }
    }

}

class home extends EI_Controller {

    private $DataResponses = array();
    private $gsv_id = 0;
    private $inapp_key = array("ios" => array("key" => "inapp_apple", "value" => "Inapp Apple"), "android" => array("key" => "inapp_google", "value" => "Inapp Google"), "wp" => array("key" => "inapp_winphone", "value" => "Inapp Winphone"), "winphone" => array("key" => "inapp_winphone", "value" => "Inapp Winphone"));
    private $country = array("vi" => "VI", "en" => "EN");
    private $icon_payment = "http://misc.addgold.net/assets/payment/v1.0/coin.png";

    public function __construct() {
        parent::__construct();
        $this->load->model(AbsEnumField::modelPath, AbsEnumField::models);
    }

    private $array_app = array('1000' => 'IDpCJtb6Go10vKGRy5DQ');

    public function clearcached() {
        $link = 'https://graph.addgold.net/init/clear_cache';
        $params = $this->input->get();
        $redirect = array('platform' => $params['platform'], 'channel' => $params['channel'], 'app' => $params['app']);

        $redirect['token'] = md5(implode('', $redirect) . $this->array_app[$params['app']]);
        $link_redirect = $link . "?" . http_build_query($redirect);

        echo $link_redirect;
        echo "<br/>";
        $status = $this->get($link_redirect);
        echo "<pre>";
        var_dump($status);
    }

    public function paymentListStore() {
        $params = $this->input->post();
        if (!isset($params["game_id"])) {
            echo json_encode(array(code => -1, message => "Game_id không tồn tại"));
            return;
        }
        $game_id = $params["game_id"];
        $contents = json_decode($params["content"], true);
        $rate_list = $contents["rate_list"];
        $contents = array_merge($contents, $rate_list);
        unset($contents["rate_list"]);
        $this->captureRequest($params, "", $this->get_remote_ip());
        foreach ($contents as $key => $value) {
            if ($value == true && empty($value) == false && $value != "")
                $contents[$key] = json_encode($value);
        }
        unset($contents[""]);
        $contents["game_id"] = $game_id;
        $contents["update"] = date("Y-m-d H:i:s", time());
        $result = $this->{AbsEnumField::models}->update(AbsEnumModel::TABLE_PAYMENT_ITEMS, $contents, array("game_id" => $game_id));
        if ($result <= 0) {
            $result = $this->{AbsEnumField::models}->insert(AbsEnumModel::TABLE_PAYMENT_ITEMS, $contents);
        }
        if ($result > 0)
            echo Response::outResponseInit(Response::UPDATE_SUCCESS, array());
        else
            echo Response::outResponseInit(Response::UPDATE_FAILED, array());
        die;
    }

    public function paymentList() {
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
        $header_requested = $this->get_header();
        $params = array_merge($params, $header_requested);

        $this->captureRequest($params, "", $this->get_remote_ip());
        /*
        $needle = array('q', 'app', 'otp', 'token');
        if (!is_required($params, $needle) == TRUE) {
            $diff = array_diff(array_values($needle), array_keys($params));
            echo Response::outResponse(Response::INVALID_PARAMS, $diff, $params['app'], "json");
            die;
        }
        foreach ($params as $k => $v) {
            if (!in_array($k, $needle)) {
                unset($params[$k]);
            }
        }
        */
        $q = $params["q"];
        $otp = $params["otp"];
        $appid = $params["app"];

        if ($q == true) {
            $inputData = $this->decrypt($q, $this->hash_secret_key($appid));
            $endjson = json_encode($inputData);
            $encrypt = $this->encrypt($endjson);
            //edit
            /*
			if ($encrypt == false) {
                echo Response::outResponse(Response::INVALID_DATA, array(), $appid, "json");
                die;
            }
            */
        }


        $token = trim($params['token']);

        $access_token = $inputData["access_token"];
        unset($params['token'], $params["app"]);
        $source = implode('', $params);
        $valid = md5($source . $this->hash_secret_key($appid));

        if ($valid != $token) {
            //edit
            //echo Response::outResponse(Response::INVALID_TOKEN, array("source" => $source, "valid" => $valid, "token" => $token), $appid);
            //die;
        }



        //verify access_token

		
        if (empty($access_token) == true || strtolower($access_token) == 'empty') {
            //edit
            //echo Response::outResponse(Response::INVALID_ACCESS_TOKEN, array("access_token" => $access_token), $appid);
            //die;
        }
		

        $verify = $this->verify_access_token($appid, $access_token);
		
        if ($verify === FALSE) {
            //edit
            //echo Response::outResponse(Response::INVALID_ACCESS_TOKEN, array("access_token" => $access_token), $appid);
            //die;
        }

        $game_id = $appid;
        $params = $inputData;
        $params['app'] = $appid;
        //khoi tao du liệu game
        //load cache
        $queryResult = $this->{AbsEnumField::models}->get_where_config(array("service_id" => $game_id));

        $guide = json_decode($queryResult["guide"], true);
        $paylist = json_decode($queryResult["payplist"], true);
        unset($queryResult["id"], $queryResult["service_id"], $queryResult["guide"], $queryResult["payplist"]);
        //$queryResult["payment"] = $paylist;
        //$this->DataResponses = $queryResult;
        header('Content-type: application/json');

        $this->DataResponses = $this->paymentProcessList($params);

        //header('Content-Type: application/json');
        $datainit = array(
            "desc" => "",
            "options" => array(
                "browser" => "inside",
                "link" => ""
            ),
            "action" => "pay_wap",
            "data" => ""
        );
        $needle = array('platform', 'channel_cfg', 'version');
        if (is_required($params, $needle) == TRUE) {
            preg_match("/[^|]*_\d\w+/", $params['channel_cfg'], $findchannel);
            $findchannel = explode("_", $findchannel[0]);
            $this->gsv_id = $findchannel[0] . "_" . $findchannel[1];


            if (!empty($findchannel[1]) && $findchannel[2] == 'store') {
                $param = array(
                    'gsv_id' => $this->gsv_id, // msv_id
                    'service_id' => $game_id, //service_id
                    'platform' => $params['platform'],
                );
                $reposongame = $this->{AbsEnumField::models}->get_where($param);

                if (!empty($reposongame) && isset($reposongame)) {
                    $result = $reposongame;
                    //show view content
                    if (!empty($result[0]['status']) && $result[0]['status'] == 'approving' && $findchannel[2] != 'file') {
                        $datainit['options']['link'] = $guide['url'];
                        unset($guide['url']);
                        array_splice($this->DataResponses['data'], 0, 0, array(array_merge($datainit, $guide)));

						
                        echo Response::outResponse(Response::PAYMENT_LIST_SUCCESS, $this->DataResponses, $appid);
                        die;
                    }
                }
            }
        }
        $datainit['options']['link'] = $paylist['url'];
        unset($paylist['url']);
        array_splice($this->DataResponses['data'], 0, 0, array(array_merge($datainit, $paylist)));
		
		
        echo Response::outResponse(Response::PAYMENT_LIST_SUCCESS, $this->DataResponses, $appid);
        die;
    }

    public function is_JSON() {
        call_user_func_array('json_decode', func_get_args());
        return (json_last_error() === JSON_ERROR_NONE);
    }

    public function paymentProcessList($params = null) {
        if (empty($params) || empty($params['app']) || empty($params["lang"])) {
            return null;
        }
        //init
        $lang = $params['lang'];
        $game_id = $params['app'];
        $param = array(
            'game_id' => $game_id,
        );

        $DataResponses = array();
        $DataReturn = array();

        //cached
        $keycached = __FUNCTION__ . $game_id . date("Ymd", time());
        //$DataResponses = $this->getMemcache($keycached);
        if ($DataResponses == false) {
            $DataResponses = $this->{AbsEnumField::models}->get_where_payment($param);
            $this->saveMemcache($keycached, $DataResponses, 600);
        }

        if (empty($DataResponses)) {
            return false;
        }
        $game_currency = json_decode($DataResponses['game_currency'], true)[$lang];
        $money_currency = json_decode($DataResponses['money_currency'], true)[$lang];
        $game_title = json_decode($DataResponses['game_title'], true)[$lang];
        $DataResponses = str_replace('{game_currency}', $game_currency, $DataResponses);
        $DataResponses = str_replace('{money_currency}', $money_currency, $DataResponses);

        foreach ($DataResponses as $k => $v) {
            if ($this->is_JSON($v)) {
                $DataResponses[$k] = json_decode($v, true);
            }
        }
        $DataReturn = $DataResponses[$this->inapp_key[$params['platform']]['key']];
        //data init

        if (!empty($this->country[$lang]))
            $this->lang->load("backend", $lang);

        $DataReturn['response'] = array("title" => $game_title, "desc" => $this->lang->line("methodpay"), "icon" => $this->icon_payment, "options" => array("hotline" => ""), "action" => "list", "data" => "", "route" => array("country" => $this->country[$params['lang']], "language" => $params['lang'], "type" => "local"));

        //$datainit = array("title" => $this->inapp_key[$params['platform']]['value'],"desc" => "","icon" => $this->icon_payment,"identify" => "global_{$this->inapp_key[$params['platform']]['key']}","options" => "","action" => "list","data" => "");
        $datainit = array();
        $paramsinit = array("title" => "", "right_title" => "", "desc" => "", "icon" => $this->icon_payment, "options" => array("code" => "", "confirm" => $this->lang->line("continue"), "transaction_id" => ""), "action" => "pay_inapp", "data" => "", "money" => "");

        $params_reponse = array();
        if ($DataReturn['items']) {
            foreach ($DataReturn['items'] as $k => $v) {
                $paramsinit['title'] = $this->lang->line("buy") . " " . $v['description'];
                $paramsinit['right_title'] = $v['identify'];
                $paramsinit['desc'] = $v['message'];
                $paramsinit['options']['code'] = ($DataReturn["title"][$lang] . "." . intval($v['identify'] + 0.01));
                $paramsinit['money'] = $v['identify'];
                array_push($params_reponse, $paramsinit);
            }
        }
        //$datainit['data'] = $params_reponse;
        $datainit = $params_reponse;
        //$DataReturn['response']['data'][] = $datainit;
        $DataReturn['response']['data'] = $datainit;

        return $DataReturn['response'];
    }

    function array_insert(&$array, $position, $insert) {
        if (is_int($position)) {
            array_splice($array, $position, 0, $insert);
        } else {
            $pos = array_search($position, array_keys($array));
            $array = array_merge(
                    array_slice($array, 0, $pos), $insert, array_slice($array, $pos)
            );
        }
    }

    public function init($version = 0) {


        $needle = array('platform', 'version');
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
        /* $header_requested = $this->get_header();
          $params = array_merge($params,$header_requested);

          $needle = array('q','app','otp','token');
          if (!is_required($params, $needle) == TRUE) {
          $diff = array_diff(array_values($needle), array_keys($params));
          echo Response::outResponse(Response::INVALID_PARAMS,$diff);
          die;
          }
          foreach($params as $k=>$v){
          if(!in_array($k,$needle)){
          unset($params[$k]);
          }
          }
         */
        $this->captureRequest($params, "", $this->get_remote_ip());
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

        if ($valid != $token) {
            echo Response::outResponseInit(Response::INVALID_TOKEN, array("source" => $source, "valid" => $valid, "token" => $token));
            die;
        }

        $game_id = $appid;
        $params = $inputData;

        //khoi tao du liệu game        
        //load cache        

        $queryResult = $this->{AbsEnumField::models}->get_where_config(array("service_id" => $game_id));
        $guide = json_decode($queryResult["guide"], true);
        $paylist = json_decode($queryResult["payplist"], true);
        unset($queryResult["id"], $queryResult["service_id"], $queryResult["guide"], $queryResult["payplist"]);
        //$queryResult["payment"] = $paylist;

        $this->DataResponses = array();

        if ($inputData['platform'] == 'ios' && $appid == 1001 && $inputData['channel'] == 'channel_test') {
            $this->DataResponses = array(
                "forgot" => "http://id.doden888.net/quen-mat-khau-wap.html/",
                "event" => "https://sev.bai88.net/v1.0/home.htm/",
                "support" => "http://live.addgold.net:1337/support/index/",
                "privacypolicy" => "http://bai.doden888.com/privacypolicy/",
                "float_button" => true,
                "link" => "http://bai88.net/",
                "message" => "Vui lòng quay lại sau !"
            );
            echo Response::outResponseInit(Response::FORCE_UPDATE_STATE, $this->DataResponses);
            die;
        } elseif ($inputData['platform'] == 'wp' && $appid == 1001 && $inputData['channel'] == '4|me|1.0.0|WPstore|msv_34_store') {
            $this->DataResponses = array(
                "forgot" => "http://id.doden888.net/quen-mat-khau-wap.html/",
                "event" => "https://sev.bai88.net/v1.0/home.htm/",
                "support" => "http://live.addgold.net:1337/support/index/",
                "privacypolicy" => "http://bai.doden888.com/privacypolicy/",
                "float_button" => true,
                "link" => "http://bai88.net/",
                "message" => "Vui lòng quay lại sau !"
            );
            echo Response::outResponseInit(Response::FORCE_UPDATE_STATE, $this->DataResponses);
            die;
        }


        $this->DataResponses = $queryResult;
        $this->DataResponses['float_button'] = true;

        if (is_required($params, $needle) == TRUE) {

            if (!empty($params['channel_cfg']) && $params['channel_cfg'] != 'empty') {
                preg_match("/[^|]*_\d\w+/", $params['channel_cfg'], $findchannel);
            } else {
                preg_match("/[^|]*_\d\w+/", $params['channel'], $findchannel);
            }

            //preg_match("/[^|]*_\d\w+/", $params['channel'], $findchannel);
            $findchannel = explode("_", $findchannel[0]);
            $this->gsv_id = $findchannel[0] . "_" . $findchannel[1];
            if (empty($findchannel) || empty($findchannel[0])) {
                echo Response::outResponseInit(Response::NORMAL_STATE, $this->DataResponses);
                die;
            } elseif (!empty($findchannel[1])) {
                $param = array(
                    'gsv_id' => $this->gsv_id, // msv_id
                    'service_id' => $game_id, //service_id
                    'platform' => $params['platform'],
                );

                $reposongame = $this->{AbsEnumField::models}->get_where($param);
                if (!empty($reposongame) && isset($reposongame)) {
                    $result = $reposongame;
                    //show view content
                    $this->DataResponses['float_button'] = $result[0]['me_button'] == 'on';

                    if (!empty($result[0]['msg_login']))
                        $msg_login = json_decode($result[0]['msg_login'], true);
                    if (!empty($result[0]['status']) && $result[0]['status'] == 'approving' && $findchannel[2] != 'file') {
//                        $this->DataResponses["code"] = 400000;
//                        $this->DataResponses["desc"] = AbsEnumField::NORMAL_STATE;
//                        $this->DataResponses["message"] = $msg_login['message'];
//                        $queryResult["payment"] = $paylist;
                        $this->DataResponses["payment"] = $guide;
                        /*
                         * * tai vi chi thay doi trang thai on/off float_button va link paymentlist thanh huong dan nap
                         * * description va code van giu normal cho mdk
                         */
                        echo Response::outResponseInit(Response::NORMAL_STATE, $this->DataResponses);
                        die;
                    } else {
                        if (!empty($result[0]['state']) && $result[0]['state'] == "FORCE_UPDATE_STATE") {
                            //if (!empty($result[0]['state']) && $result[0]['state'] == Response::getKeyName(Response::FORCE_UPDATE_STATE)) {
//                            $this->DataResponses["code"] = 400001;
//                            $this->DataResponses["desc"] = AbsEnumField::FORCE_UPDATE_STATE;
                            $this->DataResponses = array_merge($this->DataResponses, array(
                                "link" => $msg_login['link'],
                                "message" => $msg_login['message']
                            ));
                            //$this->DataResponses["message"] = $msg_login['message'];
                            echo Response::outResponseInit(Response::FORCE_UPDATE_STATE, $this->DataResponses);
                            die;
                        } else {
                            $parammsg = array(
                                'service_id' => $game_id, //service_id
                                'platform' => $params['platform'],
                            );
                            $reposonupdate = $this->{AbsEnumField::models}->get_where_message($parammsg);
                            if (!empty($reposonupdate) && isset($reposonupdate)) {
                                $msg_login = $reposonupdate[0]['msg_link'];
//                                $this->DataResponses["code"] = 400002;
//                                $this->DataResponses["desc"] = AbsEnumField::INFORMATION_UPDATE_STATE;
                                $this->DataResponses = array_merge($this->DataResponses, array(
                                    "link" => $msg_login['link'],
                                    "message" => $msg_login['message']
                                ));
                                //$this->DataResponses["message"] = $msg_login['message'];
                                echo Response::outResponseInit(Response::INFORMATION_UPDATE_STATE, $this->DataResponses);
                                die;
                            }
                        }
                    }
                }
            }
        }
        echo Response::outResponseInit(Response::NORMAL_STATE, $this->DataResponses);
        die;
    }

    public function reqdm($version) {
        switch ($version) {
            case "1.0":
                echo json_encode(array(
                    "graph" => "https://graph.addgold.net/",
                    "plist" => "https://plist.addgold.net/",
                    "cdn" => "https://cdn.addgold.net/",
                    "tk" => "https://tk.addgold.net/",
                    "pmt" => "https://pmt.addgold.net/",
                    "support" => "https://support.addgold.net/",
                    "ck" => "https://ck.addgold.net/",
                ));
                break;
            default :
                echo json_encode(array(
                    "graph" => "https://graph.addgold.net/",
                    "plist" => "https://plist.addgold.net/",
                    "cdn" => "https://cdn.addgold.net/",
                    "tk" => "https://tk.addgold.net/",
                    "pmt" => "https://pmt.addgold.net/",
                    "support" => "https://support.addgold.net/",
                    "ck" => "https://ck.addgold.net/",
                ));
                break;
        }
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

    function get_header() {
        $headers = array();
        foreach ($_SERVER as $key => $value) {
            if (strpos($key, 'HTTP_') === 0) {
                $headers[strtolower(str_replace(' ', '', ucwords(str_replace('_', ' ', strtolower(substr($key, 5))))))] = $value;
            }
        }
        return $headers;
    }

}
