<?php

namespace Misc\Models;

require_once __DIR__ . '/../../../../system/core/Model.php';

use Misc\Enum\EmptyEnum;
use Misc\Models\ModelObjectInterface;
use Misc\Controller;

abstract class ModelObject extends \CI_Model {

    protected $config;
    protected $type = true;
    protected $connection;
    protected $controller;

    /**
     * @var mixed[] set of key value pairs representing data
     */
    protected $data = array();

    public function __construct(array $config, $type = true) {
        $this->config = $config;
        $this->type = $type;
        $this->data = static::getFieldsEnum()->getValuesMap();
    }

    public function getController() {
        return $this->controller;
    }

    /**
     * 
     * @param Controller $controller
     */
    public function setController(Controller $controller) {
        $this->controller = $controller;
    }

    /**
     * 
     * @return type
     */
    public function getConnection() {        
        if (empty($this->config))
            throw new \InvalidArgumentException(
            'Config is not init of ' . get_class($this));
        if ($this->connection == false) {            
            $this->connection = $this->load->database($this->config, $this->type);
        }        
        return $this->connection;
    }

    public function ReloadConnection() {
        if (empty($this->config))
            throw new \InvalidArgumentException(
            'Config is not init of ' . get_class($this));
        if ($this->getConnection() == true) {
            $this->connection = null;
        }
        $this->connection = $this->load->database($this->config, $this->type);
    }

    /**
     * 
     * @param array $config
     */
    public function setConfig(array $config) {
        $this->config = $config;
    }

    /**
     * 
     * @param boolean $group
     */
    public function setType($group = true) {
        $this->type = $group;
    }

    /**
     * 
     * @return type
     */
    public function getType() {
        return $this->type;
    }

    /**
     * @param array
     * @return $this
     */
    public function setData(array $data) {
        foreach ($data as $key => $value) {
            $this->{$key} = $value;
        }

        return $this;
    }

    public function insert($tableName, array $data) {
        $query = FALSE;
        if (is_array($data)) {
            $query = $this->getConnection()->insert($tableName, $data);
        }
        return (empty($query) == FALSE) ? $this->getConnection()->insert_id() : 0;
    }

    public function insertBatch($tableName, array $data) {
        $query = FALSE;
        if (is_array($data)) {
            $query = $this->getConnection()->insert_batch($tableName, $data);
            //echo $this->getConnection()->last_query();die;
        }
        return (empty($query) == FALSE) ? $this->getConnection()->insert_id() : 0;
    }

    //cập nhật số lượt
    public function update($tableName, array $data, array $where = array()) {

        $sql = $this->getConnection()->update($tableName, $data, $where);
        // var_dump($this->getConnection()->last_query());die;
        return $this->getConnection()->affected_rows();
    }

    //cập nhật số lượt
    public function updateBatch($tableName, array $data, $id) {

        $sql = $this->getConnection()->update_batch($tableName, $data, $id);
        // var_dump($this->getConnection()->last_query());die;
        return $this->getConnection()->affected_rows();
    }

    /**
     * Like setData but will skip field validation
     *
     * @param array
     * @return $this
     */
    public function setDataWithoutValidation(array $data) {
        foreach ($data as $key => $value) {
            $this->data[$key] = $value;
        }

        return $this;
    }

    /**
     * @return array
     */
    public function getData() {
        return $this->data;
    }

    /**
     * @param mixed $value
     * @return mixed
     */
    protected function exportValue($value) {
        switch (true) {
            case $value === null:
                break;
            case $value instanceof ModelObject:
                $value = $value->exportData();
                break;
            case is_array($value):
                foreach ($value as $key => $sub_value) {
                    if ($sub_value === null) {
                        unset($value[$key]);
                    } else {
                        $value[$key] = $this->exportValue($sub_value);
                    }
                }
                break;
        }
        return $value;
    }

    /**
     * @return array
     */
    public function exportData() {
        return $this->exportValue($this->data);
    }

    /**
     * @return EmptyEnum
     */
    public static function getFieldsEnum() {
        return EmptyEnum::getInstance();
    }

    /**
     * @return array
     */
    public static function getFields() {
        return static::getFieldsEnum()->getValues();
    }

    /**
     * @return string
     */
    public static function className() {
        return get_called_class();
    }

    public static function isJson($string) {
        json_decode($string);
        return (json_last_error() == JSON_ERROR_NONE);
    }

    public function getEndPoint() {
        return "model";
    }

}
