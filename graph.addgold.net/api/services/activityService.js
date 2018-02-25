var fs = require('fs');
var mkdir = require('mkdirp');
var moment = require('moment');

module.exports = {
    reg: function (req, res, account_id, callback) {
        req.requestParams.ip_public  = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        var data = {
            account_id: account_id,
            params: req.requestParams,
            header: req.headers,
        };
        Activity.create(data).then((result) => {
            callback(null);
        }, error => {
            callback(error);
        });
    },
	verify: function (req, res, paramsdata, callback) {
        paramsdata.params.ip_public  = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        var data = {
            account_id: paramsdata.account_id,
            params: paramsdata.params,
            header: req.headers,
            type: paramsdata.type,
        };
        Activity.create(data).then((result) => {
            callback(null);
        }, error => {
            callback(error);
        });
    }
}