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

class PaymentModels extends ModelObject implements ModelObjectInterface
{

    /**
     *
     * @param array $config
     * @param Controler $controller
     * @param boolean $type
     */
    public function __construct(array $config, $controller, $type = true)
    {
        parent::__construct($config, $type);
        parent::setController($controller);
    }

    /**
     *
     * @param array $keys
     * @param array $fields
     * @param type $cached
     * @return type
     */
    public function getConfigGameInfo(array $keys, array $fields = array(), $cached = true)
    {

        $keyId = $this->getController()->getMemcacheObject()->genCacheId(__CLASS__ . __FUNCTION__ . json_encode($keys));
        $queryResult = $this->getController()->getMemcacheObject()->getMemcache($keyId, $this->getEndPoint());
        if ($queryResult == false || $cached == false) {
            $query = $this->getGameList($keys, $fields, true);
            //echo $this->getConnection()->last_query();die;
            $queryResult = ($query != FALSE) ? $query[0] : FALSE;
            if ($queryResult != false) {
                $this->getController()->getMemcacheObject()->saveMemcache($keyId, $queryResult, $this->getEndPoint(), 24 * 3600);
            }
        }
        return $queryResult;
    }

    /**
     *
     * @param array $keys
     * @param array $fields
     * @param type $cached
     * @return type
     */
    public function getItemList(array $keys, array $fields = array(), $cached = true)
    {

        $keyId = $this->getController()->getMemcacheObject()->genCacheId(__CLASS__ . __FUNCTION__ . json_encode($keys));
        $queryResult = $this->getController()->getMemcacheObject()->getMemcache($keyId, $this->getEndPoint());
        if ($queryResult == false || $cached == false) {
            $query = $this->getConnection()->select(count($fields) == 0 ? '*' : implode(',', $fields))
                ->where($keys)
                ->get(ModelEnum::PAYMENT_ITEMS);
            //echo $this->getConnection()->last_query();die;
            $queryResult = ($query != FALSE) ? $query->result_array() : FALSE;
            if ($queryResult != false)
                $this->getController()->getMemcacheObject()->saveMemcache($keyId, $queryResult, $this->getEndPoint(), 24 * 3600);
        }

        return $queryResult;
    }

    /**
     * Lấy real key hash data receiver
     * @param int $app
     */
    public function getGameList(array $keys, array $fields = array(), $cached = true)
    {

        $keyId = $this->getController()->getMemcacheObject()->genCacheId(__CLASS__ . __FUNCTION__ . json_encode($keys));
        $queryResult = $this->getController()->getMemcacheObject()->getMemcache($keyId, $this->getEndPoint());
        if ($queryResult == false || $cached == false) {
            $query = $this->getConnection()->select(count($fields) == 0 ? '*' : implode(',', $fields))
                ->where($keys)
                ->order_by("order", "asc")
                ->get(ModelEnum::PAY_GAME_LIST);
            //echo $this->getConnection()->last_query();die;
            $queryResult = ($query != FALSE) ? $query->result_array() : FALSE;
            if ($queryResult != false)
                $this->getController()->getMemcacheObject()->saveMemcache($keyId, $queryResult, $this->getEndPoint(), 24 * 3600);
        }

        return $queryResult;
    }

    /**
     * Lấy real key hash data receiver
     * @param int $app
     */
    public function getTransaction(array $keys, array $fields = array(), $limit = 0, $cached = true)
    {

        $keyId = $this->getController()->getMemcacheObject()->genCacheId(__CLASS__ . __FUNCTION__ . json_encode($keys));
        $queryResult = $this->getController()->getMemcacheObject()->getMemcache($keyId, $this->getEndPoint());
        if ($queryResult == false || $cached == false) {
            $this->getConnection()->select(count($fields) == 0 ? '*' : implode(',', $fields));
            foreach ($keys as $key => $value) {
                if (is_array($value))
                    $this->getConnection()->where_in($key, $value);
                else
                    $this->getConnection()->where($key, $value);
            }

            if ($limit != 0) {
                $this->getConnection()->limit($limit)->order_by("id", "desc");
            }
            $query = $this->getConnection()->get(ModelEnum::PAYMENT_TRANSACTION);
            //echo $this->getConnection()->last_query(); die;
            $queryResult = ($query != FALSE) ? $query->result_array() : FALSE;
            if ($queryResult != false)
                $this->getController()->getMemcacheObject()->saveMemcache($keyId, $queryResult, $this->getEndPoint(), 24 * 3600);
        }

        return $queryResult;
    }

    /**
     * Lấy real key hash data receiver
     * @param int $app
     */
    public function getSuggestionCharacter(array $keys, array $fields = array(), $cached = true)
    {

        $keyId = $this->getController()->getMemcacheObject()->genCacheId(__CLASS__ . __FUNCTION__ . json_encode($keys));
        $queryResult = $this->getController()->getMemcacheObject()->getMemcache($keyId, $this->getEndPoint());
        if ($queryResult == false || $cached == false) {
            $query = $this->getConnection()->select(count($fields) == 0 ? '*' : implode(',', $fields))
                ->where($keys)
                ->get(ModelEnum::PAYMENT_TRANSACTION);

            //echo $this->getConnection()->last_query();die;
            $queryResult = ($query != FALSE) ? $query->result_array() : FALSE;
            if ($queryResult != false)
                $this->getController()->getMemcacheObject()->saveMemcache($keyId, $queryResult, $this->getEndPoint(), 24 * 3600);
        }

        return $queryResult;
    }

    /**
     * Lấy real key hash data receiver
     * @param int $app
     */
    public function getMap(array $keys, array $fields = array(), $cached = true)
    {

        $keyId = $this->getController()->getMemcacheObject()->genCacheId(__CLASS__ . __FUNCTION__ . json_encode($keys));
        //echo $this->getEndPoint();die;
        $queryResult = $this->getController()->getMemcacheObject()->getMemcache($keyId, $this->getEndPoint());
        if ($queryResult == false || $cached == false) {
            $query = $this->getConnection()->select(count($fields) == 0 ? '*' : implode(',', $fields))
                ->where($keys)
                ->order_by("money", "asc")
                ->get(ModelEnum::MOMO_MAP_VALUE);
            //echo $this->getConnection()->last_query();die;
            $queryResult = ($query != FALSE) ? $query->result_array() : FALSE;
            if ($queryResult != false)
                $this->getController()->getMemcacheObject()->saveMemcache($keyId, $queryResult, $this->getEndPoint(), 24 * 3600);
        }
        return $queryResult;
    }

    /**
     * Lấy real key hash data receiver
     * @param int $app
     */
    public function getQuery(array $keys, array $fields = array(), $cached = true)
    {

        $keyId = $this->getController()->getMemcacheObject()->genCacheId(__CLASS__ . __FUNCTION__ . json_encode($keys));
        //echo $this->getEndPoint();die;
        $queryResult = $this->getController()->getMemcacheObject()->getMemcache($keyId, $this->getEndPoint());
        if ($queryResult == false || $cached == false) {
            $this->getConnection()->select(count($fields) == 0 ? '*' : implode(',', $fields));
            foreach ($keys as $key => $value) {
                if (is_array($value)) {
                    $this->getConnection()->ar_where[] = "AND (0=1 ";
                    foreach ($value as $k => $val) {
                        $this->getConnection()->or_where($k, $val);
                    }
                    $this->getConnection()->ar_where[] = ")";
                    //$this->getConnection()->group_end();
                } else {
                    $this->getConnection()->where($key, $value);
                }
            }
            //var_dump($this->getConnection());
            //die;
            $query = $this->getConnection()->limit(50)
                ->get(ModelEnum::PAYMENT_TRANSACTION);
            //echo $this->getConnection()->last_query();
            //die;
            $queryResult = ($query != FALSE) ? $query->result_array() : FALSE;
            if ($queryResult != false)
                $this->getController()->getMemcacheObject()->saveMemcache($keyId, $queryResult, $this->getEndPoint(), 24 * 3600);
        }
        return $queryResult;
    }

    /**
     * Lấy real key hash data receiver
     * @param int $app
     */
    public function getQueryMoMoDetail($app, $start_date, $end_date, $cached = true)
    {

        $keyId = $this->getController()->getMemcacheObject()->genCacheId(__CLASS__ . __FUNCTION__ . $app . $start_date . $end_date);
        //echo $this->getEndPoint();die;
        $queryResult = $this->getController()->getMemcacheObject()->getMemcache($keyId, $this->getEndPoint());
        if ($queryResult == false || $cached == false) {
            $this->getConnection()->select("order_id, transaction_id , create_date, response_time, amount as money, status_code, name as `game_name`, mobo_id, mobo_service_id, character_id, character_name, server_id, payment_transaction.`status`")
                ->from("payment_transaction")->join("pay_game_list", "payment_transaction.app = pay_game_list.app_id");

            if ($app == true) {
                $this->getConnection()->where("payment_transaction.app", $app);
            }
            if ($start_date == true) {
                $this->getConnection()->where("payment_transaction.create_date >=", $start_date);
            }
            if ($end_date == true) {
                $this->getConnection()->where("payment_transaction.create_date <", $end_date);
            }
            $this->getConnection()->where("payment_transaction.order_type", "momo_wallet");
            $query = $this->getConnection()->order_by("payment_transaction.create_date")
                ->get();
//            echo $this->getConnection()->last_query();
//            die;
            $queryResult = ($query != FALSE) ? $query->result_array() : FALSE;
            if ($queryResult != false)
                $this->getController()->getMemcacheObject()->saveMemcache($keyId, $queryResult, $this->getEndPoint(), 24 * 3600);
        }
        return $queryResult;
    }

    /**
     * Lấy real key hash data receiver
     * @param int $app
     */
    public function getExchangeMap(array $keys, array $fields = array(), $cached = true)
    {

        $keyId = $this->getController()->getMemcacheObject()->genCacheId(__CLASS__ . __FUNCTION__ . json_encode($keys));
        //echo $this->getEndPoint();die;
        $queryResult = $this->getController()->getMemcacheObject()->getMemcache($keyId, $this->getEndPoint());
        if ($queryResult == false || $cached == false) {
            $query = $this->getConnection()->select(count($fields) == 0 ? '*' : implode(',', $fields))
                ->where($keys)
                ->order_by("sub_name, sub_type, money", "asc")
                ->get(ModelEnum::PAYMENT_EXCHANGE);
            //echo $this->getConnection()->last_query();die;
            $queryResult = ($query != FALSE) ? $query->result_array() : FALSE;
            if ($queryResult != false)
                $this->getController()->getMemcacheObject()->saveMemcache($keyId, $queryResult, $this->getEndPoint(), 24 * 3600);
        }
        return $queryResult;
    }

    /**
     * get event for app
     * @param array $keys
     * @param array $fields
     * @param boolean $cached
     * @return type
     */
    public function getEvent(array $keys, array $fields = array(), $cached = true)
    {

        $keyId = $this->getController()->getMemcacheObject()->genCacheId(__CLASS__ . __FUNCTION__ . json_encode($keys));
        $queryResult = $this->getController()->getMemcacheObject()->getMemcache($keyId, $this->getEndPoint());
        if ($queryResult == false || $cached == false) {
            $query = $this->getConnection()->select(count($fields) == 0 ? '*' : implode(',', $fields))
                ->where($keys)
                ->where("start_date <= Now()", "", false)
                ->where("end_date >= Now()", "", false)
                ->get(ModelEnum::PAYMENT_EVENT);
            //echo $this->getConnection()->last_query();die;
            $queryResult = ($query != FALSE) ? $query->row_array() : FALSE;
            if ($queryResult != false)
                $this->getController()->getMemcacheObject()->saveMemcache($keyId, $queryResult, $this->getEndPoint(), 24 * 3600);
        }
        return $queryResult;
    }

    /**
     * get event for app
     * @param array $keys
     * @param array $fields
     * @param boolean $cached
     * @return type
     */
    public function getCode(array $keys, array $fields = array(), $cached = true)
    {

        $keyId = $this->getController()->getMemcacheObject()->genCacheId(__CLASS__ . __FUNCTION__ . json_encode($keys));
        $queryResult = $this->getController()->getMemcacheObject()->getMemcache($keyId, $this->getEndPoint());
        if ($queryResult == false || $cached == false) {
            $query = $this->getConnection()->select(count($fields) == 0 ? '*' : implode(',', $fields))
                ->where($keys)
                ->limit(1)
                ->get(ModelEnum::PAYMENT_GIFTCODE);
            //echo $this->getConnection()->last_query();die;
            $queryResult = ($query != FALSE) ? $query->row_array() : FALSE;
            if ($queryResult != false)
                $this->getController()->getMemcacheObject()->saveMemcache($keyId, $queryResult, $this->getEndPoint(), 24 * 3600);
        }
        return $queryResult;
    }

    public function addTransaction(array $data)
    {
        $data["create_date"] = date("Y-m-d H:i:s", time());
        $newId = parent::insert(ModelEnum::PAYMENT_TRANSACTION, $data);
        //echo $this->getConnection()->last_query();die;
        return $newId;
    }

    public function commitTransaction(array $data, array $wheres)
    {
        foreach ($data as $key => $value) {
            $this->getConnection()->set($key, $value);
        }
        foreach ($wheres as $key => $value) {
            $this->getConnection()->where($key, $value);
        }
        $sql = $this->getConnection()->update(ModelEnum::PAYMENT_TRANSACTION);
        //print_r($this->getConnection()->last_query());die;
        return $this->getConnection()->affected_rows();
    }

    public function commitGiftCode(array $data, array $wheres)
    {
        foreach ($data as $key => $value) {
            $this->getConnection()->set($key, $value);
        }
        foreach ($wheres as $key => $value) {
            $this->getConnection()->where($key, $value);
        }
        $sql = $this->getConnection()->update(ModelEnum::PAYMENT_GIFTCODE);
        //echo $this->getConnection()->last_query();die;
        return $this->getConnection()->affected_rows();
    }

    public function getEndPoint()
    {
        return __CLASS__;
    }


    public function getPaymentLastMonth(array $keys, array $fields = array(), $cached = true)
    {

        $query = $this->getConnection()->select(count($fields) == 0 ? '*' : implode(',', $fields))
            ->where($keys)
            ->order_by("id","desc")
            ->limit(1)
            ->get(ModelEnum::PAYMENT_GIFTCODE);
        //echo $this->getConnection()->last_query();die;
        $queryResult = ($query != FALSE) ? $query->row_array() : FALSE;


        return $queryResult;
    }

}
