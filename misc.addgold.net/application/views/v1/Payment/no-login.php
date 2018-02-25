<?php

use Misc\Security;

include $controller->getPathView() . 'header.php';
?>
<div class="col-xs-12 nav-bar">
<!--    <div class="col-xs-6">
        <div class="DUQW2P-X-c" style="margin-top: 0px; ">                
            <ul> 
                <li><a href="/nap-<?php echo empty($gameId) ? '0' : $gameId ?>.html">Nạp Tiền</a></li>  
                <li><a href="/ty-gia-<?php echo empty($gameId) ? '0' : $gameId ?>.html">Tỷ giá</a></li>              
            </ul>
        </div> 
    </div>     -->
</div>
<div class="alert_login">
    <strong>Vui Lòng Đăng Nhập Để Nạp Thẻ</strong>
    <br>
    <a href="https://id.addgold.net/login.html?client_id=10000&redirect_url=<?php echo urlencode("https://tips.addgold.net/oauth.html") ?>&action=dang-nhap"><button class="login-button">ĐĂNG NHẬP</button></a>    
</div>
<?php
include $controller->getPathView() . 'footer.php';
?>
