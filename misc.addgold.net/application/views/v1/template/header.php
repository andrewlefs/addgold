<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-touch-fullscreen" content="yes">        
        <title><?php echo ($title == true && isset($title[$lang])) ? $title[$lang] : "Nạp Tiền" ?></title>
        <?php
        if ($remark == true) {
            foreach ($remark as $key => $value) {
                echo $value;
            }
        }
        if ($style == true) {
            foreach ($style as $key => $value) {
                echo '<link href="' . $value . '" rel="stylesheet">';
            }
        } else {
            ?>
            <link href="/v1/payment/css/bootstrap.min.css" rel="stylesheet">        
            <!--        <link rel="stylesheet" type="text/css" href="/v1/payment/css/bootstrap-theme.min.css">-->
            <link rel="stylesheet" href="/v1/payment/fonts/font.css">
            <link rel="stylesheet" type="text/css" href="/v1/payment/css/style.css">
            <?php
        }
        ?>


        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->

    </head>
    <body>
