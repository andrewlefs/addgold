$(document).ready(function() {
    getUrlVars = function() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
            vars[key] = value;
        });
        delete vars.control;
        delete vars.func;
        return vars;
    };
    send_access_token_to_client = function(client_id, access_token) {
        var url_login = client_id + '://method=authorized&access_token=' + access_token;
        redirect(url_login);
    };
    send_sms_to_client = function(client_id, phone, message) {
        var url_sms = client_id + '://method=pay_sms&phone=' + phone + '&message=' + message;
        redirect(url_sms);
    };
    send_iap_to_client = function(client_id, code) {
        var url_iap = client_id + '://method=pay_iap&code=' + code;
        redirect(url_iap);
    };
    show_message = function(message) {
        $('.content_error').html(message);
        $('.bg_popup').show();
        $('.modal-footer').html('<p style="cursor: pointer;" onclick="closePopup();">QUAY LẠI</p>');
    };
    show_dialog = function(message,callback) {
        $('.content_error').html(message);
        $('.bg_popup').show();		
        $('.modal-footer').html('<p style="cursor: pointer;" onclick="closePopup();">QUAY LẠI</p>');				 
    };
    closePopup = function(callback) {		
	$('.bg_popup').hide();	
    };
    redirect = function(url) {
        top.location.href = url;
    };
});

function confirm_message(message, $url) {
        $('.content_error').html(message);
        $('.bg_popup').show();
        $('.modal-footer').html('\
            <a href="' + $url + '"><p style="cursor: pointer;float:left;width:50%" onclick="closePopup();">ĐỒNG Ý</p></a>\
            <a href="#"><p style="cursor: pointer;float:left;width:50%" onclick="closePopup();">QUAY LẠI</p></a>\
            <div class="clear"></div>\
        ');
    }