<?php

class MEAPI_Controller_PayCardController extends MEAPI_Core_Bootstrap implements MEAPI_Interface_PayCardInterface {

    //202.92.5.72 misc
	//45.76.183.153 proxy
    private $whiteListIP = array('202.92.5.72', '45.76.183.153');

    //info api get card
    private $url_pay_card = 'http://pmt.addgold.net/';
    private $url_buy_card = 'http://pmt.addgold.net/';
    private $app = "mig";
    private $secret_key = "y9YDZF4u@Cb";

    function __construct() {
        $this->CI = & get_instance();
    }

    public function buy_card(MEAPI_RequestInterface $request) {

        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();
            //$this->whiteListIP = $this->whiteListIP = array('52.77.191.110', '127.0.0.1', '203.162.79.103', '203.162.79.104', '203.162.79.118', '115.78.161.88', '115.78.161.124', '123.30.140.185', '10.10.10.28', '10.10.10.29', '123.30.140.181', '10.10.20.112', '10.10.20.113', '10.10.20.104', '203.162.79.126', '203.162.56.158');
            $this->clientIP = get_remote_ip();
            // check IPs
            if (!in_array($this->clientIP, $this->whiteListIP)) {
                $this->_response = new MEAPI_Response_APIResponse($request, 'YOUR IP ' . $this->clientIP . ' IS REJECT', 'YOUR IP ' . $this->clientIP . ' IS REJECT');
                return;
            }

            $this->CI->load->MEAPI_Library('CardService', 'APIService');
            $params['full_request'] = $this->getCurrentURL();

            // goi hàm mua thẻ cào
            $result = $this->CI->APIService->buy_card($params);

            if ($result['code'] == "BUYCARD_SUCCESS"){
                $this->_response = new MEAPI_Response_APIResponse($request, $result['code'], $result['data']);
            }
            else
                $this->_response = new MEAPI_Response_APIResponse($request, $result['code'],$result['data']);

        } else {
            $this->_response = $authorize->getResponse();
        }
    }

    public function gettran_buycard(MEAPI_RequestInterface $request) {

        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();
            //$this->whiteListIP = $this->whiteListIP = array('52.77.191.110', '127.0.0.1', '203.162.79.103', '203.162.79.104', '203.162.79.118', '115.78.161.88', '115.78.161.124', '123.30.140.185', '10.10.10.28', '10.10.10.29', '123.30.140.181', '10.10.20.112', '10.10.20.113', '10.10.20.104', '203.162.79.126', '203.162.56.158');
            $this->clientIP = get_remote_ip();
            // check IPs
            if (!in_array($this->clientIP, $this->whiteListIP)) {
                $this->_response = new MEAPI_Response_APIResponse($request, 'YOUR IP ' . $this->clientIP . ' IS REJECT', 'YOUR IP ' . $this->clientIP . ' IS REJECT');
                return;
            }

            // init start_time
            $start_time = microtime(true);



            $needle = array('order_id', 'character_name', 'supplier', 'value', "amount", "service_id");
            if (is_required($params, $needle) == TRUE) {

                //check loai the

                $this->CI->load->model('../third_party/MEAPI/Models/PayCardModel', 'PayCardModel');
                $exists = $this->CI->PayCardModel->getTransaction($params["service_id"], $params["order_id"]);
                if ($exists == false) {
                    $this->_response = new MEAPI_Response_APIResponse($request, "ORDER_ID_NOT_EXISTS");
                    return;
                }

                if ($exists["character_name"] != $params["character_name"]) {
                    $this->_response = new MEAPI_Response_APIResponse($request, "DATA_NOT_VALID");
                    return;
                }
                if ($exists["status"] == 1) {
                    $this->_response = new MEAPI_Response_APIResponse($request, "BUYCARD_SUCCESS", array("transid" => $exists["vendor_id"], "list" => json_decode($exists["cardlist"], true)));
                    return;
                }
                //set partner id
                //request data
                /*
                 * http://payment.dxglobal.net/
                 * ?control=buy
                 * &func=gettransaction
                 * &id=122_12_513
                 * &transid=123123
                 * &username=saunghia
                 * &supplier=viettel
                 * &value=10000
                 * &amount=1
                 * &service_id=140
                 * &app=mig
                 * &sandbox=1
                 * &token=17dbf915df9c11e04ae866a70aea29da
                 */
                $tranid = $exists["id"];
                $args = array();
                $args["control"] = "buy";
                $args["func"] = "gettransaction";
                $args["id"] = time() . rand(1, 1000);
                $args["transid"] = $tranid;
                $args["username"] = $exists["character_name"];
                $args["supplier"] = $exists["supplier"];
                $args["value"] = $exists["value"];
                $args["amount"] = $exists["amount"];
                $args["service_id"] = $exists["game_id"];
                $args["app"] = $this->app;
                if ($params["dev"] == 1) {
                    $args["sandbox"] = 1;
                }
                $args["token"] = md5(implode("", $args) . $this->secret_key);
                $data = $this->call_api_get($this->url_buy_card, http_build_query($args), "gettran_buycard");

//                echo $data;
//                die;
                $data = json_decode($data, true);
                // calc latency
                $latency = (microtime(true) - $start_time);

                //var_dump($data);die;
                if ($data["code"] != 1100) {
                    $this->CI->PayCardModel->finishBuyTransaction($tranid, 0, null, null, $latency, json_encode($data)); // update status = 1: success
                    $this->_response = new MEAPI_Response_APIResponse($request, "BUYCARD_FAIL", $data["data"]);
                } else {
                    $this->CI->PayCardModel->finishBuyTransaction($tranid, 1, $data["data"]["transid"], json_encode($data["data"]["list"]), $latency); // update status = 1: success
                    $this->_response = new MEAPI_Response_APIResponse($request, "BUYCARD_SUCCESS", $data["data"]);
                }
                return;
            } else {
                $diff = array_diff(array_values($needle), array_keys($params));
                //echo 'test';die;
                $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_PARAMS', $diff);
                return;
            }
        } else {
            $this->_response = $authorize->getResponse();
        }
    }

    private function call_api_get($api_url, $data = null, $log_file_name = 'call_api_card') {
        set_time_limit(90);
        $urlrequest = $api_url . "?" . $data;
        //echo $urlrequest;die;
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $urlrequest);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 90);
        $result = curl_exec($ch);

        if ($result === false)
            $this->err_msg = curl_error($ch);

        curl_close($ch);

        //if ($log_file_name != "buy_card")
        MEAPI_Log::writeCsv(array($api_url, $data, $result, $this->err_msg), $log_file_name);
        return $result;
    }

    private function get_tranid() {
        $microtime = microtime();
        $comps = explode(' ', $microtime);
        return sprintf('%d%03d', $comps[1], $comps[0] * 1000000);
    }

    private function verifyIPAccepted($client_ip){
        $clientIP = get_remote_ip();
        // check IPs
        if (!in_array($clientIP, $this->whiteListIP)) {
            return false;
        }
        return true;
    }

    /*
     * Hàm xử lý gạch thẻ cào và cộng tiền vào ví cho user
     */
	public function pay_card(MEAPI_RequestInterface $request){
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();

            // check IPs
            $client_ip = get_remote_ip();
            if (!$this->verifyIPAccepted($client_ip)) {
                $this->_response = new MEAPI_Response_APIResponse($request, 'YOUR IP ' . $client_ip . ' IS REJECT', 'YOUR IP ' . $client_ip . ' IS REJECT');
                return;
            }

            $this->CI->load->MEAPI_Library('CardService', 'APIService');
            $params['full_request'] = $this->getCurrentURL();

            // goi hàm gạch thẻ cào
            $result = $this->CI->APIService->pay_card($params);

            if ($result['code'] == "PAY_CARD_SUCCESS"){
                // gọi ghi log cash_in va cong tien vao vi
                $this->CI->load->model('../third_party/MEAPI/Models/PaymentModel', 'PaymentModel');
                $card_data_log = json_encode(array("serial" => $params["serial"], "pin" => $params["pin"], "value" => $result['data']["value"], "card" => $params["card"]));

                $transaction_id = $result['data']['card_order_id'];
                $res_topup = $this->CI->PaymentModel->topup_main_wallet($params["service_name"], $params["account_id"], $transaction_id, $params["character_id"], $params["character_name"], $params["server_id"],
                    date("Y-m-d H:i:s", time()), "card", $params["card"], 1, "VND", $result['data']["value"], $params["platform"],
                    $params['full_request'], "", $params['ip'], $card_data_log);

                if ($res_topup == null) {
                    $this->_response = new MEAPI_Response_APIResponse($request, "PAY_WALLET_FAIL", null);
                } else {

                    // output: {"code":400090,"desc":"PAY_WALLET_SUCCESS","data":{"account_id":"128147013","amount":100000,"order_id":1,"value":"100000","vendor_order_id":"card_14684228823002131491"},"message":"PAY_WALLET_SUCCESS"}
                    $res_topup['value'] =  $result['data']["value"];
                    $res_topup['vendor_order_id'] = $result['data']['card_order_id'];
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
