<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta content="width=device-width, initial-scale=0.93, maximum-scale=0.93, user-scalable=0" name="viewport">
    <meta content="yes" name="mobile-web-app-capable">
    <meta content="yes" name="apple-mobile-web-app-capable">
    <meta name="apple-touch-fullscreen" content="yes"/>
    <title>Cổng nạp tiền Game</title>

    <link rel="stylesheet" href="/v2/nap/css/0061.urlshortener.css">
    <link rel="stylesheet" href="/v2/nap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/v2/nap/css/style.css">
    <script type="text/javascript" src="/v2/nap/js/jquery-1.11.3.min.js"></script>
    <script type="text/javascript" src="/v2/nap/js/jquery.validate.js"></script>
    <script type="text/javascript" src="/v2/nap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/v2/nap/js/jQuery-fn-Extend.js"></script>
    <script type="text/javascript" src="/v2/nap/js/customer.js"></script>

    <script type="text/javascript">
        var baselink = "<?php echo $controller->getReceiver()->getHostname() ?>";
        var userInfo = <?php echo isset($_SESSION["loginInfo"]) ? json_encode($_SESSION["loginInfo"]) : "false"; ?>;
        var form = '<?php echo empty($form) ? "" : $form ?>'
        var viewtype = 0;
    </script>

</head>
<body>
<div class="wrapper">
    <header>
        <a href="/">
            <span class="logo"></span>
        </a>
        <div class="profile">

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
                    <img src="/v2/nap/images/btn-login.png" />
                </a>
                <?php
            }
            ?>

        </div>
    </header>
    <div class="mobile-action-bar">
        <span class="action-bar-menu-button"> <span class="menu-icon"></span> </span>
        <span class="action-bar-center"><img src="/v2/nap/images/action-logo.png" /></span>
    </div>
    <div class="container">
        <div>
            <div class="show-all-hover-zone">
                <div class="hover-zone">
                    <div class="hover-icon">
                        <span class="hover-zone-button"> <span class="menu-icon"></span> </span>
                    </div>
                </div>
                <div class="hover-zone end">
                    <span class="hover-arrow"></span>
                </div>
            </div>
            <ul class="mobile-nav" id="main-menu">
                <li class="id-track-click entertainment"> <a class="mobile-nav-item entertainment selected" href="/"> <span class="icon"><img src="/v2/nap/images/toolbar_home.png" /></span>  <span class="label">Trang chủ</span> </a> </li>

                <?php
                if ($gameList == true && is_array($gameList)) {
                    foreach ($gameList as $key => $value) {
                    if ($value["publish"] == 0 && !in_array(Misc\Http\Util::get_remote_ip(), array("127.0.0.1", "118.69.76.212", "115.78.161.88", "115.78.161.124", "115.78.161.134"))) {
                        continue;
                    }
                ?>
                        <li class="id-track-click apps"> <a class="apps mobile-nav-item default" title="<?php echo $value["name"] ?>" href="/nap-<?php echo $value["app_id"] ?>.html"> <span class="icon"><img src="<?php echo $value["icon"] ?>" /></span> <span class="label"><?php echo $value["name"] ?></span> </a> </li>

                        <?php
                    }
                }
                ?>

                <li> <div class="mobile-nav-separator"></div></li>
                <li> <a class="mobile-nav-item secondary" href="/lich-su.html"> <span class="icon"></span> <span class="label">Lịch sử nạp</span> </a> </li>
                <li class="id-track-click" data-uitype="108"> <a class="mobile-nav-item secondary" href="/huong-dan.html"> <span class="icon"></span> <span class="label">Hướng dẫn nạp</span> </a> </li>
                <li class="id-track-click" data-uitype="108"> <a class="mobile-nav-item secondary" href="/huong-dan.html"> <span class="icon"></span> <span class="label">Liên hệ</span> </a> </li>
                <li><div class="mobile-nav-separator secondary"></div></li>
            </ul>
            <div id="mobile-menu-overlay" style="opacity: 0.8;"></div>
        </div>
        <div class="wrapper-content">
            <div class="cluster">

