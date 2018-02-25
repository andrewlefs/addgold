<?php

use Misc\Security;

include $controller->getPathView() . 'header.php';
?>

<div class="wrap-content">
    <div class="alert-login col-xs-12">

        <strong>Vui Lòng Đăng Nhập Để Nạp Thẻ</strong>
        <br>
        <a href="https://id.addgold.net/login.html?client_id=10000&redirect_url=<?php echo urlencode("https://tips.addgold.net/oauth.html") ?>&action=dang-nhap"><button class="login-button">ĐĂNG NHẬP</button></a>

    </div>
</div>

<?php
include $controller->getPathView() . 'footer.php';
?>
