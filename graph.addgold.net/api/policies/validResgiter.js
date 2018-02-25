var _ = require('lodash');
var Redis = require('ioredis');
var redis = new Redis({
  port: 6379,         
  host: '127.0.0.1',   
  family: 4,          
  password: 'redis@@@'
});

module.exports = function (req, res, next) {
    var params = req.requestParams;
    var headers = req.headers;

    async.waterfall([
        function(callback) {

            limitByDevice(callback);
        },
        function(callback) {

            limitByGA(callback);
        },
        function(callback) {
		
            limitByCache(callback);
        }
    ],function(err, result) {
        if(err){

            return res.toJSON(err);
        }
        else{

            next();
        }
    });

    function limitByCache(callback){
	
        if (_.isNull(params.platform) || _.isUndefined(params.platform) || _.isEmpty(params.platform)){
		
            callback('INVALID_REQUEST');
        } else {
            params.model = (!_.isNull(params.model) && !_.isUndefined(params.model)) ? params.model : '';
            var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            var key_anti = 'ANTI_CHEAT_HACK_CREATE_ACCOUNT' + params.app + ip + params.platform + params.model;
            redis.get(key_anti, function (err, result) {
                if(result){
                    callback('INVALID_RES_CACHE');
                }
                else{
                    callback(null);
                }
            });
        }
    }

    function limitByGA(callback){
        var google_aid = (!_.isUndefined(req.trackingInfo.google_aid) && !_.isEmpty(req.trackingInfo.google_aid)) ? req.trackingInfo.google_aid : 'empty';

        Accounts.find({google_aid: google_aid}).then((result) => {
            if (!_.isEmpty(result) && result.length > 2) {
                callback('INVALID_RES_GA');
            } else {
                callback(null);
            }
        });
    }

    function limitByDevice(callback){
        if(!_.isUndefined(params.device_id) && !_.isEmpty(params.device_id)){
            Accounts.find({device_id: params.device_id}).then((result) => {
                if (!_.isEmpty(result) && result.length > 2) {
                    callback('INVALID_RES_DEVICE');
                } else {
                    callback(null);
                }
            });
        }
        else{
            callback('INVALID_REQUEST');
        }
    }
}
