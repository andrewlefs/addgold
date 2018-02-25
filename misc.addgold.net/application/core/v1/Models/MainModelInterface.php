<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Misc\Models;

use Misc\Models\ModelObject;
use Misc\Models\ModelObjectInterface;

interface MainModelInterface {

    /**
     * 
     * @param array $apps
     * @param array $fields
     */
    public function getConfig(array $apps, array $fields = array());
}
