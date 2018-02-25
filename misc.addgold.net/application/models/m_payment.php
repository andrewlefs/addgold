<?php

require_once APPPATH . 'models/m_models.php';

class m_payment extends m_models {

    public function __construct() {
        parent::__construct();
    }

    public function getPublicKeyOfPackageName($package) {
        $query = $this->_db->select("*", false)
                ->where("package_name", $package)
                ->get("cfg_app_google");    
        return ($query != FALSE) ? $query->row_array() : FALSE;
    }

}
