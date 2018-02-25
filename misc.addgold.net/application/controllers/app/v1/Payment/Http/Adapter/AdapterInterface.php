<?php


namespace Payment\Http\Adapter;

use Payment\Http\Client;
use Payment\Http\RequestInterface;
use Payment\Http\ResponseInterface;
use Payment\Http\Client\ClientInterface;

interface AdapterInterface {

  /**
   * @param Client $client
   */
  public function __construct(ClientInterface $client);

  /**
   * @return Client
   */
  public function getClient();

  /**
   * @return string
   */
  public function getCaBundlePath();

  /**
   * @return \ArrayObject
   */
  public function getOpts();

  /**
   * @param \ArrayObject $opts
   * @return void
   */
  public function setOpts(\ArrayObject $opts);

  /**
   * @param RequestInterface $request
   * @return ResponseInterface
   */
  public function sendRequest(RequestInterface $request);
}
