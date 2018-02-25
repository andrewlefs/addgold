<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace GraphApi\Object\Fields;

//require_once APPPATH . 'controllers/grash/autoloader.php';

use GraphApi\Enum\AbstractEnum;

class FriendFields extends AbstractEnum {
    const ID = "id";
    const NAME = "name";
    const NAME_LATIN = "name_latin";
    const PICTURE = "picture";
    const TOKEN = "token";
}
