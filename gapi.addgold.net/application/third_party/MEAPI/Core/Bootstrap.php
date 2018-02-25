<?php

class MEAPI_Core_Bootstrap {
    
    /**
     *
     * @var CI_Controller
     */
    protected $CI;
    protected $_response;

    public function getResponse() {
        return $this->_response;
    }

    function __construct() {
        $this->CI = & get_instance();
    }
	
	protected  function getCurrentURL() {
        $pageURL = 'http';
        if ($_SERVER["HTTPS"] == "on") {
            $pageURL .= "s";
        }
        $pageURL .= "://";
        if ($_SERVER["SERVER_PORT"] != "80") {
            $pageURL .=
                $_SERVER["SERVER_NAME"] . ":" . $_SERVER["SERVER_PORT"] . $_SERVER["REQUEST_URI"];
        } else {
            $pageURL .= $_SERVER["SERVER_NAME"] . $_SERVER["REQUEST_URI"];
        }
        return $pageURL;
    }
}
