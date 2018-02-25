<?php

class MEAPI_Response_APIResponse extends MEAPI_Response {

    protected $_code = array();

    public function __construct(MEAPI_RequestInterface $request, $msg, $data = null) {
        $this->_code = MEAPI_Config_ResponseCode::getCode();
        if (is_array($this->_code[$msg])) {
            $code = $this->_code[$msg][0];
            $description = $this->_code[$msg][1];
            $statusCode = $this->_code[$msg][2];
        } else {
            $code = $this->_code[$msg];
        }

        $statusCode = $statusCode ? $statusCode : 200;

        if (!@include_once APPPATH . 'third_party/MEAPI/Languages/language_' . $request->get_app() . '.php')
            @include_once APPPATH . 'third_party/MEAPI/Languages/language_default.php';

        $msg_lang = empty($language[$request->get_lang()][$msg]) ? $language['default'][$msg] : $language[$request->get_lang()][$msg];

        if ($description) {
            $parameters = array(
                'code' => $code,
                'desc' => $msg,
                'memo' => $description,
                'data' => $data
            );
        } else {
            $parameters = array(
                'code' => $code,
                'desc' => $msg,
                'data' => empty($data) ? null : $data,
            );
            if (empty($msg_lang) === TRUE)
                $msg_lang = $msg;
            $parameters['message'] = $msg_lang;
        }

        parent::__construct($parameters, $statusCode);
    }

}

?>
