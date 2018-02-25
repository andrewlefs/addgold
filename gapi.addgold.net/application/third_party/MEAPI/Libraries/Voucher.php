<?php
@require_once APPPATH . 'third_party/MEAPI/Autoloader.php';

class Voucher
{
    private $CI;
    private $pre_trans = 'voucher_';
    private $classname = __CLASS__;
    private $api_chodoixu = "https://api.chodoixu.com/trade";
    // cau hinh ti gia USD
    private $secret_key = "DFJFDJmaaldflFHdfddjkhAf15667";


    function __construct()
    {
        $this->CI =& get_instance();
        MEAPI_Autoloader::register();

    }

    private function get_tranid()
    {
        $microtime = microtime();
        $comps = explode(' ', $microtime);
        return sprintf('%d%03d', $comps[1], $comps[0] * 1000000);
    }

    public function create_voucher($params)
    {
        // init start_time
        $start_time = microtime(true);
        $needle = array('account_id',  'money', 'service_id');
        if (is_required($params, $needle) == TRUE && ctype_digit($params['money']) === TRUE) {
            $voucher_order_id = $this->pre_trans . $this->get_tranid() . rand(1001, 9999);

            // ghi log để dành tra cứu việc gọi API TTKT
            $this->CI->load->model('../third_party/MEAPI/Models/PaymentModel', 'PaymentModel');
            // param log
            $func = __FUNCTION__;
            $idErrors = $this->CI->PaymentModel->setErrorLogs(__CLASS__, $func, $params["service_id"], $params['transaction_id'], $params["account_id"],
                $voucher_order_id, $params["character_id"], $params["character_name"], $params["server_id"], date("Y-m-d H:i:s", time()),
                "voucher", "", 1, $params['money'], $params['money'], $params["platform"], $params['full_request'], "create_voucher", $params['ip'], '', 0);

            // Loi insert DB
            if ($idErrors === null) {
                return array("code" => "DB_ERROR", "msg" => "DB_ERROR", "data" => null);
            }

            $args['coinCoupon'] = $params['money'];
            $args["token"] = md5(implode("", $args) . $this->secret_key);

            $resultCoupon = $this->call_api_get($this->api_chodoixu."/create_voucher", http_build_query($args), "create_voucher");
            
			$latency = (microtime(true) - $start_time);
            $result_string = $resultCoupon;

            $resultCoupon = json_decode($resultCoupon,true);

            if ($resultCoupon['code'] == 5002001) {

                $this->CI->PaymentModel->setVoucherLogs($params["service_id"],__FUNCTION__, $voucher_order_id,
                    $params["account_id"], $resultCoupon['data']['id'],$params["character_id"], $params["character_name"],$params["server_id"],
                    date("Y-m-d H:i:s", time()), $params['money'], $resultCoupon['data']['code'], $result_string, $params['full_request']);

                $this->CI->PaymentModel->finishErrorLogs($idErrors, 1, $latency, $result_string);

                $data = array("msg" => "Tách Voucher code thành công", "code" => $resultCoupon['data']['code'],"voucher_transid" => $resultCoupon['data']['id'],"voucher_order_id" => $voucher_order_id);
                return array("code" => "PAY_VOUCHER_SUCCESS", "msg" => "PAY_VOUCHER_SUCCESS", "data" => $data);

            }
            $this->CI->PaymentModel->finishErrorLogs($idErrors, 2, $latency, $result_string);
            return array("code" => "PAY_VOUCHER_FAIL", "msg" => "PAY_VOUCHER_FAIL", "data" => $resultCoupon);

        } else {
            $diff = array_diff(array_values($needle), array_keys($params));
            return array("code" => "INVALID_PARAMS", "msg" => "INVALID_PARAMS", "data" => $diff);
        }
    }

    public function redeem_voucher($params)
    {
        // init start_time
        $start_time = microtime(true);
        $needle = array('account_id', 'code', 'service_id');

        if (is_required($params, $needle) == TRUE) {

            $voucher_order_id = $this->pre_trans . $this->get_tranid() . rand(1001, 9999);


            // ghi log để dành tra cứu việc gọi API TTKT
            $this->CI->load->model('../third_party/MEAPI/Models/PaymentModel', 'PaymentModel');
            // param log
            $func = __FUNCTION__;
            $paramslog = json_encode(array("voucher_code" => trim($params["code"])));

            $idErrors = $this->CI->PaymentModel->setErrorLogs(__CLASS__, $func, $params["service_id"], $params['transaction_id'],$params["account_id"],$voucher_order_id, $params["character_id"], $params["character_name"], $params["server_id"],date("Y-m-d H:i:s", time()),"voucher", "", 1, 0, 0, $params["platform"], $params['full_request'], "check_voucher", $params['ip'], $paramslog, 0);

            // Loi insert DB
            if ($idErrors === null) {
                return array("code" => "DB_ERROR", "msg" => "DB_ERROR", "data" => null);
            }

            $args['code'] = $params['code'];
            $args["token"] = md5(implode("", $args) . $this->secret_key);

            $resultCoupon = $this->call_api_get($this->api_chodoixu."/check_voucher", http_build_query($args), "check_voucher");
            
			$latency = (microtime(true) - $start_time);
            $result_string = $resultCoupon;

            $resultCoupon = json_decode($resultCoupon,true);

            if ($resultCoupon['code'] == 5002002) {
                $this->CI->PaymentModel->finishErrorLogs($idErrors, 1, $latency, $result_string);

                $this->CI->PaymentModel->setVoucherLogs($params["service_id"],__FUNCTION__, $voucher_order_id,
                    $params["account_id"], $resultCoupon['data']['id'],$params["character_id"], $params["character_name"],$params["server_id"],
                    date("Y-m-d H:i:s", time()), $resultCoupon['data']['coinCoupon'], $params['code'], $result_string, $params['full_request']);


                $data = array("msg" => "Gạch Voucher thành công", "value" => $resultCoupon['data']['coinCoupon'], "currency" => $resultCoupon['data']['coinCoupon'], "voucher_transid" => $resultCoupon['data']['id'], "voucher_order_id" => $voucher_order_id);
                return array("code" => "PAY_VOUCHER_SUCCESS", "msg" => "PAY_VOUCHER_SUCCESS", "data" => $data);
            } else {
                $this->CI->PaymentModel->finishErrorLogs($idErrors, 2, $latency, $result_string);
                return array("code" => "PAY_VOUCHER_FAIL", "msg" => "PAY_VOUCHER_FAIL", "data" => $resultCoupon);

            }
        } else {
            $diff = array_diff(array_values($needle), array_keys($params));
            return array("code" => "INVALID_PARAMS", "msg" => "INVALID_PARAMS", "data" => $diff);
        }
    }


    private function call_api_get($api_url, $data = null, $log_file_name = 'call_api_card')
    {
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


}
