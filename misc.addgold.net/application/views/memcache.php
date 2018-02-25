<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-touch-fullscreen" content="yes">
        <title>Cache Manager</title>        
        <link href="/css/bootstrap.min.css" rel="stylesheet">    
        <script type="text/javascript" src="/js/jquery.min.js"></script>
        <style type="text/css">
            ul {
                list-style: none;
            }
            .item{
                display: none;
            }
            .active{
                display: block;
            }
        </style>
        <script type="text/javascript">
            $(document).ready(function (e) {
                $(".row").click(function () {
                    $("#content").html($(this).html());
                    $("#content").children(".item").addClass("active");
                    $(".remove").click(function () {
                        var key = $(this).attr("id");
                        $.ajax({
                            method: "GET",
                            url: "/v1.0/mem/delete?key=" + key,
                            dataType: "json"
                        })
                                .done(function (msg) {
                                    console.log(msg);
                                    if (msg.code == 1) {
                                        $("#content").html("");
                                        $("a[data='" + key + "']").remove();
                                        alert("status: " + msg.status);
                                    } else {
                                        alert("error");
                                    }
                                });
                    });
                });

            });
        </script>
    </head>
    <body>      
        <div class="col-xs-12">
            <div class="col-xs-4" style="border-right: 1px solid; overflow: scroll; height: 100%">
                <div>
                    <p><a href="/v1.0/mem/"><?php echo $_SERVER["HTTP_HOST"] ?></a></p>
                    <ul>
                        <?php
                        if ($data != NULL) {
                            foreach ($data[$_SERVER["HTTP_HOST"]] as $key => $value) {
                                ?>
                                <li>
                                    <?php
                                    if (is_array($value)) {
                                        ?>
                                        <div><a href="#"><?php echo $key ?></a></div>
                                        <ul>
                                            <?php
                                            foreach ($value as $k => $v) {
                                                ?>
                                                <li>
                                                    <div class="row"><a href="#" data="<?php echo $k ?>"><?php echo $k ?></a>
                                                        <div class="item">
                                                            <span> <?php
                                                                echo "<pre>";
                                                                print_r($v);
                                                                ?></span>
                                                            <br>
                                                            <a href="#" class="remove" id="<?php echo $k ?>">remove</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <?php
                                            }
                                            ?>
                                        </ul>
                                        <?php
                                    } else {
                                        ?>
                                        <div class="row"><a href="#"  data="<?php echo $key ?>"><?php echo $key ?></a>
                                            <div class="item">
                                                <span>
                                                    <?php
                                                    echo "<pre>";
                                                    print_r($value);
                                                    ?>
                                                </span>
                                                <br>
                                                <a href="#" class="remove" id="<?php echo $key ?>">remove</a>
                                            </div>                                            
                                        </div>
                                        <?php
                                    }
                                    ?>
                                </li>
                                <?php
                            }
                        }
                        ?>
                    </ul>
                </div>
            </div>

            <div class="col-xs-8" id="content">

            </div>
        </div>

    </body>
</html>