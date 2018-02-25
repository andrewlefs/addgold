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
class GameModel extends CI_Model {

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
     * get server list
     */

    public function get_server_list($service_name, $show_all = null) {
// init log
        $this->this_func = __FUNCTION__;

        if (!empty($show_all) || $show_all == 'all') {
            $trans_query = $this->dbMaster->select("*")
                    ->from('server_list')
                    ->where("game", $service_name)
                    ->get();
        } elseif(!empty($show_all) || $show_all == 'all_except_server_published') {
            // Lay danh sach server va loai tru nhung server da publish
            $trans_query = $this->dbMaster->select("*")
                    ->from('server_list')
                    ->where("game", $service_name)
                    ->where("create_date > now()", "", false)
                    ->get();
        } else {
            $trans_query = $this->dbMaster->select("*")
                    ->from('server_list')
                    ->where("game", $service_name)
                    ->where_in("status", array(1)) //0: deactive; 1: active
                    ->where("create_date <= now()", "", false)
                    ->get();
        }

// check error
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
     * get server list
     */

    public function get_pay_element($type = null) {
// init log
        $this->this_func = __FUNCTION__;

        $this->dbMaster->select("`type`,`value`")
                ->from('defined_element');
        if (!empty($type)) {
            $this->dbMaster->where("type", $type);
        }
        $trans_query = $this->dbMaster->order_by("value", "asc")->get();

// check error
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

    public function get_top_pay($service_name, $server_id, $date, $end_date = null, $limit = 10) {
// init log
        $this->this_func = __FUNCTION__;
        $this->dbMaster->select("server_id, account_id, character_id, character_name, sum(source_value) as `amount`, sum(origin_money) as `origin_money`, sum(money) as `money`", false)
                ->from('cash_to_game_trans_' . $service_name)
                ->where_in("server_id", $server_id); //0: deactive; 1: active
        if (!empty($date)) {
            $this->dbMaster->where("time_stamp >= ", $date);
        }
        if (!empty($end_date)) {
            $this->dbMaster->where("time_stamp <= ", $end_date);
        }

        $trans_query = $this->dbMaster->where_in("status", array(1)) //0: deactive; 1: active
                ->group_by("server_id, account_id, character_id, character_name")
                ->order_by("sum(source_value)", "desc")
                ->limit($limit)
                ->get();

// check error
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

    public function get_money($account_id, $server_id, $service_name, $date, $end_date = null, $group_type = null, $character_id = null, $account_ids = null) {
// init log
        $this->this_func = __FUNCTION__;
        if (empty($account_id)) {
            //group 1
            //group 2 sư dung cho quy hau vuong
            //group 3 sư dung cho phong than
            if ($group_type == 3) {
                $this->dbMaster->select("sum(amountVND) as `amount`, sum(amount) as `pcoin`, sum(origin_money) as `origin_money`, sum(money) as `money`", false)
                        ->from('cash_to_game_trans_' . $service_name)
                        ->where_in("character_id", $character_id);
            } else {
                if($service_name == 1001){
					$this->dbMaster->select("total_amount as `amount`, total_cashout as `cashout`, total_credit as `money`", false)
                            ->from('account_money_' . $service_name);
				} else {
                    $this->dbMaster->select("sum(amountVND) as `amount`, sum(amount) as `pcoin`, sum(origin_money) as `origin_money`, sum(money) as `money`", false)
                            ->from('cash_to_game_trans_' . $service_name)
                            ->where_in("server_id", $server_id); //0: deactive; 1: active
                }
                if (empty($group_type) || $group_type == 0) {
                    $this->dbMaster->where_in("account_id", $account_id);
                } elseif ($group_type == 1) {
                    $this->dbMaster->where_in("character_id", $character_id);
                }
            }           
        } else {
            $this->dbMaster->select("sum(amountVND) as `amount`, sum(amount) as `pcoin`, sum(origin_money) as `origin_money`, sum(money) as `money`", false)
                    ->from('cash_to_game_trans_' . $service_name)
                    ->where_in("account_id", $account_id); //0: deactive; 1: active
        }
		 if (!empty($date)) {
                $this->dbMaster->where("time_stamp >= ", $date);
            }
            if (!empty($end_date)) {
                $this->dbMaster->where("time_stamp <= ", $end_date);
            }
        $trans_query = $this->dbMaster->where_in("status", array(1)) //0: deactive; 1: active
                ->get();

		//echo $this->dbMaster->last_query();die;
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

	/**
     * function get log promo item for character
     * @param type $mobo_service_id
     * @param array $server_ids
     * @param type $service_name
     * @return array
     */
    public function get_promo_items($account_id, $character_id, array $server_ids, $service_name) {
        // init log
        $this->this_func = __FUNCTION__;
        $this->dbMaster->select("card_type, count(0) as `count`", false)
                ->from('payment_promo_item_' . $service_name)
                ->where("account_id", $account_id)
                ->where_in("server_id", $server_ids);
        if (!empty($character_id)) {
            $this->dbMaster->where_in("character_id", $character_id);
        }
        $this->dbMaster->where_in("status", array(1))
                ->group_by("card_type"); //0: deactive; 1: active


        $trans_query = $this->dbMaster->get();
//        echo $this->dbMaster->last_query();
//        die;
        // check error
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


    public function get_card($character_id, $server_id, $service_name, $startday, $endday, $first, $type, $amount) {
// init log
        $this->this_func = __FUNCTION__;

        $this->dbMaster->select("id, amountVND as `amount`, origin_money, money, time_stamp, gameinfo", false)
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
            $type = json_decode($type, true);
            $this->dbMaster->where_in("type", $type);
        }
        if (!empty($amount)) {
            $amount = json_decode($amount, true);
            $this->dbMaster->where_in("amount", $amount);
        }

        $this->dbMaster->where_in("status", array(1)); //0: deactive; 1: active
        if ($first >= 1)
            $this->dbMaster->limit($first);
        $trans_query = $this->dbMaster->order_by("time_stamp", "asc")
                ->get();
//echo $this->dbMaster->last_query();die;
// check error
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
     * get server detail
     */

    public function get_server_detail($server_id, $service_name) {
// init log
        $this->this_func = __FUNCTION__;

        $server_query = $this->dbMaster->select("server_id, server_name, server_game_address")
                ->from("server_list")
                ->where("game", $service_name)
                ->where("server_id", $server_id)
                ->where("status", 1) //0: deactive; 1: active
                ->get();

// check error
        if ($this->dbMaster->_error_number() > 0) {
// ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message());
            return null;
        }

        if ($server_query->num_rows() > 0) {
            return $server_query->row_array();
        }
        return null;
    }


    /*
     * ghi log send/sub items
     */
    public function set_event_item($service_name, $account_id, $transaction_id, $character_id, $character_name, $server_id,
        $amount_vnd, $gold, $time_stamp, $awards, $event_name, $type, $full_request) {
        // init log
        $this->this_func = __FUNCTION__;
        $this->dbMaster->set('date', $this->curDate)
                ->set('account_id', $account_id)
                ->set('transaction_id', $transaction_id)
                ->set('character_id', $character_id)
                ->set('character_name', $character_name)
                ->set('server_id', $server_id)
                ->set('amount_vnd', $amount_vnd)
                ->set('gold', $gold)
                ->set('time_stamp', $time_stamp)
                ->set('awards', $awards)
                ->set('event', $event_name)
                ->set('status', 0)
				->set('type', $type)
                ->set('full_request', $full_request);
        $this->dbMaster->insert('event_item_' . $service_name);

		//echo $this->dbMaster->last_query();die;
        // check error
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message() . ',' . $full_request);
            //show_error($this->dbMaster->_error_message());
            return null;
        }

        if ($this->dbMaster->affected_rows() > 0)
            return $this->dbMaster->insert_id();

        return null;
    }

    /*
     * commit log send/sub items
     */
    public function finish_event_item($service_name, $idInserted, $status, $description = '') {
        // init log
        $this->this_func = __FUNCTION__;
        $this->dbMaster->set('status', $status)
                ->set('description', $description)
                ->where('id', $idInserted)
                ->update('event_item_' . $service_name);
	    // check error
        if ($this->dbMaster->_error_number() > 0)
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message());
    }

	public function listrecharge($service_name, $todate, $fromdate, $type) {
		$this->this_func = __FUNCTION__;
		if($type == "add" || $type == "sub" ){
			$server_query = $this->dbMaster->select("sum(total) as total")
                ->from("event_item_" . $service_name)
                ->where("date >=", "'$todate'",false)
				->where("date <=", "'$fromdate'",false)
                ->where("status", 1)
				->where("type",$type)
				->get();
				//echo $this->dbMaster->last_query();die;
			if ($this->dbMaster->_error_number() > 0) {
// ghi log lỗi
				$this->write_log_message($this->dbMaster->_error_message());
				return null;
			}

			if ($server_query->num_rows() > 0) {
				return $server_query->row_array();
			}
		}
        return null;
    }


    public function add_server_list($service_name,$server_id,$server_name,
                                    $server_game_address,$status,$server_id_merge,$is_test_server,
                                    $is_maintenance,$is_change_item,$full_request = null) {
        // init log
        $this->this_func = __FUNCTION__;
        $this->dbMaster
            ->set('server_id', $server_id)
            ->set('server_name', $server_name)
            ->set('server_game_address',$server_game_address)
            ->set('create_date',$this->curDate)
            ->set('game',$service_name)
            ->set('status', $status)
            ->set('server_id_merge',$server_id_merge)
            ->set('is_test_server',$is_test_server)
            ->set('is_maintenance',$is_maintenance)
            ->set('is_change_item',$is_change_item);
        $this->dbMaster->insert('server_list');

        //echo $this->dbMaster->last_query();die;
        // check error
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message() . ',' . $full_request);
            //show_error($this->dbMaster->_error_message());
            return null;
        }

        if ($this->dbMaster->affected_rows() > 0)
            return $this->dbMaster->insert_id();

        return null;
    }
    public function edit_server_list($idServer,$service_name,$server_id,$server_name,
                                    $server_game_address,$status,$server_id_merge,$is_test_server,
                                    $is_maintenance,$is_change_item,$full_request = null) {
        // init log
        $this->this_func = __FUNCTION__;
        $this->dbMaster
            ->set('server_id', $server_id)
            ->set('server_name', $server_name)
            ->set('server_game_address',$server_game_address)
            ->set('status', $status)
            ->set('server_id_merge',$server_id_merge)
            ->set('is_test_server',$is_test_server)
            ->set('is_maintenance',$is_maintenance)
            ->set('is_change_item',$is_change_item)
            ->where("id",$idServer);
        $this->dbMaster->update('server_list');

        //echo $this->dbMaster->last_query();die;
        // check error
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message() . ',' . $full_request);
            //show_error($this->dbMaster->_error_message());
            return null;
        }
        return $this->dbMaster->affected_rows();

    }
}
