<?php

@require_once APPPATH . 'third_party/API/Autoloader.php';
@require_once APPPATH . 'third_party/API/Mq.php';
class Utility {    
    /*
     * Function Request Error
     */
    private $CI;

    function __construct() {
        $this->CI = &get_instance();
    }
    
    // Ham chuyển tiếng việt có dấu sang không dấu
    public function replaceUnicode($str) {
        // In thường
        $str = preg_replace("/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/", 'a', $str);
        $str = preg_replace("/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/", 'e', $str);
        $str = preg_replace("/(ì|í|ị|ỉ|ĩ)/", 'i', $str);
        $str = preg_replace("/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/", 'o', $str);
        $str = preg_replace("/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/", 'u', $str);
        $str = preg_replace("/(ỳ|ý|ỵ|ỷ|ỹ)/", 'y', $str);
        $str = preg_replace("/(đ)/", 'd', $str);    
        // In đậm
        $str = preg_replace("/(À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ)/", 'A', $str);
        $str = preg_replace("/(È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ)/", 'E', $str);
        $str = preg_replace("/(Ì|Í|Ị|Ỉ|Ĩ)/", 'I', $str);
        $str = preg_replace("/(Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ)/", 'O', $str);
        $str = preg_replace("/(Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ)/", 'U', $str);
        $str = preg_replace("/(Ỳ|Ý|Ỵ|Ỷ|Ỹ)/", 'Y', $str);
        $str = preg_replace("/(Đ)/", 'D', $str);
        return $str; // Trả về chuỗi đã chuyển
    }  
    
    // Ham push du lieu sang cho inside.mobo.vn phuc vu muc dich thong ke, bao cao
    public function push_rabbit_mq(obj_service $service, obj_distribution $distribution, obj_tracking $tracking, obj_game_info $obj_game_info, obj_payment_recharge $obj_payment_recharge, $params, $status, $message = ''){
        // decode json games
        $games = get_object_vars($params["game_info"]);
        // data channel
        $channel_info = explode('|', $obj_payment_recharge->channel);
        $ptype = '';
        if ($games['platform'] == 'ios' && $obj_payment_recharge->payment_type == 'inapp') {
            $ptype = 'inapp_apple';
        } elseif ($games['platform'] == 'android' && $obj_payment_recharge->payment_type == 'inapp') {
            $ptype = 'inapp_google';
        } elseif ($games['platform'] == 'wp' && $obj_payment_recharge->payment_type == 'inapp') {
            $ptype = 'inapp_wp';
        } else {
            $ptype = $obj_payment_recharge->payment_type;
        }
        
        // check giao dịch sandbox
        $env = 1;
        if ($params['env'] == 'sandbox')
            $env = 0;
        
        $insert = array(
            'currency' => 'vnd',                    
            'datetime' => date("Y-m-d H:i:s", $obj_payment_recharge->date),
            'date' => substr(date("Y-m-d H:i:s", $obj_payment_recharge->date), 0, 10),
            'device_id' => '', 
            'ip' => $_SERVER['REMOTE_ADDR'],
            'mobo_id' => $obj_payment_recharge->mobo_id, 
            'mobo_service_id' => $obj_payment_recharge->mobo_service_id,      
            'sid' => intval($obj_game_info->server_id),
            'payment_type' => $ptype,
            'platform' => $games['platform'],
            'money' => (int)$obj_payment_recharge->money,          
            'mcoin' => (int)$obj_payment_recharge->mcoin,          
            'provider' => $games['provider'],
            'refcode' => $games['refcode'],         
            'service_id' => $service->service_id,       
            'telco' => $games['telco'],                    
            'user_agent' => $games['user_agent'],
            'version' => $channel_info[2],
            'channel' => $obj_payment_recharge->channel,
            'status' => $status,
            'msg' => $message,
            'env' => $env
        );      
        //Start push rabbit mq	
        $data_insert = array(
                'collection' => 'payment', //tên collection
                'store' => $insert
        );	
        //format message truy?n xu?ng queue	
        $mq_message = json_encode($data_insert);
        $this->CI->config->load('mq_setting');
        $mq_config = $this->CI->config->item('mq');				
        $config['routing'] = $mq_config['payment_mq_routing'];
        $config['exchange'] = $mq_config['payment_mq_exchange'];				
        API_Mq::push_rabbitmq($config, $mq_message);				
        //End push mq            
    }
    
    public function promotion($model, $service_name, $server_id, $mobo_id, $mobo_service_id, $payment_type, $money, $credit, $date){
        //KM
        $promotions = $model->get_promotion($service_name, $server_id, date("Y-m-d H:i:s", $date));
        //var_dump($promotions);
        $promo_money = 0;
        if ($promotions == true) {            
            foreach ($promotions as $key => $value) {
                $tester = $value["tester"];
                $publisher = $value["publisher"];
                if ($publisher == 0) {
                    if (!empty($tester)) {
                        $tester = json_decode($tester, true);                        
                        if (!in_array($mobo_id, $tester)) {
                            continue;
                        }
                    } else {
                        continue;
                    }
                }                
                $ptype = $value["type"];
                //inapp or bank or card
                if (!empty($ptype)) {
                    $ptype = json_decode($ptype, true);
                }                
                if (!empty($ptype) && !in_array($payment_type, $ptype)) {
                    continue;
                }                                
                $none_recharge = $value["none_recharge"];
                $pis_first = $value["is_first"];
                $pis_reset = $value["is_reset"];
                $pstart = $value["start"];
                $date_start = DateTime::createFromFormat("Y-m-d H:i:s", $pstart);                
                $pend = $value["end"];
                $date_end = DateTime::createFromFormat("Y-m-d H:i:s", $pend);                

                //qua ngay reset thi lay thoi gian start hien tai
                if ($pis_reset == 1) {
                    $pstart = date("Y-m-d", time()) . " " . $date_start->format("H:i:s");
                    $pend = date("Y-m-d", time()) . " " . $date_end->format("H:i:s");
                }   

                $pamount = $value["amount"];
                if (!empty($pamount)) {
                    $pamount = json_decode($pamount, true);
                }
                if (!empty($pamount) && !in_array($money, $pamount))
                    continue;
                //promotion
                //{"number":{"1":100,"2":200}}
                //{"amount":{"100000":100,"200000":200}}
                $promotion = $value["promotion"];
                if (!empty($promotion)) {
                    $promotion = json_decode($promotion, true);
                }
                //promotion khuyen mai cho user da nap the
                //{"number":{"1":100,"2":200}}
                //{"amount":{"100000":100,"200000":200}}
                $none_promotion = $value["none_promotion"];
                if (!empty($none_promotion)) {
                    $none_promotion = json_decode($none_promotion, true);
                }

                //var_dump($ptype);
                //get so luong the
                $pcounts = $model->get_counts($mobo_service_id, $server_id, $service_name, $pstart, $pend, 0, $ptype, $pamount);
                //neu co gioi han so luong the nap     
                if ($pis_first > 0) {
                    //none_recharge = 0 khong quang tam user co nap hay khong
                    if ($none_recharge == 0) {
                        if (isset($promotion["number"])) {
                            if (!empty($pamount) && !in_array($money, $pamount))
                                continue;
                            if (isset($promotion["number"][$pcounts + 1])) {
                                $percent = $promotion["number"][$pcounts + 1];
                            } else {
                                $percent = $promotion["number"][-1];
                            }
                        } else if (isset($promotion["amount"])) {
                            //rat it xay ra neu so the da nhan hon so luong the                            
                            if ($pcounts < $pis_first && isset($promotion["amount"][$money])) {
                                $percent = $promotion["amount"][$money];
                            } else {
                                $percent = $promotion["amount"][-1];
                            }
                        }
                    } else {
                        //none_recharge = 1 chia 2 truong hop co nap va khong co nap
                        //nguoc lai da co nap
                        if (isset($none_promotion["number"])) {
                            if (!empty($pamount) && !in_array($money, $pamount))
                                continue;
                            if (isset($none_promotion["number"][$pcounts + 1])) {
                                $percent = $none_promotion["number"][$pcounts + 1];
                            } else {
                                $percent = $none_promotion["number"][-1];
                            }
                        } else if (isset($none_promotion["amount"])) {
                            if ($pcounts < $pis_first && isset($none_promotion["amount"][$money])) {
                                $percent = $none_promotion["amount"][$money];
                            } else {
                                $percent = $none_promotion["amount"][-1];
                            }
                        }
                    }
                } else {
                    //nguoc lai khong gioi hang
                    //neu khong quan tam co nap tien hay khong
                    if ($none_recharge == 0) {
                        if (isset($promotion["number"])) {
                            if (isset($promotion["number"][$pcounts + 1])) {
                                $percent = $promotion["number"][$pcounts + 1];
                            } else {
                                $percent = $promotion["number"][-1];
                            }
                        } else if (isset($promotion["amount"])) {
                            if (isset($promotion["amount"][$money])) {
                                $percent = $promotion["amount"][$money];
                            } else {
                                $percent = $promotion["amount"][-1];
                            }
                        }
                    } else {
                        //nguoc lai da co nap
                        if (isset($none_promotion["number"])) {
                            if (isset($none_promotion["number"][$pcounts + 1])) {
                                $percent = $none_promotion["number"][$pcounts + 1];
                            } else {
                                $percent = $none_promotion["number"][-1];
                            }
                        } else if (isset($none_promotion["amount"])) {
                            if (isset($none_promotion["amount"][$money])) {
                                $percent = $none_promotion["amount"][$money];
                            } else {
                                $percent = $none_promotion["amount"][-1];
                            }
                        }
                    }
                }
                if ($percent != 0) {
                    return ceil(((int) $credit * $percent) / 100);                                        
                }
            }
        }
        return 0;
    }
}
