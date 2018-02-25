<?php
class MEAPI_Controller_BitCoinController extends MEAPI_Core_Bootstrap implements MEAPI_Interface_BitCoinInterface {
    
    private $whiteListIP = array('203.205.28.123', '52.77.144.154','52.77.191.110', '127.0.0.1', '203.162.79.103', '203.162.79.104', '203.162.79.118', '115.78.161.88', '115.78.161.124', '123.30.140.185', '10.10.10.28', '10.10.10.29', '123.30.140.181', '10.10.20.112', '10.10.20.113', '10.10.20.104', '203.162.79.126', '203.162.56.158');

    function __construct() {
        $this->CI = & get_instance();
    }
	
	public function create_coupon(MEAPI_RequestInterface $request){
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
            $this->CI->load->MEAPI_Library('BitCoin', 'BitCoin');
            $params['full_request'] = $this->getCurrentURL();
            $result = $this->CI->BitCoin->{__FUNCTION__}($params);

            if ($result['code'] == PAY_CARD_SUCCESS)
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
    
	public function redeem_coupon(MEAPI_RequestInterface $request){
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();
            
            // check IPs
            $client_ip = get_remote_ip();
            if (!$this->verifyIPAccepted($client_ip)) {
                $this->_response = new MEAPI_Response_APIResponse($request, 'YOUR IP ' . $client_ip . ' IS REJECT', 'YOUR IP ' . $client_ip . ' IS REJECT');
                return;
            }
            
            $this->CI->load->MEAPI_Library('BitCoin', 'APIService');
            $params['full_request'] = $this->getCurrentURL();
            
            // goi hàm g?ch th? cào
            $result = $this->CI->APIService->redeem_coupon($params);

            if ($result['code'] == "PAY_BTCE_SUCCESS"){
                // g?i ghi log cash_in va cong tien vao vi
                $this->CI->load->model('../third_party/MEAPI/Models/PaymentModel', 'PaymentModel');
                $btc_data_log = json_encode(array("btc_code" => trim($params["btc_code"])));
                
                $transaction_id = $result['data']['btc_e_order_id'];
                $value = $result['data']["value"]; // vnd
                
                $btc_transid =  $result['data']["transID"];
                $currency = $result['data']["currency"];
                $trans_value_usd = $result['data']["value_currency"];
                
                $res_topup = $this->CI->PaymentModel->topup_main_wallet($params["service_id"], 
                    $params["account_id"], $transaction_id, $params["character_id"], $params["character_name"], $params["server_id"], 
                    date("Y-m-d H:i:s", time()), "btc_e", "", 1, $currency, $value, $params["platform"], 
                    $params['full_request'], $btc_transid, $params['ip'], $btc_data_log, 1, 0, "", $trans_value_usd, $currency);
                
                if ($res_topup == null) {
                    $this->_response = new MEAPI_Response_APIResponse($request, "PAY_WALLET_FAIL", null);
                } else {
                    
                    // output: {"code":400090,"desc":"PAY_WALLET_SUCCESS","data":{"account_id":"128147013","amount":100000,"order_id":1,"value":"100000","vendor_order_id":"card_14684228823002131491"},"message":"PAY_WALLET_SUCCESS"}
                    $res_topup['value'] =  $value;
                    $res_topup['vendor_order_id'] = $transaction_id;
                    $this->_response = new MEAPI_Response_APIResponse($request, "PAY_WALLET_SUCCESS", $res_topup);
                }
            }
            else
                $this->_response = new MEAPI_Response_APIResponse($request, $result['code'],$result['data']);

        } else {
            $this->_response = $authorize->getResponse();
        }
    }
}
