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
class ReportModel extends CI_Model {

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
    /*
	* Chức năng cung cấp API Ginside
	*/
	public function get_list_table($service_name,$keyword=null,$date_from=null,$date_to=null,$slbStatus=0,$slbPlatform=null,$slbType=null,$game_server_id = 0){
		$table = "cash_to_game_trans_" . $service_name;
        $sub_query_sql = "SELECT max(id) mid, count(transaction_id) recall FROM " . $table . " WHERE 1";
        
        if(!empty($keyword))
            $sub_query_sql .= " AND (account_id = '{$keyword}' OR transaction_id = '{$keyword}' OR character_id = '{$keyword}' OR character_name = '{$keyword}' OR payment_desc = '{$keyword}')";
        
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
    
	private $op = "=";
    private $arrayjoin = array();
	function changekeyname($array, $newkey, $oldkey)
    {
        foreach ($array as $key => $value)
        {
            if (is_array($value))
                $array[$key] = $this->changekeyname($value,$newkey,$oldkey);
            else
            {
                $array[$newkey] =  $array[$oldkey];
            }
        }

        unset($array[$oldkey]);
        return $array;
    }
    
    public function join_where($input){
        return array_map(
            function ($v, $k) {
                if(is_array($v)){
                    $v = $this->changekeyname($v,$k,"value");
                    if(!empty($v['op'])){
                        $this->op = $v['op'];
                        unset($v['op']);
                    }
                    return $this->join_where($v);
                }else {
                    if(!empty($v)){
                        $op = !empty($this->op)?$this->op:"=";
                        $this->arrayjoin["{$k} {$this->op}"]=$v;
                        //return sprintf("%s {$op} '%s'", $k, $v);
                    }

                }
            },
            $input,
            array_keys($input)
        );
    }
    
    public function get_report_btce($table,$output,$query,$group_by,$order_by=null,$limit=50){
        if(empty($table) || empty($query)){
            return false;
        }

        $select = "*";
        if(!empty($output)){
            $select = implode(",",$output);
        }
        $this->join_where($query);
        $data = $this->dbMaster->select("{$select}")
                        ->from("{$table}")
                        ->where($this->arrayjoin);
						
		if(!empty($group_by) && is_array($group_by)){
            $this->dbMaster->group_by(implode(",",$group_by));
        }
        
        if(!empty($order_by)){
            foreach($order_by as $k=>$v){
                $this->dbMaster->order_by("{$k}","{$v}");
            }
        }
        $data = $this->dbMaster->limit($limit)->get();
		//echo $this->dbMaster->last_query();die;
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message());
            return false;
        }

        if (is_object($data)) {
            return $data->result_array();
        }

        return FALSE;
    }
	public function getfields($table){
        $data = $this->dbMaster->query("SHOW COLUMNS FROM {$table}");

        if ($this->dbMaster->_error_number() > 0) {
            $this->write_log_message($this->dbMaster->_error_message());
            return false;
        }

        if (is_object($data)) {
            return $data->result_array();
        }
    }
	
	public function get_app(){
        $data = $this->dbMaster->select('id,app_name as app,service_id,app_fullname as description')->from('scopes')->get();

        if ($this->dbMaster->_error_number() > 0) {
            $this->write_log_message($this->dbMaster->_error_message());
            return false;
        }

        if (is_object($data)) {
            return $data->result_array();
        }
    }


    public function getListPurchase($startDate, $endDate, $purchase_token) {
// init log
        // init log
        $this->this_func = __FUNCTION__;

        $data = $this->dbMaster->select("id,purchase_token,mobo_service_id")
            ->from('inapp_purchase_trans')
            ->where("time_stamp >=", $startDate)
            ->where("time_stamp <=", $endDate)
            ->where_in("purchase_token",$purchase_token)
            ->where('is_refund',0)
            ->get();

        if ($this->dbMaster->_error_number() > 0) {
            $this->write_log_message($this->dbMaster->_error_message());
            return false;
        }

        if (is_object($data)) {
            return $data->result_array();
        }
        return false;
    }
    public function onUpdateRefunc(array $data,array $wheres){

        $this->this_func = __FUNCTION__;

        foreach ($data as $key => $value) {
            $this->dbMaster->set($key, $value);
        }
        foreach ($wheres as $key => $value) {
            $this->dbMaster->where($key, $value);
        }

        $this->dbMaster->update('inapp_purchase_trans');
        //print_r($this->getConnection()->last_query());die;
        return $this->dbMaster->affected_rows();
    }


}