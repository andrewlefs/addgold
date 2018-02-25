<?php

require_once APPPATH . 'models/m_models.php';

abstract class AbsEnumModel {

    const TABLE_GSV_INFO = "gsv_info";
    const TABLE_GSV_MESSAGE = "gsv_message";
    const TABLE_GSV_CONFIG = "gsv_config";
    const TABLE_PAYMENT_ITEMS = "payment_items";

}

class m_app_home extends m_models {

    public function __construct() {
        parent::__construct();
    }

    public function get_where($args, $offset = 0, $limit = 1000, $order = null) {
        $this->_db_slave->where($args);
        if ($order) {
            $this->_db_slave->order_by($order);
        } else {
            $this->_db_slave->order_by('id DESC');
        }
        $this->_db_slave->limit($limit, $offset);
        $query = $this->_db_slave->get(AbsEnumModel::TABLE_GSV_INFO);
        return is_object($query) ? $query->result_array() : FALSE;
    }

    public function get_where_message($args, $offset = 0, $limit = 1000, $order = null) {
        $this->_db_slave->where($args);
        if ($order) {
            $this->_db_slave->order_by($order);
        } else {
            $this->_db_slave->order_by('id DESC');
        }
        $this->_db_slave->limit($limit, $offset);
        $query = $this->_db_slave->get(AbsEnumModel::TABLE_GSV_MESSAGE);
        return is_object($query) ? $query->result_array() : FALSE;
    }

    public function get_where_config($args, $offset = 0, $limit = 1000, $order = null) {
        $this->_db_slave->where($args);
        if ($order) {
            $this->_db_slave->order_by($order);
        } else {
            $this->_db_slave->order_by('id DESC');
        }
        $this->_db_slave->limit($limit, $offset);
        $query = $this->_db_slave->get(AbsEnumModel::TABLE_GSV_CONFIG);
        return is_object($query) ? $query->row_array() : FALSE;
    }

    public function get_where_config_all($args, $offset = 0, $limit = 1000, $order = null) {
        $this->_db_slave->where($args);
        if ($order) {
            $this->_db_slave->order_by($order);
        } else {
            $this->_db_slave->order_by('id DESC');
        }
        $this->_db_slave->limit($limit, $offset);
        $query = $this->_db_slave->get(AbsEnumModel::TABLE_GSV_CONFIG);
        return is_object($query) ? $query->result_array() : FALSE;
    }

    public function get_where_payment($args, $offset = 0, $limit = 1000, $order = null) {
        $this->_db_slave->where($args);
        if ($order) {
            $this->_db_slave->order_by($order);
        } else {
            $this->_db_slave->order_by('id DESC');
        }
        $this->_db_slave->limit($limit, $offset);
        $query = $this->_db_slave->get(AbsEnumModel::TABLE_PAYMENT_ITEMS);
        //var_dump($this->_db_slave->last_query());die;
        return is_object($query) ? $query->row_array() : FALSE;
    }

}
