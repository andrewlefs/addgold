<?php

class MEAPI_Controller_PaymentController extends MEAPI_Core_Bootstrap implements MEAPI_Interface_PaymentInterface {

    private $whiteListIP;
    private $clientIP;

    public function recharge(MEAPI_RequestInterface $request) {

        // List IPs
        //123.30.140.185 pay.gomobi.vn 10.10.10.28
        //123.30.140.181 payment.gomobi.vn 10.10.10.29
        // 203.162.79.103, 203.162.79.104, 203.162.79.118 ginside.mobo.vn
        //10.10.20.112 ginside.mobo.vn
        //10.10.20.104 ginside.mobo.vn
        //10.10.20.113 ginside.mobo.vn
        //203.162.79.126 mopay.vn
        //203.162.56.158 service.mobo.vn
		//52.76.27.221 payment.dxglobal.net
        // 52.77.144.154 sev.bai88.net
		//203.205.28.123

        $this->whiteListIP = $this->whiteListIP = array('115.78.161.134', '202.92.5.72', '45.76.183.153', '118.69.76.212', '115.78.161.134', '45.32.103.178', '127.0.0.1', '45.76.155.107', '203.162.79.103', '203.162.79.104', '203.162.79.118', '115.78.161.88', '115.78.161.124', '123.30.140.185', '10.10.10.28', '10.10.10.29', '123.30.140.181', '10.10.20.112', '10.10.20.113', '10.10.20.104', '203.162.79.126', '203.162.56.158');
        $this->clientIP = get_remote_ip();
        // check IPs
        if (!in_array($this->clientIP, $this->whiteListIP)) {
            $this->_response = new MEAPI_Response_APIResponse($request, 'IP_REJECT', 'YOUR IP ' . $this->clientIP . ' IS REJECT');
            return;
        }

        $authorize = new MEAPI_Controller_AuthorizeController();
        $params = $request->input_request();
        //if ($authorize->validateAuthorizeRequest($request) || $params['service_name'] == '128') {
        if ($authorize->validateAuthorizeRequest($request)) { // bog dang test o server test
            $needle = array('account_id', 'money', 'payment_type', 'game_info', 'service_name', 'service_id', 'transaction_id');
            if (is_required($params, $needle) == TRUE) {
                $params['distribution'] = json_decode($params['distribution']);
                $params['tracking'] = json_decode($params['tracking']);
                $params['game_info'] = json_decode($params['game_info']);

                $service = array('service_id' => $params['service_id'], 'service_name' => strtolower($params['service_name']));
                $this->CI->load->MEAPI_Library('Gapi', 'GAPI', $service);

                $obj_distribution = new obj_distribution($params['distribution']);
                $obj_tracking = new obj_tracking($params['tracking']);
                $obj_game_info = new obj_game_info($params['game_info']);
                $obj_service = new obj_service($service);
                $obj_payment = new obj_payment_recharge(array(
                    'money' => $params['money'],
                    'pcoin' => $this->exchange_pcoin($params['money'], $params['payment_type'], $params['payment_subtype']),
                    'credit' => $params['credit'],
                    'credit_original' => $params["credit_original"],
                    'payment_type' => $params['payment_type'],
					'payment_subtype' => $params['payment_subtype'],
                    'source_type' => $params['source_type'],
                    'source_value' => $params['source_value'],
                    'account_id' => $params['account_id'],
                    'transaction_id' => $params['transaction_id'],
                    'date' => $params['date'],
                    'channel' => $params['channel'],
                    'payment_desc' => $params['desc'],
                    'full_request' => $this->getCurrentURL()
                ));
				$result = $this->CI->GAPI->init(__FUNCTION__, $obj_service, $obj_distribution, $obj_tracking, $obj_game_info, $obj_payment, $params, $data);

				if ($result['status'] == true)
                    $this->_response = new MEAPI_Response_APIResponse($request, $result['message'], $result['desc']);
                else
                    $this->_response = new MEAPI_Response_APIResponse($request, $result['message'], $result['desc']);
            } else {
                $diff = array_diff(array_values($needle), array_keys($params));
				//var_dump($diff);die;
                $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_PARAMS', $diff);
            }
        } else {
            $this->_response = $authorize->getResponse();
        }
    }

    /*
     * Ch? g?i l?i duy nh?t rabbit mq
     */

    public function recharge_rabbit_mq(MEAPI_RequestInterface $request) {
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();
            $needle = array('account_id', 'money', 'credit', 'payment_type', 'game_info', 'service_name', 'service_id');
            if (is_required($params, $needle) == TRUE) {
                $params['distribution'] = json_decode($params['distribution']);
                $params['tracking'] = json_decode($params['tracking']);
                $params['game_info'] = json_decode($params['game_info']);

                $service = array('service_id' => $params['service_id'], 'service_name' => strtolower($params['service_name']));
                $this->CI->load->MEAPI_Library('Gapi', 'GAPI', $service);

                $obj_distribution = new obj_distribution($params['distribution']);
                $obj_tracking = new obj_tracking($params['tracking']);
                $obj_game_info = new obj_game_info($params['game_info']);
                $obj_service = new obj_service($service);
                $obj_payment = new obj_payment_recharge(array(
                    'money' => $params['money'],
                    'pcoin' => $this->exchange_pcoin($params['money'], $params['payment_type'], $params['payment_subtype']),
                    'credit' => $params['credit'],
                    'credit_original' => $params["credit_original"],
                    'payment_type' => $params['payment_type'],
					'payment_subtype' => $params['payment_subtype'],
                    'source_type' => $params['source_type'],
                    'source_value' => $params['source_value'],
                    'account_id' => $params['account_id'],
                    'transaction_id' => $params['transaction_id'],
                    'date' => $params['date'],
                    'channel' => $params['channel'],
                    'payment_desc' => $params['desc'],
                    'full_request' => $this->getCurrentURL()
                ));

                $result = $this->CI->GAPI->init(__FUNCTION__, $obj_service, $obj_distribution, $obj_tracking, $obj_game_info, $obj_payment, $params, $data);
                if ($result['status'] == true)
                    $this->_response = new MEAPI_Response_APIResponse($request, $result['message'], $result['desc']);
                else
                    $this->_response = new MEAPI_Response_APIResponse($request, $result['message'], $result['desc']);
            } else {
                $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_PARAMS', $params);
            }
        } else {
            $this->_response = $authorize->getResponse();
        }
    }

    // hàm chuy?n ??i m?nh giá th? cào, inapp sang pcoin
    private function exchange_pcoin($amount, $type, $subtype = ''){
        $pcoin = 0;

        if (!is_numeric($amount)){
            return $pcoin;
        }

        $type = strtolower($type);
        $subtype = strtolower($subtype);

        if ($type == "card" && $subtype == "gate")
            $pcoin = $amount * 0.95; // gate
        elseif($type == "card" && $subtype != "gate")
            $pcoin = $amount * 0.85; // telco
        elseif($type == "inapp")
            $pcoin = (int) ($amount * 0.695652174); //inapp

        return $pcoin;
    }


    public function objectToArray($d) {
        if (is_object($d)) {
            // Gets the properties of the given object
            // with get_object_vars function
            $d = get_object_vars($d);
        }
        return $d;
    }


}
