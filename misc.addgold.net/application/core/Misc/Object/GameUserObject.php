<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace GraphApi\Object;

use GraphApi\Object\Values\GameApps;

class GameUserObject extends AbstractObject {

    public function __construct() {
        
    }

    public function parse(/* Polydinamic */) {
//        $args = func_get_args();
//        if (is_array($args[0])) {
//            $params = $args;
//        } else if ($this->isJson($args[0])) {
//            $params = json_decode($json, true);
//        } else {
//            throw new \InvalidArgumentException(
//            'Data is not format of ' . get_class($this));
//        }        
//        
//        $data = json_decode($params['info'], true);
//        $access_token = $params["access_token"];
//        $access_token_debase64 = base64_decode($access_token);
//        $access_token_dejson = json_decode($access_token_debase64, true);
//        if ($data == true && $access_token_dejson == true)
//            $data = array_merge($data, $access_token_dejson);
//        if ($data == false) {
//            $data = $access_token_dejson;
//        }
//        $user = new userinfo();
//        $user->character_id = $data["character_id"];
//        $user->character_name = $data["character_name"];
//        $user->mobo_id = $data["mobo_id"];
//        $user->mobo_service_id = $data["mobo_service_id"];
//        $user->server_id = $data["server_id"];
//        $user->device_id = $data["device_id"];
//        $user->server_name = $data["server_name"];
//        $user->device_id = $_GET["device_id"];
//        return $user;
    }

    public function getHash() {        
        return md5(serialize($this) . GameApps::GAME_SECRET_KEY);
    }

}
