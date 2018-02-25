<?php

namespace Payment\Logger;

use Payment\Http\RequestInterface;
use Payment\Http\ResponseInterface;
use Payment\Logger\PathLogger;

class NullLogger implements LoggerInterface {

    /**
     * @param string $level
     * @param string $message
     * @param array $context
     */
    public function log($level, $message, array $context = array()) {
        
    }

    /**
     * @param string $level
     * @param RequestInterface $request
     * @param array $context
     */
    public function logRequest(
    $level, RequestInterface $request, array $context = array()) {
        
    }

    /**
     * @param string $level
     * @param ResponseInterface $response
     * @param array $context
     */
    public function logResponse(
    $level, ResponseInterface $response, array $context = array()) {
        
    }

    /**
     * @param string $level
     * @param ResponseInterface $response
     * @param array $context
     */
    public function logFullRequest(
    $level, RequestInterface $request, ResponseInterface $response, array $context = array()) {

        $pathLog = new PathLogger();
        $path = $pathLog->getPath();

        $date = "Y/m/d";
        $class = get_class($request->getClient());
        $classsplit = explode("\\", $class);


        if (empty($path) === TRUE)
            return;
        try {
            $path = $path . "/" . $level . "/" . date($date);

            if (!file_exists($path))
                @mkdir($path, 0777, TRUE);
            $fp = fopen($path . "/" . strtolower($classsplit[count($classsplit) - 1]). ".txt", "a");
            $text = "Request Time: \t" . date("Y-m-d H:i:s") . "\r\nUrl Request:\t" . $request->getUrl() . "\t ". json_encode($response->getRequest()->getBodyParams()) ."\r\nResult:\t" . json_encode($response->getContent()) . "\r\n\r\n";

            fwrite($fp, $text);
            fclose($fp);
        } catch (Exception $ex) {
            
        }
    }

}
