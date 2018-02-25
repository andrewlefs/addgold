<?php

interface MEAPI_Interface_PayCardInterface extends MEAPI_Response_ResponseInterface {

    public function buy_card(MEAPI_RequestInterface $request);

}
