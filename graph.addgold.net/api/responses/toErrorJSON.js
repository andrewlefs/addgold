module.exports = function send(error) {
    var res = this.res;
    var rawParam = this.req.allParams();
    getErrorDesc(error).then(description => {
        var response = {
            code: responseCode.getCode(description),
            desc: description,
            data: "",
            message: responseCode.getMessage(description)
        };
        logger.record("REQUEST", rawParam.q, this.req.requestParams, this.req.headers, response);
        
        var privateKey = this.req.metaData.privateKey;
        var responseEncrypt = cryptoEncrypt.encrypt(JSON.stringify(response), privateKey);
        res.status(200);
        res.send(responseEncrypt);
    });
};

function getErrorDesc(error) {
    return new Promise((resolve, reject) => {
        _.forEach(error.invalidAttributes, (errorInfo, errorType) => {
            if (errorType == 'email') {
                if (errorInfo[0].rule == 'email') {
                    resolve("INVALID_EMAIL");
                } else if (errorInfo[0].rule == 'unique') {
                    resolve("EMAIL_EXIST");
                }
            }
            
            if (errorType == 'account') {
                if (errorInfo[0].rule == 'unique') {
                    resolve("ACCOUNT_EXIST");
                }
            }
        });
    });
}
