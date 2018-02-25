$(document).ready(function() {
    $('#pay_card_form').ajaxForm({
        url: url + '?control=payment&func=verify_card',
        type: 'post',
        dataType: 'json',
        data: getUrlVars(),
        success: function(result) {
            try {
                var code = result.code;
                var message = result.desc;
                var data = result.data;
                switch (code) {
                    case 300:
                        show_dialog(data.message,data.callback);
						window.location.href = window.location.href + '#success';
						$('#pay_card_form').html('Vui lòng đóng cửa sổ để tiếp tục !');
                        break;
                    case 301:
                        show_dialog(data.message);
                        break;                    
                }
				//$('#pay_card_form').find('.submit').val('NẠP');
            } catch (err) {

            }
        },
        beforeSubmit: function(formData, jqForm, options) {
			if(window.location.href.indexOf("#success") > 0){
				show_dialog('Có lỗi xãy ra, để nạp tiếp cần đóng cửa sổ nạp tiền và thử lại !');
				return false;
			}
			$('#pay_card_form').find('.submit').val('NẠP ...');
        }
    });
});
