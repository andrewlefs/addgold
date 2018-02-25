module.exports = {
    tableName: 'quick_account',
    schema: true,
    attributes: {
        account_id: {type: 'integer', unique: true},
        device_id: {type: 'string', unique: true}
    },
}
