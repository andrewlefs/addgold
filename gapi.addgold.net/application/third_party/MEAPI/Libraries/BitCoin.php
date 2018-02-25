<?php
@require_once APPPATH . 'third_party/MEAPI/Autoloader.php';
@require_once APPPATH . 'third_party/MEAPI/Libraries/btce-api.php';

class BitCoin
{
    private $CI;
    private $BTCeAPI;
    private $pre_trans = 'btc_e_';
    private $classname = __CLASS__;
    // cau hinh ti gia USD
    private $ratio_usd = 22500;
    private $account_key = 'Z821CEXA-4KDF3XR2-NHUFOP6K-YXNX7T4B-6FAA2L11';
	private $data_account = array(
        'Z821CEXA-4KDF3XR2-NHUFOP6K-YXNX7T4B-6FAA2L11'=>'302bc1d8be7583c32d7cc4e55512b573a12a14179f9a2d5bfce278333452696b'
    );
    function __construct()
    {
        $this->CI =& get_instance();
        MEAPI_Autoloader::register();
        
        // config BTC-E Account
        $this->BTCeAPI = new BTCeAPI(
                    /*API KEY:    */    $this->account_key,
                    /*API SECRET: */    '302bc1d8be7583c32d7cc4e55512b573a12a14179f9a2d5bfce278333452696b'
                      );
        
    }
    
    private function get_tranid()
    {
        $microtime = microtime();
        $comps = explode(' ', $microtime);
        return sprintf('%d%03d', $comps[1], $comps[0] * 1000000);
    }

    /*
     * Chưa sử dụng - chưa coding
     */
    public function create_coupon($params)
    {
        // init start_time
        $start_time = microtime(true);
        $needle = array('account_id', 'unit' , 'money', 'platform', 'service_id' ,'type');
        if (is_required($params, $needle) == TRUE && ctype_digit($params['money']) === TRUE) {
            $unit = strtolower($params['unit']);
            $btc_e_order_id = $this->pre_trans . $this->get_tranid() . rand(1001, 9999);

            // ghi log để dành tra cứu việc gọi API TTKT
            $this->CI->load->model('../third_party/MEAPI/Models/PaymentModel', 'PaymentModel');
            // param log
			$func = __FUNCTION__;
            $idErrors = $this->CI->PaymentModel->setErrorLogs($this->classname,$func,$params["service_id"],$params['transaction_id'], $params["account_id"], 
                $btc_e_order_id, $params["character_id"], $params["character_name"], $params["server_id"], date("Y-m-d H:i:s", time()), 
                "btc_e", "", $params['type'], $params['unit'], $params['money'], $params["platform"], $params['full_request'], "create btc_e_code", $params['ip'], '', 0);

            // Loi insert DB
            if ($idErrors === null){
                return array("code" => "DB_ERROR", "msg" => "DB_ERROR", "data" => null);
            }

            $result = $this->BTCeAPI->apiQuery("getInfo");

            $latency = (microtime(true) - $start_time);

            $result_string = json_encode($result);
            //array(2) { ["success"]=> int(1) ["return"]=> array(4) { ["couponAmount"]=> int(1) ["couponCurrency"]=> string(3) "USD" ["transID"]=> int(2422891557) ["funds"]=> array(15) { ["usd"]=> int(9) ["btc"]=> int(0) ["ltc"]=> int(0) ["nmc"]=> int(0) ["rur"]=> int(0) ["eur"]=> int(0) ["nvc"]=> int(0) ["trc"]=> int(0) ["ppc"]=> int(0) ["ftc"]=> int(0) ["xpm"]=> int(0) ["cnh"]=> int(0) ["gbp"]=> int(0) ["dsh"]=> int(0) ["eth"]=> int(0) } } }
            //Array([success] => 1[return] => Array([coupon] => BTCE-USD-FIOSUJT7-2P7VN56A-E9U8RB3Q-8SFT68O5-ISXNUWTE[transID] => 2420501383[funds] => Array([usd] => 5[btc] => 0[ltc] => 0[nmc] => 0[rur] => 0[eur] => 0[nvc] => 0[trc] => 0[ppc] => 0[ftc] => 0[xpm] => 0[cnh] => 0[gbp] => 0[dsh] => 0[eth] => 0)))
            if ($result['success'] == 1){

                if($result['return']['funds'][$unit] === NULL){
                    return array("code" => "PAY_BTCE_NOT_CURRENCY", "msg" => "PAY_BTCE_NOT_CURRENCY", "data" => $result['return']['funds']);
                }
                if(!empty($result['return']['funds'][$unit]) < $params['money']){
                    return array("code" => "AMOUNT_NOT_ENOUGH", "msg" => "AMOUNT_NOT_ENOUGH", "data" => $result['return']['funds']);
                }

                //tach code
                $resultCoupon = $this->BTCeAPI->createCoupon('USD', $params['money']);
                //$str = '{"success":1,"return":{"coupon":"BTCE-USD-FIOSUJT7-2P7VN56A-E9U8RB3Q-8SFT68O5-ISXNUWTE","transID":2420501383,"funds":{"usd":5,"btc":0,"ltc":0,"nmc":0,"rur":0,"eur":0,"nvc":0,"trc":0,"ppc":0,"ftc":0,"xpm":0,"cnh":0,"gbp":0,"dsh":0,"eth":0}}}';
                //$resultCoupon = json_decode($str,true);

                if ($resultCoupon['success'] == 1 && !empty($resultCoupon['return']['coupon'])) {

                    $this->CI->PaymentModel->setBteLogs($params["service_id"],$this->account_key,$btc_e_order_id,
                        $params["account_id"], $resultCoupon['return']['transID'],
                        $params["character_id"], $params["character_name"],
                        $params["server_id"],
                        date("Y-m-d H:i:s", time()), $params['money'] , $resultCoupon['return']['funds'][$unit] , $resultCoupon['return']['coupon'],$result_string , $params['full_request']);

                    $this->CI->PaymentModel->finishErrorLogs($idErrors, 1, $latency, $result_string);
                    $data = array("msg" => "Tách btc-e code thành công", "coupon" => $resultCoupon['return']['coupon'], "btc_amount"=> $resultCoupon['return']['funds'][$unit] , "btc_transid" => $resultCoupon['return']['transID'], "btc_e_order_id" => $btc_e_order_id,"account_key"=>$this->account_key);
                    return array("code" => "PAY_BTCE_SUCCESS", "msg" => "PAY_BTCE_SUCCESS", "data" => $data);

                }
            }
            $this->CI->PaymentModel->finishErrorLogs($idErrors, 2, $latency, $result_string);
            return array("code" => "PAY_BTCE_FAIL", "msg" => "PAY_BTCE_FAIL", "data" => $result);

        } else {
            $diff = array_diff(array_values($needle), array_keys($params));
            return array("code" => "INVALID_PARAMS", "msg" => "INVALID_PARAMS", "data" => $diff);
        }
    }

    public function redeem_coupon($params)
    {
        // init start_time
        $start_time = microtime(true);
        $needle = array('account_id', 'btc_code', 'platform', 'service_id');
		
        if (is_required($params, $needle) == TRUE) {
			
            $btc_e_order_id = $this->pre_trans . $this->get_tranid() . rand(1001, 9999);
            
            
            // ghi log để dành tra cứu việc gọi API TTKT
			$this->CI->load->model('../third_party/MEAPI/Models/PaymentModel', 'PaymentModel');
            
            // param log
			$paramslog = json_encode(array("btc_code" => trim($params["btc_code"])));
            
			$func = __FUNCTION__;
            $idErrors = $this->CI->PaymentModel->setErrorLogs($this->classname,$func,$params["service_id"],$params['transaction_id'], 
                $params["account_id"], $btc_e_order_id, $params["character_id"], $params["character_name"], $params["server_id"], 
                date("Y-m-d H:i:s", time()), "btc_e", "", 1, "", 0, $params["platform"], $params['full_request'], 
                "redeem btc_e_code", $params['ip'], $paramslog, 0);
            
            // Loi insert DB
            if ($idErrors === null){
                return array("code" => "DB_ERROR", "msg" => "DB_ERROR", "data" => null);
            }
            
            $result = $this->BTCeAPI->redeemCoupon(trim($params["btc_code"]));
            
            // DATA Response
//            Array
//(
//    [success] => 1
//    [return] => Array
//        (
//            [couponAmount] => 5
//            [couponCurrency] => USD
//            [transID] => 2420503469
//            [funds] => Array
//                (
//                    [usd] => 10
//                    [btc] => 0
//                    [ltc] => 0
//                    [nmc] => 0
//                    [rur] => 0
//                    [eur] => 0
//                    [nvc] => 0
//                    [trc] => 0
//                    [ppc] => 0
//                    [ftc] => 0
//                    [xpm] => 0
//                    [cnh] => 0
//                    [gbp] => 0
//                    [dsh] => 0
//                    [eth] => 0
//                )

//        )
            
            $latency = (microtime(true) - $start_time);
            
            $result_string = json_encode($result);
            
            //array(2) { ["success"]=> int(1) ["return"]=> array(4) { ["couponAmount"]=> int(1) ["couponCurrency"]=> string(3) "USD" ["transID"]=> int(2422891557) ["funds"]=> array(15) { ["usd"]=> int(9) ["btc"]=> int(0) ["ltc"]=> int(0) ["nmc"]=> int(0) ["rur"]=> int(0) ["eur"]=> int(0) ["nvc"]=> int(0) ["trc"]=> int(0) ["ppc"]=> int(0) ["ftc"]=> int(0) ["xpm"]=> int(0) ["cnh"]=> int(0) ["gbp"]=> int(0) ["dsh"]=> int(0) ["eth"]=> int(0) } } }
            
            if ($result['success'] == 1){
                $this->CI->PaymentModel->finishErrorLogs($idErrors, 1, $latency, $result_string); 
                
                // chi chap nhan USD
                $value = 0;
                if ($result['return']['couponCurrency'] == 'USD'){
                    // tinh ra VND
                    $value = $result['return']['couponAmount'] * $this->ratio_usd;
                }else{
                    return array("code" => "PAY_BTCE_NOT_CURRENCY_USD", "msg" => "PAY_BTCE_NOT_CURRENCY_USD", "data" => null);
                }
				$this->CI->PaymentModel->setBteRedeemLogs($params["service_id"],$this->account_key,$btc_e_order_id,
                    $params["account_id"], $result['return']['transID'],
                    $params["character_id"], $params["character_name"],
                    $params["server_id"],
                    date("Y-m-d H:i:s", time()), $result['return']['couponAmount'] , $result['return']['couponAmount'] ,$result['return']['couponCurrency'], $params["btc_code"] , $value ,$result_string , $params['full_request']);


                
                $data = array("msg" => "Gạch btc-e code thành công", "value" => $value, "currency" => $result['return']['couponCurrency'], "value_currency" => $result['return']['couponAmount'], "btc_transid" => $result['return']['transID'], "btc_e_order_id" => $btc_e_order_id,"account_key"=>$this->account_key);
                return array("code" => "PAY_BTCE_SUCCESS", "msg" => "PAY_BTCE_SUCCESS", "data" => $data);
            }else{
                $this->CI->PaymentModel->finishErrorLogs($idErrors, 2, $latency, $result_string); 
                return array("code" => "PAY_BTCE_FAIL", "msg" => "PAY_BTCE_FAIL", "data" => $result);
            
            }
        } else {
            $diff = array_diff(array_values($needle), array_keys($params));
            return array("code" => "INVALID_PARAMS", "msg" => "INVALID_PARAMS", "data" => $diff);
        }
    }
	
	
    public function get_account_btc_e($params)
    {
        // init start_time
        $start_time = microtime(true);
        $needle = array('account_key');
        if (is_required($params, $needle) == TRUE) {
			
			$this->BTCeAPI = new BTCeAPI($params['account_key'],$this->data_account[$params['account_key']]);

            $result = $this->BTCeAPI->apiQuery("getInfo");

            if ($result['success'] == 1){
                return $result['return']['funds'];
            }
            return false;
        } else {
            $diff = array_diff(array_values($needle), array_keys($params));
            return array("code" => "INVALID_PARAMS", "msg" => "INVALID_PARAMS", "data" => $diff);
        }
    }
	
	

}
