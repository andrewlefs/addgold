var md5 = require('md5');

module.exports = {
    verify_access_token: function (req, res) {
        var params = req.allParams();
        var needles = ['access_token'];

        if (validateRequest.required(params, needles, true) == false) {
            return res.toJSON('INVALID_PARAMS', null, true);
        }

        var keyCache = redisKey.getKeyAccessToken(md5(params.access_token));
        console.log(keyCache);

        async.waterfall([

            /*
            function (callback) {

                redisCache.get(keyCache).then(resultInitCache => {

                    if (_.isEmpty(resultInitCache) == true) {
                        console.log('CAHED null');
                        callback(null);
                    } else {
                        console.log('SHOW CAHED');
                        resultInitCache = JSON.parse(resultInitCache);
                        callback("REDIS", resultInitCache);
                    }

                }, error => {
                    console.log('CAHED null 2');
                    callback(null);
                });
            },
            */

            function (callback) {
                findAccessToken(callback);
            },
            function (accessTokenInfo, callback) {
                findMSIService(accessTokenInfo, callback);
            },
            function (msiInfo, callback) {
                findAccount(msiInfo, callback);
            }
        ], function (err, accountInfo) {
            if (err && err != 'REDIS') {
                return res.toJSON(err, null, true);
            }
            else {
                params.app = accountInfo.app;
                params.account_id = accountInfo.account;

                //console.log("verify Token");
                redisCache.set(keyCache, accountInfo);
                console.log('SET CACHED');
                activityService.verify(req, res, {
                    params: params,
                    account_id: accountInfo.account,
                    type: "verify"
                }, function (err, result) {
                    return res.toJSON('VERIFY_ACCESS_TOKEN_SUCCESS', accountInfo, true);
                });

            }
        });


        function getMinutesBetweenDates(startDate, endDate) {
            var diff = endDate.getTime() - startDate.getTime();
            return (diff / 60000);
        }


        // FIND AcessToken
        function findAccessToken(callback) {

            AccessToken.findOne({hash: md5(params.access_token)}).then((result) => {
                if (_.isEmpty(result)) {
                    callback("VERIFY_ACCESS_TOKEN_FAIL");
                } else {
                    callback(null, result);
                }
            }, error => {
                callback("VERIFY_ACCESS_TOKEN_FAIL");
            })
        }

        // FIND MSIService
        function findMSIService(accessTokenInfo, callback) {
            var MSIService = 'msiservice' + accessTokenInfo.service_id;


             var today = new Date();
             var lasttemp = new Date(accessTokenInfo.createdAt);
             if(accessTokenInfo.createdAt != null && getMinutesBetweenDates(lasttemp,today) > 43829 ){
                 callback('VERIFY_ACCESS_TOKEN_FAIL');
             }else if (sails.models[MSIService]) {
                sails.models[MSIService].findOne({msi_id: accessTokenInfo.msi_id}).then((result) => {
                    if (_.isEmpty(result) == true) {
                        callback('VERIFY_ACCESS_TOKEN_FAIL');
                    } else {
                        result.app = accessTokenInfo.service_id;
                        callback(null, result);
                    }
                }, error => {
                    callback("VERIFY_ACCESS_TOKEN_FAIL");
                });
            }
            else {
                callback("INVALID_TOKEN");
            }
        }

        // FIND Account
        function findAccount(msiInfo, callback) {
            Accounts.findOne({account_id: msiInfo.account_id}).then((result) => {
                if (_.isEmpty(result) == true) {
                    callback('VERIFY_ACCESS_TOKEN_FAIL');
                } else {
                    callback(null, {
                        //id: result.account_id,
                        account_id: msiInfo.msi_id,
                        account: msiInfo.account_id,
                        app: msiInfo.app
                    });
                }
            }, error => {
                callback("VERIFY_ACCESS_TOKEN_FAIL");
            })
        }
    },

    verify_access_token_v2: function (req, res) {
        var params = req.allParams();
        var needles = ['access_token'];

        if (validateRequest.required(params, needles, true) == false) {
            return res.toJSON('INVALID_PARAMS', null, true);
        }

        async.waterfall([
            function (callback) {
                findAccessToken(callback);
            },
            function (accessTokenInfo, callback) {
                findMSIService(accessTokenInfo, callback);
            },
            function (msiInfo, callback) {
                findAccount(msiInfo, callback);
            }
        ], function (err, accountInfo) {
            if (err) {
                return res.toJSON(err, null, true);
            }
            else {
                return res.toJSON('VERIFY_ACCESS_TOKEN_SUCCESS', accountInfo, true);
            }
        });

        // FIND AcessToken
        function findAccessToken(callback) {
            AccessToken.findOne({hash: md5(params.access_token)}).then((result) => {
                if (_.isEmpty(result)) {
                    callback("VERIFY_ACCESS_TOKEN_FAIL");
                } else {
                    callback(null, result);
                }
            }, error => {
                callback("VERIFY_ACCESS_TOKEN_FAIL");
            })
        }

        // FIND MSIService
        function findMSIService(accessTokenInfo, callback) {
            var MSIService = 'msiservice' + accessTokenInfo.service_id;

            if (sails.models[MSIService]) {
                sails.models[MSIService].findOne({msi_id: accessTokenInfo.msi_id}).then((result) => {
                    if (_.isEmpty(result) == true) {
                        callback('VERIFY_ACCESS_TOKEN_FAIL');
                    } else {
                        callback(null, result);
                    }
                }, error => {
                    callback("VERIFY_ACCESS_TOKEN_FAIL");
                });
            }
            else {
                callback("INVALID_TOKEN");
            }
        }

        // FIND Account
        function findAccount(msiInfo, callback) {
            Accounts.findOne({account_id: msiInfo.account_id}).then((result) => {
                if (_.isEmpty(result) == true) {
                    callback('VERIFY_ACCESS_TOKEN_FAIL');
                } else {
                    callback(null, {
                        id: result.account_id,
                        account_id: msiInfo.msi_id,
                        account: result.account,
                        email: result.email,
                        channel: result.channel,
                        device_id: result.device_id
                    });
                }
            }, error => {
                callback("VERIFY_ACCESS_TOKEN_FAIL");
            })
        }
    },


    verify_access_token_get_channel: function (req, res) {
        var params = req.allParams();
        var needles = ['access_token'];

        if (validateRequest.required(params, needles, true) == false) {
            return res.toJSON('INVALID_PARAMS', null, true);
        }

        async.waterfall([
            function (callback) {
                findAccessToken(callback);
            },
            function (accessTokenInfo, callback) {
                findMSIService(accessTokenInfo, callback);
            },
            function (accessTokenInfo, callback) {
                findMSIServiceOther(accessTokenInfo, callback);
            },

            function (msiInfo, callback) {
                findAccount(msiInfo, callback);
            }
        ], function (err, accountInfo) {
            if (err) {
                return res.toJSON(err, null, true);
            }
            else {
                return res.toJSON('VERIFY_ACCESS_TOKEN_SUCCESS', accountInfo, true);
            }
        });

        // FIND AcessToken
        function findAccessToken(callback) {
            AccessToken.findOne({hash: md5(params.access_token)}).then((result) => {
                if (_.isEmpty(result)) {
                    callback("VERIFY_ACCESS_TOKEN_FAIL");
                } else {
                    callback(null, result);
                }
            }, error => {
                callback("VERIFY_ACCESS_TOKEN_FAIL");
            })
        }

        // FIND MSIService
        function findMSIService(accessTokenInfo, callback) {
            var MSIService = 'msiservice' + accessTokenInfo.service_id;

            if (sails.models[MSIService]) {
                sails.models[MSIService].findOne({msi_id: accessTokenInfo.msi_id}).then((result) => {
                    if (_.isEmpty(result) == true) {
                        callback('VERIFY_ACCESS_TOKEN_FAIL');
                    } else {
                        callback(null, result);
                    }
                }, error => {
                    callback("VERIFY_ACCESS_TOKEN_FAIL");
                });
            }
            else {
                callback("INVALID_TOKEN");
            }
        }

        // FIND MSIService
        function findMSIServiceOther(accessTokenInfo, callback) {
            var MSIService = 'msiservice' + params.app_id;


            if (sails.models[MSIService]) {
                sails.models[MSIService].findOne({account_id: accessTokenInfo.account_id}).then((result) => {
                    if (_.isEmpty(result) == true) {
                        callback('ACCOUNT_EXITS');
                    } else {
                        callback(null, result);
                    }
                }, error => {
                    callback("VERIFY_ACCESS_TOKEN_FAIL");
                });
            }
            else {
                callback("INVALID_TOKEN");
            }
        }


        // FIND Account
        function findAccount(msiInfo, callback) {
            //console.log(msiInfo);
            Accounts.findOne({account_id: msiInfo.account_id}).then((result) => {
                if (_.isEmpty(result) == true) {
                    callback('VERIFY_ACCESS_TOKEN_FAIL');
                } else {
                    callback(null, {
                        id: result.account_id,
                        account_id: msiInfo.msi_id,
                        account: result.account,
                        email: result.email,
                        channel: result.channel,
                        device_id: result.device_id,
                        type: result.type,
                        platform: result.platform
                    });
                }
            }, error => {
                callback("VERIFY_ACCESS_TOKEN_FAIL");
            })
        }
    },


    verify_access_token_test: function (req, res) {
        var params = req.allParams();
        var needles = ['access_token'];

        if (validateRequest.required(params, needles, true) == false) {
            return res.toJSON('INVALID_PARAMS', null, true);
        }

        var keyCache = redisKey.getKeyAccessToken(md5(params.access_token));
        console.log(keyCache);

        async.waterfall([

            function (callback) {

                redisCache.get(keyCache).then(resultInitCache => {

                    if (_.isEmpty(resultInitCache) == true) {
                        console.log('CAHED null');
                        callback(null);
                    } else {
                        console.log('SHOW CAHED');
                        resultInitCache = JSON.parse(resultInitCache);
                        callback("REDIS", resultInitCache);
                    }

                }, error => {
                    console.log('CAHED null 2');
                    callback(null);
                });
                /*
                 neu ton tai redis
                 thi return luon cho nay`
                 nguoc lai khong ton tai trong redis thi tips tuc thuc hien cai duoi
                 */
            },

            function (callback) {
                findAccessToken(callback);
            },
            function (accessTokenInfo, callback) {
                findMSIService(accessTokenInfo, callback);
            },
            function (msiInfo, callback) {
                findAccount(msiInfo, callback);
            }
        ], function (err, accountInfo) {
            console.log(err);
            if (err && err != 'REDIS') {
                return res.toJSON(err, null, true);
            }
            else {
                params.app = accountInfo.app;
                params.account_id = accountInfo.account;

                //console.log("verify Token");
                redisCache.set(keyCache, accountInfo);
                console.log('SET CACHED');
                activityService.verify(req, res, {
                    params: params,
                    account_id: accountInfo.account,
                    type: "verify"
                }, function (err, result) {
                    return res.toJSON('VERIFY_ACCESS_TOKEN_SUCCESS', accountInfo, true);
                });

            }
        });


        // FIND AcessToken
        function findAccessToken(callback) {
            AccessToken.findOne({hash: md5(params.access_token)}).then((result) => {
                if (_.isEmpty(result)) {
                    callback("VERIFY_ACCESS_TOKEN_FAIL");
                } else {
                    callback(null, result);
                }
            }, error => {
                callback("VERIFY_ACCESS_TOKEN_FAIL");
            })
        }

        // FIND MSIService
        function findMSIService(accessTokenInfo, callback) {
            var MSIService = 'msiservice' + accessTokenInfo.service_id;

            if (sails.models[MSIService]) {
                sails.models[MSIService].findOne({msi_id: accessTokenInfo.msi_id}).then((result) => {
                    if (_.isEmpty(result) == true) {
                        callback('VERIFY_ACCESS_TOKEN_FAIL');
                    } else {
                        result.app = accessTokenInfo.service_id;
                        callback(null, result);
                    }
                }, error => {
                    callback("VERIFY_ACCESS_TOKEN_FAIL");
                });
            }
            else {
                callback("INVALID_TOKEN");
            }
        }

        // FIND Account
        function findAccount(msiInfo, callback) {
            Accounts.findOne({account_id: msiInfo.account_id}).then((result) => {
                if (_.isEmpty(result) == true) {
                    callback('VERIFY_ACCESS_TOKEN_FAIL');
                } else {
                    callback(null, {
                        //id: result.account_id,
                        account_id: msiInfo.msi_id,
                        account: msiInfo.account_id,
                        app: msiInfo.app
                    });
                }
            }, error => {
                callback("VERIFY_ACCESS_TOKEN_FAIL");
            })
        }

    }
};
