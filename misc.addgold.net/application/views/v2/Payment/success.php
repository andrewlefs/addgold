<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable = no">
        <title>Ví MoMo</title>

        <!-- Bootstrap -->
        <link href="/v1/momo/css/bootstrap.min.css" rel="stylesheet">        
        <link rel="stylesheet" href="/v1/momo/fonts/font.css">
        <link rel="stylesheet" type="text/css" href="/v1/momo/css/style.css">

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
                            <div class="header-info text-center">                                
                                <img src="/v1/momo/images/check.svg" class="icon-header" alt="">
                                <span>
                                <?php echo $result["pay_response"]["data"]["service_data"]["message"] ?>
                                </span>   
                            </div>
<!--                            <a class="btn submit-button" href="#">Về danh sách nạp</a>-->
                        </form>
                    </div>                   
                </div> <!-- body-sdk -->

            </div>
        </div>
        <script src="/v1/momo/js/jquery-1.11.3.min.js"></script>
        <script src="/v1/momo/js/script.js"></script>
    </body>
</html>
