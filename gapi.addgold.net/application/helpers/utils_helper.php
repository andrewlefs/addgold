<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
if (!function_exists('is_required')) {

    function is_required($haystack, $needle) {
        $haystack_keys = array_keys($haystack);
        foreach ($needle as $item) {
            if (!in_array($item, $haystack_keys)) {
                return FALSE;
            } else {
                if (empty($haystack[$item]) === TRUE && $haystack[$item] != '0')
                    return FALSE;
            }
        }
        return TRUE;
    }

}
if (!function_exists('make_array')) {

    function make_array($haystack, $needle = array(), $keep_null = FALSE, $check_key_in_haystack = FALSE) {
        $array = array();
        for ($i = 0, $c = count($needle); $i < $c; $i++) {
            $tmp = $haystack[$needle[$i]];
            if ($keep_null === TRUE) {
                if ($check_key_in_haystack === TRUE) {
                    if (array_key_exists($needle[$i], $haystack) === TRUE) {
                        $array[$needle[$i]] = $tmp;
                    }
                } else {
                    $array[$needle[$i]] = $tmp;
                }
            } else {
                if ($tmp != '') {
                    $array[$needle[$i]] = $tmp;
                }
            }
        }
        return $array;
    }

}
if (!function_exists('is_json')) {

    function is_json($stringJson, $null_is_true = FALSE) {
        if (empty($stringJson) === TRUE && $null_is_true === TRUE) {
            return TRUE;
        } elseif (empty($stringJson) === TRUE) {
            return false;
        }
        $json = json_decode($stringJson, TRUE);
        if (is_array($json)) {
            return TRUE;
        } else {
            return FALSE;
        }
        return FALSE;
    }

}
if (!function_exists('mysql_datetime')) {

    function mysql_datetime($time = NULL) {
        if (empty($time) === TRUE)
            $time = time();
        return date('Y-m-d H:i:s', $time);
    }

}
if (!function_exists('mysql_password')) {

    function mysql_password($str) {
        $p = sha1($str, true);
        $p = sha1($p);
        return "*" . strtoupper($p);
    }

}
if (!function_exists('random_string_humanable')) {

    function random_string_humanable($length = 6) {
        for ($i = 0, $pass = '', $vocal = rand(0, 1); $i < $length; $i++, $vocal = !$vocal) {
            $result = $pass.=$vocal ? substr('aeiou', mt_rand(0, 4), 1) : substr('abcdefghijklmnopqrstuvwxyz', mt_rand(0, 25), 1);
        }
        return $result;
    }

}

if (!function_exists('gen_token_key')) {

    function gen_token_key($length = 6) {
        
    }

}

if (!function_exists('dateIsBetween')) {

    function dateIsBetween($from, $to, $date = '') {
        $date = empty($date) ? date('Y-m-d H:i:s') : strtotime($date);
        $from = is_int($from) ? $from : strtotime($from);
        $to = is_int($to) ? $to : strtotime($to);
        return ($date > $from) && ($date < $to);
    }

}

if (!function_exists('split_content')) {

    function split_content($tag_start, $tag_end, $str) {
        $temp = '';
        $temp1 = '';
        $result = '';
        $temp = explode($tag_start, $str);
        if (count($temp) > 2) {
            for ($i = 1; $i < count($temp); $i++) {
                $temp1 = explode($tag_end, $temp[$i]);
                $result[] = $temp1[0];
            }
        } else {
            $temp1 = explode($tag_end, $temp[1]);
            $result = $temp1[0];
        }
        return $result;
    }

}

if (!function_exists('get_remote_ip')) {

    function get_remote_ip() {
        $ipaddress = '';
        if ($_SERVER['HTTP_CLIENT_IP'])
            $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
        else if($_SERVER['HTTP_X_FORWARDED_FOR'])
            $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
        else if($_SERVER['HTTP_X_FORWARDED'])
            $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
        else if($_SERVER['HTTP_FORWARDED_FOR'])
            $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
        else if($_SERVER['HTTP_FORWARDED'])
            $ipaddress = $_SERVER['HTTP_FORWARDED'];
        else if($_SERVER['REMOTE_ADDR'])
            $ipaddress = $_SERVER['REMOTE_ADDR'];
        else
            $ipaddress = 'UNKNOWN';
        return $ipaddress;
    }

}