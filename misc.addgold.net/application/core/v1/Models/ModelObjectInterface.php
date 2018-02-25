<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Misc\Models;

use Misc\Controller;

interface ModelObjectInterface {

    public function getController();

    public function setController(Controller $controller);

    /**
     * 
     * @return type
     */
    public function getConnection();

    public function ReloadConnection();

    /**
     * 
     * @param array $config
     */
    public function setConfig(array $config);

    /**
     * 
     * @param boolean $group
     */
    public function setType($type = true);

    /**
     * 
     * @return type
     */
    public function getType();

    /**
     * @param array
     * @return $this
     */
    public function setData(array $data);

    public function insert($tableName, array $data);

    public function insertBatch($tableName, array $data);

    //cập nhật số lượt
    public function update($tableName, array $data, array $where = array());

    //cập nhật số lượt
    public function updateBatch($tableName, array $data, $id);

    /**
     * Like setData but will skip field validation
     *
     * @param array
     * @return $this
     */
    public function setDataWithoutValidation(array $data);

    /**
     * @return array
     */
    public function getData();

    /**
     * @return array
     */
    public function exportData();

    /**
     * @return EmptyEnum
     */
    public static function getFieldsEnum();

    /**
     * @return array
     */
    public static function getFields();

    /**
     * @return string
     */
    public static function className();

    public static function isJson($string);

    public function getEndPoint();
}
