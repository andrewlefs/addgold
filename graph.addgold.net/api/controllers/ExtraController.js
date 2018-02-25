var md5 = require('md5');
var _ = require('lodash');
var fs = require('fs');
var parse = require('csv-parse');
var async = require('async');
var csvWriter = require('csv-write-stream');

module.exports = {
    unlock: function (req, res) {
        var params = req.allParams();

        if (_.isUndefined(params.account)) {
            return res.toJSON('INVALID_PARAMS');
        }
        params.account = _.toLower(params.account);

        async.waterfall([
            function(callback) {
                findAccount(callback);
            },
            function(accountInfo, callback) {
                updateAccount(accountInfo, callback);
            }
        ],function(err, tokenInfo) {
            if(err){
                return res.toJSON(err, null, true);
            }
            else{
                return res.toJSON('UNLOCK_SUCCESS', tokenInfo, true);
            }
        });

        // AUTHORIZE
        function findAccount(callback){
            Accounts.findOne({account: params.account}).then((result) => {
                if (_.isEmpty(result)) {
                    callback('ACCOUNT_NOT_EXIST');
                } else {
                    callback(null, result);
                }
            }, error => {
                callback('ACCOUNT_NOT_EXIST');
            });
        }

        // UPDATE Account
        function updateAccount(accountInfo, callback){
            if(accountInfo.status == 'lock'){
                var data = {
                    'status': 'normal',
                };
                Accounts.update({account_id: accountInfo.account_id}, data).then(accountInfo => {
                    var tokenInfo = {
                        'account': accountInfo[0].account,
                        'email': accountInfo[0].email
                    };
                    callback(null, tokenInfo);
                }, error => {
                    callback("UNLOCK_FAIL");
                });
            }
            else{
                callback("ACCOUNT_NORMAL");
            }
        }
    },

    export_account: function (req, res) {
        req.file('file').upload({
            dirname: require('path').resolve(sails.config.appPath, '.tmp/public')
        },function (err, uploadedFiles) {
            if (err) return res.negotiate(err);

            if (uploadedFiles.length === 0){
                return res.badRequest('Bạn chưa chọn file upload.');
            }

            if(uploadedFiles[0].fd.split('.').pop() != 'csv' || uploadedFiles[0].type != 'application/vnd.ms-excel'){
                return res.badRequest('Chỉ hổ trợ file csv');
            }

            var APP_PATH = process.cwd();
            var inputFile = uploadedFiles[0].fd;
            var file_name = Math.round(new Date().getTime()/1000) + Math.floor((Math.random() * 9999) + 1000) + '.csv';
            var outFile = APP_PATH + '/.tmp/public/' + file_name;
            console.log('outFile', outFile);

            var csvData=[];
            var i = 0;

            fs.createReadStream(inputFile)
                .pipe(parse({delimiter: ','}))
                .on('data', function(csvrow) {
                    //console.log(csvrow);
                    //do something with csvrow
                    csvData.push(csvrow);

                })
                .on('end',function() {
                    var i=0;
                    var writer = csvWriter({ headers: ["date","action","ads","package","click","subid","device_id","","account_id", "msi_id"]});
                    writer.pipe(fs.createWriteStream(outFile));
                    async.eachSeries(csvData, function(csvrow, callback) {
                        var device_id = csvrow[6];

                        Accounts.find({device_id: device_id}).then((result) => {
                            // csvrow.push(result[0].account_id);
                            // writer.write(csvrow, 'utf8', function() {
                            //     console.log('result' ,result);
                            //     callback();
                            // });

                            if (_.isEmpty(result)) {
                                i++;
                                console.log('i' ,i);

                                writer.write(csvrow, 'utf8', function() {
                                    callback();
                                });
                            } else {
                                csvrow.push(result[0].account_id);
                                MSIService1001.findOne({account_id: result[0].account_id}).then((msiInfo) => {
                                    if (!_.isEmpty(msiInfo)) {
                                        csvrow.push(msiInfo.msi_id);
                                    }
                                    i++;
                                    console.log('i' ,i);

                                    writer.write(csvrow, 'utf8', function() {
                                        callback();
                                    });
                                }, error => {
                                    console.log(error);
                                });
                            }
                        }, error => {
                            console.log(error);
                        });
                    }, function(err) {
                        writer.end();

                        // if any of the file processing produced an error, err would equal that error
                        if( err ) {
                            // One of the iterations produced an error.
                            // All processing will now stop.
                            console.log('A file failed to process');
                            return res.badRequest('Không thể xử lý file');
                        } else {
                            return res.json({
                                message: 'Thành công!',
                                data: file_name
                            });
                        }
                    });
                    //do something wiht csvData
                    //console.log(csvData);
                });
        });
    }

    /*map_account: function (req, res) {
        var params = req.allParams();

        var APP_PATH = process.cwd();
        var inputFile= APP_PATH + '/logs/Adflex_invalid_1.csv';
        var outFile= APP_PATH + '/logs/Adflex_invalid_Account.csv';

        var csvData=[];
        var i = 0;

        fs.createReadStream(inputFile)
            .pipe(parse({delimiter: ','}))
            .on('data', function(csvrow) {
                //console.log(csvrow);
                //do something with csvrow
                csvData.push(csvrow);

            })
            .on('end',function() {
                var i=0;
                var writer = csvWriter({ headers: ["date","action","ads","package","click","subid","device_id","","account_id", "msi_id"]});
                writer.pipe(fs.createWriteStream(outFile));
                async.eachSeries(csvData, function(csvrow, callback) {
                    var device_id = csvrow[6];

                    Accounts.find({device_id: device_id}).then((result) => {
                        // csvrow.push(result[0].account_id);
                        // writer.write(csvrow, 'utf8', function() {
                        //     console.log('result' ,result);
                        //     callback();
                        // });

                        if (_.isEmpty(result)) {
                            i++;
                            console.log('i' ,i);

                            writer.write(csvrow, 'utf8', function() {
                                callback();
                            });
                        } else {
                            csvrow.push(result[0].account_id);
                            MSIService1001.findOne({account_id: result[0].account_id}).then((msiInfo) => {
                                if (!_.isEmpty(msiInfo)) {
                                    csvrow.push(msiInfo.msi_id);
                                }
                                i++;
                                console.log('i' ,i);

                                writer.write(csvrow, 'utf8', function() {
                                    callback();
                                });
                            }, error => {
                                console.log(error);
                            });
                        }
                    }, error => {
                        console.log(error);
                    });
                }, function(err) {
                    writer.end();

                    // if any of the file processing produced an error, err would equal that error
                    if( err ) {
                        // One of the iterations produced an error.
                        // All processing will now stop.
                        console.log('A file failed to process');
                    } else {
                        console.log('All files have been processed successfully');
                    }
                });
                //do something wiht csvData
                //console.log(csvData);
            });

    }*/
}