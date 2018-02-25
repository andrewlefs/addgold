var _ = require('lodash');
var md5 = require('md5');
//var Redis = require('ioredis');

module.exports = function (req, res, next) {
    var params = req.allParams();

    if (validRequesst(params) == false) {
        console.log('INVALID_REQUEST 1');
        return res.toJSON('INVALID_REQUEST', {params: params}, true);
    }

    var privateKey = 'E7I2YXVIADSQXWTI';
    var otp = totp.genOTP(privateKey);

    var rawValue = generateToken(params, otp, privateKey);
    //var rawValue = generateToken(params, headers.otp, privateKey);
    decryptRequest(params, privateKey).then(response => {
        req.requestParams = response;


        if (params.token == md5(rawValue)) {
            req.options.criteria = {};
            req.options.criteria.blacklist = ['otp', 'token', 'q', 'limit', 'skip', 'sort'];
            req.options.where = _.omit(response, ['limit', 'skip', 'sort']);
            req.options.limit = response['limit'];
            req.options.skip = response['skip'];
            req.options.sort = response['sort'];
            req.options.populate = response['populate'];

            return next();
        } else {
            return res.toJSON('INVALID_TOKEN', {
                    raw: rawValue,
                    validToken: md5(rawValue),
                    requesToken: params.token,
                    otp: otp,
                    time: Math.floor(Date.now() / 1000)
                },
                true
            );
        }
    }, error => {
        console.log('INVALID_REQUEST 2');
        return res.toJSON('INVALID_REQUEST', {params: params}, true);
    });

}
function validRequesst(params) {
    if (_.isEmpty(params.q) ||
        _.isEmpty(params.otp) ||
        _.isEmpty(params.token)) {
        return false;
    }
    return true;
}

function generateToken(params, otp, private_key) {
    return decodeURIComponent(params.q) + otp + private_key;
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
