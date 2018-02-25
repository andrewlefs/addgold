<?php

class Notify {    
    /*
     * Function Request Error
     */
    private $CI;

    function __construct() {
        $this->CI = &get_instance();
    }
    
    public function notify_error($app_name, $error_type, $error_des)
    {
        //$app_name = $params['app_name'];     
        //$error_type = $params['error_type'];
        //$error_des = $params['error_des']; 
        
        $this->CI->load->model('../third_party/API/Models/NotifyModel', 'NotifyModel');
        $data_config = $this->CI->NotifyModel->get_config($app_name);
        
        //echo $data_config[0]["monitor_status"]; die;
        
        if($data_config[0]["monitor_status"] == 1){ 
            $date_check = date("Y-m-d H:i:s", time());
            $check_notify = $this->CI->NotifyModel->check_notify($app_name, $error_type, $date_check); 
            
            if(count($check_notify) > 0){           
                //Update count           
                $this->CI->NotifyModel->update_notify_error("error_count", $check_notify[0]["id"]);                
                if($check_notify[0]["error_count"] < $data_config[0]["error_threshold_count"]){
                    //Insert Notify Error Details
                    $this->CI->NotifyModel->insert_notify_error_detail($check_notify[0]["id"], $app_name, $error_type, $error_des);
                }                
            }else{            
                //Insert notify
                $date = date("Y-m-d H:i:s", time());
                $currentDate = strtotime($date);
                $futureDate = $currentDate + (60*$data_config[0]["error_mins_duration"]); 
                $date_start = date("Y-m-d H:i:s", time());
                $date_end = date("Y-m-d H:i:s", $futureDate);
                
                $notify_error_id = $this->CI->NotifyModel->insert_notify_error($date_start, $date_end, $app_name, $error_type);            
                
                //Insert Notify Error Details
                $this->CI->NotifyModel->insert_notify_error_detail($notify_error_id, $app_name, $error_type, $error_des);
            }            
            
            //Check Notify
            $check_notify = $this->CI->NotifyModel->check_notify($app_name, $error_type, $date_check); 
            if($check_notify[0]["error_count"] >= $data_config[0]["error_threshold_count"]){
                //Check notify status                
                if($check_notify[0]["notify_status"] == 0){ 
                    //Get Contact 
                    $contact = explode(";", $data_config[0]["notify_contact"]);            
                    foreach ($contact as $key => $value){                  
                        $user_c = explode("|", $value); 
                        $this->send_notification_error($app_name, $error_type, $error_des, $user_c[0], $user_c[1], $check_notify[0]["id"]);
                    }    
                    
                    //Update notify status
                    $this->CI->NotifyModel->update_notify_status($check_notify[0]["id"]);              
                }
            }           
        }
    }
    
    // send sms - email 
    private function send_notification_error($app_name, $error_type, $error_des, $email, $phone, $id)
    {
        //Send notify           
        $content = $app_name . " - http://gapi.mobo.vn/?control=notify&func=get_error&id=" . $id . " Type: " .$error_type. " Des:" . $error_des;
        
        $service = "GAPI";
        $part = "TTKT";
        $account = "m2";
        $secret_key = "jh2qeQhLbR#m2";
        
        $token = md5($id.$email.$phone.$content.$service.$part.$account.$secret_key);
        
        $request = array(
           "id" => $id,
           "email" => $email,
           "phone" => $phone,
           "content" => $content,
           "service" => $service,
           "part" => $part,
           "account" => $account,
           "token" => $token
            );
        
        $api_url = "http://alert.gomobi.vn/service/alertsms";
        $urlrequest = $api_url . "?" . http_build_query($request);
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $urlrequest);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 5);
        curl_exec($ch);   
        curl_close($ch);
    } 
}
