<?php

namespace Misc\Language;

use Misc\Enum\Language;

class vi extends \ArrayObject {

    //$language["data_invalid"] = "Invalid data.";
    public function __construct() {

        $language[Language::INVALID_DATA] = "Dũ liệu không hợp lệ.";
        $language[Language::BUTTON_NEXT] = "Tiếp tục";
        $language[Language::ACCESS_TOKEN_EXPIRE] = "Tạm thời đăng nhập đã hết hạn vui lòng thử lại.";
        $language[Language::EMPTY_BTCE] = "Vui lòng nhập số BTC-E Code.";
        $language[Language::BTC_COIN_FILTER] = "Hệ thống tạm thời chỉ cho phép đổi BTC-E Code USD.";
        $language[Language::SYSTEM_ERROR] = "Lỗi hệ thống vui lòng thử lại sau";
        $language[Language::AMOUNT_INVALID] = "Mệnh giá không hợp lệ.";
        $language[Language::RECHARGE_FAILED] = "Nạp tiền vào game thất bại.";
        $language[Language::SUBMIT_INVALID] = "Thao tác không hợp lệ.";
        $language[Language::SERVICE_INVALID] = "Dịch vụ chưa sẵn sàn";
        $language[Language::NOT_ENUOGH_DATA] = "Dữ liệu không đủ để thực hiện thao tác này";
        $language[Language::SYSTEM_BTC_ERROR] = "Hệ thống nạp BTC-E lỗi";
        $language[Language::RECHARGE_SUCCESS] = "Nạp tiền thành công";
        $language[Language::EMPTY_SERIAL] = "Serial không được bổ trống";
        $language[Language::EMPTY_PIN] = "Pin không được bổ trống";
        $language[Language::EMPTY_VOUCHER] = "Voucher không được bổ trống";
        parent::__construct($language);
    }

}
