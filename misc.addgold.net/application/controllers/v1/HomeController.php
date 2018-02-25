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

class HomeController extends Controller {

    public function __construct() {
        parent::__construct();
        // $this->setDbConfig(array('db' => 'system_info', 'type' => 'slave'));
    }

	public function index() {       
        exit();
    }
    public function home() {       
		echo "Trang chủ đang phát triển";
        exit();
    }
	public function invite() {       
		echo "Invite đang phát triển";
        exit();
    }
	public function account() {       
		echo "Account đang phát triển";
        exit();
    }
	public function level() {       
		echo "Level đang phát triển";
        exit();
    }	

}
