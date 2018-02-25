<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Log_Custom {

    public static function writeLog($prefix, $link, $content) {        
        $time = time();
        $hour = date('H', $time);
        $day = date('Y/m/d', $time);
        $path = $_SERVER['DOCUMENT_ROOT'] . "/logs/{$day}";

        if (!is_dir($path)) {
            @mkdir($path, 0777, true);
        }
        if(is_array($content)){
            $content = json_encode($content);
        }
        $content = $link . '\n' . $content;
        $content = '{\n[' . date("Y-m-d H:i:s", $time) . ']   ' . $content . "}";
        $filename = $path . "/{$prefix}_{$hour}.csv";
        $fp = fopen($filename, "a");
        fputs($fp, $content . "\n");
        fclose($fp);
    }

}
