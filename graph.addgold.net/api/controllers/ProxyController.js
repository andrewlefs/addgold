var axios = require('axios');
var md5 = require('md5');
var _ = require('lodash');

module.exports = {
    get: function (req, res) {
        var params = req.allParams();
        delete params['id'];
        var control = params.control;
        var func = params.func;
        
        delete params["control"];
        delete params["func"];
        
        if (_.isEmpty(control) || _.isEmpty(func)) {
            res.json("INVALID_PARAMS");
        }
        
        App.findOne({app: params.app}).then((result) => {
            if (_.isUndefined(result) == true) {
                res.json("INVALID_APP");
            }
            
            var app = params.app;
            this.makeRequest(params, result, control, func).then(request => {
                var linkAPI = `http://localhost:1337/${control}/${func}`;
                
                axios.get(linkAPI, request.api.requestData).then(function (response) {
                    if (_.isObject(response.data) == true) {
                        res.json(response.data);
                    } else {
                        App.findOne({app: app}).exec((err, appInfo) => {
                            var privateKey = appInfo.private_key;
                            var responseData = {
                                response: {
                                    url: linkAPI,
                                    raw: response.data,
                                    data: JSON.parse(cryptoEncrypt.decrypt(response.data, privateKey))
                                },
                                request: request,
                            };
                            if (_.isEmpty(req.headers.env) == false && req.headers.env == 'dev') {
                                res.json(responseData);
                            } else {
                                res.json(responseData.response.data);
                            }
                        });
                    }
                }).catch(function (response) {
                    res.json(response);
                });
            });
        }, error => {
            res.json(error);
        });
    },
    makeRequest: function (params, result) {
        return new Promise((resolve, reject) => {
            var app = params.app;
            delete params["app"];
            
            var json = JSON.stringify(params);
            var otp = totp.genOTP(result.private_key);
            var privateKey = result.private_key;
            var encryptedData = cryptoEncrypt.encrypt(json, privateKey);
            
            var validToken = generateToken(encryptedData, otp, privateKey);
            var requestData = {
                params: {
                    q: encodeURIComponent(encryptedData),
                },
                headers: {
                    app: app,
                    otp: otp,
                    token: validToken
                }
            }
            
            resolve({
                proxy: {
                    params: params,
                    meta: {
                        private_key: privateKey,
                        otp: otp,
                    },
                },
                api: {
                    JSON: json,
                    encrypted: encryptedData,
                    requestData,
                }
            });
        }, error => {
            reject(error);
        });
    }
}
function generateToken(encryptedData, otp, private_key) {
    return md5(encryptedData + otp + private_key);
}
