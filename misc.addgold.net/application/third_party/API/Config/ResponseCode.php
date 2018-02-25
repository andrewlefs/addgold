<?php

class API_Config_ResponseCode {

    public static function getCode() {
        return array(
            'SYSTEM_ERROR' => -6,
            'INVALID_PARAMS' => -5,
            'INVALID_SCOPE' => -3,
            'INVALID_TOKEN' => -1,
            'NOT_PERMISSION_APP' => -4,
            'ACCOUNT_EXIST' => 100,
            'ACCOUNT_NOT_EXIST' => 101,
            'PHONE_INVALID' => 102,
            'NTP' => 103,
            'ACCESS_TOKEN_INVALID' => 104,
            'ACTIVE_CODE_INVALID' => 105,
            'ACCOUNT_NOT_ACTIVE' => 106,
            'FB_ACCESS_TOKEN_INVALID' => 107,
            // AUTHORIZE
            'AUTHORIZE_SAME_ACCOUNT' => 500009,
            'AUTHORIZE_SUCCESS' => 500010,
            'AUTHORIZE_FAIL' => 500011,
            'AUTHORIZE_LOCK' => 500012,
            'AUTHORIZE_FACEBOOK_SUCCESS' => 500013,
            'AUTHORIZE_FACEBOOK_FAIL' => 500014,
            'ACCOUNT_FACEBOOK_NOT_ACTIVED' => 500015,
            'ACCOUNT_FACEBOOK_CONNECTED_REQUIRED' => 500016,
            'ACCOUNT_FACEBOOK_ALREADY_USED' => 500017,
            'LIMIT_ACCOUNT_REACHED' => 500018,
            'REGISTER_FACEBOOK_SUCCESS' => 500019,
            'REGISTER_FACEBOOK_FAIL' => 500020,
            // REGISTER
            'REGISTER_SUCCESS' => 500020,
            'REGISTER_FAIL' => 500021,
            'LIMIT_AUTHORIZE_REACHED' => 500022,
            'LIMIT_ACTIVE_ACCOUNT_REACHED' => 500023,
            'ACCOUNT_ALREADY_ACTIVE' => 500024,
            // SEND CODE
            'ADD_SUCCESS' => 3000010,
            'ADD_FAIL' => 3000011,
            'APPROVE_SUCCESS' => 3000020,
            'APPROVE_FAIL' => 3000021,
            'UPDATE_SUCCESS' => 3000030,
            'UPDATE_FAIL' => 3000031,
            'APP_EXIST' => 3000040,
            'RECORD_EXIST' => 3000041,
            'RECORD_NOT_EXIST' => 3000042,
            'CREATE_SUCCESS' => 3000050,
            'CREATE_FAIL' => 3000051,
            'INVALID_LIST_SOURCE_APP' => 3000061,
            'INVALID_SOURCE_APP' => 3000062,
            'INVALID_DESTINATION_APP' => 3000063,
            'INVALID_LIST_SEARCH' => 3000064,
			'GET_SUCCESS' => 400000,
			
        );
    }

}
