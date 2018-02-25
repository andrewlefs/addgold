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

class PaymentStyleModels extends ModelObject implements ModelObjectInterface {

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
    public function getStyle(array $apps, array $fields = array(), array $group = array()) {
        $keyId = $this->getController()->getMemcacheObject()->genCacheId(__CLASS__ . __FUNCTION__ . json_encode($apps));
        $queryResult = $this->getController()->getMemcacheObject()->getMemcache($keyId, $this->getEndPoint());
        if ($queryResult == false) {
            $query = $this->getConnection()->select(count($fields) == 0 ? '*' : implode(',', $fields))
                    ->where($apps)
                    ->group_by($group)
                    ->get(ModelEnum::PAYMENT_STYLE);

            //echo $this->getConnection()->last_query();die;
            $queryResult = ($query != FALSE) ? $query->row_array() : FALSE;
            $this->getController()->getMemcacheObject()->saveMemcache($keyId, $queryResult, $this->getEndPoint(), 24 * 3600);
        }
        
        return $queryResult;
    }

    public function getEndPoint() {
        return "PaymentStyle";
    }

}
