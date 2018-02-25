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
use Payment\Http\Client\AppleClient;
use Payment\Http\RequestInterface;
use Payment\Object\Fields\HeaderField;

class Apple extends AbstractObject {

    public function __construct() {
        parent::__construct();
    }

    public function validate() {
        
    }

    public function verifyReceipt(array $params) {
        
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
            //$response["code"] = 500010;
            if ($response["code"] === 500010) {
                //verify access token
                $accountInfo = $response["data"];

                $appleClient = new AppleClient();
                $appleClient->getRequestPrototype()->setProtocol("https://");
                $api = new Api($appleClient);

                $receipt = array('receipt-data' => $params["receipt_data"]);

                //var_dump($appleClient);die;
                $appleResponse = $api->call("/" . __FUNCTION__, RequestInterface::METHOD_POST, $receipt, FALSE);
                //var_dump($appleResponse);die;
                $result = $appleResponse->getContent();
                //21007: This receipt is from the test environment, but it was sent to the production environment for verification. Send it to the test environment instead.
                if ($result["status"] === 21007) {
                    //check with sandbox system
                    $appleClient->getRequestPrototype()->setLastLevelDomain("sandbox.itunes");
                    $appleSanboxResponse = $api->call("/" . __FUNCTION__, RequestInterface::METHOD_POST, $receipt, FALSE);
                    $result = $appleSanboxResponse->getContent();
                }

                //check result reciept
                if (is_array($result) && !empty($result) && $result["status"] === 0) {
                    $this->getResult()->setCode(ReturnRequest::REQUEST_SUCCESS);
                    $this->getResult()->setData(array("account" => $accountInfo, "receipt" => $result["receipt"]));
                    return $this->getResult();
                } else {
                    if (empty($result) === true) {
                        $this->getResult()->setCode(ReturnRequest::APPLE_VERIFY_INVALID);
                        return $this->getResult();
                    } else {
                        $this->getResult()->setCode(ReturnRequest::APPLE_VERIFY_FAIL_CONNECT);
                        return $this->getResult();
                    }
                }
            } else {
                $this->getResult()->setCode(ReturnRequest::ACCESS_TOKEN_EXPIRE);
                return $this->getResult();
            }
        }
    }

}
