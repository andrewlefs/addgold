<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * Author: NghiaPQ
 */

class VerifyIPAddress {

    private $url_global_verify = "http://www.geoplugin.net/json.gp?ip=";
    private $countryCode = array('VN');

    public function __construct() {
        
    }

    /*
     */

    public function Verify($ip = "", $account) {
        if (empty($ip)) {
            $ip = $_SERVER['REMOTE_ADDR'];
        }
        $channel = $_GET['channel'];
        if (isset($_GET['platform']))
            $platform = $_GET['platform'];
        else
            $platform = $_GET['useragent'];
        $channel = urldecode($channel);
        $split = explode("|", $channel);
        $app_provider_id = $split[0];
        $provider = $account['provider'];
        $refcode = $split[1];
        $version = $_GET['version'];
        //rule chi apply cho version moi su dung cho apply duyet
        if ($version < "1.3.0")
            return true;

        $result = file_get_contents($this->url_global_verify . $ip);

        //FALSE đóng sms card mở inapp
        //TRUE đóng inapp mở sms card
        if (empty($result)) {
            return FALSE;
        } else {
            $jsonresult = json_decode($result);
            $created = new DateTime($account['date_create']);
            $lastlogin = new DateTime($account["last_login_time"]);
            $date = new DateTime('2014-10-15 00:00:00');            
            $mlastlogin = $date->diff($lastlogin)->m;

            if (!empty($account) && strtolower($account['account']) == 'appletest01' && strtolower($platform) != 'android') {
                return FALSE;
            }            
           
            if (($provider == 2 || $app_provider_id == 2) && strtolower($platform) != 'android') {
                if (!in_array(strtoupper($jsonresult->geoplugin_countryCode), $this->countryCode)) {
                    //return FALSE;
                    if ($created > $date) {
                        //là user mới                        
                        return false;
                    } else {
                        //là user cũ
                        return $mlastlogin == 0;
                    }
                }
            }
        }
        return TRUE;
    }

}

?>