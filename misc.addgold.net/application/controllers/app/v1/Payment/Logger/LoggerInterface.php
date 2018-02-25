<?php


namespace Payment\Logger;

use Payment\Http\RequestInterface;
use Payment\Http\ResponseInterface;

interface LoggerInterface {

  /**
   * @param string $level
   * @param string $message
   * @param array $context
   */
  public function log($level, $message, array $context = array());

  /**
   * @param string $level
   * @param RequestInterface $request
   * @param array $context
   */
  public function logRequest(
    $level, RequestInterface $request, array $context = array());

  /**
   * @param string $level
   * @param ResponseInterface $response
   * @param array $context
   */
  public function logResponse(
    $level, ResponseInterface $response, array $context = array());
  /**
   * @param string $level
   * @param ResponseInterface $response
   * @param array $context
   */
  public function logFullRequest(
    $level, RequestInterface $resuest, ResponseInterface $response, array $context = array());
}
