var md5 = require('md5');

module.exports = {
    tableName: 'access_token',
    schema: true,
    attributes: {
        msi_id: {type: 'string'},
        account_id: {type: 'integer'},
        access_token: {type: 'string'},
        device_id: {type: 'string'},
        hash: {type: 'string'},
        user_agent: {type: 'string'},
        platform: {type: 'string'},
        channel: {type: 'string'},
        telco: {type: 'string'},
        service_id: {type: 'string'},
    },

    getSchema(params, msi_id, account_id, accessToken){
        return {
            msi_id: msi_id,
            account_id: account_id,
            access_token: accessToken,
            hash: md5(accessToken),
            device_id: params.device_id,
            user_agent: params.user_agent,
            platform: params.platform,
            channel: params.channel,
            service_id: params.app
        }
    }
}
