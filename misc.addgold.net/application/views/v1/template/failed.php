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
                                <br>
                                <span class="bold"><?php echo $message ?></span>   
                            </div>
                            <a class="btn submit-button" href="/dialog/v1.0/<?php echo $action, "/?", http_build_query($_GET) ?>">Thử lại</a>
                        </div>
                    </div>
                </form>
            </div>            
        </div> <!-- body-sdk -->

    </div>
</div>
<?php
include $controller->getPathView() . 'script.php';
include $controller->getPathView() . 'footer.php';
?>
