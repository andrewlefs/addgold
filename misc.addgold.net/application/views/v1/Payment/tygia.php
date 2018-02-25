<?php

use Misc\Security;

include $controller->getPathView() . 'header.php';
?>
<div class="col-xs-12 nav-bar">
    <div class="menu-h col-xs-6">
        <div class="DUQW2P-X-c" style="margin-top: 0px; margin-right: 0px;">                
            <ul> 
                <li><a href="/nap-<?php echo $gameId ?>.html">Nạp Tiền</a></li>  
                <li class="active"><a href="/ty-gia-<?php echo $gameId ?>.html">Tỷ giá</a></li>              
            </ul>
        </div> 
    </div>
    <?php include 'game-dropdown.php' ?>
</div>
<div class="col-xs-12" style="margin-top: 15px">
    <label>Bảng tỷ giá nạp</label>
    <div class="col-xs-12">
        <label>Chọn hình thức nạp:</label>
    </div>
    <div class="col-xs-12">
        <select id="exchange" name="exchange" class="form-control" style="max-width: 250px;">
            <option value="">Chọn hình thức nạp</option>
            <option value="card">Thẻ cào</option>            
        </select>
    </div>
    <div class="col-xs-12">
        <div id="exchangeList" class="exchange-list"></div>
    </div>
</div>
<script type="text/javascript">
    $(document).ready(function () {

    });
</script>
<?php
include $controller->getPathView() . 'footer.php';
?>

