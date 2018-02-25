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
use Misc\Api;
use Misc\Http\Client\GraphClient;
use Misc\Security;
use Misc\Http\Headers;
use Misc\MemcacheObject;

class MemcacheController extends Controller {

    public function __construct() {
        parent::__construct();
        if ($_SERVER['PHP_AUTH_USER'] != 'misc' OR $_SERVER['PHP_AUTH_PW'] != '@misc12#)') {
            header('WWW-Authenticate: Basic realm="Vui long nhap ten nguoi dung & mat khau"');
            header('HTTP/1.0 401 Unauthorized');
            echo "Access Denied";
            die;
        }
    }

    public function index() {
        $mem = new MemcacheObject();
        //var_dump($mem->getAllMemcache());
        $this->setData(array("data" => $mem->getAllMemcache()));
        $this->Render("memcache", true);
        exit();
    }

    public function delete() {
        $paramBodys = $this->getReceiver()->getBodys();
        if (isset($paramBodys["key"])) {
            $mem = new MemcacheObject();
            $del = $mem->delete($paramBodys["key"]);
            echo json_encode(array("code" => 1, "status" => $del));
        } else {
            echo json_encode(array("code" => -1));
        }
    }

    public function clearAll() {
        $mem = new MemcacheObject();
        $del = $mem->removeAllMemcache();
        echo json_encode(array("code" => 1, "status" => $del, "key" => $paramBodys["key"]));
    }

}
