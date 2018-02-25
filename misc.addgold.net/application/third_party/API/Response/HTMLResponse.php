<?php

class API_Response_HTMLResponse extends API_Response {

    protected $_code = array();

    public function __construct(API_RequestInterface $request, $html = 'null') {
        $parameters = $html;
        parent::__construct($parameters, $statusCode);
    }

}

?>
