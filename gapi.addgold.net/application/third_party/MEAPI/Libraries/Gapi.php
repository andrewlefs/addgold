<?php

class Gapi {

    /**
     *
     * @var CI_Controller
     */
    private $CI;

    function __construct($service) {
        $this->CI =& get_instance();
        $this->CI->load->MEAPI_Library('GAPI/Service_' . $service['service_name'], 'APIService');
    }


    public function init($function, obj_service $service, obj_distribution $distribution, obj_tracking $tracking, obj_game_info $obj_game_info, obj_payment_recharge $obj_payment_recharge, $params) {
        return $this->CI->APIService->{$function}($service, $distribution, $tracking, $obj_game_info, $obj_payment_recharge, $params);
    }
}

class obj_distribution {
    public $provider;
    public $refcode;

    function __construct($params) {
        if (is_object($params)) {
            foreach ($params as $k => $v) {
                $this->{$k} = $v;
            }

        }
    }
}

class obj_tracking {

    public $tracking_code;
    public $maketing_code;

    function __construct($params) {
        if (is_object($params)) {
            foreach ($params as $k => $v) {
                $this->{$k} = $v;
            }

        }
    }
}

class obj_service {


    public $service_name;
    public $service_id;

    function __construct($params) {
        if (is_array($params)) {
            foreach ($params as $k => $v) {
                $this->{$k} = $v;
            }

        }
    }
}

class obj_response {
    /**
     *
     * @var obj_response_status $status
     */
    public $status;
    public $message;
    public $data;

    function __construct($obj_response_status, $message, $data) {
        $this->status = $obj_response_status;
        $this->message = $message;
        $this->data = $data;
    }


}

abstract class obj_response_status {
    const SUCCESS = 1;
    const FAIL = 2;
    const TRANSACION_DUPLICATE = 3;
}

class obj_payment_recharge{
    public $account_id;
    public $account_service_id;
    public $money; // vnd
    public $pcoin; // dong tien coin cua PP
    public $credit;
    public $credit_original;
    public $transaction_id;
    public $date;
    public $payment_type;
    public $payment_subtype;
    public $mobo_service_id;
    public $mobo_id;
    public $channel;
    public $payment_desc;
    public $full_request;

    function __construct($params) {
        if (is_array($params)) {
            foreach ($params as $k => $v) {
                $this->{$k} = $v;
            }

        }
    }
}