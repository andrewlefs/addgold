$(document).ready(function() {
    $('#authorize_form').ajaxForm({ 
        url: url + '?control=user&func=verify_authorize',
        type: 'post',
        dataType: 'json',
        data: getUrlVars(),
        success: function(result) {
            try {
                var code = result.code
                var message = result.message
                var data = result.data
                switch (code) {
                    case 100:
                        send_access_token_to_client(data.client_id, data.access_token)
                        redirect(url_login);
                        break;
                    default:                        
                        show_message(message);
                        break;
                }
            } catch (err) {

            }
        },
        beforeSubmit: function(formData, jqForm, options) {

        }
    });
    $('#trial_form').ajaxForm({
        url: url + '?control=user&func=register_trial',
        type: 'post',
        dataType: 'json',
        data: getUrlVars(),
        success: function(result) {
            try {
                var code = result.code
                var message = result.message
                var data = result.data
                switch (code) {
                    case 100:
                        send_access_token_to_client(data.client_id, data.access_token)
                        break;
                    default:
                        show_message(message);
                        break;
                }
            } catch (err) {

            }
        },
        beforeSubmit: function(formData, jqForm, options) {

        }
    });
    $('#facebook_form').ajaxForm({
        url: url + '?control=user&func=authorize_facebook',
        type: 'post',
        dataType: 'json',
        data: getUrlVars(),
        success: function(result) {
            try {
                var code = result.code
                var message = result.message
                var data = result.data
                switch (code) {
                    case 122:
                        redirect(data.login_url);
                        break;
                    default:
                        show_message(message);
                        break;
                }
            } catch (err) {

            }
        },
        beforeSubmit: function(formData, jqForm, options) {

        }
    });
});
