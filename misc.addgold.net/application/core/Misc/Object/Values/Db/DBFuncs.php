<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace GraphApi\Object\Values\Db;

use GraphApi\Enum\AbstractEnum;

class DBFuncs extends AbstractEnum {

    const GET_GAME_INFO = 'getGameInfo';
    const ON_DUPLICATE_LOGIN = "insert_on_duplicate_login";
    const GET_EXCLUDED = "getExcludes";
    const LAST_SHARE = "getLastShare";
    const LAST_INIVITE = "getLastInvite";
    const GET_COUNT_SHARE_BY_DAY = "getCountShareByDay";
    const GetTotalShareByDay = "getTotalShareByDay";
    const GET_COUNT_INVITE_BY_DAY = "getCountInviteByDay";
    const GetTotalInviteByDay = "getTotalInivteByDay";
    const GET_LIST_ACCEPT = "getListAccept";
    const GetItems = "getItems";
    const GET_TOTAL_ACCEPT = "getTotalAccepts";
    const GET_ACCEPT_EXISTS = "getAcceptExists";
    const GET_AWARD_LIST = "getAwardLists";
    const GET_EVENT = "getEvent";
    const DELETE = "delete";
    const GET_REQUEST = "getRequest";
    const STORE_DUPLICATE_REQUEST = "storeDuplicateRequest";

    /**
     * params $table string, $data array
     */
    const INSERT = "insert";

    /**
     * params $table string, $data array, $where array
     */
    const UPDATE = "update";

}
