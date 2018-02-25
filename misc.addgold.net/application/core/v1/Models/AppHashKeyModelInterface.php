<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Misc\Models;

use Misc\Models\ModelObject;
use Misc\Models\ModelObjectInterface;
use Misc\Models\ModelEnum;

interface AppHashKeyModelInterface {

    /**
     * Lấy real key hash data receiver
     * @param int $app
     */
    public function getScope(array $apps, array $fields = array());
}
