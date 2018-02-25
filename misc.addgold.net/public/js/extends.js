$(document).ready(function () {
        $.ajax({
            type: "GET",
            url: urllink,
            data: {},
            dataType: "jsonp",
            success: function (data) {
                //console.log(data);
                $('div#wysiwyg-content').html(data);
                $('#wysiwyg-content img').error(function () {
                    $(this).unbind('error').attr('src', 'http://eden.mobo.vn/' + $(this).attr('src'));
                });
            }
    });
}); 