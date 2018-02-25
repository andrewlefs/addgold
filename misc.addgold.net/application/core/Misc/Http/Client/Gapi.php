<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace GraphApi\Http\Client;

use GraphApi\Http\Client\ClientCurl;
use GraphApi\Http\RequestInterface;
use GraphApi\Http\Request;
use GraphApi\Http\ResponseInterface;
use GraphApi\Http\Headers;
use GraphApi\Http\Client\ClientInterface;
use GraphApi\Http\Parameters;
use GraphApi\Object\Fields\SendItemFields;
use GraphApi\Http\Client\Client;
use GraphApi\Http\Adapter\CurlAdapter;
use GraphApi\Http\Response;

class Gapi extends Client implements ClientInterface {

//    private $api_url_payment = 'http://gapi.mobo.vn/';
//    private $api_url_data = 'http://gapi.mobo.vn/';    
//    const APP = 'game';
//    const SECRET = 'IDpCJtb6Go10vKGRy5DQ';
    public function __construct() {
        $this->setApp("game");
        $this->setSecret("IDpCJtb6Go10vKGRy5DQ");
    }

    /**
     * @var string
     */
    const DEFAULT_GRAPH_BASE_DOMAIN = 'mobo.vn';

    /**
     * @var string
     */
    const DEFAULT_LAST_LEVEL_DOMAIN = 'gapi';

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
     * @var string
     */
    protected $defaultGraphBaseDomain = self::DEFAULT_GRAPH_BASE_DOMAIN;

    /**
     * @return RequestInterface
     */
    public function getRequestPrototype() {
        if ($this->requestPrototype === null) {
            $this->requestPrototype = new Request($this);
        }

        return $this->requestPrototype;
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
    public function getDefaultGraphBaseDomain() {
        return $this->defaultGraphBaseDomain;
    }

    /**
     * @param string $domain
     */
    public function setDefaultGraphBaseDomain($domain) {
        $this->defaultGraphBaseDomain = $domain;
    }

    /**
     * @param RequestInterface $request
     * @return ResponseInterface
     * @throws RequestException
     */
    public function sendRequest(RequestInterface $request) {

        //sign token
        $data = $request->getQueryParams()->getArrayCopy();

        $control = $data[SendItemFields::CONTROL];
        $function = $data[SendItemFields::FUNC];
        $app = $data[SendItemFields::APP];
        unset($data[SendItemFields::CONTROL], $data[SendItemFields::FUNC], $data[SendItemFields::APP]);

        $source = implode("", $data);
        $token = md5($source . $this->getSecret());

        $data[SendItemFields::CONTROL] = $control;
        $data[SendItemFields::FUNC] = $function;
        $data[SendItemFields::APP] = $app;
        $data[SendItemFields::TOKEN] = $token;

        $params = new Parameters();
        $params->enhance($data);

        $request->setQueryParams($params);

        $response = (new CurlAdapter($this))->sendRequest($request);
        //$response = $this->sendRequest($request);
        //xử lý data tại bước này
        //var_dump($response);die;
        $body = $response->getBody();
        if (json_decode($body) == true)
            return json_decode($body);
        else if (is_string($body))
            return $body;
        else
            throw new Exception($curl_error, $curl_errno);
    }

}
