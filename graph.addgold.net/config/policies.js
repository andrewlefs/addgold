/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your controllers.
 * You can apply one or more policies to a given controller, or protect
 * its actions individually.
 *
 * Any policy file (e.g. `api/policies/authenticated.js`) can be accessed
 * below by its filename, minus the extension, (e.g. "authenticated")
 *
 * For more information on how policies work, see:
 * http://sailsjs.org/#!/documentation/concepts/Policies
 *
 * For more information on configuring policies, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.policies.html
 */


module.exports.policies = {
    UserController: {
        '*': 'authorizeToken',
        'get_info': ['authorizeToken', 'requireLogin'],
        'update_channel': ['authorizeToken', 'requireLogin'],
        'update_device_info': ['authorizeToken', 'requireLogin'],
        'mapping_account': ['authorizeToken', 'requireLogin'],
        'register': ['validResgiterPrivate'],
        'check_email_api':[]
    },
    WebController: {
        '*': 'authorizeToken',
        'get_info': ['authorizeToken', 'requireLogin'],
        'update_channel': ['authorizeToken', 'requireLogin'],
        'verify_access_token': []
    },
    ReportController: {
        '*': 'authorizeInsideMobo'
    },
    InsideController: {
        '*': 'authorizeInsideMobo'
    },
    InitController: 'authorizeToken',
    PaymentController: {
        '*': 'authorizeToken',
        'get_list': ['authorizeToken', 'requireLogin']
    },
    'Inside/AccountController': {
        '*': 'authorizeInside',
    }
};

