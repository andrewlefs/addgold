<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace GraphApi\Object\Fields;

use GraphApi\Enum\AbstractEnum;

class ApiFields extends AbstractEnum {

    const REQUEST = "request";
    const GAME_INFO = "game_info";
    const LOGIN_PROFILE = "profile";
    const RESPONSE = "response";
    const STATUS_LOGIN = "isLogin";
    const KEY = "key";
    const FRIEND_LISTS = "friendLists";
    const EXCLUDES = "excludeds";
    const ACCESS_TOKEN = "access_token";
    const IDENTIFY = "identify";
    const ACCEPT_LISTS = "acceptLists";

}
