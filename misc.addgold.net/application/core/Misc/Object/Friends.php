<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace GraphApi\Object;

use GraphApi\Object\Fields\FriendFields;

class Friends {

    private $data = array();
    private $changeData = array();
    private $length = 0;

    public function __construct() {
        
    }

    public function addData($name, array $value) {
        if (!array_key_exists($value[$name], $this->data) || $this->data[$value[$name]] !== $value) {
            //var_dump($this->data);
            $this->data[$value[$name]] = $this->length++;
            $this->changeData[] = $value;
        }
    }

    public static function parseImageId($url) {
        if ($url == FALSE)
            return "";
        $urls = parse_url($url);
        $path = $urls["path"];
        $paths = explode("/", $path);
        $file_img = $paths[count($paths) - 1];
        $parseFileNameImages = explode("_", $file_img);
        $imgid = $parseFileNameImages[1];
        return $imgid;
    }

    public function getLength() {
        return $this->length;
    }

    public function getData() {
        return $this->data;
    }

    public function getChangeData() {
        return $this->changeData;
    }

    //merge data
    /**
     * @return string
     */
    protected function getEndpoint() {
        return 'friends';
    }

}
