var URI = require('urijs');
var axios = require('axios');
var md5 = require('md5');
var PAYMENT_URL = 'http://payment.dxglobal.net';
var PAYMENT_APP = "graph.dxglobal.net";
var PAYMENT_KEY = "YAtSTMfEAP";


module.exports = {
    verify_google: function (params) {
        return new Promise((resolve, reject) => {
            makeRequest('inapp', 'google', params).then(response => {
                resolve(response);
            }, error => {
                reject(error);
            });
        });
    },
    verify_apple: function (params) {
        return new Promise((resolve, reject) => {
            makeRequest('inapp', 'apple', params).then(response => {
                resolve(response);
            }, error => {
                reject(error);
            });
        });
    },
    verify_wp: function (params) {
        return new Promise((resolve, reject) => {
            makeRequest('inapp', 'wp', params).then(response => {
                resolve(response);
            }, error => {
                reject(error);
            });
        });
    },
};

function makeRequest(control, func, params) {
    return new Promise((resolve, reject) => {
        var token = generateToken(control, func, params);
        var link = PAYMENT_URL + `/?control=${control}&func=${func}&` + URI.buildQuery(params) + `&app=${PAYMENT_APP}&token=${token}`;
        console.log(link);
        axios.get(link).then(response => {
            if (response.data.code == 1300 || response.data.code == 1200 || response.data.code == 1400) {
                resolve(response.data.data);
            } else {
                reject(response.data);
            }
        }, error => {
            reject(error);
        });
    });
}

function generateToken(control, func, params) {
    return md5(control + func + utils.getValue(params).join("") + PAYMENT_APP + PAYMENT_KEY);
}
