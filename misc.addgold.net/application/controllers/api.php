<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

require_once APPPATH . 'BaseApi.php';

//require_once APPPATH . 'controllers/graphs/v10/autoloader.php';

class api extends BaseApi {

    public function __construct() {
        parent::__construct();
        $this->load->helper('url');
    }

    public function requests() {        
            
    }
}
