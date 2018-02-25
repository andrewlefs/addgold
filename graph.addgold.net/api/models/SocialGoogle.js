var md5 = require('md5');

module.exports = {
    tableName: 'social_google',
    schema: true,
    attributes: {
        account_id: {type: 'integer', unique: true},
        google_id: {type: 'string', unique: true},
    },
}
