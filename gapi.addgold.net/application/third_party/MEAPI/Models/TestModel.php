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
class TestModel extends CI_Model {

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
    private function write_log_message($message){
        log_message('error', $this->this_class . ' - ' . $this->this_func . ' --> ' . $message);
    }
    
    /**
     * 
     * @param type $service_name
     * @param type $from
     * @param type $to
     * @param type $search
     * @return boolean
     */
    public function get_report_game_info($service_name, $from, $to, $search){
        // init log
        $this->this_func = __FUNCTION__;
        
        $from = date ("y-m-d H:i:s", $from);
        $to = date ("y-m-d H:i:s", $to);
                
        $trans_query = $this->dbMaster->select("mobo_service_id,userid,username,level,exp,class,forces,gold,diamon,vip,silver,playtime,registrytime,lastlogin,extends,create_date")
                ->from('report_game_info_' . $service_name)
                ->where("create_date >= ", $from)
                ->where("create_date < ", $to);
        if(empty($search) == FALSE){
                $this->dbMaster->where($search, '', false);
        }
                $trans_query = $this->dbMaster->get();
                //var_dump(time());
        var_dump($this->dbMaster->last_query());
        //die;
        // check error
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message());
            return false;
        }        
        
        if ($trans_query->num_rows() > 0){
            return $trans_query->result_array();
        }
        return false;
    }    
	
	/*
	public function get_list_table($service_name,$keyword=null,$date_from=null,$date_to=null,$slbStatus=0,$slbPlatform=null,$slbType=null,$game_server_id = 0){
		$this->this_func = __FUNCTION__;
		$sub_query_sql = $this->dbMaster->select("MAX(`id`) as mid,COUNT(`transaction_id`) as recall")
										->from("cash_to_game_trans_" . $service_name);
		if(!empty($keyword))
            $this->dbMaster->where("(mobo_id='{$keyword}' OR  mobo_service_id='{$keyword}'  OR transaction_id='{$keyword}' OR character_id='{$keyword}'  OR character_name='{$keyword}' OR payment_desc='{$keyword}'  )",null,false);
		
        if(!empty($date_from) && !empty($date_to)){
            $date_from = gmdate('Y-m-d G:i:s',strtotime($date_from)+7*3600);
            $date_to = gmdate('Y-m-d G:i:s',strtotime($date_to)+7*3600);
			$this->dbMaster->where("date >=",$date_from)->where("date <=",$date_to);
        }
		
        if($slbStatus >0){
            if ($slbStatus == 3){ // status that bai th� l?y lu�n tr??ng h?p th�nh c�ng ?? t?ng h?p check gd l?n cu?i c�ng th?c hi?n l� success hay th?t b?i
                $sub_query_sql->where_in("status",array(1,2));
            }else{
                $sub_query_sql->where("status",($slbStatus - 1));
            }
        }
        if(!empty($slbPlatform)){
            $sub_query_sql->where("platform",$slbPlatform);
        }
        if(!empty($slbType)){
			$sub_query_sql->where("type",$slbType);
        }
        if($game_server_id >0){
			$sub_query_sql->where("server_id",$game_server_id);
        }
		$sub_query_sql->group_by("transaction_id");
		$query_sql = $this->dbMaster->select("*", false)
									->from("cash_to_game_trans_" . $service_name. " as t1")
									->join( "($sub_query_sql) t2", 't1.id = t2.mid', 'right');
        if($slbStatus > 0){
            if ($slbStatus == 3){ // 
                $query_sql->where("status",($slbStatus - 1));
            }
        }
        
        $query_sql->order_by("t1.id","DESC"); 
        echo $this->dbMaster->last_query();
		die;
        $data = $this->_db_slave->query($query_sql);
        //var_dump($data);die;
        var_dump($this->_db_slave->last_query());die;
        if (is_object($data)) {
            return $data->result_array();
        }
        
        return FALSE;
    }
	*/
	public function get_list_table($service_name,$keyword=null,$date_from=null,$date_to=null,$slbStatus=0,$slbPlatform=null,$slbType=null,$game_server_id = 0){
		$table = "cash_to_game_trans_" . $service_name;
        $sub_query_sql = "SELECT max(id) mid, count(transaction_id) recall FROM " . $table . " WHERE 1";
        
        if(!empty($keyword))
            $sub_query_sql .= " AND (mobo_id = '{$keyword}' OR mobo_service_id = '{$keyword}' OR transaction_id = '{$keyword}' OR character_id = '{$keyword}' OR character_name = '{$keyword}' OR payment_desc = '{$keyword}')";
        
        if(!empty($date_from) && !empty($date_to)){
            $date_from = gmdate('Y-m-d G:i:s',strtotime($date_from)+7*3600);
            $date_to = gmdate('Y-m-d G:i:s',strtotime($date_to)+7*3600);
            $sub_query_sql .= " AND date >='" . $date_from . "' AND date <='" . $date_to . "' ";
        }
        if($slbStatus>0){
            if ($slbStatus == 3){ // status that bai th� l?y lu�n tr??ng h?p th�nh c�ng ?? t?ng h?p check gd l?n cu?i c�ng th?c hi?n l� success hay th?t b?i
                $sub_query_sql .= " AND status in (1,2) ";
            }else{
                $sub_query_sql .= " AND status =" . ($slbStatus - 1);
            }
        }
        if(!empty($slbPlatform)){
            $sub_query_sql .= " AND platform ='" . $slbPlatform . "' ";
        }
        if(!empty($slbType)){
            $sub_query_sql .= " AND type ='" . $slbType . "' ";
        }
        if($game_server_id>0){
            $sub_query_sql .= " AND server_id =" . $game_server_id;
        }
        $sub_query_sql .= " GROUP BY transaction_id";
        
        $query_sql = "SELECT * FROM " . $table . " as t1 RIGHT JOIN (" . $sub_query_sql . ") as t2 ON t1.id = t2.mid ";
		
        if($slbStatus > 0){
            if ($slbStatus == 3){ // 
                $query_sql .= " WHERE status =" . ($slbStatus - 1);
            }
        }
        
        $query_sql .= " ORDER BY t1.id DESC "; 
        
        $data = $this->dbMaster->query($query_sql);
        //var_dump($data);die;
        //var_dump($this->dbMaster->last_query());die;
        if (is_object($data)) {
            return $data->result_array();
        }
        
        return FALSE;
	}
}