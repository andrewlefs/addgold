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

class GiftCodeModels extends ModelObject implements ModelObjectInterface
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
    public function checkStart(array $keys, array $fields = array(), $cached = false)
    {

        $query = $this->getConnection()->select('*')
            ->where($keys)->like("server_id", $fields['server_id'], 'both')
            ->get(ModelEnum::EVENT_GIFTCODE_HISTORY);
        $queryResult = ($query != FALSE) ? $query->row_array() : FALSE;

        return $queryResult;
    }

    public function getExport(array $keys, array $fields = array())
    {
        $query = $this->getConnection()->select(count($fields) == 0 ? '*' : implode(',', $fields))
            ->where($keys)
            ->get(ModelEnum::EVENT_GIFTCODE_HISTORY);

        $queryResult = ($query != FALSE) ? $query->result_array() : FALSE;
        return $queryResult;
    }

    public function checkExist(array $keys, array $fields = array())
    {
        $query = $this->getConnection()->select(count($fields) == 0 ? '*' : implode(',', $fields))
            ->where($keys)
            ->get(ModelEnum::EVENT_GIFTCODE_HISTORY);


        $queryResult = ($query != FALSE) ? $query->result_array() : FALSE;
        return $queryResult;
    }

    public function getHistory(array $keys, array $fields = array())
    {
        $query = $this->getConnection()->select(count($fields) == 0 ? '*' : implode(',', $fields))
            ->where($keys)
            ->get(ModelEnum::EVENT_GIFTCODE_HISTORY);

        $queryResult = ($query != FALSE) ? $query->result_array() : FALSE;
        return $queryResult;
    }

    public function getGiftcode(array $keys, array $fields = array())
    {
        $query = $this->getConnection()->select(count($fields) == 0 ? '*' : implode(',', $fields))
            ->where($keys)
            ->get(ModelEnum::EVENT_GIFTCODE);

        $queryResult = ($query != FALSE) ? $query->row_array() : FALSE;
        return $queryResult;
    }

    public function addHistory($data)
    {
        $data["create_date"] = date("Y-m-d H:i:s", time());
        $newId = parent::insert(ModelEnum::EVENT_GIFTCODE_HISTORY, $data);
        //echo $this->getConnection()->last_query();die;

        return $newId;
    }

    //cập nhật số lượt
    public function updateHistory($data, $wheres)
    {

        foreach ($data as $key => $value) {
            $this->getConnection()->set($key, $value);
        }
        foreach ($wheres as $key => $value) {
            $this->getConnection()->where($key, $value);
        }

        $this->getConnection()->update(ModelEnum::GIFTCODE_HISTORY);
        //print_r($this->getConnection()->last_query());die;
        return $this->getConnection()->affected_rows();
    }

    //cập nhật số lượt
    public function updateGiftcode($data, $wheres)
    {

        foreach ($data as $key => $value) {
            $this->getConnection()->set($key, $value);
        }
        foreach ($wheres as $key => $value) {
            $this->getConnection()->where($key, $value);
        }

        $this->getConnection()->update(ModelEnum::EVENT_GIFTCODE);
        //print_r($this->getConnection()->last_query());die;
        return $this->getConnection()->affected_rows();
    }
    public function getEndPoint()
    {
        return __CLASS__;
    }
    public function getConfig(array $keys, array $fields = array()){
        $query = $this->getConnection()->select(count($fields) == 0 ? '*' : implode(',', $fields))
            ->where($keys)
            ->get(ModelEnum::EVENT_GIFTCODE_CAT);

        //echo $this->getConnection()->last_query();die;
        $queryResult = ($query != FALSE) ? $query->row_array() : FALSE;
        return $queryResult;
    }

    public function getConfigAll(array $keys, array $fields = array()){
        $query = $this->getConnection()->select(count($fields) == 0 ? '*' : implode(',', $fields))
            ->where($keys)
            ->get(ModelEnum::EVENT_GIFTCODE_CAT);

        $queryResult = ($query != FALSE) ? $query->result_array() : FALSE;
        return $queryResult;
    }

    public function onInsertBox($data){
        $newId = parent::insert(ModelEnum::GIFTCODE_SV_FILTER, $data);
        //echo $this->getConnection()->last_query();die;

        return $newId;
    }
    public function onUpdateBox($data,$wheres){

        foreach ($data as $key => $value) {
            $this->getConnection()->set($key, $value);
        }
        foreach ($wheres as $key => $value) {
            $this->getConnection()->where($key, $value);
        }

        $this->getConnection()->update(ModelEnum::GIFTCODE_SV_FILTER);
        //print_r($this->getConnection()->last_query());die;
        return $this->getConnection()->affected_rows();
    }
}
