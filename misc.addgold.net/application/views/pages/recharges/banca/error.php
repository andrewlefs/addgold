<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-touch-fullscreen" content="yes">
        <link href="/pages/<?php echo $alias ?>/rc/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="/pages/<?php echo $alias ?>/rc/css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="/pages/<?php echo $alias ?>/rc/fonts/font.css">
        <link rel="stylesheet" type="text/css" href="/pages/<?php echo $alias ?>/rc/css/style.css">

        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->

    </head>
    <body>
   <div id="sdk-table">
       <div class="sdk-content">
               <div id="body-sdk" >
                   <div class="content-sdk" >
                        <form action="#">
                            <div class="cart-box">
                                <div class="padding-top">
                                <div class="header-info text-center"> 
                                   <img src="/pages/<?php echo $alias ?>/rc/images/fail.svg" class="icon-header" alt="">
                                    <?php echo $error_message ?>                                     
                                    </div>                                
                                </div>
                            </div>
                       </form>
                   </div>
                    <div class="footer-sdk">
                   <a href="<?php echo $helpdesk ?>">Cần liên hệ trợ giúp?</a>
                    </div>
                </div> <!-- body-sdk -->
           
       </div>
   </div>
<script src="/pages/<?php echo $alias ?>/rc/js/jquery-1.11.3.min.js"></script>
<script src="/pages/<?php echo $alias ?>/rc/js/script.js"></script>
</body>
</html>
