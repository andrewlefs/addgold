<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
#require_once APPPATH . 'third_party/MeAPI/Autoloader.php';
require_once APPPATH . '/core/EI_Controller.php';

/**
 * Description of social
 *
 * @author vietbl
 */
class home extends EI_Controller {

    public function __construct() {
        parent::__construct();
    }

    public function clearCached() {
        $params = array();
        $gets = $this->input->get();
        if ($gets == true) {
            $posts = $this->input->post();
            if ($posts == true) {
                $params = array_filter(array_merge($gets, $posts));
            } else {
                $params = $gets;
            }
        } else {
            $params = $this->input->post();
        }
        $status = false;

        switch (strtolower($params["key"])) {
            case "get_link_cdn_client":
                              break;
            case "exchangeratelist":               
                break;
        }
        echo json_encode($results);
        die;
    }

}
