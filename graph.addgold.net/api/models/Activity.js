var md5 = require('md5');
var _ = require('lodash');

module.exports = {
    tableName: 'activity',
    schema: true,
    attributes: {
        account_id: {type: 'integer'},
        type: {type: 'string', enum: ['reg','verify'], defaultsTo: 'reg'},
        params: {type: 'json'},
        header: {type: 'json'},
        des: {type: 'json'}
    }
}
