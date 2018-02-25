var axios = require('axios');
var googleURL = 'https://www.googleapis.com/plus/v1/people/me';
//https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=ya29.Ci88Ay21EsDwKZ5St_qDkx4SAkTL1VM2SVEVUZcxboPxN20Iyp0T6Gr1vUmkk4AeTQ
module.exports = {
    verify_token: function (google_access_token) {
        return new Promise((resolve, reject) => {
            var link = googleURL + '/?access_token=' + google_access_token;
            //resolve({
            //    id: "90812312312345511111"
            //})
            axios.get(link).then(response => {
                resolve(response.data)
            }, error => {
                reject(error);
            });
        });
    },
};
