<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Misc;

class Utility {

    static public function parseGsv($channel) {
        $pos = mb_strpos($channel, "psv_");
        $posId = mb_strpos(mb_substr($channel, $pos + 4), "_");
        return mb_substr($channel, $pos, $posId + 4);
    }

    static public function parseGsvType($channel) {
        $pos = mb_strpos($channel, "psv_");       
        $subString = mb_substr($channel, $pos + 4);
        $posId = mb_strpos($subString, "_");        
        return mb_substr($subString, $posId + 1, strlen($subString) - ($posId + 1));
    }

}
