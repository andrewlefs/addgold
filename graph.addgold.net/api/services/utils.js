var md5 = require('md5');

module.exports = {
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },

    generateAccessToken(params){
        var args = {
            hash: md5(Math.floor(Date.now() / 1000) + Math.floor((Math.random() * 999) + 100)),
            msi_id: params.msi_id,
            account_id: params.msi_id,
            id: params.account_id,
            device_id: params.device_id
        }
        return base64.encode(JSON.stringify(args));
    },
    getValue(params){
        return _.transform(params, function (result, value, key) {
            result.push(value);
        }, []);
    },
    genTransactionId(){
        return Math.floor((Math.random() * 999) + 100) + "" + Math.floor(Date.now());
    }
}
