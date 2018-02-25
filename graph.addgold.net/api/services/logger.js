var fs = require('fs');
var mkdir = require('mkdirp');
var moment = require('moment');

module.exports = {
    record: function () {
        var data = [];
        if (arguments[0] == "REQUEST") {
            //data.push("URL: " + decodeURIComponent(arguments[1]));
            data.push("TIME: " + moment().format("YYYY-MM-D HH:mm:ss"));
            data.push("PARAMS: " + JSON.stringify(arguments[2]));
            data.push("HEADERS: " + JSON.stringify(arguments[3]));
            data.push("RESPONSE: " + JSON.stringify(arguments[4]));
        } else {
            for (var i = 0; i < arguments.length; i++) {
                if (_.isString(arguments[i])) {
                    data.push(arguments[i]);
                } else if (_.isObject(arguments[i])) {
                    data.push(JSON.stringify(arguments[i]));
                }
            }
        }

        var APP_PATH = process.cwd();
        var logTime = moment().format("Y/MM/D");
        var logDir = APP_PATH + '/logs/';
        var logPath = logDir + '/' + logTime + '/' + 'request_' + moment().format("H") + '.log';

        fs.access(logDir + '/' + logTime, fs.F_OK, function (err) {
            if (err) {
                mkdir(logDir + '/' + logTime, function (err) {
                    if (err) console.error(err);
                    writeFile(logPath, data);
                    delete data;
                });
            } else {
                writeFile(logPath, data);
                delete data;
            }
        });
    }
}

function writeFile(path, data) {
    fs.appendFile(path, data.join("\r\n") + "\r\n======================\r\n", function (err) {
        if (err) {
            console.error(err);
            return false;
        }
        return true;
    });
}
