<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Payment\Object\Values;

class SecretKeyList extends \ArrayObject {

    public function __construct() {
        $array = array(
            10000 => "2K4ZRMSYM3W3D4YY",
            10001 => "2K4ZRMSYM3W3K4AY"
        );
        parent::__construct($array);
    }

    public function getSecretKey($app) {
        $array = $this->getArrayCopy();
        //var_dump($array);die;
        return $array[$app];
    }

}
