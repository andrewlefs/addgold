<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Misc\Models;

use Misc\Enum\AbstractEnum;

class ModelEnum extends AbstractEnum {

    const SCOPE_HASH_KEY = "scopes";
    const TABS = "tab_configs";
    const APP_CONFIGS = "app_configs";
    const PAYMENT_SERVICE = "payment_services";
    const PAYMENT_SERVICE_GROUP = "payment_service_groups";
    const PAYMENT_PAY_LOG = "payment_pay_logs";
    const PAYMENT_RECHARGE_LOG = "payment_recharge_logs";
    const PAYMENT_STYLE = "payment_styles";
    const PAYMENT_LOG = "payment_logs";
    const GSV_INFO = "gsv_info";
    const TRACKING = "trackings";
    const TRACKING_FORWARD = "tracking_forwards";
    const GSV_CONFIG = "gsv_config";
    const MOMO_TRANSACTION = "payment_transaction";
    const MOMO_MAP_VALUE = "momo_map_values";
    const PAY_GAME_LIST = "pay_game_list";
    const PAYMENT_ITEMS = "payment_card_types";
    const PAYMENT_TRANSACTION = "payment_transaction";
    const PAYMENT_EXCHANGE = "payment_exchange_rate";
    const PAYMENT_GIFTCODE = "payment_giftcodes";
    const PAYMENT_EVENT = "payment_events";

    const EVENT_GIFTCODE = "event_giftcode";
    const EVENT_GIFTCODE_CAT = "event_giftcode_cat";
    const EVENT_GIFTCODE_HISTORY = "event_giftcode_history";

}
