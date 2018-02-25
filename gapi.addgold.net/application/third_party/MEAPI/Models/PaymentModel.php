<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of PaymentModel
 *
 * @author vietbl
 */
class PaymentModel extends CI_Model {

    protected $dbMaster;
    protected $dbSlave;
    protected $this_class;
    protected $this_func;
    protected $curDate;

    public function __construct() {
        parent::__construct();

        // current class name
        $this->this_class = __CLASS__;
        // current date
        $this->curDate = date('Y-m-d H:i:s');

        if (empty($this->dbSlave))
            $this->dbSlave = $this->load->database(array('db' => 'user_info', 'type' => 'slave'), true);
        if (empty($this->dbMaster))
            $this->dbMaster = $this->load->database(array('db' => 'user_info', 'type' => 'master'), true);
    }

    /*
     * Chức năng ghi log
     */

    private function write_log_message($message) {
        log_message('error', $this->this_class . ' - ' . $this->this_func . ' --> ' . $message);
    }

    /*
     * Check duplicate transaction
     */

    public function checkDuplicateTransaction($service_name, $transaction_id) {
        // init log
        $this->this_func = __FUNCTION__;

        $trans_query = $this->dbMaster->select("transaction_id")
                ->from('cash_to_game_trans_' . $service_name)
                ->where("transaction_id", $transaction_id)
                ->where_in("status", array(0, 1)) //0: transaction init; 1: transaction success
                ->get();

        // check error
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message());
            return false;
        }

        if ($trans_query->num_rows() > 0) {
            return true;
        }
        return false;
    }

    /*
     * lấy status Transaction
     */
    public function getStatusTransaction($service_name, $transaction_id) {
        // init log
        $this->this_func = __FUNCTION__;

        $trans_query = $this->dbMaster->select("transaction_id, status")
                ->from('cash_to_game_trans_' . $service_name)
                ->where("transaction_id", $transaction_id)
                ->order_by("date", "desc")
                ->limit(1)
                //->where_in("status", array(0, 1,2)) //0: transaction init; 1: transaction success
                ->get();

        // check error
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message());
            return null;
        }

        if ($trans_query->num_rows() > 0) {
            return $trans_query->row_array();
        }

        // giao dich chưa có tồn tại trong log.
        return array("transaction_id" => $transaction_id, "status" => -1);
    }

    public function setTransaction($service_name, $account_id, $transaction_id, $character_id, $character_name, $server_id, $time_stamp, $type, $amountVND, $pcoin, $origin_gold, $gold, $channel, $platform, $games, $tracking_code, $marketing_code, $payment_desc, $full_request, $description = '', $source_type = null, $source_value = 0) {
        // init log
        $this->this_func = __FUNCTION__;
        $this->dbMaster->set('date', $this->curDate)
                ->set('account_id', $account_id)
                ->set('transaction_id', $transaction_id)
                ->set('character_id', $character_id)
                ->set('character_name', $character_name)
                ->set('tracking_code', $tracking_code)
                ->set('marketing_code', $marketing_code)
                ->set('server_id', $server_id)
                ->set('time_stamp', $time_stamp)
                ->set('type', $type)
                ->set('amount', $pcoin)
                ->set('amountVND', $amountVND)
                ->set('origin_money', $origin_gold)
                ->set('money', $gold)
                ->set('channel', $channel)
                ->set('platform', $platform)
                ->set('games', $games)
                ->set('status', 0)
                ->set('event_id', 0)
                ->set('description', $description)
                ->set('is_promo_payment', 0)
                ->set('payment_desc', $payment_desc);
        if (!empty($source_type)) {
            $this->dbMaster->set('source_type', $source_type);
        }
        if (!empty($source_value)) {
            $this->dbMaster->set('source_value', $source_value);
        }
        $this->dbMaster->set('full_request', $full_request)
                ->insert('cash_to_game_trans_' . $service_name);

//        var_dump($this->dbMaster->last_query());
//        die;
        // check error
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message() . ',' . $full_request);
            //show_error($this->dbMaster->_error_message());
            return null;
        }

        if ($this->dbMaster->affected_rows() > 0)
            return $this->dbMaster->insert_id();
    }

    public function finishTransaction($service_name, $idInserted, $status, $latency, $description = '', $promo_money = 0) {
        // init log
        $this->this_func = __FUNCTION__;

        $this->dbMaster->set('status', $status)
                ->set('latency', $latency)
                ->set('description', $description)
                ->set('promo_money', $promo_money)
                ->where('id', $idInserted)
                ->update('cash_to_game_trans_' . $service_name);

        // check error
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message());
        }
    }

    public function updateGameInfo($service_name, $idInserted, $gameinfo) {
        // init log
        $this->this_func = __FUNCTION__;

        $this->dbMaster->set('gameinfo', $gameinfo)
                ->where('id', $idInserted)
                ->update('cash_to_game_trans_' . $service_name);
        // check error
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message());
        }
    }

    //danh dau msi da tham gia khuyen mai nap lan dau
    public function setMarkMsiPromotion($service_name, $mobo_service_id, $server_id, $day = 0) {
        // init log
        $this->this_func = __FUNCTION__;
        $this->dbMaster->set('date', $this->curDate)
                ->set('msi', $mobo_service_id)
                ->set('server_id', $server_id)
                ->set('day', $day)
                ->set('game', $service_name)
                ->insert('mark_msi_promotion');

//        var_dump($this->dbMaster->last_query());
//        die;
        // check error
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message() . ',' . $full_request);
            //show_error($this->dbMaster->_error_message());
            return null;
        }

        if ($this->dbMaster->affected_rows() > 0)
            return $this->dbMaster->insert_id();
    }

    public function getMSIPromotion($service_name, $mobo_service_id, $server_id) {
        // init log
        $this->this_func = __FUNCTION__;

        $trans_query = $this->dbMaster->select("*", false)
                ->from('mark_msi_promotion')
                ->where_in("server_id", $server_id) //0: deactive; 1: active
                ->where_in("msi", $mobo_service_id)
                ->where_in("game", $service_name)
                ->get();
        //echo $this->dbMaster->last_query();die;
        // check error
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message());
            return false;
        }
        if ($trans_query != false)
            return $trans_query->row_array();
        return false;
    }

    public function get_counts($character_id, $server_id, $service_name, $startday, $endday, $first, $type, $amount) {
        // init log
        $this->this_func = __FUNCTION__;

        $this->dbMaster->select("count(0) as `count`, sum(amount) as `sum_amount`, sum(origin_money) as `sum_origin_money`, sum(money) as `sum_money`", false)
                ->from('cash_to_game_trans_' . $service_name)
                ->where_in("server_id", $server_id) //0: deactive; 1: active
                ->where_in("character_id", $character_id);
        if (!empty($startday)) {
            $this->dbMaster->where("time_stamp >= ", $startday);
        }
        if (!empty($endday)) {
            $this->dbMaster->where("time_stamp <= ", $endday);
        }
        if (!empty($type)) {
            $strtype = "";
            foreach ($type as $key => $value) {
                if(!empty($strtype)){
                    $strtype .= ",";
                }
                $strtype .= "'" . $value . "'";
            }
            $this->dbMaster->where("(type in ({$strtype}) or source_type in ({$strtype}))", null, false);
        }
        if (!empty($amount)) {
            $stramount = "";
            foreach ($amount as $key => $value) {
                if(!empty($stramount)){
                    $stramount .= ",";
                }
                $stramount .= $value;
            }
            $this->dbMaster->where("(amount in ({$stramount}) or source_value in ({$stramount}))", null, false);
        }

        //var_dump($type);
        $this->dbMaster->where_in("status", array(1)); //0: deactive; 1: active
        if ($first >= 1)
            $this->dbMaster->limit($first);
        $trans_query = $this->dbMaster->order_by("time_stamp", "asc")
                ->get();
        //if($character_id == "1131515071566985118")
        //	echo $this->dbMaster->last_query();die;
        // check error
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message("msi:" . $character_id . "-->" . $this->dbMaster->_error_message());
            return -1;
        }
        if ($trans_query != false)
            return $trans_query->row_array();
        else
            return array("count" => 0, "sum_amount" => 0, "sum_origin_money" => 0, "sum_money" => 0);
    }

    public function get_promotion($service_name, $server_id, $date) {
        // init log
        $this->this_func = __FUNCTION__;

        $trans_query = $this->dbMaster->select("*", false)
                ->from('defined_promotion')
                ->where("game", $service_name)
                ->where("(server_ids like '%[$server_id]%' or server_ids is null or server_ids = '' or FIND_IN_SET('" . $server_id . "',`server_ids`) > 0) ", "", false) //0: deactive; 1: active
                ->where("end >= ", $date)
                ->where("start <= ", $date)
                ->where("status", 1) //0: deactive; 1: active
                ->order_by("publisher", "asc")
                ->order_by("priority", "desc")
                ->get();
        //echo $this->dbMaster->last_query();die;
        //check error
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message());
            return false;
        }

        if ($trans_query->num_rows() > 0) {
            return $trans_query->result_array();
        }
        return false;
    }

    /*
     * Ghi log cho game bai888 phuc vu rule cashout
     */
    public function updateAccMoney($service_name, $account_id, $credit, $amount) {
        // init log
        $this->this_func = __FUNCTION__;
		$date = date('Y-m-d H:i:s',time());
        $this->dbMaster->query("INSERT INTO account_money_{$service_name}(`account_id`,`time_stamp`,`modify_date`,`total_credit`,`total_amount`) VALUES ('{$account_id}','{$date}','{$date}',{$credit},{$amount}) ON DUPLICATE KEY UPDATE `modify_date`='{$date}', `total_credit`=`total_credit`+{$credit}, `total_amount`=`total_amount`+{$amount}");

        //check error
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message());
            return false;
        }

		if ($this->dbMaster->affected_rows() > 0){
			return true;
		}
        return false;
    }

	/****CASH_IN*****/

    public function checkExistsTransaction($service_name, $account_id, $transaction_id) {
        // init log
        $this->this_func = __FUNCTION__;

        $trans_query = $this->dbMaster->select("id, amountVND, payment_type, payment_subtype")
            ->from('cash_in')
            ->where("account_id", $account_id)
            ->where("transaction_id", $transaction_id)
            ->where("status", 1) //0: transaction init; 1: transaction success
            ->get();
        // check error
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message());
            return false;
        }
        if ($trans_query->num_rows() > 0) {
            return $trans_query->row_array();
        }
        return false;
    }

    public function finishCashIn($idInserted, $status) {
        // init log
        $this->this_func = __FUNCTION__;

        $this->dbMaster->set('status', $status)
            ->where('id', $idInserted)
            ->update('cash_in');

        // check error
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message());
        }
    }

    public function get_wallet_info($account_id, $client_ip){
        // Lấy số tồn
		$user_amount = $this->dbMaster->select("id, amount, amount_cashin, amount_cashout", false)
            ->from("account_wallet")
            ->where("account_id", $account_id)
            ->get()
            ->row_array();
        if(!empty($user_amount['amount'])){
            return $user_amount;
        }

        // khởi tạo ví
        $this->dbMaster->set('account_id', $account_id)
                ->set('client_ip', $client_ip)
                ->insert('account_wallet');

        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message());
            return null;
        }

        if ($this->dbMaster->affected_rows() > 0)
            return array("id" => $this->dbMaster->insert_id(), "amount" => 0, "amount_cashin" => 0, "amount_cashout" => 0);

        return null;
    }

    /*
     * Hàm ghi log nạp và cộng tiền vào ví
     */
    public function topup_main_wallet($service_name, $account_id, $transaction_id, $character_id, $character_name,
                                   $server_id, $time_stamp, $payment_type, $payment_subtype, $type, $unit, $amount, $platform, $full_request,
                                   $description = '',$client_ip = '', $refer_pay_info = null, $status = 1, $is_sandbox = 0, $src_game = null,
                                   $count = 0, $item_type = 1, $ratio = 0){
        // init log
        $this->this_func = __FUNCTION__;

        $older_amount = 0;

        // Lấy số tồn
        $user_amount = $this->get_wallet_info($account_id, $client_ip);
        if ($user_amount == null){
            return null;
        }

        $older_amount = $user_amount['amount'];

        $this->dbMaster->set('account_id', $account_id)
            ->set('log_date',$time_stamp)
            ->set('amountVND', $amount)
            ->set('character_id', $character_id)
            ->set('character_name', $character_name)
            ->set('server_id', $server_id)
            ->set('transaction_id', $transaction_id)
            ->set('client_ip', $client_ip)
            ->set('older_amountVND', $older_amount)
            ->set('payment_type', $payment_type)
            ->set('payment_subtype', $payment_subtype)
            ->set('type', $type)
            ->set('refer_pay_info', $refer_pay_info)
            ->set('src_game', $src_game)
            ->set('count', $count)
            ->set('item_type', $item_type)
            ->set('unit', $unit)
            ->set('ratio', $ratio)
            ->set('status', $status)
            ->set('create_date',$this->curDate)
            ->set('full_request',$full_request)
            ->set('platform',$platform)
            ->set('description',$description)
            ->set('is_sandbox',$is_sandbox)
            ->insert('cash_in');
			//echo $this->dbMaster->last_query();die;

        if ($this->dbMaster->_error_number() > 0) {
            $this->write_log_message($this->dbMaster->_error_message() . ',' . $full_request);
            return null;
        }

        $cash_in_id = $this->dbMaster->insert_id();

        if ($this->dbMaster->affected_rows() > 0){

            // Update tiền vào ví - nếu có cơ chế tính toán vip cho user thì code ở đây
            $this->dbMaster->set('amount', '`amount` + ' . $amount, FALSE)
                    ->set('amount_cashin', '`amount_cashin` + ' . $amount, FALSE)
                    ->set('modify_date', $this->curDate)
                    ->where('account_id', $account_id)
                    ->update('account_wallet');

            // check error
            if ($this->dbMaster->_error_number() > 0) {
                // ghi log lỗi
                $this->write_log_message($this->dbMaster->_error_message());
                return null;
            }

            // tra ve tien tồn hiện tại của ví
            return array('account_id' => $account_id, 'amount' => $older_amount + $amount, 'order_id' => $cash_in_id);

        }else
            return null;
    }

    /*
     * Hảm trừ tiền ỏ ví chính
     */
    public function withdraw_main_wallet($account_id, $money){
        //sub money wallet
        $this->dbMaster->set("`amount`","`amount` -{$money}",false)
            ->set('modify_date', $this->curDate)
            ->set("`amount_cashout`","`amount_cashout` + {$money} ",false)
            ->set("modify_date",$this->curDate)
            ->where("account_id",$account_id)
            ->where("amount >= {$money}")
            ->update('account_wallet');

        // check error
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message());
            return null;
        }

        // tru ví thành công
        if ($this->dbMaster->affected_rows() > 0)
            return true;

        return false;
    }



	/***TYPE = 3**/
    public function setTransactionWallet($service_name, $account_id, $transaction_id, $character_id, $character_name, $server_id, $time_stamp, $type, $amount, $channel, $platform, $payment_desc, $games,  $full_request) {
        // init log
        $this->this_func = __FUNCTION__;
        $this->dbMaster->set('date', $this->curDate)
            ->set('service_id', $service_name)
			->set('account_id', $account_id)
            ->set('transaction_id', $transaction_id)
            ->set('character_id', $character_id)
            ->set('character_name', $character_name)
            ->set('server_id', $server_id)
            ->set('time_stamp', $time_stamp)
            ->set('type', $type)
            ->set('amount', $amount)
            ->set('amountVND', $amount)
            ->set('channel', $channel)
            ->set('platform', $platform)
            ->set('games', $games)
            ->set('status', 1)
            ->set('payment_desc', $payment_desc)
            ->insert('cash_out_service_wallet');

        // check error
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message() . ',' . $full_request);
            //show_error($this->dbMaster->_error_message());
            return null;
        }

        if ($this->dbMaster->affected_rows() > 0)
            return $this->dbMaster->insert_id();
    }
    /**getStatusTransactionService**/
    public function getStatusTransactionService($service_name, $transaction_id) {
        // init log
        $this->this_func = __FUNCTION__;

        $trans_query = $this->dbMaster->select("transaction_id, status")
            ->from('cash_out_service_wallet')
            ->where("transaction_id", $transaction_id)
            ->order_by("date", "desc")
            ->limit(1)
            //->where_in("status", array(0, 1,2)) //0: transaction init; 1: transaction success
            ->get();

        // check error
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message());
            return null;
        }

        if ($trans_query->num_rows() > 0) {
            return $trans_query->row_array();
        }

        // giao dich chưa có tồn tại trong log.
        return array("transaction_id" => $transaction_id, "status" => -1);
    }

    public function get_wallet_service_info($service_id,$account_id, $client_ip){
        // Lấy số tồn
        $user_amount = $this->dbMaster->select("id, amount, amount_cashin, amount_cashout", false)
            ->from("account_service_wallet")
            ->where("service_id", $service_id)
			->where("account_id", $account_id)
            ->get()
            ->row_array();
        if(!empty($user_amount['amount'])){
            return $user_amount;
        }

        // khởi tạo ví
        $this->dbMaster->set('account_id', $account_id)
            ->set('service_id', $service_id)
            ->set('client_ip', $client_ip)
            ->insert('account_service_wallet');
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message());
            return null;
        }

        if ($this->dbMaster->affected_rows() > 0)
            return array("id" => $this->dbMaster->insert_id(), "amount" => 0, "amount_cashin" => 0, "amount_cashout" => 0);

        return null;
    }

    public function topup_service_wallet($service_name, $account_service_id, $account_id, $transaction_id, $character_id, $character_name,
                                   $server_id, $time_stamp, $payment_type,$payment_subtype,$type,$unit, $amount,$platform, $full_request,
                                   $description = '',$client_ip='',$refer_pay_info=null,$status=1,$is_sandbox=0,$src_game=null,
                                   $count=0,$item_type=1,$ratio=0){

        $this->this_func = __FUNCTION__;

        $older_amount = 0;
        // Lấy số tồn
        $user_amount = $this->get_wallet_service_info($service_name,$account_id, $client_ip);
        if ($user_amount == null){
            return null;
        }
        $older_amount = $user_amount['amount'];

        $this->dbMaster->set('account_id', $account_id)
            ->set('service_id', $service_name)
            ->set('log_date',$time_stamp)
            ->set('amountVND', $amount)
            ->set('character_id', $character_id)
            ->set('character_name', $character_name)
            ->set('server_id', $server_id)
            ->set('transaction_id', $transaction_id)
            ->set('client_ip', $client_ip)
            ->set('older_amountVND', $older_amount)
            ->set('payment_type', $payment_type)
            ->set('payment_subtype', $payment_subtype)
            ->set('type', $type)
            ->set('refer_pay_info', $refer_pay_info)
            ->set('src_game', $src_game)
            ->set('count', $count)
            ->set('item_type', $item_type)
            ->set('unit', $unit)
            ->set('status', $status)
            ->set('create_date',$this->curDate)
            ->set('full_request',$full_request)
            ->set('platform',$platform)
            ->set('description',$description)
            ->set('is_sandbox',$is_sandbox);

        if(!empty($ratio)){
            $this->dbMaster->set('ratio', $ratio);
        }
        $this->dbMaster->insert('cash_in');
        if ($this->dbMaster->_error_number() > 0) {
            $this->write_log_message($this->dbMaster->_error_message() . ',' . $full_request);
            return null;
        }

        $cash_in_id = $this->dbMaster->insert_id();

        if ($this->dbMaster->affected_rows() > 0){

            // Update tiền vào ví - nếu có cơ chế tính toán vip cho user thì code ở đây
            $this->dbMaster->set('amount', '`amount` + ' . $amount, FALSE)
                ->set('amount_cashin', '`amount_cashin` + ' . $amount, FALSE)
                ->set('modify_date', $this->curDate)
                ->where('account_id', $account_id)
				->where("service_id",$service_name)
                ->update('account_service_wallet');

            // check error
            if ($this->dbMaster->_error_number() > 0) {
                // ghi log lỗi
                $this->write_log_message($this->dbMaster->_error_message());
                return null;
            }

            // tra ve tien tồn hiện tại của ví
            return array('account_id' => $account_id, 'amount' => $older_amount + $amount, 'order_id' => $cash_in_id);
        }else
            return null;
    }

    public function topup_withdraw_wallet($service_id,$account_id,$transaction, $money){

        //sub money wallet
        $this->dbMaster->set("`amount`","`amount` -{$money}",false)
            ->set('modify_date', $this->curDate)
            ->set("`amount_cashout`","`amount_cashout` + {$money} ",false)
            ->set("modify_date",$this->curDate)
            ->where("account_id",$account_id)
            ->where("amount >= {$money}")
			->where("service_id",$service_id)
            ->update('account_service_wallet');

        // check error
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message());

            $this->rollbackCashin($service_id,$account_id,$transaction,$money);

            return null;
        }

        // tru ví thành công
        if ($this->dbMaster->affected_rows() > 0)
            return true;

        return false;
    }
	/**END TYPE =3**/

	public function rollbackCashin($service_id,$account_id,$transaction,$amount){
        //update is_rollback = 1
        //minute account or account_service_wallet
        $status_account_wallet = $this->dbMaster->set("`amount`","`amount` -{$amount}",false)
            ->set("`amount_cashin`","`amount_cashin` - {$amount} ",false)
            ->set("modify_date",$this->curDate)
            ->where("account_id",$account_id)
            ->where("amount >= {$amount}")
			->where("service_id",$service_id)
            ->update("account_service_wallet");
        if ($this->dbMaster->affected_rows() > 0){
            $this->rollbackLog($service_id,$account_id,$transaction); // update status = 1: success
            return true;
        }
        return false;

    }
    public function rollbackLog($service_id,$account_id,$transaction){
        $this->this_func = __FUNCTION__;

        $this->dbMaster->set('is_rollback', 1)
            ->where('account_id', $account_id)
			->where("service_id",$service_id)
            ->where('transaction', $transaction)
            ->update('cash_in');

        // check error
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message());
        }
    }



    /*
    Ghi log theo dõi
     */
	public function setErrorLogs($classname,$func,$service_name, $order_id, $account_id, $transaction_id, $character_id, $character_name,
                                   $server_id, $time_stamp, $payment_type, $payment_subtype,$type,$unit, $amount,$platform, $full_request,
                                   $description = '', $client_ip = '', $refer_pay_info = null, $status = 1,$vip_type = 0,$reg_from = null, $account_type = 1,
                                   $is_sandbox = 0, $src_game = null, $count = 0, $item_type = 1, $ratio = 0) {
        // init log
        $this->this_func = __FUNCTION__;
        $this->dbMaster->set('classname', $classname)
            ->set('func', $func)
			->set('service_id', $service_name)
			->set('account_id', $account_id)
            ->set('log_date',$time_stamp)
            ->set('amountVND', $amount)
            ->set('character_id', $character_id)
            ->set('character_name', $character_name)
            ->set('server_id', $server_id)
            ->set('transaction_id', $transaction_id)
			->set('order_id', $order_id)
            ->set('client_ip', $client_ip)
            ->set('payment_type', $payment_type)
            ->set('payment_subtype', $payment_subtype)
            ->set('type', $type)
            ->set('refer_pay_info', $refer_pay_info)
            ->set('src_game', $src_game)
            ->set('count', $count)
            ->set('item_type', $item_type)
            ->set('unit', $unit)
            ->set('ratio', $ratio)
            ->set('status', 0)
            ->set('create_date',$this->curDate)
            ->set('full_request',$full_request)
            ->set('platform',$platform)
            ->set('description',$description)
            ->set('is_sandbox',$is_sandbox)
            ->insert('error_logs');
        // check error
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message() . ',' . $full_request);
            //show_error($this->dbMaster->_error_message());
            return null;
        }

        if ($this->dbMaster->affected_rows() > 0)
            return $this->dbMaster->insert_id();
    }

	public function finishErrorLogs($idInserted, $status, $latency, $description,$vendor_id=null) {
        // init log
        $this->this_func = __FUNCTION__;
		if(!empty($vendor_id)){
            $this->dbMaster->set("transaction_id",$vendor_id);
        }

        $this->dbMaster->set('status', $status)
            ->set('latency', $latency)
            ->set('description', $description)
            ->where('id', $idInserted)
            ->update('error_logs');

        // check error
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message());
        }
    }
	public function setBteLogs($service_name,$account_key, $order_id, $account_id, $transaction_id, $character_id, $character_name,
                                 $server_id, $time_stamp, $amount, $bte_amount , $coupon , $description ,$full_request='' ) {
        // init log
        $this->this_func = __FUNCTION__;
        $this->dbMaster->set('account_key', $account_key)
            ->set('service_id', $service_name)
            ->set('account_id', $account_id)
            ->set('log_date',$time_stamp)
            ->set('amount', $amount)
			->set('bte_amount', $bte_amount)
            ->set('character_id', $character_id)
            ->set('character_name', $character_name)
            ->set('server_id', $server_id)
            ->set('transaction_id', $transaction_id)
            ->set('order_id', $order_id)
            ->set('coupon', $coupon)
            ->set('description', $description)
            ->insert('btc_e_logs');
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message() . ',' . $full_request);
            //show_error($this->dbMaster->_error_message());
            return null;
        }

        if ($this->dbMaster->affected_rows() > 0)
            return $this->dbMaster->insert_id();
    }
	public function setBteRedeemLogs($service_name,$account_key, $order_id, $account_id, $transaction_id,
                                $character_id, $character_name, $server_id, $time_stamp, $amount, $bte_amount , $couponCurrency ,
                               $coupon , $amount_promotion ,  $description ,$full_request='' ) {
        // init log
        $this->this_func = __FUNCTION__;
        $this->dbMaster->set('account_key', $account_key)
            ->set('service_id', $service_name)
            ->set('account_id', $account_id)
            ->set('log_date',$time_stamp)
            ->set('amount', $amount)
            ->set('couponCurrency', $couponCurrency)
            ->set('bte_amount', $bte_amount)
            ->set('character_id', $character_id)
            ->set('character_name', $character_name)
            ->set('server_id', $server_id)
            ->set('transaction_id', $transaction_id)
            ->set('order_id', $order_id)
            ->set('coupon', $coupon)
            ->set('amount_promotion', $amount_promotion)
            ->set('description', $description)
            ->insert('btc_e_redeem_logs');
        //echo $this->dbMaster->last_query();die;
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message() . ',' . $full_request);
            //show_error($this->dbMaster->_error_message());
            return null;
        }

        if ($this->dbMaster->affected_rows() > 0)
            return $this->dbMaster->insert_id();
    }
	public function setVoucherLogs($service_name,$func,$order_id, $account_id, $transaction_id, $character_id, $character_name,
                               $server_id, $time_stamp, $amount , $coupon , $description ,$full_request='' ) {
        // init log
        $this->this_func = __FUNCTION__;
        $this->dbMaster->set('func', $func)
            ->set('service_id', $service_name)
            ->set('account_id', $account_id)
            ->set('log_date',$time_stamp)
            ->set('amount', $amount)
            ->set('character_id', $character_id)
            ->set('character_name', $character_name)
            ->set('server_id', $server_id)
            ->set('transaction_id', $transaction_id)
            ->set('order_id', $order_id)
            ->set('coupon', $coupon)
            ->set('description', $description)
            ->insert('voucher_logs');
        //echo $this->dbMaster->last_query();die;
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message() . ',' . $full_request);
            //show_error($this->dbMaster->_error_message());
            return null;
        }

        if ($this->dbMaster->affected_rows() > 0)
            return $this->dbMaster->insert_id();
    }

    /*
     * Danh rieng cho game có hinh thuc mua promo x2, x3 knb
     * lay so lan nhan item promo
     * `id`, `date`, `mobo_service_id`, `mobo_id`, `transaction_id`, `character_id`, `character_name`, `server_id`, `promo_item_mcoin`, `mcoin`, `promo_item_description`, `status`, `cash_to_game_trans_id`
     *
     */

    public function getCountItemPromo($service_name, $account_id, $server_id, $promo_item_amount, $card_type, $character_id = "") {
        // init log
        $this->this_func = __FUNCTION__;

        $this->dbMaster->select("id")
                ->from('payment_promo_item_' . $service_name)
                ->where("account_id", $account_id)
                ->where("server_id", $server_id)
                ->where("promo_item_amount", $promo_item_amount)
                ->where("card_type", $card_type)
                ->where("status", 1);       //0: transaction init; 1: transaction success

        if (!empty($character_id)) {
            $this->dbMaster->where('character_id', $character_id);
        }

        // get data
        $trans_query = $this->dbMaster->get();

        // check error
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message());
            die;
            //return false;
        }
        return $trans_query->num_rows();
    }

    /*
     *  Danh rieng cho game có hinh thuc mua promo x2, x3 knb
     * Luu lai gia tri item ma user da nhan duoc
     */

    public function storeItemPromo($service_name, $account_id, $transaction_id, $character_id, $character_name, $server_id, $promo_item_amount, $money, $promo_ruby, $promo_item_description, $cash_to_game_trans_id, $card_type) {
        // init log
        $this->this_func = __FUNCTION__;
        $this->dbMaster->set('date', $this->curDate)
                ->set('account_id', $account_id)
                ->set('transaction_id', $transaction_id)
                ->set('character_id', $character_id)
                ->set('character_name', $character_name)
                ->set('server_id', $server_id)
                ->set('promo_item_amount', $promo_item_amount)
                ->set('money', $money)
                ->set('promo_ruby', $promo_ruby)
                ->set('promo_item_description', $promo_item_description)
                ->set('cash_to_game_trans_id', $cash_to_game_trans_id)
                ->set('status', 1)
                ->set('card_type', $card_type)
                ->insert('payment_promo_item_' . $service_name);

        //        var_dump($this->dbMaster->last_query());
        //        die;
        // check error
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message());
            return null;
        }

        if ($this->dbMaster->affected_rows() > 0)
            return $this->dbMaster->insert_id();

        return null;
    }
}

