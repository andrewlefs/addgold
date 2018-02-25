var _ = require('lodash');
var md5 = require('md5');
//var Redis = require('ioredis');

module.exports = function (req, res, next) {
    var params = req.allParams();
    //console.log('params', params);

    if (validRequesst(params) == false) {
        return res.toJSON('INVALID_REQUEST', {params: params}, true);
    }

    var privateKey = 'E7I2YXVIADSQXWTI';
    var otp = totp.genOTP(privateKey);


    token = params.token;
    var dataparams = joinObj(params);
    
    var rawValue = generateToken(dataparams, otp, privateKey);
    //var rawValue = generateToken(params, headers.otp, privateKey);
        req.requestParams = params;

        //token =md5(rawValue);
        if (token == md5(rawValue)) {
            req.options.criteria = {};
            req.options.criteria.blacklist = ['otp', 'token', 'q', 'limit', 'skip', 'sort'];
            req.options.where = _.omit(params, ['limit', 'skip', 'sort']);
            return next();
        } else {
            return res.toJSON('INVALID_TOKEN', {
                    raw: rawValue,
                    validToken: md5(rawValue),
                    requesToken: token,
                    otp: otp,
                    time: Math.floor(Date.now() / 1000)
                },
                true
            );
        }


}
function joinObj(a) {
    delete a.otp;
    delete a.token;
    delete a.app;
    var joined = [];
    for (var key in a) {
        var val = a[key]; // gets the value by looking for the key in the object
        joined.push(val);
    }
    return joined.join("");
}
function validRequesst(params) {
    if (_.isEmpty(params.otp) ||
        _.isEmpty(params.token)) {
        return false;
    }
    return true;
}

function generateToken(params, otp, private_key) {
    return decodeURIComponent(params) + otp + private_key;
}

function decryptRequest(params, privateKey) {
    return new Promise((resolve, reject) => {

        try {
            var dataDecrypted = cryptoEncrypt.decrypt(decodeURIComponent(params.q), privateKey);
            resolve(JSON.parse(dataDecrypted));
        }
        catch (error) {
            reject(error);
        }
    });
}
