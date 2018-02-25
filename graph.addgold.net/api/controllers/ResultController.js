var md5 = require('md5');
var _ = require('lodash');
module.exports = {
     authorize: function (req, res) {
        var params = req.requestParams;
        var needles = ['account', 'password'];
        var data = null;

        if (validateRequest.requiredWeb(params, needles) == false) {
            return res.toJSON('INVALID_PARAMS',data,true);
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
                return res.toJSON(err,data,true);
            }
            else{
                return res.toJSON('AUTHORIZE_SUCCESS', tokenInfo,true);
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

};

