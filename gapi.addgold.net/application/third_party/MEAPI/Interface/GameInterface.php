<?php

interface MEAPI_Interface_GameInterface extends MEAPI_Response_ResponseInterface {

    public function get_game_account_info(MEAPI_RequestInterface $request);
	public function get_server_list(MEAPI_RequestInterface $request);

}
