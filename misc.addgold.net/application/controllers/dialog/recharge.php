<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


require_once APPPATH . 'core/EI_Controller.php';

//require_once APPPATH . 'controllers/graphs/v10/autoloader.php';

class recharge extends EI_Controller {

    private $url_misc = "http://misc.addgold.net/?";

    public function __construct() {
        parent::__construct();
    }

    public function get_recharge_url($app ){
        switch ($app){
            case "1000":
                return "http://sev.banca888.net/dialog/v1.0/paylist/?";
            case "1001":
                return "https://sev.bai88.net/dialog/v1.0/paylist/?";
        }
    }
    public function guide($vesion = "1.0") {
        $params = $this->input->get();
        $alias = $this->map_alias($params["app"]);
        $this->data["alias"] = $alias;
        $this->data["helpdesk"] = "https://support.addgold.net/home/{$alias}/";
        $this->init_settings("pages/recharges/{$alias}");

        $q = $params["q"];
        $app = $params["app"];
//        echo "<pre>";
//        $q = $params["q"];
//        $otp = $params["otp"];
//        $requests = $this->decrypt($q, $this->guide($vesion));               
//        $endjson = json_encode($requests);
//        $encrypt = $this->encrypt($endjson);    
        //die;
//        print_r($params);
        $token = trim($params['token']);
        unset($params['token'], $params["app"]);
//        echo "<br>";
//        print_r(implode('', $params) . $this->hash_secret_key($app));
//        echo "<br>";
        $valid = md5(implode('', $params) . $this->hash_secret_key($app));

        //print_r($valid);
//        die;

        if ($token != $valid) {
            $this->data["error_message"] = 'Truy cập không hợp lệ ! <br><span class="bold">Xin vui lòng kiểm tra thông tin và thử lại</span>';
            $this->render("error");
        }
        //check điều kiện approving
        $decrypt = $this->decrypt($q, $this->hash_secret_key($app));
        //$decrypt["channel"] = "4|me|1.0.0|WPstore|gsv_2_store";

        //var_dump($decrypt);

        $platform = $decrypt["platform"];
        
		if(!empty($decrypt['channel_cfg']) && $decrypt['channel_cfg'] != 'empty'){
            $channel = $decrypt["channel_cfg"];
        }else{
            $channel = $decrypt["channel"];
        }
		
        $approving = false;
		//var_dump($platform);
		//var_dump($channel);
		//die;
        if (count($split = explode("gsv", $channel)) > 1) {
            //var_dump($split);die;
            $gsversion = explode("_", $split[1]);
            $version = $gsversion[1];
            $type = $gsversion[2];
            if (strtolower($type) == "store") {
                //tổ chức cache data
                $requests = array(
                    "control" => "inside",
                    "func" => "gsv_get",
                    "gsv_id" => "gsv_" .$version,
                    "service_id" => $app,
                    "platform" => $platform,
                    "limit" => 1
                );
                $url_request = $this->url_misc . http_build_query($requests);                
                $result = $this->request("GET", $url_request, array());
                $json_result = json_decode($result, true);
                if($json_result["code"] == 400000){
                    if(($data = $json_result["data"]) != null){
                        $approving = (strtolower($data[0]["status"]) === "approving");
                    };
                }
            }
        }

        if($approving === true){
            $this->render("guide");
        }else{
            //redirect to pay recharge
           //general url redirect
            $params["app"] = $app;
            $params['token'] = $token;
            $base_url = $this->get_recharge_url($app) . http_build_query($params);
            header("location: " . $base_url);
            die;
        }

        
    }

}
