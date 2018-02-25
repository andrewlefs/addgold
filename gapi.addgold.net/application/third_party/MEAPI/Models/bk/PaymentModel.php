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

    public function setTransaction($service_name, $mobo_service_id, $mobo_id, $transaction_id, $character_id, $character_name, $server_id, $time_stamp, $type, $amount, $mcoin, $origin_gold, $gold, $channel, $platform, $games, $tracking_code, $marketing_code, $payment_desc, $full_request, $description = '', $source_type = null, $source_value = 0) {
        // init log
        $this->this_func = __FUNCTION__;
        $this->dbMaster->set('date', $this->curDate)
                ->set('mobo_service_id', $mobo_service_id)
                ->set('mobo_id', $mobo_id)
                ->set('transaction_id', $transaction_id)
                ->set('character_id', $character_id)
                ->set('character_name', $character_name)
                ->set('tracking_code', $tracking_code)
                ->set('marketing_code', $marketing_code)
                ->set('server_id', $server_id)
                ->set('time_stamp', $time_stamp)
                ->set('type', $type)
                ->set('amount', $amount)
                ->set('mcoin', $mcoin)
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
                ->where_in("mobo_service_id", $character_id);
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
            $this->dbMaster->where("(type in ({$strtype}) or source_type in ($strtype))", null, false);            
        }
        if (!empty($amount)) {
            $stramount = "";
            foreach ($amount as $key => $value) {
                if(!empty($strtype)){
                    $stramount .= ",";
                }
                $stramount .= $value;
            }            
            $this->dbMaster->where("(amount in ({$stramount}) or source_value in ($stramount))", null, false);              
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
            $this->write_log_message($this->dbMaster->_error_message());
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
                ->where("(server_ids like '%[$server_id]%' or server_ids is null or server_ids = '')", "", false) //0: deactive; 1: active                         
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

}
