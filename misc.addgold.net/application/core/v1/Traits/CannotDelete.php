<?php


namespace Misc\Traits;

trait CannotDelete {

  public function delete(array $params = array()) {
    throw new \Exception(
      __CLASS__.' does not have '.__FUNCTION__.' function.'
    );
  }
}
