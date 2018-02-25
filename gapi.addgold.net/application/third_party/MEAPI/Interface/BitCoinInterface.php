<?php

interface MEAPI_Interface_BitCoinInterface extends MEAPI_Response_ResponseInterface {

    public function create_coupon(MEAPI_RequestInterface $request);
	public function redeem_coupon(MEAPI_RequestInterface $request);

}
