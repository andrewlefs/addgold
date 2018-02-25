<?php

class MEAPI_Controller_BitCointRechargeController extends MEAPI_Core_Bootstrap implements MEAPI_Interface_BitCointRechargeInterface {

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

        $this->CI->load->model('../third_party/MEAPI/Models/BitcointRechargeModel', 'BitcointRechargeModel');
        $data = $this->CI->BitcointRechargeModel->get_cashout_day_limit($params["start_date"], $params["end_date"], $params["service_id"]);
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
        $this->CI->load->model('../third_party/MEAPI/Models/BitcointRechargeModel', 'BitcointRechargeModel');
        $i_id = $this->CI->BitcointRechargeModel->insert_id("cashout_day_limit", $add_data);

        if ($i_id > 0) {
            echo json_encode(array("code" => 0, "message" => "Thêm BitcointRecharge Limit thành công", "data" => true));
            die;
        } else {
            echo json_encode(array("code" => -3, "message" => "Thêm BitcointRecharge Limit thất bại", "data" => false));
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
        $this->CI->load->model('../third_party/MEAPI/Models/BitcointRechargeModel', 'BitcointRechargeModel');
        $i_id = $this->CI->BitcointRechargeModel->update_cashout_day_limit($params["id"], $params["start_date"], $params["end_date"], $params["limit"], $params["service_id"]);

        if ($i_id > 0) {
            echo json_encode(array("code" => 0, "message" => "Cập nhật BitcointRecharge Limit thành công", "data" => true));
            die;
        } else {
            echo json_encode(array("code" => -3, "message" => "Cập nhật BitcointRecharge Limit thất bại", "data" => false));
            die;
        }
    }
   

    //Game Event
    public function get_bitcoint_recharge_status(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/BitcointRechargeModel', 'BitcointRechargeModel');
        $params = $request->input_request();
        $data = $this->CI->BitcointRechargeModel->get_bitcoint_recharge_status($params["service_id"]);
        echo json_encode($data);
        die;
    }   

    public function i_event_cashout_exchange_history(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/BitcointRechargeModel', 'BitcointRechargeModel');
        $params = $request->input_request();
        $i_id = $this->CI->BitcointRechargeModel->insert_id("cashout_exchange_history", $params["add_data"]);

        echo json_encode(array("code" => $i_id, "message" => "Thêm Log BitcointRecharge thành công", "data" => true));
        die;
    }

    public function update_gold_minus_result(MEAPI_RequestInterface $request) {
        $this->CI->load->model('../third_party/MEAPI/Models/BitcointRechargeModel', 'BitcointRechargeModel');
        $params = $request->input_request();
        $data = $this->CI->BitcointRechargeModel->update_gold_minus_result($params["i_id"], $params["gold_minus_status"], $params["gold_minus_send"], $params["gold_minus_result"], $params["service_id"]);
        echo json_encode($data);
        die;
    }   
}
