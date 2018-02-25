<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


require_once APPPATH . 'core/v1/Controller.php';

require_once APPPATH . 'controllers/v1/autoloader.php';

use Misc\Controller;
use Misc\Models\TabModels;
use Misc\Authorize;
use Misc\Models\AppHashKeyModels;
use Misc\Object\Values\ResultObject;
use Misc\Http\Util;
use Misc\Http\Client\GApiClient;
use Misc\Object\Fields\GApiFields;

class home extends Controller
{

    public function __construct()
    {
        parent::__construct();
    }

    public function init()
    {
        try {
            $paramBodys = $this->getReceiver()->getBodys();

            $author = new Authorize();

            $resultAuthor = $author->AuthorizeRequest($paramBodys, null);

            if ($resultAuthor->getCode() === ResultObject::AUTHORIZE_SUCCESS) {

                $resultAuthor->setCode(ResultObject::AUTHORIZE_SUCCESS);
                $resultAuthor->OutOfJsonResponse();

            } else {
                $resultAuthor->OutOfJsonResponse();
            }
        } catch (Exception $ex) {

            $resultAuthor = new ResultObject();
            $resultAuthor->setCode(ResultObject::EXCEPTION);
            $resultAuthor->setMessage($ex->getMessage());
            $resultAuthor->OutOfJsonResponse();

        }
    }

    public function index()
    {
        //$this->init();
        //filter iplocal
        //filter 1900


        //if(in_array($_SERVER["REMOTE_ADDR"],$this->getWhileList())){
        //    if($this->isTester(128147041,102)){
                //redirect to sandbox
        //    }
        //}

    }

}
