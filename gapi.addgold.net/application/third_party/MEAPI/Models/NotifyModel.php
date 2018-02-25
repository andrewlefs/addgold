<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of PaymentModel
 *
 * @author TuanDn
 */
class NotifyModel extends CI_Model {
    private $db_slave;

    public function __construct() {
        parent::__construct();
        
        $this->db_slave = $this->load->database(array('db' => 'system_info', 'type' => 'slave'), true);
        date_default_timezone_set('Asia/Ho_Chi_Minh');
    }
    
    public function insert_notify_error($date_start, $date_end, $app_name, $error_type) {
        $array = array(
             date_start => $date_start,    
             date_end => $date_end,
             app_name => $app_name,
             error_type => $error_type,            
             notify_status => 0,
             error_count => 1
         );

        $this->db_slave->insert("notify_error", $array);          
        return $this->db_slave->insert_id();
    }
    
    public function insert_notify_error_detail($notify_error_id, $app_name, $error_type, $error_detail) {
        $array = array(     
            notify_error_id => $notify_error_id,
            app_name => $app_name,
            error_type => $error_type,
            error_detail => $error_detail,
            error_date => date('Y-m-d H:i:s') 
         );

        $this->db_slave->insert("notify_error_details", $array);     
    }
    
    function update_notify_error($error_count, $id)
    {
       $this->db_slave
        ->set("$error_count ","$error_count +1",false)
        ->where("id", $id);
        
       $this->db_slave->update("notify_error");       
       return $this->db_slave->affected_rows();
    }
    
    function update_notify_status($id)
    {
        $this->db_slave
         ->set("notify_status ", 1)
         ->where("id", $id);
        
        $this->db_slave->update("notify_error");       
        return $this->db_slave->affected_rows();
    }
    
    public function get_config($app_name)
    {
        $query = $this->db_slave->select("error_threshold_count, error_mins_duration, notify_contact, monitor_status", false)
               ->from("scopes")
               ->where("app_name", $app_name)                
               ->get();
        
        return $query->result_array();
    }
    
    public function check_notify($app_name, $error_type, $date_check){
        $query = $this->db_slave->select("*")
               ->from("notify_error")
               ->where("app_name", $app_name) 
               ->where("error_type", $error_type) 
               ->where("date_start <=", $date_check) 
               ->where("date_end >=", $date_check) 
               ->get();
        
        return $query->result_array();
    }
    
    public function get_notify_error_detail($notify_error_id){
        $query = $this->db_slave->select("*")
               ->from("notify_error_details")
               ->where("notify_error_id", $notify_error_id) 
               ->order_by("id", "desc")
               ->get();
        
        return $query->result_array();
    }
}