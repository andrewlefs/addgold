var URI = require('urijs');
var axios = require('axios');
var MISC_URL = 'https://misc.addgold.net/app/v1.0';

module.exports = {
    init: function (params) {
        return new Promise((resolve, reject) => {
            var link = MISC_URL + `/init/?` + URI.buildQuery(params);
		console.log(link);
            makeRequest(link).then(response => {
		console.log('rp', response);
		console.log('bb');
                resolve(response);
            }, error => {
                reject(error);
            });
        });
    },
    edit_init_gm_support: function (params) {
        return new Promise((resolve, reject) => {
            var link = MISC_URL + `/gm_support/?` + URI.buildQuery(params);
            console.log(link);
            makeRequest(link).then(response => {
                console.log('rp', response);
                console.log('bb');
                resolve(response);
            }, error => {
                reject(error);
            });
        });
    },
    edit_init_icon_mobo: function (params) {
        return new Promise((resolve, reject) => {
            var link = MISC_URL + `/icon_mobo/?` + URI.buildQuery(params);
            console.log(link);
            makeRequest(link).then(response => {
                console.log('rp', response);
                console.log('bb');
                resolve(response);
            }, error => {
                reject(error);
            });
        });
    },

    get_gm_support: function (params) {
        return new Promise((resolve, reject) => {
            var link = MISC_URL + `/get_gm_support/?` + URI.buildQuery(params);
            console.log(link);
            makeRequest(link).then(response => {
                console.log('rp', response);
                console.log('bb');
                resolve(response);
            }, error => {
                reject(error);
            });
        });
    },
    get_icon_mobo: function (params) {
        return new Promise((resolve, reject) => {
            var link = MISC_URL + `/get_icon_mobo/?` + URI.buildQuery(params);
            console.log(link);
            makeRequest(link).then(response => {
                console.log('rp', response);
                console.log('bb');
                resolve(response);
            }, error => {
                reject(error);
            });
        });
    },

    paymentList: function (params) {
        return new Promise((resolve, reject) => {
            var link = MISC_URL + `/paymentlist/?` + URI.buildQuery(params);
            console.log(link)
            makeRequest(link).then(response => {
                resolve(response);
            }, error => {
                reject(error);
            });
        });
    }
}

function makeRequest(link) {
    return new Promise((resolve, reject) => {
        axios.get(link).then(response => {
            resolve(response.data);
        }, error => {
            reject(error);
        });
    });
}
