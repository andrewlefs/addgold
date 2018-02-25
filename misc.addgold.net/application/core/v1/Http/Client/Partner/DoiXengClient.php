<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Misc\Http\Client\Partner;

use Misc\Http\Client\Client;
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
use Misc\Http\Util;
use Misc\Security;

class DoiXengClient extends Client implements ClientInterface {

    public function __construct() {
        $this->setDefaultBaseDomain("doixeng.net");
        $this->setDefaultLastLevelDomain("");
    }
}
