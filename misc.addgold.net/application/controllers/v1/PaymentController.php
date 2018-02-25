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
use Misc\Http\Client\MomoClient;
use Misc\Http\Client\PMTClient;
use Misc\Models\PaymentModels;
use Misc\Models\MomoModels;
use Misc\Http\Client\IdAddgoldClient;
use Misc\Models\GiftCodeModels;

class PaymentController extends Controller {

    protected $paymentModel;
    protected $momoClient;
    protected $pmtClient;
    protected $momoModel;
    protected $idAddgoldClient;
    protected $giftcodeModel;

    const PARTNER_CODE = "ME112016";
    const ACCESS_KEY = "QjCAp4B1bAQqR5xu";
    const SECRET_KEY = "3OhDthOTeDTfIU4YUQesmPsp4CNavhb";

    private $url_callback = "https://tips.addgold.net/result";
    protected $operatingSystem = "wnap";
    protected $operatingSystemDevice = "unknown";

    public function __construct() {
        parent::__construct();
        $range_ip = array('113.161.36.155','113.161.93.54','115.79.192.144','115.79.192.141','45.76.183.153','115.78.161.88', '14.161.5.226','118.69.76.212', '115.78.161.124','14.169.170.196', '115.78.161.134','113.161.78.101');

        $this->setPathRoot("v3/Payment/");
        /*
        if(in_array($_SERVER['REMOTE_ADDR'],$range_ip)){
            $this->setPathRoot("v2/Payment/");
        }else{
            $this->setPathRoot("v1/Payment/");
        }
        */

        //bao tri



        //$this->setPathRoot("v1/Payment/");
        if ($this->getReceiver()->getHttpProtocol() == "http" && $_SERVER["REMOTE_ADDR"] != "127.0.0.1") {
            header("location: https://local.nap.addgold.net/");
            die;
        }
        $this->operatingSystemDevice = $this->getMobile()->getOperatingSystem(true);
        $this->operatingSystem = $this->operatingSystem . "_" . $this->getMobile()->getOperatingSystem(true);
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

    /**
     *
     * @return MomoModels
     */
    public function getMomoModel() {
        if ($this->momoModel == null) {
            $this->momoModel = new MomoModels($this->getDbConfig(), $this);
        }
        return $this->momoModel;
    }

    /**
     *
     * @return MomoClient
     */
    public function getMomoClient() {
        if ($this->momoClient == null) {
            $this->momoClient = new MomoClient();
//            $this->momoClient->setController($this);
//            $this->momoClient->setApp(PaymentController::PARTNER_CODE);
//            $this->momoClient->setSecret(PaymentController::SECRET_KEY);
//            $this->momoClient->setAccessKey(PaymentController::ACCESS_KEY);
        }
        return $this->momoClient;
    }

    /**
     *
     * @return IdAddgoldClient
     */
    public function getIdAddgoldClient() {
        if ($this->idAddgoldClient == null) {
            $this->idAddgoldClient = new IdAddgoldClient();
            //$this->idAddgoldClient->setController($this);
        }
        return $this->idAddgoldClient;
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


    public function index() {

        $userInfo = $_SESSION["loginInfo"];
        //$listGame = $this->getGraphClient()->getListAccount($userInfo["mobo_id"]);
        $gameList = $this->getPaymentModel()->getGameList(array("status" => 1), array(), false);
        //var_dump($gameList);die;


        $this->addData("gameList", $gameList);
        $this->Render("index");
    }

    public function nap($gameId) {

        $startMain = '2017-11-09 00:00:00';
        $time = date('Y-m-d H:i:s', time());
        if (!$this->isLocal()  && $time >= $startMain  && in_array($gameId,array("10008"))) {
            $this->setMessage("Tính năng này đang được bảo trì, vui lòng quay lại sau!");
            $this->Render("deny");
            die;
        }


        $this->addData("form", "nap");
        if (isset($_SESSION["loginInfo"])) {
            $userInfo = $_SESSION["loginInfo"];
            $paylistData = array(
                "access_token" => $userInfo["access_token"],
                "app_id" => $gameId
            );
            //echo $userInfo["access_token"];die;
            $graphResult = $this->getGraphClient()->verifyAccessTokenChannel($paylistData);
            if ($graphResult == false) {
                $this->setDataWithoutValidation(array("message" => "Tạm thời không tìm thấy thông tin với game này, vui lòng chọn game khác để tiếp tục"));

                $this->Render("no-index");
            }
            //var_dump($graphResult);die;
            #start get suggesstion
            //$suggestion = $this->getPaymentModel()->getSuggestionCharacter(array("status" => 1, "app" => $gameId), array());
            //$this->addData("suggestion", $suggestion);
            #end get suggesstion
            #start get game list
            $gameList = $this->getPaymentModel()->getGameList(array("status" => 1), array());
            $this->addData("gameList", $gameList);

            $gameDetail = $this->getPaymentModel()->getGameList(array("status" => 1,"app_id"=>$gameId), array());
            $this->addData("gameDetail", $gameDetail[0]);

            #end get game list
            #start get server list
            $queryGameId = $gameId;
            $serverList = $this->getGApiClient()->getServerList($queryGameId);
            //var_dump($serverList);die;
            $this->addData("serverList", $serverList);
            #end get server list
            $this->addData("paymentList", array("card" => json_decode('{"title":"Th\u1ebb c\u00e0o \u0111i\u1ec7n tho\u1ea1i","data":[{"type":"card","card":"gate","message":"Gate","description":"Gate","confirm":"B\u1ea1n c\u00f3 mu\u1ed1n n\u1ea1p kh\u00f4ng?","icon":"http:\/\/service.mobo.vn\/assets\/icon\/gate.png","keyboard_state":"full","input":["serial","pin"]},{"type":"card","card":"vms","message":"Mobifone","description":"Mobifone","confirm":"B\u1ea1n c\u00f3 mu\u1ed1n n\u1ea1p kh\u00f4ng?","icon":"http:\/\/service.mobo.vn\/assets\/icon\/vms.png","keyboard_state":"number","input":["serial","pin"]},{"type":"card","card":"vina","message":"Vinaphone","description":"Vinaphone","confirm":"B\u1ea1n c\u00f3 mu\u1ed1n n\u1ea1p kh\u00f4ng?","icon":"http:\/\/service.mobo.vn\/assets\/icon\/vina.png","keyboard_state":"full","input":["serial","pin"]},{"type":"card","card":"viettel","message":"Viettel","description":"Viettel","confirm":"B\u1ea1n c\u00f3 mu\u1ed1n n\u1ea1p kh\u00f4ng?","icon":"http:\/\/service.mobo.vn\/assets\/icon\/viettel.png","keyboard_state":"number","input":["serial","pin"]}]}', true)));
            #get infomation mobo account create
            $this->addData("gameId", $gameId);
            $hashToken = array("gameId" => $gameId, "moboInfo" => $graphResult);
            //var_dump($hashToken);die;
            $this->addData("hashToken", Security::encrypt($hashToken));
            #end get info
            #get list money
            $momoMoney = $this->getPaymentModel()->getMap(array("app" => $gameId, "status" => 1, "type" => "momo"), array());
            $this->addData("momoMoney", $momoMoney);
            #end
            #start get info event

            $publish = $this->isLocal();
            $conditionEventData = array(
                "app" => $gameId,
                "status" => 1
            );
            //$conditionEventData["publish"] = 1;
            if ($publish == false) {
                $conditionEventData["publish"] = 1;
            }
            $event = $this->getPaymentModel()->getEvent($conditionEventData, array(), false);
            //var_dump(Security::encrypt($event));die;
            if ($event == true) {
                $this->addData("event", Security::encrypt($event));
            }
            #end get info event

            if ($gameId == 128) {
                $this->addData("note", "Hiện không nạp mua được gói khuyến mại và thẻ tháng thông qua trang tips.addgold.net. Nếu bạn dùng bản Android, vui lòng cài bản game từ trang chủ LOL.MOBO.VN để nạp mua gói khuyến mại & thẻ tháng.");
            } elseif ($gameId == 106) {
                $this->addData("note", "Để thuận lợi cho việc nạp thẻ, vui lòng cài bản game tích hợp nạp thẻ từ trang chủ MONG.MOBO.VN");
            }
            //hardcode event link
            $eventLinks = array(
                //155 => array("link" => "https://mu.gate.vn/", "title" => "Từ <strong>26/12/2016</strong> đến <strong>08/01/2016</strong>:  Nạp <strong>20.000 – Tặng 1 lượt quay</strong> có thể mở ra <strong style='color:red'>Ngọc Bảo Hộ</strong> & <strong style='color:red'>iPhone 7+</strong> tại <strong style='color:red'>MUVN.GATE.VN</strong> <i>(Tối đa 5 lượt/ngày)</i>")
            );
            if ($eventLinks[$gameId]) {
                $this->addData("eventLinks", $eventLinks[$gameId]);
            }


            //get list data giftcode
            $giftCodeList = $this->getGiftCodeModel()->getConfigAll(array("gameID" => $gameId, "status" => 1));

            //get history
            $getHistoryGiftcode = $this->getGiftCodeModel()->getHistory(array("account_id" => $graphResult['id']));

            if ($giftCodeList) {
                foreach ($giftCodeList as $k => $v) {
                    $result = $this->export_data($getHistoryGiftcode, "event_type", $v['id']);
                    if ($result == true) {
                        $giftCodeList[$k]['giftcode'] = $result['giftcode'];
                    } else {
                        $giftCodeList[$k]['giftcode'] = "";
                    }
                    $giftCodeList[$k]['hashdata'] =  Security::encrypt($v);

                }
            }
            $this->addData("giftcodeList",$giftCodeList);
            if(in_array($gameId,array(10008))){
                $this->addData("islocal",true);
            }
            if (in_array($_SERVER['REMOTE_ADDR'],array('113.161.93.54')) && in_array($gameId, array(10009))) {
                if($_SESSION['loginInfo']['account'] == 'dklp12'){
                    $this->addData("buymonth", true);
                }

            }

            $this->Render("nap");
        } else {
            $this->Render("no-login");
        }
    }

    public function export_data($data, $title, $value)
    {
        if ($data == false || !is_array($data)) {
            return null;
        }
        foreach ($data as $key => $ivalue) {
            if ($ivalue[$title] == $value) {
                return $ivalue;
            }
        }
        return null;
    }
    public function exchangeRate($gameId) {
        $this->addData("form", "ty-gia");
//        if (isset($_SESSION["loginInfo"])) {
//            $userInfo = $_SESSION["loginInfo"];

        $gameList = $this->getPaymentModel()->getGameList(array("status" => 1), array());
        //bảng tỷ giá ở đây
        $this->addData("gameId", $gameId);
        $this->addData("gameList", $gameList);
        $this->Render("tygia");
//        } else {
//            $this->Render("no-index");
//            die;
//        }
    }

    public function exchangeRateView() {
        $params = $this->getReceiver()->getQueryParams();
        $gameId = $params["game"];
        $formality = $params["formality"] == "mcard" ? "card" : $params["formality"];
        if (empty($formality) == true) {
            echo "Vui lòng chọn hình thức nạp cần xem tỷ giá quy đổi.";
            die;
        }

        $array_map = array("app" => $gameId, "status" => 1, "type" => $formality);

        if(!empty($params['subtype'])){
            $array_map['sub_type'] = $params['subtype'];
        }
        $exchangeRate = $this->getPaymentModel()->getExchangeMap($array_map);
        //var_dump($exchangeRate);die;
        $this->addData("exchangeRate", $exchangeRate);
        if ($exchangeRate == false) {
            echo "Không tìm thấy thông tin tỷ giá quy đổi.";
            die;
        }
        $this->Render("exchange/" . $formality);
    }

    public function postBack($order_id = "") {
        $params = $this->getReceiver()->getPostParams();
        if ($params == true) {
            $queryParams = $this->getReceiver()->getQueryParams();
            if ($queryParams == true) {
                $params = array_merge($params, $queryParams);
            }
        } else {
            $params = $this->getReceiver()->getQueryParams();
        }
        $response = new ResultObject();
        $response->setCode(0);
        $token = $params["token"];
        unset($params["token"]);
        $source = implode("", $params);
        $verify = md5($source . "U672T54SWKFLDU2W");
        //echo $verify;die;
        if ($token == $verify) {
            $commit_date = date("Y-m-d H:i:s", time());
            $money = $params["money"];
            $commitData = array(
                "status" => intval($money) != 0 ? 1 : 2,
                "amount" => $money,
                "credit" => $params["credit"],
                "unit" => $params["unit"],
                "service_data" => json_encode($params),
                "commit_date" => $commit_date,
                "verify_response" => json_encode($params)
            );
            $updateId = $this->getPaymentModel()->commitTransaction($commitData, array("order_hash" => md5($params["order_id"])));
            //var_dump($updateId);die;
            if ($updateId > 0) {
                #run event
                $eventData = $this->getPaymentModel()->getTransaction(array("order_hash" => md5($params["order_id"])), array(), 1, false);
                //var_dump($envetData[0]);die;
                if ($eventData == true) {
                    $this->executeEvent($eventData[0]);
                }
                #end run event
                $response->setCode(0);
                $response->setData(array("tran_id" => md5($order_id)));
                $response->setMessage("Cập nhật thành công");
                $response->OutOfJsonResponse();
            } else {
                $response->setMessage("Cập nhật không thành công");
                $response->setData($params);
                $response->OutOfJsonResponse();
            }
        } else {
            $response->setMessage("Chứng thực không hợp lệ");
            $response->OutOfJsonResponse();
        }
    }

    public function search() {
        $params = $this->getReceiver()->getQueryParams();
        $response = new ResultObject();
        if (empty($_SESSION["loginInfo"])) {
            $response->setCode(-100006);
            $response->setMessage("Bạn chưa đăng nhập, vui lòng refesh để đăng nhập lại");
            $response->OutOfJsonResponse();
        }
        if (!is_array($params["data"]) && is_json($params["data"]) == true) {
            if (urlencode(urldecode($params["data"])) === $params["data"]) {
                $params = json_decode(urldecode($params["data"]), true);
            } else {
                $params = json_decode($params["data"], true);
            }
        } elseif (is_array($params["data"])) {
            $params = $params["data"];
        }

        if (isset($params["key"])) {

            switch ($params["key"]) {
                case "characterlist":
                    $server_id = $params["data"]["server_id"];
                    $merge_id = $params["data"]["merge_id"];
                    $hashData = Security::decrypt($params["data"]["hash_token"]);
                    //var_dump($hashData);die;
                    $service_name = $hashData["gameId"];
                    //get app info
                    $appInfo = $this->getPaymentModel()->getConfigGameInfo(array("app_id" => $service_name, "status" => 1), array());
                    if ($appInfo == false) {
                        $response->setMessage("Game chưa được kích hoạt");
                        $response->OutOfJsonResponse();
                    }
                    $queryServiceName = $service_name;
                    if ($appInfo["server_type"] == '0') {
                        $merge_id = $server_id;
                    } elseif ($appInfo["server_type"] == '1') {
                        $merge_id = $server_id;
                    }
                    if ($merge_id == false)
                        $merge_id = $server_id;
                    if ($hashData["moboInfo"] == false) {
                        $response->setMessage("Account is not exists.");
                        $response->OutOfJsonResponse();
                    }
                    //$response->setData(array("hashDaat" => $hashData));

                    $mobo_service_id = $hashData["moboInfo"]["account_id"];

                    $account_name = $hashData["moboInfo"]["account"];

                    $userGameInfo = $this->getGApiClient()->getUserInfo($queryServiceName, $mobo_service_id, $server_id , $account_name);

                    if ($userGameInfo == false) {
                        //apply server id and app id
//                        $fillDataUser = array(
//                            "character_id" => "23424123",
//                            "character_name" => "saunghia",
//                            "server_id" => 1,
//                            "app_name" => 10000
//                        );
//                        $fillDataUser["hash"] = Security::encrypt($fillDataUser);
//                        $reUser[] = $fillDataUser;
//
//                        $response->setData($reUser);
//                        $response->setCode(0);
                        $response->setCode(-1);
                        $response->setMessage("User not exists");
                    } else {
                        $response->setCode(0);

                        $reUser = array();
                        foreach ($userGameInfo as $key => $value) {
                            //apply server id and app id
                            $fillDataUser = array(
                                "character_id" => $value["character_id"],
                                "character_name" => $value["character_name"],
                                "server_id" => $merge_id,
                                "app_name" => $service_name,
                                "platform_device" => $this->operatingSystemDevice
                            );
                            $fillDataUser["hash"] = Security::encrypt($fillDataUser);
                            $reUser[] = $fillDataUser;
                        }
                        $response->setData($reUser);
                    }
                    $response->OutOfJsonResponse();
                case "promo":
                    $server_id = $params["data"]["server_id"];
                    $merge_id = $params["data"]["merge_id"];
                    $character_id = $params["data"]["character_id"];

                    $hashData = Security::decrypt($params["data"]["hash_token"]);

                    //var_dump($hashData);die;
                    $service_name = $hashData["gameId"];
                    //var_dump($params);die;
                    $mobo_service_id = $hashData["moboInfo"]["account_id"];

                    $publish = $this->isLocal();

                    $itemList = $this->getPaymentModel()->getItemList(array("app" => $service_name, "status" => 1), array());
                    //var_dump($itemList);die;
                    if ($itemList == true && count($itemList) > 1) {
                        //chưa xử lý array merger
                        $paramPromoItems = array(
                            "account_id" => $mobo_service_id,
                            "character_id" => $character_id,
                            "server_ids" => json_encode(array($server_id)),
                            "service_id" => $service_name,
                            "service_name" => $service_name
                        );

                        $promoItems = $this->getGApiClient()->getPromoItems($paramPromoItems);
                        //var_dump($promoItems);die;
                        //var_dump($promoItems === null);die;
                        //$data = '[{"card_type":"1","count":"1"},{"card_type":"2","count":"2"},{"card_type":"3","count":"2"},{"card_type":"4","count":"2"},{"card_type":"6","count":"1"},{"card_type":"7","count":"1"}]';
                        //$promoItems = json_decode($data, true);
                        if ($promoItems == true) {
                            $promo = array();
                            foreach ($promoItems as $key => $value) {
                                $promo[$value["card_type"]] = (int) $value["count"];
                            }
                            //var_dump($promo);die;
                            #start map data use promo and data promo item
                            $neuItemList = array();
                            foreach ($itemList as $key => $value) {
                                if ($value["publish"] == 0 && $publish == false)
                                    continue;

                                if ((int) $value["item_limit"] == 0) {
                                    $isNext = false;
                                    if (!empty($value["display"]) && is_json($value["display"])) {
                                        $display = json_decode($value["display"], true);
                                        foreach ($display as $k => $val) {
                                            if (isset($display[$k]["rule"]) && $display[$k]["rule"]["id"] == 0) {
                                                $value["display"] = $display[$k]["name"];
                                            } elseif (isset($display[$k]["rule"]) && $display[$k]["rule"]["id"] == 1) {
                                                $paramPromoItems["item_id"] = $value["type"];
                                                $detailPromo = $this->getGApiClient()->getPromoDetailItems($paramPromoItems);
                                                if ($detailPromo == true && $value["type"] == $detailPromo[0]["card_type"]) {
                                                    $format = "Y-m-d H:i:s";
                                                    $buyDate = DateTime::createFromFormat($format, date($format, strtotime($detailPromo[0]["date"])));
                                                    date_add($buyDate, date_interval_create_from_date_string($val["rule"]["condition"] - $val["rule"]["countdown"] . ' days'));
                                                    if ($buyDate > (new DateTime(null))) {
                                                        $isNext = true;
                                                        break;
                                                    } else {
                                                        $value["display"] = $display[$k]["name"];
                                                    }
                                                } else {
                                                    $value["display"] = $display[$k]["name"];
                                                }

                                                unset($paramPromoItems["item_id"]);
                                            }
                                        }
                                    }
                                    if ($isNext == false)
                                        $newItemList[] = $value;
                                    else
                                        continue;
                                } else {
                                    if (isset($promo[$value["type"]]) && (int) $promo[$value["type"]] >= (int) $value["item_limit"]) {
                                        continue;
                                    } else {
                                        if (!empty($value["display"]) && is_json($value["display"])) {
                                            $display = json_decode($value["display"], true);
                                            $value["display"] = $display[$promo[$value["type"]] == true ? ($promo[$value["type"]] + 1) : 1]["name"];
                                        }
                                        $newItemList[] = $value;
                                    }
                                }
                            }
                            #end map
                            $itemList = $neuItemList;
                        } else if ($promoItems === null) {
                            #format display package promo item
                            foreach ($itemList as $key => $value) {
                                if (!empty($value["display"]) && is_json($value["display"])) {
                                    $display = json_decode($value["display"], true);
                                    $itemList[$key]["display"] = $display[1];
                                }
                            }
                            #end format
                        } else if ($promoItems === false) {
                            #format display package promo item
                            //if call api error giữ lại item đầu tiên
                            $itemList = array($itemList[0]);
                            #end format
                        }
                        $response->setCode(0);
                        $response->setData($itemList);
                        $response->OutOfJsonResponse();
                    }
                    break;
                default :
                    $response->setMessage("Key is not exists.");
                    $response->OutOfJsonResponse();
            }
        } else {
            $response->setMessage("Key is not exists.");
            $response->OutOfJsonResponse();
        }
    }

    public function captcha() {
        $captcha = new Captcha();
        $text = $captcha->CreateImage();
        $_SESSION["captcha"] = $text;
    }

    private function get_tranid() {
        $microtime = microtime();
        $comps = explode(' ', $microtime);
        return sprintf('%d%03d', $comps[1], $comps[0] * 1000000);
    }

    public function payList() {

        $params = $this->getReceiver()->getQueryParams();
        $author = $this->getAuthorize();
        $this->setDataWithoutValidation(array("navTitle" => "Nạp nhanh"));
        if ($author->getCode() === ResultObject::AUTHORIZE_SUCCESS) {
            $this->Render("ingame/index");
        } else {
            $this->setDataWithoutValidation(array("message" => "Truy cập không hợp lệ."));
            $this->Render("ingame/deny");
        }
    }

    public function payCard() {
        $params = $this->getReceiver()->getQueryParams();
        $author = $this->getAuthorize();
        //var_dump($author);die;
        $this->setDataWithoutValidation(array("navTitle" => "THẺ CÀO"));
        if ($author->getCode() === ResultObject::AUTHORIZE_SUCCESS) {
            $data = $this->prepareQuerySecure();
//            if (!isset($data["info"]["server_id"])) {
//                $data["info"]["server_id"] = 1;
//            }
//            if (!isset($data["info"]["character_name"])) {
//                $data["info"]["character_name"] = "HardCode";
//            }
            $data["info"]["app_name"] = $data["app"];
            $data["info"]["hash"] = Security::encrypt($data["info"]);
            (new Misc\Logger\NullLogger())->captureReceiver("request", $this->getReceiver(), array());

            $access_token = $data["access_token"];
            if (urlencode(urldecode($data["access_token"])) === $data["access_token"]) {
                $access_token = urldecode($data["access_token"]);
            }
            $base64Account = json_decode(base64_decode($access_token), true);

            //var_dump($base64Account);die;
            $paylistData = array(
                "access_token" => $access_token,
                "app_id" => $data["app"]
            );

            $graphResult = $this->getGraphClient()->verifyAccessTokenChannel($paylistData);
            if ($graphResult == false) {
                $this->setDataWithoutValidation(array("message" => "Tạm thời không tìm thấy thông tin với game này, vui lòng chọn game khác để tiếp tục"));
                $this->Render("ingame/not-found");
            }
            $hashToken = array("gameId" => $data["app"], "moboInfo" => $graphResult);
            //var_dump($hashToken);die;
            $this->addData("hashToken", Security::encrypt($hashToken));

            $this->setDataWithoutValidation($data);
            //var_dump($base64Account);
            //var_dump($data);die;

            $_SESSION["loginInfo"] = array(
                "channel" => $data["channel_cfg"],
                "device_id" => $data["device_id"],
                "access_token" => $data["access_token"],
                "id" => $base64Account["id"],
                "account_id" => $base64Account["account_id"]
            );
//var_dump($_SESSION);die;

            $this->setDataWithoutValidation($data);
            //var_dump($data);die;
            $this->Render("ingame/card");
        } else {
            $this->setDataWithoutValidation(array("message" => "Truy cập không hợp lệ."));
            $this->Render("ingame/deny");
        }
    }

    public function topupRequest() {
        $params = $this->getReceiver()->getPostParams();
        $response = new ResultObject();
//        $response->setDataWithoutValidation($params);
//        $response->OutOfJsonResponse();
        if (empty($_SESSION["loginInfo"])) {
            $response->setCode(-100006);
            $response->setMessage("Bạn chưa đăng nhập, vui lòng refesh để đăng nhập lại");
            $response->OutOfJsonResponse();
        }
        if ($params == false) {
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

        if ($params["formality"] == "mcard") {
            $needle = array('cardType', "serial", "pin");
        } elseif ($params["formality"] == "bank") {
            $needle = array('bankCode');
        } else {
            $needle = array();
        }
        //var_dump($params);die;
        $order_id = Misc\Http\Util::getShortLink(10);
        $params["order_id"] = $order_id;
        $params["card_type"] = isset($params["card_type"]) ? $params["card_type"] : 0;
        $response->setDataWithoutValidation($this->prepareArray($params));
        if (!is_required($params, $needle) == TRUE) {
            $response->setCode(-100006);
            $response->setMessage("Tham số không hợp lệ");
            $response->OutOfJsonResponse();
        }
        if (empty($_SESSION["loginInfo"])) {
            $response->setCode(-100006);
            $response->setMessage("Bạn chưa đăng nhập, vui lòng refesh để đăng nhập lại");
            $response->OutOfJsonResponse();
        }
        //$response->setDataWithoutValidation(array("order_id" => $order_id));
        $decryptToken = Security::decrypt($params["character"]);
        $tokenData = Security::decrypt($params["token"]);
        $app = $decryptToken["app_name"];

//        $response->setDataWithoutValidation($tokenData);
//        $response->OutOfJsonResponse();

        $access_token = $_SESSION['loginInfo']['access_token'];
        //var_dump($access_token);die;
        //$verifyBuildData = $tokenData;
        $verifyBuildData["platform"] = $this->operatingSystem;
        //$verifyBuildData["user_agent"] = $_SERVER['HTTP_USER_AGENT'];
        $verifyBuildData["ip"] = \Misc\Http\Util::get_remote_ip();
        $verifyBuildData["lang"] = "vn";
        $verifyBuildData["telco"] = $params["cardType"];
        $verifyBuildData["serial"] = $params["serial"];
        $verifyBuildData["pin"] = $params["pin"];
        $verifyBuildData["info"] = json_encode(array(
            "character_id" => $decryptToken["character_id"],
            "character_name" => $decryptToken["character_name"],
            "account_name" => $tokenData["moboInfo"]["account"],
            "server_id" => $decryptToken["server_id"],
            "card_type" => $params["card_type"],
            "platform_device" => $this->operatingSystemDevice
        ));

        $verifyBuildData["card"] = $params["cardType"];
        $verifyBuildData["service_id"] = $app;
        $verifyBuildData["service_name"] = $app;
        $verifyBuildData["ppgame_id"] = $app;
        $verifyBuildData["account"] = $tokenData["moboInfo"]["account"];

        $verifyBuildData["account_id"] = $tokenData["moboInfo"]["account_id"];
        $verifyBuildData["character_id"] = $decryptToken["character_id"];
        $verifyBuildData["character_name"] = $decryptToken["character_name"];
        $verifyBuildData["server_id"] = $decryptToken["server_id"];

        //log data
        $logData = $verifyBuildData;

        #gen log
        unset($logData["service_id"], $logData["card"], $logData["service_name"], $logData["access_token"], $logData["lang"], $logData["app"], $logData["info"], $logData["direct"]);


        $logData["app"] = $app;
        $logData["game_id"] = $tokenData["moboInfo"]["id"];
        $logData["order_id"] = $order_id;
        $logData["order_hash"] = md5($order_id);
        $logData["display"] = $params['display'];
        $logData["type"] = $params["formality"];
        $logData["telco"] = $params["type"];
        $logData["game_info"] = json_encode(array(
            "character_id" => $decryptToken["character_id"],
            "character_name" => $decryptToken["character_name"],
            "account_name" => $tokenData["moboInfo"]["account"],
            "server_id" => $decryptToken["server_id"],
            "card_type" => $params["card_type"],
            "platform_device" => $this->operatingSystemDevice,
            "platform" => $this->operatingSystemDevice
        ));
        $logData["ip"] = $_SERVER["REMOTE_ADDR"];
        $logData["pay_type"] = 2;
        if (!empty($params["event"])) {
            $logData["event_info"] = json_encode(Security::decrypt($params["event"]));
        }
        $logData["package"] = $params["card_type"];
        //log số tiền ban đầu của user chọn
        $logData["money"] = 0;
        if (in_array($params["formality"], array("bank", "momo"))) {
            if ($params["formality"] == "momo")
                $logData["money"] = $params["momoMoney"];
            else if ($params["formality"] == "bank")
                $logData["money"] = $params["bankMoney"];
        }

        $logId = $this->getPaymentModel()->addTransaction($logData);
        if ($logId > 0) {
            if ($params["formality"] == "mcard") {
                #start card
                $verifyBuildData["transaction_id"] = $order_id;
                $requestResult = $this->getGApiClient()->verifyCard($verifyBuildData);
//                $this->setDataWithoutValidation($requestResult);
//                $response->OutOfJsonResponse();
                //Object response form request by class http Response
                $contents = $requestResult->getContent();
                //$contents = json_decode('{"code":110,"desc":"REQUEST_SUCCESS","data":{"message":"B\u1ea1n \u0111\u00e3 mua th\u00e0nh c\u00f4ng","credit":102,"unit":"Vang","money":"20000","service_data":"{\"credit\":102,\"unit\":\"Vang\",\"gapi_transid\":17528761,\"message\":\"B\\u1ea1n \\u0111\\u00e3 n\\u1ea1p th\\u00e0nh c\\u00f4ng 102 Vang\",\"log_id\":\"5079\",\"mopay_transid\":\"WD1396E26D1FB921\",\"service_id\":\"106\"}","redirect":"http:\/\/misc.mobo.vn\/dialog\/v1.0\/pmt\/message?status=1&service_data={\"credit\":102,\"unit\":\"Vang\",\"gapi_transid\":17528761,\"message\":\"B\\u1ea1n \\u0111\\u00e3 n\\u1ea1p th\\u00e0nh c\\u00f4ng 102 Vang\",\"log_id\":\"5079\",\"mopay_transid\":\"WD1396E26D1FB921\",\"service_id\":\"106\"}"},"message":"REQUEST_SUCCESS"}', true);
                if (is_array($contents) === true) {
                    if ($contents["code"] === 0) {
                        //còn string response success
                        #commit transaction recharge
                        $complete_date = date("Y-m-d H:i:s", time());
                        $commitData = array(
                            "verify_request" => $requestResult->getRequest()->getUrl(),
                            "amount" => $contents["data"]["value"],
                            "verify_time" => $complete_date,
                            "verify_response" => json_encode($contents)
                        );

                        //var_dump($commitData);die;
                        $logData["money"] = $contents["data"]["value"];
                        $logData["payment_type"] = "card";
                        $logData["payment_subtype"] = $params["type"];
                        $logData["transaction_id"] = $order_id;

                        $this->getPaymentModel()->commitTransaction($commitData, array("id" => $logId));
                        #end commit transaction recharge
                        #run event
                        //$logData["id"] = $logId;
                        //$eventData = array_merge($logData, $commitData);
                        //$this->executeEvent($eventData);
                        #end run event
                        #start cộng tiền game
                        #build data
                        $requires = array('transaction_id', 'service_id', 'account_id', 'account', 'channel', 'device_id', 'platform', 'package_name', 'ip_user', 'game_info', 'info', 'tracking_info', 'date', 'money', 'payment_type', 'payment_subtype', 'service_name');
                        $rechargeData = array();
                        foreach ($requires as $key => $value) {
                            if (isset($logData[$value])) {
                                $v = $logData[$value];
                                if ($value == "info")
                                    $value = "game_info";
                                $rechargeData[$value] = is_array($v) ? json_encode($v) : $v;
                            }
                        }
                        if(!empty($contents['data']['env']) && $contents['data']['env'] =='sandbox'){
                            $rechargeData['env'] = $contents['data']['env'];
                        }
                        #end
                        $this->getGApiClient()->setServiceId($app);
                        $rechargeResult = $this->getGApiClient()->addMoney($rechargeData);
                        $rechargeContent = $rechargeResult->getContent();

                        $recharge_date = date("Y-m-d H:i:s", time());
                        if ($rechargeContent["code"] == 0) {
                            $commitData = array(
                                "recharge_time" => $recharge_date,
                                "recharge_request" => $rechargeResult->getRequest()->getUrl(),
                                "status" => 1,
                                "credit" => $rechargeContent["data"]["credit"],
                                "unit" => $rechargeContent["data"]["unit"],
                                "recharge_response" => json_encode($rechargeContent)
                            );
                            $this->getPaymentModel()->commitTransaction($commitData, array("id" => $logId));
                            $response->setCode(0);
                            $response->setData(array("commit_time" => date("H:i d/m/Y", strtotime($recharge_date))));
                            $response->setData($rechargeContent["data"]);
                            $response->setMessage("Nạp thẻ thành công");
                            //$response->setDataWithoutValidation(array("link" => $rechargeResult->getRequest()->getUrl()));
                            $response->OutOfJsonResponse();
                        } else {
                            $this->getPaymentModel()->commitTransaction(array("recharge_time" => $recharge_date, "recharge_request" => $rechargeResult->getRequest()->getUrl(), "status" => 2, "recharge_response" => json_encode($rechargeContent)), array("id" => $logId));
                            $response->setCode(-1);
                            $response->setData(array("commit_date" => date("H:i d/m/Y", strtotime($recharge_date))));
                            $response->setData($rechargeContent["data"]);
                            $response->setMessage($rechargeContent["message"]);
                            //$response->setDataWithoutValidation(array("link" => $rechargeResult->getRequest()->getUrl()));
                            $response->OutOfJsonResponse();
                        }
                    } else {
                        $this->getPaymentModel()->commitTransaction(array("verify_time" => $complete_date, "verify_request" => $requestResult->getRequest()->getUrl(), "status" => 2, "verify_response" => json_encode($contents)), array("id" => $logId));
                        $response->setCode(-100007);
                        //$response->setDataWithoutValidation(array("link" => $requestResult->getRequest()->getUrl()));
                        $response->setMessage($contents["message"]);
                        $response->OutOfJsonResponse();
                    }
                } else {
                    $this->getPaymentModel()->commitTransaction(array("verify_time" => $complete_date, "verify_request" => $requestResult->getRequest()->getUrl(), "status" => 2, "verify_response" => json_encode($contents)), array("id" => $logId));
                    $response->setCode(-100006);
                    $response->setMessage("Nạp thẻ thất bại");
                    $response->OutOfJsonResponse();
                }
                #end card
            } else {
                #momo
                $momoParams = array("amount" => $params["momoMoney"],
                    "order_id" => $order_id,
                    "order_info" => "Nap tien game",
                    "return_url" => "https://tips.addgold.net/result-{$order_id}.html",
                    "notify_url" => "https://misc.mobo.vn/v1.0/momopay/notify",
                );
                $this->getMomoModel()->commitTransaction($momoParams, array("id" => $logId));

                $requestResult = $this->getMomoClient()->getPaymentRequest($momoParams);
                //init log giao dich
                //var_dump($requestResult);die;
                if ($requestResult["status_code"] == 0) {
                    $response->setDataWithoutValidation(array("redirect" => true));
                    $response->setCode(0);
                    $this->getMomoModel()->commitTransaction(array("pay_url" => $requestResult["pay_url"]), array("id" => $logId));
                    $response->setDataWithoutValidation(array("link" => $requestResult["pay_url"]));
                } else {
                    $this->getMomoModel()->commitTransaction(array("extra_data" => json_encode($requestResult)), array("id" => $logId));
                    $response->setCode(-1);
                    $response->setMessage("Khởi tạo giao dịch thất bại!");
                }
                $response->OutOfJsonResponse();
                #end momo
            }
        } else {
            $response->setCode(-100008);
            $response->setMessage("Lỗi hiện thống, vui lòng thử lại sau");
            $response->OutOfJsonResponse();
        }
    }

    /**
     *
     * @param array $data
     * record payment transaction
     * @return boolean
     */
    public function executeEvent(array $data = null) {
        if ($data == false)
            return false;
        $eventInfo = json_decode($data["event_info"], true);
        switch ($eventInfo["action"]) {
            case "first":
                $logResult = $this->getPaymentModel()->getTransaction(array("mobo_service_id" => $data["mobo_service_id"], "server_id" => $data["server_id"], "status" => 1), array(), 0, false);
                $flag = $logResult == false ? $this->firstEvent($data, $eventInfo) : (count($logResult) > 1 ? false : $this->firstEvent($data, $eventInfo));
                if ($flag == false) {
                    $count = count($logResult);
                    $commitData = array("event_result" => json_encode(array("code" => "-2", "description" => "", "data" => $count)));
                    $this->getPaymentModel()->commitTransaction($commitData, array("id" => $data["id"]));
                }
                return $flag;
            case "promo":
                $start = $eventInfo["start_date"];
                $logResult = $this->getPaymentModel()->getTransaction(array("mobo_service_id" => $data["mobo_service_id"], "server_id" => $data["server_id"], "create_date >=" => $start, "status" => 1, "pay_type" => 2), array(), 0, false);
                $flag = $logResult == false ? $this->firstEvent($data, $eventInfo) : (count($logResult) > 1 ? false : $this->firstEvent($data, $eventInfo));
                if ($flag == false) {
                    $count = count($logResult);
                    $commitData = array("event_result" => json_encode(array("code" => "-2", "description" => "", "data" => $count)));
                    $this->getPaymentModel()->commitTransaction($commitData, array("id" => $data["id"]));
                }
                return $flag;
            default :
                return false;
        }
    }

    public function firstEvent(array $data = null, array $eventData = null) {
        if ($eventData == false)
            return false;
        switch ($eventData["func"]) {
            case "giftcode":
                $giftCodeInfo = $this->getPaymentModel()->getCode(array("app" => $data["app"], "event" => $eventData["id"], "status" => 0), array(), false);
                if ($giftCodeInfo == true) {
                    $user_info = json_encode(array(
                        "character_id" => $data["character_id"],
                        "character_name" => $data["character_name"],
                        "server_id" => $data["server_id"],
                        "mobo_service_id" => $data["mobo_service_id"],
                        "mobo_id" => $data["mobo_id"],
                    ));
                    $commitFiftData = array("status" => 1, "used_date" => date("Y-m-d H:i:s", time()), "user_info" => $user_info);
                    $resutlGiftCode = $this->getPaymentModel()->commitGiftCode($commitFiftData, array("id" => $giftCodeInfo["id"]));
                    if ($resutlGiftCode > 0) {
                        $commitData = array("event_result" => json_encode(array("code" => "0", "description" => "success", "data" => json_encode($giftCodeInfo))));
                        $this->getPaymentModel()->commitTransaction($commitData, array("id" => $data["id"]));
                        return true;
                    } else {
                        $commitData = array("event_result" => json_encode(array("code" => "-1", "description" => "update code error", "data" => json_encode($giftCodeInfo))));
                        $this->getPaymentModel()->commitTransaction($commitData, array("id" => $data["id"]));
                        return true;
                    }
                } else {
                    $commitData = array("event_result" => json_encode(array("code" => "-1", "description" => "get code empty")));
                    $this->getPaymentModel()->commitTransaction($commitData, array("id" => $data["id"]));
                    return true;
                }
                break;
            default :
                return false;
        }
    }

    public function huongdan($gameId = 0) {
        $this->addData("form", "huong-dan");
        $gameList = $this->getPaymentModel()->getGameList(array("status" => 1), array());
        //bảng tỷ giá ở đây
        $this->addData("gameId", $gameId);
        $this->addData("gameList", $gameList);
        $this->Render("huongdan");
    }

    public function khuyenmai($gameId = 0) {
        $this->addData("form", "khuyen-mai");

        $gameList = $this->getPaymentModel()->getGameList(array("status" => 1), array());
        //bảng tỷ giá ở đây
        $this->addData("gameId", $gameId);
        $this->addData("gameList", $gameList);
        $this->Render("khuyenmai");
    }

    public function lichsu($gameId = 0) {
        $this->addData("form", "lich-su");
        if (isset($_SESSION["loginInfo"])) {
            $userInfo = $_SESSION["loginInfo"];

            $moboInfoFromAccessToken = json_decode(base64_decode($userInfo["access_token"]), true);


            //echo $moboInfoFromAccessToken["account_id"];
            //$history = $this->getPaymentModel()->getTransaction(array("account_id" => $moboInfoFromAccessToken["account_id"], "status" => array(1), "pay_type" => 2), array("order_id", "credit", "amount", "create_date", "unit", "display", "event_result"), 5, false);
            $history = $this->getPaymentModel()->getTransaction(array("game_id" => $userInfo['id'], "status" => array(1), "pay_type" => 2), array("order_id", "credit", "amount", "create_date", "unit", "display", "event_result","recharge_response"), 5, false);
            $this->addData("history", $history);

            $gameList = $this->getPaymentModel()->getGameList(array("status" => 1), array());
            $this->addData("gameList", $gameList);

            $this->Render("lichsu");
        } else {
            $this->Render("no-login");
        }
    }

    public function hotro($gameId = 0) {
        $this->addData("form", "ho-tro");
        if (isset($_SESSION["loginInfo"])) {
            $userInfo = $_SESSION["loginInfo"];

            $gameList = $this->getPaymentModel()->getGameList(array("status" => 1), array());
            //bảng tỷ giá ở đây
            $this->addData("gameId", $gameId);
            $this->addData("gameList", $gameList);
            $this->Render("hotro");
        } else {
            header("location: /");
            die;
        }
    }

    public function logout() {
        $params = $this->getReceiver()->getQueryParams();
        if (isset($params["access"])) {
            unset($_SESSION["loginid"], $_SESSION["loginInfo"]);
            $this->getMemcacheObject()->saveMemcache($params["access"], null);
            setcookie("lu", "", time() + 60 * 60 * 24 * 30, "/");
            header("location: /");
            die;
        } else {
            header("location: /");
            die;
        }
    }

    public function oauth() {
        //https://id.doden888.net/v1.0/verify_code?code=
        $params = $this->getReceiver()->getQueryParams();
        $result = $this->getIdAddgoldClient()->getAccessToken($params);

        if(in_array($_SERVER['REMOTE_ADDR'],array('115.78.161.88','113.161.36.155','113.161.93.54','115.79.192.144','115.79.192.141'))){
        }
        //var_dump($result);die;
        if ($result == true) {
            header("location: /login.html?" . http_build_query($result));
            die;
        } else {
            header("location: /");
            die;
        }
    }

    public function login() {
        $params = $this->getReceiver()->getQueryParams();
        if (isset($params["access_token"])) {
            $graphResult = $this->getGraphClient()->verifyAccessToken($params);
            //chưa kiểm tra active
            if ($graphResult == false) {
                header("location: /");
                die;
            }
            $token = md5(uniqid(mt_rand(), true) . $params["access_token"]);
            $this->getMemcacheObject()->saveMemcache($token, $params["access_token"]);
            setcookie("lu", $token, time() + 60 * 60 * 24 * 30, "/");
            $_SESSION["loginid"] = $token;
            $graphResult["access_token"] = $params["access_token"];
            $_SESSION["loginInfo"] = $graphResult;
            header("location: /");
            die;
        } else {
            header("location: /");
            die;
        }
    }

    public function authorize() {
        $params = $this->getReceiver()->getQueryParams();
        if (!is_array($params["data"]))
            $params["data"] = json_decode($params["data"], true);
        $response = new ResultObject();
        if (isset($params["data"]["lu"])) {
            $access_token = $this->getMemcacheObject()->getMemcache($params["data"]["lu"]);
            if ($access_token == true) {
                $graphResult = $this->getGraphClient()->verifyAccessToken(array("access_token" => $access_token));
                //chưa kiểm tra active
                if ($graphResult == false)
                    header("location: /");
                $graphResult["access_token"] = $access_token;
                $_SESSION["loginid"] = $token;
                $_SESSION["loginInfo"] = $graphResult;

                $response->setCode(0);
                $response->setData(array("data" => $graphResult));
                $response->OutOfJsonResponse();
            } else {
                $response->OutOfJsonResponse();
            }
        } else {
            $response->OutOfJsonResponse();
        }
    }

    public function getInfoRegister($app, $access_token) {
        $moboInfoFromAccessToken = json_decode(base64_decode($access_token), true);
        $key = $this->getMemcacheObject()->genCacheId($moboInfoFromAccessToken["mobo_id"] . $app);
        $moboInfoRegister = $this->getMemcacheObject()->getMemcache($key);

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

    public function displayResult($order_id) {
        $params = $this->getReceiver()->getQueryParams();
        $this->addData("form", "result");
        if (isset($_SESSION["loginInfo"])) {
            $userInfo = $_SESSION["loginInfo"];

            $resultLog = $this->getMomoModel()->getTransaction(array("order_hash" => md5($order_id)), array(), false);
            if ($resultLog == false) {
                $this->setMessage("Không tìm thấy giao dịch: {$order_id}");
                if (isset($params["display"]) && $params["display"] == "box")
                    $this->Render("display-box");
                else
                    $this->Render("display");
            }
            $app = $resultLog["app"];
            $this->addData("gameId", $app);
            if ($resultLog["status"] == 1) {
                $gameList = $this->getPaymentModel()->getGameList(array("app_id" => $app), array());
                if ($gameList == true) {
                    $this->addData("gameInfo", $gameList[0]);
                }
                if(!empty($resultLog['recharge_response'])){
                    $mess = json_decode($resultLog['recharge_response'],true);
                    $this->setMessage($mess['data']['msg']);
                }else{
                    $this->setMessage("Nạp thành công.");
                }


                $this->addData("result", $resultLog);
                if (isset($params["display"]) && $params["display"] == "box")
                    $this->Render("display-box");
                else
                    $this->Render("display");
            } elseif ($resultLog["status"] == 0) {
                $this->setMessage("<span>Giao dịch hoàn tất.</span><br><i style='    color: #000;    font-size: 80%;    line-height: 34px;'>Chi tiết tại <a href='/lich-su.html'>lịch sử nạp</a></i>.");
                if (isset($params["display"]) && $params["display"] == "box")
                    $this->Render("display-box");
                else
                    $this->Render("display");
            } else {
                $this->setMessage("Giao dịch nạp thất bại");
                if (isset($params["display"]) && $params["display"] == "box")
                    $this->Render("display-box");
                else
                    $this->Render("display");
            }
        } else {
            $this->Render("no-login");
        }
    }

    public function query() {
        $params = $this->getReceiver()->getQueryParams();
        $data = json_decode($params["data"], true);
        $wheres = json_decode($params["wheres"], true);
        $response = new ResultObject();
        $result = $this->getPaymentModel()->getQuery($wheres, $data);
        $response->setCode(1);
        if ($result == true)
            $response->setData($result);
        $response->OutOfJsonResponse();
    }

    public function queryMoMoDetail() {
        $params = $this->getReceiver()->getQueryParams();
        $response = new ResultObject();
        $app = isset($params["app"]) ? $params["app"] : null;
        $start_date = isset($params["start_date"]) ? $params["start_date"] : null;
        $end_date = isset($params["end_date"]) ? $params["end_date"] : null;
        $result = $this->getPaymentModel()->getQueryMoMoDetail($app, $start_date, $end_date);
        $response->setCode(1);
        if ($result == true)
            $response->setData($result);
        $response->OutOfJsonResponse();
    }

}
