<?php


namespace Misc\Object\Traits;

trait CannotCreate {

  public function create(array $params = array()) {
    throw new \Exception(
      __CLASS__.' does not have '.__FUNCTION__.' function.'
    );
  }
}
