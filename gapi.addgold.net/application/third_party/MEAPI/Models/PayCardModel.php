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
class PayCardModel extends CI_Model {

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
                ->from('paycard_log')
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
     * Check duplicate transaction
     */

    public function getTransaction($game_id, $order_id) {
        // init log
        $this->this_func = __FUNCTION__;

        $trans_query = $this->dbMaster->select("*")
                ->from('buy_card')
                ->where("game_id", $game_id)
                ->where("order_id", $order_id)
                ->where_in("status", array(0, 1))
                ->get();
        //var_dump($this->dbMaster->last_query());
        //die;
        // check error
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message());
            return false;
        }
        //var_dump($trans_query->num_rows());die;
        if ($trans_query->num_rows() > 0) {
            return $trans_query->row_array();
        }
        return false;
    }
	
	public function setTransaction($args) {
        // init log
        $this->this_func = __FUNCTION__;
        $this->dbMaster->set('date', $this->curDate)
            ->set('order_id', $args['orderid'])
            ->set('partner_id', $args['client_id'])
            ->set('character_name', $args['character_name'])
            ->set('character_id', $args['character_id'])
            ->set('server_id', $args['server_id'])
			->set('account', $args['account'])
            ->set('account_id', $args['account_id'])
            ->set('event', $args['event'])
            ->set('serial', $args['serial'])
            ->set('pin', $args['pin'])
            ->set('type', $args['type'])
            ->set('app', $args['app'])
            ->set('status', 0)
            ->insert('paycard_logs');

       //echo ($this->dbMaster->last_query());       die;
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
	
    public function initTransaction($args) {
        // init log
        $this->this_func = __FUNCTION__;
        $this->dbMaster->set('date', $this->curDate)
                ->set('game_id', $args['game_id'])
                ->set('character_name', $args['character_name'])
                ->set('character_id', $args['character_id'])
                ->set('server_id', $args['server_id'])
                ->set('order_id', $args['order_id'])
                ->set('account_id', $args['account_id'])
                ->set('supplier', $args['supplier'])
                ->set('value', $args['value'])
                ->set('amount', $args['amount'])
                ->set('env', $args['env'])
                ->set('status', 0)
                ->insert('buy_card');

        //var_dump($this->dbMaster->last_query());
        //die;
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

    public function finishTransaction($idInserted, $status, $money, $voucher_id, $latency, $description = '') {
        // init log
        $this->this_func = __FUNCTION__;

        $this->dbMaster->set('status', $status)
                ->set('latency', $latency)
                ->set('voucher_id', $voucher_id)
                ->set('money', $money)
                ->set('description', $description)
                ->where('id', $idInserted)
                ->update('paycard_logs');

        // check error
        if ($this->dbMaster->_error_number() > 0) {
            // ghi log lỗi
            $this->write_log_message($this->dbMaster->_error_message());
        }
    }

    public function finishBuyTransaction($idInserted, $status, $vendor_id, $cardlist, $latency, $description = '') {
        // init log
        $this->this_func = __FUNCTION__;

        $this->dbMaster->set('status', $status)
                ->set('latency', $latency)
                ->set('vendor_id', $vendor_id)
                ->set('cardlist', $cardlist)
                ->set('description', $description)
                ->where('id', $idInserted)
                ->update('buy_card');
        //var_dump($this->dbMaster->last_query());die;
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

}
