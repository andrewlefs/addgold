<?php

use Misc\Security;
?>
<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Check Query String</title>
        <style>
            #customers
            {
                font-family:"Trebuchet MS", Arial, Helvetica, sans-serif;
                width:100%;
                border-collapse:collapse;
            }
            #customers td, #customers th 
            {
                font-size:1.2em;
                border:1px solid #98bf21;
                padding:3px 7px 2px 7px;
            }
            #customers th 
            {
                font-size:1.4em;
                text-align:left;
                padding-top:5px;
                padding-bottom:4px;
                background-color:#A7C942;
                color:#fff;
            }
            #customers tr.alt td 
            {
                color:#000;
                background-color:#EAF2D3;
            }
        </style>
        <script type='text/javascript'>
            function setAccessToken(access_token) {
                if (access_token == "") {
                    document.getElementById("loginAccessToken").innerHTML = access_token;
                } else {
                    var d = new Date();
                    document.getElementById("loginAccessToken").innerHTML = "Không thấy "  + d.getTime() ;
                }
            }
        </script>
    </head>
    <body>
        <?php
        $baselink = "http://doden888.net/";

        //$server_ip = get_remote_ip();
        $arr = array("127.0.0.1", "115.78.161.124", "115.78.161.134", "115.78.161.88", "113.161.78.101", "118.69.76.212", "10.8.19.124");

        $mobo_filter = array();

        $ip_flag = true;
        $mobo_flag = false;

//        $access_token_debase64 = base64_decode($_GET["access_token"]);
//        $access_token_dejson = json_decode($access_token_debase64, true);
//        $moboid = $access_token_dejson["mobo_id"];
        //if (($ip_flag && in_array($server_ip, $arr)) || ($ip_flag && in_array($moboid, $mobo_filter))) {
        $urlbase = "https://misc.bai88.net/page/querystring?" . http_build_query($_GET);
        $urlfullscreen = "https://misc.bai88.net/page/querystring?" . urlencode(http_build_query($_GET));
        ?>
        <fieldset>
            <legend>Test Case Scheme</legend>
            </br>
            <ul>
                <li>
                    Copy to clipboard (window confirm không copy được bỏ qua)
                </li>
                <li style="list-style: none">
                    <ul>
                        <li style="list-style: none">
                            <a href="" onclick="window.external.notify('copy:<?php echo urlencode("Tôi sẽ không cô đơn") ?>');">Windows Phone Copy Text 'Tôi sẽ không cô đơn'</a><br>
                            Syntax: window.external.notify('copy:urlencode(text)')<br>
                            <a href="S0002://action=copy&client_id=S0002&msg=<?php echo urlencode("Tôi sẽ không cô đơn") ?>"  onclick="">iOS/Android Copy Text 'Tôi sẽ không cô đơn'</a> <br>
                            Syntax: S0002://action=copy&client_id=S0002&msg=urlencode(text)
                        </li>
                    </ul>
                </li>
                <li>
                    Open Payment: gọi phương thức thanh toán payment
                </li>
                <li style="list-style: none">
                    <ul>
                        <li style="list-style: none">
                            <a href="" onclick="window.external.notify('payment');">Windows Phone</a><br>
                            Syntax: window.external.notify('payment');<br>
                            <a href="S0002://action=payment&client_id=S0002"  onclick="">iOS/Android</a> <br>
                            Syntax: S0002://action=payment&client_id=S0002
                        </li>
                    </ul>
                </li>
                <li>
                    Open Fullscreen : mở url full WebView
                </li>
                <li style="list-style: none">
                    <ul>
                        <li style="list-style: none">
                            <?php
                            $urlbase = "http://doden888.net/scheme?" . http_build_query($_GET);
                            $data = json_encode(array(
                                "scheme" => "openfullscreen",
                                "rotatory" => 1,
                                "url" => $urlbase
                            ));
                            //echo $data;

                            $basedata = base64_encode($data);
                            ?>
                            <a href="#" onclick="window.external.notify('<?php echo $basedata ?>');">Windows Full Screen Vertically</a><br>

                            Syntax: window.external.notify(base64_encode({"scheme":"openfullscreen","rotatory":1,"url":"link"));<br>
                            <?php
                            $data = json_encode(array(
                                "scheme" => "openfullscreen",
                                "rotatory" => 0,
                                "url" => $urlbase
                            ));
                            $basedata = base64_encode($data);
                            ?>
                            <a href="" onclick="window.external.notify('<?php echo $basedata ?>');">Windows Full Screen Horizontal</a> <br>
                            Syntax: window.external.notify(base64_encode({"scheme":"openfullscreen","rotatory":0,"url":"link"));
                            <br><br>


                            <a href="S0002://action=open_fullscreen&client_id=S0002&rotatory=1&url=<?php echo urlencode($urlbase) ?>" onclick="">Open IOS/Android Browser Full Screen Vertically</a> <br>
                            Syntax: S0002://action=open_fullscreen&client_id=S0002&rotatory=1&url=urlencode(url)
                            <br>
                            <a href="S0002://action=open_fullscreen&client_id=S0002&rotatory=0&url=<?php echo urlencode($urlbase) ?>" onclick="">Open IOS/Android Browser Full Screen Horizontal</a> <br>
                            Syntax: S0002://action=open_fullscreen&client_id=S0002&rotatory=0&url=urlencode(url)                            
                        </li>
                    </ul>
                </li>
                <li>
                    Open Browser: mở url ra trình duyệt
                </li>
                <li style="list-style: none">
                    <ul>
                        <li style="list-style: none">
                            <a href="" onclick="window.external.notify('openbrowser:<?php echo urlencode($urlbase) ?>');">Open Windows Browser</a><br>
                            Syntax: window.external.notify('openbrowser:urlencode(url)');<br>
                            <a href="S0002://action=open_browser&client_id=S0002&url=<?php echo urlencode($urlbase) ?>" onclick="">Open IOS/Android Browser Encode Data</a> <br>
                            Syntax: S0002://action=open_browser&client_id=S0002&url=urlencode(url)
                        </li>
                    </ul>
                </li>
                <li>
                    Run App : data được truyền theo format base64 chuỗi json yêu cầu check package_name or bundleid đã đăng ký nếu đã cài đặt trên device thì run app không đá sang store ngược lại
                </li>
                <li style="list-style: none">
                    <ul>
                        <li style="list-style: none">
                            Windows Phone confirm không hỗ trợ được không test case này<br>
                            <?php
                            $appJson = '{"scheme":"runapp","data":{"package_name":"monggiangho.vn.game.mobo","url":"https://play.google.com/store/apps/details?id=monggiangho.vn.game.mobo"}}';
                            ?>
                            <a href="S0002://action=runapp&client_id=S0002&msg=<?php echo base64_encode($appJson) ?>" onclick="">Run App Android</a> <br>
                            Syntax: S0002://action=runapp&client_id=S0002&msg=base64_edcode(json_format)<br>
                            json_format: {"scheme":"runapp","data":{"package_name":"doden.tienlen.giaitri.cothuong","url":"http:\/\/app.appsflyer.com\/doden.tienlen.giaitri.cothuong?pid=crossapp_naruto&c=OpenGame"}}

                            <?php
                            $appJson = '{"scheme":"runapp","data":{"package_name":"vn.mecorp.monggiangho","url":"https://itunes.apple.com/app/apple-store/id964783889?mt=8"}}';
                            ?>

                            <a href="S0002://action=runapp&client_id=S0002&msg=<?php echo base64_encode($appJson) ?>" onclick="">Run App iOS</a> <br>
                            Syntax: S0002://action=runapp&client_id=S0002&msg=base64_edcode(json_format)<br>
                            json_format: {"scheme":"runapp","data":{"package_name":"vn.mecorp.monggiangho","url":"https://itunes.apple.com/app/apple-store/id964783889?mt=8"}}
                        </li>
                    </ul>
                </li>
                <li>
                    Login : Call form login from sdk
                </li>
                <li style="list-style: none">
                    <ul>
                        <li style="list-style: none">
                            Windows Phone<br>							
                            <?php
                            $appJson = '{"scheme":"login"}';
                            ?>
                            <a href="" onclick="window.external.notify('<?php echo $appJson ?>');">Login Windows Phone</a><br>
                            Syntax: window.external.notify('{"scheme":"login"}');<br>

                            <a href="S0002://action=login&client_id=S0002&msg=" onclick="">Login Android</a> <br>
                            Syntax: S0002://action=login&client_id=S0002&msg=<br>                                                        

                            <a href="S0002://action=login&client_id=S0002&msg=" onclick="">Login iOS</a> <br>
                            Syntax: S0002://action=login&client_id=S0002&msg=<br>
                        </li>
                        <li style="list-style: none">
                            <div>
                                AccessToken: <span id="loginAccessToken"></span>
                            </div>

                        </li>
                    </ul>
                </li>
            </ul>            
        </fieldset>            
        <fieldset>
            <legend>Check Paramater Info game</legend>
            <table id="customers">
                <tr>
                    <th>Key</th>
                    <th>Value</th>
                </tr>        
                <?php
                $hash = $controller->hash_secret_key($_GET["app"]);                
                //var_dump($_GET);die;
                foreach ($_GET as $key => $value) {
                    echo "<tr>"
                    . "<td>" . $key . "</td>"
                    . "<td>" . $value . "</td>"
                    . "</tr>";
                    if ($key == "access_token") {
                        echo "<tr>"
                        . "<td>Access token decode</td>";
                        echo "<td>";
                        foreach ($access_token_dejson as $skey => $svalue) {
                            echo "{$skey} - {$svalue}</br>";
                        }
                        echo "</td>";
                        echo "</tr>";
                    } else if ($key == "q") {

                        $querys = Security::decrypt($value, $hash);
                        foreach ($querys as $k => $val) {
                            echo "<tr>"
                            . "<td>" . $k . "</td>"
                            . "<td>" . $val . "</td>"
                            . "</tr>";
                            if ($key == "info" && $_GET["info"] == true) {
                                echo "<tr>"
                                . "<td>Vaild Json Info</td>";
                                echo "<td>";
                                // Define the errors.
                                $constants = get_defined_constants(true);
                                $json_errors = array();
                                foreach ($constants["json"] as $name => $value) {
                                    if (!strncmp($name, "JSON_ERROR_", 11)) {
                                        $json_errors[$value] = $name;
                                    }
                                }
                                // Show the errors for different depths.    
                                $json = json_decode($value["info"], true);
                                if (json_last_error() != JSON_ERROR_NONE) {
                                    echo '<i style="color:red;">', 'Last error: ', $json_errors[json_last_error()], " ", "</i>";
                                } else {
                                    echo 'Last error: ', $json_errors[json_last_error()];
                                }

                                echo "</td>";
                                echo "</tr>";
                            }
                        }
                    }
                }
                ?>
            </table>
        </fieldset>
        <?php
//        } else {
//            echo "Bạn không được phép truy cập tính năng này.";
//        }
        ?>
    </body>
</html>
