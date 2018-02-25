<?php

class MEAPI_Controller_NotifyController extends MEAPI_Core_Bootstrap implements MEAPI_Interface_NotifyInterface {

    function __construct() {
        $this->CI = & get_instance();
    }

    /*
     * Lấy chi tiết Notify Error
     */

    public function get_error(MEAPI_RequestInterface $request) {
        if (!isset($_SERVER['PHP_AUTH_USER']) || !isset($_SERVER['PHP_AUTH_PW'])) {
            AuthorizeHeader:   
            {
                header('WWW-Authenticate: Basic realm="Vui long nhap username va password');
                header('HTTP/1.0 401 Unauthorized');
                echo 'Qua trinh chung thuc duoc huy boi nguoi dung';
                exit;
            }
        } else {
            if ('gapi' != $_SERVER['PHP_AUTH_USER']) {
                goto AuthorizeHeader;
                die('Ban phai nhap username');
            }
            if ('mypwd' != $_SERVER['PHP_AUTH_PW']) {
                goto AuthorizeHeader;
                die('Qua trinh chung thuc that bai');
            }
        }
        
        $this->CI->load->model('../third_party/MEAPI/Models/NotifyModel', 'NotifyModel');
        $notify_error_id = $_GET["id"];
        
        $result_err = $this->CI->NotifyModel->get_notify_error_detail($notify_error_id); 
        
        $html = "<table style='width:100%; border: solid 1px #000' cellspacing='0' cellpadding='4'>";
        $html .= "<tr><td style='border: solid 1px #000; font-weight: bold;'>Date</td><td style='border: solid 1px #000; font-weight: bold;'>Error Type</td><td style='border: solid 1px #000; font-weight: bold;'>Error Detail</td></tr>";
        
        foreach ($result_err as $key => $value){  
            $html .= "<tr><td style='border: solid 1px #000'>".$value["error_date"]."</td><td style='border: solid 1px #000'>".$value["error_type"]."</td><td style='border: solid 1px #000'>".$value["error_detail"]."</td></tr>"; 
        }
        
        $html .= "</table>";
        echo $html;die;
        
    }
}
