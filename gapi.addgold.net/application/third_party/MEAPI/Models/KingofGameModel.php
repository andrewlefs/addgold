<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of KingofGameModel
 *
 * @author vietbl
 */
class KingofGameModel extends CI_Model {

    protected $db;
    protected $this_class;
    protected $this_func;
    protected $curDate;
    protected $is_test = false;

    public function __construct() {
        parent::__construct();

        // current class name
        $this->this_class = __CLASS__;
        // current date
        $this->curDate = date('Y-m-d H:i:s');

    }

    public function set_test_server($is_test){
        $this->is_test = $is_test;

        if ($this->is_test)
            $this->db = $this->load->database(array('db' => 'kingofgame_globaldb_test', 'type' => 'master'), true);
        else
            $this->db = $this->load->database(array('db' => 'kingofgame_globaldb', 'type' => 'master'), true);
    }

    /*
     * Chức năng ghi log
     */
    private function write_log_message($message) {
        log_message('error', $this->this_class . ' - ' . $this->this_func . ' --> ' . $message);
    }

    /*
     * get game info
     */
    public function get_account_game_info($account_id) {
    // init log
        $this->this_func = __FUNCTION__;

        $trans_query = $this->db->select("gameUid, gameUserName, gameUserLevel")
                ->from('account_new')
                ->where("uuid", $account_id)
                ->get();

        // check error
        if ($this->db->_error_number() > 0) {
        // ghi log lỗi
            $this->write_log_message($this->db->_error_message());
            return false;
        }
        return $trans_query->result_array();
    }
}
