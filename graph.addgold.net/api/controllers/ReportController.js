var md5 = require('md5');
var _ = require('lodash');

module.exports = {
    search: function (req, res) {
        var params = req.requestParams;
        var rawParam = req.allParams();
        var needles = ['account_id'];
        var data = null;

        if (validateRequest.requiredWeb(params, needles) == false) {
            return res.toJSON('INVALID_PARAMS','',true);
        }
        var resultdata = {};

        async.waterfall([
            function(callback) {
                findAccount(callback);
            },
            function (accountInfo,callback) {
                findsocialFacebook(accountInfo,callback);
            },
            function (accountInfo,callback) {
                findsocialGoogle(accountInfo,callback);
            },
            function(accountInfo,callback) {
                findMSIService(accountInfo,callback);
            },
        ],function(err, resultdata) {
            if(err){
                return res.toJSON(err,null,true);
            }
            else{
                return res.toJSON('SEARCH_GRAPH_SUCCESS', resultdata,true);
            }
        });


        // FIND Account
        function findAccount(callback){
            Accounts.findOne( {$or:[ {'account_id': params.account_id}, {'account': params.account_id}, {"list_service.msi_id": params.account_id}] }  ).then((result) => {
                if (_.isEmpty(result)) {
                    callback('AUTHORIZE_FAIL');
                } else{
                    /*
                     map data facebook_id or google_id
                     */
                    resultdata = {
                        account: {
                            account_id: result.account_id,
                            account: result.account,
                            type: result.type || 'default',
                            status: result.status || 'lock',
                            date_create: result.createdAt,
                            email: result.email,
                            device_id: result.device_id,
                            channel: result.channel
                        },
                        services: {}
                    };
                    /*
                    if(result.account.type =='facebook') {
                        findsocialFacebook(callback);
                    }else if(result.account.type =='google'){
                        findsocialGoogle(callback);
                    }
                    */
                    callback(null,result);
                }

            }, error => {
                callback('AUTHORIZE_FAIL');
            })
        }

                // FIND socialFacebook
        function findsocialFacebook(accountInfo,callback){
            if(resultdata.account.type =='facebook') {

                SocialFacebook.findOne({account_id: params.account_id}).then((result) => {
                    if (_.isEmpty(result)) {
                        callback(null,accountInfo);
                    }else{
                        resultdata.account.facebook_id = result.facebook_id;
                        callback(null,accountInfo);
                    }
                }, error => {
                    callback('AUTHORIZE_FACEBOOK_FAIL');
                });
            }else{
                callback(null,accountInfo);
            }

        }
                // FIND socialGoogle
        function findsocialGoogle(accountInfo,callback){
            if(resultdata.account.type =='google') {
                SocialGoogle.findOne({account_id: params.account_id}).then((result) => {
                    if (_.isEmpty(result)) {
                        callback(null,accountInfo);
                    }else{
                        resultdata.account.google_id = result.google_id;
                        callback(null,accountInfo);
                    }
                }, error => {
                    callback('AUTHORIZE_GOOGLE_FAIL');
                });
            }else{
                callback(null,accountInfo);
            }
        }

                // FIND MSIService

        function findMSIService(accountInfo,callback){
            var ctr = 0;

            async.each(accountInfo.list_service, function(value){
                var MSIService = 'msiservice' + value.app;

                if(sails.models[MSIService]){
                    sails.models[MSIService].findOne({account_id: accountInfo.account_id}).then((result) => {
                        ctr++;
                        if (!_.isEmpty(result)) {

                            resultdata.services[value.app] = {
                                app: params.app,
                                msi_id: result.msi_id,
                                createdAt: result.createdAt,
                                channel : result.channel,
                                platform : result.platform,
                                last_login : result.last_login,
                                status : result.status
                            };
                            if (ctr === accountInfo.list_service.length) {
                                callback(null,resultdata);
                            }
                            //callback(null,resultdata);
                        }
                    }, error => {
                        ctr++;
                        callback('AUTHORIZE_FACEBOOK_FAIL',resultdata);
                    });
                }else{
                    ctr++;
                    callback(null,resultdata);
                }

                //callback(null,resultdata);
            }, function(err){
                if(err) callback(err,null);
                else callback(null,resultdata);
            });

        }


    },

    active_lock_account: function (req, res) {
        var params = req.requestParams;
        var rawParam = req.allParams();
        var needles = ['account_id','status'];
        var data = null;

        if (validateRequest.requiredWeb(params, needles) == false) {
            return res.toJSON('INVALID_PARAMS',data,true);
        }
        //status : lock ; normal
        var message_type = (params.status.toLowerCase() == 'lock')?'LOCK':'UNLOCK';

        async.waterfall([
            function(callback) {
                findAccount(callback);
            }
        ],function(err, msiInfo) {
            if(err){
                return res.toJSON(err,data ,true);
            }
            else{
                return res.toJSON(message_type+'_SUCCESS', msiInfo,true);
            }
        });

        // FIND Account
        function findAccount(callback){
            Accounts.findOne({account_id: params.account_id}).then((result) => {

                if (_.isEmpty(result) == true) {
                    callback(message_type+'_FALIED');
                } else {
                    if(result.status != params.status) {
                        //last login
                        Accounts.update({account_id: params.account_id}, {status: params.status}).then(result => {
                            callback(null, result);
                        }, error => {
                            callback(message_type + '_FALIED');
                        });
                    }
                    callback(message_type+'_SUCCESS');
                }
            }, error => {
                callback(message_type+'_FALIED');
            })
        }

    },

    active_lock_service: function (req, res) {
        var params = req.requestParams;
        var rawParam = req.allParams();
        var needles = ['account_id','status','service_id'];
        var data = null;

        if (validateRequest.requiredWeb(params, needles) == false) {
            return res.toJSON('INVALID_PARAMS',data , true);
        }

        var message_type = (params.status.toLowerCase() == 'lock')?'LOCK':'UNLOCK';

        async.waterfall([
            function(callback) {
                findMSIService(callback);
            }
        ],function(err, msiInfo) {
            if(err){
                return res.toJSON(err , data , true);
            }
            else{
                return res.toJSON(message_type + '_SUCCESS', msiInfo , true);
            }
        });

        // FIND MSIService
        function findMSIService(callback){
                var MSIService = 'msiservice' + params.service_id;

                if(sails.models[MSIService]){
                    sails.models[MSIService].findOne({account_id: params.account_id}).then((result) => {
                        console.log(result);
                        if (_.isEmpty(result))
                        {
                            callback(message_type + '_FALIED');
                        }else if(params.status == result.status){
                             //callback(null, result);
                                    //khoi can update
                            callback(message_type+'_SUCCESS');
                        }else{
                            // UPDATE MSIService
                            sails.models[MSIService].update({msi_id: result.msi_id}, {status: params.status}).then(msiInfo => {
                                callback(null, msiInfo);
                            }, error => {
                                callback(message_type + '_FALIED');
                            });
                        }
                    }, error => {
                        callback(message_type + '_FALIED');
                    });
                }else{
                    callback(message_type + '_FALIED');
                }
        }




    },

    update_info_account: function (req, res) {
        var params = req.requestParams;
        var needles = ['account_id','email'];
        var data = null;

        if (validateRequest.requiredWeb(params, needles) == false) {
            return res.toJSON('INVALID_PARAMS', data , true);
        }else if ( params.email == null && params.phone == null){
            return res.toJSON('INVALID_PARAMS', params , true);
        }


        async.waterfall([
            function(callback) {
                findAccount(callback);
            },
			function(accountInfo,callback) {
                findEmail(accountInfo,callback);
            },
            function(accountInfo,callback) {
                updateInfoAccount(accountInfo,callback);
            }
        ],function(err, msiInfo) {
            if(err){
                return res.toJSON(err , data , true);
            }
            else{
                return res.toJSON('UPDATE_INFO_SUCCESS', msiInfo , true);
            }
        });

        // AUTHORIZE
        function findAccount(callback){
            Accounts.findOne({account_id: params.account_id}).then((result) => {
                if (_.isEmpty(result)) {
                callback('ACCOUNT_NOT_VALID');
            } else {
                callback(null, result);
            }
        }, error => {
                callback('AUTHORIZE_FAIL');
            });
        }


        
		// FIND EMAIL
		
//		{$or:[ params_update ] }
        function findEmail(accountInfo,callback){
            Accounts.findOne({'email':params.email}).then((result) => {
				console.log(result);
                if (_.isEmpty(result)) {
                callback(null, accountInfo);
            } else {
                callback('EMAIL_EXIST');
            }
        }, error => {
                callback('AUTHORIZE_FAIL');
            });
        }
		
		

		var params_update = {};
        if(params.phone != ''){
            params_update.phone = params.phone;
        }
        if(params.email != ''){
            params_update.email = params.email;
        }
        // UPDATE MSIService
        function updateInfoAccount(accountInfo,callback){

            Accounts.update({account_id: params.account_id}, params_update ).then(result => {
                callback('UPDATE_INFO_SUCCESS');
            }, error => {
                callback('UPDATE_INFO_FAIL');
            });
        }
    },
	
	check_email: function (req, res) {
        var params = req.requestParams;
        var data = null;

		var needles = ['email'];
        var data = null;

        if (validateRequest.requiredWeb(params, needles) == false) {
            return res.toJSON('INVALID_PARAMS', data , true);
        }else if ( params.email == null && params.phone == null){
            return res.toJSON('INVALID_PARAMS', params , true);
        }
		

        async.waterfall([
            function(callback) {
                findEmail(callback);
            }
        ],function(err, msiInfo) {
            if(err){
                return res.toJSON(err , data , true);
            }
            else{
                return res.toJSON('GET_INFO_SUCCESS', msiInfo , true);
            }
        });

		// FIND EMAIL
		
        function findEmail(callback){
			
            Accounts.findOne({'email':params.email}).then((result) => {
            if (_.isEmpty(result)) {
                callback('EMAIL_NOT_EXITS');
            } else {
				callback(null, result);
            }
        }, error => {
                callback('AUTHORIZE_FAIL');
            });
        }
		
    },

    set_password: function (req, res) {
        var params = req.requestParams;
        var needles = ['password', 'account_id','type'];
        var data = null;

        //tinh send otp or qua 3 lan se sms
        if (validateRequest.requiredWeb(params, needles) == false) {
            return res.toJSON('INVALID_PARAMS',data ,true);
        }

        async.waterfall([
            function(callback) {
                findAccount(callback);
            }
        ],function(err, accountInfo) {
            if(err){
                return res.toJSON(err, data ,true);
            }
            else{
                return res.toJSON('CHANGE_PASSWORD_SUCCESS',accountInfo ,true);
            }
        });

        var params_update = {};
        if(params.type =='temp'){
            params_update.password_temp = params.password;
            params_update.update_time_temp = new Date() ;
        }else{
            params_update.password  = params.password;
            params_update.updatedAt = new Date() ;
        }
        // FIND Account
        function findAccount(callback){
            Accounts.findOne({account_id: params.account_id}).then((result) => {
                if (_.isEmpty(result) == true) {
                    callback('CHANGE_PASSWORD_FAIL');
                } else {
                    Accounts.update({account_id: params.account_id}, params_update).then(result => {
                        callback(null);
                }, error => {
                        callback("CHANGE_PASSWORD_FAIL");
                    })

            }
        }, error => {
                callback("ACCESS_TOKEN_INVALID");
            })
        }
    },

    //get info detail
    get_info: function (req, res) {
        var params = req.requestParams;
        var needles = ['account_id','service_id'];
        var data = null;

        if (validateRequest.requiredWeb(params, needles) == false) {
            return res.toJSON('INVALID_PARAMS',data ,true);
        }

        async.waterfall([
            function(callback) {
                findMSIService(callback);
            }
        ],function(err, accountInfo) {
            if(err){
                return res.toJSON(err, data ,true);
            }
            else{
                return res.toJSON('GET_INFO_SUCCESS', accountInfo,true);
            }
        });

        function findMSIService(callback){

                var MSIService = 'msiservice' + params.service_id;

                if(sails.models[MSIService]){
                    sails.models[MSIService].findOne({account_id: params.account_id}).then((result) => {

						console.log('getinfo');
						console.log(result);
                        if (!_.isEmpty(result)) {
                            callback(null,result);
                        }else{
							callback('GET_INFO_FAIL');	
						}
                    }, error => {
                        callback('GET_INFO_FAIL');
                    });
                }else{
                    callback('GET_INFO_FAIL');
                }

                //callback(null,resultdata);
        }

    },


    transer_account: function (req, res) {
        var params = req.requestParams;
        var needles = ['account_id','msi_id','ref_msi','service_id'];
        var data = null;

        if (validateRequest.requiredWeb(params, needles) == false) {
            return res.toJSON('INVALID_PARAMS',data ,true);
        }

        if(params.msi_id == params.ref_msi){
            return res.toJSON('TRANSFER_ACCOUNT_FAIL',data ,true);
        }

        async.waterfall([
            function(callback) {
                findAccount(callback);
            },
            function(msiInfo,callback) {
                findMSIService(callback);
            },
            function(msiInfo,callback) {
                updateMSIService(callback);
            },
            function (msiInfo,callback) {
                updateListMSI(callback);
            }

        ],function(err, msiInfo) {
            if(err){
                return res.toJSON(err,data ,true);
            }
            else{
                return res.toJSON('TRANSFER_ACCOUNT_SUCCESS', msiInfo,true);
            }
        });

        // FIND Account
        function findAccount(callback){
            var MSIService = 'msiservice' + params.service_id;

            sails.models[MSIService].findOne({msi_id: params.msi_id}).then((result) => {
                if (_.isEmpty(result) == true) {
                    callback('TRANSFER_ACCOUNT_FAIL');
                } else {
                    callback(null, result);
                }
            }, error => {
                callback("TRANSFER_ACCOUNT_FAIL");
            })
        }

        // FIND MSIService
        function findMSIService(callback){
            var MSIService = 'msiservice' + params.service_id;

            sails.models[MSIService].findOne({msi_id: params.ref_msi,account_id: params.account_id }).then((result) => {
                if (_.isEmpty(result) == true) {
                    callback('TRANSFER_ACCOUNT_FAIL');
                } else {
                    callback(null, result);
                }
            }, error => {
                callback("TRANSFER_ACCOUNT_FAIL");
            });
        }


        // UPDATE MSIService
        function updateMSIService(callback){
            var MSIService = 'msiservice' + params.service_id;

            if(sails.models[MSIService]) {
                //update account = empty
                sails.models[MSIService].update({msi_id: params.ref_msi},
                    {account_id: null}).then(msiInfo => {
                    //callback(null, msiInfo);
                    //update change account = account
                    sails.models[MSIService].update({msi_id: params.msi_id},
                        {account_id: params.account_id}).then(msiInfo => {
                        callback(null, msiInfo);
                    }, error => {
                        callback("TRANSFER_ACCOUNT_FAIL");
                    });

                }, error => {
                    callback("TRANSFER_ACCOUNT_FAIL");
                });


            }
            else{
                callback("TRANSFER_ACCOUNT_FAIL");
            }
        }
        //cap nhat lai list msi tu table account
        //update list msi tbl account
        function updateListMSI(callback){
            var list_service = [];
            Accounts.findOne({account_id: params.account_id}).then((accountInfo) => {


                if(_.isEmpty(accountInfo.list_service)) {
                    callback(null,accountInfo.list_service);

                }else{
                    async.each(accountInfo.list_service, function (value) {
                        if(_.isEmpty(value)){
                            callback(null, accountInfo.list_service);
                        }else{
                            list_service.push({
                                app: value.app,
                                msi_id: ( (params.service_id == value.app) ? params.msi_id : value.msi_id),
                                createdAt: value.createdAt
                            });
                        }

                    }, function (err) {
                        if (err) callback(err, null);
                        else callback(null, params);
                    });

                    Accounts.update({account_id: accountInfo.account_id}, {list_service: list_service}).then(result => {
                        callback(null, accountInfo.list_service);
                    }, error => {
                        callback('TRANSFER_ACCOUNT_FAIL');
                    });
                }
            }, error => {
                return res.toJSON('SEARCH_GRAPH_FAIL');
            });

        }

    },

};

