<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


require_once APPPATH . 'core/EI_Controller.php';
require_once APPPATH . 'controllers/v1/autoloader.php';

//require_once APPPATH . 'controllers/graphs/v10/autoloader.php';

class home extends EI_Controller {

    public function __construct() {
        parent::__construct();
    }

    public function index($appid = 0) {
        switch ($appid) {
            default :
                echo "Wellcome";
                die;
                break;
        }
    }

    public function querystring() {
//        echo '{"scheme":"openfullscreen","rotatory":false,"url":"https:\/\/misc.mobo.vn\/page\/querystring?access_token=eyJpZGVudGlmeSI6Ijc5MzgxNDU5MTY4NDY5NCIsIm1vYm9faWQiOiI1OTE2ODQ2OTQiLCJtb2JvX3NlcnZpY2VfaWQiOiIxMDYxNTMxMzQwNTMyMjk1OTY0IiwiaXNfZmlyc3QiOmZhbHNlLCJoYXNoIjoiOGJkMzBlZGNiOWYyYzE1OWQ4N2VjMWRmNWI1NjJiMGUifQ%3D%3D&info=%7B%22character_id%22%3A%22752744220%22%2C%22character_name%22%3A%22NTNpro%22%2C%22server_id%22%3A%2299%22%7D&channel=4%7Cme%7C1.0.0%7CWPstore%7Cmsv_34_store&version=1.5.5.0&sdk_version=1.2.6.1&device_id=UFnjLnb4q%2FsPYoykVu8qZuTxSHg%3D&app=mgh&telco=VIETTEL&user_agent=12345&platform=wp&ip=192.168.1.8&package_name=02a4f876-9c10-443a-99b6-35ec338664d9&total_mem=951488512&version_os=8.10.14219.0&lang=vi&token=db53e087d2778cdf2d2b130fb180c0e7"}';
//        die;

        //$ipwhilelist = array("127.0.0.1", "14.161.5.226", "118.69.76.212", "115.78.161.88", "115.78.161.124", "115.78.161.134");



        //if (!in_array($_SERVER["REMOTE_ADDR"], $ipwhilelist)) {
        //   echo "Đang cập nhật";
        //    die;
        //}

        $this->init_settings("pages");
        $this->render("querystring");
    }

    public function global_querystring() {
//        echo '{"scheme":"openfullscreen","rotatory":false,"url":"https:\/\/misc.mobo.vn\/page\/querystring?access_token=eyJpZGVudGlmeSI6Ijc5MzgxNDU5MTY4NDY5NCIsIm1vYm9faWQiOiI1OTE2ODQ2OTQiLCJtb2JvX3NlcnZpY2VfaWQiOiIxMDYxNTMxMzQwNTMyMjk1OTY0IiwiaXNfZmlyc3QiOmZhbHNlLCJoYXNoIjoiOGJkMzBlZGNiOWYyYzE1OWQ4N2VjMWRmNWI1NjJiMGUifQ%3D%3D&info=%7B%22character_id%22%3A%22752744220%22%2C%22character_name%22%3A%22NTNpro%22%2C%22server_id%22%3A%2299%22%7D&channel=4%7Cme%7C1.0.0%7CWPstore%7Cmsv_34_store&version=1.5.5.0&sdk_version=1.2.6.1&device_id=UFnjLnb4q%2FsPYoykVu8qZuTxSHg%3D&app=mgh&telco=VIETTEL&user_agent=12345&platform=wp&ip=192.168.1.8&package_name=02a4f876-9c10-443a-99b6-35ec338664d9&total_mem=951488512&version_os=8.10.14219.0&lang=vi&token=db53e087d2778cdf2d2b130fb180c0e7"}';
//        die;
        $this->init_settings("pages");
        $this->render("global_querystring");
    }

}
