<?php

require_once APPPATH . 'third_party/API/Autoloader.php';

class API_Loader extends CI_Loader {

    public function __construct() {
        parent::__construct();
    }

    public function API_Model($model_name) {
        $this->model('../third_party/API/Models/' . $model_name);
    }

    public function API_Library($library_name, $alias = NULL, $params = FALSE) {
        if (empty($alias) == TRUE) {
            $alias = $library_name;
        }
        $this->library('../third_party/API/Libraries/' . $library_name, $params, $alias);
    }

    public function API_Helper($helper_name, $alias = NULL) {
        if (empty($alias) == TRUE) {
            $alias = $helper_name;
        }
        $this->helper('../third_party/API/Helpers/' . $helper_name, $alias);
    }

}
