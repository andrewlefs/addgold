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
 * Description of Service_10001: APIs cho game Dau Pha
 *
 * @author vietbl
 */
@require_once APPPATH . 'third_party/MEAPI/Autoloader.php';
@require_once APPPATH . 'third_party/MEAPI/Libraries/Notify.php';
@require_once APPPATH . 'third_party/MEAPI/Libraries/Utility.php';

class Service_10001 {

    private $test_domain = 'http://203.162.80.93'; // for testing
    // BEGIN REAL SERVER
    private $real_domain = 'http://103.57.220.40'; // for prod
    private $api_payment = '/payway/notify_url.php';
    private $api_role_info = '';
    private $api_add_item = '/payway/notify_url.php';
    private $api_substract_item = '';
    private $api_topdata = '';
    private $api_ccu = '';
    private $api_kick_user = '';
    private $api_secret = 'Cg0YsTuiIVEoguY4Xi4r';
    private $test_server_id = 999; //
    private $is_test_server = true;
    //private $_pixel_app = '';
    //private $_pixel_key = '';
    private $CI;
    private $err_msg;
    private $payment_rate = 0.02; //
    private $payment_unit = 'KNB';
    private $card_type_default = '';
    private $arr_card_type_promo = array
        (
        //array("min_pcoin" => 16000, "max_pcoin" => 19000, "card_type" => 1, "is_count" => false, "count" => 0, "desc" => array(1 => "Gói Thẻ Tháng (Bạc)")),
        //array("min_pcoin" => 160000, "max_pcoin" => 190000, "card_type" => 9, "is_count" => false, "count" => 0, "desc" => array(1 => "Gói Thẻ Tháng (Vàng)")),
            //array("min_amount" => 50000, "max_amount" => 66000, "card_type" => 3, "is_count" => false, "count" => 0, "desc" => array(1 => "Gói 500 vàng không giới hạn trong ngày")),
            //array("min_amount" => 200000, "max_amount" => 220000, "card_type" => 4, "is_count" => true, "count" => 1, "desc" => array(1 => "Gói KM 1200 Vàng")),
            //array("min_amount" => 100000, "max_amount" => 110000, "card_type" => 5, "is_count" => true, "count" => 1, "desc" => array(1 => "Gói KM 500 Vàng")),
            //array("min_amount" => 300000, "max_amount" => 330000, "card_type" => 6, "is_count" => true, "count" => 1, "desc" => array(1 => "Gói KM 1800 Vàng")),
            //array("min_amount" => 500000, "max_amount" => 550000, "card_type" => 7, "is_count" => true, "count" => 1, "desc" => array(1 => "Gói KM 4600 Vàng"))
    );

    function __construct() {

        //gọi function register ở class MeAPI_Autoloader (third_party/MeAPI/Autoloader.php)
        MEAPI_Autoloader::register();
        $this->CI = &get_instance();
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



        // check duplicate transaction
        //$arrStatusTrans = $this->CI->PaymentModel->getStatusTransaction($service->service_name, trim($obj_payment_recharge->transaction_id));
        //if ($arrStatusTrans == null)
        //    return array('status' => false, 'message' => 'GET_FAIL', 'desc' => 'GET_FAIL');

        //// check trường hợp trùng giao dịch - voi truong hop init trans & gd thanh cong thì ko thuc hien
        //if (in_array($arrStatusTrans['status'], array(0, 1))) {
        //    return array('status' => false, 'message' => 'DUPLICATE_TRANSACTION', 'desc' => 'DUPLICATE_TRANSACTION');
        //}

        //// Với từ chổ TTKT còn gọi qua để nạp tiền game vì vậy gọi hàm topup_wallet để nạp tiền vào ví trước
        ////if (($params['app'] == 'payment' || $obj_payment_recharge->payment_type == 'inapp') && $arrStatusTrans['status'] == -1){
        //if ($obj_payment_recharge->payment_type == 'inapp' && $arrStatusTrans['status'] == -1) {
        //    $res_topup = $this->CI->PaymentModel->topup_main_wallet($service->service_name, $obj_payment_recharge->account_id, $obj_payment_recharge->transaction_id, $obj_game_info->character_id, $obj_game_info->character_name, $obj_game_info->server_id, date("Y-m-d H:i:s", $obj_payment_recharge->date), $obj_payment_recharge->payment_type, strtolower($params['payment_subtype']), 1, $this->payment_unit, $obj_payment_recharge->money, $games['platform'], $obj_payment_recharge->full_request, "", $games['ip']);
        //    if ($res_topup == null)
        //        return array('status' => false, 'message' => 'PAY_WALLET_FAIL', 'desc' => 'PAY_WALLET_FAIL');
        //}

        //// status = 2 chính là gd failed - doan code này để phục vụ việc recall giao dịch khi nạp tiền vào game failed trước đó
        //// vì vậy với status != 2 thì mới thực hiện trừ tiền ở ví
        //if ($arrStatusTrans['status'] != 2) {
        //    //write log withdraw
        //    $is_withdraw = $this->CI->PaymentModel->withdraw_main_wallet($obj_payment_recharge->account_id, $obj_payment_recharge->money);

        //    if ($is_withdraw === null) {
        //        return array('status' => false, 'message' => 'DB_ERROR', 'desc' => 'DB_ERROR');
        //    }

        //    if ($is_withdraw === false) {
        //        return array('status' => false, 'message' => 'AMOUNT_NOT_ENOUGH', 'desc' => 'AMOUNT_NOT_ENOUGH');
        //    }
        //}


        // BEGIN tính toán tỉ lệ ngọc ingame
        $obj_payment_recharge->credit = (int) ($obj_payment_recharge->pcoin * $this->payment_rate);
        $obj_payment_recharge->credit_original = (int) ($obj_payment_recharge->pcoin * $this->payment_rate);
        // END tính toán tỉ lệ ngọc ingame
        // chuyển sang tiếng việt ko dấu cho unit đối với hình thức SMS
        $utility = new Utility();
        if ($obj_payment_recharge->payment_type == 'sms') {
            $this->payment_unit = $utility->replaceUnicode($this->payment_unit);
        }

        // BEGIN XU LY THE THANG 50K-100K & PROMO ITEM

        $promo_item_desc = "";
        $promo_item_amount = $obj_payment_recharge->pcoin;

        $this->card_type_default = $obj_payment_recharge->pcoin;

        $card_type = $this->card_type_default;
        $is_check_count = false; // bien check item có cần check số lần nhận
        $count_promo_items = 0; // bien dem so lần nhận KM
        $promo_knb = $obj_payment_recharge->credit;
        $is_store_item_promo = false;

        $count_loop = 0; //cnt loop

        if (array_key_exists("card_type", $games)) {
            $game_card_type = $games['card_type'];

            foreach ($this->arr_card_type_promo as $row) {
                if ($game_card_type == $row['card_type'] && $obj_payment_recharge->pcoin >= $row['min_pcoin'] && $obj_payment_recharge->pcoin <= $row['max_pcoin']) {
                    $promo_item_amount = $row['min_pcoin']; //lay gia tri min money de ghi log & truyen sang api china

                    $is_check_count = $row['is_count'];
                    if ($is_check_count == true)
                        $count_promo_items = $row['count'];
                    else
                        $promo_item_desc = $row['desc'][1]; // gan thong bao doi voi nhung item ko can kiem tra so lan

                    // tinh knb promo
                    $promo_knb = (int) ($promo_item_amount * $this->payment_rate);

                    $card_type = $game_card_type;

                    $is_store_item_promo = true;

                    break;
                }else {
                    // reset card_type
                    $card_type = $this->card_type_default;
                }
                // tang bien count
                $count_loop = $count_loop + 1;
            }
        }

        // Voi nhung item promo can kiem tra da co nhận hay đủ chưa?
        if ($is_check_count == true) {
            $count_promo_items_received = $this->CI->PaymentModel->getCountItemPromo($service->service_name, $obj_payment_recharge->mobo_service_id, $obj_game_info->server_id, $promo_item_amount, $card_type, $obj_game_info->character_id);

            // Check item promo da nhan hay chua ?
            if ($count_promo_items_received >= $count_promo_items) {
                $promo_item_amount = $obj_payment_recharge->pcoin; // gan lai gia tri pcoin ban dau
                $promo_knb = $obj_payment_recharge->credit; // gan lai gia tri knb ban dau

                $card_type = $this->card_type_default;
                $is_store_item_promo = false; // ko luu log promo
            } else
                $promo_item_desc = $this->arr_card_type_promo[$count_loop]['desc'][$count_promo_items_received + 1]; // lay thong bao hien thi cho user
        }

        // END XU LY THE THANG 50K-100K & PROMO ITEM

        // check duplicate transaction
        $isDuplicate = $this->CI->PaymentModel->checkDuplicateTransaction($service->service_name, trim($obj_payment_recharge->transaction_id));
        if ($isDuplicate) {
            return array('status' => false, 'message' => 'DUPLICATE_TRANSACTION', 'desc' => 'DUPLICATE_TRANSACTION');
        }

        // set transaction
        $idInserted = $this->CI->PaymentModel->setTransaction($service->service_name, $obj_payment_recharge->account_id, $obj_payment_recharge->transaction_id, $obj_game_info->character_id, $obj_game_info->character_name, $obj_game_info->server_id, date("Y-m-d H:i:s", $obj_payment_recharge->date), $obj_payment_recharge->payment_type, $obj_payment_recharge->money, $obj_payment_recharge->pcoin, $obj_payment_recharge->credit_original, $obj_payment_recharge->credit, $obj_payment_recharge->channel, $games['platform'], $gameinfo_log, $tracking->tracking_code, $tracking->maketing_code, $obj_payment_recharge->payment_desc, $obj_payment_recharge->full_request, "", $obj_payment_recharge->source_type, $obj_payment_recharge->source_value);
        if ($idInserted == null) {
            return array('status' => false, 'message' => 'INSERT_TRANSACTION_FAIL', 'desc' => 'INSERT_TRANSACTION_FAIL');
        }

        //KM
        //$promo_money = 0;
        //$promo_money = $utility->promotion($this->CI->PaymentModel, $service->service_name, $obj_game_info->server_id, $obj_payment_recharge->account_id, $obj_payment_recharge->account_service_id, strtolower($obj_payment_recharge->source_type), $obj_payment_recharge->source_value, (int) $obj_payment_recharge->credit, $obj_payment_recharge->date);
        //$obj_payment_recharge->credit = $obj_payment_recharge->credit + $promo_money;
        // Hard-code TEST TAM
        //$games['card_type'] = 1;
        // Hard-code TEST TAM

        $data['account_id'] = $obj_payment_recharge->account_id;
        $data['order_id'] = $obj_payment_recharge->transaction_id;
        $data['time_stamp'] = $obj_payment_recharge->date;
        $data['pay_way'] = $obj_payment_recharge->payment_type;
        $data['pay_amount'] = $obj_payment_recharge->pcoin;
        $data['final_get_money'] = $obj_payment_recharge->credit;
        $data['original_get_money'] = $obj_payment_recharge->credit_original;
        $data['character_id'] = $obj_game_info->character_id;
        $data['server_id'] = $obj_game_info->server_id;
        $data['to_character_name'] = $games['to_character_name'];
        $data['card_type'] = $card_type;

        // hash signature
        $original_data = $data['account_id'] . $data['order_id'] . $data['time_stamp'] . $data['pay_way'] . $data['pay_amount'] . $data['final_get_money'] . $data['original_get_money'] . $data['server_id'] . $this->api_secret;

        //echo $original_data;
        //echo '-------';

        $data['sign'] = md5($original_data);

        // build url add money
        $this->get_api_url($obj_game_info->server_id);
        $result = $this->call_api_get($this->api_payment, http_build_query($data), __FUNCTION__ . '_' . $service->service_name);

        //KM
        $promoCount = 0;
        $promo_money = 0;
        $promoCount = $utility->promotion($this->CI->PaymentModel, $service->service_name, $obj_game_info->server_id, $obj_payment_recharge->account_id, $obj_game_info->character_id, strtolower($obj_payment_recharge->payment_type), $obj_payment_recharge->money, (int) $obj_payment_recharge->credit, $obj_payment_recharge->date);
        if ($promoCount > 0) {
            $cloneOrderId = $data['order_id'];
            for ($idx = 0; $idx < $promoCount; $idx++) {
                sleep(1);
                $data['order_id'] = $cloneOrderId . "_" . $idx;
                $original_data = $data['account_id'] . $data['order_id'] . $data['time_stamp'] . $data['pay_way'] . $data['pay_amount'] . $data['final_get_money'] . $data['original_get_money'] . $data['server_id'] . $this->api_secret;
                //echo $original_data;
                //echo '-------';
                $data['sign'] = md5($original_data);

                $resultPromo = $this->call_api_get($this->api_payment, http_build_query($data), __FUNCTION__ . '_' . $service->service_name);
                if (empty($resultPromo) == false) {
                    $resultPromo = json_decode($resultPromo, true);
                    if (isset($resultPromo["code"]) && $resultPromo['code'] == 0) {
                        $promo_money += floatval($data['final_get_money']);
                    }
                }
            }
        }
        // calc latency
        $latency = (microtime(true) - $start_time);
        if (!empty($result)) {
            $result_log = $result;
            $result = json_decode($result, true);
            if ($result['code'] == 0 && isset($result["code"])) {
                $this->CI->PaymentModel->finishTransaction($service->service_name, $idInserted, 1, $latency, $result_log, $promo_money); // update status = 1: success
                // luu tru promo item user dan nhan duoc
                if ($is_store_item_promo)
                    $this->CI->PaymentModel->storeItemPromo($service->service_name, $obj_payment_recharge->account_id, $obj_payment_recharge->transaction_id, $obj_game_info->character_id, $obj_game_info->character_name, $obj_game_info->server_id, $promo_item_amount, $obj_payment_recharge->money, $promo_knb, $promo_item_desc, $idInserted, $card_type);

                $utility->push_rabbit_mq($service, $distribution, $tracking, $obj_game_info, $obj_payment_recharge, $params, 1);

                if ($is_store_item_promo)
                    return array('status' => true, 'message' => 'ADD_MONEY_SUCCESS', 'desc' => array('credit' => $promo_knb, 'money' => $obj_payment_recharge->money, 'unit' => $this->payment_unit, 'gapi_transid' => $idInserted, 'message' => $this->get_success_messsage($this->payment_unit, null, $promo_item_desc)));

                return array('status' => true, 'message' => 'ADD_MONEY_SUCCESS', 'desc' => array('credit' => $obj_payment_recharge->credit, 'money' => $obj_payment_recharge->money, 'unit' => $this->payment_unit, 'gapi_transid' => $idInserted, 'msg' => $utility->get_success_messsage($obj_payment_recharge->credit, $this->payment_unit)));
            } else {
                $this->CI->PaymentModel->finishTransaction($service->service_name, $idInserted, 2, $latency, $result_log); // update status = 2: fail
                //$utility->push_rabbit_mq($service, $distribution, $tracking, $obj_game_info, $obj_payment_recharge, $params, 0, 'ADD_MONEY_FAIL');
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
     * http://gapi.dllglobal.net/?control=game&func=get_game_account_info&account_id=989411371&service_id=1000&app=10001&token=e28ac1977b570a1cd9ae99f275c125d8&server_id=1&service_name=1000
     * output: {
      "code": 0,
      "desc": "GET_GAME_ACCOUNT_INFO_SUCCESS",
      "data": [
      {
      "gold": 418147,
      "character_name": "gak",
      "character_id": 6430378
      }
      ],
      "message": "GET_GAME_ACCOUNT_INFO_SUCCESS"
      }
     */

    public function get_game_account_info($params) {

        // check valid params
        $needle = array('account_id');
        if (is_required($params, $needle) == FALSE) {
            return array('status' => false, 'message' => 'INVALID_PARAMS');
        }

        $log_file_name = __FUNCTION__ . "_10001";

        $this->get_api_url($params['server_id']);

        $this->CI->load->model('../third_party/MEAPI/Models/DPModel', 'DPModel');

        $this->CI->DPModel->set_test_server($this->is_test_server, $params['server_id']);

        $user_info = $this->CI->DPModel->get_account_game_info($params['account_id']);
        if (count($user_info) == 0 || $user_info == false){
            MEAPI_Log::writeCsv(array($params['account_id'], 0, 'GET_GAME_ACCOUNT_NOT_FOUND'), $log_file_name);
            return array('status' => false, 'message' => 'GET_GAME_ACCOUNT_NOT_FOUND'); // khong tìm thấy nhan vat
        }

        $maps = array("name" => "character_name", "id" => "character_id", "level" => "level");
        foreach ($user_info as $ukey => $uvalue) {
            foreach ($maps as $key => $value) {
                if (isset($user_info[$ukey][$key])) {
                    $oldvalue = $user_info[$ukey][$key];
                    unset($user_info[$ukey][$key]);
                    $user_info[$ukey][$value] = $oldvalue;
                }
            }
        }

        if (empty($user_info[0]['character_name']))
            $user_info[0]['character_name'] = $user_info[0]['character_id'];

        MEAPI_Log::writeCsv(array($params['account_id'], json_encode($user_info), 'GET_GAME_ACCOUNT_INFO_SUCCESS'), $log_file_name);
        return array('status' => true, 'message' => 'GET_GAME_ACCOUNT_INFO_SUCCESS', 'data' => $user_info);
    }

    /*
     * add item
     * luu y: maximum ? different items/request
     * award: json format
     * [{"item_id":1001,"count":100}], //type = 1 => silver, item_id = 0
     * http://gapi.addgold.net/?control=game&func=add_item&account_id=989411371&server_id=1&service_name=10001&service_id=10001&amount_vnd=10000&time_stamp=2015-05-05 08:00:13&award=[{"item_id":1,"count":1}]&title=Test thử add vàng&content=Test thử add vàng&app=xxx&token=xxx
     */

    public function add_item($params) {
        $needle = array('account_id', 'character_id', 'server_id', 'service_name', 'service_id', 'award');
        if (is_required($params, $needle) == FALSE) {
            $diff = array_diff(array_values($needle), array_keys($params));
            return array('status' => false, 'message' => 'INVALID_PARAMS', $diff);
        }

        $this->get_api_url($params['server_id']);

        //kiem tra transaction recharge
        $this->CI->load->model('../third_party/MEAPI/Models/GameModel', 'GameModel');

        $idInserted = $this->CI->GameModel->set_event_item($params['service_name'], $params['account_id'], $params['transaction_id'], $params['character_id'], $params['character_name'], $params['server_id'], 0, 0, $params['time_stamp'], $params['award'], $params['title'], __FUNCTION__, $params['full_request']);
        if ($idInserted == null)
            return array('status' => false, 'message' => 'INSERT_EVENT_TRANSACTION_FAIL', 'desc' => 'INSERT_EVENT_TRANSACTION_FAIL');

        $awards = json_decode($params['award'], true);

        //validate item
        $constItems = array(10000, 20000, 50000, 100000, 200000, 300000, 400000, 500000);
        foreach ($awards as $key => $value) {
            if (!in_array($value["item_id"], $constItems)) {
                return array('status' => false, 'message' => 'ADD_ITEM_FAIL');
            }
        }
        $resultFull = array();
        $flag = true;
        $jumb = 0;

        foreach ($awards as $key => $value) {
            $orderId = $params['transaction_id'];
            $count = $value["count"];
            $amount_vnd = floatval($value["item_id"]);

            // Do game dùng api recharge để tặng vàng cho user
            // sử dụng quy đổi telco ra pcoin
            // quy đổi theo tỉ lệ tiền game như hàm recharge
            $pcoin = $amount_vnd * 0.85; // telco

            for ($idx = 0; $idx < $count; $idx++) {
                $data['account_id'] = $params['account_id'];
                $data['order_id'] = $orderId . "_" . $jumb;
                $data['time_stamp'] = strtotime($params['time_stamp']);
                $data['pay_way'] = 'card';
                $data['pay_amount'] = $amount_vnd;
                $data['final_get_money'] = ($amount_vnd / 100);
                $data['original_get_money'] = ($amount_vnd / 100);
                $data['character_id'] = $params['character_id'];
                $data['server_id'] = $params['server_id'];
                //$data['to_character_name'] = '';
                $data['card_type'] = $pcoin . "";

                // hash signature
                $original_data = $data['account_id'] . $data['order_id'] . $data['time_stamp'] . $data['pay_way'] . $data['pay_amount'] . $data['final_get_money'] . $data['original_get_money'] . $data['server_id'] . $this->api_secret;

                $data['sign'] = md5($original_data);

                // get url add item
                //$this->get_api_url($params['server_id']);
                // build url add items
                $result = $this->call_api_get($this->api_add_item, http_build_query($data), __FUNCTION__ . '_' . $params['service_name']);

                if (!empty($result)) {
                    $result = json_decode($result, true);
                    if (is_numeric($result["code"]) && $result['code'] != 0) {
                        $flag = false;
                    }
                }
                $resultFull[] = $result;
                $jumb++;
                sleep(1);
            }
        }

        if ($flag) {
            $this->CI->GameModel->finish_event_item($params['service_name'], $idInserted, 1, json_encode($resultFull)); // update status = 1: success
            return array('status' => true, 'message' => 'ADD_ITEM_SUCCESS', "data" => $resultFull);
        } else {
            $this->CI->GameModel->finish_event_item($params['service_name'], $idInserted, 2, json_encode($resultFull)); // update status = 2: fail
            return array('status' => false, 'message' => 'ADD_ITEM_FAIL', "data" => $resultFull);
        }
    }

    /*
     * add item
     * award: json format
      http://gapi.dllglobal.net/?control=game&func=minus_item&account_id=989411371&server_id=1&service_name=1000&service_id=1000&time_stamp=2015-05-05+08%3A00%3A13&award=[{"item_id":1001,"count":1}]&title=Test thử add vàng&content=Test thử add vàng&app=1000&token=fea1a7f3c702172421cba21d105b61e8
     */

    public function minus_item($params) {

        $needle = array('account_id', 'server_id', 'service_name', 'service_id', 'award');
        if (is_required($params, $needle) == FALSE) {
            return array('status' => false, 'message' => 'INVALID_PARAMS');
        }


        // call GameModel
        $this->CI->load->model('../third_party/MEAPI/Models/GameModel', 'GameModel');
        //set transaction
        $full_request = $this->get_the_current_url();

        $idInserted = $this->CI->GameModel->set_item_trans(
                $params['service_name'], $params['account_id'], $params['order_id'], $params['character_id'], $params['character_name'], $params['award'], $params['evt'], $params['time_stamp'], $full_request, "sub"
        );
        if ($idInserted == null) {
            return array('status' => false, 'message' => 'INSERT_TRANSACTION_FAIL', 'desc' => 'INSERT_TRANSACTION_FAIL');
        }
        $transaction_id = $params['order_id'];

        $credit = 0;
        $awards = json_decode($params['award'], true);
        if ($awards) {
            foreach ($awards as $award) {
                $credit += (int) $award["count"];
            }
            $credit = ($credit * (-1));
        }


        $title = $params['title'];
        $content = $params['content'];
        $account_id = $params['account_id'];
        $server_id = $params['server_id'];
        $time_stamp = strtotime($params['time_stamp']);
        $award = $params['award'];

        $data = array();
        $data['mail_title'] = $title;
        $data['mail_content'] = $content;
        $data['account_id'] = $account_id;
        $data['time_stamp'] = $time_stamp;
        $data['server_id'] = (int) $server_id;
        $data['items'] = $award;

        // hash chữ ký
        $origin_data = $account_id . $time_stamp . $server_id . $award . $this->china_secret_key;
        $data['sign'] = md5($origin_data);

        // get url add item
        $this->get_api_url($server_id);

        // build url substract items
        $result = $this->call_api_get($this->api_substract_item, http_build_query($data), __FUNCTION__ . '_' . $params['service_name']);
        if (!empty($result)) {
            $result = json_decode($result, true);
            if (is_numeric($result['code']) && $result['code'] == 0) {
                $this->CI->GameModel->finish_item_trans($params['service_name'], $idInserted, $transaction_id, 1, json_encode($result), $credit); // update status = 2: fail
                return array('status' => true, 'message' => 'MINUS_ITEM_SUCCESS');
            } else {
                $this->CI->GameModel->finish_item_trans($params['service_name'], $idInserted, $transaction_id, 2, json_encode($result), $credit); // update status = 2: fail
                return array('status' => false, 'message' => 'MINUS_ITEM_FAIL');
            }
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

        $data = array();
        $data['serverId'] = (int) $server_id;
        // hash chữ ký
        //$origin_data = $server_id . $this->api_secret;
        //$data['sign'] = md5($origin_data);

        $this->get_api_url($server_id);

        $result = $this->call_api_get($this->api_ccu, http_build_query($data), __FUNCTION__ . '_' . $params['service_name']);
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

    function get_the_current_url() {

        $protocol = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == "on") ? "https" : "http");
        $base_url = $protocol . "://" . $_SERVER['HTTP_HOST'];
        $complete_url = $base_url . $_SERVER["REQUEST_URI"];

        return $complete_url;
    }

}
