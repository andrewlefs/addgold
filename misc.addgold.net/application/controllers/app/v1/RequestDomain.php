<?php

require_once APPPATH . 'controllers/app/v1/autoloader.php';
require_once APPPATH . 'core/EI_Controller.php';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

use Payment\Http\DataReceivers;
use Payment\Authorize;
use Payment\Http\HeaderReceivers;
use Payment\Security;
use Payment\Object\Values\ReturnRequest;
use Payment\Object\Fields\HeaderField;
use Payment\Object\Values\SecretKeyList;
use Payment\Object\Values\App;

class RequestDomain extends EI_Controller {

    public function __construct() {
        parent::__construct();
        $this->receive = new DataReceivers();
    }

    public function DomainList() {
        $datas = $this->receive->getArrayCopy();
        $headers = (new HeaderReceivers())->getArrayCopy();
        $author = (new Authorize())->ValidateAuthorizeRequest($datas, $headers);
        $this->captureRequest($headers, "", $this->get_remote_ip());
        if ($author->getCode() == ReturnRequest::AUTHORIZE_SUCCESS || true) {
            $params = $this->ParseParams($datas, $headers);

            $author->setApp($headers[HeaderField::APP]);
            $author->setCode(ReturnRequest::REQUEST_SUCCESS);
            switch ($headers[HeaderField::APP]) {
                case App::BAN_CA:
                    $author->setData(array("data" => array(
                            "graph" => "https://graph.addgold.net/",
                            "plist" => "https://misc.addgold.net/payment/",
                            "cdn" => "https://cdn.addgold.net/",
                            "tk" => "https://tk.addgold.net/",
                            "ck" => "https://ck.addgold.net/",
                    )));
                    break;
                case App::DO_DEN:
                    $author->setData(array("data" => array(
                            "graph" => "https://graph.addgold.net/",
                            "plist" => "https://misc.addgold.net/payment/",
                            "cdn" => "https://cdn.addgold.net/",
                            "tk" => "https://tk.addgold.net/",
                            "ck" => "https://ck.addgold.net/",
                    )));
                    break;
                case App::PORTAL:
                    $author->setData(array("data" => array(
                            "graph" => "https://graph.addgold.net/",
                            "plist" => "https://misc.addgold.net/payment/",
                            "cdn" => "https://cdn.addgold.net/",
                            "tk" => "https://tk.addgold.net/",
                            "ck" => "https://ck.addgold.net/",
                    )));
                    break;
                case App::BAN_CA_TOU:
                    $author->setData(array("data" => array(
                            "graph" => "https://graph.addgold.net/",
                            "plist" => "http://misc.addgold.net/payment/",
                            "cdn" => "https://cdn.addgold.net/",
                            "tk" => "https://tk.addgold.net/",
                            "ck" => "http://ck.addgold.net/",
                    )));
                    break;
                default:
                    $author->setData(array("data" => array(
                            "graph" => "https://graph.addgold.net/",
                            "plist" => "https://misc.addgold.net/payment/",
                            "cdn" => "https://cdn.addgold.net/",
                            "tk" => "https://tk.addgold.net/",
                            "ck" => "https://ck.addgold.net/",
                    )));
                    break;
            }
            $author->OutOfJsonResponse();
        } else {
            $author->OutOfJsonResponse();
        }
    }

    public function ParseParams(array $datas, array $headers) {
        $appid = $headers[HeaderField::APP];
        $otp = $headers[HeaderField::OTP];
        $token = $headers[HeaderField::TOKEN];
        $secret = new SecretKeyList();
        $hashkey = $secret->getSecretKey($appid);
        $q = $datas["q"];
        return Security::decrypt($q, $hashkey);
    }

}
