<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace GraphApi\Object\Values;

class InviteRoles {

    /**
     * if maximum == -1 không giới hạn số lần invite không tính quà
     * 
     * @var int
     */
    static $MAXIMUM = -1;
    
    /**
     *Giới hạng mỗi ngày được invite tối đa
     * 
     * @var int
     */
    static $MAX = 100;
    /**
     * if limit == true thì user đặt max sẽ không được invite tiếp    
     * @var type 
     */
    static $LIMIT = true;
    /**
     * if count == 0 never
     * 
     * @var int
     */
    static $COUNT_DOWN = 0;
    
    const MAX_INVITE = 40;
    
    static $TITLE = "Thể Lực";

}
