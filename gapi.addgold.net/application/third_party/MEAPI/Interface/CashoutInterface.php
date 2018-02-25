<?php

interface MEAPI_Interface_CashoutInterface extends MEAPI_Response_ResponseInterface {
    //Ginside Tool
    public function manager(MEAPI_RequestInterface $request);
    
    public function add(MEAPI_RequestInterface $request);
    
    public function update(MEAPI_RequestInterface $request);
    
    public function update_status(MEAPI_RequestInterface $request);
    
    public function get_status(MEAPI_RequestInterface $request);
    
    public function cashout_logs(MEAPI_RequestInterface $request);
    
    public function total_cashout(MEAPI_RequestInterface $request);
    
    public function total_cashout_vnd(MEAPI_RequestInterface $request);
    
    public function total_cashout_btce(MEAPI_RequestInterface $request);
    
    public function get_tax(MEAPI_RequestInterface $request);
    
    public function update_tax(MEAPI_RequestInterface $request);
    
    public function get_card_list(MEAPI_RequestInterface $request);
    
    public function update_tax_by_card(MEAPI_RequestInterface $request);
    
    public function cashout_bitcoint_logs(MEAPI_RequestInterface $request);
    
    //Game Event 
    public function get_cashout_config(MEAPI_RequestInterface $request);
    
    public function get_total_cashout_by_user(MEAPI_RequestInterface $request);
    
    public function get_card_list_game(MEAPI_RequestInterface $request);
    
    public function get_cashout_exchange_history(MEAPI_RequestInterface $request); 
    
    public function get_cashout_list_card_data(MEAPI_RequestInterface $request); 
    
    public function get_card_detail(MEAPI_RequestInterface $request);
    
    public function get_cashout_day_limit_game(MEAPI_RequestInterface $request);
    
    public function get_total_cashout_game(MEAPI_RequestInterface $request);
    
    public function i_event_cashout_exchange_history(MEAPI_RequestInterface $request);
    
    public function update_buycard_null_result(MEAPI_RequestInterface $request);
    
    public function update_gold_minus_result(MEAPI_RequestInterface $request);
    
    public function i_cash_out_from_game(MEAPI_RequestInterface $request);
    
    public function cash_in_wallet(MEAPI_RequestInterface $request);
    
    public function withdraw_wallet(MEAPI_RequestInterface $request);
    
    public function update_gold_rollback_result(MEAPI_RequestInterface $request);
    
    public function update_buycard_result(MEAPI_RequestInterface $request);
    
    public function update_card_data(MEAPI_RequestInterface $request);
    
    public function i_event_cashout_exchange_history_details(MEAPI_RequestInterface $request);
    
    //BitCoint
    public function update_bitcoint_data(MEAPI_RequestInterface $request);
    
    public function get_cashout_bitcoint_data(MEAPI_RequestInterface $request); 
    
    //User
    public function user_check(MEAPI_RequestInterface $request);
    
    public function user_check_email_exist(MEAPI_RequestInterface $request);
    
    public function update_user_pass2(MEAPI_RequestInterface $request);
    
    public function user_check_email_exist_by_user(MEAPI_RequestInterface $request);
    
    public function update_reset_pass_status(MEAPI_RequestInterface $request);
    
    public function user_check_reset_id(MEAPI_RequestInterface $request);
    
    public function update_reset_pass2(MEAPI_RequestInterface $request);
    
    public function user_check_pass2(MEAPI_RequestInterface $request);
}
