<?php

@require_once APPPATH . 'third_party/MEAPI/Autoloader.php';

class CardService {

    private $CI;
    //info api get card
    private $url_buy_card = 'http://pmt.addgold.net/';
    private $app = "mig";
    private $secret_key = "y9YDZF4u@Cb";
    private $classname = __CLASS__;

    function __construct() {
        $this->CI = &get_instance();
        MEAPI_Autoloader::register();
    }

    public function buy_card($params) {
        // init start_time
        $start_time = microtime(true);

        $needle = array('order_id', 'account_id', 'character_name', 'supplier', 'value', "amount", "channel", "game_info", "service_id", "type");
        if (is_required($params, $needle) == TRUE) {
            $stores = array(
                "game_id" => $params["service_id"],
                "order_id" => $params["order_id"],
                "account_id" => $params['account_id'],
                "character_name" => $params["character_name"],
                "character_id" => $params["character_id"],
                "server_id" => $params["server_id"],
                "supplier" => $params["supplier"],
                "value" => $params["value"],
                "amount" => $params["amount"],
                "env" => isset($params["dev"]) ? $params["dev"] : 0,
                "event" => $params["event"],
                "app" => $params["service_id"],
                "game_info" => $params["game_info"]);

            $this->CI->load->model('../third_party/MEAPI/Models/PayCardModel', 'PayCardModel');
            $this->CI->load->model('../third_party/MEAPI/Models/PaymentModel', 'PaymentModel');


            $exists = $this->CI->PayCardModel->getTransaction($params["service_id"], $params["order_id"]);
            if ($exists == true) {
                return array("code" => DUPLICATE_TRANSACTION, "msg" => "DUPLICATE_TRANSACTION", "data" => "DUPLICATE_TRANSACTION");
            }
            //check loai the
            $suppliers = array("gate", "vms", "vina", "viettel");
            if (!in_array($params["supplier"], $suppliers)) {
                return array("code" => SUPPLIER_NOT_ALLOW, "msg" => "SUPPLIER_NOT_ALLOW", "data" => "SUPPLIER_NOT_ALLOW");
            }
            //check mệnh giá
            $allow_value = array(10000, 20000, 30000, 40000, 50000, 100000, 200000, 300000, 400000, 500000, 1000000, 2000000, 3000000, 4000000, 5000000);
            $value = intval($params["value"]);
            if (!in_array($value, $allow_value)) {
                return array("code" => VALUE_NOT_ALLOW, "msg" => "VALUE_NOT_ALLOW", "data" => "VALUE_NOT_ALLOW");
            }

            $func = __FUNCTION__;

            $idErrors = $this->CI->PaymentModel->setErrorLogs($this->classname, $func, $params["service_id"], $params['order_id'], $params["account_id"], $params['order_id'], $params["character_id"], $params["character_name"], $params["server_id"], date("Y-m-d H:i:s", time()), "card", $params["supplier"], $params['type'], "VND", $params["amount"], $params["platform"], $params['full_request'], "", $params['ip'], null, 0);


            $idInserted = $this->CI->PayCardModel->initTransaction($stores);
            if ($idInserted == null) {
                return array("code" => INSERT_TRANSACTION_FAIL, "msg" => "INSERT_TRANSACTION_FAIL", "data" => "INSERT_TRANSACTION_FAIL");
            }
            $args = array();
            $args["control"] = "buy";
            $args["func"] = "buycard";
            $args["id"] = $idInserted;
            $args["username"] = $params["character_name"];
            $args["supplier"] = $params["supplier"];
            $args["value"] = $params["value"];
            $args["amount"] = $params["amount"];
            $args["channel"] = $params["channel"];
            $args["game_info"] = $params["game_info"];
            $args["service_id"] = $params["service_id"];
            $args["app"] = $params["service_id"];
            if ($params["dev"] == 1) {
                $args["sandbox"] = 1;
            }
            $args["token"] = md5(implode("", $args) . $this->secret_key);

            $account_id_test = array(128147013, 886899541,'100081499759448740303','100081499133424824865');
            if (in_array($params["account_id"], $account_id_test)) {
                //$data = '{ "code": 1, "data": [{"serial": "32677046629","pin": "0326977483932","value": "10000","expire_date": "9/29/2016 4:40:11 PM"}],"message": null}';
                $data = '{"code":1100,"data":{"transid":423923208,"list":[{"serial":"146295420731176","pin":"146295420795418","value":"10000","logid":"146295420789448","supplier":"' . $params["supplier"] . '"},{"serial":"146295420731176","pin":"146295420795418","value":"10000","logid":"146295420789448","supplier":"' . $params["supplier"] . '"}]},"message":""}';
            } else {
                $data = $this->call_api_get($this->url_buy_card, http_build_query($args), "buy_card");
            }

            $data = json_decode($data, true);
            // calc latency
            $latency = (microtime(true) - $start_time);

            if ($data["code"] != 1100) {
                $this->CI->PaymentModel->finishErrorLogs($idErrors, 2, $latency, json_encode($data));

                $this->CI->PayCardModel->finishBuyTransaction($idInserted, 0, null, null, $latency, json_encode($data)); // update status = 1: success
                return array("code" => BUYCARD_FAIL, "msg" => "BUYCARD_FAIL", "data" => $data["data"]);
            } else {
                $this->CI->PaymentModel->finishErrorLogs($idErrors, 1, $latency, json_encode($data["data"]["list"]), $data["data"]["transid"]);

                $this->CI->PayCardModel->finishBuyTransaction($idInserted, 1, $data["data"]["transid"], json_encode($data["data"]["list"]), $latency); // update status = 1: success
                //$this->_response = new MEAPI_Response_APIResponse($request, "BUYCARD_SUCCESS", $data["data"]);
                return array("code" => BUYCARD_SUCCESS, "msg" => "BUYCARD_SUCCESS", "data" => $data["data"]);
            }
        } else {
            $diff = array_diff(array_values($needle), array_keys($params));
            //$this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_PARAMS', $diff);
            return array("code" => INVALID_PARAMS, "msg" => "INVALID_PARAMS", "data" => $diff);
        }
    }

    public function gettran_buycard($params) {
        // init start_time
        $start_time = microtime(true);

        $needle = array('order_id', 'character_name', 'supplier', 'value', "amount", "service_id");
        if (is_required($params, $needle) == TRUE) {

            //check loai the
            $this->CI->load->model('../third_party/MEAPI/Models/PayCardModel', 'PayCardModel');
            $exists = $this->CI->PayCardModel->getTransaction($params["service_id"], $params["order_id"]);
            if ($exists == false) {
                return array("code" => ORDER_ID_NOT_EXISTS, "msg" => "ORDER_ID_NOT_EXISTS", "data" => "ORDER_ID_NOT_EXISTS");
            }

            if ($exists["character_name"] != $params["character_name"]) {
                return array("code" => DATA_NOT_VALID, "msg" => "DATA_NOT_VALID", "data" => "DATA_NOT_VALID");
            }
            if ($exists["status"] == 1) {
                //$this->_response = new MEAPI_Response_APIResponse($request, "BUYCARD_SUCCESS", array("transid" => $exists["vendor_id"], "list" => json_decode($exists["cardlist"], true)));
                return array("code" => BUYCARD_SUCCESS, "msg" => "BUYCARD_SUCCESS", "data" => array("transid" => $exists["vendor_id"], "list" => json_decode($exists["cardlist"], true)));
            }

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
            $args["app"] = $params["service_id"];
            if ($params["dev"] == 1) {
                $args["sandbox"] = 1;
            }
            $args["token"] = md5(implode("", $args) . $this->secret_key);
            $data = $this->call_api_get($this->url_buy_card, http_build_query($args), "gettran_buycard");

            $data = json_decode($data, true);
            // calc latency
            $latency = (microtime(true) - $start_time);

            //var_dump($data);die;
            if ($data["code"] != 1100) {
                $this->CI->PayCardModel->finishBuyTransaction($tranid, 0, null, null, $latency, json_encode($data)); // update status = 1: success
                return array("code" => BUYCARD_FAIL, "msg" => "BUYCARD_FAIL", "data" => $data["data"]);
            } else {
                $this->CI->PayCardModel->finishBuyTransaction($tranid, 1, $data["data"]["transid"], json_encode($data["data"]["list"]), $latency); // update status = 1: success
                return array("code" => BUYCARD_SUCCESS, "msg" => "BUYCARD_SUCCESS", "data" => $data["data"]);
            }
        } else {
            $diff = array_diff(array_values($needle), array_keys($params));
            return array("code" => INVALID_PARAMS, "msg" => "INVALID_PARAMS", "data" => $diff);
        }
    }

    private function call_api_get($api_url, $data = null, $log_file_name = 'call_api_card') {
        set_time_limit(90);
        $urlrequest = $api_url . "?" . $data;
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

    /*
      Hàm này thực hiện gạch thẻ cào
     */

    public function pay_card($params) {
        // init start_time
        $start_time = microtime(true);
        $needle = array('account_id', 'serial', 'pin', 'card', 'platform', "service_id");

        if (is_required($params, $needle) == TRUE) {

            $card_order_id = 'card_' . $this->get_tranid() . rand(1001, 9999);
            $client_id = 0;
            if (isset($params["client_id"])) {
                $client_id = $params["client_id"];
            }
            $args = array(
                "control" => "payment",
                "func" => "card",
                "id" => $card_order_id,
                "orderid" => $card_order_id,
                "username" => $params["character_name"], //$params["account_id"],
				"character_id" => $params["character_id"],
				"character_name" => $params["character_name"],
				"server_id" => $params["server_id"],
                "type" => $params["card"],
                "serial" => $params["serial"],
                "pin" => $params["pin"],
                "channel" => $params["channel"],
                "game_info" => $params["character_name"], //$params['info'],
                "platform" => $params["platform"],
                "version" => $params["version"],
                "account_id" => $params["account_id"],
				"account" => $params["account"],
                "service_id" => $params["service_id"],
                "client_id" => $client_id,
                "app" => $params["service_id"],
            );

            $this->CI->load->model('../third_party/MEAPI/Models/PayCardModel', 'PayCardModel');
            $idInserted = $this->CI->PayCardModel->setTransaction($args);
            if ($idInserted == null) {
                return array("code" => "INSERT_TRANSACTION_FAIL", "msg" => "INSERT_TRANSACTION_FAIL", "data" => $idInserted);
            }

            // ghi log để dành tra cứu việc gọi API TTKT
            $this->CI->load->model('../third_party/MEAPI/Models/PaymentModel', 'PaymentModel');

            $func = __FUNCTION__;

            $paramslog = json_encode(array("serial" => $params["serial"], "pin" => $params["pin"], "card" => $params["card"]));
            $idErrors = $this->CI->PaymentModel->setErrorLogs($this->classname, $func, $params["service_name"], $params['transaction_id'], $params["account_id"], $card_order_id, $params["character_id"], $params["character_name"], $params["server_id"], date("Y-m-d H:i:s", time()), "card", $params["card"], 1, "VND", 0, $params["platform"], $params['full_request'], "", $params['ip'], $paramslog, 0);

			// danh sach tai khoan duoc test
            $account_ids = array('saunghia', 'anhnt6969', 'anhnt9669'); // user Sau Nghia, TuanAnh_Pt1
			// danh sach game duoc test
			$service_ids = array('10001', '10008');

            if ($params['pin'] == '123456' && in_array($params['service_id'], $service_ids) && (in_array($params["account"], $account_ids))) {
                $value = $params['serial'] * 1000;
                $data = '{"code":1000,"desc":"CARD_SUCCESS","data":{"msg":"nạp thành công","value": "' . $value . '","env":"sandbox"},"message":"CARD_VALIDATE_INVALIAD"}';
            } else {
                $token = md5(implode("", $args) . $this->secret_key);
                $args["token"] = $token;
                $data = $this->call_api_get($this->url_buy_card, http_build_query($args));
            }

            $result = json_decode($data, true);

            $latency = (microtime(true) - $start_time);

            if ($result["code"] != 1000) {
                $this->CI->PaymentModel->finishErrorLogs($idErrors, 2, $latency, $data);
                //update log pay_card
                $this->CI->PayCardModel->finishTransaction($idInserted, 2, $result["value"], $result["id"], $latency, json_encode($data)); // update status = 1: success
                return array("code" => "PAY_CARD_FAIL", "msg" => $result['data']['msg'], "data" => $result['data']);
            } else {

                $this->CI->PaymentModel->finishErrorLogs($idErrors, 1, $latency, $data);
                //update log pay_card
                $this->CI->PayCardModel->finishTransaction($idInserted, 1, $result["value"], $result["id"], $latency, json_encode($data)); // update status = 1: success
                // gan order_id vào mang và trả về
                $result['data']['card_order_id'] = $card_order_id;
                return array("code" => "PAY_CARD_SUCCESS", "msg" => "PAY_CARD_SUCCESS", "data" => $result['data']);
            }
        } else {
            $diff = array_diff(array_values($needle), array_keys($params));
            return array("code" => "INVALID_PARAMS", "msg" => "INVALID_PARAMS", "data" => $diff);
        }
    }

}
