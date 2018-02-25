<?php

interface MEAPI_Interface_VoucherInterface extends MEAPI_Response_ResponseInterface {

    public function create_voucher(MEAPI_RequestInterface $request);
	public function redeem_voucher(MEAPI_RequestInterface $request);

}
