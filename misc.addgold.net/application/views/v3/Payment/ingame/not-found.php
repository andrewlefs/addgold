<?php

use Misc\Security;

include $controller->getPathView() . 'ingame/header.php';
?>
<div style="text-align: center">Tạm thời chưa lấy được thông tin tài khoản. Vui lòng thử lại sau</div>
<script type="text/javascript">
    $(document).ready(function(){
        //$("body").customLoading();
    })
</script>
<?php
include $controller->getPathView() . 'ingame/footer.php';
?>
