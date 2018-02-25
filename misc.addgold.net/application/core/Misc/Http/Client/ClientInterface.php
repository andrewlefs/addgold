<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace GraphApi\Http\Client;

use GraphApi\Http\RequestInterface;
use GraphApi\Http\ResponseInterface;
use GraphApi\Http\Headers;

interface ClientInterface {

    public function getRequestPrototype();

    /**
     * @param RequestInterface $prototype
     */
    public function setRequestPrototype(RequestInterface $prototype);

    /**
     * @return RequestInterface
     */
    public function createRequest();

    /**
     * @return ResponseInterface
     */
    public function getResponsePrototype();

//    /**
//     * @param ResponseInterface $prototype
//     */
    public function setResponsePrototype(ResponseInterface $prototype);

    /**
     * @return ResponseInterface
     */
    public function createResponse();

    /**
     * @return Headers
     */
    public function getDefaultRequestHeaderds();

    /**
     * @param Headers $headers
     */
    public function setDefaultRequestHeaders(Headers $headers);

    /**
     * @return string
     */
    public function getDefaultGraphBaseDomain();

    /**
     * @param string $domain
     */
    public function setDefaultGraphBaseDomain($domain);

        /**
     * @param RequestInterface $request
     * @return ResponseInterface
     * @throws RequestException
     */
    public function sendRequest(RequestInterface $request);
}
