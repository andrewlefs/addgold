<?php

interface MEAPI_Interface_PaymentInterface extends MEAPI_Response_ResponseInterface {

    public function recharge(MEAPI_RequestInterface $request);

}
