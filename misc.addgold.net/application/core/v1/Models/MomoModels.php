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

class MomoModels extends ModelObject implements ModelObjectInterface {

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
    public function getTransaction(array $keys, array $fields = array(), $cached = true) {

        $keyId = $this->getController()->getMemcacheObject()->genCacheId(__CLASS__ . __FUNCTION__ . json_encode($keys));
        $queryResult = $this->getController()->getMemcacheObject()->getMemcache($keyId, $this->getEndPoint());
        if ($queryResult == false || $cached == false) {
            $query = $this->getConnection()->select(count($fields) == 0 ? '*' : implode(',', $fields))
                    ->where($keys)
                    ->get(ModelEnum::MOMO_TRANSACTION);

            //echo $this->getConnection()->last_query();die;
            $queryResult = ($query != FALSE) ? $query->row_array() : FALSE;
            if ($queryResult != false)
                $this->getController()->getMemcacheObject()->saveMemcache($keyId, $queryResult, $this->getEndPoint(), 24 * 3600);
        }

        return $queryResult;
    }

     /**
     * Lấy real key hash data receiver
     * @param int $app
     */
    public function getMap(array $keys, array $fields = array(), $cached = true) {
        
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

    
    public function addTransaction(array $data) {
        $data["create_date"] = date("Y-m-d H:i:s", time());
        return parent::insert(ModelEnum::MOMO_TRANSACTION, $data);
    }

    public function commitTransaction(array $data, array $wheres) {
        foreach ($data as $key => $value) {
            $this->getConnection()->set($key, $value);
        }
        foreach ($wheres as $key => $value) {
            $this->getConnection()->where($key, $value);
        }

        $sql = $this->getConnection()->update(ModelEnum::MOMO_TRANSACTION);
        //var_dump($this->getConnection()->last_query());die;
        return $this->getConnection()->affected_rows();
    }

    public function updateMap(array $data, array $wheres) {
        foreach ($data as $key => $value) {
            $this->getConnection()->set($key, $value);
        }
        foreach ($wheres as $key => $value) {
            $this->getConnection()->where($key, $value);
        }

        $sql = $this->getConnection()->update(ModelEnum::MOMO_MAP_VALUE);
        //var_dump($this->getConnection()->last_query());die;
        return $this->getConnection()->affected_rows();
    }
    /**
     * 
     * @param array $data
     * @return int
     */
    public function addItemMap(array $data) {    
        return $this->getConnection()->insert(ModelEnum::MOMO_MAP_VALUE, $data);        
    }
    /**
     * 
     * @param array $data
     * @return int
     */
    public function removeItemMap(array $data) {    
        return $this->getConnection()->delete(ModelEnum::MOMO_MAP_VALUE, $data);        
    }
    public function getEndPoint() {
        return __CLASS__;
    }

}
