<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace GraphApi\Object\Values;

use GraphApi\Enum\AbstractEnum;

class MessageStrings extends AbstractEnum {

    const LIMIT_SHARE = "Bạn đã chia sẽ đủ [0] lần trong ngày";
    const ALERT_SHARE_SUCCES_NOT_AWARD = "Chia sẽ thành công nhưng đã hết lượt nhận quà trong ngày";
    const ALERT_SHARE_SUCCES = "Chia sẽ thành công";
    const ALERT_SHARE_COUNTDOWN = "Chia sẽ nhận quà thành công. Tuy nhiên thời gian nhận quà lượt kế tiếp còn [0]s.";
    const ALERT_SHARE_SUCCES_ERROR_AWARD = "Chia sẽ thành công, nhận vật phẩm thất bại, vui lòng thử lại";
    const ALERT_SHARE_DUPLICATE = "Chia sẽ thành công, nhưng bạn đã nhận quà trước đó. Vui lòng kiểm tra thư.";

    public static function Replace($str, array $args) {        
        for ($i = 0; $i < count($args); $i++) {
            $str = str_replace("[{$i}]", $args[$i], $str);
        }
        return $str;
    }

}
