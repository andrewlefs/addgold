<?php

use Misc\Security;

include $controller->getPathView() . 'header.php';
?>

<div class="wrap-content">

    <div class="col-xs-12" style="margin-top: 15px">
        <span>Đang cập nhật</span>
    </div>


</div>

<script type="text/javascript">
    $(document).ready(function () {
        var resize = function () {
            $.each($("img"), function (idx, item) {
                console.log($(item).width());
                if ($(item).width() > ($(window).width() - 40)) {
                    $(item).removeAttr("height");
                    $(item).removeAttr("width");
                    $(item).css({width: ($(window).width() - 40)});
                }
            });
        }
        resize();
        $(window).on("resize", function () {
            resize();
        });
    });
</script>
<?php
include $controller->getPathView() . 'footer.php';
?>

