<div>    
    <input type="hidden" value="<?php echo $app_name ?>" id="app" name="app" />
    <input type="hidden" value="<?php echo $csrfToken ?>" id="csrfToken" name="csrfToken" />    
    <div>
        <?php
        if ($listMoney == true && is_array($listMoney)) {
            ?>
            <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">            
                <tbody>
                    <?php
                    //var_dump($controller->getSecret());                 
                    foreach ($listMoney as $key => $value) {
                        if (((int) $value["money"]) < 50000 && !in_array(Misc\Http\Util::get_remote_ip(), array("127.0.0.1", "118.69.76.212", "115.78.161.88", "115.78.161.124", "115.78.161.134"))) {
                            continue;
                        }
                        ?>
                    <tr class="row-card button-submit" dataToken="<?php echo Misc\Security::encrypt(array("request" => Misc\Security::decrypt($dataToken, $controller->getSecret($app_name)) , "amount" => $value["money"], "otp" => $dataOtp), $controller->getSecret($app_name)) ?>" data-type="">
                            <td class="mdl-data-table__cell--non-numeric" style="border-top: 0px solid rgba(0,0,0,0.12); border-bottom: 1px dashed rgba(0,0,0,0.12);width: 20px; padding-left: 10px">
                                <button style="color: #366ed1;" class="mdl-button mdl-js-button mdl-button--icon" data-upgraded=",MaterialButton" tabindex="0">
                                    <img style="width: 16px;" src="/v1/momo/images/momo_sub_ico.png">
                                </button>
                            </td>                            
                            <td style="border-top: 0px solid rgba(0,0,0,0.12); border-bottom: 1px dashed rgba(0,0,0,0.12); padding-left: 0px; padding-right: 0px;text-align: left" class="mdl-data-table__cell--non-numeric">Nạp <?php echo number_format($value["money"], 0) ?> đ</td>                            
                            <td style="border-top: 0px solid rgba(0,0,0,0.12); border-bottom: 1px dashed rgba(0,0,0,0.12); padding-left: 0px; padding-right: 0px;text-align: right" class="mdl-data-table__cell--non-numeric"><?php echo number_format($value["silver"], 0), " ", $value["alias"] ?></td>                            
                            <td class="mdl-data-table__cell--non-numeric" style="border-top: 0px solid rgba(0,0,0,0.12); border-bottom: 1px dashed rgba(0,0,0,0.12);width: 20px;padding-right: 0px">                            
                                <button style="color: #757575;" dataToken="<?php echo Misc\Security::encrypt(array("request" => Misc\Security::decrypt($dataToken, $controller->getSecret($app_name)), "amount" => $value["money"], "otp" => $dataOtp), $controller->getSecret($app_name)) ?>" class="mdl-button mdl-js-button mdl-button--icon" data-upgraded=",MaterialButton" tabindex="0">
                                    <i class="material-icons">keyboard_arrow_right</i>
                                </button>
                            </td>
                        </tr>
                        <?php
                    }
                    ?>

                </tbody>
            </table>
            <?php
        }
        ?>
    </div>
</div>
