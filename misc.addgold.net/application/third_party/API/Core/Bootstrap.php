<?php

class API_Core_Bootstrap {
    
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
	
	protected function _call_api($url) {
        $ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER["HTTP_USER_AGENT"]);
        curl_setopt($ch, CURLOPT_REFERER, $_SERVER["REMOTE_ADDR"]);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $data = curl_exec($ch);
        curl_close($ch);
        if ($data) {
            return $data;
        } else {
            return @curl_error($ch);
        }
    }
}
