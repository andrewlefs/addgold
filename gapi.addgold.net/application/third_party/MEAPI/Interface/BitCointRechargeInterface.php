<?php

interface MEAPI_Interface_BitCointRechargeInterface extends MEAPI_Response_ResponseInterface {
    //Ginside Tool
    public function manager(MEAPI_RequestInterface $request);
    
    public function add(MEAPI_RequestInterface $request);
    
    public function update(MEAPI_RequestInterface $request);
    
    //Game Event 
    public function get_bitcoint_recharge_status(MEAPI_RequestInterface $request);
    
    public function i_event_cashout_exchange_history(MEAPI_RequestInterface $request);
    
    public function update_gold_minus_result(MEAPI_RequestInterface $request);
}
