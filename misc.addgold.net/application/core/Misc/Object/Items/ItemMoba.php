<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace GraphApi\Object\Items;

use GraphApi\Object\AbsItemObject;

class ItemMoba extends AbsItemObject {
    public function __construct() {
        parent::__construct();
    }
    
    public function getEndPoint() {
        return "139";
    }
    
    public function send() {
        parent::send();
    }
}
