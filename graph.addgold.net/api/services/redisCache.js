var Redis = require('ioredis');
var redis = new Redis({
  port: 6379,         
  host: '127.0.0.1',   
  family: 4,          
  password: 'redis@@@',

});

module.exports = {
  set(keyCache, value){
    if (_.isNull(value)) {
      redis.set(keyCache, null);
    } else {
      redis.set(keyCache, JSON.stringify(value));
    }

  },
  del(keyCache){
    redis.del(keyCache);
  },
  dels(keyCache){
    redis.keys(keyCache).then(function (keys) {
      // Use pipeline instead of sending
      // one command each time to improve the
      // performance.
      var pipeline = redis.pipeline();
      keys.forEach(function (key) {
        pipeline.del(key);
      });
      return pipeline.exec();
    });

  },
  get(keyCache){
    return new Promise((resolve, reject) => {
      redis.get(keyCache).then(response => {
        resolve(response)
      }, error => {
        reject(error)
      });
    })
  },
  keys(keyCache){
    return new Promise((resolve, reject) => {
      redis.keys(keyCache).then(response => {
        resolve(response)
      }, error => {
        reject(error)
      });
    })
  },
  store(key, model, callback){
    var parts = key.split(":");
    redis.hmget(parts[1], (error, resultCached) => {
      if (error || _.isEmpty(resultCached) == true) {
        model((response) => {
          if (_.isEmpty(response) == true) {
            callback(null);
          } else {
            redis.sadd(parts[0] + '_' + response.account_id, parts[1]);
            redis.hmset(parts[1], response);
            response['status'] = 'DB';
            callback(response);
          }
        });
      } else {
        resultCached = JSON.parse(resultCached)
        resultCached['status'] = 'CACHE';
        callback(resultCached);
      }
    });
  }
}
