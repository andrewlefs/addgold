var md5 = require('md5');

module.exports = {
    tableName: 'social_apple',
    schema: true,
    attributes: {
        account_id: {type: 'integer', unique: true},
        playerId: {type: 'string', unique: true},
        bundleId: {type: 'string'},
        signature: {type: 'string'},
        salt: {type: 'string'}
    },
}
