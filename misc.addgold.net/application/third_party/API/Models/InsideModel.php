<?php
class InsideModel extends CI_Model {
    protected $_db_slave;
	protected $_db;
    private $_table_gsv = "gsv_info";
    private $_table_gsv_message = "gsv_message";
	private $_table_gsv_config = "gsv_config";
    public function __construct() {
		if (empty($this->_db_slave))
            $this->_db_slave = $this->load->database(array('db' => 'user_info', 'type' => 'slave'), true);
		if (!$this->_db)
            $this->_db = $this->load->database(array('db' => 'user_info', 'type' => 'master'), TRUE);
    }
	public function get_where($args, $offset = 0, $limit = 1000, $order = null) {
        $this->_db_slave->where($args);
        if($order) {
            $this->_db_slave->order_by($order);
        } else {
            $this->_db_slave->order_by('id DESC');
        }
        $this->_db_slave->limit($limit, $offset);
        $query = $this->_db_slave->get($this->_table_gsv);
        return is_object($query) ? $query->result_array() : FALSE;
    }
    public function get_where_message($args, $offset = 0, $limit = 1000, $order = null) {
        $this->_db_slave->where($args);
        if($order) {
            $this->_db_slave->order_by($order);
        } else {
            $this->_db_slave->order_by('id DESC');
        }
        $this->_db_slave->limit($limit, $offset);
        $query = $this->_db_slave->get($this->_table_gsv_message);
        return is_object($query) ? $query->result_array() : FALSE;
    }
	public function get_where_config($args, $offset = 0, $limit = 1000, $order = null) {
        $this->_db_slave->where($args);
        if($order) {
            $this->_db_slave->order_by($order);
        } else {
            $this->_db_slave->order_by('id DESC');
        }
        $this->_db_slave->limit($limit, $offset);
        $query = $this->_db_slave->get($this->_table_gsv_config);
        return is_object($query) ? $query->row_array() : FALSE;
    }
	public function get_where_config_all($args, $offset = 0, $limit = 1000, $order = null) {
        $this->_db_slave->where($args);
        if($order) {
            $this->_db_slave->order_by($order);
        } else {
            $this->_db_slave->order_by('id DESC');
        }
        $this->_db_slave->limit($limit, $offset);
        $query = $this->_db_slave->get($this->_table_gsv_config);
        return is_object($query) ? $query->result_array() : FALSE;
    }
	public function insert($args) {
        if($this->_db->insert($this->_table_gsv, $args)) {
            return TRUE;
        }
        return FALSE;
    }
	public function insert_all($tbl,$args) {
        if($this->_db->insert($tbl, $args)) {
            return TRUE;
        }
        return FALSE;
    }
	public function update_all($tbl,$args, $where) {
        if(is_array($args)) {
            $this->_db->where($where);
            if($this->_db->update($tbl, $args)) {
				return TRUE;
            }
            return FALSE;
        } else {
            return FALSE;
        }
    }
	public function update($args, $where) {
        if(is_array($args)) {
            $this->_db->where($where);
            if($this->_db->update($this->_table_gsv, $args)) {
                return TRUE;
            }
            return FALSE;
        } else {
            return FALSE;
        }
    }

}