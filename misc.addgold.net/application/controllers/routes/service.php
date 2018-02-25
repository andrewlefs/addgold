<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

require_once APPPATH . 'core/EI_Controller.php';

class service extends EI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->helper('url');
    }

    public function index($sid = 0) {
        $path = $this->mapping($sid);
        $params = $this->input->get();
        if($params == true)
            header("location:" . $path . "/social?" . http_build_query($params));
        else
            header("location:" . $path);
        die;
    }
}
