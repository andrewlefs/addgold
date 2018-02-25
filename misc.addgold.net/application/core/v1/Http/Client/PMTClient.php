<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Misc\Http\Client;

use Misc\Http\Client\ClientCurl;
use Misc\Http\RequestInterface;
use Misc\Http\Request;
use Misc\Http\ResponseInterface;
use Misc\Http\Headers;
use Misc\Http\Client\ClientInterface;
use Misc\Http\Parameters;
use Misc\Http\Adapter\CurlAdapter;
use Misc\Http\Response;
use Misc\Http\Exception\EmptyResponseException;
use Misc\Http\Exception\RequestException;
use Misc\Security;
use Misc\Api;
use Misc\Http\OneTimePassword;

class PMTClient extends Client implements ClientInterface {

    protected $accessKey;

    public function __construct() {
        $this->setDefaultBaseDomain("addgold.net");
        $this->setDefaultLastLevelDomain("pmt");
    }

    public function getAccessKey() {
        return $this->accessKey;
    }

    public function setAccessKey($accessKey) {
        $this->accessKey = $accessKey;
    }

    public function getEndPoint() {
        return __CLASS__;
    }

    public function sendRequest(RequestInterface $request) {
        $method = $request->getMethod();
        $params = array();
        if ($method === RequestInterface::METHOD_POST && $request->getBodyParams()->count()) {
            $params = array_merge($params, $request->getBodyParams()->export());
        }
        if ($method === RequestInterface::METHOD_GET && $request->getQueryParams()->count()) {
            $params = array_merge($params, $request->getQueryParams()->export());
        }
        $tokenData = implode("", $params);
        $params["app"] = $this->getApp();
        $params["token"] = md5($tokenData . $this->getSecret());
        //var_dump($params);die;
        $request->setQueryParams((new Parameters())->enhance($params));
        return parent::sendRequest($request);
    }

    /**
     * 
     * @param array $params
     * @return Response
     */
    public function getCommitRequest(array $params) {
        //send request to server                
        $response = $this->getApi()->call(array("control" => "adapter", "func" => "verify_momo"), "GET", $params);
        //Object response form request by class http Response            
        return $response;
    }

    /**
     * 
     * @param array $params
     * @return Response
     */
    public function verifyCard(array $params) {
        //send request to server
        $response = $this->getApi()->call(array("control" => "adapter", "func" => "verify_card"), "GET", $params);
        return $response;
    }

    /**
     * 
     * @param array $params
     * @param boolean $cache
     * @return boolean
     * @throws \Exception
     */
    public function getPaymentList(array $params, $cache = true) {

        $params = array_merge($params, array(
            "channel" => "1|me|ref|1.0",
            "platform" => "web",
            "user_agent" => $_SERVER["HTTP_USER_AGENT"],
            "ip" => $_SERVER["REMOTE_ADDR"],
            "lang" => "vi",
            "telco" => "vietname",
            "info" => '{"character_id":"1694489933","character_name":"Laozaza","server_id":"169028"}',
            "version" => '1.0.0'
        ));

        $keyId = $this->getController()->getMemcacheObject()->genCacheId(__CLASS__ . __FUNCTION__);
        $result = $this->getController()->getMemcacheObject()->getMemcache($keyId, $this->getEndPoint());
        //send request to server
        if ($result == false || $cached == false) {
            $response = $this->getApi()->call(array("control" => "adapter", "func" => "payment_list"), "GET", $params);

            //Object response form request by class http Response
            $contents = $response->getContent();
//var_dump($contents);die;
            if (is_array($contents) === true) {
                if (\hash_equals($contents["code"], 110)) {
                    $result = $contents["data"];
                    $this->getController()->getMemcacheObject()->saveMemcache($keyId, $result, $this->getEndPoint(), 24 * 3600);
                } else {
                    return false;
                }
            } else {
                throw new \Exception(
                'Get user info failed is class ' . get_class($this) . ' position function ' . __FUNCTION__);
            }
        }
        return $result;
    }

    public function getBankRequest(array $params) {        
        return $this->getApi()->call(array("control" => "adapter", "func" => "get_link_banking"), "GET", $params);
    }

    /**
     * 
     * @param type $access_token
     * @param type $channel
     * @param type $platform
     * @param type $user_agent
     * @param type $ip
     * @param type $lang
     * @param type $version
     * @return boolean
     * @throws \Exception
     */
    public function getBalance($access_token, $channel, $platform, $user_agent, $ip, $lang, $version) {

        //prepare param body request
        $params = args_with_keys(get_defined_vars());

        //send request to server
        $response = $this->getApi()->call(
                /* path control */
                array("control" => "adapter", "func" => "balance")
                //method
                , "GET"
                //body parameter request
                , $params
        );

        //Object response form request by class http Response
        $contents = $response->getContent();
        if (is_array($contents) === true) {
            if (\hash_equals($contents["code"], 110)) {
                return $contents["data"];
            } else {
                return false;
            }
        } else {
            throw new \Exception(
            'Get user info failed is class ' . get_class($this) . ' position function ' . __FUNCTION__);
        }
    }

}
