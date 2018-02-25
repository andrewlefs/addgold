<?php

use Misc\Security;

include $controller->getPathView() . 'header.php';
?>
<div class="col-xs-12 nav-bar">
    <div class="col-xs-6">
        <div class="DUQW2P-X-c" style="margin-top: 0px; ">                
            <ul> 
                <li><a href="/nap-<?php echo $gameId ?>.html">Nạp Tiền</a></li>  
                <li class="active"><a href="/ty-gia-<?php echo $gameId ?>.html">Tỷ giá</a></li>              
            </ul>
        </div> 
    </div>
   
</div>
<div class="col-xs-12" style="margin-top: 15px">
    <label>Build Bảng Tỷ Giá Ở Đây</label>
</div>
<script type="text/javascript">
    $(document).ready(function () {

    });
</script>
<?php
include $controller->getPathView() . 'footer.php';
?>

