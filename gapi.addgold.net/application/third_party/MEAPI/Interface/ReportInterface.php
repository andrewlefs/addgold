<?php

interface MEAPI_Interface_ReportInterface extends MEAPI_Response_ResponseInterface {

    public function get_report_game_info(MEAPI_RequestInterface $request);    

}
