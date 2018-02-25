<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



require_once APPPATH . 'core/v1/Controller.php';

require_once APPPATH . 'controllers/v1/autoloader.php';

use Misc\Controller;
use Misc\Authorize;
use Misc\Object\Values\ResultObject;
use Misc\Http\Util;
use Misc\Api;
use Misc\Security;
use Misc\Http\Headers;
use Misc\Http\Client\Partner\AdflexClient;
use Misc\Http\Client\Partner\DoiXengClient;
use Misc\Models\TrackingModels;

class TrackingController extends Controller {

    public function __construct() {
        parent::__construct();
        // $this->setDbConfig(array('db' => 'system_info', 'type' => 'slave'));
    }

    private $adFlexClient;
    private $trackingModel;

    function getAdFlexClient() {
        if ($this->adFlexClient == null) {
            $this->adFlexClient = new Api(new AdflexClient());
        }
        return $this->adFlexClient;
    }

    private $doiXengClient;

    function getDoiXengClient() {
        if ($this->doiXengClient == null) {
            $this->doiXengClient = new Api(new DoiXengClient());
        }
        return $this->doiXengClient;
    }

    /**
     * 
     * @return TrackingModels
     */
    function getTrackingModel() {
        if ($this->trackingModel == null) {
            $this->trackingModel = new TrackingModels($this->getDbConfig(), $this);
        }
        return $this->trackingModel;
    }

    function setTrackingModel($trackingModel) {
        $this->trackingModel = $trackingModel;
    }

    public function TrackInstalled() {
        //echo __FUNCTION__;
        //?action=s2s_install&adv=MEM&campaignid=com.packagename.id&clickId=ABCDXYZ&subid=123456&device_id
        $bodyParams = $this->getReceiver()->getQueryParams();
        (new Misc\Logger\NullLogger())->captureReceiver("receiver", $this->getReceiver());

        //store clicked
        $requestId = $bodyParams["requestId"];
        $keyId = $this->getMemcacheObject()->genCacheId($requestId);
        $reqStatus = $this->getMemcacheObject()->getMemcache($keyId);

        $utmTerm = json_decode(urldecode($bodyParams["utmTerm"]), true);
        if (!is_array($utmTerm))
            $utmTerm = json_decode($bodyParams["utmTerm"], true);
        $this->getTrackingModel()->addTrack(array(
            "action" => "installed",
            "utmTerm" => $bodyParams["utmTerm"],
            "utmSource" => $bodyParams["utmSource"],
            "utmMedium" => $bodyParams["utmMedium"],
            "utmCampaign" => $bodyParams["utmCampaign"],
            "packageName" => $bodyParams["packageName"],
            "platform" => $bodyParams["platform"],
            "osVersion" => $bodyParams["osVersion"],
            "country" => $bodyParams["country"],
            "city" => $bodyParams["city"],
            "requestId" => $bodyParams["requestId"],
            "device_id" => $bodyParams["device_id"],
            "reInstall" => isset($bodyParams["reInstall"]) ? $bodyParams["reInstall"] : null,
            "option1" => isset($utmTerm["clickId"]) ? $utmTerm["clickId"] : null,
            "option2" => isset($utmTerm["subid"]) ? $utmTerm["subid"] : null
        ));
        if (is_array($utmTerm) && strtolower($bodyParams["utmMedium"]) == "adflex" && $reqStatus != false && $bodyParams["reInstall"] == 'false') {
            $params = array("action" => "s2s_install", "adv" => "song", "campaignid" => $bodyParams["utmSource"]);
            $params = array_merge($params, $utmTerm);
            $params["device_id"] = $bodyParams["device_id"];
            $response = $this->getAdFlexClient()->call("/api/", "GET", $params);
            $this->getTrackingModel()->addTrackForward(array(
                "partner" => "adflex",
                "action" => "installed",
                "utmTerm" => $bodyParams["utmTerm"],
                "utmSource" => $bodyParams["utmSource"],
                "utmMedium" => $bodyParams["utmMedium"],
                "utmCampaign" => $bodyParams["utmCampaign"],
                "packageName" => $bodyParams["packageName"],
                "platform" => $bodyParams["platform"],
                "osVersion" => $bodyParams["osVersion"],
                "country" => $bodyParams["country"],
                "city" => $bodyParams["city"],
                "requestId" => $bodyParams["requestId"],
                "device_id" => $bodyParams["device_id"],
                "reInstall" => isset($bodyParams["reInstall"]) ? $bodyParams["reInstall"] : null,
                "option1" => isset($utmTerm["clickId"]) ? $utmTerm["clickId"] : null,
                "option2" => isset($utmTerm["subid"]) ? $utmTerm["subid"] : null,
                "option3" => $response->getBody(),
            ));
            echo $response->getBody();
        } else if (is_array($utmTerm) && strtolower($utmTerm["utmMedium"]) == "doixeng") {
            $response = $this->getDoiXengClient()->call("/api/tracking/install/", "GET", $bodyParams);
            echo $response->getBody();
        }
        exit();
    }

    public function TrackClicked() {
        //echo __FUNCTION__;
        //?action=s2s_install&adv=MEM&campaignid=com.packagename.id&clickId=ABCDXYZ&subid=123456&device_id
        $bodyParams = $this->getReceiver()->getQueryParams();
        (new Misc\Logger\NullLogger())->captureReceiver("receiver", $this->getReceiver());

        //store clicked
        $requestId = $bodyParams["requestId"];
        $keyId = $this->getMemcacheObject()->genCacheId($requestId);
        $this->getMemcacheObject()->saveMemcache($keyId, $requestId, "", 900);
        //var_dump($bodyParams);
        $utmTerm = json_decode(urldecode($bodyParams["utmTerm"]), true);
        if (!is_array($utmTerm))
            $utmTerm = json_decode($bodyParams["utmTerm"], true);
        $this->getTrackingModel()->addTrack(array(
            "action" => "click",
            "utmTerm" => $bodyParams["utmTerm"],
            "utmSource" => $bodyParams["utmSource"],
            "utmMedium" => $bodyParams["utmMedium"],
            "utmCampaign" => $bodyParams["utmCampaign"],
            "packageName" => $bodyParams["packageName"],
            "platform" => $bodyParams["platform"],
            "osVersion" => $bodyParams["osVersion"],
            "country" => $bodyParams["country"],
            "city" => $bodyParams["city"],
            "requestId" => $bodyParams["requestId"],
            "device_id" => $bodyParams["device_id"],
            "reInstall" => isset($bodyParams["reInstall"]) ? $bodyParams["reInstall"] : null,
            "option1" => isset($utmTerm["clickId"]) ? $utmTerm["clickId"] : null,
            "option2" => isset($utmTerm["subid"]) ? $utmTerm["subid"] : null,
        ));
        if (is_array($utmTerm) && strtolower($bodyParams["utmMedium"]) == "adflex") {
            //$params = array("action" => "s2s_click", "adv" => "MEM", "campaignid" => $bodyParams["packageName"]);
            //$params = array_merge($params, $utmTerm);
            //$response = $this->getAdFlexClient()->call("/api/", "GET", $params);
            //echo $response->getBody();
            echo json_encode(array("status" => "ok"));
            die;
        } else if (is_array($utmTerm) && strtolower($bodyParams["utmMedium"]) == "doixeng") {
            $response = $this->getDoiXengClient()->call("/api/tracking/click/", "GET", $bodyParams);
            echo $response->getBody();
        }
        exit();
    }

    public function index() {
        echo "Not support";
        exit();
    }

}
