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

class AppHashKeyModels extends ModelObject implements ModelObjectInterface, AppHashKeyModelInterface {

    public function __construct(array $config, $group = true) {
        parent::__construct($config, $group);
    }

    /**
     * Lấy real key hash data receiver
     * @param int $app
     */
    public function getScope(array $apps, array $fields = array(), $cache = false) {
        $keyId = $this->getController()->getMemcacheObject()->genCacheId(__CLASS__ . __FUNCTION__ . json_encode($apps) . json_encode($fields));
        $result = $this->getController()->getMemcacheObject()->getMemcache($keyId, $this->getEndPoint());        
        if ($result == false || $cache == false) {
            $query = $this->getConnection()->select(count($fields) == 0 ? '*' : implode(',', $fields))
                    ->where($apps)
                    ->get(ModelEnum::SCOPE_HASH_KEY);
            $result = ($query != FALSE) ? $query->row_array() : FALSE;
            $this->getController()->getMemcacheObject()->saveMemcache($keyId, $result, $this->getEndPoint(), 24 * 3600);
        }
        return $result;
    }

    /**
     * Lấy real key hash data receiver
     * @param int $app
     */
    public function getHashKeyList(array $fields = array()) {
        $keyId = $this->getController()->getMemcacheObject()->genCacheId(__CLASS__ . __FUNCTION__ . json_encode($fields));
        $result = $this->getController()->getMemcacheObject()->getMemcache($keyId, $this->getEndPoint());
        if ($result == false) {
            $query = $this->getConnection()->select(count($fields) == 0 ? '*' : implode(',', $fields))
                    ->get(ModelEnum::SCOPE_HASH_KEY);
            $result = ($query != FALSE) ? $query->result_array() : FALSE;
            $this->getController()->getMemcacheObject()->saveMemcache($keyId, $result, $this->getEndPoint(), 24 * 3600);
        }
        return $result;
    }

}
