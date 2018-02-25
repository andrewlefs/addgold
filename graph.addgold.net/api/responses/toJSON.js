var _ = require('lodash');
var md5 = require('md5');

module.exports = function send(desc, data, notEncypt) {
    var res = this.res;
    var req = this.req;
    var rawParam = this.req.allParams();
    var response = {
        code: responseCode.getCode(desc),
        desc: desc,
        data: _.isEmpty(data) ? "" : data,
        message: responseCode.getMessage(desc)
    };

    this.req.headers.client_ip  = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (notEncypt == true) {
        //logger.record("REQUEST", req.url, this.req.requestParams, this.req.headers, response);

        res.status(200);
        res.json(response);
    } else {
        //logger.record("REQUEST", req.url, this.req.requestParams, this.req.headers, response);
        var privateKey = this.req.metaData.privateKey;
        var responseEncrypt = cryptoEncrypt.encrypt(JSON.stringify(response), privateKey);
        res.status(200);
        res.send(responseEncrypt);
    }
};
