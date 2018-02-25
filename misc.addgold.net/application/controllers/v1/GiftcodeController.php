<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


require_once APPPATH . 'core/v1/Controller.php';
require_once APPPATH . 'libraries/Captcha.php';
require_once APPPATH . 'controllers/v1/autoloader.php';

use Misc\Controller;
use Misc\Object\Values\ResultObject;
use Misc\Security;
use Misc\Models\PaymentModels;
use Misc\Models\GiftCodeModels;

abstract class AbsDefineMess
{
    const ACCESS_INVAILD = "Truy cập không hợp lệ";
    const NOT_SUPPORT = "Not support this event.";
    const ACCESS_DATE = "Bạn đang truy cập một cách trái phép hoặc đã hết phiên làm việc.";
    const EVENT_START = "Sự kiện chưa bắt đầu.";
    const EVENT_END = "Sự kiện đã kết thúc.";
    const EVENT_NOT_SERVER = "Sự kiện không áp dụng cho máy chủ này.";
    const TRANSACTION_INVAILD = "Giao dịch không hợp lệ";
    const CODE_INVAILD = "Code không đúng hoặc kích hoạt không đúng server.";
    const VIP_INVAILD = "Vip bạn không đủ để tham gia sự kiện này";
    const LEVEL_INVAILD = "Level bạn không đủ để tham gia sự kiện này";
    const HAS_EXITS_GIFT = "Bạn đã nhận thành công phần thưởng này trước đó.";
    const NOT_ITEMS = "Chưa thiết lập thông tin vật phẩm liên hệ admin";
    const SUCCESS = "Nhận thưởng thành công";
    const SUCCESS_TOOL = "GET DATA SUCCESS";
    const GIFTCODE_ACTIVE = "Đã kích hoạt loại code này";
    const GIFTCODE_EXITS = "Bạn đã nhận loại giftcode này";
    const GIFTCODE_ENOUGHT = "Đã phát hết loại giftcode này";
}

class GiftcodeController extends Controller
{

    protected $giftcodeModel;
    protected $getGinside;
    protected $paymentModel;

    private $url_callback = "https://nap.mobo.vn/result";
    protected $operatingSystem = "wnap";
    protected $operatingSystemDevice = "unknown";
    private $event_name = "nap_giftcodemobo";
    protected $token;

    protected $mailtitle = 'Tang qua giftcode mobo';
    protected $mailcontent = "Chuc mung ban nhan qua thanh cong";

    public function __construct()
    {
        parent::__construct();
        $this->setPathRoot("v1/Payment/");
        if ($this->getReceiver()->getHttpProtocol() == "http" && $_SERVER["REMOTE_ADDR"] != "127.0.0.1") {
            header("location: https://nap.mobo.vn");
            die;
        }
        $this->operatingSystemDevice = $this->getMobile()->getOperatingSystem(true);
        $this->operatingSystem = $this->operatingSystem . "_" . $this->getMobile()->getOperatingSystem(true);
    }


    /**
     *
     * @return GInsideClient
     */
    public function getGinsideClient()
    {
        if ($this->getGinside == null) {
            $this->getGinside = new GInsideClient();
        }
        return $this->getGinside;
    }
    /**
     *
     * @return GiftCodeModels
     */
    public function getGiftCodeModel()
    {
        if ($this->giftcodeModel == null) {
            $this->giftcodeModel = new GiftCodeModels($this->getDbConfig(), $this);
        }
        return $this->giftcodeModel;
    }

    /**
     *
     * @return PaymentModels
     */
    public function getPaymentModel() {
        if ($this->paymentModel == null) {
            $this->paymentModel = new PaymentModels($this->getDbConfig(), $this);
        }
        return $this->paymentModel;
    }

    public function index($gameId)
    {
        die;

        $this->addData("form", "nap");
        if (isset($_SESSION["loginInfo"])) {
            $userInfo = $_SESSION["loginInfo"];

            #start get game list
            $gameList = $this->getPaymentModel()->getGameList(array("status" => 1), array());
            $this->addData("gameList", $gameList);
            #end get game list
            #start get server list
            $queryGameId = $gameId;
            if ($gameId == "106") {
                $queryGameId = "monggiangho";
            }
            $serverList = $this->getGApiClient()->getServerList($queryGameId);
            $this->addData("serverList", $serverList);
            #end get server list
            #get infomation mobo account create
            $moboInfo = $this->getGraphClient()->getMoboAccount($userInfo["mobo_id"], $gameId);
            $this->addData("gameId", $gameId);
            $hashToken = array("gameId" => $gameId, "moboInfo" => isset($moboInfo[0]) ? $moboInfo[0] : false);
            //var_dump($hashToken);die;
            $this->addData("hashToken", Security::encrypt($hashToken));
            #end get info

            $this->addData("game_id", $gameId);
            $this->Render("giftcode");
        } else {
            $this->Render("no-login");
        }
    }


    public function set_token($token)
    {
        $this->token = $token;
        $p = $this->getMemcacheObject()->getMemcache($token);
        if ($p == true) {
            $block = $p + 1;
            $blocktime = 120;
            if ($block > 5) {
                $blocktime = 600;
            } else if ($block > 10) {
                $blocktime = 3600;
            }
            $this->getMemcacheObject()->saveMemcache($token, $block, $blocktime);
            return $block;
        } else {
            $this->getMemcacheObject()->saveMemcache($token, 1, 120);
            return 1;
        }
    }

    public function un_token()
    {
        $this->getMemcacheObject()->saveMemcache($this->token, null, 1);
    }

    public function invalid_token($token)
    {
        $p = $this->getMemcacheObject()->getMemcache($token);
        if (empty($token))
            return -1;
        return $this->set_token($token);
    }

    public function sendItems($firtGamer, $items) {
        $service_name = $firtGamer['app_name'];

        $parseJsonitem = $items;
        if ($service_name == "skylight" || $service_name == "hw") {
            /*
            $this->load->library("HW_API");
            $gameapi = new HW_API();
            foreach ($parseJsonitem as $val) {
                $result = $gameapi->send_mail($firtGamer['server_id'], $firtGamer['character_id'], 0, $val['item_id'], $val['count'], 1, 0, 0, $this->mailtitle, $this->mailcontent);
                $returnsenditem[] = array("result" => $result, "item" => $val['item_id']);
            }
            $apisend_items = $result;
            */
        }elseif ($service_name == 'eden' || $service_name == 'hiepkhach') {
            foreach ($parseJsonitem as $val) {

                $sentitem = array(array("item_id" => $val['item_id'], "item_name" => $val['item_name'], "count" => $val['count']));
                if ($service_name == 'hiepkhach') {
                    $apisend_items = $this->getGApiClient()->addItems($service_name, $firtGamer['mobo_service_id'], $firtGamer['server_id'], $sentitem, $this->mailtitle, $this->mailcontent, $firtGamer['character_id']);
                } else {
                    $apisend_items = $this->getGApiClient()->addItems($service_name, $firtGamer['mobo_service_id'], $firtGamer['server_id'], $sentitem, $this->mailtitle, $this->mailcontent);
                }
            }
        }elseif ($service_name == '128') {
            foreach ($parseJsonitem as $val) {
                $activity = $val['activity'];
                $position = $val['position'];
                $apisend_items = $this->getGApiClient()->addItems($service_name, $firtGamer['mobo_service_id'], $firtGamer['server_id'], null, $this->mailtitle, $this->mailcontent,null,$activity,$position);
            }
        }elseif ($service_name == '125') {
            foreach ($parseJsonitem as $val) {
                $sentitem = array(array("item_id" => $val['item_id'],"count" => $val['count'],"type" => $val["type"]));
                $apisend_items = $this->getGApiClient()->addItems($service_name, $firtGamer['mobo_service_id'], $firtGamer['server_id'], $sentitem, $this->mailtitle, $this->mailcontent,$firtGamer['character_id']);
            }
        }elseif ($service_name == '139') {
            $apisend_items = $this->getGApiClient()->addItems($service_name, $firtGamer['mobo_service_id'], $firtGamer['server_id'], $parseJsonitem, $this->mailtitle, $this->mailcontent,$firtGamer['character_id']);
        }elseif ($service_name == '133') {
            foreach ($parseJsonitem as $val) {
                $sentitem = array(array("item_id" => $val['item_id'],"count" => $val['count']));
                $apisend_items = $this->getGApiClient()->addItems($service_name, $firtGamer['mobo_service_id'], $firtGamer['server_id'], $sentitem, $this->mailtitle, $this->mailcontent,$firtGamer['character_id']);
            }

        } else {
            foreach ($parseJsonitem as $key => $val) {
                if (isset($parseJsonitem[$key]['item_name'])) {
                    unset($parseJsonitem[$key]['item_name']);
                }
            }

            $apisend_items = $this->getGApiClient()->addItems($service_name, $firtGamer['mobo_service_id'], $firtGamer['server_id'], $parseJsonitem, $this->mailtitle, $this->mailcontent,$firtGamer['character_id']);
        }
        return $apisend_items;
    }

    public function topgiftcode()
    {
        $params = $this->getReceiver()->getPostParams();
        $response = new ResultObject();

        if (empty($_SESSION["loginInfo"])) {
            $response->setCode(-100006);
            $response->setMessage("Bạn chưa đăng nhập, vui lòng refesh để đăng nhập lại");
            $response->OutOfJsonResponse();
        }
        if ($params == false) {

            //return false show error

            $params = $this->getReceiver()->getQueryParams();
            if (!is_array($params["data"]) && is_json($params["data"]) == true) {
                if (urlencode(urldecode($params["data"])) === $params["data"]) {
                    $params = json_decode(urldecode($params["data"]), true);
                } else {
                    $params = json_decode($params["data"], true);
                }
            } elseif (is_array($params["data"])) {
                $params = $params["data"];
            }
        }

        $needle = array("hashdata");

        $response->setDataWithoutValidation($this->prepareArray($params));
        if (!is_required($params, $needle) == TRUE) {
            $response->setCode(-100006);
            $response->setMessage("Tham số không hợp lệ");
            $response->OutOfJsonResponse();
        }

        $hashdata = Security::decrypt($params["hashdata"]);

        $decryptToken = Security::decrypt($params["character"]);
        $tokenData = Security::decrypt($params["token"]);

        if (empty($decryptToken) || empty($hashdata)) {
            $response->setCode(-100006);
            $response->setMessage("Tham số không hợp lệ");
            $response->OutOfJsonResponse();
        }



        $decryptToken = array_merge($decryptToken, $hashdata, $tokenData);
        //kiểm tra thời gian bat đầu và kết thúc sự kiện
        $current_date = date("Y-m-d H:i:s", time());
        //cache lại thời gian mở sự kiện cho server
        //kèm với key ngày nên qua ngày mới sẽ tiến hành get lại thông tin từ DB


        $start = $this->getGiftCodeModel()->getConfig(array("id" => $decryptToken['id'] ));

        if ($start == false) {
            $response->setCode(-100001);
            $response->setMessage(AbsDefineMess::EVENT_NOT_SERVER);
            $response->OutOfJsonResponse();
        } else if ($start["startDate"] > $current_date) {
            $response->setCode(-100001);
            $response->setMessage(AbsDefineMess::EVENT_START);
            $response->OutOfJsonResponse();

        } else if ($start["endDate"] < $current_date) {
            $response->setCode(-100001);
            $response->setMessage(AbsDefineMess::EVENT_END);
            $response->OutOfJsonResponse();
        }

        //echo '1';die;
        //check history gamer da nhan giftcode nay roi

        //check da nhan chua

        $checkgiftcode = $this->getGiftCodeModel()->checkExist(array("account_id"=>$decryptToken['moboInfo']['id'],"event_type"=>$decryptToken['id']));

        if($checkgiftcode){
            //da nhan
            $response->setCode(-100002);
            $response->setMessage(AbsDefineMess::GIFTCODE_EXITS);
            $response->OutOfJsonResponse();
        }

        //get giftcode
        $getGiftcode = $this->getGiftCodeModel()->getGiftcode(array("status"=>0,"event_type"=>$decryptToken['id']));
        if(empty($getGiftcode)){
            $response->setCode(-100002);
            $response->setMessage(AbsDefineMess::GIFTCODE_ENOUGHT);
            $response->OutOfJsonResponse();
        }

        //update status giftcode

        $updateStatusGiftcode = $this->getGiftCodeModel()->updateGiftcode(array("status"=>1),array("id"=>$getGiftcode['id']));
        if(!$updateStatusGiftcode){
            $response->setCode(-100002);
            $response->setMessage(AbsDefineMess::GIFTCODE_ENOUGHT);
            $response->OutOfJsonResponse();
        }


        $paramssend = array(
            "character_id" => $decryptToken['character_id'],
            "character_name" => $decryptToken['character_name'],
            "account_id" => $decryptToken['moboInfo']['id'],
            "server_id" => $decryptToken['server_id'],
            "giftcode" => $getGiftcode['giftcode'],
            "event_type" => $decryptToken['id']
        );

        $getinfogiftcode = $this->getGiftCodeModel()->addHistory($paramssend);


        if ($getinfogiftcode <= 0) {
            $this->un_token();
            $response->setCode(-100002);
            $response->setMessage(AbsDefineMess::CODE_INVAILD);
            $response->OutOfJsonResponse();
        }

        $this->un_token();

        $response->setCode(10000);
        $response->setDataWithoutValidation(array("giftcode"=>$getGiftcode['giftcode']));
        $response->setMessage(AbsDefineMess::SUCCESS . ".Giftcode của bạn :".$getGiftcode['giftcode']);
        $response->OutOfJsonResponse();

    }

    public function lichsu()
    {
        $this->addData("form", "lich-su");
        if (isset($_SESSION["loginInfo"])) {
            $userInfo = $_SESSION["loginInfo"];
            $moboInfoFromAccessToken = json_decode(base64_decode($userInfo["access_token"]), true);
            $resulthistory = $this->getGiftCodeModel()->getHistory(array("mobo_service_id" => $moboInfoFromAccessToken['mobo_service_id']));
            $this->addData("history", $resulthistory);
            $this->Render("lichsu");
        } else {
            $this->Render("no-login");
        }
    }


    public function getMoboInfoRegister($app, $access_token)
    {
        $moboInfoFromAccessToken = json_decode(base64_decode($access_token), true);
        $key = $this->getMemcacheObject()->genCacheId($moboInfoFromAccessToken["mobo_id"] . $app);
        //$moboInfoRegister = $this->getMemcacheObject()->getMemcache($key);

        if ($moboInfoRegister == false) {
            $requestAccessToken = $this->getGraphClient()->requestAccessToken(array("service_id" => $app, "access_token" => $access_token));
            //var_dump($access_token);die;
            if ($requestAccessToken == true) {
                $reloadInfoFromAccessToken = $this->getGraphClient()->verifyAccessToken(array("access_token" => $requestAccessToken["access_token"]));
                //var_dump($reloadInfoFromAccessToken);die;
                if ($reloadInfoFromAccessToken == true) {
                    $moboInfoRegister = json_decode(base64_decode($reloadInfoFromAccessToken["data"]), true);
                }
                if ($moboInfoRegister == true) {
                    $moboInfoRegister["access_token"] = $requestAccessToken["access_token"];
                    $moboInfoRegister["mobo_id"] = $reloadInfoFromAccessToken["mobo_id"];
                    $this->getMemcacheObject()->saveMemcache($key, $moboInfoRegister, "register", 3600);
                }
            }
        }
        return $moboInfoRegister;
    }


    public static function getBaseURL($use_forwarded_host = false)
    {
        $s = $_SERVER;

        $ssl = (!empty($s['HTTPS']) && $s['HTTPS'] == 'on');
        $sp = strtolower($s['SERVER_PROTOCOL']);
        $protocol = substr($sp, 0, strpos($sp, '/')) . (($ssl) ? 's' : '');
        $port = $s['SERVER_PORT'];
        $port = ((!$ssl && $port == '80') || ($ssl && $port == '443')) ? '' : ':' . $port;
        $host = ($use_forwarded_host && isset($s['HTTP_X_FORWARDED_HOST'])) ? $s['HTTP_X_FORWARDED_HOST'] : (isset($s['HTTP_HOST']) ? $s['HTTP_HOST'] : null);
        $host = isset($host) ? $host : $s['SERVER_NAME'] . $port;
        return $protocol . '://' . $host;
    }

    /***
     *
     * TOOL
     */
    function cmsindex(){
        $response = new ResultObject();

        $params = $this->getReceiver()->getQueryParams();

        $data = $this->getGiftCodeModel()->getConfigAll(array("game"=>$params['game']),array());
        $R=$data;
        if(isset($_GET['callback'])){
            echo $_GET['callback']."(".json_encode($R).")";
        }else{
            $response->setCode(100);
            $response->setMessage(AbsDefineMess::SUCCESS_TOOL);
            $response->setDataWithoutValidation($R);
            $response->OutOfJsonResponse();
        }


    }
    function add(){
        $response = new ResultObject();
        $params = $this->getReceiver()->getQueryParams();

        $start = date_format(date_create($params['start']),"Y-m-d G:i:s");
        $end = date_format(date_create($params['end']),"Y-m-d G:i:s");

        $arrParam = array(
            'game'=>$params['game'],
            'server_id'=>$params['server_id'],
            'name'=>$params['name'],
            'start'=>$start,
            'end'=>$end,
            'status'=>$params['status']
        );
        $data = $this->getGiftCodeModel()->onInsertBox($arrParam);

        if($data > 0){
            $R["result"] = 1;
            $R["message"]='THÊM CẤU HÌNH THÀNH CÔNG !';

        }else{
            $R["result"] = -1;
            $R["message"]='THÊM CẤU HÌNH THẤT BẠI !';
        }

        if(isset($_GET['callback'])){
            echo $_GET['callback']."(".json_encode($R).")";
        }else{

            $response->setCode(100);
            $response->setMessage($R['message']);
            $response->OutOfJsonResponse();

        }
    }
    function getitem(){
        $response = new ResultObject();

        $id = $_GET['id'];
        $data = $this->getGiftCodeModel()->getConfig(array("id"=>$id));
        $R=$data;
        if(isset($_GET['callback'])){
            echo $_GET['callback']."(".json_encode($R).")";
        }else{
            $response->setCode(100);
            $response->setMessage(AbsDefineMess::SUCCESS_TOOL);
            if($R)
            $response->setDataWithoutValidation($R);
            $response->OutOfJsonResponse();
        }
    }
    function edit(){
        $response = new ResultObject();
        $params = $this->getReceiver()->getQueryParams();
        $id = addslashes($params['id']);

        $start = date_format(date_create($params['start']),"Y-m-d G:i:s");
        $end = date_format(date_create($params['end']),"Y-m-d G:i:s");

        $arrParam = array(
            'id'=>$id,
            'server_id'=>$params['server_id'],
            'name'=>$params['name'],
            'start'=>$start,
            'end'=>$end,
            'status'=>$params['status']
        );

        $data = $this->getGiftCodeModel()->onUpdateBox($arrParam,array("id"=>$id));
        if($data > 0){
            $R["result"] = 1;
            $R["message"]='CHỈNH SỬA CẤU HÌNH THÀNH CÔNG !';

        }else{
            $R["result"] = -1;
            $R["message"]='CHỈNH SỬA CẤU HÌNH THẤT BẠI !';
        }

        if(isset($_GET['callback'])){
            echo $_GET['callback']."(".json_encode($R).")";
        }else{
            $response->setCode(100);
            $response->setMessage($R["message"]);
            $response->OutOfJsonResponse();
        }
    }

    public function history(){
        $response = new ResultObject();
        $params = $this->getReceiver()->getQueryParams();

        $R = $this->getGiftCodeModel()->gethistory(array('game'=>$params['game']));
        if(isset($_GET['callback'])){
            echo $_GET['callback']."(".json_encode($R).")";
        }else{
            $response->setCode(100);
            $response->setMessage(AbsDefineMess::SUCCESS_TOOL);
            if($R)
                $response->setDataWithoutValidation($R);
            $response->OutOfJsonResponse();
        }

    }
    public function export(){
        $response = new ResultObject();

        $params = (isset($_POST) && !empty($_POST) )?$_POST : $_GET;
        $getstartdate = $params['date_start'];
        $getenddate = $params['date_end'];
        $R = array();
        $R = $this->getGiftCodeModel()->getExport(array("date(`create_date`) >="=>$getstartdate,"date(`create_date`) <="=>$getenddate));
        if(isset($_GET['callback'])){
            echo $_GET['callback']."(".json_encode($R).")";
        }else{
            $response->setCode(100);
            $response->setMessage(AbsDefineMess::SUCCESS_TOOL);
            if($R)
            $response->setDataWithoutValidation($R);
            $response->OutOfJsonResponse();
        }
    }
}
