<?php

/**

 * @property CI_DB_active_record $db

 */
class SystemModel extends CI_Model {

    private $db;

    public function __construct() {
        
    }

    public function get_app($app_name) {

        if (!$this->db)
            $this->db = $this->load->database(array('db' => 'system_info', 'type' => 'slave'), true);

        $this->db->select("*");
        
        $this->db->where('app_name', $app_name);

        $this->db->limit(1);

        $data = $this->db->get('scopes');       
        if (is_object($data))
            return $data->row_array();        
    }

    public function get_service($service) {

        if (!$this->db)
            $this->db = $this->load->database(array('db' => 'system_info', 'type' => 'slave'), true);

        $this->db->where('service', $service);

        $this->db->limit(1);

        $data = $this->db->get('scopes');

        if (is_object($data))
            return $data->row_array();
    }

    public function get_telcos() {

        if (!$this->db)
            $this->db = $this->load->database(array('db' => 'system_info', 'type' => 'slave'), true);

        $data = $this->db->get('telcos');

        if (is_object($data))
            return $data->result_array();
    }

}