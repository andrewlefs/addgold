<!DOCTYPE html>
<html lang="en-US">
<head>

    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta content="width=device-width, initial-scale=0.93, maximum-scale=0.93, user-scalable=0" name="viewport">
    <meta content="yes" name="mobile-web-app-capable">
    <meta content="yes" name="apple-mobile-web-app-capable">
    <meta name="apple-touch-fullscreen" content="yes"/>
    <title>Cổng nạp tiền Game</title>


    <link rel="stylesheet" href="/v3/nap/js/font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="/v3/nap/js/fancybox/dist/jquery.fancybox.min.css">
    <link rel="stylesheet" href="/v3/nap/js/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/v3/nap/js/bootstrap/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="/v3/nap/js/owl.carousel/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="/v3/nap/js/owl.carousel/assets/owl.theme.default.min.css">

    <link rel="stylesheet" href="/v3/nap/css/pc.css" rel="stylesheet" media="only screen and (min-width: 992px)"/>
    <link rel="stylesheet" href="/v3/nap/css/wap.css" rel="stylesheet" media="only screen and (max-width: 992px)"/>

    <link rel="stylesheet" href="/v3/nap/css/0061.urlshortener.css">

    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->


    <script type="text/javascript">
        var baselink = "<?php echo $controller->getReceiver()->getHostname() ?>";
        var userInfo = <?php echo isset($_SESSION["loginInfo"]) ? json_encode($_SESSION["loginInfo"]) : "false"; ?>;
        var form = '<?php echo empty($form) ? "" : $form ?>'
        var viewtype = 0;
    </script>

</head>
<body>

<div id="fb-root"></div>


<div class="wrapper">

    <header>
        <div class="top">
            <div class="container">
                <div class="account">
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
                            Đăng nhập
                        </a>
                        <?php
                    }
                    ?>

                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="container">
                <a id="logo">
                    <img src="/v3/nap/images/icon-lg.png" class="img-responsive"/>
                </a>
                <a class="toggle">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </a>

                <div id="menu" class="menu">
                    <ul>
                        <li>
                            <a href="/">Trang chủ</a>
                        </li>
                        <li>
                            <a href="/huong-dan.html">Hướng dẫn nạp</a>
                        </li>
                        <li>
                            <a href="/lich-su.html">Lịch sử nạp</a>
                        </li>
                        <li>
                            <a href="/huong-dan.html">Fanpage</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </header>

    <div id="body">
        <div id="banner" class="owl-carousel owl-theme">
            <div class="item">
                <a><img src="/v3/nap/images/DPTK.jpg" class="img-responsive"/></a>
            </div>
            <div class="item">
                <a><img src="/v3/nap/images/KOK.jpg" class="img-responsive"/></a>
            </div>
            <div class="item">
                <a><img src="/v3/nap/images/MHK.jpg" class="img-responsive"/></a>
            </div>
            <div class="item">
                <a><img src="/v3/nap/images/MU.jpg" class="img-responsive"/></a>
            </div>
        </div>


        <div class="container">
            <div class="wrapper-content">



