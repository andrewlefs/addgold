var md5 = require('md5');

module.exports = {
    tableName: 'social_facebook',
    schema: true,
    attributes: {
        account_id: {type: 'integer'},
        facebook_id: {type: 'string'},
        facebook_token: {type: 'string', unique: true},
    },
}
