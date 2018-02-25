<?php

@require_once APPPATH . 'third_party/MEAPI/Autoloader.php';
@require_once APPPATH . 'third_party/MEAPI/Mq.php';

class Utility {
    /*
     * Function Request Error
     */

    private $CI;

    private $_api_url_pixel = 'https://engine.itracking.io/inappEvent/';

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
    public function push_rabbit_mq(obj_service $service, obj_distribution $distribution, obj_tracking $tracking, obj_game_info $obj_game_info, obj_payment_recharge $obj_payment_recharge, $params, $status, $message = '') {
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
            'mobo_id' => $obj_payment_recharge->account_id,
            'mobo_service_id' => $obj_payment_recharge->account_id,
            'sid' => intval($obj_game_info->server_id),
            'payment_type' => $ptype,
            'platform' => $games['platform'],
            'money' => (int) $obj_payment_recharge->money,
            'mcoin' => (int) $obj_payment_recharge->money * 0.01,
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
        MEAPI_Mq::push_rabbitmq($config, $mq_message);
        //End push mq
    }

    public function promotion($model, $service_name, $server_id, $mobo_id, $character_name, $payment_type, $money, $credit, $date) {
        //KM
        $promotions = $model->get_promotion($service_name, $server_id, date("Y-m-d H:i:s", $date));
        //var_dump($promotions);                die;
        $promo_money = 0;
        $percent = 0;
        if ($promotions == true) {
            foreach ($promotions as $key => $value) {
                $tester = $value["tester"];
                $publisher = $value["publisher"];
                $approved = $value["approved"];
                $doned = $value["doned"];
                
                //neu chua approved tới KM kế tiếp
                if (intval($approved) == 0) {
                    continue;
                }
                //neu chưa publish tiếp tục tới KM kế tiếp
                if($publisher == 0){
                    continue;
                }

                $ptype = $value["type"];
                //inapp or bank or card

                if (!empty($ptype)) {
                    $ptype = json_decode($ptype, true);
                }

                if (!empty($ptype) && !in_array($payment_type, $ptype)) {
                    continue;
                }

                //promotion
                //{"number":{"1":100,"2":200}}
                //{"amount":{"100000":100,"200000":200}}
                $promotion = $value["promotion"];

                if (!empty($promotion)) {
                    $promotion = json_decode($promotion, true);
                }
                
                $none_recharge = $value["none_recharge"];
                $pis_first = $value["is_first"];
                $pis_reset = $value["is_reset"];
                
                if(isset($promotion["wasnumber"])){
                    $pstart = $promotion["create_date"];
                }
                $pstart = $value["start"];
                $date_start = DateTime::createFromFormat("Y-m-d H:i:s", $pstart);
                $pend = $value["end"];
                $date_end = DateTime::createFromFormat("Y-m-d H:i:s", $pend);

                //qua ngay reset thi lay thoi gian start hien tai
                if ($pis_reset == 1) {
                    if (date("Y-m-d", time()) == $date_start->format("Y-m-d"))
                        $pstart = date("Y-m-d", time()) . " " . $date_start->format("H:i:s");
                    else
                        $pstart = date("Y-m-d", time());
                    $pend = $date_end->format("Y-m-d H:i:s");
                }


                $pamount = $value["amount"];
                if (!empty($pamount)) {
                    $pamount = json_decode($pamount, true);
                }


                if (strtolower($payment_type) == "wallet") {
                    if (!empty($pamount) && is_array($pamount)) {
                        sort($pamount);
                        $min_value = intval($pamount[0]);
                        $max_value = intval($pamount[count($pamount) - 1]);
                        if (!($min_value <= intval($money) && intval($money) <= $max_value)) {
                            continue;
                        }
                    }
                } else {
                    if (!empty($pamount) && !in_array($money, $pamount))
                        continue;
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
                $sum_values = $model->get_counts($character_name, $server_id, $service_name, $pstart, $pend, 0, $ptype, $pamount);
                $current_sum_amount = -1;
                $pcounts = -1;
                if ($sum_values == true) {
                    $pcounts = intval($sum_values["count"]);
                    $current_sum_amount = intval($sum_values["sum_amount"]);
                }

                //nguoc lai khong gioi hang
                //neu khong quan tam co nap tien hay khong
				//var_dump($pcounts);die;

                if (isset($promotion["wasnumber"])) {
                    if (isset($promotion["wasnumber"][$pcounts + 1])) {
                        $percent = $promotion["wasnumber"][$pcounts + 1];
                    } else {
                        $percent = $promotion["wasnumber"][-1];
                    }
                }elseif (isset($promotion["number"])) {
                    if (isset($promotion["number"][$pcounts + 1])) {
                        $percent = $promotion["number"][$pcounts + 1];
                    } else {
                        $percent = $promotion["number"][-1];
                    }
                }elseif (isset($promotion["amount"])) {     
                    if(isset($promotion["amount"][$money])){
                        $percent = $promotion["amount"][$money];
                    }elseif(isset($promotion["amount"][-1])){
                        $percent = $promotion["amount"][-1];
                    }
                }else if (isset($promotion["wasrecharge"])) {
                    //check data nap                
                    $checkstart = "2017-01-01 00:00:00";
                    $checkend = $pstart;
                    $check_values = $model->get_counts($character_name, $server_id, $service_name, $checkstart, $checkend, 0, null, null);
                    $passfirst = 0;
                    if ($check_values == true) {
                        $passfirst = intval($check_values["count"]);
                    }
                    //var_dump($passfirst);die;
                    if ($passfirst > 0) {
                        if (isset($promotion["wasrecharge"][$pcounts + 1])) {
                            $percent = $promotion["wasrecharge"][$pcounts + 1];
                        } else {
                            $percent = $promotion["wasrecharge"][-1];
                        }
                    } else {
                        continue;
                    }
                } 
                //var_dump($percent);die;
                if ($percent != 0) {
                    return $percent;
                }
            }
        }
        return 0;
    }

    public function get_user_info($service_name, $character_name, $server_id) {
        $api_app = "game";
        $api_secret = "IDpCJtb6Go10vKGRy5DQ";
        $time_stamp = date('Y-m-d H:i:s', time());

        $params = array();
        //$params['control'] = 'game';
        //$params['func'] = 'get_game_account_info';
        $params['character_name'] = $character_name;
        $params['server_id'] = $server_id;
        $params['service_name'] = $service_name;
        $params['service_id'] = 0;
        $params['time_stamp'] = $time_stamp;
        $params["port"] = 18105;

        $last_link_request = 'https://gapi.addgold.net/?control=game&func=get_game_account_info&' . http_build_query($params) . '&app=' . $api_app . '&token=' . md5(implode('', $params) . $api_secret);

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $last_link_request);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 5);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);

        $result = curl_exec($ch);
        if (!empty($result) && isset($result)) {
            $result = json_decode($result, true);
            if ($result["code"] == 0 && array_key_exists("code", $result)) {
                if (is_string($result["data"])) {
                    $data = json_decode($result["data"], true);
                } else {
                    $data = $result["data"];
                }
                if (empty($data))
                    return null;
                return $data;
            } else {
                return null;
            }
        }
        return null;
    }

    // function call api payment
    public function push_payment_pixel($_pixel_app, $_pixel_key, $payment_unit, obj_game_info $obj_game_info, obj_service $service, obj_payment_recharge $obj_payment_recharge, $params, $timeout = 5) {
        // decode json games
        $games = get_object_vars($params["game_info"]);

        $tracking = get_object_vars($params["tracking"]);
        //$tracking = $params['tracking'];
        // check valid params
        if (empty($tracking['pixel']->device_id) || empty($tracking['pixel']->track_id)) {
            return false;
        }
        $track_id = $tracking['pixel']->track_id;
        $device_id = $tracking['pixel']->device_id;
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

        $insert = array(
            'tracking' => $tracking,
            //'trackId' => $tracking['pixel']['track_id'],
            //'deviceId' => $tracking['pixel']['device_id'],
            'pData' => '',
            'eventKey' => 'payment',
            'userId' => $obj_game_info->character_id,
            'userName' => $obj_game_info->character_name,
            'serverId' => intval($obj_game_info->server_id),
            'other' => '',
            'money' => (int) $obj_payment_recharge->mcoin * 100, // vnd = mcoin * 100
            'currencyCode' => 'vnd',
            'placePurchase' => '',
            'credit' => (int) $obj_payment_recharge->credit,
            'unit' => $payment_unit,
            'paymentGateway' => '',
            'paymentType' => $ptype,
            'deviceIp' => $_SERVER['REMOTE_ADDR'],
            'platform' => $games['platform'],
            'attr' => $params['attr'],
            'packageName' => $params['packagename']
        );

        $timeunix = time();
        $logid = md5($device_id . $track_id . $timeunix . rand(0, 9999));
        $datainsert = array(
            'data' => json_encode($insert),
            'requestTime' => $timeunix,
            'logId' => $logid,
            'app' => $_pixel_app,
        );

        return $this->push_pixel_api($datainsert, $_pixel_key, $service->service_id, $timeout);
    }

    public function push_pixel_api($params, $_pixel_key, $service_id, $timeout) {
        if ($params) {
            $params['token'] = md5(implode('', $params) . $_pixel_key);
            $url = $this->_api_url_pixel . '?' . http_build_query($params);
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);
            $response = curl_exec($ch);
            MEAPI_Log::writeCsv(array($url, $response), 'pixel_' . $service_id);
            if ($response == 1) {
                return true;
            }
            return false;
            //return $response;
        }
        return false;
    }


    /*
     * Thông báo trả về cho user.
     */

    public function get_success_messsage($credit, $unit) {
        $msg = 'Bạn đã nạp thành công ' . $credit . ' ' . $unit;
        return $msg;
    }

}
