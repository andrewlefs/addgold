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
use Payment\Http\Client\Client;

class WindowClient extends Client  implements ClientInterface {

    public function __construct() {        
        $this->setDefaultBaseDomain("microsoft.com");
        $this->setDefaultLastLevelDomain("lic.apps");      
        $this->getRequestPrototype()->setProtocol("https://");
    }
    
}
