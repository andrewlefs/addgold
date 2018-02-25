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

abstract class Client implements ClientInterface {

//    private $api_url_payment = 'http://gapi.mobo.vn/';
//    private $api_url_data = 'http://gapi.mobo.vn/';
    protected $app = 'graph.dxglobal.net';
    protected $secret = 'YAtSTMfEAP';

    /**
     * @var string
     */
    const DEFAULT_GRAPH_BASE_DOMAIN = 'addgold.net';

    /**
     * @var string
     */
    protected $defaultLastLevelDomain = 'pmt';

    /**
     * @var RequestInterface
     */
    protected $requestPrototype;

    /**
     * @var ResponseInterface
     */
    protected $responsePrototype;

    /**
     * @var Headers
     */
    protected $defaultRequestHeaders;

    /**
     * @var AdapterInterface
     */
    protected $adapter;

    /**
     * @var string
     */
    protected $caBundlePath;

    /**
     *
     * @var type string
     */
    protected $caBundleName;

    /**
     * @var string
     */
    protected $defaultBaseDomain = self::DEFAULT_GRAPH_BASE_DOMAIN;

    /**
     *
     * @var type boolean
     */
    protected $sslVerifypeer = false;

    /**
     * @return RequestInterface
     */
    public function getRequestPrototype() {
        if ($this->requestPrototype === null) {
            $this->requestPrototype = new Request($this);
        }

        return $this->requestPrototype;
    }

    function getSslVerifypeer() {
        return $this->sslVerifypeer;
    }

    /**
     * 
     * @param boolean $sslVerifypeer
     */
    function setSslVerifypeer($sslVerifypeer = false) {
        $this->sslVerifypeer = $sslVerifypeer;
    }

    /**
     * 
     * @return type string
     */
    public function getCaBundleName() {
        return $this->caBundleName;
    }

    /**
     * 
     * @param string $caBundleName
     */
    public function setCaBundleName($caBundleName) {
        $this->caBundleName = $caBundleName;
    }

    /**
     * @param RequestInterface $prototype
     */
    public function setRequestPrototype(RequestInterface $prototype) {
        $this->requestPrototype = $prototype;
    }

    /**
     * @return RequestInterface
     */
    public function createRequest() {
        return $this->getRequestPrototype()->createClone();
    }

    /**
     * @return ResponseInterface
     */
    public function getResponsePrototype() {
        if ($this->responsePrototype === null) {
            $this->responsePrototype = new Response();
        }

        return $this->responsePrototype;
    }

    public function setApp($app) {
        $this->app = $app;
    }

    public function getApp() {
        return $this->app;
    }

    public function setSecret($secret) {
        $this->secret = $secret;
    }

    public function getSecret() {
        return $this->secret;
    }

    /**
     * @param ResponseInterface $prototype
     */
    public function setResponsePrototype(ResponseInterface $prototype) {
        $this->responsePrototype = $prototype;
    }

    /**
     * @return ResponseInterface
     */
    public function createResponse() {
        return clone $this->getResponsePrototype();
    }

    /**
     * @return Headers
     */
    public function getDefaultRequestHeaderds() {
        if ($this->defaultRequestHeaders === null) {
            $this->defaultRequestHeaders = new Headers(array(
            ));
        }

        return $this->defaultRequestHeaders;
    }

    /**
     * @param Headers $headers
     */
    public function setDefaultRequestHeaders(Headers $headers) {
        $this->defaultRequestHeaders = $headers;
    }

    /**
     * @return string
     */
    public function getDefaultBaseDomain() {
        return $this->defaultBaseDomain;
    }

    /**
     * @return string
     */
    public function getDefaultLastLevelDomain() {
        return $this->defaultLastLevelDomain;
    }

    /**
     * @param string $domain
     */
    public function setDefaultLastLevelDomain($lsst_domain) {
        $this->defaultLastLevelDomain = $lsst_domain;
    }

    /**
     * @param string $domain
     */
    public function setDefaultBaseDomain($domain) {
        $this->defaultBaseDomain = $domain;
    }

    /**
     * @return AdapterInterface
     */
    public function getAdapter() {
        if ($this->adapter === null) {
            $this->adapter = new CurlAdapter($this);
        }

        return $this->adapter;
    }

    /**
     * @return string
     */
    public function getCaBundlePath() {
        if ($this->getSslVerifypeer() === false)
            return false;
        if ($this->caBundlePath === null) {
            $this->caBundlePath = __DIR__ . DIRECTORY_SEPARATOR                    
                    . $this->getCaBundleName();
        }

        return $this->caBundlePath;
    }

    /**
     * @param string $path
     */
    public function setCaBundlePath($path) {
        $this->caBundlePath = $path;
    }

    /**
     * @param RequestInterface $request
     * @return ResponseInterface
     * @throws RequestException
     */
    public function sendRequest(RequestInterface $request) {
        //var_dump($request);die;
        $response = $this->getAdapter()->sendRequest($request);
        $response->setRequest($request);
        $response_content = $response->getContent();

        if ($response_content === null) {
            throw new EmptyResponseException($response->getStatusCode());
        }


        if (is_array($response_content) && array_key_exists('error', $response_content)) {

            throw RequestException::create(
                    $response->getContent(), $response->getStatusCode());
        }
        //xử lý data tại bước này


        return $response;
    }

}
