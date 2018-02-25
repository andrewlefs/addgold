<?php
include $controller->getPathView() . 'header.php';
?>
<div id="sdk-table">
    <div class="sdk-content">
        <div id="body-sdk" >
            <div class="content-sdk" >
                <form action="#">
                    <div class="cart-box">
                        <div class="padding-top">
                            <div class="header-info text-center"> 
                                <img src="<?php echo $assets ?>images/fail.svg" class="icon-header" alt="">
                                <span style="color: fff;"><?php echo $message ?></span>                               
                            </div>                                
                        </div>
                    </div>
                </form>
            </div>
            <?php
            include $controller->getPathView() . 'support.php';
            ?>
        </div> <!-- body-sdk -->

    </div>
</div>
<?php
include $controller->getPathView() . 'script.php';
include $controller->getPathView() . 'footer.php';
?>
