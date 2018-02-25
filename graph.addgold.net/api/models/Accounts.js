var md5 = require('md5');
var _ = require('lodash');

module.exports = {
    tableName: 'accounts',
    schema: true,
    attributes: {
        account_id: {type: 'integer', unique: true},
        account: {type: 'string', unique: true, notNull: false},
        type: {type: 'string', enum: ['default', 'device', 'facebook', 'google','apple'], defaultsTo: 'default'},
        status: {type: 'string', enum: ['normal', 'lock'], defaultsTo: 'normal'},
        password: {type: 'string'},
        email: {type: 'email', unique: true, notNull: false},
        device_id: {type: 'string'},
        user_agent: {type: 'string'},
        platform: {type: 'string'},
        channel: {type: 'string'},
        channel_cfg: {type: 'string'},
        telco: {type: 'string'},
        google_aid: {type: 'string'},
		ios_ifa: {type: 'string'},
        sd: {type: 'json'},
        ip: {type: 'json'},
        list_service: {type: 'json'},
		update_time_temp:{type: 'datetime'},
        password_temp:{type: 'string'},
        is_private: {type: 'string'},
		phone: {type: 'string', notNull: false},
    },
    beforeCreate(values, cb) {
        values["account_id"] = Math.floor(Math.random() * (999999999 - 100000000)) + 100000000;
        if (_.isEmpty(values.password) == false) {
            values.password = md5(values.password);
        }
        if (_.isEmpty(values['email']) == false) {
            values['email'] = _.toLower(values['email']);
        }
        if (_.isEmpty(values['account']) == false) {
            values['account'] = _.toLower(values['account']);
        }
        cb();
    },
}
