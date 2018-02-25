module.exports = {
    time: function (req, res) {
        res.requestUrl = req.url;
        res.requestHeaders = req.headers;
        res.requestParams = null;
console.log('123');
        return res.toJSON("GET_SUCCESS", {timestamps: Math.floor(Date.now() / 1000)}, true);
    },
}

