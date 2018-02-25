<?php

class MEAPI_Mq {
    public function push_rabbitmq($config, $data) {
        $CI = &get_instance();
        try {
            $CI->load->library('mqclass');
            //Get config params
            $routing = $config['routing'];
            $exchange = $config['exchange'];
            //log
            MEAPI_Log::writeCsv(array('data'=>$data), 'mq_log');
            //Send action
            $msg = $CI->mqclass->send($routing, $exchange, $data);
            return $msg;
        } catch (Exception $e) {
            @$content_log = "{$e}";
            MEAPI_Log::writeCsv(array('data'=>$content_log), 'mq_log_error');			
            return false;
        }
    }
}

?>
