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
class CashoutModel extends CI_Model {

    protected $dbMaster;
    protected $dbSlave;
    protected $this_class;
    protected $this_func;
    protected $curDate;

    public function __construct() {
        parent::__construct();
        $this->this_class = __CLASS__;
        $this->curDate = date('Y-m-d H:i:s');
        if (empty($this->dbSlave))
            $this->dbSlave = $this->load->database(array('db' => 'user_info', 'type' => 'slave'), true);
        if (empty($this->dbMaster))
            $this->dbMaster = $this->load->database(array('db' => 'user_info', 'type' => 'master'), true);
    }
    
    //Ginside Tool
    function get_cashout_day_limit($start_date, $end_date, $service_id) {
        $query = $this->dbMaster->select("*")
                ->from("cashout_day_limit")
                ->where("start_date >= ", $start_date)
                ->where("end_date <= ", $end_date)
                ->where("service_id", $service_id)
                ->get();

        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }

    public function update_cashout_day_limit($id, $start_date, $end_date, $limit, $service_id) {
        $this->dbMaster
                ->set("start_date", $start_date)
                ->set("end_date", $end_date)
                ->set("cashout_limit", $limit)
                ->where("id", $id)
                ->where("service_id", $service_id);

        $this->dbMaster->update("cashout_day_limit");
        return $this->dbMaster->affected_rows();
    }

    public function update_cashout_config($type, $status, $service_id) {
        $this->dbMaster
                ->set("$type", $status)
                ->where("id", 1)
                ->where("service_id", $service_id);

        $this->dbMaster->update("cashout_config");
        return $this->dbMaster->affected_rows();
    }

    function get_cashout_status($type, $service_id) {
        $query = $this->dbMaster->select("$type")
                ->from("cashout_config")
                ->where("id", 1)
                ->where("service_id", $service_id)
                ->get();

        //echo $this->dbMaster->last_query(); die;

        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }

    function get_cashout_logs($accout_id, $user_name, $start_date, $end_date, $service_id) {
        
        $string_q = "SELECT `id`, `char_id`, `char_name`, `account_id`, `card_type`, `card_value`, `exchange_card_point`, `exchange_card_date`, `card_status`, `buycard_message_result`, `api_acc_id` FROM (`cashout_exchange_history_details`) WHERE ";
        $string_q .= "`exchange_card_date` >= '" . $start_date . "' AND `exchange_card_date` <= '" . $end_date . "' AND `service_id` = " . $service_id;
        
        if($accout_id != "0"){           
            $string_q .= " AND `api_acc_id` = " . $accout_id . " ";
        }
        
        if($user_name != "0"){
            $string_q .= " AND `char_name` = '" . $user_name . "' ";
        }

        $result = $this->dbMaster->query($string_q);
        //echo $this->dbMaster->last_query(); die;
        return $result->result_array();
    }

    function get_total_cashout($start_date, $end_date, $all, $service_id) {
        if($all == "1"){
            $query = $this->dbMaster->select("SUM(exchange_card_point) AS `total_cashout` ")
                ->from("cashout_exchange_history")
                ->where("service_id", $service_id)
                ->where("card_status", 1)
                ->get();            
        }
        else{
        $query = $this->dbMaster->select("SUM(exchange_card_point) AS `total_cashout` ")
                ->from("cashout_exchange_history")              
                ->where("exchange_card_date >= ", $start_date)
                ->where("exchange_card_date <= ", $end_date)
                ->where("service_id", $service_id)
                ->where("card_status", 1)
                ->get();
        }
        
        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }  
    
    function get_total_cashout_vnd($start_date, $end_date, $all, $service_id) {
        if($all == "1"){
            $query = $this->dbMaster->select("SUM(card_value) AS `total_cashout_vnd` ")
                ->from("cashout_exchange_history")
                ->where("service_id", $service_id)
                ->where("card_status", 1)
                ->get();            
        }
        else{
        $query = $this->dbMaster->select("SUM(card_value) AS `total_cashout_vnd` ")
                ->from("cashout_exchange_history")              
                ->where("exchange_card_date >= ", $start_date)
                ->where("exchange_card_date <= ", $end_date)
                ->where("service_id", $service_id)
                ->where("card_status", 1)
                ->get();
        }
        
        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    function get_total_btce_cashout($start_date, $end_date, $service_id) {
       
        $query = $this->dbMaster->select("SUM(btc_usd) * 21000 AS `total_cashout_btce` ")
                ->from("cashout_exchange_history")              
                ->where("exchange_card_date >= ", $start_date)
                ->where("exchange_card_date <= ", $end_date)
                ->where("service_id", $service_id)
                 ->where("card_type", 'bitcoint')
                ->where("card_status", 1)
                ->get();      
        
        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    function get_card_list($id, $service_id) {
        if($id == "0"){
            $query = $this->dbMaster->select("card_name, id, card_cashout_tax")
                    ->from("cashout_card_list")
                    ->where("card_status", 1)
                    ->where("service_id", $service_id)
                    ->order_by("card_no", "asc")
                    ->get();
        }
        else{
            $query = $this->dbMaster->select("card_name, id, card_cashout_tax")
                ->from("cashout_card_list")
                ->where("id", $id)
                ->where("card_status", 1)
                ->where("service_id", $service_id)
                ->order_by("card_no", "asc")
                ->get();
        }

        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    public function update_tax_by_card($id, $value, $service_id) {
        $this->dbMaster
                ->set("card_cashout_tax", $value)
                ->where("service_id", $service_id)
                ->where("id", $id);

        $this->dbMaster->update("cashout_card_list");
        return $this->dbMaster->affected_rows();
    }
    
    function cashout_bitcoint_logs($accout_id, $user_name, $start_date, $end_date, $service_id) {
        
        $string_q = "SELECT `id`, `char_id`, `char_name`, `account_id`, `item_type` as `type`, `card_value` as `usd rate`, `exchange_card_point` as `gold`, `exchange_card_date` as `exchange_date`, `card_status` as `status`, `buycard_message_result` as `message_result` FROM (`cashout_exchange_history`) WHERE ";
        $string_q .= "item_type= 'bitcoint' AND `exchange_card_date` >= '" . $start_date . "' AND `exchange_card_date` <= '" . $end_date . "' AND `service_id` = " . $service_id;
        
        if($accout_id != "0"){           
            $string_q .= " AND `api_acc_id` = " . $accout_id . " ";
        }
        
        if($user_name != "0"){
            $string_q .= " AND `char_name` = '" . $user_name . "' ";
        }

        $result = $this->dbMaster->query($string_q);
        //echo $this->dbMaster->last_query(); die;
        return $result->result_array();
    }
    
    //Game Event
    function get_cashout_config($service_id) {
        $query = $this->dbMaster->select("*")
                ->from("cashout_config")
                ->where("service_id", $service_id)
                ->get();

        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    //Card
    function get_card_list_game($service_id) {
        $query = $this->dbMaster->select("*")
                ->from("cashout_card_list")
                ->where("card_status", 1)
                ->where("service_id", $service_id)
                ->order_by("card_no", "asc")
                ->get();

        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    function get_card_detail($card_code, $service_id) {
        $query = $this->dbMaster->select("*")
                ->from("cashout_card_list")
                ->where("card_code", $card_code)
                ->where("service_id", $service_id)
                ->where("card_status", 1)                
                ->get();

        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    public function update_buycard_null_result($id, $card_status, $buycard_message_result) {
        $this->dbMaster
                ->set("card_status", $card_status)
                ->set("buycard_message_result", $buycard_message_result)          
                ->where("id", $id);
        
        $this->dbMaster->update("cashout_exchange_history");
        return $this->dbMaster->affected_rows();
    }
    
    public function update_gold_minus_result($id, $gold_minus_status, $gold_minus_send, $gold_minus_result, $service_id) {
        $this->dbMaster
                ->set("gold_minus_status", $gold_minus_status)
                ->set("gold_minus_send", $gold_minus_send)
                ->set("gold_minus_result", $gold_minus_result)               
                ->where("id", $id);
        
        $this->dbMaster->update("cashout_exchange_history");
        return $this->dbMaster->affected_rows();
    }
    
    public function update_buycard_result($id, $card_status, $buycard_message_result) {
        $this->dbMaster
                ->set("card_status", $card_status)
                ->set("buycard_message_result", $buycard_message_result)               
                ->where("id", $id);
        
        $this->dbMaster->update("cashout_exchange_history");
        return $this->dbMaster->affected_rows();
    }
    
    public function update_gold_rollback_result($id, $gold_rollback_status, $gold_rollback_message_send, $gold_rollback_message_result) {
        $this->dbMaster
                ->set("gold_rollback_status", $gold_rollback_status)
                ->set("gold_rollback_message_send", $gold_rollback_message_send)
                ->set("gold_rollback_message_result", $gold_rollback_message_result)
                ->where("id", $id);
        
        $this->dbMaster->update("cashout_exchange_history");
        return $this->dbMaster->affected_rows();
    }
    
    public function update_card_data($id, $transid, $card_list_data) {
        $this->dbMaster
                ->set("transid", $transid)
                ->set("card_list_data", $card_list_data)              
                ->where("id", $id);
        
        $this->dbMaster->update("cashout_exchange_history");
        return $this->dbMaster->affected_rows();
    }    
    
    function get_cashout_exchange_history($account_id, $server_id, $service_id, $item_type) {
        $query = $this->dbMaster->select("id, exchange_card_date, card_type, card_value, card_count")
                ->from("cashout_exchange_history")
                ->where("account_id", $account_id)
                ->where("server_id", $server_id)
                ->where("service_id", $service_id)
                ->where("card_status", 1)
                ->where("item_type", $item_type)
                ->order_by("id", "desc")
                ->get();

        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    function get_cashout_btc_exchange_history($account_id, $server_id, $service_id, $card_type) {
        $query = $this->dbMaster->select("id, exchange_card_date, card_type, card_value, card_count, btc_usd")
                ->from("cashout_exchange_history")
                ->where("account_id", $account_id)
                ->where("server_id", $server_id)
                ->where("service_id", $service_id)
                ->where("card_status", 1)
                ->where("card_type", $card_type)
                ->order_by("id", "desc")
                ->get();

        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    function get_cashout_list_card_data($account_id, $server_id, $id, $service_id) {
        $query = $this->dbMaster->select("card_list_data")
                ->from("cashout_exchange_history")
                ->where("id", $id)
                ->where("account_id", $account_id)
                ->where("server_id", $server_id)
                ->where("service_id", $service_id)
                ->order_by("id", "desc")
                ->get();

        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    function get_total_cashout_by_user($account_id, $service_id) {
        $query = $this->dbMaster->select("SUM(exchange_card_point) AS `total_cashout` ")
                ->from("cashout_exchange_history")              
                ->where("account_id", $account_id)  
                ->where("service_id", $service_id)
                ->where("card_status", 1)
                ->get();
        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    function get_total_cashout_game($service_id) {
        $date_check_start = date("Y-m-d 00:00:00", time());
        $date_check_end = date("Y-m-d 23:59:59", time());
        
        $query = $this->dbMaster->select("SUM(card_value) AS `total_cashout` ")
                ->from("cashout_exchange_history")
                ->where("exchange_card_date >= ", $date_check_start)
                ->where("exchange_card_date <= ", $date_check_end)
                ->where("card_status", 1)
                ->where("service_id", $service_id)
                ->get();
        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    function get_cashout_day_limit_game($service_id) {
        $date_check_start = date("Y-m-d 00:00:00", time());
        $date_check_end = date("Y-m-d 23:59:59", time());
        
        $query = $this->dbMaster->select("*")
                ->from("cashout_day_limit")              
                ->where("start_date >= ", $date_check_start)
                ->where("end_date <= ", $date_check_end)  
                ->where("service_id", $service_id)
                ->get();
        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    //BitCoint
    public function update_bitcoint_data($id, $btc_code, $btc_amount, $btc_transid, $btc_e_order_id, $btc_account_key) {
        $this->dbMaster               
                ->set("btc_code", $btc_code) 
                ->set("btc_amount", $btc_amount)
                ->set("btc_transid", $btc_transid)
                ->set("btc_e_order_id", $btc_e_order_id) 
                ->set("btc_account_key", $btc_account_key)     
                ->where("id", $id);
        
        $this->dbMaster->update("cashout_exchange_history");
        return $this->dbMaster->affected_rows();
    }  
    
    function get_cashout_bitcoint_data($account_id, $server_id, $id, $service_id) {
        $query = $this->dbMaster->select("btc_code")
                ->from("cashout_exchange_history")
                ->where("id", $id)
                ->where("account_id", $account_id)
                ->where("server_id", $server_id)
                ->where("service_id", $service_id)
                ->order_by("id", "desc")
                ->get();

        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    //User
    function user_check_exist($account_id) {
        $query = $this->dbMaster->select("*")
                ->from("account_wallet")
                ->where("account_id", $account_id)              
                ->get();

        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    } 
    
    function user_check_email_exist($user_email) {
        $query = $this->dbMaster->select("*")
                ->from("account_wallet")
                ->where("user_email", $user_email)
                ->get();

        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    function user_check_email_exist_by_user($account_id, $user_email) {
        $query = $this->dbMaster->select("*")
                ->from("account_wallet")
                ->where("account_id", $account_id)
                ->where("user_email", $user_email)
                ->get();

        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    function user_check_pass2($account_id, $password_level2) {
        $query = $this->dbMaster->select("*")
                ->from("account_wallet")
                ->where("account_id", $account_id)
                ->where("password_level2", $password_level2)
                ->get();

        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    public function update_user_pass2($id, $password_level2, $user_email) {
        $this->dbMaster
                ->set("password_level2", $password_level2)
                ->set("user_email", $user_email)             
                ->where("id", $id);

        $this->dbMaster->update("account_wallet");
        return $this->dbMaster->affected_rows();
    }
    
    public function update_reset_pass_status($account_id, $reset_id) {
        $this->dbMaster
                ->set("reset_id", $reset_id)
                ->set("reset_status", 1)             
                ->where("account_id", $account_id);               

        $this->dbMaster->update("account_wallet");
        return $this->dbMaster->affected_rows();
    }
    
    function user_check_reset_id($reset_id) {
        $query = $this->dbMaster->select("*")
                ->from("account_wallet")
                ->where("reset_id", $reset_id)
                ->where("reset_status", 1)
                ->get();

        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    public function update_reset_pass2($reset_id) {
        $this->dbMaster              
                ->set("reset_status", 0)
                ->set("password_level2", NULL)
                ->set("user_email", NULL)
                ->where("reset_status", 1)
                ->where("reset_id", $reset_id);              

        $this->dbMaster->update("account_wallet");
        return $this->dbMaster->affected_rows();
    }
    
     /////////
    function freeDBResource($dbh) {
        while (mysqli_next_result($dbh)) {
            if ($l_result = mysqli_store_result($dbh)) {
                mysqli_free_result($l_result);
            }
        }
    }

    function update($table, $data, $where) {      
        $sql = $this->dbMaster->update($table, $data, $where);
        return $this->dbMaster->affected_rows();
    }

    function insert($table, $data) {       
        $query = $this->dbMaster->insert($table, $data);
        //echo $this->dbMaster->last_query(); die;
        if ($this->dbMaster->affected_rows() > 0) {
            return true;
        } else {
            return false;
        }
    }

    function insert_id($table, $data) {        
        $query = $this->dbMaster->insert($table, $data);
        $idinsert = $this->dbMaster->insert_id();
        if ($this->dbMaster->affected_rows() > 0) {
            return $idinsert;
        } else {
            return false;
        }
    }
}
