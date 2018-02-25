<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class m_cashout_api extends CI_Model {

    private $db_slave;

    public function __construct() {
        parent::__construct();
        $this->db_slave = $this->load->database(array('db' => 'system_info', 'type' => 'slave'), true);
        date_default_timezone_set('Asia/Ho_Chi_Minh');
    }
    
    //Game Cashout API
    function get_cashout_config() {
        $query = $this->db_slave->select("*")
                ->from("cashout_config")
                ->get();

        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    //User
    function user_check_exist($account_id) {
        $query = $this->db_slave->select("*")
                ->from("cashout_user")
                ->where("account_id", $account_id)
                ->get();

        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    } 
    
    function user_check_email_exist($user_email) {
        $query = $this->db_slave->select("*")
                ->from("cashout_user")
                ->where("user_email", $user_email)
                ->get();

        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    function user_check_email_exist_by_user($account_id, $user_email) {
        $query = $this->db_slave->select("*")
                ->from("cashout_user")
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
        $query = $this->db_slave->select("*")
                ->from("cashout_user")
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
        $this->db_slave
                ->set("password_level2", $password_level2)
                ->set("user_email", $user_email)             
                ->where("id", $id);

        $this->db_slave->update("cashout_user");
        return $this->db_slave->affected_rows();
    }
    
    public function update_reset_pass_status($account_id, $server_id, $reset_id) {
        $this->db_slave
                ->set("reset_id", $reset_id)
                ->set("reset_status", 1)             
                ->where("account_id", $account_id)
                ->where("server_id", $server_id);

        $this->db_slave->update("cashout_user");
        return $this->db_slave->affected_rows();
    }
    
    function user_check_reset_id($reset_id) {
        $query = $this->db_slave->select("*")
                ->from("cashout_user")
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
        $this->db_slave              
                ->set("reset_status", 0)
                ->set("password_level2", NULL)
                ->set("user_email", NULL)
                ->where("reset_status", 1)
                ->where("reset_id", $reset_id);              

        $this->db_slave->update("cashout_user");
        return $this->db_slave->affected_rows();
    }
    
    //Card
    function get_card_list_game() {
        $query = $this->db_slave->select("*")
                ->from("cashout_card_list")
                ->where("card_status", 1)
                ->order_by("card_no", "asc")
                ->get();

        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    function get_card_detail($card_code) {
        $query = $this->db_slave->select("*")
                ->from("cashout_card_list")
                ->where("card_code", $card_code)
                ->where("card_status", 1)                
                ->get();

        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    public function update_gold_minus_result($id, $gold_minus_status, $gold_minus_send, $gold_minus_result) {
        $this->db_slave
                ->set("gold_minus_status", $gold_minus_status)
                ->set("gold_minus_send", $gold_minus_send)
                ->set("gold_minus_result", $gold_minus_result)
                ->where("id", $id);
        
        $this->db_slave->update("cashout_exchange_history");
        return $this->db_slave->affected_rows();
    }
    
    public function update_buycard_result($id, $card_status, $buycard_message_result) {
        $this->db_slave
                ->set("card_status", $card_status)
                ->set("buycard_message_result", $buycard_message_result)               
                ->where("id", $id);
        
        $this->db_slave->update("cashout_exchange_history");
        return $this->db_slave->affected_rows();
    }
    
    public function update_gold_rollback_result($id, $gold_rollback_status, $gold_rollback_message_send, $gold_rollback_message_result) {
        $this->db_slave
                ->set("gold_rollback_status", $gold_rollback_status)
                ->set("gold_rollback_message_send", $gold_rollback_message_send)
                ->set("gold_rollback_message_result", $gold_rollback_message_result)
                ->where("id", $id);
        
        $this->db_slave->update("cashout_exchange_history");
        return $this->db_slave->affected_rows();
    }
    
    public function update_card_data($id, $transid, $card_list_data) {
        $this->db_slave
                ->set("transid", $transid)
                ->set("card_list_data", $card_list_data)              
                ->where("id", $id);
        
        $this->db_slave->update("cashout_exchange_history");
        return $this->db_slave->affected_rows();
    }
    
    
    function get_cashout_exchange_history($account_id, $server_id) {
        $query = $this->db_slave->select("id, exchange_card_date, card_type, card_value, card_count")
                ->from("cashout_exchange_history")
                ->where("account_id", $account_id)
                ->where("server_id", $server_id)
                ->where("card_status", 1)
                ->order_by("id", "desc")
                ->get();

        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    function get_cashout_list_card_data($account_id, $server_id, $id) {
        $query = $this->db_slave->select("card_list_data")
                ->from("cashout_exchange_history")
                ->where("id", $id)
                ->where("account_id", $account_id)
                ->where("server_id", $server_id)
                ->order_by("id", "desc")
                ->get();

        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    function get_total_cashout_by_user($account_id) {
        $query = $this->db_slave->select("SUM(exchange_card_point) AS `total_cashout` ")
                ->from("cashout_exchange_history")              
                ->where("account_id", $account_id)              
                ->where("card_status", 1)
                ->get();
        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    function get_total_cashout_game() {
        $date_check_start = date("Y-m-d 00:00:00", time());
        $date_check_end = date("Y-m-d 23:59:59", time());
        
        $query = $this->db_slave->select("SUM(exchange_card_point) AS `total_cashout` ")
                ->from("cashout_exchange_history")
                ->where("exchange_card_date >= ", $date_check_start)
                ->where("exchange_card_date <= ", $date_check_end)
                ->where("card_status", 1)
                ->get();
        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    function get_cashout_day_limit_game() {
        $date_check_start = date("Y-m-d 00:00:00", time());
        $date_check_end = date("Y-m-d 23:59:59", time());
        
        $query = $this->db_slave->select("*")
                ->from("cashout_day_limit")              
                ->where("start_date >= ", $date_check_start)
                ->where("end_date <= ", $date_check_end)               
                ->get();
        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }

    //Ginside API
    function get_cashout_day_limit($start_date, $end_date) {
        $query = $this->db_slave->select("*")
                ->from("cashout_day_limit")
                ->where("start_date >= ", $start_date)
                ->where("end_date <= ", $end_date)
                ->get();

        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }

    public function update_cashout_day_limit($id, $start_date, $end_date, $limit) {
        $this->db_slave
                ->set("start_date", $start_date)
                ->set("end_date", $end_date)
                ->set("cashout_limit", $limit)
                ->where("id", $id);

        $this->db_slave->update("cashout_day_limit");
        return $this->db_slave->affected_rows();
    }

    public function update_cashout_config($type, $status) {
        $this->db_slave
                ->set("$type", $status)
                ->where("id", 1);

        $this->db_slave->update("cashout_config");
        return $this->db_slave->affected_rows();
    }

    function get_cashout_status($type) {
        $query = $this->db_slave->select("$type")
                ->from("cashout_config")
                ->where("id", 1)
                ->get();

        //echo $this->db_slave->last_query(); die;

        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }

    function get_cashout_logs($accout_id, $user_name, $start_date, $end_date) {
        
        $string_q = "SELECT `id`, `char_id`, `char_name`, `account_id`, `card_type`, `card_value`, `exchange_card_point`, `exchange_card_date`, `card_status`, `buycard_message_result`, `api_acc_id` FROM (`cashout_exchange_history_details`) WHERE ";
        $string_q .= "`exchange_card_date` >= '" . $start_date . "' AND `exchange_card_date` <= '" . $end_date . "'";
        
        if($accout_id != "0"){           
            $string_q .= " AND `api_acc_id` = " . $accout_id . " ";
        }
        
        if($user_name != "0"){
            $string_q .= " AND `char_name` = '" . $user_name . "' ";
        }

        $result = $this->db_slave->query($string_q);
        //echo $this->db_slave->last_query(); die;
        return $result->result_array();
    }

    function get_total_cashout($start_date, $end_date, $all) {
        if($all == "1"){
            $query = $this->db_slave->select("SUM(exchange_card_point) AS `total_cashout` ")
                ->from("cashout_exchange_history")
                ->where("card_status", 1)
                ->get();            
        }
        else{
        $query = $this->db_slave->select("SUM(exchange_card_point) AS `total_cashout` ")
                ->from("cashout_exchange_history")              
                ->where("exchange_card_date >= ", $start_date)
                ->where("exchange_card_date <= ", $end_date)
                ->where("card_status", 1)
                ->get();
        }
        
        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    //Card
    function get_card_list($id) {
        if($id == "0"){
            $query = $this->db_slave->select("card_name, id, card_cashout_tax")
                    ->from("cashout_card_list")
                    ->where("card_status", 1)
                    ->order_by("card_no", "asc")
                    ->get();
        }
        else{
            $query = $this->db_slave->select("card_name, id, card_cashout_tax")
                ->from("cashout_card_list")
                ->where("id", $id)
                ->where("card_status", 1)
                ->order_by("card_no", "asc")
                ->get();
        }

        if ($query) {
            return $query->result_array();
        } else {
            return null;
        }
    }
    
    public function update_tax_by_card($id, $value) {
        $this->db_slave
                ->set("card_cashout_tax", $value)
                ->where("id", $id);

        $this->db_slave->update("cashout_card_list");
        return $this->db_slave->affected_rows();
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
        if (empty($this->db))
            $this->db = $this->load->database(array('db' => 'system_info', 'type' => 'master'), true);
        $sql = $this->db->update($table, $data, $where);
        return $this->db->affected_rows();
    }

    function insert($table, $data) {
        if (empty($this->db))
            $this->db = $this->load->database(array('db' => 'system_info', 'type' => 'master'), true);
        $query = $this->db->insert($table, $data);
        if ($this->db->affected_rows() > 0) {
            return true;
        } else {
            return false;
        }
    }

    function insert_id($table, $data) {
        if (empty($this->db))
            $this->db = $this->load->database(array('db' => 'system_info', 'type' => 'master'), true);
        $query = $this->db->insert($table, $data);
        $idinsert = $this->db->insert_id();
        if ($this->db->affected_rows() > 0) {
            return $idinsert;
        } else {
            return false;
        }
    }

}
