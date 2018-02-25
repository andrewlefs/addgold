<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Misc\Models;

use Misc\Models\ModelObject;
use Misc\Models\ModelObjectInterface;
use Misc\Models\MainModelInterface;

class MainModels extends ModelObject implements ModelObjectInterface , MainModelInterface {

    public function __construct(array $config, $group = true) {
        parent::__construct($config, $group);
    }

    /**
     * Lấy real key hash data receiver
     * @param int $app
     */
    public function getConfig(array $apps, array $fields = array(), array $wheres = array()) {
        $query = $this->getConnection()->select(count($fields) == 0 ? '*' : implode(',', $fields))
                ->where($apps);       
        $query = $this->getConnection()->get(ModelEnum::APP_CONFIGS);
        return ($query != FALSE) ? $query->row_array() : FALSE;
    }

}
