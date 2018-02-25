<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace GraphApi\Object;

use GraphApi\Object\AbsItemInstanceInterface;
use GraphApi\Object\Fields\DBTableFields;
use GraphApi\Http\Client\Gapi;
use GraphApi\Http\Request;
use GraphApi\Object\Fields\MoboFields;
use GraphApi\Object\GameUserObject;
use GraphApi\Object\Fields\UserFields;
use GraphApi\Object\Fields\SendItemFields;
use GraphApi\Object\Values\SendItems;
use GraphApi\Http\Parameters;

abstract class AbsItemObject implements AbsItemInstanceInterface {

    private $moboRef;
    private $userRef;
    private $mail_title;
    private $mail_content;
    private static $overite_count = 0;
    public static $format = array(/* "item_id" => "item_id", "count" => "count", "type" => "item_type" */);
    private $endPoints = array(
        "139",
        "137"
    );

    public function __construct() {
        
    }

    public function setTitle($title) {
        $this->mail_title = $title;
    }

    public function getTitle() {
        return $this->mail_title == false ? "Su Kien" : $this->mail_title;
    }

    public function setOveriteCount($count) {
        if ($count < 0)
            throw new \Exception("Count invaild");
        AbsItemObject::$overite_count = $count;
    }

    public function getOveriteCount() {
        return AbsItemObject::$overite_count;
    }

    public function setMailConntent($body) {
        $this->mail_content = $body;
    }

    public function getMailConntent() {
        return $this->mail_content == false ? "Vat pham su kien" : $this->mail_content;
    }

    public function setMobo(MoboObject $value) {
        $this->moboRef = $value;
    }

    public function getMobo() {
        return $this->moboRef;
    }

    public function setUser(GameUserObject $value) {
        $this->userRef = $value;
    }

    public function getUser() {
        return $this->userRef;
    }

    public function setFormat($format) {
        AbsItemObject::$format = $format;
    }

    public function getEndPoint() {
        return "abs";
    }

    public static function cast(array $value) {
        if (AbsItemObject::$format == true) {
            foreach ($value as $key => $val) {
                foreach ($val as $k => $v) {
                    $subItems[] = AbsItemObject::_cast($v);
                }
                if ($subItems == true)
                    $changeItems[] = $subItems;
            }
            return $changeItems;
        } else {
            return $value;
        }
    }

    public static function _cast($value) {
        foreach (AbsItemObject::$format as $k => $v) {
            if (array_key_exists($k, $value))
                if ($k == "count" && AbsItemObject::$overite_count > 0) {
                    $changeItem[$v] = AbsItemObject::$overite_count;
                } else {
                    $changeItem[$v] = $value[$k];
                }
        }
        return $changeItem;
    }

    public function add(array $value) {
        if ($value[DBTableFields::ITEMS] == true && json_decode($value[DBTableFields::ITEMS]) == true)
            $this->{$value[DBTableFields::TYPE]}
                    ->{$value[DBTableFields::POSITION]}[] = json_decode($value[DBTableFields::ITEMS], true);
    }

    public function get($type, $position = null) {
        if ($position == true)
            return $this->{$type}->{$position} == true ?
                    $this->{$type}->{$position} : null;
        else
            return $this->{$type} == true ?
                    $this->{$type} : null;
    }

    public function send($endPoint, array $items) {


        /* http://gapi.mobo.vn/?control=game&func=add_item
         * &mobo_service_id=1071499048780501561
         * &server_id=1
         * &service_name=hiepkhach
         * &service_id=107
         * &time_stamp=2015-05-05 08:00:13
         * &award=[{"item_id":20017,"count":1}]
         * &title=Sự kiện - Chia sẻ Facebook
         * &content=Chia sẻ thành công lần thứ 2 trong ngày. Nhận 10 thể lực
         * &app=hiepkhach
         * &token=5f8f4c4d003f83d5196b6da8ca894354
         */
        /*
         * add item
         * award: json format
         *  [ 
          {"item_id":1001,"count":1}, //type int
          {"item_id":1002,"count":2},
          ...
          ],
         */
        //send toi da 5 item        
        $time_stamp = date('Y-m-d H:i:s', time());

        foreach ($items as $key => $value) {
            foreach ($value as $subKey => $subValue) {
                $awards [] = $subValue;
            }
        }
        $params = array();
        $params[SendItemFields::CONTROL] = 'game';
        $params[SendItemFields::FUNC] = SendItems::ADD_ITEM;
        $params[SendItemFields::APP] = 'game';
        $params[MoboFields::MSI_ID] = $this->getMobo()->{MoboFields::MSI_ID};
        $params[UserFields::SERVER_ID] = $this->getUser()->{UserFields::SERVER_ID};
        $params[SendItemFields::SERVICE_NAME] = $endPoint;
        $params[SendItemFields::SERVICE_ID] = SendItems::SERVICE_ID;
        $params[SendItemFields::TIEM_STAMP] = $time_stamp;
        $params[SendItemFields::AWARD] = json_encode($awards);
        $params[SendItemFields::TITLE] = $this->getTitle();
        $params[SendItemFields::CONTENT] = $this->getMailConntent();

        $client = new Gapi();
        $request = new Request($client);

        $parameters = new Parameters();
        $parameters->enhance($params);
        $request->setQueryParams($parameters);

        $response = $request->execute();
        $response->items = $awards;
        return $response;
    }

}
