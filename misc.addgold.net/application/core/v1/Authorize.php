<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Misc;

use Misc\Http\Util;
use Misc\Object\Values\SecretKeyList;
use Misc\Object\Fields\HeaderField;
use Misc\Object\Values\ResultObject;
use Misc\Validation;
use Misc\Controller;
use Misc\Models\AppHashKeyModels;

class Authorize extends Controller {

    public function __construct() {
        
    }

    public function AuthorizeRequest(array $paramBodys, array $paramHeaders = null) {
        try {
            $_result = new ResultObject();

// check valid params
            $needle = array(HeaderField::APP, HeaderField::OTP, HeaderField::TOKEN);
            $appid = 0;
            $otp = "";
            $token = "";
            
            if ($paramHeaders !== null) {
                if (is_required($paramHeaders, $needle) == FALSE) {
                    $diff = array_diff(array_values($needle), array_keys($paramHeaders));
                    $_result->setCode(ResultObject::INVALID_PARAMS_HEADER);
                    $_result->setDataWithoutValidation($diff);
                    return $_result;
                }
                $appid = $paramHeaders[HeaderField::APP];
                $otp = $paramHeaders[HeaderField::OTP];
                $token = $paramHeaders[HeaderField::TOKEN];
            } else if ($paramHeaders === null) {
                if (is_required($paramBodys, $needle) == FALSE) {
                    $diff = array_diff(array_values($needle), array_keys($paramHeaders));
                    $_result->setCode(ResultObject::INVALID_PARAMS_QUERY);
                    $_result->setDataWithoutValidation($diff);
                    return $_result;
                }
                $appid = $paramBodys[HeaderField::APP];
                $otp = $paramBodys[HeaderField::OTP];
                $token = $paramBodys[HeaderField::TOKEN];
                unset($paramBodys[HeaderField::APP], $paramBodys[HeaderField::OTP], $paramBodys[HeaderField::TOKEN]);
            }

            
            $hashkey = $this->getSecret();
            //var_dump($hashkey);die;
            $_result->setApp($appid);
            $_result->setHashKey($hashkey);
            //gen otp by server
            $serOtp = Util::getCode($hashkey);
            //$serOtp = 199044;
            unset($paramBodys[HeaderField::APP], $paramBodys[HeaderField::TOKEN]);
            $source = implode("", $paramBodys);
            $token_source = $source . $otp . $hashkey;

            $valid = md5($token_source);

            if ($token != $valid) {
                $_result->setCode(ResultObject::INVALID_TOKEN);
                $_result->setDataWithoutValidation(array(
                    "otp" => $serOtp,
                    "source" => $source,
                    "token" => $token,
                    "valid" => $valid
                ));
                return $_result;
            } else {
                $_result->setCode(ResultObject::AUTHORIZE_SUCCESS);
                return $_result;
            }
        } catch (Exception $ex) {
            throw new \InvalidArgumentException(
            'Error is not a field of ' . get_class($this));
        }
    }

}
