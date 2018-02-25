module.exports = {
    required(params, needles, isDefault){
        var result = true;
        var intersect = 0;
        if (_.isUndefined(isDefault)) {
            var defaultRequried = ['user_agent', 'platform', 'channel', 'telco', 'version', 'lang', 'package_name'];
            needles = needles.concat(defaultRequried);
            intersect = _.intersection(_.keys(params), needles);
        } else {
            intersect = _.intersection(_.keys(params), needles);
        }

        if(intersect.length == needles.length){
            _.forEach(needles, function(key) {
                if(_.isNull(params[key]) || _.isUndefined(params[key])){
                    result =  false;
                }
            });
        }
        else{
            result =  false;
        }

        return result;
    },

    requiredWeb(params, needles, isDefault){
        var result = true;
        var intersect = 0;
        if (_.isUndefined(isDefault)) {
            var defaultRequried = [];//'user_agent', 'channel', 'version', 'lang'
            needles = needles.concat(defaultRequried);
            intersect = _.intersection(_.keys(params), needles);
        } else {
            intersect = _.intersection(_.keys(params), needles);
        }

        if(intersect.length == needles.length){
            _.forEach(needles, function(key) {
                if(_.isNull(params[key]) || _.isUndefined(params[key])){
                    result =  false;
                }
            });
        }
        else{
            result =  false;
        }

        return result;
    },

    validAccount(account){
        var matches = account.match(/([a-zA-Z0-9]+)/);
        if (_.isEmpty(matches) == false && account == matches[0]) {
            return true;
        }
        return false;
    }
}
