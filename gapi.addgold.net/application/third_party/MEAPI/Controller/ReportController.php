<?php

class MEAPI_Controller_ReportController extends MEAPI_Core_Bootstrap implements MEAPI_Interface_ReportInterface {

    function __construct() {
        $this->CI = & get_instance();
    }

    public function query_data(MEAPI_RequestInterface $request) {

        $this->whiteListIP = $this->whiteListIP = array('203.162.79.105', '115.78.161.134', '45.76.183.153', '115.78.161.88', '203.162.79.103', '203.162.79.104', '203.162.79.118');
        $this->clientIP = get_remote_ip();
        // check IPs
        if (!in_array($this->clientIP, $this->whiteListIP)) {
            $this->_response = new MEAPI_Response_APIResponse($request, 'IP_REJECT', 'YOUR IP ' . $this->clientIP . ' IS REJECT');
            return;
        }

        $secretkey = 'jwT0wnGlQKROSLrj6aLc';
        $params = $request->input_request();
        $needle = array('table');
        if (is_required($params, $needle) == TRUE) {
            $valid = md5($params['table'] . $secretkey);
            if ($valid != $params['token']) {
                $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_TOKEN');
                return;
            }
            $CI = &get_instance();
            $CI->load->library('crudapiclass');
            $CI->crudapiclass->execute();
            die;
        }else{
            $diff = array_diff(array_values($needle), array_keys($params));
            //var_dump($diff);die;
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_PARAMS', $diff);
        }
    }

    /*
     * Lấy thông tin chi tiết nhân vật trong game
     */

    public function get_report_game_info(MEAPI_RequestInterface $request) {
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();

            $this->CI->load->MEAPI_Library('GAPI/Service_' . $params['service_name'], 'APIService');
            $result = $this->CI->APIService->{__FUNCTION__}($params);
            if ($result['status'] == false)
                $this->_response = new MEAPI_Response_APIResponse($request, $result['message']);
            else
                $this->_response = new MEAPI_Response_APIResponse($request, $result['message'], $result['data']);
        } else {
            $this->_response = $authorize->getResponse();
        }
    }

     /*
     * GET CCU
     */
    public function get_ccu(MEAPI_RequestInterface $request) {
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();

            $this->CI->load->MEAPI_Library('GAPI/Service_' . $params['service_name'], 'APIService');
            $result = $this->CI->APIService->{__FUNCTION__}($params);
            if ($result['status'] == false)
                $this->_response = new MEAPI_Response_APIResponse($request, $result['message']);
            else
                $this->_response = new MEAPI_Response_APIResponse($request, $result['message'], $result['data']);
        } else {
            $this->_response = $authorize->getResponse();
        }
    }

    /*
     * GET TOP DATA
     */
    public function get_top_data(MEAPI_RequestInterface $request) {
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();

            $this->CI->load->MEAPI_Library('GAPI/Service_' . $params['service_name'], 'APIService');
            $result = $this->CI->APIService->{__FUNCTION__}($params);
            if ($result['status'] == false)
                $this->_response = new MEAPI_Response_APIResponse($request, $result['message']);
            else
                $this->_response = new MEAPI_Response_APIResponse($request, $result['message'], $result['data']);
        } else {
            $this->_response = $authorize->getResponse();
        }
    }
	public function eventgold(MEAPI_RequestInterface $request){
		$authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();
            $this->CI->load->MEAPI_Library('GAPI/Service_' . $params['service_name'], 'APIService');
			$result = $this->CI->APIService->{__FUNCTION__}($params);
            if ($result['status'] == false)
                $this->_response = new MEAPI_Response_APIResponse($request, $result['message']);
            else
                $this->_response = new MEAPI_Response_APIResponse($request, $result['message'], $result['data']);
        } else {
            $this->_response = $authorize->getResponse();
        }
	}
	public function get_list_table(MEAPI_RequestInterface $request){
		$authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();
            $this->CI->load->model('../third_party/MEAPI/Models/ReportModel', 'ReportModel');
			$data = $this->CI->ReportModel->get_list_table($params['service_name'],$params['keyword'],$params['date_from'],$params['date_to'],$params['slbstatus'],$params['slbplatform'],$params['slbtype'],$params['game_server_id']);

            if ($data == false)
                $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_FAIL");
            else
                $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_SUCCESS", $data);
        } else {
            $this->_response = $authorize->getResponse();
        }
	}
	public function search(MEAPI_RequestInterface $request){
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();

            $tablemap = array(
				"btce_coin"=>"btc_e_logs",
				"btce_logs"=>"btc_e_redeem_logs",
				"card_logs"=>"paycard_logs",
				"cash_to_game"=>"cash_to_game_trans_".$params['service_id'],
                "history_purchase"=>"inapp_purchase_trans",

				);

            $this->CI->load->model('../third_party/MEAPI/Models/ReportModel', 'ReportModel');

            $output = json_decode($params['output'],true);
            $query = json_decode($params['query'],true);
            $order_by = json_decode($params['order'],true);
			$group_by = json_decode($params['group_by'],true);

			$limit = (!empty($params['limit']) && $params['limit']>0) ?$params['limit']:50;
            $data = $this->CI->ReportModel->get_report_btce($tablemap[$params['action']],$output,$query,$group_by,$order_by,$limit);

            if ($data == false)
                return $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_SUCCESS",array());
            else
                return  $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_SUCCESS", $data);
        } else {
            return $this->_response = $authorize->getResponse();
        }
    }

	public function fields(MEAPI_RequestInterface $request){
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();

            $tablemap = array("history_purchase"=>"inapp_purchase_trans","btce_coin"=>"btc_e_logs","btce_logs"=>"btc_e_redeem_logs","card_logs"=>"paycard_logs","cash_to_game"=>"cash_to_game_trans_".$params['service_id']);

            $this->CI->load->model('../third_party/MEAPI/Models/ReportModel', 'ReportModel');

            $data = $this->CI->ReportModel->getfields($tablemap[$params['action']]);

            if ($data == false)
                return $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_SUCCESS",$data);
            else
                return  $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_SUCCESS", $data);
        } else {
            return $this->_response = $authorize->getResponse();
        }
    }
	public function get_account_btc_e(MEAPI_RequestInterface $request){
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();

            $this->whiteListIP = $this->whiteListIP = array('52.220.20.7','52.77.144.154','52.77.191.110', '127.0.0.1', '203.162.79.103', '203.162.79.104', '203.162.79.118', '115.78.161.88', '115.78.161.124', '123.30.140.185', '10.10.10.28', '10.10.10.29', '123.30.140.181', '10.10.20.112', '10.10.20.113', '10.10.20.104', '203.162.79.126', '203.162.56.158');
            $this->clientIP = get_remote_ip();
            // check IPs
            if (!in_array($this->clientIP, $this->whiteListIP)) {
                $this->_response = new MEAPI_Response_APIResponse($request, 'YOUR IP ' . $this->clientIP . ' IS REJECT', 'YOUR IP ' . $this->clientIP . ' IS REJECT');
                return;
            }
            //input api_key
            $this->CI->load->MEAPI_Library('BitCoin', 'BitCoin');
            $data = $this->CI->BitCoin->{__FUNCTION__}($params);

            if (!empty($data))
                return $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_SUCCESS",$data);
            else
                return  $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_SUCCESS", $data);

        } else {
            return $this->_response = $authorize->getResponse();
        }
    }
	
	public function get_app(MEAPI_RequestInterface $request){
		$authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();
            $this->CI->load->model('../third_party/MEAPI/Models/ReportModel', 'ReportModel');
			$data = $this->CI->ReportModel->get_app();

            if ($data == false)
                $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_FAIL");
            else
                $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_SUCCESS", $data);
        } else {
            $this->_response = $authorize->getResponse();
        }
	}


    /**
     *
     * @param MEAPI_RequestInterface $request
     */
    public function get_list_purchase(MEAPI_RequestInterface $request) {
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();

            $needle = array('listpurchase', 'voidetime','startDate','endDate');
            if (is_required($params, $needle) == FALSE) {
                $diff = array_diff(array_values($needle), array_keys($params));
                //var_dump($diff);die;
                $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_PARAMS', $diff);
            }

            //get list purchase
            $this->CI->load->model('../third_party/MEAPI/Models/ReportModel', 'ReportModel');
            //var_dump($service_name);
            $getListInRefun = $this->CI->ReportModel->getListPurchase($params["startDate"],$params["endDate"], $params['listpurchase']);
            if($getListInRefun){
                foreach ($getListInRefun as $k=>$v){
                    //update
                    $voidedTime = $params['voidetime'][$v['purchase_token']];
                    $statusPurchase = $this->ReportModel->onUpdateRefunc(array("is_refund"=>1,"voided_time"=>$voidedTime),array("is_refund"=>0,"id"=>$v['id']));

                    $resultDate[] = array("id"=>$v['id'],"voidedTime"=>$voidedTime,"mobo_service_id"=>$v['mobo_service_id'],"purchase_token"=>$v['purchase'],"status_update"=>$statusPurchase);


                }
            }


            if ($resultDate == false)
                $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_FAIL");
            else
                $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_SUCCESS", array('data' => $resultDate));
        } else {
            $this->_response = $authorize->getResponse();
        }
    }


}
