<?php

use Misc\Security;

include $controller->getPathView() . 'header.php';
?>
<div class="col-xs-12 nav-bar">
    <div class="col-xs-6">
        <div class="DUQW2P-X-c" style="margin-top: 0px; ">                
            <ul> 
                <li><a href="/nap-<?php echo empty($gameId) ? '0' : $gameId ?>.html">Nạp Tiền</a></li>  
                <li><a href="/ty-gia-<?php echo empty($gameId) ? '0' : $gameId ?>.html">Tỷ giá</a></li>              
            </ul>
        </div> 
    </div>
   
</div>
<div class="col-xs-12" style="margin-top: 15px">
    <label>Build Bảng Thông tin KM tại đây.</label>
</div>
<script type="text/javascript">
    $(document).ready(function () {

    });
</script>
<?php
include $controller->getPathView() . 'footer.php';
?>

