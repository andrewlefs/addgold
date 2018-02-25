<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Misc;

class Validation {
    /**
     * 
     * @param array $needle
     * @param array $data
     * @return array
     */
    public static function ValidateParamsEmpty(array $needle, array $data) {
        $emptys = array();        
        foreach ($data as $key => $value) {
            if (in_array($key, $needle) && empty($value)) {
                array_push($key, $emptys);
            }
        }
        return $emptys;
    }
}
