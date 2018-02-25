<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of BitcointRechargeModel
 *
 * @author vietbl
 */
class BitcointRechargeModel extends CI_Model {

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
    
    //Game Event
    function get_bitcoint_recharge_status($service_id) {
        $query = $this->dbMaster->select("*")
                ->from("bitcoint_config")              
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
