$(document).ready(function() {

    (function() {
        // If we've already installed the SDK, we're done
        if (document.getElementById('facebook-jssdk')) {
            return;
        }

        // Get the first script element, which we'll use to find the parent node
        var firstScriptElement = document.getElementsByTagName('script')[0];

        // Create a new script element and set its id
        var facebookJS = document.createElement('script');
        facebookJS.id = 'facebook-jssdk';

        // Set the new script's source to the source of the Facebook JS SDK
        facebookJS.src = '//connect.facebook.net/en_US/all.js';

        // Insert the Facebook JS SDK into the DOM
        firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
    }());

    $('#facebook_like_form').ajaxForm({
        url: url + '?control=facebook&func=verify_like',
        type: 'post',
        dataType: 'json',
        data: getUrlVars(),
        success: function(result) {
            try {
                var code = result.code;
                var message = result.message;
                var data = result.data;
                switch (code) {
                    case 100:
                        send_access_token_to_client(data.client_id, data.access_token);
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

    $('#facebook_share_form').ajaxForm({
        url: url + '?control=facebook&func=share',
        type: 'post',
        dataType: 'json',
        data: getUrlVars(),
        success: function(result) {
            try {
                var code = result.code;
                var message = result.message;
                var data = result.data;
                switch (code) {
                    case 100:
                        send_access_token_to_client(data.client_id, data.access_token);
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
    invate = function(message) {
        if (!message)
            message = 'Gửi yêu cầu';
        FB.ui({
            method: 'apprequests',
            message: message
        },
        function(receiverUserIds) {
            if (receiverUserIds.request) {
                $.ajax({
                    url: url + '?control=facebook&func=request',
                    type: 'POST',
                    cache: false,
                    dataType: 'json',
                    data: $.extend(getUrlVars(), receiverUserIds),
                    success: function(result) {
                        show_message(result.message);
                    }
                });
            }
        });
    }
});
