<?php


namespace Payment\Http\Exception;

class EmptyResponseException extends RequestException {

  /**
   * @param int $status_code
   */
  public function __construct($status_code) {
    parent::__construct(array(
      'error' => array(
        'message' => 'Exception error empty response',
      )
    ), $status_code);
  }
}
