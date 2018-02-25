<?php

namespace Misc\Language;

use Misc\Enum\Language;

class en extends \ArrayObject {

    //$language["data_invalid"] = "Invalid data.";
    public function __construct() {
       
        $language[Language::INVALID_DATA] = "Invalid data.";
        $language[Language::BUTTON_NEXT] = "Next";
        parent::__construct($language);
    }

}
