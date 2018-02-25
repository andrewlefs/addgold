var axios = require('axios');
var facebookGraph = 'https://graph.facebook.com';
var facebookURL = 'https://www.facebook.com';
var facebookProfile = 'https://graph.facebook.com/me';

module.exports = {
    verify_token: function (fb_access_token) {
        return new Promise((resolve, reject) => {
            var field = 'id,name,token_for_business';
            var link = facebookProfile + `/?access_token=${fb_access_token}&fields=${field}`;
            axios.get(link).then(response => {
                resolve(response.data)
            }, error => {
                reject(error);
            });
        });
    },
};
