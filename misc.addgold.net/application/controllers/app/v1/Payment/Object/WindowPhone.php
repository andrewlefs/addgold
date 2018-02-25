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
use Payment\Http\Client\WindowClient;
use Payment\XMLSecurityDSig;
use Payment\XMLSecEnc;
use Payment\Object\Fields\HeaderField;

class WindowPhone extends AbstractObject {

    public function __construct() {
        parent::__construct();
    }

    public function validate() {
        
    }

    public function verifyReceipt(array $params) {

        $needle = array('access_token', 'info', 'receipt_data', 'platform', 'version');
        
        $this->getResult()->setApp($params[HeaderField::APP]);
        //var_dump($this->getResult());die;
        //var_dump($params);die;
        if (is_required($params, $needle) === false) {
            $diff = array_diff(array_values($needle), array_keys($params));
            $this->getResult()->setCode(ReturnRequest::INVALID_PARAMS_PAY);
            $this->getResult()->setData(array("data" => $diff));
            return $this->getResult();
        } else {
            //call verify apple
            //verify access token
            $grahpClient = new GraphClient();
            //var_dump($grahpClient);die;
            $api = new Api($grahpClient);

            $args = array(
                'access_token' => urldecode($params['access_token'])
            );
            $resultVerify = $api->call("/game/verify_access_token", "GET", $args)->getContent();
            if ($resultVerify["code"] === 500010) {
                //verify access token                
                $accountInfo = $resultVerify["data"];
                $receiptData = $params["receipt_data"];
                $xml = base64_decode($receiptData);
                $this->doc = $this->doc = new \DOMDocument();
                $xml = str_replace(array("\n", "\t", "\r"), "", $xml);
                $xml = preg_replace('/\s+/', " ", $xml);
                $xml = str_replace("> <", "><", $xml);
                $this->doc->loadXML($xml);
                $receipt = $this->doc->getElementsByTagName('Receipt')->item(0);

                $certificateId = $receipt->getAttribute('CertificateId');

                $windowClient = new WindowClient();

                $api = new Api($windowClient);
                $data = array("cid" => $certificateId);
                //$data = array("cid" => "");
                $responsePublicCert = $api->call("/licensing/certificateserver", "GET", $data);

                $err_msg = null;

                //checkCertResponse
                /* $objXMLSecDSig = new XMLSecurityDSig();
                  $objDSig = $objXMLSecDSig->locateSignature($this->doc);

                  //print_r($objDSig);die;
                  if (!$objDSig) {
                  $err_msg = 'error log signature';
                  //return FALSE;
                  }


                  try {
                  $objXMLSecDSig->canonicalizeSignedInfo();

                  $retVal = $objXMLSecDSig->validateReference();

                  if (!$retVal) {
                  $err_msg = "Error Processing Request";
                  }
                  $objKey = $objXMLSecDSig->locateKey();
                  if (!$objKey) {
                  $err_msg = "Error Processing Request";
                  }
                  $key = NULL;
                  $objKeyInfo = XMLSecEnc::staticLocateKeyInfo($objKey, $objDSig);
                  if (!$objKeyInfo->key && empty($key)) {
                  $objKey->loadKey($publicKey);
                  }
                  if (!$objXMLSecDSig->verify($objKey)) {
                  $err_msg = "Error Processing Request";
                  }
                  } catch (\Exception $e) {
                  $err_msg = $e->getMessage();
                  //  return FALSE;
                  }
                 */
                $productReceipt = $this->doc->getElementsByTagName('ProductReceipt')->item(0);
                $productId = $productReceipt->getAttribute('ProductId');
                $purchaseDate = $productReceipt->getAttribute('PurchaseDate');
                $id = $productReceipt->getAttribute('Id');
                if ($err_msg == NULL) {
                    $response = array(
                        'verify' => 1,
                        'productId' => $productId,
                        'purchaseDate' => $purchaseDate,
                        'CertificateId' => $certificateId,
                        'orderId' => $id,
                        'MicrosoftProductId' => $productReceipt->getAttribute('MicrosoftProductId'),
                    );
                    $this->getResult()->setCode(ReturnRequest::REQUEST_SUCCESS);
                    $this->getResult()->setData(array("account" => $accountInfo, "receipt" => $response));
                    return $this->getResult();
                } else {
                    $this->getResult()->setCode(ReturnRequest::WP_VERIFY_INVALID);
                    $this->getResult()->setData(array("account" => $accountInfo, "receipt" => $response));
                    $this->getResult()->setMessage($err_msg);
                    return $this->getResult();
                }
            } else {
                $this->getResult()->setCode(ReturnRequest::ACCESS_TOKEN_EXPIRE);
                return $this->getResult();
            }
        }
    }

}
