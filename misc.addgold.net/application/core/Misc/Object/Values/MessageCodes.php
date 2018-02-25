<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace GraphApi\Object\Values;

use GraphApi\Enum\AbstractEnum;

class MessageCodes extends AbstractEnum {

    const FUNC_NOT_FOUND = -1011010;
    const LIKED_SUCCESS = 1011012;
    const LIKED_ERROR = -1011013;
    const LIKED_EXISTS = -1011014;
    const IN_PROCESS_DATA = -1011015;
    const DATA_EMPTY = -1011016;
    const SYSTEM_ERROR = -1011017;
    const ERROR = 1001009;
    const PARAM_INVLID = 1001020;
    const CATEGORY_INVALID = 1001021;
    const EXPIRED = 1001022;
    const NOT_EXPIRED = 1001023;
    const LIKED_NOT_AVALID = 1001024;
    const ACCEPT_ERROR = 1001025;
    const ACCEPT_SUCCESS = 1001026;
    const INVALID_TOKEN = 1001027;
    const INVALID_QUOTA = 1001028;
    const ACCEPT_EXISTS = 1001029;
    const USER_NOT_LOGIN = 1001030;
    const BEFORE_COMPLETE = 1001031;
    const EVENT_NOT_EXISTS = 1001032;
    const FEED_ERROR = 1001033;
    const FEED_SUCCESS = 1001000;
    const USER_NOT_PERMISSION = 1001035;
    const LOGIN_FAIL = 1001036;

    static function GetMessage($code) {
        $messages = array(
            self::FUNC_NOT_FOUND => "Function not found",
            self::LIKED_SUCCESS => "1011012",
            self::LIKED_ERROR => "-1011013",
            self::LIKED_EXISTS => "-1011014",
            self::IN_PROCESS_DATA => "-1011015",
            self::DATA_EMPTY => "-1011016",
            self::SYSTEM_ERROR => "-1011017",
            self::ERROR => "1001009",
            self::PARAM_INVLID => "1001020",
            self::CATEGORY_INVALID => "1001021",
            self::EXPIRED => "1001022",
            self::NOT_EXPIRED => "1001023",
            self::LIKED_NOT_AVALID => "1001024",
            self::ACCEPT_ERROR => "1001025",
            self::ACCEPT_SUCCESS => "1001026",
            self::INVALID_TOKEN => "1001027",
            self::INVALID_QUOTA => "1001028",
            self::ACCEPT_EXISTS => "1001029",
            self::USER_NOT_LOGIN => "User not login Facebook",
            self::BEFORE_COMPLETE => "Before complete",
            self::EVENT_NOT_EXISTS => "Event not exists",
            self::FEED_ERROR => "Share error",
            self::FEED_SUCCESS => "Share success",
            self::USER_NOT_PERMISSION => "User not allow permission",
            self::LOGIN_FAIL => "Login fail",
        );
        if (array_key_exists($code, $messages)) {
            return $messages[$code];
        } else {
            return "Message not found";
        }
    }

    /**
     * Get error message of a value. It's actually the constant's name
     * @param integer $value
     * 
     * @return string
     */
    public static function getErrorMessage($value) {
        $class = new \ReflectionClass(__CLASS__);
        $constants = array_flip($class->getConstants());

        return $constants[$value];
    }

}
