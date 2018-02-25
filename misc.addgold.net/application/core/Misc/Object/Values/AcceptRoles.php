<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace GraphApi\Object\Values;

class AcceptRoles {
     /**
     * if maximum == -1 không giới hạn số lần share không tính quà
     * 
     * @var int
     */
    static $MAXIMUM = -1;
    
    /**
     *Giới hạng mỗi ngày được share tối đa
     * 
     * @var int
     */
    static $MAX = 10;
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
    static $COUNT_DOWN = 0;
    
    const WAITING = "waiting";
    
    const LIMIT_DAY = 3;
    
    static $TITLE = "Thể Lực";
}
