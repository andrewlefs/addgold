var md5 = require('md5');
var _ = require('lodash');

module.exports = {

    edit_init_gm_support: function (req, res) {
        var params = req.requestParams;
        var rawParam = req.allParams();
        var needles = ["app",'gm_support'];

    /*1. chổ api init information bổ sung thêm 1 key json
    gm_support và trả về cho sdk ( mỗi game sẽ ứng mỗi link - link đc tổ chức ở db graph và nhập vào từ ginside)
     */
        if (validateRequest.requiredWeb(params, needles) == false) {
            return res.toJSON('INVALID_PARAMS',data,true);
        }
        var args = {
            data: rawParam,
            app: req.metaData.appName,
            otp: req.headers.otp,
            token: req.headers.token,
        };

        miscAPI.edit_init_gm_support(args).then((respone) => {
            // redisCache.set(keyCache, respone);
            res.toJSON(respone.desc, respone.data)
        }, error => {
            res.toJSON("NORMAL_STATE");
        });


    },

    edit_init_icon_mobo: function (req, res) {
        var params = req.requestParams;
        var rawParam = req.allParams();
        var needles = ["app",'icon_mobo_floating',"startdate","enddate"];

        /*2. chổ api init information bổ sung thêm 1 key icon_mobo_floating và trả về link icon được lưu trữ ở db graph và nhập liệu từ ginside
         với api số 2 này cần xây tool quản lý với tiêu chí sau:
         - nhập khoảng time từ ngày đến ngày + chọn icon hình up lên server + cập nhật link vào db
         */
        if (validateRequest.requiredWeb(params, needles) == false) {
            return res.toJSON('INVALID_PARAMS',data,true);
        }
        var args = {
            data: rawParam,
            app: req.metaData.appName,
            otp: req.headers.otp,
            token: req.headers.token,
        };

        miscAPI.edit_init_icon_mobo(args).then((respone) => {
            // redisCache.set(keyCache, respone);
            res.toJSON(respone.desc, respone.data)
        }, error => {
            res.toJSON("NORMAL_STATE");
        });


    }
};

