<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Payment\Http\Client;

use Payment\Http\Client\ClientCurl;
use Payment\Http\RequestInterface;
use Payment\Http\Request;
use Payment\Http\ResponseInterface;
use Payment\Http\Headers;
use Payment\Http\Client\ClientInterface;
use Payment\Http\Parameters;
use Payment\Http\Adapter\CurlAdapter;
use Payment\Http\Response;
use Payment\Http\Exception\EmptyResponseException;
use Payment\Http\Exception\RequestException;

class PaymentClient extends Client implements ClientInterface {

    public function __construct() {
        $this->setApp("graph.dxglobal.net");
        $this->setSecret("YAtSTMfEAP");
        $this->setDefaultLastLevelDomain("pmt");
    }

    public function getToken(RequestInterface $request) {
        //
        $params = $request->getQueryParams()->getArrayCopy();
        $paths = $request->getBornPath();
        $targets = array_merge($paths, $params);
        $targets["app"] = $this->app;        
        $targets["access_token"] = urldecode($params["access_token"]);
        return md5(implode("", $targets) . $this->secret);
    }

    /**
     * @param RequestInterface $request
     * @return ResponseInterface
     * @throws RequestException
     */
    public function sendRequest(RequestInterface $request) {
        $token = $this->getToken($request);        
        $queryParams = $request->getQueryParams();
        $queryParams["app"] = $this->app;
        $queryParams["token"] = $token;
        $request->setQueryParams($queryParams);
        return parent::sendRequest($request);
    }

}
