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
use Misc\MemcacheObject;

class GSVInfoModels extends ModelObject implements ModelObjectInterface {

    /**
     * 
     * @param array $config
     * @param Controler $controller
     * @param boolean $type
     */
    public function __construct(array $config, $controller, $type = true) {
        parent::__construct($config, $type);
        parent::setController($controller);
    }

    /**
     * Lấy real key hash data receiver
     * @param int $app
     */
    public function getInfo(array $keys, array $fields = array(), $cached = true) {

        $query = $this->getConnection()->select(count($fields) == 0 ? '*' : implode(',', $fields))
                ->where($keys)
                ->get(ModelEnum::GSV_INFO);
        //echo $this->getConnection()->last_query();
        //die;
        $queryResult = ($query != FALSE) ? $query->row_array() : FALSE;
        return $queryResult;
    }

    /**
     * Lấy real key hash data receiver
     * @param int $app
     */
    public function getConfig(array $keys, array $fields = array(), $cached = true) {

        $query = $this->getConnection()->select(count($fields) == 0 ? '*' : implode(',', $fields))
                ->where($keys)
                ->get(ModelEnum::GSV_CONFIG);
//        echo $this->getConnection()->last_query();
//        die;
        $queryResult = ($query != FALSE) ? $query->row_array() : FALSE;
        return $queryResult;
    }

    public function getEndPoint() {
        return __CLASS__;
    }

}
