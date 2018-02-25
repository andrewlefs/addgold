<?php

use Misc\Security;

include $controller->getPathView() . 'header.php';
?>
<div class="main">
    <noscript class="constrain">JavaScript is required for full functionality.</noscript>    
    <div class="shorten header mdl-shadow--2dp" style="padding: 8px 0 4px;" >
        <div class="constrain">
<!--            <div class="tagline">Card Type</div>-->
            <div class="input-container text-right">
                <select name="cardType" id="cardType" style="width: calc(100% - 3px);" >
                    <?php
                    if ($cardTypes == true) {
                        foreach ($cardTypes as $key => $value) {
                            ?><optgroup label="<?php echo $key ?>"><?php
                                foreach ($value as $k => $val) {
                                    ?><option value="<?php echo $k ?>" ><?php echo $val ?></option><?php
                                }
                                ?>
                            </optgroup>
                            <?php
                        }
                    }
                    ?>

                </select>                    
            </div>                                      
        </div>
    </div>   
    <div class="shorten content constrain" style="padding-top: 0px; min-height: calc(100vh - 179px);"> 
        <input type="hidden" value="<?php echo $csrfToken ?>" id="csrfToken" name="csrfToken" />
        <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp"><thead>
                <tr>
                    <th class="mdl-data-table__cell--non-numeric">Mệnh giá</th>
                    <th class="mdl-data-table__cell--non-numeric">Số Lượng</th>                                                
                    <th class="mdl-data-table__cell--non-numeric"></th>                                                
                </tr>                    
            </thead>           
            <tbody>
                <?php
                foreach ($cardLists as $key => $value) {
                    ?>
                    <tr class="row-card is-disable" data-type="<?php echo $value["subtype"] ?>">
                        <td class="mdl-data-table__cell--non-numeric"><?php echo number_format($value["value"], 0) ?> VND</td>
                        <td class="mdl-data-table__cell--non-numeric cls_count"><?php echo ($value["available"]), "/", $value["num"] ?></td>
                        <td class="mdl-data-table__cell--non-numeric" style="width: 40px">                            
                            <button style="color: #366ed1;" dataToken="<?php echo Security::encrypt(array("request" => $filterData, "item" => $value, "otp" => $dataOtp), $controller->getSecret()) ?>" class="button-submit mdl-button mdl-js-button mdl-button--icon" data-upgraded=",MaterialButton" tabindex="0">
                                <i class="material-icons">input</i>
                            </button>
                        </td>
                    </tr>
                    <?php
                }
                ?>

            </tbody>
        </table>
    </div>
    <script type="text/javascript">
        $(function () {

            $("tr.row-card").addClass("is-disable");
            $("tr[data-type='" + $("#cardType").val() + "']").removeClass("is-disable");
            $("#cardType").change(function () {
                $("tr.row-card").addClass("is-disable");
                $("tr[data-type='" + $(this).val() + "']").removeClass("is-disable");
            });

            $(".button-submit").click(function () {
                var csrfToken = $("#csrfToken").val();
                var dataToken = $(this).attr("dataToken");

                $.ajax({
                    method: "POST",
                    url: "/v1.0/sandbox/rechar?<?php echo http_build_query($_GET) ?>",
                    dataType: "json",
                    data: {csrfToken: csrfToken, dataToken: dataToken},
                    beforeSend: function (xhr) {
                        $("body").customLoading();
                    }
                }).done(function (response) {
                    console.log(response);
                    $('.cls_count').html(response.data.num);
                    if (response.code == 0) {
                        $("body").customNotify({type: "success", text: response.message});
                        //loading va show lai so luong
                    } else {
                        if (response.code == -100) {
                            $("body").customLockScreen({type: "error", text: response.message});
                        } else {
                            $("body").customNotify({type: "error", text: response.message});
                        }
                    }

                }).fail(function (data) {
                    console.log(data);
                    $("body").customNotify({type: "error", text: "System error please try again later."});
                }).always(function (response) {
                    $("body").customStopLoading();
                    $("#csrfToken").val(response.data.csrfToken);
                });

            });
        });
    </script>
    <?php
    include $controller->getPathView() . 'footer.php';
    ?>
