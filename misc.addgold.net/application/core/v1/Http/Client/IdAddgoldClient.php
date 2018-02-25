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
use Misc\Http\Client\Client;

class IdAddgoldClient extends Client implements ClientInterface {

    const APP = "game";
    const SECRET = "IDpCJtb6Go10vKGRy5DQ";
    const SERVICE_ID = 0;

    private $serviceId;

    public function __construct() {
        $this->setDefaultBaseDomain("addgold.net");
        $this->setDefaultLastLevelDomain("id");
        $this->setSslVerifypeer(false);
        $this->setApp(self::APP);
        $this->setSecret(self::SECRET);
    }

    public function getEndPoint() {
        return __CLASS__;
    }

    public function getApp() {
        return $this->app == null ? self::APP : $this->app;
    }

    public function getSecret() {
        return $this->secret == null ? self::SECRET : $this->secret;
    }

    public function getServiceId() {
        return $this->serviceId == null ? self::SERVICE_ID : $this->serviceId;
    }

    public function setServiceId($serviceId) {
        $this->serviceId = $serviceId;
    }

    public function getToken(RequestInterface $request) {
        //
        $params = $request->getQueryParams()->getArrayCopy();
        return md5(implode("", $params) . $this->secret);
    }

    /**
     * @param RequestInterface $request
     * @return ResponseInterface
     * @throws RequestException
     */
    public function sendRequest(RequestInterface $request) {
        $token = $this->getToken($request);
        $queryParams = $request->getQueryParams();
        $queryParams["app"] = $this->getApp();
        $queryParams["token"] = $token;
        $request->setQueryParams($queryParams);
        //var_dump($this);
        return parent::sendRequest($request);
    }

    public function getAccessToken($params) {
        $response = $this->getApi()->call("/v1.0/verify_code", "GET", $params);
        //Object response form request by class http Response
        //var_dump($response);die;
        $contents = $response->getContent();        
        if (is_array($contents) === true) {
            if ($contents["code"] == 100005) {
                return $contents["data"];
                //$this->getController()->getMemcacheObject()->saveMemcache($keyId, $result, $this->getEndPoint(), 1 * 3600);
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

}
