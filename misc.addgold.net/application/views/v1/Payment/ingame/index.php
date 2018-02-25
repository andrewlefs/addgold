<?php

use Misc\Security;

include $controller->getPathView() . 'ingame/header.php';
?>
<div class="sdk-row" id="card">
    <div class="media">        
        <div class="media-left"><div class="col-icon pull-left">
                <a href="#">
                    <img src="/v1/inapp/images/card.svg" class="img-responsive" alt="">
                </a>
            </div></div>
        <div class="media-body"><div class="col-content">
                <a href="#">
                    Thẻ cào điện thoại
                </a>
            </div>
        </div>
        <div class="media-right">
            <div class="right-bt-sdk">
                <a href="#">
                    <img src="/v1/inapp/images/more.svg" class="img-responsive pull-right" alt="">
                </a>
            </div>

        </div>       
    </div>
</div>
<script type="text/javascript">
    $(document).ready(function(){
        $("#card").click(function(){
            window.top.location = "/v1.0/card?<?php echo http_build_query($_GET) ?>";
        });
    });
</script>
<?php
include $controller->getPathView() . 'ingame/footer.php';
?>
