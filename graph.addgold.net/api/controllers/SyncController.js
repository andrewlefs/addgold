var md5 = require('md5');
var _ = require('lodash');

module.exports = {
    remove_acc_lock: function (req, res) {
        var params = req.allParams();

        if (_.isUndefined(params.confirm) || (params.confirm != 'XOATATCA')) {
            return res.toJSON('INVALID_PARAMS',null, true);
        }

        Accounts.find({status: "lock", type: "default"}).then((result) => {
            if (_.isEmpty(result)) {
                return res.toJSON('ACCOUNT_NOT_EXIST',null, true);
            } else {
                async.each(result, function(account, callback) {
                    AccessToken.destroy({account_id: account.account_id}).exec(function (err) {
                        var services = ['1000', '1001', '1002', '1003', '1004', '1005', '1006', '1007', '1008', '1009', '1010'];
                        async.each(services, function(service, callback2) {
                            var MSIService = 'msiservice' + service;
                            sails.models[MSIService].destroy({account_id: account.account_id}).exec(function (err) {
                                Accounts.destroy({account_id: account.account_id}).exec(function (err) {
                                    callback2(null);
                                }, error => {
                                    callback2(error);
                                });
                            }, error => {
                                callback2(error);
                            });
                        }, function(err) {
                            if( err ) {
                                callback(error);
                            } else {
                                callback(null);
                            }
                        });

                    }, error => {
                        callback(error);
                    });
                }, function(err) {
                    if( err ) {
                        return res.toJSON('SERVER_MAINTENANCE',null, true);
                    } else {
                        return res.toJSON('NORMAL_STATE', null, true);
                    }
                });
            }
        }, error => {
            return res.toJSON('SERVER_MAINTENANCE',null, true);
        });


    },

    list_service: function (req, res) {
        var params = req.allParams();

        if (_.isUndefined(params.confirm) || (params.confirm != 'LIST')) {
            return res.toJSON('INVALID_PARAMS',null, true);
        }

        Accounts.find({list_service: {"$exists": false}}).limit(1000).then((result) => {
            async.each(result, function(account, callback) {
                var services = ['1000', '1001', '1002', '1003'];
                var list = [];
                async.each(services, function(service, callback2) {
                    var MSIService = 'msiservice' + service;
                    sails.models[MSIService].findOne({account_id: account.account_id}).then((msiInfo) => {
                        if (!_.isEmpty(msiInfo)) {
                            list.push({
                                app: service,
                                msi_id: msiInfo.msi_id,
                                createdAt: msiInfo.createdAt
                            });
                        }
                        callback2(null);
                    }, error => {
                        callback2(error);
                    });
                }, function(err) {
                    if( err ) {
                        callback(error);
                    } else {
                        Accounts.update({account_id: account.account_id}, {list_service: list}).then(result => {
                            callback(null);
                        }, error => {
                            callback('error');
                        });
                    }
                });
            }, function(err) {
                if( err ) {
                    return res.toJSON('SERVER_MAINTENANCE',null, true);
                } else {
                    return res.toJSON('NORMAL_STATE', null, true);
                }
            });
        }, error => {
            return res.toJSON('SERVER_MAINTENANCE',null, true);
        });


    }
}