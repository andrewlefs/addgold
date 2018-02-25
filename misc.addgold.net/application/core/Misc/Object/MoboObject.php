<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace GraphApi\Object;

class MoboObject extends AbstractObject {

    public function __construct() {
        
    }

    public function parse(/* Polydinamic */) {
        
    }

    public function getHash() {
        return md5(serialize($this) . GameApps::GAME_SECRET_KEY);
    }

}
