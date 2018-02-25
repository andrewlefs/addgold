<?php
class MEAPI_Controller_VoucherController extends MEAPI_Core_Bootstrap implements MEAPI_Interface_VoucherInterface {
    
    private $whiteListIP = array('203.205.28.123', '52.77.144.154','52.77.191.110', '127.0.0.1', '203.162.79.103', '203.162.79.104', '203.162.79.118', '115.78.161.88', '115.78.161.124', '123.30.140.185', '10.10.10.28', '10.10.10.29', '123.30.140.181', '10.10.20.112', '10.10.20.113', '10.10.20.104', '203.162.79.126', '203.162.56.158');

    function __construct() {
        $this->CI = & get_instance();
    }
	
	public function create_voucher(MEAPI_RequestInterface $request){
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();
            $this->whiteListIP = $this->whiteListIP = array('52.77.144.154','52.77.191.110', '127.0.0.1', '203.162.79.103', '203.162.79.104', '203.162.79.118', '115.78.161.88', '115.78.161.124', '123.30.140.185', '10.10.10.28', '10.10.10.29', '123.30.140.181', '10.10.20.112', '10.10.20.113', '10.10.20.104', '203.162.79.126', '203.162.56.158');
            $this->clientIP = get_remote_ip();
            // check IPs
            if (!in_array($this->clientIP, $this->whiteListIP)) {
                $this->_response = new MEAPI_Response_APIResponse($request, 'YOUR IP ' . $this->clientIP . ' IS REJECT', 'YOUR IP ' . $this->clientIP . ' IS REJECT');
                return;
            }
            $this->CI->load->MEAPI_Library('Voucher', 'Voucher');
            $params['full_request'] = $this->getCurrentURL();
            $result = $this->CI->Voucher->{__FUNCTION__}($params);

            if ($result['code'] == PAY_VOUCHER_SUCCESS)
                $this->_response = new MEAPI_Response_APIResponse($request, $result['code'],$result['data']);
            else
                $this->_response = new MEAPI_Response_APIResponse($request, $result['code'],$result['data']);

        } else {
            $this->_response = $authorize->getResponse();
        }
    }
	
    private function verifyIPAccepted($client_ip){
        $clientIP = get_remote_ip();
        // check IPs
        if (!in_array($clientIP, $this->whiteListIP)) {
            return false;
        }
        return true;
    }
    
	public function redeem_voucher(MEAPI_RequestInterface $request){
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();
            
            // check IPs
            $client_ip = get_remote_ip();
            if (!$this->verifyIPAccepted($client_ip)) {
                $this->_response = new MEAPI_Response_APIResponse($request, 'YOUR IP ' . $client_ip . ' IS REJECT', 'YOUR IP ' . $client_ip . ' IS REJECT');
                return;
            }
            
            $this->CI->load->MEAPI_Library('Voucher', 'APIService');
            $params['full_request'] = $this->getCurrentURL();

            $result = $this->CI->APIService->{__FUNCTION__}($params);

            if ($result['code'] == "PAY_VOUCHER_SUCCESS"){
                // ghi ghi log cash_in va cong tien vao vi
				
                $this->CI->load->model('../third_party/MEAPI/Models/PaymentModel', 'PaymentModel');
                $voucher_data_log = json_encode(array("voucher_code" => trim($params["code"])));

                $transaction_id = $result['data']['voucher_order_id'];
                $value = $result['data']["value"];

                $voucher_transid =  $result['data']["voucher_transid"];
                $currency = $result['data']["currency"];

                $res_topup = $this->CI->PaymentModel->topup_main_wallet($params["service_id"],
                    $params["account_id"], $transaction_id, $params["character_id"], $params["character_name"], $params["server_id"],
                    date("Y-m-d H:i:s", time()), "voucher", "", 1, $currency, $value, $params["platform"],
                    $params['full_request'], $voucher_transid, $params['ip'], $voucher_data_log, 1, 0, "", $currency, $currency);

                if ($res_topup == null) {
                    $this->_response = new MEAPI_Response_APIResponse($request, "PAY_VOUCHER_FAIL", null);
                } else {

                    $res_topup['value'] =  $value;
                    $res_topup['vendor_order_id'] = $transaction_id;
                    $this->_response = new MEAPI_Response_APIResponse($request, "PAY_VOUCHER_SUCCESS", $res_topup);
                }
            }
            else
                $this->_response = new MEAPI_Response_APIResponse($request, $result['code'],$result['data']);
			
			


        } else {
            $this->_response = $authorize->getResponse();
        }
    }
}
