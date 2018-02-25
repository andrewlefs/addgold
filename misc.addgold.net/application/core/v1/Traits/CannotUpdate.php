<?php


namespace Misc\Traits;

trait CannotUpdate {

  public function update(array $params = array()) {
    throw new \Exception(
      __CLASS__.' does not have '.__FUNCTION__.' function.'
    );
  }
}
