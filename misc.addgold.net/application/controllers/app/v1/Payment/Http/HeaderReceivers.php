<?php

namespace Payment\Http;

class HeaderReceivers extends \ArrayObject {

    private $HEADER_REQUIRED = array("app", "otp", "token");

    public function __construct() {
        $params = array();
        foreach ($_SERVER as $key => $value) {
            if (strpos(strtolower($key), "http_") === 0) {
                $params[str_replace("http_", "", strtolower($key))] = $value;
            }
        }
        
        foreach ($this->HEADER_REQUIRED as $key => $value) {
            if (!in_array($value, $params) && isset($_GET[$value])) {
                $params[$value] = $_GET[$value];
            }
        }
        parent::__construct($params);
    }

}
