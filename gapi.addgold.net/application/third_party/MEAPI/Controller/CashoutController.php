<?php

class MEAPI_Controller_CashoutController extends MEAPI_Core_Bootstrap implements MEAPI_Interface_CashoutInterface {

    protected $secret_key = "TOw@Dl6Ra3HIkr~Zg5Ln";

    //Ginside Tool
    public function manager(MEAPI_RequestInterface $request) {
        $params = $request->input_request();
        $needle = array("start_date", "end_date", "service_id");

        if (!is_required($params, $needle) == TRUE) {
            $diff = array_diff(array_values($needle), array_keys($params));
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_PARAMS', $diff);
            return;
        }

        $token = $params["token"];
        unset($params["token"]);
        unset($params["control"]);
        unset($params["func"]);

        $tokendata = implode("", $params);
        $valid = md5($tokendata . $this->secret_key);

        if ($token != $valid) {
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_TOKEN', $tokendata);
            return;
        }

        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $data = $this->CI->CashoutModel->get_cashout_day_limit($params["start_date"], $params["end_date"], $params["service_id"]);
        echo json_encode(array("code" => 0, "message" => "manager ok", "data" => $data));
        die;
    }

    public function add(MEAPI_RequestInterface $request) {
        $params = $request->input_request();
        $needle = array("limit", "start_date", "end_date", "service_id");

        if (!is_required($params, $needle) == TRUE) {
            $diff = array_diff(array_values($needle), array_keys($params));
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_PARAMS', $diff);
            return;
        }

        $token = $params["token"];
        unset($params["token"]);
        unset($params["control"]);
        unset($params["func"]);

        $tokendata = implode("", $params);
        $valid = md5($tokendata . $this->secret_key);

        if ($token != $valid) {
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_TOKEN', $tokendata);
            return;
        }

        //Add
        $add_data['cashout_limit'] = $params["limit"];
        $add_data['start_date'] = $params["start_date"];
        $add_data['end_date'] = $params["end_date"];
        $add_data['service_id'] = $params["service_id"];

        //Insert
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $i_id = $this->CI->CashoutModel->insert_id("cashout_day_limit", $add_data);

        if ($i_id > 0) {
            echo json_encode(array("code" => 0, "message" => "Thêm Cashout Limit thành công", "data" => true));
            die;
        } else {
            echo json_encode(array("code" => -3, "message" => "Thêm Cashout Limit thất bại", "data" => false));
            die;
        }
    }

    public function update(MEAPI_RequestInterface $request) {
        $params = $request->input_request();
        $needle = array("id", "limit", "start_date", "end_date", "service_id");

        if (!is_required($params, $needle) == TRUE) {
            $diff = array_diff(array_values($needle), array_keys($params));
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_PARAMS', $diff);
            return;
        }

        $token = $params["token"];
        unset($params["token"]);
        unset($params["control"]);
        unset($params["func"]);

        $tokendata = implode("", $params);
        $valid = md5($tokendata . $this->secret_key);

        if ($token != $valid) {
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_TOKEN', $tokendata);
            return;
        }

        //Update
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $i_id = $this->CI->CashoutModel->update_cashout_day_limit($params["id"], $params["start_date"], $params["end_date"], $params["limit"], $params["service_id"]);

        if ($i_id > 0) {
            echo json_encode(array("code" => 0, "message" => "Cập nhật Cashout Limit thành công", "data" => true));
            die;
        } else {
            echo json_encode(array("code" => -3, "message" => "Cập nhật Cashout Limit thất bại", "data" => false));
            die;
        }
    }

    public function update_status(MEAPI_RequestInterface $request) {
        $params = $request->input_request();
        $needle = array("type", "status", "service_id");

        if (!is_required($params, $needle) == TRUE) {
            $diff = array_diff(array_values($needle), array_keys($params));
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_PARAMS', $diff);
            return;
        }

        $token = $params["token"];
        unset($params["token"]);
        unset($params["control"]);
        unset($params["func"]);

        $tokendata = implode("", $params);
        $valid = md5($tokendata . $this->secret_key);

        if ($token != $valid) {
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_TOKEN', $tokendata);
            return;
        }

        $type = "";

        if ($params["type"] == "cashout") {
            $type = "cashout_status";
        } else
        if ($params["type"] == "game") {
            $type = "game_status";
        } else {
            echo json_encode(array("code" => -3, "message" => "Cập nhật trạng thái thất bại", "data" => $params["type"]));
            die;
        }

        //Update       
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $i_id = $this->CI->CashoutModel->update_cashout_config($type, $params["status"], $params["service_id"]);

        if ($i_id > 0) {
            echo json_encode(array("code" => 0, "message" => "Cập nhật trạng thái thành công", "data" => true));
            die;
        } else {
            echo json_encode(array("code" => -3, "message" => "Cập nhật trạng thái thất bại", "data" => false));
            die;
        }
    }

    public function get_status(MEAPI_RequestInterface $request) {
        $params = $request->input_request();
        $needle = array("type", "service_id");

        if (!is_required($params, $needle) == TRUE) {
            $diff = array_diff(array_values($needle), array_keys($params));
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_PARAMS', $diff);
            return;
        }

        $token = $params["token"];
        unset($params["token"]);
        unset($params["control"]);
        unset($params["func"]);

        $tokendata = implode("", $params);
        $valid = md5($tokendata . $this->secret_key);

        if ($token != $valid) {
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_TOKEN', $tokendata);
            return;
        }

        $type = "";

        if ($params["type"] == "cashout") {
            $type = "cashout_status";
        } else
        if ($params["type"] == "game") {
            $type = "game_status";
        } else {
            echo json_encode(array("code" => -3, "message" => "Lấy thông tin trạng thái thất bại", "data" => $params["type"]));
            die;
        }

        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $data = $this->CI->CashoutModel->get_cashout_status($type, $params["service_id"]);
        echo json_encode(array("code" => 0, "message" => "manager ok", "data" => $data));
        die;
    }

    public function cashout_logs(MEAPI_RequestInterface $request) {
        $params = $request->input_request();
        $needle = array("acc_id", "username", "start_date", "end_date", "service_id");

        if (!is_required($params, $needle) == TRUE) {
            $diff = array_diff(array_values($needle), array_keys($params));
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_PARAMS', $diff);
            return;
        }

        $token = $params["token"];
        unset($params["token"]);
        unset($params["control"]);
        unset($params["func"]);

        $tokendata = implode("", $params);
        $valid = md5($tokendata . $this->secret_key);

        if ($token != $valid) {
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_TOKEN', $tokendata);
            return;
        }

        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $get_cashout_logs = $this->CI->CashoutModel->get_cashout_logs($params["acc_id"], $params["username"], $params["start_date"], $params["end_date"], $params["service_id"]);
        echo json_encode(array("code" => 0, "message" => "get cashout logs ok", "data" => $get_cashout_logs));
        die;
    }

    public function total_cashout(MEAPI_RequestInterface $request) {
        $params = $request->input_request();
        $needle = array("start_date", "end_date", "all", "service_id");

        if (!is_required($params, $needle) == TRUE) {
            $diff = array_diff(array_values($needle), array_keys($params));
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_PARAMS', $diff);
            return;
        }

        $token = $params["token"];
        unset($params["token"]);
        unset($params["control"]);
        unset($params["func"]);

        $tokendata = implode("", $params);
        $valid = md5($tokendata . $this->secret_key);

        if ($token != $valid) {
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_TOKEN', $tokendata);
            return;
        }

        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $get_total_cashout = $this->CI->CashoutModel->get_total_cashout($params["start_date"], $params["end_date"], $params["all"], $params["service_id"]);
        echo json_encode(array("code" => 0, "message" => "get total cashout", "data" => $get_total_cashout));
        die;
    }
    
    public function total_cashout_vnd(MEAPI_RequestInterface $request) {
        $params = $request->input_request();
        $needle = array("start_date", "end_date", "all", "service_id");

        if (!is_required($params, $needle) == TRUE) {
            $diff = array_diff(array_values($needle), array_keys($params));
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_PARAMS', $diff);
            return;
        }

        $token = $params["token"];
        unset($params["token"]);
        unset($params["control"]);
        unset($params["func"]);

        $tokendata = implode("", $params);
        $valid = md5($tokendata . $this->secret_key);

        if ($token != $valid) {
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_TOKEN', $tokendata);
            return;
        }

        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $get_total_cashout = $this->CI->CashoutModel->get_total_cashout_vnd($params["start_date"], $params["end_date"], $params["all"], $params["service_id"]);
        echo json_encode(array("code" => 0, "message" => "get total cashout vnd", "data" => $get_total_cashout));
        die;
    }
    
    public function total_cashout_btce(MEAPI_RequestInterface $request) {
        $params = $request->input_request();
        $needle = array("start_date", "end_date", "service_id");

        if (!is_required($params, $needle) == TRUE) {
            $diff = array_diff(array_values($needle), array_keys($params));
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_PARAMS', $diff);
            return;
        }

        $token = $params["token"];
        unset($params["token"]);
        unset($params["control"]);
        unset($params["func"]);

        $tokendata = implode("", $params);
        $valid = md5($tokendata . $this->secret_key);

        if ($token != $valid) {
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_TOKEN', $tokendata);
            return;
        }

        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $get_total_cashout = $this->CI->CashoutModel->get_total_btce_cashout($params["start_date"], $params["end_date"], $params["service_id"]);
        echo json_encode(array("code" => 0, "message" => "get total cashout btce", "data" => $get_total_cashout));
        die;
    }

    public function get_tax(MEAPI_RequestInterface $request) {
        $params = $request->input_request();
        $needle = array("type", "service_id");

        if (!is_required($params, $needle) == TRUE) {
            $diff = array_diff(array_values($needle), array_keys($params));
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_PARAMS', $diff);
            return;
        }

        $token = $params["token"];
        unset($params["token"]);
        unset($params["control"]);
        unset($params["func"]);

        $tokendata = implode("", $params);
        $valid = md5($tokendata . $this->secret_key);

        if ($token != $valid) {
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_TOKEN', $tokendata);
            return;
        }

        $type = "";

        if ($params["type"] == "tax") {
            $type = "cashout_tax";
        } else {
            echo json_encode(array("code" => -3, "message" => "Lấy thông tin Cashout Tax thất bại", "data" => $params["type"]));
            die;
        }

        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $get_cashout_status = $this->CI->CashoutModel->get_cashout_status($type, $params["service_id"]);
        echo json_encode(array("code" => 0, "message" => "manager ok", "data" => $get_cashout_status));
        die;
    }

    public function update_tax(MEAPI_RequestInterface $request) {
        $params = $request->input_request();
        $needle = array("type", "value", "service_id");

        if (!is_required($params, $needle) == TRUE) {
            $diff = array_diff(array_values($needle), array_keys($params));
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_PARAMS', $diff);
            return;
        }

        $token = $params["token"];
        unset($params["token"]);
        unset($params["control"]);
        unset($params["func"]);

        $tokendata = implode("", $params);
        $valid = md5($tokendata . $this->secret_key);

        if ($token != $valid) {
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_TOKEN', $tokendata);
            return;
        }

        $type = "";

        if ($params["type"] == "tax") {
            $type = "cashout_tax";
        } else {
            echo json_encode(array("code" => -3, "message" => "Cập nhật Cashout Tax thất bại", "data" => $params["type"]));
            die;
        }

        //Update
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $i_id = $this->CI->CashoutModel->update_cashout_config($type, $params["value"], $params["service_id"]);

        if ($i_id > 0) {
            echo json_encode(array("code" => 0, "message" => "Cập nhật Cashout Tax thành công", "data" => true));
            die;
        } else {
            echo json_encode(array("code" => -3, "message" => "Cập nhật Cashout Tax thất bại", "data" => false));
            die;
        }
    }

    public function get_card_list(MEAPI_RequestInterface $request) {
        $params = $request->input_request();
        $needle = array("id", "service_id");

        if (!is_required($params, $needle) == TRUE) {
            $diff = array_diff(array_values($needle), array_keys($params));
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_PARAMS', $diff);
            return;
        }

        $token = $params["token"];
        unset($params["token"]);
        unset($params["control"]);
        unset($params["func"]);

        $tokendata = implode("", $params);
        $valid = md5($tokendata . $this->secret_key);

        if ($token != $valid) {
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_TOKEN', $tokendata);
            return;
        }

        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $get_card_list = $this->CI->CashoutModel->get_card_list($params["id"], $params["service_id"]);
        echo json_encode(array("code" => 0, "message" => "manager ok", "data" => $get_card_list));
        die;
    }

    public function update_tax_by_card(MEAPI_RequestInterface $request) {
        $params = $request->input_request();
        $needle = array("id", "value", "service_id");

        if (!is_required($params, $needle) == TRUE) {
            $diff = array_diff(array_values($needle), array_keys($params));
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_PARAMS', $diff);
            return;
        }

        $token = $params["token"];
        unset($params["token"]);
        unset($params["control"]);
        unset($params["func"]);

        $tokendata = implode("", $params);
        $valid = md5($tokendata . $this->secret_key);

        if ($token != $valid) {
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_TOKEN', $tokendata);
            return;
        }

        //Update
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $i_id = $this->CI->CashoutModel->update_tax_by_card($params["id"], $params["value"], $params["service_id"]);
        if ($i_id > 0) {
            echo json_encode(array("code" => 0, "message" => "Cập nhật Cashout Tax thành công", "data" => true));
            die;
        } else {
            echo json_encode(array("code" => -3, "message" => "Cập nhật Cashout Tax thất bại", "data" => false));
            die;
        }
    }
    
    public function cashout_bitcoint_logs(MEAPI_RequestInterface $request) {
        $params = $request->input_request();
        $needle = array("acc_id", "username", "start_date", "end_date", "service_id");

        if (!is_required($params, $needle) == TRUE) {
            $diff = array_diff(array_values($needle), array_keys($params));
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_PARAMS', $diff);
            return;
        }

        $token = $params["token"];
        unset($params["token"]);
        unset($params["control"]);
        unset($params["func"]);

        $tokendata = implode("", $params);
        $valid = md5($tokendata . $this->secret_key);

        if ($token != $valid) {
            $this->_response = new MEAPI_Response_APIResponse($request, 'INVALID_TOKEN', $tokendata);
            return;
        }

        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $get_cashout_bitcoint_logs = $this->CI->CashoutModel->cashout_bitcoint_logs($params["acc_id"], $params["username"], $params["start_date"], $params["end_date"], $params["service_id"]);
        echo json_encode(array("code" => 0, "message" => "get cashout logs ok", "data" => $get_cashout_bitcoint_logs));
        die;
    }

    //Game Event
    //Shop Card
    public function get_cashout_config(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $params = $request->input_request();
        $data = $this->CI->CashoutModel->get_cashout_config($params["service_id"]);
        echo json_encode($data);
        die;
    }

    public function get_total_cashout_by_user(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $params = $request->input_request();
        $data = $this->CI->CashoutModel->get_total_cashout_by_user($params["account_id"], $params["service_id"]);
        echo json_encode($data);
        die;
    }

    public function get_card_list_game(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $params = $request->input_request();
        $data = $this->CI->CashoutModel->get_card_list_game($params["service_id"]);
        echo json_encode($data);
        die;
    }

    public function get_cashout_btc_exchange_history(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $params = $request->input_request();
        $data = $this->CI->CashoutModel->get_cashout_btc_exchange_history($params["account_id"], $params["server_id"], $params["service_id"], $params["card_type"]);
        echo json_encode($data);
        die;
    }
    
    public function get_cashout_exchange_history(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $params = $request->input_request();
        $data = $this->CI->CashoutModel->get_cashout_exchange_history($params["account_id"], $params["server_id"], $params["service_id"], $params["item_type"]);
        echo json_encode($data);
        die;
    }

    public function get_cashout_list_card_data(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $params = $request->input_request();
        $data = $this->CI->CashoutModel->get_cashout_list_card_data($params["account_id"], $params["server_id"], $params["order_id"], $params["service_id"]);
        echo json_encode($data);
        die;
    }

    public function get_card_detail(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $params = $request->input_request();
        $data = $this->CI->CashoutModel->get_card_detail($params["card_code"], $params["service_id"]);
        echo json_encode($data);
        die;
    }

    public function get_cashout_day_limit_game(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $params = $request->input_request();
        $data = $this->CI->CashoutModel->get_cashout_day_limit_game($params["service_id"]);
        echo json_encode($data);
        die;
    }

    public function get_total_cashout_game(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $params = $request->input_request();
        $data = $this->CI->CashoutModel->get_total_cashout_game($params["service_id"]);
        echo json_encode($data);
        die;
    }

    public function i_event_cashout_exchange_history(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $params = $request->input_request();
        $i_id = $this->CI->CashoutModel->insert_id("cashout_exchange_history", $params["add_data"]);

        echo json_encode(array("code" => $i_id, "message" => "Thêm Log Cashout thành công", "data" => true));
        die;
    }

    public function update_gold_minus_result(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $params = $request->input_request();
        $data = $this->CI->CashoutModel->update_gold_minus_result($params["i_id"], $params["gold_minus_status"], $params["gold_minus_send"], $params["gold_minus_result"]);
        echo json_encode($data);
        die;
    }

    public function i_cash_out_from_game(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $params = $request->input_request();
        $i_id = $this->CI->CashoutModel->insert_id("cash_out_from_game", $params["add_data"]);

        echo json_encode(array("code" => $i_id, "message" => "Thêm Log cash_out_from_game thành công", "data" => true));
        die;
    }

    public function cash_in_wallet(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/PaymentModel', 'PaymentModel');
        $params = $request->input_request();
        // check duplicate transaction
        $arrStatusTrans = $this->CI->PaymentModel->checkExistsTransaction($params["service_id"], $params["account_id"], $params["transaction_id"]);
        if (!empty($arrStatusTrans)) {
            return $this->_response = new MEAPI_Response_APIResponse($request, "DUPLICATE_TRANSACTION", $arrStatusTrans);
        }
        $statusWallet = $this->CI->PaymentModel->topup_service_wallet($params["service_id"]
                , $params["account_service_id"], $params["account_id"], $params["transaction_id"]
                , $params["character_id"], $params["character_name"], $params["server_id"]
                , $params["time_stamp"], $params["payment_type"], $params["payment_subtype"]
                , $params["type"], $params["unit"], $params["amount"]
                , $params["platform"], $params["full_request"], $params["description"]
                , $params["client_ip"], $params["refer_pay_info"], $params["status"]
                , $params["is_sandbox"], $params["src_game"], $params["count"]
                , $params["item_type"], $params["ratio"]);

        if ($statusWallet == null) {
            if (!empty($statusWallet['order_id'])) {
                $this->CI->PaymentModel->finishCashIn($statusWallet['order_id'], 2); // update status = 2: faild
            }
            return $this->_response = new MEAPI_Response_APIResponse($request, "PAY_CARD_FALID", $statusWallet);
        } else {
            $data['data']['transaction'] = $params["transaction_id"];
            $this->CI->PaymentModel->finishCashIn($statusWallet['order_id'], 1); // update status = 1: success
            return $this->_response = new MEAPI_Response_APIResponse($request, "PAY_CARD_SUCCESS", $statusWallet);
        }
    }

    public function withdraw_wallet(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/PaymentModel', 'PaymentModel');
        $params = $request->input_request();

        //kiem tra transaction recharge
        // call PaymentModel
        $this->CI->load->model('../third_party/MEAPI/Models/PaymentModel', 'PaymentModel');

        // check duplicate transaction
        $arrStatusTrans = $this->CI->PaymentModel->getStatusTransactionService($params["service_id"], trim($params["transaction_id"]));
        if ($arrStatusTrans == null) {
            echo json_encode(array("code" => -1, "message" => "GET_FAIL", "data" => true));
            return $this->_response = new MEAPI_Response_APIResponse($request, "GET_FAIL", true);
        }

        // check trường hợp trùng giao dịch - voi truong hop init trans & gd thanh cong thì ko thuc hien
        if (in_array($arrStatusTrans['status'], array(0, 1, 2))) {
            return $this->_response = new MEAPI_Response_APIResponse($request, "DUPLICATE_TRANSACTION", $arrStatusTrans);
        }

        // status = 2 chính là gd failed - da rollback truoc do roi nen ko thuc hien nua
        //if ($arrStatusTrans['status'] != 2){
        //write log withdraw
        $is_withdraw = $this->CI->PaymentModel->topup_withdraw_wallet($params["service_id"], $params["account_id"], trim($params["transaction_id"]), $params["amount"]);

        if ($is_withdraw === null) {
            return $this->_response = new MEAPI_Response_APIResponse($request, "DB_ERROR", $is_withdraw);
        }

        if ($is_withdraw === false) {
            return $this->_response = new MEAPI_Response_APIResponse($request, "AMOUNT_NOT_ENOUGH", $is_withdraw);
        }
        // }
        $idInserted = $this->CI->PaymentModel->setTransactionWallet($params["service_id"]
                , $params["account_id"], $params["transaction_id"]
                , $params["character_id"], $params["character_name"], $params["server_id"]
                , $params["time_stamp"], $params["payment_type"], $params["amount"]
                , $params["channel"], $params["platform"], $params["payment_desc"], $params["games"]
                , $params["full_request"]);
        if ($idInserted == null) {
            return $this->_response = new MEAPI_Response_APIResponse($request, "INSERT_TRANSACTION_FAIL", $is_withdraw);
        }
        return $this->_response = new MEAPI_Response_APIResponse($request, "ADD_MONEY_SUCCESS", $idInserted);
    }
    
    public function update_buycard_null_result(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $params = $request->input_request();
        $data = $this->CI->CashoutModel->update_buycard_null_result($params["i_id"], $params["card_status"], $params["buycard_message_result"]);
        echo json_encode($data);
        die;
    }
    
    public function update_gold_rollback_result(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $params = $request->input_request();
        $i_id = $this->CI->CashoutModel->update_gold_rollback_result($params["i_id"], $params["gold_rollback_status"]
                , $params["gold_rollback_message_send"], $params["gold_rollback_message_result"]);
        echo json_encode(array("code" => $i_id, "message" => "update_gold_rollback_result", "data" => true));
        die;
    }
    
    public function update_buycard_result(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $params = $request->input_request();
        $i_id = $this->CI->CashoutModel->update_buycard_result($params["i_id"], $params["card_status"], $params["buycard_message_result"]);
        echo json_encode(array("code" => $i_id, "message" => "update_buycard_result", "data" => true));
        die;
    }
    
    public function update_card_data(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $params = $request->input_request();
        $i_id = $this->CI->CashoutModel->update_card_data($params["i_id"], $params["transid"], $params["card_list_data"]);
        echo json_encode(array("code" => $i_id, "message" => "update_card_data", "data" => true));
        die;
    }
    
    public function i_event_cashout_exchange_history_details(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $params = $request->input_request();
        $i_id = $this->CI->CashoutModel->insert_id("cashout_exchange_history_details", $params["add_data"]);

        echo json_encode(array("code" => $i_id, "message" => "Thêm Log Cashout Details thành công", "data" => true));
        die;
    }
    
    //BitCoint
    public function update_bitcoint_data(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $params = $request->input_request();
        $i_id = $this->CI->CashoutModel->update_bitcoint_data($params["i_id"], $params["btc_code"], $params["btc_amount"], $params["btc_transid"], $params["btc_e_order_id"], $params["btc_account_key"]);
        echo json_encode(array("code" => $i_id, "message" => "update_card_data", "data" => true));
        die;
    }
    
    public function get_cashout_bitcoint_data(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $params = $request->input_request();
        $data = $this->CI->CashoutModel->get_cashout_bitcoint_data($params["account_id"], $params["server_id"], $params["order_id"], $params["service_id"]);
        echo json_encode($data);
        die;
    }

    //User
    public function user_check(MEAPI_RequestInterface $request) {        
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $params = $request->input_request();        
        $data_user = $this->CI->CashoutModel->user_check_exist($params["account_id"]);
        //echo yyy; die;

        if (count($data_user) == 0) {            
            $userdata_p["account_id"] = $params["account_id"];           
            $userdata_p["hash_tag"] = $params["hash_tag"];
            //echo ttt; die;
            $this->CI->CashoutModel->insert("account_wallet", $userdata_p);
        } else {
            echo json_encode($data_user);
            die;
        }
    }

    public function user_check_email_exist(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $params = $request->input_request();

        $user_check_email =  $this->CI->CashoutModel->user_check_email_exist($params["user_email"]);
        echo json_encode($user_check_email);
        die;
    }

    public function update_user_pass2(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $params = $request->input_request();
        $i_id = $this->CI->CashoutModel->update_user_pass2($params["id"], $params["pass2_md5"], $params["user_email"]);
        echo json_encode(array("code" => $i_id, "message" => "Cập nhật Password cấp 2 thành công", "data" => true));
        die;
    }

    public function user_check_email_exist_by_user(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $params = $request->input_request();

        $user_check_email =  $this->CI->CashoutModel->user_check_email_exist_by_user($params["account_id"], $params["user_email"]);
        echo json_encode($user_check_email);
        die;
    }

    public function update_reset_pass_status(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $params = $request->input_request();
        $i_id = $this->CI->CashoutModel->update_reset_pass_status($params["account_id"], $params["reset_id"]);
        echo json_encode(array("code" => $i_id, "message" => "Cập nhật trạng thái Reset Password cấp 2 thành công", "data" => true));
        die;
    }

    public function user_check_reset_id(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $params = $request->input_request();

        $user_check =  $this->CI->CashoutModel->user_check_reset_id($params["reset_id"]);
        echo json_encode($user_check);
        die;
    }

    public function update_reset_pass2(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $params = $request->input_request();
        $i_id = $this->CI->CashoutModel->update_reset_pass2($params["reset_id"]);
        echo json_encode(array("code" => $i_id, "message" => "Reset Password cấp 2 thành công", "data" => true));
        die;
    }

    public function user_check_pass2(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/CashoutModel', 'CashoutModel');
        $params = $request->input_request();

        $user_check =  $this->CI->CashoutModel->user_check_pass2($params["account_id"], $params["pass2_md5"]);
        echo json_encode($user_check);
        die;
    }
}
