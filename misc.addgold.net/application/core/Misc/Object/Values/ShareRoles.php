<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace GraphApi\Object\Values;

use GraphApi\Object\Fields\ScopeFields;

class ShareRoles {

    /**
     * if maximum == -1 không giới hạn số lần share không tính quà
     * 
     * @var int
     */
    static $MAXIMUM = -1;

    /**
     * Giới hạng mỗi ngày được share tối đa
     * 
     * @var int
     */
    static $MAX = 5;

    /**
     * if limit == true thì user đặt max sẽ không được share tiếp    
     * @var type 
     */
    static $LIMIT = true;

    /**
     * if count == 0 never
     * unit minute
     * @var int
     */
    static $COUNT_DOWN = 10;

    const WAITING = "waiting";

    static $TITLE = "Tinh Lực";
    static $OAUTH_PERMISION = array(
        ScopeFields::PUBLISH_ACTION
    );

}
