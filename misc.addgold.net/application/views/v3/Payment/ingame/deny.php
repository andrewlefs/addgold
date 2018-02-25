<?php

use Misc\Security;

include $controller->getPathView() . 'ingame/header.php';
?>
<form action="#">
    <div class="cart-box">
        <div class="padding-top">
            <div class="header-info text-center"> 
                <img src="/v1/inapp/images/fail.svg" class="icon-header" alt="">                
                <span class="bold"><?php echo $message ?></span>   
            </div>            
        </div>
    </div>
</form>
<?php
include $controller->getPathView() . 'ingame/footer.php';
?>
