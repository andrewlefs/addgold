<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace GraphApi\Object;

use GraphApi\Object\AbstractObject;
use GraphApi\Object\Fields\RequestUrlFields;
use GraphApi\Object\GameUserObject;
use GraphApi\Object\MoboObject;
use GraphApi\Object\Values\CacheKeys;
use GraphApi\Object\Values\GameApps;
use GraphApi\Object\Fields\MoboFields;
use GraphApi\Object\Fields\UserFields;

class RequestUrl extends AbstractObject {

    public function __construct() {
        parent::__construct();
    }

    public function getGameUserInfo() {
        if (array_key_exists(RequestUrlFields::INFO, $this->data)) {
            $data = json_decode($this->data[RequestUrlFields::INFO], true);
            if ($data == true) {
                return (new GameUserObject())->setData($data);
            }
        } else {
            throw new \InvalidArgumentException(
            RequestUrlFields::INFO . ' is not a field of ' . get_class($this));
        }
    }

    public function getMoboInfo() {
        if (array_key_exists(RequestUrlFields::ACCESS_TOKEN, $this->data)) {
            $data = base64_decode($this->data[RequestUrlFields::ACCESS_TOKEN]);
            if ($this->isJson($data))
                return (new MoboObject())->setData(json_decode($data, true));
            return null;
        } else {
            throw new \InvalidArgumentException(
            RequestUrlFields::INFO . ' is not a field of ' . get_class($this));
        }
    }

    public function getIdentify() {
        if ($this->data == null)
            return null;
        $mobo = $this->getMoboInfo();
        //$user = $this->getGameUserInfo();
        return md5(implode("", array(
            GameApps::GAME_ID,
            $mobo->{MoboFields::MSI_ID}
        )));
    }

    public function getHash() {
        $otp = time();
        return md5($otp . serialize($this) . GameApps::GAME_SECRET_KEY);
        //return md5(CacheKeys::GRASH_REQUEST_INFO . $otp . GameApps::GAME_ID . $this->getMoboInfo()->{MoboFields::MSI_ID} . $this->getGameUserInfo()->{UserFields::SERVER_ID} . GameApps::GAME_SECRET_KEY);
    }

}
