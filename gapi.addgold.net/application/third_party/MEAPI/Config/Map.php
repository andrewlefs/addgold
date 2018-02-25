<?php

class MEAPI_Config_Map {

    public static function getController() {
        return array(
            'payment' => 'MEAPI_Controller_PaymentController',
            'game' => 'MEAPI_Controller_GameController',
            'report' => 'MEAPI_Controller_ReportController',
            'notify' => 'MEAPI_Controller_NotifyController',
            'paycard' => 'MEAPI_Controller_PayCardController',
            'cashout' => 'MEAPI_Controller_CashoutController',
            'bitcoin' => 'MEAPI_Controller_BitCoinController',
            'voucher' => 'MEAPI_Controller_VoucherController',
        );
    }

    public static function getFunction() {
        return array();
    }

}
