<?php
class API_Controller_InsideController extends API_Core_Bootstrap implements API_Interface_InsideInterface {
    private $whiteListIP;
    private $clientIP;
	private $_per_page = 30;
	private $request_clear_cached = 'https://graph.addgold.net/redis/clear_init';
	function __construct() {
        $this->CI = & get_instance();
		
		$this->whiteListIP = array('45.76.183.153','52.77.144.154','203.162.79.103', '203.162.79.104', '203.162.79.118', '115.78.161.88', '115.78.161.124', '123.30.140.185', '10.10.10.28', '10.10.10.29', '123.30.140.181', '10.10.20.112', '10.10.20.113', '10.10.20.104', '203.162.79.126', '203.162.56.158');
        $this->clientIP = get_remote_ip();
		
    }

    public function gsv_update(API_RequestInterface $request) {
        // check IPs
        if (!in_array($this->clientIP, $this->whiteListIP)) {
            $this->_response = new API_Response_APIResponse($request, 'YOUR IP ' . $this->clientIP . ' IS REJECT', 'YOUR IP ' . $this->clientIP . ' IS REJECT');
            return;
        }
        //$authorize = new API_Controller_AuthorizeController();
        //if($authorize->validateAuthorizeRequest($request, array('control' => __CLASS__, 'func' => __FUNCTION__)) == TRUE) {
            $params = $request->input_request();
            $needle = array('id', 'status', 'me_button', 'me_chat', 'me_event', 'me_game', 'me_login', 'msg_login', 'me_gm');
            if(is_required($params, $needle) == FALSE) {
                $this->_response = new API_Response_APIResponse($request, 'INVALID_PARAMS');
                return;
            } else {
                $update = make_array($params, $needle);
                if(empty($params['state']) == FALSE) {
                    $update['state'] = $params['state'];
                }
                $this->CI->load->API_Model('InsideModel');
                $where = array(
                    'id' => $params['id']
                );
                unset($update['id']);
                if($this->_valid_params($update)) {
                    $result = $this->CI->InsideModel->update($update, $where);
                    //$this->clear_cache_gsv($params['id']);
					$this->_auto_clear_cache_gsv();
                    $this->_auto_cache_gsv($params['id']);
                    $this->_response = new API_Response_APIResponse($request, 'UPDATE_SUCCESS');
                    return;
                }
                $this->_response = new API_Response_APIResponse($request, 'UPDATE_FAIL');
                return;
            }
        /*} else {
            $this->_response = $authorize->getResponse();
        }*/
    }
	
	public function gsv_approve(API_RequestInterface $request) {
        // check IPs
        if (!in_array($this->clientIP, $this->whiteListIP)) {
            $this->_response = new API_Response_APIResponse($request, 'YOUR IP ' . $this->clientIP . ' IS REJECT', 'YOUR IP ' . $this->clientIP . ' IS REJECT');
            return;
        }
        /*$authorize = new API_Controller_AuthorizeController();
        if($authorize->validateAuthorizeRequest($request)) {
		*/
            $params = $request->input_request();
            $needle = array('id', 'status');
            if(is_required($params, $needle) == FALSE) {
                $this->_response = new API_Response_APIResponse($request, 'INVALID_PARAMS');
                return;
            } else {
                $update = array(
                    'status' => $params['status']
                );
                $where = array(
                    'id' => $params['id']
                );
                $this->CI->load->API_Model('InsideModel');
                //if($this->_valid_params($update)) {
                    $result = $this->CI->InsideModel->update($update, $where);
                    //                    $this->clear_cache_gsv($params['id']);
                    if($result){

                    }
					$this->_auto_clear_cache_gsv();
                    $this->_auto_cache_gsv($params['id']);
                    $this->_response = new API_Response_APIResponse($request, 'APPROVE_SUCCESS');
                /*} else {
                    $this->_response = new API_Response_APIResponse($request, 'APPROVE_FAIL');
                }*/
                return;
            }
        /*} else {
            $this->_response = $authorize->getResponse();
        }*/
    }
	
	public function gsv_add(API_RequestInterface $request) {
		// check IPs
        if (!in_array($this->clientIP, $this->whiteListIP)) {
            $this->_response = new API_Response_APIResponse($request, 'YOUR IP ' . $this->clientIP . ' IS REJECT', 'YOUR IP ' . $this->clientIP . ' IS REJECT');
            return;
        }
        /*$authorize = new API_Controller_AuthorizeController();
        if($authorize->validateAuthorizeRequest($request, array('control' => __CLASS__, 'func' => __FUNCTION__)) == TRUE) {
		*/	
            $params = $request->input_request();
            $needle = array('gsv_id', 'platform', 'status', 'service_id');
            if(is_required($params, $needle) == FALSE) {
                $this->_response = new API_Response_APIResponse($request, 'INVALID_PARAMS');
                return;
            } else {
                //check valid id
                $need_check = array('platform', 'service_id');
                $a_check = make_array($params, $need_check);
                if($this->_valid_id($a_check, $params['gsv_id'])) {
                    $prefix = 'psv_';
                    $params_insert = array(
                        'gsv_id' => $prefix . '' . $params['gsv_id'],
                        'platform' => $params['platform'],
                        'status' => $params['status'],
                        'service_id' => intval($params['service_id'])
                    );
                    if($this->_valid_params($params_insert)) {
                        $this->CI->load->API_Model('InsideModel');
                        if($this->CI->InsideModel->insert($params_insert)) {
							$this->_auto_clear_cache_gsv();
                            $this->_auto_cache_gsv($params);
                            $this->_response = new API_Response_APIResponse($request, 'ADD_SUCCESS');
                            return;
                        }
                        $this->_response = new API_Response_APIResponse($request, 'ADD_FAIL');
                        return;
                    }
                    $this->_response = new API_Response_APIResponse($request, 'ADD_FAIL');
                    return;
                }
                $this->_response = new API_Response_APIResponse($request, 'ADD_FAIL');
                return;
            }
        /*} else {
            $this->_response = $authorize->getResponse();
        }*/
    }
	
	public function gsv_get(API_RequestInterface $request) {
		// check IPs
        if (!in_array($this->clientIP, $this->whiteListIP)) {
            $this->_response = new API_Response_APIResponse($request, 'YOUR IP ' . $this->clientIP . ' IS REJECT', 'YOUR IP ' . $this->clientIP . ' IS REJECT');
            return;
        }
        /*$authorize = new API_Controller_AuthorizeController();
        if($authorize->validateAuthorizeRequest($request, array('control' => __CLASS__, 'func' => __FUNCTION__)) == TRUE) {
		*/	
            $params = $request->input_request();
            unset($params['func'], $params['control'], $params['app'], $params['otp'], $params['token']);
            if(empty($params) == TRUE) {
                $where = array(
                    'id >' => 0
                );
            } else {
                $where = $params;
            }
            if(empty($params['page']) == TRUE) {
                $offset = 0;
            } else {
                $offset = ($params['page'] - 1) * $this->_per_page;
            }
            unset($where['page']);
            unset($where['limit']);
            $limit = empty($params['limit']) ? $this->_per_page : $params['limit'];

            $this->CI->load->API_Model('InsideModel');
            $result = $this->CI->InsideModel->get_where($where, $offset, $limit);
            //$count = $this->CI->InsideModel->get_count($where);
			$count = count($result);
            //echo $count;
            $result['total'] = $count;
            $this->_response = new API_Response_APIResponse($request, 'GET_SUCCESS', $result);
            return;
        /*} else {
            $this->_response = $authorize->getResponse();
        }*/
    }

    private function _auto_cache_gsv($params) {
        $this->CI->load->library('cache');
        $cache = $this->CI->cache->load('memcache', 'system_info');
        $this->CI->load->API_Model('InsideModel');

        if(is_array($params) == TRUE) {
            $args = array(
                'gsv_id' => $params['gsv_id'],
                'service_id' => $params['service_id'],
                'platform' => $params['platform'],
            );
        } else {
            $args['id'] = (int)$params;
        }

        $gsv_info = $this->CI->InsideModel->get_where($args);
        if(empty($gsv_info) == TRUE) {
            return FALSE;
        }

        $gsv_info_temp = $this->current($gsv_info);

        $service_id = $gsv_info_temp['service_id'];
        $platform = $gsv_info_temp['platform'];
        $gsv_id = $gsv_info_temp['gsv_id'];
        $key_gsv_info = 'MOBO_PSV_INFO_' . $service_id . '_' . $platform . '_' . $gsv_id;
        $cache->save($key_gsv_info, $gsv_info);

        return $gsv_info;
    }
	
	private function _auto_clear_cache_gsv(){
		return $this->_call_api($this->request_clear_cached);
	}
	
	public function current($arr){
		return $arr[0];
	}

    private function _valid_params($params) {
        $config = array(
            'platform' => array('android', 'ios', 'wp'),
            'status' => array('approving', 'approved', 'cancel', 'rejected'),
            'me_button' => array('on', 'off'),
            'me_chat' => array('on', 'off'),
            'me_game' => array('on', 'off'),
            'me_event' => array('on', 'off'),
            'me_login' => array('on', 'off')
        );
        foreach ($params as $key => $value) {
            if(@!in_array($value, $config[$key]) && empty($config[$key]) == FALSE) {
                return FALSE;
            }
        }
        return TRUE;
    }

    private function _valid_id($where, $params) {
        $this->CI->load->API_Model('InsideModel');
        if(!is_array($where)) {
            return FALSE;
        }
        $order = 'id DESC';
        $result = $this->CI->InsideModel->get_where($where, 0, 1, $order);
        if(empty($result) == FALSE) {
            $id = explode('_', $result[0]['gsv_id']);
            if($params > $id[1])
                return TRUE;
            return FALSE;
        }
        return TRUE;
    }
	
	
	/***MESSAGE**/
	public function gsv_msg_get(API_RequestInterface $request) {
		// check IPs
        if (!in_array($this->clientIP, $this->whiteListIP)) {
            $this->_response = new API_Response_APIResponse($request, 'YOUR IP ' . $this->clientIP . ' IS REJECT', 'YOUR IP ' . $this->clientIP . ' IS REJECT');
            return;
        }
        /*$authorize = new API_Controller_AuthorizeController();
        if($authorize->validateAuthorizeRequest($request, array('control' => __CLASS__, 'func' => __FUNCTION__)) == TRUE) {
		*/	
            $params = $request->input_request();
            unset($params['func'], $params['control'], $params['app'], $params['otp'], $params['token']);
            if(empty($params) == TRUE) {
                $where = array(
                    'id >' => 0
                );
            } else {
                $where = $params;
            }
            if(empty($params['page']) == TRUE) {
                $offset = 0;
            } else {
                $offset = ($params['page'] - 1) * $this->_per_page;
            }
            unset($where['page']);
            unset($where['limit']);
            $limit = empty($params['limit']) ? $this->_per_page : $params['limit'];

            $this->CI->load->API_Model('InsideModel');
            $result = $this->CI->InsideModel->get_where_message($where, $offset, $limit);
            //$count = $this->CI->InsideModel->get_count($where);
			$count = count($result);
            //echo $count;
            $result['total'] = $count;
            $this->_response = new API_Response_APIResponse($request, 'GET_SUCCESS', $result);
            return;
        /*} else {
            $this->_response = $authorize->getResponse();
        }*/
    }
	public function gsv_msg_add(API_RequestInterface $request) {
		// check IPs
        if (!in_array($this->clientIP, $this->whiteListIP)) {
            $this->_response = new API_Response_APIResponse($request, 'YOUR IP ' . $this->clientIP . ' IS REJECT', 'YOUR IP ' . $this->clientIP . ' IS REJECT');
            return;
        }
        /*$authorize = new API_Controller_AuthorizeController();
        if($authorize->validateAuthorizeRequest($request, array('control' => __CLASS__, 'func' => __FUNCTION__)) == TRUE) {
		*/	
            $params = $request->input_request();
            $needle = array('msg_link', 'platform', 'service_id');
            if(is_required($params, $needle) == FALSE) {
                $this->_response = new API_Response_APIResponse($request, 'INVALID_PARAMS');
                return;
            } else {
                //check valid id
                $need_check = array('platform', 'service_id');
                $a_check = make_array($params, $need_check);
                    $params_insert = array(
                        'platform' => $params['platform'],
                        'service_id' => intval($params['service_id']),
						'msg_link' => $params['msg_link'],
                    );
                    if($this->_valid_params($params_insert)) {
                        $this->CI->load->API_Model('InsideModel');
                        if($this->CI->InsideModel->insert_all("gsv_message",$params_insert)) {
							$this->_auto_clear_cache_gsv();
                            $this->_auto_cache_gsv($params);
                            $this->_response = new API_Response_APIResponse($request, 'ADD_SUCCESS');
                            return;
                        }
                        $this->_response = new API_Response_APIResponse($request, 'ADD_FAIL');
                        return;
                    }
                $this->_response = new API_Response_APIResponse($request, 'ADD_FAIL');
                return;
            }
        /*} else {
            $this->_response = $authorize->getResponse();
        }*/
    }
	public function gsv_msg_update(API_RequestInterface $request) {
        // check IPs
        if (!in_array($this->clientIP, $this->whiteListIP)) {
            $this->_response = new API_Response_APIResponse($request, 'YOUR IP ' . $this->clientIP . ' IS REJECT', 'YOUR IP ' . $this->clientIP . ' IS REJECT');
            return;
        }
        //$authorize = new API_Controller_AuthorizeController();
        //if($authorize->validateAuthorizeRequest($request, array('control' => __CLASS__, 'func' => __FUNCTION__)) == TRUE) {
            $params = $request->input_request();
            $needle = array('id');
            if(is_required($params, $needle) == FALSE) {
                $this->_response = new API_Response_APIResponse($request, 'INVALID_PARAMS');
                return;
            } else {
                //$update = make_array($params, $needle);
                $this->CI->load->API_Model('InsideModel');
				$update = array(
                    'platform' => $params['platform'],
					'service_id' => $params['service_id'],
					'msg_link'=>$params['msg_link']
                );
                $where = array(
                    'id' => $params['id']
                );
                unset($update['id']);
                if($this->_valid_params($update)) {
                    $result = $this->CI->InsideModel->update_all("gsv_message",$update, $where);
                    //                    $this->clear_cache_gsv($params['id']);
					$this->_auto_clear_cache_gsv();
                    //$this->_auto_cache_gsv($params['id']);
                    $this->_response = new API_Response_APIResponse($request, 'UPDATE_SUCCESS');
                    return;
                }
                $this->_response = new API_Response_APIResponse($request, 'UPDATE_FAIL');
                return;
            }
        /*} else {
            $this->_response = $authorize->getResponse();
        }*/
    }
	
	/***CONFIG***/
	public function gsv_config_get(API_RequestInterface $request) {
		// check IPs
        if (!in_array($this->clientIP, $this->whiteListIP)) {
            $this->_response = new API_Response_APIResponse($request, 'YOUR IP ' . $this->clientIP . ' IS REJECT', 'YOUR IP ' . $this->clientIP . ' IS REJECT');
            return;
        }
        /*$authorize = new API_Controller_AuthorizeController();
        if($authorize->validateAuthorizeRequest($request, array('control' => __CLASS__, 'func' => __FUNCTION__)) == TRUE) {
		*/	
            $params = $request->input_request();
            unset($params['func'], $params['control'], $params['app'], $params['otp'], $params['token']);
            if(empty($params) == TRUE) {
                $where = array(
                    'id >' => 0
                );
            } else {
                $where = $params;
            }
            if(empty($params['page']) == TRUE) {
                $offset = 0;
            } else {
                $offset = ($params['page'] - 1) * $this->_per_page;
            }
            unset($where['page']);
            unset($where['limit']);
            $limit = empty($params['limit']) ? $this->_per_page : $params['limit'];

            $this->CI->load->API_Model('InsideModel');
            $result = $this->CI->InsideModel->get_where_config_all($where, $offset, $limit);
            //$count = $this->CI->InsideModel->get_count($where);
			$count = count($result);
            //echo $count;
            $result['total'] = $count;
            $this->_response = new API_Response_APIResponse($request, 'GET_SUCCESS', $result);
            return;
        /*} else {
            $this->_response = $authorize->getResponse();
        }*/
    }
	public function gsv_config_add(API_RequestInterface $request) {
		// check IPs
        if (!in_array($this->clientIP, $this->whiteListIP)) {
            $this->_response = new API_Response_APIResponse($request, 'YOUR IP ' . $this->clientIP . ' IS REJECT', 'YOUR IP ' . $this->clientIP . ' IS REJECT');
            return;
        }
        /*$authorize = new API_Controller_AuthorizeController();
        if($authorize->validateAuthorizeRequest($request, array('control' => __CLASS__, 'func' => __FUNCTION__)) == TRUE) {
		*/	
            $params = $request->input_request();
            $needle = array('service_id', 'forgot', 'event','support');
            if(is_required($params, $needle) == FALSE) {
                $this->_response = new API_Response_APIResponse($request, 'INVALID_PARAMS');
                return;
            } else {
                //check valid id
                $need_check = array('service_id');
                $a_check = make_array($params, $need_check);
                    $params_insert = array(
                        'event' => $params['event'],
						'support' => $params['support'],
                        'service_id' => intval($params['service_id']),
						'forgot' => $params['forgot'],
						'privacypolicy' => $params['privacypolicy'],
						'guide' => $params['guide'],
						'payplist' => $params['payplist']
                    );
                    if($this->_valid_params($params_insert)) {
                        $this->CI->load->API_Model('InsideModel');
                        if($this->CI->InsideModel->insert_all("gsv_config",$params_insert)) {
							$this->_auto_clear_cache_gsv();
                            $this->_auto_cache_gsv($params);
                            $this->_response = new API_Response_APIResponse($request, 'ADD_SUCCESS');
                            return;
                        }
                        $this->_response = new API_Response_APIResponse($request, 'ADD_FAIL');
                        return;
                    }
                $this->_response = new API_Response_APIResponse($request, 'ADD_FAIL');
                return;
            }
        /*} else {
            $this->_response = $authorize->getResponse();
        }*/
    }
	public function gsv_config_update(API_RequestInterface $request) {
        // check IPs
        if (!in_array($this->clientIP, $this->whiteListIP)) {
            $this->_response = new API_Response_APIResponse($request, 'YOUR IP ' . $this->clientIP . ' IS REJECT', 'YOUR IP ' . $this->clientIP . ' IS REJECT');
            return;
        }
        //$authorize = new API_Controller_AuthorizeController();
        //if($authorize->validateAuthorizeRequest($request, array('control' => __CLASS__, 'func' => __FUNCTION__)) == TRUE) {
            $params = $request->input_request();
            $needle = array('id');
            if(is_required($params, $needle) == FALSE) {
                $this->_response = new API_Response_APIResponse($request, 'INVALID_PARAMS');
                return;
            } else {
                $update = array(
                    'event' => $params['event'],
					'support' => $params['support'],
                    'service_id' => intval($params['service_id']),
					'forgot' => $params['forgot'],
					'privacypolicy' => $params['privacypolicy'],
					'guide' => $params['guide'],
					'payplist' => $params['payplist']
                );
                
                $this->CI->load->API_Model('InsideModel');
                $where = array(
                    'id' => $params['id']
                );
                unset($update['id']);
                if($this->_valid_params($update)) {
                    $result = $this->CI->InsideModel->update_all("gsv_config",$update, $where);
                    //                    $this->clear_cache_gsv($params['id']);
					$this->_auto_clear_cache_gsv();
                    //$this->_auto_cache_gsv($params['id']);
                    $this->_response = new API_Response_APIResponse($request, 'UPDATE_SUCCESS');
                    return;
                }
                $this->_response = new API_Response_APIResponse($request, 'UPDATE_FAIL');
                return;
            }
        /*} else {
            $this->_response = $authorize->getResponse();
        }*/
    }
	
	public function gsv_get_status(API_RequestInterface $request) {
        // check IPs
        if (!in_array($this->clientIP, $this->whiteListIP)) {
            $this->_response = new API_Response_APIResponse($request, 'YOUR IP ' . $this->clientIP . ' IS REJECT', 'YOUR IP ' . $this->clientIP . ' IS REJECT');
            return;
        }
        /*$authorize = new API_Controller_AuthorizeController();
        if($authorize->validateAuthorizeRequest($request, array('control' => __CLASS__, 'func' => __FUNCTION__)) == TRUE) {
        */  
            $params = $request->input_request();
            
            unset($params['func'], $params['control'], $params['app'], $params['otp'], $params['token']);

            //isneed

            $needle = array('gsv_id','service_id','platform');
            if(is_required($params, $needle) == FALSE) {
                $this->_response = new API_Response_APIResponse($request, 'INVALID_PARAMS');
                return;
            }
            
            $where = $params;

            if(empty($params['page']) == TRUE) {
                $offset = 0;
            } else {
                $offset = ($params['page'] - 1) * $this->_per_page;
            }
            unset($where['page']);
            unset($where['limit']);
            $limit = empty($params['limit']) ? $this->_per_page : $params['limit'];

            $this->CI->load->API_Model('InsideModel');
            $result = $this->CI->InsideModel->get_where($where, $offset, $limit);
            //$count = $this->CI->InsideModel->get_count($where);
            $count = count($result);
            //echo $count;
            $result['total'] = $count;
            $this->_response = new API_Response_APIResponse($request, 'GET_SUCCESS', $result);
            return;
        /*} else {
            $this->_response = $authorize->getResponse();
        }*/
    }
}