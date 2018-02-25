<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Payment\Object;

use Payment\Object\Values\ReturnRequest;
use Payment\Http\Client\GraphClient;
use Payment\Api;
use Payment\Http\Client\PaymentClient;

class Google extends AbstractObject {

    private $publicKey = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkxkFw9X7JmAX9ugLLH9t00XIGbnUpMtEBEazSe8IcYmWvcFRxM1EYqaMyg7r6F4ZJP08PPAQ6MAFK+FuVan1rEuyXq1a1sYkimBt97bG8XXS+naOEO1XoHsFPZGVyXhHiALMWf67I4b63D5LPAV7EaAvwmpkzFSuHp2imjvZkjM4iDuxsJAZOaKgybFVka8A3yYehh76QstxZPI3JHn7Bi4MHLpdWSGroqU9m1WB+kkk5OS5vGvsLkXPsJcsCRF7MM7cw8f/lk7Bg/23L46COlcsmJ7EbZtwpYR6wUVIOufHhrjp6cPyfKE4sNStysj0vbz9eLDvz8pQzjW38NRK5wIDAQAB";

    public function __construct() {
        parent::__construct();
    }

    public function validate() {
        
    }
    
    public function verifyReceipt(array $params, $publicKey = "") {
        
        $needle = array('access_token', 'info', 'receipt_data', 'platform', 'version');
        
        $this->getResult()->setApp($params[Fields\HeaderField::APP]);
        if (is_required($params, $needle) === false) {
            $diff = array_diff(array_values($needle), array_keys($params));
            $this->getResult()->setCode(ReturnRequest::INVALID_PARAMS_PAY);
            $this->getResult()->setData($diff);
            return $this->getResult();
        } else {
            //call verify apple
            //verify access token
            $grahpClient = new GraphClient();

            $api = new Api($grahpClient);
            
            $args = array(
                'access_token' => urldecode($params['access_token'])
            );
            $response = $api->call("/game/verify_access_token", "GET", $args)->getContent();
            if ($response["code"] === 500010) {
                //verify access token
                $accountInfo = $response["data"];
                //get public key
                
                $receipt_data = json_decode(base64_decode($params['receipt_data']), true);
                
                $purchaseToken = $receipt_data['mToken'];
                $purchaseData = $receipt_data['mOriginalJson'];
                $dataSignature = $receipt_data['mSignature'];
                $public_key = "-----BEGIN PUBLIC KEY-----\n" . chunk_split($publicKey, 64, "\n") . "-----END PUBLIC KEY-----";
                $key = openssl_get_publickey($public_key);
                $result = openssl_verify($purchaseData, base64_decode($dataSignature), $key, OPENSSL_ALGO_SHA1);
                
                if ($result === 1) {                    
                    $this->getResult()->setCode(ReturnRequest::REQUEST_SUCCESS);
                    $this->getResult()->setData(array("account" => $accountInfo, "receipt" => $receipt_data["mOriginalJson"]));
                    return $this->getResult();
                }else{
                    $this->getResult()->setCode(ReturnRequest::GOOGLE_VERIFY_INVALID);
                    $this->getResult()->setData(array("data" => array()));
                    return $this->getResult();
                }               
            } else {
                $this->getResult()->setCode(ReturnRequest::ACCESS_TOKEN_EXPIRE);
                return $this->getResult();
            }
        }
    }

}
