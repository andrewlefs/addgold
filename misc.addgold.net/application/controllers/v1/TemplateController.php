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
use Misc\Security;
use Misc\Utility;
use Misc\Models\GSVInfoModels;
use Misc\Object\Fields\HeaderField;

class TemplateController extends Controller {

    public function __construct() {
        parent::__construct();
        $this->setDbConfig(array('db' => 'system_info', 'type' => 'slave'));
        $this->setPathRoot("/v1/template/");
        $this->addData("assets", "/v1/payment/");
    }

    //get domain list
    public function index() {
        try {
            $paramBodys = $this->getReceiver()->getBodys();
            $paramHeaders = $this->getReceiver()->getHeaders();

            $author = new Authorize();
            $author->setDbConfig($this->getDbConfig());
            $resultAuthor = $author->AuthorizeRequest($paramBodys, null);
            if ($resultAuthor->getCode() === ResultObject::AUTHORIZE_SUCCESS) {
                $this->setMessage("Tính năng đang cập nhật");
                $this->Render("error");
            } else {
                $this->setMessage("Truy cập không hợp lệ");
                $this->Render("error");
            }
        } catch (Exception $ex) {
            $this->setMessage("Hệ thống đang bảo trì vui lòng quay lại sau.");
            $this->Render("error");
        }
    }

}
