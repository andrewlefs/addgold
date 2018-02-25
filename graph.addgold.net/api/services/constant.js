var constant = [];
var _ = require('lodash');
module.exports = {
    get: function (key) {
        if (_.isUndefined(constant[key]) == false) {
            return constant[key];
        } else {
            return false;
        }
    },

    set: function (key, value) {
    	constant[key] = value;
        /*if (_.isUndefined(constant[key]) == true) {
            constant[key] = value;
        }*/
    }
}