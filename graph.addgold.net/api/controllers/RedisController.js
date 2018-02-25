var md5 = require('md5');

module.exports = {
  clear_init: function (req, res) {
    redisCache.dels('INIT:INFORMATION*');
    var message = `Clear: INIT:INFORMATION* ok`;
    return res.toJSON('REDIS', {message: message}, true);
  },
  clear: function (req, res) {
    var params = req.allParams();
    redisCache.del(params.key);
    var message = `Clear: \"${params.key}\" ok`;
    return res.toJSON('REDIS', {message: message}, true);
  },
  get: function (req, res) {
    var params = req.allParams();
    redisCache.get(params.key).then(resultInitCache => {
      if (_.isEmpty(resultInitCache) == true || _.isNull(resultInitCache) == true) {
        var message = `Get: \"${params.key}\" is not found`;
        return res.toJSON('REDIS', {message: message}, true);
      } else {
       // resultInitCache = JSON.parse(resultInitCache);
        //res.toJSON(resultInitCache.desc, resultInitCache.data);
        var message = `Get: \"${params.key}\" ok`;
        return res.toJSON('REDIS', {message: message, data: resultInitCache}, true);
      }
    });
  },
  keys: function (req, res) {
    var params = req.allParams();
    redisCache.keys(params.key).then(resultInitCache => {
      if (_.isEmpty(resultInitCache) == true || _.isNull(resultInitCache) == true) {
        var message = `Keys: \"${params.key}\" is not found`;
        return res.toJSON('REDIS', {message: message}, true);
      } else {
        //resultInitCache = JSON.parse(resultInitCache);
        //res.toJSON(resultInitCache.desc, resultInitCache.data);
        var message = `Keys : \"${params.key}\" ok`;
        return res.toJSON('REDIS', {message: message, data: resultInitCache}, true);
      }
    });
  },
  set: function (req, res) {
    var params = req.allParams();
    redisCache.set(params.key, params.value);
    var message = `Set: \"${params.key}\" ok`;
    return res.toJSON('REDIS', {message: message}, true);
  }
};
