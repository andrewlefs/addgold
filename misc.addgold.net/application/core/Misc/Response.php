<?php

namespace GraphApi;

require_once "Definition.php";

class Response {

    protected $_parameters;
    private $_dataJson;
    private $_dataHTML;
    private $_isJson = FALSE;
    private $_code = 1011000;
    private $_isOpenView = false;
    private $_url;
    private $_message = "";

    public function __construct($parameters = array(), $statusCode = 200, $headers = array()) {

        if (is_array($parameters)) {

            $this->_isJson = TRUE;
        }

        $this->_parameters = $parameters;
    }

    public function getCode() {
        return $this->_code;
    }

    public function setIsOpen($value = false) {
        $this->_isOpenView = $value;
    }

    public function setUrl($url = "") {
        if ($url == '')
            throw new \Exception("Url require not empty");
        $this->_url = $url;
    }

    public function getMessage() {
        return $this->_responseCodeLists[$this->_code];
    }

    public function getJson() {

        if ($this->_isJson === FALSE)
            return FALSE;

        if ($this->_dataJson)
            return $this->_dataJson;

        $code = $this->_code;

        $keyCode = Object\Values\MessageCodes::getNameForValue($code);
        $message = Object\Values\MessageCodes::GetMessage($code);

        $this->_dataJson = json_encode(
                array(
                    "code" => $code,
                    "keyCode" => $keyCode,
                    "message" => $message,
                    "isopen" => $this->_isOpenView,
                    "url" => $this->_url,
                    "data" => $this->_parameters
                )
        );

        return $this->_dataJson;
    }

    public function getArray() {

        if ($this->_dataJson)
            return $this->_dataJson;

        $this->_dataJson = $this->_parameters;

        return $this->_dataJson;
    }

    public function getHTML() {

        if ($this->_dataHTML === FALSE)
            return FALSE;

        if ($this->_dataHTML)
            return $this->_dataHTML;

        $this->_dataHTML = $this->_parameters;

        return $this->_dataHTML;
    }

    public function setData($data = array()) {
        if (is_array($data)) {

            $this->_isJson = TRUE;
        }
        $this->_parameters = $data;
    }

    public function setCode($code) {
        $this->_code = $code;
        $this->_message = $this->_responseCodeLists[$code];
    }

    public function end($format = 'json') {

        switch ($format) {

            case 'json':

                @header('Content-type: application/json');

                if ($this->_dataJson) {

                    echo $this->_dataJson;

                    break;
                }

                echo $this->getJson();

                break;

            case 'html':

                if ($this->_dataHTML) {

                    echo $this->_dataHTML;

                    break;
                }

                echo $this->getHTML();

                break;
        }
        die;
    }

    public static function get_instance() {
        return new Http\Response();
    }

}

?>
