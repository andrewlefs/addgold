var md5 = require('md5');
var _ = require('lodash');
var Redis = require('ioredis');
var redis = new Redis();

module.exports = {
    authorize: function (req, res) {
        var params = req.requestParams;
        var needles = ['account', 'password'];

		console.log('authorize');
		console.log(params);
		
		if (validateRequest.required(params, needles) == false) {
            return res.toJSON('INVALID_PARAMS');
        }
        params.account = _.toLower(params.account);

        async.waterfall([
            function(callback) {
                findAccount(callback);
            },
            function(accountInfo, callback) {
                findMSIService(accountInfo, callback);
            },
            function(accountInfo, msiInfo, callback) {
                createAccessToken(accountInfo, msiInfo, callback);
            }
        ],function(err, tokenInfo) {
            if(err){
                return res.toJSON(err);
            }
            else{
                return res.toJSON('AUTHORIZE_SUCCESS', tokenInfo);
            }
        });

        // AUTHORIZE
        function findAccount(callback){
            Accounts.findOne({account: params.account}).then((result) => {
                if (_.isEmpty(result)) {
                    callback('AUTHORIZE_FAIL');
                } else {
                    callback(null, result);
                }
            }, error => {
                callback('AUTHORIZE_FAIL');
            });
        }

        // FIND MSIService
        function findMSIService(accountInfo, callback){
            if (accountInfo.password == md5(params.password)) {
                var MSIService = 'msiservice' + params.app;

                if(sails.models[MSIService]){
                    sails.models[MSIService].findOne({account_id: accountInfo.account_id}).then((result) => {
                        if (_.isEmpty(result)) {
                            var msiData = {
                                account_id: accountInfo.account_id,
                                channel: params.channel,
                                platform: params.platform
                            };
                            sails.models[MSIService].create(msiData).then((msiInfo) => {
                                accountInfo.list_service = accountInfo.list_service || [];
                                accountInfo.list_service.push({
                                    app: params.app,
                                    msi_id: msiInfo.msi_id,
                                    createdAt: msiInfo.createdAt
                                });

                                Accounts.update({account_id: accountInfo.account_id}, {list_service: accountInfo.list_service}).then(result => {
                                    callback(null, accountInfo, msiInfo);
                                }, error => {
                                    callback('AUTHORIZE_FAIL');
                                });
                            }, error => {
                                callback('AUTHORIZE_FAIL');
                            });
                        }
                        else{
                            callback(null, accountInfo, result);
                        }
                    }, error => {
                        callback('AUTHORIZE_FAIL');
                    });
                }
                else{
                    callback("INVALID_TOKEN");
                }
            }
            else{
                callback('AUTHORIZE_FAIL');
            }
        }

        // SET ACCESSTOKEN
        function createAccessToken(accountInfo, msiInfo, callback){
            var accessToken = utils.generateAccessToken({msi_id: msiInfo.msi_id, account_id: accountInfo.account_id});
            var dataToken = AccessToken.getSchema(params, msiInfo.msi_id, accountInfo.account_id, accessToken);
            var MSIService = 'msiservice' + params.app;

            if(accountInfo.status == 'lock'){
                callback('ACCOUNT_LOCKED');
            }
            else{
                AccessToken.create(dataToken).then((resultAccessToken) => {
                    var tokenInfo = {
                        account_id: accountInfo.account_id,
                        access_token: resultAccessToken.access_token,
                        type: 'default'
                    };

                    //last login
                    sails.models[MSIService].update({msi_id: msiInfo.msi_id}, {last_login: new Date()}).then(msiInfo => {
                        callback(null, tokenInfo);
                    }, error => {
                        callback("AUTHORIZE_FAIL");
                    });
                }, error => {
                    callback('AUTHORIZE_FAIL');
                });
            }
        }
    },

    authorize_facebook: function (req, res) {
        var params = req.requestParams;
        var needles = ['fb_access_token'];

        if (validateRequest.required(params, needles) == false) {
            return res.toJSON('INVALID_PARAMS');
        }

        facebookSDK.verify_token(params.fb_access_token).then(response => {
            async.waterfall([
                function(callback) {
                    findsocialFacebook(callback);
                },
                function(accountInfo, callback) {
                    findMSIService(accountInfo, callback);
                },
                function(accountInfo, msiInfo, callback) {
                    createAccessToken(accountInfo, msiInfo, callback);
                }
            ],function(err, tokenInfo) {
                if(err){
                    return res.toJSON(err);
                }
                else{
                    return res.toJSON('AUTHORIZE_FACEBOOK_SUCCESS', tokenInfo);
                }
            });

            // FIND socialFacebook
            function findsocialFacebook(callback){
                SocialFacebook.findOne({facebook_token: response.token_for_business}).then((result) => {
                    if (_.isEmpty(result)) {
                        params.type = 'facebook';
                        params.google_aid = (!_.isUndefined(req.trackingInfo.google_aid) && !_.isEmpty(req.trackingInfo.google_aid)) ? req.trackingInfo.google_aid : '';
                        Accounts.create(params).then((accountInfo) => {
                            SocialFacebook.create({
                                account_id: accountInfo.account_id,
                                facebook_id: response.id,
                                facebook_token: response.token_for_business
                            }).then(result => {
                                callback(null, accountInfo)
                            }, error => {
                                callback('AUTHORIZE_FACEBOOK_FAIL');
                            });
                        }, error => {
                            callback(error);
                        });
                    } else {
                        Accounts.findOne({account_id: result.account_id}).then((accountInfo) => {
                            if (_.isEmpty(accountInfo)) {
                                callback('AUTHORIZE_FACEBOOK_FAIL');
                            } else {
                                callback(null, accountInfo);
                            }
                        }, error => {
                            callback('AUTHORIZE_FACEBOOK_FAIL');
                        });
                    }
                }, error => {
                    callback('AUTHORIZE_FACEBOOK_FAIL');
                });
            }

            // FIND MSIService
            function findMSIService(accountInfo, callback){
                var MSIService = 'msiservice' + params.app;

                if(sails.models[MSIService]){
                    sails.models[MSIService].findOne({account_id: accountInfo.account_id}).then((result) => {
                        if (_.isEmpty(result)) {
                            var msiData = {
                                account_id: accountInfo.account_id,
                                channel: params.channel,
                                platform: params.platform
                            };
                            sails.models[MSIService].create(msiData).then((msiInfo) => {
                                accountInfo.list_service = accountInfo.list_service || [];
                                accountInfo.list_service.push({
                                    app: params.app,
                                    msi_id: msiInfo.msi_id,
                                    createdAt: msiInfo.createdAt
                                });

                                Accounts.update({account_id: accountInfo.account_id}, {list_service: accountInfo.list_service}).then(result => {
                                    callback(null, accountInfo, msiInfo);
                                }, error => {
                                    callback('AUTHORIZE_FACEBOOK_FAIL');
                                });
                            }, error => {
                                callback('AUTHORIZE_FACEBOOK_FAIL');
                            });
                        }
                        else{
                            callback(null, accountInfo, result);
                        }
                    }, error => {
                        callback('AUTHORIZE_FACEBOOK_FAIL');
                    });
                }
                else{
                    callback("INVALID_TOKEN");
                }
            }

            // SET ACCESSTOKEN
            function createAccessToken(accountInfo, msiInfo, callback){
                var accessToken = utils.generateAccessToken({msi_id: msiInfo.msi_id, account_id: accountInfo.account_id});
                var dataToken = AccessToken.getSchema(params, msiInfo.msi_id, accountInfo.account_id, accessToken);
                var MSIService = 'msiservice' + params.app;

                if(accountInfo.status == 'lock'){
                    callback('ACCOUNT_LOCKED');
                }
                else{
                    AccessToken.create(dataToken).then((resultAccessToken) => {
                        var tokenInfo = {
                            account_id: accountInfo.account_id,
                            facebook_id: response.id,
                            access_token: resultAccessToken.access_token,
                            type: 'facebook'
                        };

                        //last login
                        sails.models[MSIService].update({msi_id: msiInfo.msi_id}, {last_login: new Date()}).then(msiInfo => {
                            callback(null, tokenInfo);
                        }, error => {
                            callback("AUTHORIZE_FACEBOOK_FAIL");
                        });
                    }, error => {
                        callback('AUTHORIZE_FACEBOOK_FAIL');
                    });
                }
            }
        }, error => {
            return res.toJSON('AUTHORIZE_FACEBOOK_FAIL');
        })
    },

    authorize_google: function (req, res) {
        var params = req.requestParams;
        var needles = ['gg_access_token'];

        if (validateRequest.required(params, needles) == false) {
            return res.toJSON('INVALID_PARAMS');
        }

        googleSDK.verify_token(params.gg_access_token).then(response => {
            async.waterfall([
                function(callback) {
                    findsocialGoogle(callback);
                },
                function(accountInfo, callback) {
                    findMSIService(accountInfo, callback);
                },
                function(accountInfo, msiInfo, callback) {
                    createAccessToken(accountInfo, msiInfo, callback);
                }
            ],function(err, tokenInfo) {
                if(err){
                    return res.toJSON(err);
                }
                else{
                    return res.toJSON('AUTHORIZE_GOOGLE_SUCCESS', tokenInfo);
                }
            });

            // FIND socialGoogle
            function findsocialGoogle(callback){
                SocialGoogle.findOne({google_id: response.id}).then((result) => {
					console.log(response.id);
                    if (_.isEmpty(result)) {
                        params.type = 'google';
                        params.google_aid = (!_.isUndefined(req.trackingInfo.google_aid) && !_.isEmpty(req.trackingInfo.google_aid)) ? req.trackingInfo.google_aid : '';
                        Accounts.create(params).then((accountInfo) => {
							console.log('flow_1');
							console.log(accountInfo);
                            SocialGoogle.create({
                                account_id: accountInfo.account_id,
                                google_id: response.id,
                            }).then(result => {
                                callback(null, accountInfo)
                            }, error => {
                                callback('AUTHORIZE_GOOGLE_FAIL');
                            });
                        }, error => {
                            callback(error);
                        });
                    } else {
						console.log('flow_2');
						console.log(result.account_id);
                        Accounts.findOne({account_id: result.account_id}).then((accountInfo) => {
							console.log('flow_3');
							console.log(accountInfo);
                            if (_.isEmpty(accountInfo)) {
                                callback('AUTHORIZE_GOOGLE_FAIL');
                            } else {
                                callback(null, accountInfo);
                            }
                        }, error => {
                            callback('AUTHORIZE_GOOGLE_FAIL');
                        });
                    }
                }, error => {
                    callback('AUTHORIZE_GOOGLE_FAIL');
                });
            }

            // FIND MSIService
            function findMSIService(accountInfo, callback){
                var MSIService = 'msiservice' + params.app;

                if(sails.models[MSIService]){
                    sails.models[MSIService].findOne({account_id: accountInfo.account_id}).then((result) => {
                        if (_.isEmpty(result)) {
                            var msiData = {
                                account_id: accountInfo.account_id,
                                channel: params.channel,
                                platform: params.platform
                            };
							console.log('flow_5');
							console.log(msiData);
								
                            sails.models[MSIService].create(msiData).then((msiInfo) => {
                                accountInfo.list_service = accountInfo.list_service || [];
                                accountInfo.list_service.push({
                                    app: params.app,
                                    msi_id: msiInfo.msi_id,
                                    createdAt: msiInfo.createdAt
                                });
								
								console.log('flow_4');
								console.log(accountInfo.account_id);
						
                                Accounts.update({account_id: accountInfo.account_id}, {list_service: accountInfo.list_service}).then(result => {
                                    callback(null, accountInfo, msiInfo);
                                }, error => {
                                    callback('AUTHORIZE_GOOGLE_FAIL');
                                });
                            }, error => {
                                callback('AUTHORIZE_GOOGLE_FAIL');
                            });
                        }
                        else{
                            callback(null, accountInfo, result);
                        }
                    }, error => {
                        callback('AUTHORIZE_GOOGLE_FAIL');
                    });
                }
                else{
                    callback("INVALID_TOKEN");
                }
            }

            // SET ACCESSTOKEN
            function createAccessToken(accountInfo, msiInfo, callback){
                var accessToken = utils.generateAccessToken({msi_id: msiInfo.msi_id, account_id: accountInfo.account_id});
                var dataToken = AccessToken.getSchema(params, msiInfo.msi_id, accountInfo.account_id, accessToken);
                var MSIService = 'msiservice' + params.app;

                if(accountInfo.status == 'lock'){
                    callback('ACCOUNT_LOCKED');
                }
                else{
					console.log('flow_6');
							console.log(dataToken);
                    AccessToken.create(dataToken).then((resultAccessToken) => {
                        var tokenInfo = {
                            account_id: accountInfo.account_id,
                            google_id: response.id,
                            access_token: resultAccessToken.access_token,
                            type: 'google'
                        };
						console.log('flow_7');
							console.log(tokenInfo);
                        //last login
                        sails.models[MSIService].update({msi_id: msiInfo.msi_id}, {last_login: new Date()}).then(msiInfo => {
                            callback(null, tokenInfo);
                        }, error => {
                            callback("AUTHORIZE_GOOGLE_FAIL");
                        });
                    }, error => {
                        callback('AUTHORIZE_GOOGLE_FAIL');
                    });
                }
            }
        }, error => {
            return res.toJSON('AUTHORIZE_GOOGLE_FAIL');
        })
    },

    register_quickly: function (req, res) {
        var params = req.requestParams;

        if (params.channel == "empty" || params.channel == "" ){
            params.channel = params.channel_cfg;
        }
		console.log('quickly');
		console.log(params);
		
        var needles = ['device_id'];

        if (validateRequest.required(params, needles) == false) {
            return res.toJSON('INVALID_PARAMS');
        }

        async.waterfall([
            function(callback) {
                findQuickAccount(callback);
            },
            function(accountInfo, callback) {
                findMSIService(accountInfo, callback);
            },
            function(accountInfo, msiInfo, callback) {
                createAccessToken(accountInfo, msiInfo, callback);
            }
        ],function(err, tokenInfo) {
            if(err){
                return res.toJSON(err);
            }
            else{
                activityService.reg(req, res, tokenInfo.account_id, function (err, result) {
                    if(err){
                        return res.toJSON('SERVER_MAINTENANCE');
                    }
                    else{
                        return res.toJSON('REGISTER_QUICKLY_SUCCESS', tokenInfo);
                    }
                });
            }
        });

        // FIND quickAccount
        function findQuickAccount(callback){
            QuickAccount.findOne({device_id: params.device_id}).then((result) => {
                if (_.isEmpty(result)) {

                    params.type = 'device';
                    params.google_aid = (!_.isUndefined(req.trackingInfo.google_aid) && !_.isEmpty(req.trackingInfo.google_aid)) ? req.trackingInfo.google_aid : '';
                    params.ip = {
                        user: !_.isUndefined(params.ip_user) ? params.ip_user : '',
                        public: req.headers['x-forwarded-for'] || req.connection.remoteAddress
                    };
                    Accounts.create(params).then((accountInfo) => {
                        QuickAccount.create({
                            account_id: accountInfo.account_id,
                            device_id: params.device_id,
                        }).then(result => {
                            callback(null, accountInfo)
                        }, error => {
                            callback('REGISTER_QUICKLY_FAIL');
                        });
                    }, error => {
                        callback(error);
                    });
                } else {
                    Accounts.findOne({account_id: result.account_id}).then((accountInfo) => {
                        if (_.isEmpty(result)) {
                            callback('REGISTER_QUICKLY_FAIL');
                        } else {
                            callback(null, accountInfo);
                        }
                    }, error => {
                        callback('REGISTER_QUICKLY_FAIL');
                    });
                }
            }, error => {
                callback('REGISTER_QUICKLY_FAIL');
            });
        }

        // FIND MSIService
        function findMSIService(accountInfo, callback){
            var MSIService = 'msiservice' + params.app;

            if(sails.models[MSIService]){
                sails.models[MSIService].findOne({account_id: accountInfo.account_id}).then((result) => {
                    if (_.isEmpty(result)) {
                        var msiData = {
                            account_id: accountInfo.account_id,
                            channel: params.channel,
                            platform: params.platform
                        };
                        sails.models[MSIService].create(msiData).then((msiInfo) => {
                            accountInfo.list_service = accountInfo.list_service || [];
                            accountInfo.list_service.push({
                                app: params.app,
                                msi_id: msiInfo.msi_id,
                                createdAt: msiInfo.createdAt
                            });

                            Accounts.update({account_id: accountInfo.account_id}, {list_service: accountInfo.list_service}).then(result => {
                                callback(null, accountInfo, msiInfo);
                            }, error => {
                                callback('REGISTER_QUICKLY_FAIL');
                            });
                        }, error => {
                            callback('REGISTER_QUICKLY_FAIL');
                        });
                    }
                    else{
                        callback(null, accountInfo, result);
                    }
                }, error => {
                    callback('REGISTER_QUICKLY_FAIL');
                });
            }
            else{
                callback("INVALID_TOKEN");
            }
        }

        // SET ACCESSTOKEN
        function createAccessToken(accountInfo, msiInfo, callback){
            var accessToken = utils.generateAccessToken({msi_id: msiInfo.msi_id, account_id: accountInfo.account_id});
            var dataToken = AccessToken.getSchema(params, msiInfo.msi_id, accountInfo.account_id, accessToken);
            var MSIService = 'msiservice' + params.app;

            if(accountInfo.status == 'lock'){
                callback('ACCOUNT_LOCKED');
            }
            else{
                AccessToken.create(dataToken).then((resultAccessToken) => {
                    var tokenInfo = {
                        account_id: accountInfo.account_id,
                        access_token: resultAccessToken.access_token,
                        type: 'device'
                    };

                    //last login
                    sails.models[MSIService].update({msi_id: msiInfo.msi_id}, {last_login: new Date()}).then(msiInfo => {
                        callback(null, tokenInfo);
                    }, error => {
                        callback("REGISTER_QUICKLY_FAIL");
                    });
                }, error => {
                    callback('REGISTER_QUICKLY_FAIL');
                });
            }
        }
    },

    register: function (req, res) {
	
        var params = req.requestParams;
        var needles = ['account', 'password', 'email'];

        if (params.channel == "empty" || params.channel == "" ){
            params.channel = params.channel_cfg;
        }

		console.log('register');
		console.log(params);
		
        if (validateRequest.required(params, needles) == false) {
            return res.toJSON('INVALID_PARAMS');
        }

        if (validateRequest.validAccount(params.account) == false) {
            return res.toJSON('ACCOUNT_NOT_VALID');
        }

        async.waterfall([
            function(callback) {
                findAccount({email: params.email}, function(err, result){
                    if(err == 'EMPTY'){
                        callback(null);
                    }
                    else{
                        callback('EMAIL_EXIST');
                    }
                });
            },
            function(callback) {
                findAccount({account: params.account}, function(err, result){
                    if(err == 'EMPTY'){
                        callback(null);
                    }
                    else{
                        callback('ACCOUNT_EXIST');
                    }
                });
            },
            function(callback) {
                createAccount(callback);
            },
            function(accountInfo, callback) {
                createMSIService(accountInfo, callback);
            },
            function(accountInfo, msiInfo, callback) {
                createAccessToken(accountInfo, msiInfo, callback);
            }
        ],function(err, tokenInfo) {
            if(err){
                return res.toJSON(err);
            }
            else{
                activityService.reg(req, res, tokenInfo.account_id, function (err, result) {
                    if(err){
                        return res.toJSON('SERVER_MAINTENANCE');
                    }
                    else{
                        return res.toJSON('REGISTER_SUCCESS', tokenInfo);
                    }
                });
            }
        });

        // FIND ACCOUNT
        function findAccount(where, callback){
            Accounts.findOne(where).then((result) => {
                if (_.isEmpty(result)) {
                    callback('EMPTY');
                } else {
                    callback(null, result);
                }
            }, error => {
                callback('REGISTER_FAIL');
            });
        }

        // CREATE ACCOUNT
        function createAccount(callback){
            params.google_aid = (!_.isUndefined(req.trackingInfo.google_aid) && !_.isEmpty(req.trackingInfo.google_aid)) ? req.trackingInfo.google_aid : '';
            params.ip = {
                user: !_.isUndefined(params.ip_user) ? params.ip_user : '',
                public: req.headers['x-forwarded-for'] || req.connection.remoteAddress
            };

            Accounts.create(params).then((result) => {
                //set ANTI_CHEAT_HACK_CREATE_ACCOUNT
                params.model = (!_.isNull(params.model) && !_.isUndefined(params.model)) ? params.model : '';
                var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
                var key_anti = 'ANTI_CHEAT_HACK_CREATE_ACCOUNT' + params.app + ip + params.platform + params.model;
                redis.set(key_anti, true, 'EX', 300);

                callback(null, result);
            }, error => {
                callback('REGISTER_FAIL');
            });
        }

        // CREATE MSIService
        function createMSIService(accountInfo, callback){
            var MSIService = 'msiservice' + params.app;

            if(sails.models[MSIService]){
                var msiData = {
                    account_id: accountInfo.account_id,
                    channel: params.channel,
                    platform: params.platform
                };
                sails.models[MSIService].create(msiData).then((msiInfo) => {
                    accountInfo.list_service = accountInfo.list_service || [];
                    accountInfo.list_service.push({
                        app: params.app,
                        msi_id: msiInfo.msi_id,
                        createdAt: msiInfo.createdAt
                    });

                    Accounts.update({account_id: accountInfo.account_id}, {list_service: accountInfo.list_service}).then(result => {
                        callback(null, accountInfo, msiInfo);
                    }, error => {
                        callback('REGISTER_FAIL');
                    });
                }, error => {
                    callback('REGISTER_FAIL');
                });
            }
            else{
                callback("INVALID_TOKEN");
            }
        }

        // SET ACCESSTOKEN
        function createAccessToken(accountInfo, msiInfo, callback){
            var accessToken = utils.generateAccessToken({msi_id: msiInfo.msi_id, account_id: accountInfo.account_id});
            var dataToken = AccessToken.getSchema(params, msiInfo.msi_id, accountInfo.account_id, accessToken);
            AccessToken.create(dataToken).then((resultAccessToken) => {
                var tokenInfo = {
                    account_id: accountInfo.account_id,
                    access_token: resultAccessToken.access_token,
                    type: 'default'
                };
                callback(null, tokenInfo);
            }, error => {
                callback('REGISTER_FAIL');
            });
        }
    },

    get_info: function (req, res) {
        var params = req.requestParams;
        var needles = ['access_token'];

        if (validateRequest.required(params, needles) == false) {
            return res.toJSON('INVALID_PARAMS');
        }

        var accessToken = req.userData.accessToken;
        var account_id = req.userData.account_id;

        async.waterfall([
            function(callback) {
                findAccount(callback);
            }
        ],function(err, accountInfo) {
            if(err){
                return res.toJSON(err);
            }
            else{
                return res.toJSON('GET_INFO_SUCCESS', accountInfo);
            }
        });

        // FIND Account
        function findAccount(callback){
            Accounts.findOne({account_id: account_id}).then((result) => {
                if (_.isEmpty(result) == true) {
                    callback('GET_INFO_FAIL');
                } else {
                    callback(null, {
                        account_id: result.account_id,
                        account: result.account,
                        email: result.email
                    });
                }
            }, error => {
                callback("ACCESS_TOKEN_INVALID");
            })
        }
    },

    change_password: function (req, res) {
        var params = req.requestParams;
        var needles = ['new_password', 'old_password', 'access_token'];

        if (validateRequest.required(params, needles) == false) {
            return res.toJSON('INVALID_PARAMS');
        }

        async.waterfall([
            function(callback) {
                findAccessToken(callback);
            },
            function(accessTokenInfo, callback) {
                findMSIService(accessTokenInfo, callback);
            },
            function(msiInfo, callback) {
                findAccount(msiInfo, callback);
            }
        ],function(err, accountInfo) {
            if(err){
                return res.toJSON(err);
            }
            else{
                return res.toJSON('CHANGE_PASSWORD_SUCCESS');
            }
        });

        // FIND AcessToken
        function findAccessToken(callback){
            AccessToken.findOne({hash: md5(params.access_token)}).then((result) => {
                if (_.isEmpty(result)) {
                    callback("ACCESS_TOKEN_INVALID");
                } else {
                    callback(null, result);
                }
            }, error => {
                callback("ACCESS_TOKEN_INVALID");
            })
        }

        // FIND MSIService
        function findMSIService(accessTokenInfo, callback){
            var MSIService = 'msiservice' + params.app;

            sails.models[MSIService].findOne({msi_id: accessTokenInfo.msi_id}).then((result) => {
                if (_.isEmpty(result) == true) {
                    callback('ACCESS_TOKEN_INVALID');
                } else {
                    callback(null, result);
                }
            }, error => {
                callback("ACCESS_TOKEN_INVALID");
            });
        }

        // FIND Account
        function findAccount(msiInfo, callback){
            Accounts.findOne({account_id: msiInfo.account_id}).then((result) => {
                if (_.isEmpty(result) == true) {
                    callback('ACCESS_TOKEN_INVALID');
                } else {
                    if (result['password'] == md5(params.old_password)) {
                        Accounts.update({account_id: result.account_id}, {password: md5(params.new_password)}).then(result => {
                            callback(null, result);
                        }, error => {
                            callback("CHANGE_PASSWORD_FAIL");
                        })
                    } else {
                        callback("PASSWORD_NOT_MATCH");
                    }
                }
            }, error => {
                callback("ACCESS_TOKEN_INVALID");
            })
        }
    },

    update_info: function (req, res) {
        res.send("update_info");
    },

    update_device_info: function (req, res) {
        var params = req.requestParams;
        var needles = ['access_token', 'sd'];

        if (validateRequest.required(params, needles) == false) {
            return res.toJSON('INVALID_PARAMS');
        }

        var account_id = req.userData.account_id;

        async.waterfall([
            function(callback) {
                updateAccount(callback);
            }
        ],function(err, accountInfo) {
            if(err){
                return res.toJSON(err);
            }
            else{
                return res.toJSON('UPDATE_DEVICE_INFO_SUCCESS', accountInfo);
            }
        });

        // UPDATE Account
        function updateAccount(callback){
            if(!_.isEmpty(params.sd) && params.sd!='empty'){
                try {
                    var sd = cryptoEncrypt.decrypt(params.sd, req.metaData.privateKey);
                    Accounts.update({account_id: account_id}, {sd: sd}).then(accountInfo => {
                        callback(null, {success: true});
                    }, error => {
                        callback("UPDATE_DEVICE_INFO_FAIL");
                    });
                }
                catch (error) {
                    callback("UPDATE_DEVICE_INFO_FAIL");
                }
            }
            else{
                callback(null, {success: true});
            }
        }
    },

    update_channel: function (req, res) {
        var params = req.requestParams;
        var needles = ['access_token', 'channel_cfg', 'referrer', 'device_id'];

        if (validateRequest.required(params, needles) == false) {
            return res.toJSON('INVALID_PARAMS');
        }

        var accessToken = req.userData.accessToken;

        async.waterfall([
            function(callback) {
                updateMSIService(callback);
            }
        ],function(err, msiInfo) {
            if(err){
                return res.toJSON(err);
            }
            else{
                return res.toJSON('UPDATE_CHANNEL_SUCCESS', msiInfo);
            }
        });

        // UPDATE MSIService
        function updateMSIService(callback){
            var MSIService = 'msiservice' + params.app;

            if(sails.models[MSIService]) {
                var data = {
                    channel: params.channel,
                    channel_cfg: params.channel_cfg,
                    referrer: params.referrer,
                    device_id: params.device_id
                };
                sails.models[MSIService].update({msi_id: accessToken.msi_id}, data).then(msiInfo => {
                    callback(null, msiInfo[0]);
                }, error => {
                    callback("UPDATE_CHANNEL_FAIL");
                });
            }
            else{
                callback("INVALID_TOKEN");
            }
        }
    },

    mapping_account: function (req, res) {
        var params = req.requestParams;
        var needles = ['access_token', 'account', 'email'];

        if (validateRequest.required(params, needles) == false) {
            return res.toJSON('INVALID_PARAMS');
        }

        var accessToken = req.userData.accessToken;
        var account_id = req.userData.account_id;

        async.waterfall([
            function(callback) {
                findAccount({email: params.email}, function(err, result){
                    if(err == 'EMPTY'){
                        callback(null);
                    }
                    else{
                        callback('EMAIL_EXIST');
                    }
                });
            },
            function(callback) {
                findAccount({account: params.account}, function(err, result){
                    if(err == 'EMPTY'){
                        callback(null);
                    }
                    else{
                        callback('ACCOUNT_EXIST');
                    }
                });
            },
            function(callback) {
                findAccount({account_id: account_id, type: 'device'}, function(err, result){
                    if(err){
                        callback('MAPPING_ACCOUNT_FAIL');
                    }
                    else{
                        callback(null, result);
                    }
                });
            },
            function(accountInfo, callback) {
                updateAccount(accountInfo, callback);
            }
        ],function(err, accountInfo) {
            if(err){
                return res.toJSON(err);
            }
            else{
                return res.toJSON('MAPPING_ACCOUNT_SUCCESS', accountInfo);
            }
        });

        // FIND ACCOUNT
        function findAccount(where, callback){
            Accounts.findOne(where).then((result) => {
                if (_.isEmpty(result)) {
                    callback('EMPTY');
                } else {
                    callback(null, result);
                }
            }, error => {
                callback('MAPPING_ACCOUNT_FAIL');
            });
        }

        // UPDATE Account
        function updateAccount(accountInfo, callback){
            var data = {
                'account': params.account,
                'email': params.email,
                'password': md5(params.password),
                'type': 'default'
            };
            Accounts.update({account_id: accountInfo.account_id}, data).then(accountInfo => {
                QuickAccount.destroy({account_id: accountInfo[0].account_id}).exec(function (err) {
                    callback(null, accountInfo[0]);
                }, error => {
                    res.toJSON("MAPPING_ACCOUNT_FAIL");
                });
            }, error => {
                callback("MAPPING_ACCOUNT_FAIL");
            });
        }
    },

    forget_password: function (req, res) {
        var params = req.requestParams;
        var needles = ['email', 'password'];

        if (validateRequest.required(params, needles, true) == false) {
            return res.toJSON('INVALID_PARAMS');
        }

        Accounts.findOne({email: params.email}).then((accountInfo) => {
            if (_.isEmpty(accountInfo) == true) {
                return res.toJSON('ACCOUNT_NOT_EXIST');
            } else {
                Accounts.update({email: params.email}, {password: md5(params.password)}).then(response => {
                    return res.toJSON('CHANGE_PASSWORD_SUCCESS');
                }, error => {
                    return res.toJSON('CHANGE_PASSWORD_FAIL');
                });
            }
        });
    },

    check_email: function (req, res) {
        var params = req.requestParams;
        var needles = ['email'];

        if (validateRequest.required(params, needles, true) == false) {
            return res.toJSON('INVALID_PARAMS');
        }

        params.email = _.toLower(params.email);
        Accounts.findOne({email: params.email}).then((accountInfo) => {
            if (_.isEmpty(accountInfo) == false) {
                return res.toJSON('ACCOUNT_EXIST', {
                    account_id: accountInfo.account_id,
                    email: accountInfo.email
                });
            } else {
                return res.toJSON('ACCOUNT_NOT_EXIST');
            }
        });
    },

    verify_access_token: function (req, res) {
        var params = req.requestParams;
        var needles = ['access_token'];

        if (validateRequest.required(params, needles, true) == false) {
            return res.toJSON('INVALID_PARAMS');
        }

        async.waterfall([
            function(callback) {
                findAccessToken(callback);
            },
            function(accessTokenInfo, callback) {
                findMSIService(accessTokenInfo, callback);
            },
            function(accessTokenInfo, msiInfo, callback) {
                findAccount(accessTokenInfo, msiInfo, callback);
            }
        ],function(err, accountInfo) {
            if(err){
                return res.toJSON(err, null);
            }
            else{
                return res.toJSON('VERIFY_ACCESS_TOKEN_SUCCESS', accountInfo);
            }
        });

        // FIND AcessToken
        function findAccessToken(callback){
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
        function findMSIService(accessTokenInfo, callback){
            var MSIService = 'msiservice' + accessTokenInfo.service_id;

            if(sails.models[MSIService]){
                sails.models[MSIService].findOne({msi_id: accessTokenInfo.msi_id}).then((result) => {
                    if (_.isEmpty(result) == true) {
                        callback('VERIFY_ACCESS_TOKEN_FAIL');
                    } else {
                        callback(null, accessTokenInfo, result);
                    }
                }, error => {
                    callback("VERIFY_ACCESS_TOKEN_FAIL");
                });
            }
            else{
                callback("INVALID_TOKEN");
            }
        }

        // FIND Account
        function findAccount(accessTokenInfo, msiInfo, callback){
            var MSIService = 'msiservice' + accessTokenInfo.service_id;

            Accounts.findOne({account_id: msiInfo.account_id}).then((result) => {
                if (_.isEmpty(result) == true) {
                    callback('VERIFY_ACCESS_TOKEN_FAIL');
                } else {
                    if(result.status == 'lock'){
                        callback('ACCOUNT_LOCKED');
                    }
                    else{
                        //last login
                        sails.models[MSIService].update({msi_id: msiInfo.msi_id}, {last_login: new Date()}).then(msiInfo => {
                            callback(null, {
                                account_id: result.account_id,
                                account: result.account,
                                email: result.email,
                                channel: result.channel,
                                device_id: result.device_id,
                                type: result.type
                            });
                        }, error => {
                            callback("VERIFY_ACCESS_TOKEN_FAIL");
                        });
                    }
                }
            }, error => {
                callback("VERIFY_ACCESS_TOKEN_FAIL");
            })
        }
    },

    verify_access_token_get_channel: function (req, res) {
        var params = req.requestParams;
        var needles = ['access_token'];

        if (validateRequest.required(params, needles, true) == false) {
            return res.toJSON('INVALID_PARAMS');
        }

        async.waterfall([
            function(callback) {
                findAccessToken(callback);
            },
            function(accessTokenInfo, callback) {
                findMSIService(accessTokenInfo, callback);
            },
            function(accessTokenInfo, msiInfo, callback) {
                findAccount(accessTokenInfo, msiInfo, callback);
            }
        ],function(err, accountInfo) {
            if(err){
                return res.toJSON(err, null);
            }
            else{
                return res.toJSON('VERIFY_ACCESS_TOKEN_SUCCESS', accountInfo);
            }
        });

        // FIND AcessToken
        function findAccessToken(callback){
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
        function findMSIService(accessTokenInfo, callback){
            var MSIService = 'msiservice' + accessTokenInfo.service_id;

            if(sails.models[MSIService]){
                sails.models[MSIService].findOne({msi_id: accessTokenInfo.msi_id}).then((result) => {
                    if (_.isEmpty(result) == true) {
                    callback('VERIFY_ACCESS_TOKEN_FAIL');
                } else {
                    callback(null, accessTokenInfo, result);
                }
            }, error => {
                    callback("VERIFY_ACCESS_TOKEN_FAIL");
                });
            }
            else{
                callback("INVALID_TOKEN");
            }
        }

        // FIND Account
        function findAccount(accessTokenInfo, msiInfo, callback){
            var MSIService = 'msiservice' + accessTokenInfo.service_id;

            Accounts.findOne({account_id: msiInfo.account_id}).then((result) => {
                if (_.isEmpty(result) == true) {
                callback('VERIFY_ACCESS_TOKEN_FAIL');
            } else {
                if(result.status == 'lock'){
                    callback('ACCOUNT_LOCKED');
                }
                else{
                    //last login
                    sails.models[MSIService].update({msi_id: msiInfo.msi_id}, {last_login: new Date()}).then(msiInfo => {
                        callback(null, {
                        account_id: result.account_id,
                            account: result.account,
                            email: result.email,
                            channel: result.channel,
                            device_id: result.device_id,
                            type: result.type,
                            platform:result.platform
                    });
                }, error => {
                        callback("VERIFY_ACCESS_TOKEN_FAIL");
                    });
                }
            }
        }, error => {
                callback("VERIFY_ACCESS_TOKEN_FAIL");
            })
        }
    },

    sso: function (req, res) {
        var params = req.requestParams;
        var needles = ['device_id'];

        if (validateRequest.required(params, needles, true) == false) {
            return res.toJSON('INVALID_PARAMS');
        }

        async.waterfall([
            function(callback) {
                findAccessToken(callback);
            },

            function(accessTokenInfo, callback) {
                findAccount(accessTokenInfo, callback);
            },

            function(accountInfo, callback) {
                findMSIService(accountInfo, callback);
            },

            function(accountInfo, msiInfo, callback) {
                createAccessToken(accountInfo, msiInfo, callback);
            }
        ],function(err, tokenInfo) {
            if(err){
                return res.toJSON(err, null);
            }
            else{
                return res.toJSON('SSO_SUCCESS', tokenInfo);
            }
        });

        // FIND AcessToken
        function findAccessToken(callback){
            AccessToken.findOne({where: {device_id: params.device_id, type: {'!': 'device'}}, sort: 'id DESC'}).then((result) => {
                if (_.isEmpty(result)) {
                    callback("SSO_FAIL");
                } else {
                    callback(null, result);
                }
            }, error => {
                callback("SSO_FAIL");
            })
        }

        // FIND Account
        function findAccount(accessTokenInfo, callback){
            var atDecode = JSON.parse(base64.decode(accessTokenInfo.access_token));
            Accounts.findOne({account_id: atDecode.id, type: {'!': 'device'}}).then((result) => {
                if (_.isEmpty(result) == true) {
                    callback('SSO_FAIL');
                } else {
                    callback(null,result);
                }
            }, error => {
                callback("SSO_FAIL");
            })
        }

        // FIND MSIService
        function findMSIService(accountInfo, callback){
            var MSIService = 'msiservice' + params.app;

            if(sails.models[MSIService]){
                sails.models[MSIService].findOne({account_id: accountInfo.account_id}).then((result) => {
                    if (_.isEmpty(result)) {
                        var msiData = {
                            account_id: accountInfo.account_id,
                            channel: params.channel,
                            platform: params.platform
                        };
                        sails.models[MSIService].create(msiData).then((msiInfo) => {
                            accountInfo.list_service = accountInfo.list_service || [];
                            accountInfo.list_service.push({
                                app: params.app,
                                msi_id: msiInfo.msi_id,
                                createdAt: msiInfo.createdAt
                            });

                            Accounts.update({account_id: accountInfo.account_id}, {list_service: accountInfo.list_service}).then(result => {
                                callback(null, accountInfo, msiInfo);
                            }, error => {
                                callback('SSO_FAIL');
                            });
                        }, error => {
                            callback('SSO_FAIL');
                        });
                    }
                    else{
                        callback(null, accountInfo, result);
                    }
                }, error => {
                    callback('SSO_FAIL');
                });
            }
            else{
                callback("INVALID_TOKEN");
            }
        }

        // SET ACCESSTOKEN
        function createAccessToken(accountInfo, msiInfo, callback){
            var accessToken = utils.generateAccessToken({msi_id: msiInfo.msi_id, account_id: accountInfo.account_id});
            var dataToken = AccessToken.getSchema(params, msiInfo.msi_id, accountInfo.account_id, accessToken);
            var MSIService = 'msiservice' + params.app;

            if(accountInfo.status == 'lock'){
                callback('ACCOUNT_LOCKED');
            }
            else {
                AccessToken.create(dataToken).then((resultAccessToken) => {
                    var tokenInfo = {
                        account_id: accountInfo.account_id,
                        access_token: resultAccessToken.access_token,
                        type: accountInfo.type
                    };

                    //last login
                    sails.models[MSIService].update({msi_id: msiInfo.msi_id}, {last_login: new Date()}).then(msiInfo => {
                        callback(null, tokenInfo);
                    }, error => {
                        callback("SSO_FAIL");
                    });
                }, error => {
                    callback('SSO_FAIL');
                });
            }
        }
    },

    logout: function (req, res) {
        var params = req.requestParams;
        var needles = ['access_token'];

        if (validateRequest.required(params, needles, true) == false) {
            return res.toJSON('INVALID_PARAMS');
        }

        AccessToken.findOne({hash: md5(params.access_token)}).then(response => {
            if (_.isEmpty(response)) {
                res.toJSON("ACCESS_TOKEN_INVALID");
            } else {
                AccessToken.destroy({msi_id: response.msi_id}).exec(function (err) {
                    if(response.account_id){
                        AccessToken.destroy({account_id: response.account_id}).exec(function (err) {
                            res.toJSON("LOGOUT_SUCCESS");
                        }, error => {
                            res.toJSON("LOGOUT_FAIL");
                        });
                    }
                    else {
                        res.toJSON("LOGOUT_SUCCESS");
                    }
                }, error => {
                    res.toJSON("LOGOUT_FAIL");
                });
            }
        }, error => {
            res.toJSON("ACCESS_TOKEN_INVALID");
        })
    }
};
