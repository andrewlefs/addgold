<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace GraphApi\Object\Fields;

//require_once APPPATH . 'controllers/grash/autoloader.php';

use GraphApi\Enum\AbstractEnum;

class UserFields extends AbstractEnum {
   
    const SERVER_ID = "server_id";
    const CHARACTER_NAME = "character_name";
    const CHARACTER_ID = "character_id";

}
