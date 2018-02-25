/**
 * Inside/AccountController
 *
 * @description :: Server-side logic for managing inside/accounts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    count: function(req, res) {
        var query = {};
        if (typeof req.param('where') !== 'undefined') {
            query.where = JSON.parse(req.param('where'));
        }

        Accounts.count(query, function(err, number) {
            return res.send({
                count: number
            });
        });
    },

    export_account: function (req, res) {
        req.file('file').upload({
            dirname: require('path').resolve(sails.config.appPath, 'assets/images')
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
            var outFile = APP_PATH + '/assets/images/' + file_name;
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

};

