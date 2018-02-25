<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Misc;

use Misc\Object\ModelObject;
use Misc\Models\ModelObjectInterface;
use Misc\Http\Receiver;
use Misc\Object\Fields\HeaderField;
use Misc\Models\AppHashKeyModels;
use Misc\Models\TabModels;
use Misc\Models\MainModels;
use Misc\MemcacheObject;
use Misc\Http\Client\GraphClient;
use Misc\Http\Client\FacebookClient;
use Misc\Http\Client\GoogleClient;
use Misc\Http\Client\GoogleClientV4;
use Misc\Http\Client\Googlebase;
use Misc\Enum\Language;
use Misc\Http\Client\GApiClient;
use Misc\Object\Values\ResultObject;

class Controller extends \CI_Controller {

    /**
     * @var Api
     */
    protected static $instance;

    /**
     *
     * @var Receiver 
     */
    protected $receiver;

    /**
     *
     * @var string
     */
    protected $appId;

    /**
     *
     * @var integer 
     */
    protected $dbConfig;

    /**
     *
     * @var string 
     */
    protected $pathRoot;

    /**
     *
     * @var array $data 
     */
    protected $data;

    /**
     *
     * @var Memcached 
     */
    protected $memcached;

    /**
     * Độ lệch time server
     * @var int 
     */
    protected $athwartTimeSlice;
    static $Language = array();
    protected $gapiClient;
    protected $graphClient;
    protected $googleClient;
    protected $googleClientV4;
    protected $googleBase;
    protected $insideClient;
    protected $authorize;
    protected $mobile;

    /**
     *
     * @var Misc\Http\Client\GraphClient 
     */
    protected $graphApplication;
    protected $gapiApplication;
    protected $appHashKeyModel;

    public function __construct() {
        parent::__construct();
        $this->setDbConfig(array('db' => 'system_info', 'type' => 'slave'));
        $this->bindingLanguage();
        static::setInstance($this);
        //$this->bindingLanguage();
    }

    public function bindingLanguage() {
        if (self::$Language == null) {
            $params = $this->prepareQuerySecure();
            self::$Language = new Language(isset($params["lang"]) ? $params["lang"] : "vi");
        }
        return self::$Language;
    }

    /**
     * 
     * @return MobileDetect
     */
    public function getMobile() {
        if ($this->mobile == null) {
            $this->mobile = new MobileDetect();
        }
        return $this->mobile;
    }

    public function setMobile(MobileDetect $mobile) {
        $this->mobile = $mobile;
    }

    protected function csrfGenToken() {
        $paramBodys = $this->getReceiver()->getBodys();
        $timeslice = microtime() . rand(0, 1000000);
        $csrfToken = md5(json_encode($paramBodys) . $timeslice . $this->getSecret());
        $_SESSION["csrfToken"] = $csrfToken;
        return $csrfToken;
    }

    public function verifyCsrfToken($csrfToken) {
        if (!isset($_SESSION["csrfToken"]))
            return false;
        $svCsrfToken = $_SESSION["csrfToken"];
        unset($_SESSION["csrfToken"]);
        return $csrfToken === $svCsrfToken;
    }

    /**
     * 
     * @return Receiver
     */
    public function getReceiver() {
        if ($this->receiver == null)
            $this->receiver = new Receiver();
        return $this->receiver;
    }

    public function _location($url) {
        header("location: " . $url);
        die;
    }

    /**
     * 
     * @param array $params array("access_token" => ?)
     * @return boolean or array account info
     * array feilds  'account_id', 'account', 'email', 'channel', 'device_id'
     */
    public function verifyAccessToken(array $params = array()) {
        if (count($params) == false) {
            $paramBodys = $this->prepareQuerySecure();
            if (isset($paramBodys["access_token"]))
                $params = array("access_token" => urldecode($paramBodys["access_token"]));
        }
        if (count($params) == false)
            return false;
        $result = $this->getGraphApplication()->call("/game/verify_access_token_v2", "GET", $params)->getContent();
        if ($result["code"] === 500010) {
            return $result["data"];
        } else {
            return false;
        }
    }

    /**
     * 
     * @return AppHashKeyModels
     */
    public function getAppHashKeyModel() {
        if ($this->appHashKeyModel == null) {
            $this->appHashKeyModel = new AppHashKeyModels($this->getDbConfig());
            $this->appHashKeyModel->setController($this);
        }
        return $this->appHashKeyModel;
    }

    /**
     * 
     * @param AppHashKeyModels $appHashKeyModel
     */
    public function setAppHashKeyModel(AppHashKeyModels $appHashKeyModel) {
        $this->appHashKeyModel = $appHashKeyModel;
    }

    /**
     *
     * @return ResultObject
     */
    public function getAuthorize() {
        if ($this->authorize === null) {
            $authorize = new Authorize();
            $this->authorize = $authorize->AuthorizeRequest($this->getReceiver()->getQueryParams());            
        }
        return $this->authorize;
    }

    /**
     *
     * @return GApiClient
     */
    public function getGApiClient() {
        if ($this->gapiClient == null) {
            $this->gapiClient = new GApiClient();
            $this->gapiClient->setController($this);
        }
        return $this->gapiClient;
    }

    /**
     *
     * @return GoogleClient
     */
    public function getGoogleClient() {
        if ($this->googleClient == null) {
            $this->googleClient = new GoogleClient();
            $this->googleClient->setController($this);
        }
        return $this->googleClient;
    }

    /**
     *
     * @return GoogleClientV4
     */
    public function getGoogleClientV4() {
        if ($this->googleClientV4 == null) {
            $this->googleClientV4 = new GoogleClientV4();
            $this->googleClientV4->setController($this);
        }
        return $this->googleClientV4;
    }

    /**
     *
     * @return Googlebase
     */
    public function getGoogleBase() {
        if ($this->googleBase == null) {
            $this->googleBase = new Googlebase();
            $this->googleBase->setController($this);
        }
        return $this->googleBase;
    }

    /**
     * 
     * @return Api of Misc\Http\Client\GraphClient
     */
    public function getGapiApplication() {
        if ($this->gapiApplication == null) {
            $this->gapiApplication = new Api(new Http\Client\GApiClient());
            $this->gapiApplication->getHttpClient()->setApp($this->getAppId());
            $this->gapiApplication->getHttpClient()->setSecret($this->getSecret());
        }
        //$this->getTimeSlice();
        return $this->gapiApplication;
    }

    /**
     *
     * @return GraphClient
     */
    public function getGraphClient() {
        if ($this->graphClient == null) {
            $this->graphClient = new GraphClient();
            $this->graphClient->setController($this);
        }
        //$this->getTimeSlice();
        return $this->graphClient;
    }

    /**
     *
     * @return InsideClient
     */
    public function getInsideClient() {
        if ($this->insideClient == null) {
            $this->insideClient = new InsideClient();
            $this->insideClient->setController($this);
        }
        return $this->insideClient;
    }

    /**
     * 
     * @return Api of Misc\Http\Client\GraphClient
     */
    public function getGraphApplication() {
        if ($this->graphApplication == null) {
            $this->graphApplication = new Api(new GraphClient());
            $this->graphApplication->getHttpClient()->setApp($this->getAppId());
            $this->graphApplication->getHttpClient()->setSecret($this->getSecret());
            $this->athwartTimeSlice = $this->getMemcacheObject()->getMemcache("misc.dllglobal.net.athwartTimeSlice", "athwartTimeSlice");
            if ($this->athwartTimeSlice == false) {
                $timeServer = $this->graphApplication->call("/ntp/time")->getContent();
                $cuurentTimeSlice = time();
                //tổ chức cache server nếu cần
                if ($timeServer["code"] === 100000) {
                    $this->athwartTimeSlice = ((int) ($timeServer["data"]["timestamps"])) - time();
                }
                if ($this->athwartTimeSlice != false)
                    $this->getMemcacheObject()->saveMemcache("misc.dllglobal.net.athwartTimeSlice", $this->athwartTimeSlice, "athwartTimeSlice", 10 * 30);
            }
            if ($this->athwartTimeSlice != false) {
                $timeSlice = (int) ((time() + $this->athwartTimeSlice) / 30);
                $this->graphApplication->getHttpClient()->setTimeSlice($timeSlice);
            } else {
                $timeSlice = (int) (time() / 30);
                $this->graphApplication->getHttpClient()->setTimeSlice($timeSlice);
            }
        }
        //$this->getTimeSlice();
        return $this->graphApplication;
    }

    public function getTimeSlice() {
        $this->athwartTimeSlice = $this->getMemcacheObject()->getMemcache("misc.dllglobal.net.athwartTimeSlice", "athwartTimeSlice");

        if ($this->athwartTimeSlice == false) {
            $timeServer = $this->getGraphApplication()->call("/ntp/time")->getContent();
            $cuurentTimeSlice = time();
            //tổ chức cache server nếu cần
            if ($timeServer["code"] === 100000) {
                $this->athwartTimeSlice = ((int) ($timeServer["data"]["timestamps"])) - time();
            }
            if ($this->athwartTimeSlice != null)
                $this->getMemcacheObject()->saveMemcache("misc.dllglobal.net.athwartTimeSlice", $this->athwartTimeSlice, "athwartTimeSlice", 10 * 30);
        }
        if ($this->athwartTimeSlice != null) {
            $timeSlice = (int) ((time() + $this->athwartTimeSlice) / 30);
            $this->getGraphApplication()->getHttpClient()->setTimeSlice($timeSlice);
            return $timeSlice;
        } else {
            $timeSlice = (int) (time() / 30);
            $this->getGraphApplication()->getHttpClient()->setTimeSlice($timeSlice);
            return $timeSlice;
        }
    }

    /**
     * 
     * @return MemcacheObject
     */
    public function getMemcacheObject() {
        if ($this->memcached == null) {
            $this->memcached = new MemcacheObject();
            $this->memcached->setController($this);
        }
        return $this->memcached;
    }

    protected function setMemcached(MemcacheObject $memcached) {
        $this->memcached = $memcached;
    }

    /**
     * 
     * @param Receiver $receiver
     */
    public function setReceiver(Receiver $receiver) {
        $this->receiver = $receiver;
    }

    public function getDbConfig() {
        return $this->dbConfig;
    }

    public function setDbConfig($dbConfig) {
        $this->dbConfig = $dbConfig;
    }

    /**
     * 
     * @return integer value equals 1002
     */
    public function getAppId() {
        if ($this->appId == null) {
            $paramHeaders = $this->getReceiver()->getHeaders();
            if (isset($paramHeaders[HeaderField::APP])) {
                $this->appId = $paramHeaders[HeaderField::APP];
            } else {
                $paramBodys = $this->getReceiver()->getBodys();
                if (isset($paramBodys[HeaderField::APP]))
                    $this->appId = $paramBodys[HeaderField::APP];
            }
        }
        return $this->appId;
    }

    protected function genCacheId($keyId) {
        return md5($this->getAppId() . $keyId);
    }

    /**
     * 
     * @return string secret key by app id 1002
     */
    public function getSecret() {

        $cacheKey = $this->genCacheId("hashKey");
        $query = $this->getMemcacheObject()->getMemcache($cacheKey, "key");
        if ($query == false) {
            $query = $this->getAppHashKeyModel()->getScope(array("app_id" => $this->getAppId()));            
            if ($query == false) {
                return NULL;
            } else {
                $this->getMemcacheObject()->saveMemcache($cacheKey, $query, "key", 24 * 3600);
            }
        }
        return $query["hash_key"];
    }

    /**
     * 
     * @return string
     */
    public function getPathRoot() {
        return $this->pathRoot;
    }

    /**
     * set path view
     * default will view path
     * @param string $pathRoot
     */
    function setPathRoot($pathRoot = "") {
        $this->pathRoot = $pathRoot;
    }

    public function getPathView() {
        //APPPATH . 'views/' . $base_public . 
        return APPPATH . 'views/' . $this->getPathRoot();
    }

    /**
     * 
     * @return array 
     */
    function getData() {
        return $this->data;
    }

    /**
     * 
     * @param mixed $message
     */
    public function setMessage($message) {
        $this->data["message"] = $message;
    }

    /**
     * Add new key data to this data of class
     * @param mixed $key
     * @param mixed $data
     */
    public function addData($key, $data) {
        $this->data[$key] = $data;
    }

    /**
     * Genaral data from this constants value and properties by class
     * 
     * @return array
     */
    function getThisData() {
        $values = array();

        $oClass = new \ReflectionClass(__CLASS__);
        $oContants = $oClass->getConstants();

        foreach ($oContants as $key => $value) {
            $values[$key] = $value;
        }

        $oProperties = $oClass->getProperties(\ReflectionProperty::IS_PUBLIC | \ReflectionProperty::IS_PROTECTED);
        $thisMethods = get_class_methods(__CLASS__);
        foreach ($oProperties as $key => $value) {
            try {
                $propertise = json_decode(json_encode($value), true);
                $values[$propertise["name"]] = $this->{$propertise["name"]};
            } catch (\Exception $ex) {
                //var_dump($ex);
                continue;
            }
        }
        return $values;
    }

    function setData($data) {
        $this->data = $data;
    }

    /**
     * Like setData but will skip field validation
     *
     * @param array
     * @return $this
     */
    public function setDataWithoutValidation(array $data) {
        if ($data == false)
            return $this;
        foreach ($data as $key => $value) {
            $this->data[$key] = $value;
        }

        return $this;
    }

    /**
     * Render view by view name of path root
     * Require init path root before default root view path
     * @param string $filePath
     * @param boolean $isFullProperties default false, if true binding all properties this class
     * 
     */
    protected function Render($filePath, $isFullProperties = false) {

        if ($isFullProperties == true) {
            $buildDatas = $this->prepareArray($this->getThisData());
            if ($buildDatas == FALSE)
                $buildDatas = array();
            $rebuildData = $this->prepareArray($this->data);
            if ($rebuildData == true)
                $buildDatas = array_merge($buildDatas, $rebuildData);
            $decodeQueryString = $this->prepareArray($this->prepareQuerySecure());
            if (is_array($decodeQueryString) == true)
                $buildDatas = array_merge($buildDatas, $decodeQueryString);
        } else {
            $buildDatas = $this->prepareArray($this->data);
        }
        $buildDatas["csrfToken"] = $this->csrfGenToken();
        $buildDatas["controller"] = $this;
        echo $this->load->view($this->getPathRoot() . "{$filePath}", $buildDatas, true);
        exit();
    }

    public function prepareArray($data) {
        if (is_object($data)) {
            return $data;
        } elseif (is_array($data)) {
            $reBuilds = array();
            foreach ($data as $key => $value) {
                $reBuilds[$key] = $this->prepareArray($value);
            }
            return $reBuilds;
        } else if (is_json($data)) {
            $jsonArrays = json_decode($data, true);
            if (is_array($jsonArrays)) {
                $reBuilds = array();
                foreach ($jsonArrays as $key => $value) {
                    $reBuilds[$key] = $this->prepareArray($value);
                }
                return $reBuilds;
            } else {
                return $jsonArrays;
            }
        } else if (is_scalar($data)) {
            return $data;
        } else {
            return $data;
        }
    }

    public function prepareQuerySecure() {
        $querystring = $this->getReceiver()->getBodys();
        $buildDatas = array();
        if (isset($querystring["q"])) {            
            return $this->prepareArray(Security::decrypt($querystring["q"], $this->getSecret()));
        }
        return $buildDatas;
    }

    /**
     * Store capture query string from url request
     * void
     */
    public function StoreQueryString() {
        if (session_status() == PHP_SESSION_NONE)
            session_start();
        $gets = $this->getReceiver()->getQueryParams();
        foreach ($gets as $key => $value) {
            $_SESSION["QUERYSTRING"][$key] = $value;
        }
    }

    /**
     * 
     * @return int
     */
    public function getClientId() {
        if (session_status() == PHP_SESSION_NONE)
            session_start();
        if (isset($_SESSION["QUERYSTRING"]["client_id"]))
            return $_SESSION["QUERYSTRING"]["client_id"];
        return 0;
    }

    /**
     * 
     * @return string url client
     */
    public function getRedirectClient() {
        if (session_status() == PHP_SESSION_NONE)
            session_start();
        if (isset($_SESSION["QUERYSTRING"]["redirect_url"]))
            return $_SESSION["QUERYSTRING"]["redirect_url"];
        return "";
    }

    /**
     * 
     * @return string url next page
     */
    public function getNext() {
        if (session_status() == PHP_SESSION_NONE)
            session_start();
        //var_dump($_SESSION);
        if (isset($_SESSION["QUERYSTRING"]["next"]))
            return $_SESSION["QUERYSTRING"]["next"];
        return "";
    }

    public function unStoreQueryString() {
        if (session_status() == PHP_SESSION_NONE)
            session_start();
        unset($_SESSION["QUERYSTRING"]);
    }

    public function getSessionAuthor() {
        if (session_status() == PHP_SESSION_NONE)
            session_start();
        if (isset($_SESSION["useression"])) {
            return $_SESSION["useression"];
        } else {
            return FALSE;
        }
    }

    public function setSessionAuthor($value) {
        if (session_status() == PHP_SESSION_NONE)
            session_start();
        $_SESSION["useression"] = $value;
    }

    public function unSessionAuthor() {
        if (session_status() == PHP_SESSION_NONE)
            session_start();
        unset($_SESSION["useression"]);
    }

    /**
     * @return Controller|null
     */
    public static function instance() {
        return static::$instance;
    }

    /**
     * @param Api $instance
     */
    public static function setInstance(Controller $instance) {
        static::$instance = $instance;
    }

    public function getParentClass($class = null, $plist = array()) {
        $class = $class ? $class : $this;
        $parent = get_parent_class($class);
        if ($parent) {
            $plist[] = $parent;
            /* Do not use $this. Use 'self' here instead, or you
             * will get an infinite loop. */
            $plist = self::getParents($parent, $plist);
        }
        return $plist;
    }

    public function is190066($mobo_id) {
        //kiem tra tài khoản 1900
        $mobo_account = $this->getGraphClient()->getMoboAccount($mobo_id, $this->getAppId());

        $fields = array_column($mobo_account, "phone");
        foreach ($fields as $key => $value) {
            if (mb_stripos($value, "19006611") == 0) {
                return true;
            }
        }
        return false;
    }

    public function getWhileList() {
        if (empty($this->ipwhilelist)) {
            $this->ipwhilelist = array( "14.161.5.226", "118.69.76.212", "115.78.161.88", "115.78.161.124", "115.78.161.134");
        }
        return $this->ipwhilelist;
    }

    public function isLocal() {
        return in_array(Http\Util::get_remote_ip(), $this->getWhileList()) ? true : false;
    }

}

?>
