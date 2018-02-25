<?php

use Misc\Security;

include $controller->getPathView() . 'header.php';
?>


<div class="list">
    <div class="container">
        <div class="heading">
            <img src="/v3/nap/images/icon-menu.png" class="img-responsive"/>
            <span>Sản phẩm nổi bật</span>
        </div>
    </div>

    <div class="row">

        <?php
        if ($gameList == true) {
        ?>

            <?php
            if ($gameList == true && is_array($gameList)) {
                foreach ($gameList as $key => $value) {
                    if ($value["publish"] == 0 && !in_array(Misc\Http\Util::get_remote_ip(), array("127.0.0.1", "118.69.76.212", "115.78.161.88", "115.78.161.124", "115.78.161.134"))) {
                        continue;
                    }
                    ?>

                    <div class="col-md-2 col-sm-3 col-xs-6">
                        <div class="item">
                            <a  href="/nap-<?php echo $value["app_id"] ?>.html" title="<?php echo $value["name"] ?>" >
                                <img alt="<?php echo $value["name"] ?>" class="img-responsive" src="<?php echo $value["icon"] ?>" aria-hidden="true">
                            </a>
                        </div>
                    </div>

                    <?php
                }
            }
            ?>


        <?php } ?>

    </div>
</div>


<div class="bottom">
    <span class="text-lg">Liên hệ với chúng tôi</span>
    <span class="text-sm">Để nhận nhiều thông tin hơn từ Làng Game</span>
    <span class="line"></span>
    <div class="box">
        <img src="/v3/nap/images/qrcode.jpg" class="img-responsive qrcode"/>
        <div class="dl">
            <a>
                <img src="/v3/nap/images/appstore.png" class="img-responsive"/>
            </a>
            <a>
                <img src="/v3/nap/images/googleplay.png" class="img-responsive"/>
            </a>
        </div>
    </div>
</div>



<?php
    include $controller->getPathView() . 'footer.php';
?>
