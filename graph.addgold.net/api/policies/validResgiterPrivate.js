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
}
