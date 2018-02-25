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
use Misc\Models\GSVInfoModels;

class MuController extends Controller {

    public function __construct() {
        parent::__construct();
        $this->setDbConfig(array('db' => 'system_info', 'type' => 'slave'));
    }

    public function register_mu(){

        try {


            $params = $this->getReceiver()->getQueryParams();

            $paramPost = $this->getReceiver()->getPostParams();

            $paramsHeader = $this->getReceiver()->getHeaders();

            if(is_array($paramPost)){
                $params = array_merge($params,$paramPost,$paramsHeader);
            }

            $params['ip_user'] = get_remote_ip();
            $params['platform'] = $this->getMobile()->getOperatingSystem(true);
            $params['account'] = $params['user_name'];
            $params['app'] = 10009;
            //call api get register
            $result = $this->getGraphClient()->register_mu($params);




            if (!empty($result) && $result['code'] == 0) {
                echo json_encode(array("retcode"=>$result['code'],'retmsg'=>$result['message'],'data'=>$result['data']));
            } else {
                echo json_encode(array("retcode"=>5,'retmsg'=>$result['message'],'data'=>array()));
            }
        } catch (Exception $ex) {
            echo json_encode(array("retcode"=>5,'retmsg'=>$ex->getMessage(),'data'=>array()));
        }

    }


    public function authorize_mu(){

        try {


            $params = $this->getReceiver()->getQueryParams();

            $paramPost = $this->getReceiver()->getPostParams();

            $paramsHeader = $this->getReceiver()->getHeaders();

            if(is_array($paramPost)){
                $params = array_merge($params,$paramPost,$paramsHeader);
            }

            $params['ip_user'] = get_remote_ip();
            $params['platform'] = $this->getMobile()->getOperatingSystem(true);

            //$params['userpass'] = md5($params['userpass']);
            $params['access_token'] = $params['klsso'];
            $params['app'] = 10009;


            //call api get register
            $result = $this->getGraphClient()->authorize_mu($params);

            (new Misc\Logger\NullLogger())->captureReceiver("request_author", $this->getReceiver(), $result);

            if (!empty($result) && $result['code'] == 0) {

                echo json_encode(array("retcode"=>$result['code'],'retmsg'=>$result['message'],'data'=>$result['data']));
            } else {
                echo json_encode(array("retcode"=>5,'retmsg'=>"Đăng nhập thất bại",'data'=>array()));
            }

        } catch (Exception $ex) {
            echo json_encode(array("retcode"=>5,'retmsg'=>$ex->getMessage(),'data'=>array()));
        }

    }

    public function verify_access_token_mu(){

        try {


            $params = $this->getReceiver()->getQueryParams();

            $paramPost = $this->getReceiver()->getPostParams();

            $paramsHeader = $this->getReceiver()->getHeaders();

            if(is_array($paramPost)){
                $params = array_merge($params,$paramPost,$paramsHeader);
            }

            $params['ip_user'] = get_remote_ip();
            $params['platform'] = $this->getMobile()->getOperatingSystem(true);
            $params['access_token'] = $params['klsso'];
            $params['app'] = 10009;


            //call api get register
            $result = $this->getGraphClient()->verify_access_token_mu($params);


            if (!empty($result) && $result['code'] == 0) {

                echo json_encode(array("retcode"=>$result['code'],'retmsg'=>$result['message'],'data'=>$result['data']));
            } else {
                echo json_encode(array("retcode"=>5,'retmsg'=>"Đăng nhập thất bại",'data'=>array()));
            }

        } catch (Exception $ex) {
            echo json_encode(array("retcode"=>5,'retmsg'=>$ex->getMessage(),'data'=>array()));
        }

    }

    public function change_pass_mu(){

        try {


            $params = $this->getReceiver()->getQueryParams();

            $paramPost = $this->getReceiver()->getPostParams();

            $paramsHeader = $this->getReceiver()->getHeaders();

            if(is_array($paramPost)){
                $params = array_merge($params,$paramPost,$paramsHeader);
            }

            $params['ip_user'] = get_remote_ip();
            $params['platform'] = $this->getMobile()->getOperatingSystem(true);
            $params['access_token'] = $params['klsso'];
            $params['app'] = 10009;


            //call api get register
            $result = $this->getGraphClient()->verify_access_token_mu($params);


            if (!empty($result) && $result['code'] == 0) {

                echo json_encode(array("retcode"=>$result['code'],'retmsg'=>$result['message'],'data'=>$result['data']));
            } else {
                echo json_encode(array("retcode"=>5,'retmsg'=>"Đăng nhập thất bại",'data'=>array()));
            }

        } catch (Exception $ex) {
            echo json_encode(array("retcode"=>5,'retmsg'=>$ex->getMessage(),'data'=>array()));
        }

    }

    public function main_mu(){

        try {


            $params = $this->getReceiver()->getQueryParams();

            $paramPost = $this->getReceiver()->getPostParams();

            $paramsHeader = $this->getReceiver()->getHeaders();

            if(is_array($paramPost)){
                $params = array_merge($params,$paramPost,$paramsHeader);
            }

            $params['ip_user'] = get_remote_ip();
            $params['platform'] = $this->getMobile()->getOperatingSystem(true);
            $params['access_token'] = $params['klsso'];
            $params['app'] = 10009;


            //call api get register


            echo json_encode(array("retcode"=>0,'retmsg'=>"WELCOME MU Làng Game",'data'=>array()));
            /*
            $result = $this->getGraphClient()->verify_access_token_mu($params);
            if (!empty($result) && $result['code'] == 0) {

                echo json_encode(array("retcode"=>$result['code'],'retmsg'=>$result['message'],'data'=>$result['data']));
            } else {
                echo json_encode(array("retcode"=>5,'retmsg'=>"Đăng nhập thất bại",'data'=>array()));
            }
            */

        } catch (Exception $ex) {
            echo json_encode(array("retcode"=>5,'retmsg'=>$ex->getMessage(),'data'=>array()));
        }

    }

}
