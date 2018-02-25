<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"><html lang="en"><head><meta http-equiv="content-type" content="text/html; charset=utf-8">
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
        <!--        <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name="apple-touch-fullscreen" content="yes"/>-->
        <title>Cổng nạp tiền Game</title>                
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Roboto:300,400,500|Material+Icons">        
        <link rel="stylesheet" href="/v1/nap/css/0061.urlshortener.css">
        <link rel="stylesheet" href="/v1/nap/css/bootstrap.min.css"> 
        <!--        <link rel="stylesheet" href="/v1/nap/css/slider.css">
                <link rel="stylesheet" href="/v1/nap/css/applist.css">-->
        <link rel="stylesheet" href="/v1/nap/css/style.css">

        <link rel="stylesheet" href="/v1/nap/css/customer.css">                
        <script type="text/javascript">
            var baselink = "<?php echo $controller->getReceiver()->getHostname() ?>";
            var userInfo = <?php echo isset($_SESSION["loginInfo"]) ? json_encode($_SESSION["loginInfo"]) : "false"; ?>;
            var form = '<?php echo empty($form) ? "" : $form ?>'
            var viewtype = 0;
        </script>        
        <script type="text/javascript" src="/v1/js/jquery-1.12.4.js"></script>  
<!--        <script type="text/javascript" src="/v1/nap/js/jquery-ui.js"></script>-->
        <script type="text/javascript" src="/v1/nap/js/jquery.validate.js"></script>
        <script type="text/javascript" src="/v1/nap/js/bootstrap.min.js"></script>      
        <script type="text/javascript" src="/v1/nap/js/jQuery-fn-Extend.js"></script>
<!--        <script type="text/javascript" src="/v1/nap/js/paginationTable.js"></script>-->
        <script type="text/javascript" src="/v1/nap/js/customer.js"></script>
    </head>
    <body>
        <div class="test-view"></div>
        <div class="DUQW2P-K-j" style="">        
            <div class="container">         
                <div class="wrapper">
                    <div class="DUQW2P-R-b">
                        <div class="DUQW2P-R-c">
                            <div aria-disabled="false" tabindex="0" role="region" class="DUQW2P-T-d DUQW2P-T-f DUQW2P-q-d" banner-style="NEW_FEATURE" collapse="false" aria-expanded="true">
                                <div class="DUQW2P-T-b" style="min-height: 80px">
                                    <div id="login" class="col-xs-12 nav-login">
                                        <?php
                                        if (isset($_SESSION["loginInfo"])) {
                                            ?>
                                            <span>Chào :</span>
                                            <a href="https://id.addgold.net/trang-ca-nhan.html?client_id=10000&action=cap-nhat">
                                                <?php echo $_SESSION["loginInfo"]["account"] ?>
                                            </a>
                                            <span>(<a href="https://id.addgold.net/v1.0/logout.html?client_id=10000&access_token=<?php echo $_SESSION["loginInfo"]["access_token"] ?>&redirect_url=<?php echo urlencode($controller->getReceiver()->getHostname() . "/logout.html?access=" . $controller->getReceiver()->getCookie("lu")) ?>">Thoát</a>)</span>
                                            <?php
                                        } else {
                                            ?>
                                            <a href="https://id.addgold.net/login.html?client_id=10000&redirect_url=<?php echo urlencode($controller->getReceiver()->getHostname() . "/oauth.html") ?>&action=dang-nhap">
                                                <img src="/v1/nap/images/btn-login.png" />
                                            </a>
                                            <?php
                                        }
                                        ?>
                                    </div>
                                    <div class="menu col-xs-12">
                                        <div class="logo-header col-xs-3"><a href="/">
<!--                                                <img src="/v1/nap/images/logo.png" />-->
                                            </a></div>
                                        <div class="menu-content col-xs-9">
                                            <ul class="">                        
                                                <li><a href="/lich-su.html"><span>Lịch sử nạp</span></a></li>
                                                <li><a href="/huong-dan.html"><span>Hướng dẫn</span></a></li>
                                  <!--              <li><a href="/khuyen-mai.html"><span>Khuyến mãi</span></a></li>                        -->
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="DUQW2P-q-k DUQW2P-k-V DUQW2P-M-b">                        
