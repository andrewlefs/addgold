<?php

require_once __DIR__ . '/../../system/core/Model.php';

class m_models extends CI_Model {

    protected $_db;
    protected $_db_slave;

    public function __construct() {
        if (empty($this->_db_slave))
            $this->_db_slave = $this->load->database(array('db' => 'user_info', 'type' => 'slave'), true);
        if (!$this->_db)
            $this->_db = $this->load->database(array('db' => 'user_info', 'type' => 'master'), TRUE);
    }

    public function insert_on_duplicate_login($table, $data) {
        $query = FALSE;
        if (is_array($data)) {
            $sql = $this->_db->insert_string($table, $data)
                    . " ON DUPLICATE KEY UPDATE access_token='{$data["access_token"]}'"
                    . ", fbid = '{$data["fbid"]}', fbname ='{$data["fbname"]}',"
                    . "link_picture ='{$data["link_picture"]}',"
                    . "token_picture ='{$data["token_picture"]}'";
//            echo $sql;die;
//            echo $this->_db->last_query();die;
            $query = $this->_db->query($sql);
        }
        return (empty($query) == FALSE) ? $this->_db->insert_id() : 0;
    }

    public function insert($table, $data) {
        $query = FALSE;
        //var_dump($data);
        if (is_array($data)) {
            $query = $this->_db->insert($table, $data);
            //echo $this->_db->last_query();die;
        }
        return (empty($query) == FALSE) ? $this->_db->insert_id() : 0;
    }

    public function insert_batch($table, $data) {
        $query = FALSE;
        //var_dump($data);
        if (is_array($data)) {
            $query = $this->_db->insert_batch($table, $data);
            //echo $this->_db->last_query();die;
        }
        return (empty($query) == FALSE) ? $this->_db->insert_id() : 0;
    }

    //cập nhật số lượt
    public function update($table, $data, $where) {

        $sql = $this->_db->update($table, $data, $where);
        //var_dump($this->_db->last_query());die;
        return $this->_db->affected_rows();
    }

    //cập nhật số lượt
    public function update_batch($table, $data, $id) {

        $sql = $this->_db->update_batch($table, $data, $id);
        // var_dump($this->_db->last_query());die;
        return $this->_db->affected_rows();
    }

    //cập nhật số lượt
    public function delete($table, $where) {

        $sql = $this->_db->delete($table, $where);
        // var_dump($this->_db->last_query());die;
        return $this->_db->affected_rows();
    }

    public function error_message() {
        return $this->_db->_error_number() . ':' . $this->_db->_error_message();
    }

}
