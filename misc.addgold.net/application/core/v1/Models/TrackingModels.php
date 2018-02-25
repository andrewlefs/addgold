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

class TrackingModels extends ModelObject implements ModelObjectInterface {

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

    public function addTrack(array $data) {
        $data["create_date"] = date("Y-m-d H:i:s", time());
        return parent::insert(ModelEnum::TRACKING, $data);
    }
   
    public function addTrackForward(array $data) {
        $data["create_date"] = date("Y-m-d H:i:s", time());
        return parent::insert(ModelEnum::TRACKING_FORWARD, $data);
    }
    public function getEndPoint() {
        return __CLASS__;
    }

}
