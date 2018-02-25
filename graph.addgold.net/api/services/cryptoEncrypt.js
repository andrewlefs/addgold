var crypto = require('crypto');
var iv = new Buffer(0);
var autoPadding = true;
var alg = 'des-ede3';
module.exports = {
    encrypt: function (data, key) {
        try {
            var md5Key = crypto.createHash('md5').update(key).digest('hex')
            md5Key = md5Key.substring(0, 24);
            md5Key = new Buffer(md5Key);
            var cipher = crypto.createCipheriv(alg, md5Key, iv);
            cipher.setAutoPadding(autoPadding);
            var ciph = cipher.update(data, 'utf8', 'base64');
            ciph += cipher.final('base64');
            return ciph;
        } catch (e) {
            return e;
        }
    },
    decrypt: function (data, key) {
        try {
            var md5Key = crypto.createHash('md5').update(key).digest('hex')
            md5Key = md5Key.substring(0, 24);
            md5Key = new Buffer(md5Key);
            var decipher = crypto.createDecipheriv(alg, md5Key, iv);
            decipher.setAutoPadding(autoPadding)
            var txt = decipher.update(data, 'base64', 'utf8');
            txt += decipher.final('utf8');
            return txt;
        } catch (e) {
            return e;
        }
    },
    md5: function (data) {
        return crypto.createHash('md5').update(data).digest('hex')
    }
};
