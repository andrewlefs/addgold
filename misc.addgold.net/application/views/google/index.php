<?php

use Misc\Security;

include $controller->getPathView() . 'header.php';
?>

<div class="row row-label col-xs-12">
    <span class="label-rech">Chọn game nạp</span>
</div>

<?php
if ($gameList == true) {
?>
<div class="game-list col-xs-12">
    <?php
    if ($gameList == true && is_array($gameList)) {
    foreach ($gameList as $key => $value) {
    if ($value["publish"] == 0 && !in_array(Misc\Http\Util::get_remote_ip(), array("127.0.0.1", "118.69.76.212", "115.78.161.88", "115.78.161.124", "115.78.161.134"))) {
        continue;
    }
    ?>

    <div class="card">
        <div class="card-content">
            <a href="#" class="target-game"></a>
            <div class="cover">
                <div class="cover-image-container">
                    <div class="cover-outer-align">
                        <div class="cover-inner-align">
                            <img alt="<?php echo $value["name"] ?>" class="cover-image" src="<?php echo $value["icon"] ?>" aria-hidden="true">
                        </div>
                    </div>
                </div>
                <a href="/nap-<?php echo $value["app_id"] ?>.html" title="<?php echo $value["name"] ?>" class="target-game">
                    <span class="movies preordered-overlay-container id-preordered-overlay-container" style="display:none"> <span class="preordered-label">Đã đặt hàng trước</span> </span> <span class="preview-overlay-container">  </span>
                </a>
            </div>
            <div class="details">
                <a class="title" href="/nap-<?php echo $value["app_id"] ?>.html" title="<?php echo $value["name"] ?>" aria-hidden="true" tabindex="-1">  <?php echo $value["name"] ?>  <span class="paragraph-end"></span> </a>
            </div>
        </div>
    </div>

        <?php
        }
    }
    ?>
</div>
<?php
}
?>

<?php
    include $controller->getPathView() . 'footer.php';
?>
