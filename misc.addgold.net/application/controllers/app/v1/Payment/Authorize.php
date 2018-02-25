<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Payment;

use Payment\Http\Util;
use Payment\Object\Values\SecretKeyList;
use Payment\Object\Fields\HeaderField;
use Payment\Object\Values\ReturnRequest;
use Payment\Validation;

class Authorize {

    public function ValidateAuthorizeRequest(array $params, array $headers) {
        try {
            $rts = new ReturnRequest();

// check valid params
            $needle = array(HeaderField::APP, HeaderField::OTP, HeaderField::TOKEN);
            if (is_required($headers, $needle) == FALSE) {
                $diff = array_diff(array_values($needle), array_keys($headers));
                $rts->setCode(ReturnRequest::INVALID_PARAMS_HEADER);
                $rts->setData(array("data" =>  $diff));
                return $rts;
            }

            
            $appid = $headers[HeaderField::APP];            
            $otp = $headers[HeaderField::OTP];
            $token = $headers[HeaderField::TOKEN];
            $secret = new SecretKeyList();
            $hashkey = $secret->getSecretKey($appid);
            $rts->setApp($appid);
//gen otp by server
            $serOtp = Util::getCode($hashkey);
            //$serOtp = 199044;
            $source = implode("", $params);
            $token_source = $source . $otp . $hashkey;

            $valid = md5($token_source);

            if ($token != $valid) {
                $rts->setCode(ReturnRequest::INVALID_TOKEN);
                $rts->setData(array(
                    "otp" => $serOtp,
                    "source" => $source,
                    "token" => $token,
                    "valid" => $valid
                ));
                return $rts;
            } else {
                $rts->setCode(ReturnRequest::AUTHORIZE_SUCCESS);
                return $rts;
            }
        } catch (Exception $ex) {
            throw new \InvalidArgumentException(
            'Error is not a field of ' . get_class($this));
        }
    }

}
