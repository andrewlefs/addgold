<?php

class MEAPI_Controller_GameController extends MEAPI_Core_Bootstrap implements MEAPI_Interface_GameInterface {

    function __construct() {
        $this->CI = & get_instance();
    }

    /*
     * Lấy thông tin chi tiết nhân vật trong game
     */

    public function get_game_account_info(MEAPI_RequestInterface $request) {
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();

            $this->CI->load->MEAPI_Library('GAPI/Service_' . $params['service_name'], 'APIService');
            $result = $this->CI->APIService->{__FUNCTION__}($params);
            if ($result['status'] == false)
                $this->_response = new MEAPI_Response_APIResponse($request, $result['message']);
            else
                $this->_response = new MEAPI_Response_APIResponse($request, $result['message'], $result['data']);
        } else {
            $this->_response = $authorize->getResponse();
        }
    }

    /*
     * Lấy thông tin chi tiết nhân vật trong game theo guid
     */

    public function get_game_account_info_by_guid(MEAPI_RequestInterface $request) {
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();

            $this->CI->load->MEAPI_Library('GAPI/Service_' . $params['service_name'], 'APIService');

            $result = $this->CI->APIService->{__FUNCTION__}($params);

            if ($result['status'] == false)
                $this->_response = new MEAPI_Response_APIResponse($request, $result['message']);
            else
                $this->_response = new MEAPI_Response_APIResponse($request, $result['message'], $result['data']);
        } else {
            $this->_response = $authorize->getResponse();
        }
    }

    /*
     * Lấy Top nạp theo Server by Game
     * form day to current
     */

    public function get_top_pay(MEAPI_RequestInterface $request) {
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();

            $this->CI->load->model('../third_party/MEAPI/Models/GameModel', 'GameModel');
            $data = $this->CI->GameModel->get_top_pay($params["service_name"], $params["server_id"], $params["date"], $params["end_date"], $params["limit"]);

            if ($data == false)
                $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_FAIL");
            else
                $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_SUCCESS", $data);
        } else {
            $this->_response = $authorize->getResponse();
        }
    }

    /*
     * Lấy tổng nạp của gamer amount, original_money, money
     * form day to current
     */

    public function get_money(MEAPI_RequestInterface $request) {
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();
            if (isset($params['account_service_id']) && !isset($params['account_id']))
                $params['account_id'] = $params['account_service_id'];
			//var_dump($params);die;
            $this->CI->load->model('../third_party/MEAPI/Models/GameModel', 'GameModel');
            $data = $this->CI->GameModel->get_money($params["account_id"], $params["server_id"], $params["service_name"], $params["date"], $params["end_date"], $params["group_type"], $params["character_id"], $params["account_id"]);

            if ($data == false)
                $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_FAIL");
            else
                $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_SUCCESS", $data);
        } else {
            $this->_response = $authorize->getResponse();
        }
    }

	/**
     *
     * @param MEAPI_RequestInterface $request
     */
    public function get_promo_items(MEAPI_RequestInterface $request) {
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();

            $this->CI->load->model('../third_party/MEAPI/Models/GameModel', 'GameModel');
            $server_ids = is_array($params["server_ids"]) ? $params["server_ids"] : (is_json($params["server_ids"]) ? json_decode($params["server_ids"], true) : $params["server_ids"]);

            $data = $this->CI->GameModel->get_promo_items($params["account_id"], $params["character_id"], $server_ids, $params["service_name"]);

            if ($data == false)
                $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_SUCCESS", array());
            else
                $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_SUCCESS", $data);
        } else {
            $this->_response = $authorize->getResponse();
        }
    }

    /*
     * lay list nap user
     * $params["startday"]: thoi gian bat dau
     * $params["endday"]: thoi gian ket thuc
     * $params["first"]: =1 lay giao dich dau tien trong khoan thoi gian tren
     * $params["type"]: card, inapp, bank
     * $params["amount"]: filter theo menh gia 50k, 100k
     * Cac tham so tren = null se khong su dung
     */

    public function get_card(MEAPI_RequestInterface $request) {
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();

            $this->CI->load->model('../third_party/MEAPI/Models/GameModel', 'GameModel');
            //var_dump($service_name);
            $data = $this->CI->GameModel->get_card($params["account_id"], $params["server_id"], $params["service_name"], $params["startday"], $params["endday"], $params["first"], $params["type"], $params["amount"]);

            if ($data == false)
                $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_FAIL");
            else
                $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_SUCCESS", $data);
        } else {
            $this->_response = $authorize->getResponse();
        }
    }

    /*
     * kick user ra khoi game
     */

    public function kick_user(MEAPI_RequestInterface $request) {
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();

            $this->CI->load->MEAPI_Library('GAPI/Service_' . $params['service_name'], 'APIService');

            $result = $this->CI->APIService->{__FUNCTION__}($params);

            if ($result['status'] == false)
                $this->_response = new MEAPI_Response_APIResponse($request, $result['message'], $result['data']);
            else
                $this->_response = new MEAPI_Response_APIResponse($request, $result['message']);
        } else {
            $this->_response = $authorize->getResponse();
        }
    }

    /*
     * send quà cho gamer
     */

    public function add_item(MEAPI_RequestInterface $request) {
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();

            // add full request
            $params['full_request'] = $this->getCurrentURL();

            $this->CI->load->MEAPI_Library('GAPI/Service_' . $params['service_name'], 'APIService');

            $result = $this->CI->APIService->{__FUNCTION__}($params);

            if ($result['status'] == false)
                $this->_response = new MEAPI_Response_APIResponse($request, $result['message'], $result['data']);
            else
                $this->_response = new MEAPI_Response_APIResponse($request, $result['message']);
        } else {
            $this->_response = $authorize->getResponse();
        }
    }

    /*
     * trừ quà cho gamer
     */

    public function minus_item(MEAPI_RequestInterface $request) {
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();
            $this->CI->load->MEAPI_Library('GAPI/Service_' . $params['service_name'], 'APIService');
            $result = $this->CI->APIService->{__FUNCTION__}($params);

            if ($result['status'] == false)
                $this->_response = new MEAPI_Response_APIResponse($request, $result['message'], $result['data']);
            else
                $this->_response = new MEAPI_Response_APIResponse($request, $result['message']);
        } else {
            $this->_response = $authorize->getResponse();
        }
    }

    /*
     * create gift code quà cho gamer
     */

    public function gen_giftcode(MEAPI_RequestInterface $request) {
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();

            $this->CI->load->MEAPI_Library('GAPI/Service_' . $params['service_name'], 'APIService');

            $result = $this->CI->APIService->{__FUNCTION__}($params);

            if ($result['status'] == false)
                $this->_response = new MEAPI_Response_APIResponse($request, $result['message']);
            else
                $this->_response = new MEAPI_Response_APIResponse($request, $result['message']);
        } else {
            $this->_response = $authorize->getResponse();
        }
    }

    /*
     * add gift code quà cho gamer
     */

    public function add_giftcode(MEAPI_RequestInterface $request) {
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();

            $this->CI->load->MEAPI_Library('GAPI/Service_' . $params['service_name'], 'APIService');

            $result = $this->CI->APIService->{__FUNCTION__}($params);

            if ($result['status'] == false)
                $this->_response = new MEAPI_Response_APIResponse($request, $result['message']);
            else
                $this->_response = new MEAPI_Response_APIResponse($request, $result['message']);
        } else {
            $this->_response = $authorize->getResponse();
        }
    }

    /*
     * create gift code quà cho gamer
     */

    public function get_list_gift_id(MEAPI_RequestInterface $request) {
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();

            $this->CI->load->MEAPI_Library('GAPI/Service_' . $params['service_name'], 'APIService');

            $result = $this->CI->APIService->{__FUNCTION__}();

            if ($result['status'] == false)
                $this->_response = new MEAPI_Response_APIResponse($request, $result['message']);
            else
                $this->_response = new MEAPI_Response_APIResponse($request, $result['message']);
        } else {
            $this->_response = $authorize->getResponse();
        }
    }

    /*
     * get top
     */

    public function get_top(MEAPI_RequestInterface $request) {
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();
            $this->CI->load->MEAPI_Library('GAPI/Service_' . $params['service_name'], 'APIService');

            $result = $this->CI->APIService->{__FUNCTION__}($params);

            if ($result['status'] == false)
                $this->_response = new MEAPI_Response_APIResponse($request, $result['message']);
            else
                $this->_response = new MEAPI_Response_APIResponse($request, $result['message'], $result['result']);
        } else {
            $this->_response = $authorize->getResponse();
        }
    }

    /**
     *
     * @param MEAPI_RequestInterface $request
     */
    public function get_pay_element(MEAPI_RequestInterface $request) {
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();

            $this->CI->load->model('../third_party/MEAPI/Models/GameModel', 'GameModel');
            //var_dump($service_name);
            $data = $this->CI->GameModel->get_pay_element($params["type"]);

            if ($data == false)
                $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_FAIL");
            else
                $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_SUCCESS", array('data' => $data));
        } else {
            $this->_response = $authorize->getResponse();
        }
    }
    /**
     *
     * @param MEAPI_RequestInterface $request
     */
    public function get_server_list(MEAPI_RequestInterface $request) {
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();

            $this->CI->load->model('../third_party/MEAPI/Models/GameModel', 'GameModel');
            //var_dump($service_name);
            $data = $this->CI->GameModel->get_server_list($params["service_name"], $params["show_all"]);

            if ($data == false)
                $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_FAIL");
            else
                $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_SUCCESS", array('data' => $data));
        } else {
            $this->_response = $authorize->getResponse();
        }
    }

    /**
     *
     * @param MEAPI_RequestInterface $request
     */
    public function add_server_list(MEAPI_RequestInterface $request) {
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();

            $needle = array('service_name','server_id','server_name','status','server_game_address');
            if (is_required($params, $needle) == FALSE) {
                $diff = array_diff(array_values($needle), array_keys($params));
                //var_dump($diff);die;
                $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_PARAMS', $diff);
            }

            $this->CI->load->model('../third_party/MEAPI/Models/GameModel', 'GameModel');
            //var_dump($service_name);
            $data = $this->CI->GameModel->add_server_list($params["service_name"], $params['server_id'],
                $params['server_name'],$params['server_game_address'],
                $params['status'],$params['server_id_merge'],$params['is_test_server'],
                $params['is_maintenance'],$params['is_change_item']);

            if ($data == false)
                $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_FAIL");
            else
                $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_SUCCESS", array('data' => $data));
        } else {
            $this->_response = $authorize->getResponse();
        }
    }
    /**
     *
     * @param MEAPI_RequestInterface $request
     */
    public function edit_server_list(MEAPI_RequestInterface $request) {
        $authorize = new MEAPI_Controller_AuthorizeController();
        if ($authorize->validateAuthorizeRequest($request)) {
            $params = $request->input_request();

            $needle = array('id','service_name','server_id','server_name','status','server_game_address');
            if (is_required($params, $needle) == FALSE) {
                $diff = array_diff(array_values($needle), array_keys($params));
                //var_dump($diff);die;
                $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_PARAMS', $diff);
            }

            $this->CI->load->model('../third_party/MEAPI/Models/GameModel', 'GameModel');
            //var_dump($service_name);
            $data = $this->CI->GameModel->add_server_list($params["id"],$params["service_name"], $params['server_id'],
                $params['server_name'],$params['server_game_address'],
                $params['status'],$params['server_id_merge'],$params['is_test_server'],
                $params['is_maintenance'],$params['is_change_item']);

            if ($data == false)
                $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_FAIL");
            else
                $this->_response = new MEAPI_Response_APIResponse($request, "GET_INFO_SUCCESS", array('data' => $data));
        } else {
            $this->_response = $authorize->getResponse();
        }
    }



}
