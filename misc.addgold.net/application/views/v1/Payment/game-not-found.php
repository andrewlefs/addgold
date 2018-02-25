<?php

use Misc\Security;

include $controller->getPathView() . 'header.php';
?>
<div class="col-xs-12 nav-bar">
    <div class="menu-h col-xs-6">
        <div class="DUQW2P-X-c" style="margin-top: 0px; margin-right: 0px;">                
            <ul> 
                <li class="active"><a href="/nap-<?php echo $gameId ?>.html">Nạp Tiền</a></li>  
                <li><a href="/ty-gia-<?php echo $gameId ?>.html">Tỷ giá</a></li>              
            </ul>
        </div> 
    </div>
    <?php include 'game-dropdown.php' ?>
</div>
<form id="submitRecharg" action="/topup" style="display: inline-block">
    <input type="hidden" value="<?php echo $hashToken ?>" name="token" id="token" />
    <input type="hidden" value="<?php echo $event ?>" name="event" id="event" />
    <div class="col-xs-12" style="margin-top: 15px">
        <?php if ($eventLinks == true) { ?>
        <div class="col-xs-12" style="text-align: center;">
            <a style="color: #000" href="<?php echo $eventLinks["link"] ?>"><?php echo $eventLinks["title"] ?></a>
            </div>
        <?php } ?>
        <div class="col-xs-12" style="text-align: center;">
            <?php echo $message; ?>
        </div>        
        <?php
        if (!empty($note)) {
            ?>
            <div class="col-xs-12 note">
                <label style="color: red">Lưu ý: </label><br>
                <span><?php echo $note ?></span>
            </div>
            <?php
        }
        ?>

    </div>
</form>
<div id="dialog-result"></div>
<script type="text/javascript">
    $(document).ready(function () {

    });
</script>
<?php
include $controller->getPathView() . 'footer.php';
?>

