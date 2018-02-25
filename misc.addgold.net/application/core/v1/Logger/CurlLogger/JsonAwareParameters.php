<?php


namespace Misc\Logger\CurlLogger;

use Misc\Http\Parameters;

class JsonAwareParameters extends Parameters {

  /**
   * @param mixed $value
   * @return string
   */
  protected function exportNonScalar($value) {
    return JsonNode::factory($value)->encode();
  }
}
