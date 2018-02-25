var listKeyCache = {
    ACCOUNT_INFO_PHONE: 'ACCOUNT_INFO:PHONE',
    ACCOUNT_INFO_ACCESS_TOKEN: 'ACCOUNT_INFO:ACCESS_TOKEN',
    PAYMENT_LIST: 'PAYMENT_INFO:GET_LIST',
    INIT_APP: 'INIT:INFORMATION',
}

module.exports = {
    getKeyPhone: function (phone) {
        return listKeyCache['ACCOUNT_INFO_PHONE'].concat('_', phone);
    },
    getKeyAccessToken: function (access_token) {
        return listKeyCache['ACCOUNT_INFO_ACCESS_TOKEN'].concat('_', access_token);
    },
    getKeyPaymentList: function (args) {
        return listKeyCache['PAYMENT_LIST'].concat('_', args.app, args.platform, args.channel);
    },
    getKeyInit: function(args){
        return listKeyCache['INIT_APP'].concat('_', args.app, args.platform, args.channel);
    }
}