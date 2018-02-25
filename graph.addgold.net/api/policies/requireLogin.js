var _ = require('lodash');
var md5 = require('md5');

module.exports = function (req, res, next) {
    var params = req.requestParams;
    var headers = req.headers;
    if (_.isNull(params.access_token) || _.isUndefined(params.access_token) || _.isEmpty(params.access_token)) {
        return res.toJSON('INVALID_REQUEST', {params: params, headers: headers}, true);
    } else {
        AccessToken.findOne({hash: md5(params.access_token)}).then(response => {
            if (_.isEmpty(response)) {
                res.toJSON("ACCESS_TOKEN_INVALID");
            } else {
                try{
                    var atDecode = JSON.parse(base64.decode(params.access_token));
                    req.userData = {
                        accessToken: response,
                        account_id: atDecode.id
                    };
                    return next();
                }
                catch(err) {
                    res.toJSON("ACCESS_TOKEN_INVALID");
                }
            }
        }, error => {
            res.toJSON("ACCESS_TOKEN_INVALID");
        });
    }
}
