<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace GraphApi\Object\Fields;

use GraphApi\Enum\AbstractEnum;

class RequestUrlFields extends AbstractEnum {

    const ACCESS_TOKEN = "access_token";
    const CHANNEL = "channel";
    const PLATFORM = "platform";
    const USER_AGENT = "user_agent";
    const TELCO = "telco";
    const LANF = "lang";
    const IP_USER = "ip_user";
    const VERSION = "version";
    const APP = "app";
    const PACKAGE_NAME = "package_name";
    const DEVICE_ID = "device_id";
    /**
     * Json string info user
     * 'info' => string '{"character_id":"41261","character_name":"SauNghia","server_id":2}' (length=66)
     */
    const INFO = "info";

}
