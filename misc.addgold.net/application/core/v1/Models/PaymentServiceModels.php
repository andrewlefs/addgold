<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Misc\Models;

use Misc\Models\ModelObject;
use Misc\Models\ModelObjectInterface;
use Misc\Models\ModelEnum;
use Misc\MemcacheObject;

class PaymentServiceModels extends ModelObject implements ModelObjectInterface {

    /**
     * 
     * @param array $config
     * @param Controler $controller
     * @param boolean $type
     */
    public function __construct(array $config, $controller, $type = true) {
        parent::__construct($config, $type);
        parent::setController($controller);
    }

    /**
     * Lấy real key hash data receiver
     * @param int $app
     */
    public function getServiceGroup(array $apps, array $fields = array(), array $group = array(), array $order = array("order" => "asc")) {
        $keyId = $this->getController()->getMemcacheObject()->genCacheId(__CLASS__ . __FUNCTION__ . json_encode($apps));
        $queryResult = $this->getController()->getMemcacheObject()->getMemcache($keyId, $this->getEndPoint());
        if ($queryResult == false) {
            $stringOrder = "";
            if (count($order) > 0) {
                foreach ($order as $key => $value) {
                    if (empty($stringOrder) == false)
                        $stringOrder .= ",";
                    $stringOrder .= "`" . $key . "` " . $value;
                }
            }
            $query = $this->getConnection()->select(count($fields) == 0 ? '*' : implode(',', $fields))
                    ->where($apps)
                    ->where(array("status" => 1))
                    ->group_by($group)
                    ->order_by($stringOrder)
                    ->get(ModelEnum::PAYMENT_SERVICE_GROUP);
            $queryResult = ($query != FALSE) ? $query->result_array() : FALSE;
            $this->getController()->getMemcacheObject()->saveMemcache($keyId, $queryResult, $this->getEndPoint(), 24 * 3600);
        }
        return $queryResult;
    }

    /**
     * Lấy real key hash data receiver
     * @param int $app
     */
    public function getServiceItems(array $apps, array $fields = array(), array $order = array("order" => "asc")) {
        $keyId = $this->getController()->getMemcacheObject()->genCacheId(__CLASS__ . __FUNCTION__ . json_encode($apps));
        $queryResult = $this->getController()->getMemcacheObject()->getMemcache($keyId, $this->getEndPoint());
        if ($queryResult == false) {
            $stringOrder = "";
            if (count($order) > 0) {
                foreach ($order as $key => $value) {
                    if (empty($stringOrder) == false)
                        $stringOrder .= ",";
                    $stringOrder .= "`" . $key . "` " . $value;
                }
            }
            $query = $this->getConnection()->select(count($fields) == 0 ? '*' : implode(',', $fields))
                    ->where($apps)
                    ->where(array("status" => 1))
                    ->order_by($stringOrder)
                    ->get(ModelEnum::PAYMENT_SERVICE);
            //var_dump( $this->getConnection()->last_query());
            //die;
            $queryResult = ($query != FALSE) ? $query->result_array() : FALSE;
            $this->getController()->getMemcacheObject()->saveMemcache($keyId, $queryResult, $this->getEndPoint(), 24 * 3600);
        }
        return $queryResult;
    }

    public function logPayUpdate(array $data, $where) {
        return parent::update(ModelEnum::PAYMENT_PAY_LOG, $data, $where);
    }

    public function logRechargeUpdate(array $data, $where) {
        return parent::update(ModelEnum::PAYMENT_RECHARGE_LOG, $data, $where);
    }

    public function logCard(array $data) {
        $btcode = $data["pin"];
        unset($data["pin"]);
        $data["code"] = $btcode;
        $data["create_date"] = date("Y-m-d H:i:s", time());
        return $this->logPay($data);
    }

    public function logRedeenCoupon(array $data) {
        $btcode = $data["btc_code"];
        unset($data["btc_code"]);
        $data["code"] = $btcode;
        $data["create_date"] = date("Y-m-d H:i:s", time());
        return $this->logPay($data);
    }

    public function logRedeenVoucher(array $data) {
        $voucher = $data["voucher"];
        unset($data["voucher"]);
        $data["code"] = $voucher;
        $data["create_date"] = date("Y-m-d H:i:s", time());
        return $this->logPay($data);
    }

    public function logRecharge(array $data) {
        //prepare info to character_id, and character_name, server_id, server_name
        if (isset($data["game_info"])) {
            $infos = json_decode($data["game_info"], true);
            $require = array("character_id", "character_name", "server_id", "server_name");
            $endData = array();
            foreach ($require as $key => $value) {
                if (isset($infos[$value]))
                    $endData[$value] = $infos[$value];
            }
            $data = array_merge($data, $endData);
        }
        //var_dump($data);die;
        return parent::insert(ModelEnum::PAYMENT_RECHARGE_LOG, $data);
    }

    protected function logPay(array $data) {
        //prepare info to character_id, and character_name, server_id, server_name
        if (isset($data["info"])) {
            $infos = json_decode($data["info"], true);
            $require = array("character_id", "character_name", "server_id", "server_name");
            $endData = array();
            foreach ($require as $key => $value) {
                if (isset($infos[$value]))
                    $endData[$value] = $infos[$value];
            }
            $data = array_merge($data, $endData);
        }
        return parent::insert(ModelEnum::PAYMENT_PAY_LOG, $data);
    }

    public function getEndPoint() {
        return "PaymentService";
    }

}
