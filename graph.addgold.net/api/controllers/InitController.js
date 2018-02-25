var Redis = require('ioredis');
var md5 = require('md5');
module.exports = {
    information: function (req, res) {
        var params = req.requestParams;
        var rawParam = req.allParams();
        var needles = [];
        if (validateRequest.required(params, needles) == false) {
            return res.toJSON('INVALID_PARAMS');
        }
        /**
         *  keys *INIT:INFORMATION*
         *   get INIT:INFORMATION_1001android3|global|4.9.3|GP|gsv_4_store
         */
		 //console.log(req.metaData.appName);
			var args = {
                    q: decodeURIComponent(rawParam.q),
                    app: req.metaData.appName,
                    otp: req.headers.otp,
                    token: req.headers.token,
                };
				
                miscAPI.init(args).then((respone) => {
                   // redisCache.set(keyCache, respone);
                    res.toJSON(respone.desc, respone.data)
                }, error => {
                    res.toJSON("NORMAL_STATE");
                });
		/*
        var argsCache = {
            app: req.metaData.appName,
            channel: params.channel,
            platform: params.platform,
        }

        var keyCache = redisKey.getKeyInit(argsCache);
        redisCache.get(keyCache).then(resultInitCache => {
            if (_.isEmpty(resultInitCache) == true) {
                var args = {
                    q: decodeURIComponent(rawParam.q),
                    app: req.metaData.appName,
                    otp: req.headers.otp,
                    token: req.headers.token,
                }
				
                miscAPI.init(args).then((respone) => {
                    redisCache.set(keyCache, respone);
                    res.toJSON(respone.desc, respone.data)
                }, error => {
                    res.toJSON("NORMAL_STATE");
                });
            } else {
                resultInitCache = JSON.parse(resultInitCache);
                res.toJSON(resultInitCache.desc, resultInitCache.data);
            }
        }, error => {
            res.toJSON("NORMAL_STATE");
        });
		*/
    }
}


