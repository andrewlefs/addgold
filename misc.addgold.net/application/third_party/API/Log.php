<?php

class API_Log {

    public static function writeCsv($fields, $filename, $group = 'request', $date = 'Y/m/d', $timefield = 'H:i:s') {

        $CI = &get_instance();
        $CI->config->load('log');
        $config = $CI->config->item('log');
        $config = $config[$group];

        if (empty($config) === TRUE)
            die('Empty config log ' . $group);

        try {
            $fields[] = date($timefield);
            if ($date)
                $path = $config . '/' . date($date);
            else
                $path = $config . '/';
            if (!file_exists($path))
                @mkdir($path, 0777, TRUE);
            $fh = @fopen($path . '/' . $filename . '.csv', 'a');
            @fputcsv($fh, $fields);
            @fclose($fh);
        } catch (Exception $ex) {
            
        }
    }

    public static function write($error = '', $filename = 'sys', $group = 'request', $date = 'Y/m/d', $errorCode = '') {
        $CI = &get_instance();
        $CI->config->load('log');
        $config = $CI->config->item('log');
        $config = $config[$group];
        if (empty($config) === TRUE)
            die('Empty config log ' . $group);

        try {
            if ($date)
                $path = $config . '/' . date($date);
            else
                $path = $config . '/';
            if (!file_exists($path))
                mkdir($path, 0777, true);
            $fh = @fopen($path . DIRECTORY_SEPARATOR . $filename . '_' . date('H') . '.html', 'a');
            if (is_a($error, Exception)) {
                $error = '<br><pre>' . $error->__toString() . '</pre>';
            } elseif (is_array($error)) {
                $error = json_encode($error);
            }
            $error = sprintf("<hr>\n %s %s <br>refer: %s <br>uri: %s \n<br>%s\n\n<br>", date('j/n/Y h:i:s A'), $_SERVER['REMOTE_ADDR'], $_SERVER['HTTP_REFERER'], $_SERVER['REQUEST_URI'], $error
            );
            @fwrite($fh, $error);
            @fclose($fh);
        } catch (Exception $ex) {
            throw $ex;
        }
    }

    public static function logError($ex, $filename = 'error', $group = 'request') {
        API_Log::write($ex, $filename);
    }

}

?>
