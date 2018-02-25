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

class TestController extends Controller {

    protected $gsvModel;
    protected $scopeModel;

    public function __construct() {
        parent::__construct();
        $this->setDbConfig(array('db' => 'system_info', 'type' => 'slave'));
    }


    public function testgetchannel(){

        $params_parse = array(
            "access_token"=>"eyJoYXNoIjoiM2VhM2I3M2FmNmRlZGU4YTZlOGZmYTIxNjk0ODIyNzIiLCJtc2lfaWQiOiIxMDAwMDE0OTExODYzMTg3NDg4ODIiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDkxMTg2MzE4NzQ4ODgyIiwiaWQiOjI5MTk2ODk0NH0=",
            "manufacturer"=>"samsung",
            "package_name"=>"cok.coc.lord.gok.langgame",
            "sdk_version"=>"1.0.0.4_20170316",
            "sd"=>"empty","app"=>"10000",
            "lang"=>"vi",
            "device_id"=>"095884c5925c1e1fe3551bc3451f3d60c578d51f",
            "brand"=>"samsung",
            "model"=>"SM-G930U",
            "telco"=>"Viettel",
            "channel_cfg"=>"3|pp|1.1.9|GP|psv_4_store",
            "version"=>"1.1.9",
            "channel"=>"empty","tracking_info"=>"{\"google_aid\":\"3CC905B9-3A5B-45AF-8620-832388201F0B\"}",
            "platform"=>"android","user_agent"=>"Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-G930U Build/MMB29M)",
            "ip_user"=>"fe80::3812:63ff:fe33:9ab6%dummy0"

        );
		$this->getGraphClient()->setApp(10000);
        $this->getGraphClient()->setSecret("2K4ZRMSYM3W3D4YY");
		$params['q'] = Security::encrypt($params_parse,"2K4ZRMSYM3W3D4YY");
		$ss = $this->getGraphClient()->verifyAccessTokenGetChannel($params);
        echo '3';die;
    }


    public function test_inside(){

        $params_parse = array(
            "account_id"=>455712051,
            "app"=>"10001",
        );
        $params['q'] = Security::encrypt($params_parse,"E7I2YXVIADSQXWTI");

        echo "<pre>";
        echo "<br/>";
        $z = Security::decrypt($params['q'],"E7I2YXVIADSQXWTI");
        print_r($z);die;
        die;

        $this->getGraphClient()->setApp(10001);
        $this->getGraphClient()->setSecret("2K4ZRMSYM3W3D4YY");

        $ss = $this->getGraphClient()->verifyAccessTokenGetChannel($params);
        echo '3';die;
    }

   

}
