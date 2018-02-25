<?php

class obj_game_info {

    public $server_id;
    public $character_id;
    public $character_name;
    public $transaction_id;

    public function __construct($params) {
        $map = array(
            'character_id' => 'character_id',
            'character_name' => 'character_name',
            'server_id' => 'server_id'
        );
        if (is_object($params)) {
            foreach ($params as $k => $v) {
                if ($map[$k]) {
                    $this->{$map[$k]} = $v;
                }
            }
        }
    }

}

/**
 * Description of Service_10008: APIs cho game Mộng Hoàng Kim
 *
 * @author vietbl
 */
@require_once APPPATH . 'third_party/MEAPI/Autoloader.php';
@require_once APPPATH . 'third_party/MEAPI/Libraries/Notify.php';
@require_once APPPATH . 'third_party/MEAPI/Libraries/Utility.php';

class Service_10008 {

    private $test_domain = 'http://103.57.220.89'; // for testing
    // BEGIN REAL SERVER
    private $real_domain = 'http://login-mhk.langgame.net:88'; // for prod
    private $api_payment = '/brave_yn3/api/appstoreyn3/pay_handler.php';
    private $api_role_info = '/brave_yn3/api/appstoreyn3/role_info.php';
    private $api_add_item = '/brave_yn3/api/appstoreyn3/add_item.php';
    private $api_substract_item = '/brave_yn3/api/appstoreyn3/subtract_item.php';
    private $api_topdata = '';
    private $api_ccu = '/brave_yn3/api/appstoreyn3/get_ccu.php';
    private $api_kick_user = '';
    private $api_secret = '218';

    private $test_server_id = 999; //
    private $is_test_server = true;

    private $_pixel_app = '5937a9703b9f7bdc73dc0808';
    private $_pixel_key = 'SSPVAOVZPI6T36TI';

    private $CI;
    private $err_msg;
    private $payment_rate = 0; //
    private $payment_unit = 'Vàng';

    function __construct() {

        //gọi function register ở class MeAPI_Autoloader (third_party/MeAPI/Autoloader.php)
        MEAPI_Autoloader::register();
        $this->CI = &get_instance();
    }

    // Lấy tỉ giá pcoin -> KNB
    private function get_yuanbao_ratio($type, $subtype = ''){
        $ratio = 0.1;

        //$type = strtolower($type);
        //$subtype = strtolower($subtype);

        //if ($type == "card" && $subtype == "gate")
        //    $ratio = 1.054; // gate
        //elseif($type == "card" && $subtype != "gate")
        //    $ratio = 1.177; // telco
        //elseif($type == "inapp")
        //    $ratio = 1; //inapp

        return $ratio;
    }

    private function get_api_url($server_id) {
        // BEGIN TEST SERVER
        if ($server_id == $this->test_server_id) {
            $this->api_payment = $this->test_domain . $this->api_payment;

            $this->notify_api_payment = $this->test_domain . $this->notify_api_payment;
            $this->api_role_info = $this->test_domain . $this->api_role_info;
            $this->api_add_item = $this->test_domain . $this->api_add_item;
            $this->api_substract_item = $this->test_domain . $this->api_substract_item;

            return;
        }
        // END TEST SERVER
        $this->api_payment = $this->real_domain . $this->api_payment;

        $this->notify_api_payment = $this->real_domain . $this->notify_api_payment;
        $this->api_role_info = $this->real_domain . $this->api_role_info;
        $this->api_add_item = $this->real_domain . $this->api_add_item;
        $this->api_substract_item = $this->real_domain . $this->api_substract_item;
        $this->is_test_server = false;

        return;
    }

    /*
      Hàm này thực hiện cộng tiền cho gamer
      @input:
      final_get_money == original_get_money means no promotion about gold for gamer
      final_get_money > original_get_money means promotion about gold for gamer
      final_get_money: là số gold gamer sẽ nhận được in-game
     */

    public function recharge(obj_service $service, obj_distribution $distribution, obj_tracking $tracking, obj_game_info $obj_game_info, obj_payment_recharge $obj_payment_recharge, $params, $data = null) {

        // log game info
        $gameinfo_log = json_encode(get_object_vars($params["game_info"])); //json_encode(stdClass -> array) -> chuoi json format

        $games = get_object_vars($params["game_info"]);

        // set platform vào trong gameinfo
        if (isset($params['platform']))
            $games['platform'] = $params['platform'];

        // check valid params
        $needle = array('character_id', 'server_id');
        if (is_required($games, $needle) == FALSE) {
            $diff = array_diff(array_values($needle), array_keys($games));
            return array('status' => false, 'message' => 'INVALID_PARAMS', $diff);
        }

        // init start_time
        $start_time = microtime(true);

        //kiem tra transaction recharge
        $this->CI->load->model('../third_party/MEAPI/Models/PaymentModel', 'PaymentModel');

        //// check duplicate transaction
        //$arrStatusTrans = $this->CI->PaymentModel->getStatusTransaction($service->service_name, trim($obj_payment_recharge->transaction_id));
        //if ($arrStatusTrans == null)
        //    return array('status' => false, 'message' => 'GET_FAIL', 'desc' => 'GET_FAIL');

        //// check trường hợp trùng giao dịch - voi truong hop init trans & gd thanh cong thì ko thuc hien
        //if (in_array($arrStatusTrans['status'], array(0, 1))) {
        //    return array('status' => false, 'message' => 'DUPLICATE_TRANSACTION', 'desc' => 'DUPLICATE_TRANSACTION');
        //}

        //// Với từ chổ TTKT còn gọi qua để nạp tiền game vì vậy gọi hàm topup_wallet để nạp tiền vào ví trước
        ////if (($params['app'] == 'payment' || $obj_payment_recharge->payment_type == 'inapp') && $arrStatusTrans['status'] == -1){
        //if ($obj_payment_recharge->payment_type == 'inapp' && $arrStatusTrans['status'] == -1){
        //    $res_topup = $this->CI->PaymentModel->topup_main_wallet($service->service_name, $obj_payment_recharge->account_id, $obj_payment_recharge->transaction_id, $obj_game_info->character_id, $obj_game_info->character_name, $obj_game_info->server_id, date("Y-m-d H:i:s", $obj_payment_recharge->date),$obj_payment_recharge->payment_type, strtolower($params['payment_subtype']), 1, $this->payment_unit, $obj_payment_recharge->money, $games['platform'], $obj_payment_recharge->full_request,"", $games['ip']);
        //    if ($res_topup == null)
        //        return array('status' => false, 'message' => 'PAY_WALLET_FAIL', 'desc' => 'PAY_WALLET_FAIL');
        //}

        //// status = 2 chính là gd failed - doan code này để phục vụ việc recall giao dịch khi nạp tiền vào game failed trước đó
        //// vì vậy với status != 2 thì mới thực hiện trừ tiền ở ví
        //if ($arrStatusTrans['status'] != 2){
        //    //write log withdraw
        //    $is_withdraw = $this->CI->PaymentModel->withdraw_main_wallet($obj_payment_recharge->account_id, $obj_payment_recharge->money);

        //    if ($is_withdraw === null) {
        //        return array('status' => false, 'message' => 'DB_ERROR', 'desc' => 'DB_ERROR');
        //    }

        //    if ($is_withdraw === false) {
        //        return array('status' => false, 'message' => 'AMOUNT_NOT_ENOUGH', 'desc' => 'AMOUNT_NOT_ENOUGH');
        //    }
        //}

        // ** BEGIN tính toán tỉ lệ ngọc ingame **

        // get tỉ lệ
        $this->payment_rate = $this->get_yuanbao_ratio($obj_payment_recharge->payment_type, $obj_payment_recharge->payment_subtype);

        $obj_payment_recharge->credit = (int) ($obj_payment_recharge->pcoin * $this->payment_rate);
        $obj_payment_recharge->credit_original = (int) ($obj_payment_recharge->pcoin * $this->payment_rate);
        // ** END tính toán tỉ lệ ngọc ingame **

        // chuyển sang tiếng việt ko dấu cho unit đối với hình thức SMS
        $utility = new Utility();
        if ($obj_payment_recharge->payment_type == 'sms') {
            $this->payment_unit = $utility->replaceUnicode($this->payment_unit);
        }

        $promo_credit = 0;
        // BEGIN KM
        if(strtolower($obj_payment_recharge->payment_type) == 'card' && strtolower($obj_payment_recharge->payment_subtype) == 'gate'){
            //khuyến mãi % - card gate
            $promo_credit = (int)($obj_payment_recharge->credit * 0.052632); //
            $obj_payment_recharge->credit = $obj_payment_recharge->credit + $promo_credit;
        }elseif(strtolower($obj_payment_recharge->payment_type) == 'card' && strtolower($obj_payment_recharge->payment_subtype) != 'gate'){
            //khuyến mãi % - card telco
            $promo_credit = (int)($obj_payment_recharge->credit * 0.176471); //
            $obj_payment_recharge->credit = $obj_payment_recharge->credit + $promo_credit;
        }else{
            //khuyến mãi 0%
            $promo_credit = (int)($obj_payment_recharge->credit * 0); //
            $obj_payment_recharge->credit = $obj_payment_recharge->credit + $promo_credit;
        }
        // END KM

        // check duplicate transaction
        $isDuplicate = $this->CI->PaymentModel->checkDuplicateTransaction($service->service_name, trim($obj_payment_recharge->transaction_id));
        if ($isDuplicate) {
            return array('status' => false, 'message' => 'DUPLICATE_TRANSACTION', 'desc' => 'DUPLICATE_TRANSACTION');
        }

        // set transaction
        $idInserted = $this->CI->PaymentModel->setTransaction($service->service_name,$obj_payment_recharge->account_id, $obj_payment_recharge->transaction_id, $obj_game_info->character_id, $obj_game_info->character_name, $obj_game_info->server_id, date("Y-m-d H:i:s", $obj_payment_recharge->date), $obj_payment_recharge->payment_type, $obj_payment_recharge->money, $obj_payment_recharge->pcoin, $obj_payment_recharge->credit_original, $obj_payment_recharge->credit, $obj_payment_recharge->channel, $games['platform'], $gameinfo_log, $tracking->tracking_code, $tracking->maketing_code, $obj_payment_recharge->payment_desc, $obj_payment_recharge->full_request, "", $obj_payment_recharge->source_type, $obj_payment_recharge->source_value);
        if ($idInserted == null) {
            return array('status' => false, 'message' => 'INSERT_TRANSACTION_FAIL', 'desc' => 'INSERT_TRANSACTION_FAIL');
        }

        $data['account_id'] = $obj_payment_recharge->account_id;
        $data['order_id'] = $obj_payment_recharge->transaction_id;
        $data['time_stamp'] = $obj_payment_recharge->date;
        $data['pay_way'] = $obj_payment_recharge->payment_type;
        $data['platform'] = $games['platform'];
        $data['pay_amount'] = $obj_payment_recharge->pcoin;
        $data['final_get_money'] = (int) $obj_payment_recharge->credit;
        $data['original_get_money'] = (int) $obj_payment_recharge->credit_original;
        $data['server_id'] = $obj_game_info->server_id;

        // hash signature
        $original_data = $obj_payment_recharge->account_id . $obj_payment_recharge->transaction_id . $obj_payment_recharge->date . $obj_payment_recharge->payment_type . $games['platform'] . $obj_payment_recharge->pcoin . (int) $obj_payment_recharge->credit . (int) $obj_payment_recharge->credit_original . $obj_game_info->server_id . $this->api_secret;
        $data['sign'] = md5($original_data);

        MEAPI_Log::writeCsv(array("", $original_data, $data['sign'], ""), "debug_10008");

        // build url add money
        $this->get_api_url($obj_game_info->server_id);
        $result = $this->call_api_payment_retry($this->api_payment, http_build_query($data), __FUNCTION__ . '_' . $service->service_name);

		// calc latency
        $latency = (microtime(true) - $start_time);
        if (!empty($result)) {
            $result_log = $result;
            $result = json_decode($result, true);
            if ($result['code'] == 0 && isset($result["code"])) {
                $this->CI->PaymentModel->finishTransaction($service->service_name, $idInserted, 1, $latency, $result_log, $promo_credit); // update status = 1: success

                $utility->push_rabbit_mq($service, $distribution, $tracking, $obj_game_info, $obj_payment_recharge, $params, 1);

                return array('status' => true, 'message' => 'ADD_MONEY_SUCCESS', 'desc' => array('credit' => $obj_payment_recharge->credit,'money' => $obj_payment_recharge->money, 'unit' => $this->payment_unit, 'gapi_transid' => $idInserted, 'msg' => $utility->get_success_messsage($obj_payment_recharge->credit, $this->payment_unit)));
            } else {
                $this->CI->PaymentModel->finishTransaction($service->service_name, $idInserted, 2, $latency, $result_log); // update status = 2: fail

                $utility->push_rabbit_mq($service, $distribution, $tracking, $obj_game_info, $obj_payment_recharge, $params, 0, 'ADD_MONEY_FAIL');

                //notify sms - email
                $Notify = new Notify;
                $Notify->notify_error($service->service_name, 'ADD_MONEY_FAIL', $result_log);

                return array('status' => false, 'message' => 'ADD_MONEY_FAIL', $result_log);
            }
        } else {
            $this->CI->PaymentModel->finishTransaction($service->service_name, $idInserted, 2, $latency, $this->err_msg); // update status = 2: fail
            //$utility->push_rabbit_mq($service, $distribution, $tracking, $obj_game_info, $obj_payment_recharge, $params, 0, 'ADD_MONEY_FAIL');

            //notify sms - email
            $Notify = new Notify;
            $Notify->notify_error($service->service_name, 'CALL_PARTNER_API_FAIL', $this->err_msg);

            return array('status' => false, 'message' => 'ADD_MONEY_FAIL', 'desc' => $this->err_msg);
        }
    }

    /*
     * Chỉ gọi lại duy nhất rabbit mq
     */

    public function recharge_rabbit_mq(obj_service $service, obj_distribution $distribution, obj_tracking $tracking, obj_game_info $obj_game_info, obj_payment_recharge $obj_payment_recharge, $params, $data = null) {
        $utility = new Utility();
        $utility->push_rabbit_mq($service, $distribution, $tracking, $obj_game_info, $obj_payment_recharge, $params, 1);
    }

    /*
     * get game account info
     *
     */

    public function get_game_account_info($params) {

        // check valid params
        $needle = array('account_id', 'server_id');
        if (is_required($params, $needle) == FALSE) {
            return array('status' => false, 'message' => 'INVALID_PARAMS');
        }

        $account_id = $params['account_id'];
        $server_id = $params['server_id'];
        $time_stamp = $params['time_stamp'];

        $data['cmd'] = 'role_info';
        $data['account_id'] = $account_id;
        $data['server_id'] = (int) $server_id;
        $data['time_stamp'] = $time_stamp;
        // hash chữ ký
        $origin_data = $account_id . $time_stamp . $server_id . $this->api_secret;
        $data['sign'] = md5($origin_data);

        // build url get info
        $this->get_api_url($server_id);
        $result = $this->call_api($this->api_role_info, json_encode($data), __FUNCTION__ . '_' . $params['service_name']);
        if (!empty($result)) {
            $result = json_decode($result, true);
            if ($result['result'] == 'ok') {
                $user_info = $result['data'];

                $user_info['character_id'] = $account_id;
                // if mảng 1 chiều ?
                if(isset($user_info["customName"])){
                    $user_info = array($user_info);
                }

                $maps = array("customName" => "character_name", "createTime" => "create_time", "xp" => "exp", "level" => "lv", "coin" => "gold");
                foreach ($user_info as $ukey => $uvalue) {
                    foreach ($maps as $key => $value) {
                        if (isset($user_info[$ukey][$key])) {
                            $oldvalue = $user_info[$ukey][$key];
                            unset($user_info[$ukey][$key]);
                            $user_info[$ukey][$value] = $oldvalue;
                        }
                    }
                }
                return array('status' => true, 'message' => 'GET_GAME_ACCOUNT_INFO_SUCCESS', 'data' => $user_info);
            }
            else
                return array('status' => false, 'message' => 'GET_GAME_ACCOUNT_INFO_FAIL', 'data' => $result);
        }
        return array('status' => false, 'message' => 'GET_GAME_ACCOUNT_INFO_FAIL');
    }

    /*
     * add item
     * luu y: maximum 5 items/request
     * award: json format
     *  [
    {"item_id":1001,"count":1}, //type int
    {"item_id":1002,"count":2},
    ...
    ],
     */

    public function add_item($params) {

        $needle = array('account_id', 'server_id', 'service_name', 'service_id', 'award');
        if (is_required($params, $needle) == FALSE) {
            return array('status' => false, 'message' => 'INVALID_PARAMS');
        }

        $title = $params['title'];
        $content = $params['content'];
        $account_id = $params['account_id'];
        $server_id = $params['server_id'];
        $time_stamp = $params['time_stamp'];
        $award = $params['award'];


        $data = array();
        $data['cmd'] = 'add_item';
        $data['mail_title'] = $title;
        $data['mail_text'] = $content;
        $data['account_id'] = $account_id;
        $data['server_id'] = (int) $server_id;
        $data['time_stamp'] = $time_stamp;

        // hash chữ ký
        $origin_data = $account_id . $time_stamp . $server_id . $award . $this->api_secret;

        $data['add_items'] = json_decode($award, true);
        $data['sign'] = md5($origin_data);

        // build url add items
        $this->get_api_url($server_id);
        $result = $this->call_api($this->api_add_item, json_encode($data), __FUNCTION__ . '_' . $params['service_name']);
        if (!empty($result)) {
            $result = json_decode($result, true);
            if ($result['result'] == 'ok')
                return array('status' => true, 'message' => 'ADD_ITEM_SUCCESS');
            else
                return array('status' => false, 'message' => 'ADD_ITEM_FAIL');
        }
        return array('status' => false, 'message' => 'ADD_ITEM_FAIL');
    }

    /*
     * add item
     * award: json format
     *  [
    {"item_id":1001,"count":1}, //type int
    {"item_id":1002,"count":2},
    ...
    ],
     */

    public function minus_item($params) {

        $needle = array('account_id', 'server_id', 'service_name', 'service_id', 'award');
        if (is_required($params, $needle) == FALSE) {
            return array('status' => false, 'message' => 'INVALID_PARAMS');
        }

        $title = $params['title'];
        $content = $params['content'];
        $account_id = $params['account_id'];
        $server_id = $params['server_id'];
        $time_stamp = $params['time_stamp'];
        $award = $params['award'];


        $data = array();
        $data['cmd'] = 'subtract_item';
        $data['mail_title'] = $title;
        $data['mail_text'] = $content;
        $data['account_id'] = $account_id;
        $data['server_id'] = (int) $server_id;
        $data['time_stamp'] = $time_stamp;

        // hash chữ ký
        $origin_data = $account_id . $time_stamp . $server_id . $award . $this->api_secret;

        $data['add_items'] = json_decode($award, true);
        $data['sign'] = md5($origin_data);

        // build url substract items
        $this->get_api_url($server_id);
        $result = $this->call_api($this->api_substract_item, json_encode($data), __FUNCTION__ . '_' . $params['service_name']);
        if (!empty($result)) {
            $result = json_decode($result, true);
            if ($result['result'] == 'ok')
                return array('status' => true, 'message' => 'MINUS_ITEM_SUCCESS');
            else
                return array('status' => false, 'message' => 'MINUS_ITEM_FAIL');
        }
        return array('status' => false, 'message' => 'MINUS_ITEM_FAIL');
    }

    /*
     * Get top report
     * type: level, coin, vipPoint
     */

    public function get_report_game_info($params) {
        $needle = array('server_id', 'service_name', 'service_id', 'type');
        if (is_required($params, $needle) == FALSE) {
            return array('status' => false, 'message' => 'INVALID_PARAMS');
        }

        $server_id = $params['server_id'];
        $time_stamp = date('Y-m-d H:i:s');
        $type = $params['type'];

        $data = array();
        $data['cmd'] = 'role_info';
        $data['server_id'] = (int) $server_id;
        $data['time_stamp'] = $time_stamp;
        $data['type'] = $type;
        // hash chữ ký
        $origin_data = $time_stamp . $server_id . $this->api_secret;

        $data['sign'] = md5($origin_data);

        // build url substract items
        $result = $this->call_api_post($this->api_topdata, json_encode($data), __FUNCTION__ . '_' . $params['service_name']);
        if (!empty($result)) {
            $result = json_decode($result, true);
            if ($result['result'] == 'ok')
                return array('status' => true, 'message' => 'GET_TOP_SUCCESS', 'data' => $result['data']);
            else
                return array('status' => false, 'message' => 'GET_TOP_FAIL');
        }
        return array('status' => false, 'message' => 'GET_TOP_FAIL');
    }

    /*
     * kick user ra khoi game
     */

    public function kick_user($params) {
        return array('status' => false, 'message' => 'KICK_USER_FAIL');
    }

    /*
     * Get CCU
     */

    public function get_ccu($params) {
        $needle = array('server_id', 'service_name', 'service_id');
        if (is_required($params, $needle) == FALSE) {
            return array('status' => false, 'message' => 'INVALID_PARAMS');
        }

        $server_id = $params['server_id'];
        $time_stamp = date('Y-m-d H:i:s');
        $type = $params['type'];

        $data = array();
        $data['cmd'] = 'role_info';
        $data['server_id'] = (int) $server_id;
        $data['time_stamp'] = $time_stamp;
        $data['type'] = $type;
        // hash chữ ký
        $origin_data = $time_stamp . $server_id . $this->api_secret;

        $data['sign'] = md5($origin_data);

        // build url substract items
        $this->get_api_url($server_id);
        $result = $this->call_api($this->api_ccu, json_encode($data), __FUNCTION__ . '_' . $params['service_name']);
        if (!empty($result)) {
            $result = json_decode($result, true);
            if ($result['result'] == 'ok')
                return array('status' => true, 'message' => 'GET_CCU_SUCCESS', 'data' => $result['data']);
            else
                return array('status' => false, 'message' => 'GET_CCU_FAIL');
        }
        return array('status' => false, 'message' => 'GET_CCU_FAIL');
    }

    /**
     *
     * @param type $service_name
     * @return type
     */
    public function get_server_list($service_name) {
        // call GameModel
        $this->CI->load->model('../third_party/MEAPI/Models/GameModel', 'GameModel');
        //var_dump($service_name);
        $data = $this->CI->GameModel->get_server_list($service_name);

        if ($data != false) {
            return array('status' => true, 'message' => 'GET_INFO_SUCCESS', 'data' => $data);
        } else {
            return array('status' => false, 'message' => 'GET_INFO_FAIL');
        }
    }

    /*
     * Function to call MongGiangHo API
     */

    private function call_api_post($api_url, $data, $log_file_name = 'call_api') {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $api_url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 15);
        $result = curl_exec($ch);
        $err_msg = "";

        if ($result === false)
            $err_msg = curl_error($ch);

        //var_dump($result);
        //die;
        curl_close($ch);
        if ($log_file_name != 'get_game_account_info_monggiangho') { //bo ghi log với chức năng game account
            MEAPI_Log::writeCsv(array($api_url, $data, $result, $err_msg), $log_file_name);
        }
        return $result;
    }

    private function call_api_get($api_url, $data, $log_file_name = 'call_api') {
        set_time_limit(30);
        $urlrequest = $api_url . "?" . $data;
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $urlrequest);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 15);
        $result = curl_exec($ch);

        if ($result === false)
            $this->err_msg = curl_error($ch);

        //var_dump($result);
        //die;
        curl_close($ch);
        MEAPI_Log::writeCsv(array($api_url, $data, $result, $this->err_msg), $log_file_name);
        return $result;
    }

    private function call_api_payment_retry($api_url, $data, $log_file_name = 'call_api') {
        set_time_limit(60);
        $urlrequest = $api_url . "?" . $data;
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $urlrequest);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);

        $result = true;
        $count = 0;
        $max_tries = 2;
        //$req_success = true;
        do {
            $result = curl_exec($ch);
            $count++;
            if($count >= $max_tries) {
                break;
                //$req_success = false;
            }
        }
        while(curl_errno($ch) == 28 || strlen($result) == 0);

        //if($req_success == false) {
        // If it got here it tried 5 times and still didn't get a result.
        // More code here for what you want to do...
        //}

        if ($result === false)
            $this->err_msg = curl_error($ch);

        //var_dump($result);
        //die;
        curl_close($ch);
        MEAPI_Log::writeCsv(array($api_url, $data, $result, $this->err_msg, "call times:" . $count), $log_file_name);
        return $result;
    }

    private function call_api($api_url, $data, $log_file_name = 'call_api') {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $api_url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 15);
        $result = curl_exec($ch);
        $err_msg = "";

        if ($result === false)
            $err_msg = curl_error($ch);

        //var_dump($result);
        //die;
        curl_close($ch);
        if ($log_file_name != 'get_game_account_info_monggiangho'){ //bo ghi log với chức năng game account
            MEAPI_Log::writeCsv(array($api_url, $data, $result, $err_msg), $log_file_name);
        }
        return $result;
    }

	function get_the_current_url() {

        $protocol = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == "on") ? "https" : "http");
        $base_url = $protocol . "://" . $_SERVER['HTTP_HOST'];
        $complete_url =   $base_url . $_SERVER["REQUEST_URI"];

        return $complete_url;

    }

}
