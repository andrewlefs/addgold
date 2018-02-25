<?php

use Misc\Security;

include $controller->getPathView() . 'header.php';
?>
<div class="col-xs-12 nav-bar">
    <div class="menu-h col-xs-6">
        <div class="DUQW2P-X-c" style="margin-top: 0px; margin-right: 0px;">                
            <ul> 
                <li class="active"><a href="/nap-<?php echo $gameId ?>.html">Nạp Tiền</a></li>  
                <li><a href="/ty-gia-<?php echo $gameId ?>.html">Tỷ giá</a></li>              
            </ul>
        </div> 
    </div>
    <?php include 'game-dropdown.php' ?>
</div>
<form id="submitRecharg" action="/topup" style="display: inline-block">
    <input type="hidden" value="<?php echo $hashToken ?>" name="token" id="token" />
    <input type="hidden" value="<?php echo $event ?>" name="event" id="event" />
    <div class="col-xs-12" style="margin-top: 15px">
        <?php if ($eventLinks == true) { ?>
        <div class="col-xs-12" style="text-align: center;">
            <a style="color: #000" href="<?php echo $eventLinks["link"] ?>"><?php echo $eventLinks["title"] ?></a>
            </div>
        <?php } ?>
        <div class="col-xs-12">
            <div class="col-xs-6">               
                <div class="col-xs-12">
                    <label for="serverlist">
                        <span class="required">Chọn máy chủ:</span>
                    </label>
                    <select id="serverlist" name="serverlist" class="form-control required">
                        <option value="">Chọn máy chủ</option>
                        <?php
                        if ($serverList == true) {                            
                            foreach ($serverList as $key => $value) {
                                if ($value["is_test_server"] == 1 && !in_array(Misc\Http\Util::get_remote_ip(), array("127.0.0.1", "118.69.76.212", "115.78.161.88", "115.78.161.124", "115.78.161.134"))) {
                                    continue;
                                }
                                ?>        
                                <option value="<?php echo $value["server_id_merge"] ?>" token-data="<?php echo $value["server_id"] ?>" hashToken="<?php echo $hashToken ?>" maintenance="<?php echo $value["is_maintenance"] ?>" ><?php
                                    $position = strpos($value["server_name"], "[");
//                                    if ($position != -1)
//                                        $serverName = substr($value["server_name"], 0, $position);
//                                    else
                                        $serverName = $value["server_name"];
                                    //var_dump($value["server_name"]);die;
                                    echo trim($serverName) . ($value["is_maintenance"] == 1 ? " (Đang bảo trì)" : "");
                                    ?></option>     
                                <?php
                            }
                        }
                        ?>
                    </select>
                </div>                
                <div class="col-xs-12">
                    <label for="character">
                        <span class="required">Chọn nhân vật:</span>
                    </label>
                    <select id="character" name="character" class="form-control required">                    
                    </select>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="col-xs-12" style="display: none">
                    <label>Hình thức nạp:</label>
                </div>
                <div class="col-xs-12"  style="display: none">
                    <select id="formality" name="formality" class="form-control">
                        <option value="mcard">Thẻ cào</option>
                        <option value="momo">Ví Điện Tử MoMo</option>
                        <?php
                        //if (in_array(Misc\Http\Util::get_remote_ip(), array("127.0.0.1", "118.69.76.212", "115.78.161.88", "115.78.161.124", "115.78.161.134"))) {
                        ?>
                        <option value="bank">Ngân hàng</option>
                        <?php
                        //}
                        ?>

                    </select>
                </div>
                <div class="formality mcard col-xs-12">
                    <label>Chọn loại thẻ:</label>
                </div>
                <div class="formality mcard col-xs-12">
                    <?php if (is_array($paymentList) && isset($paymentList["card"]["data"])) {
                        ?><select id="mcard-formality" name="cardType" class="form-control"><?php
                        ?><?php
                        foreach ($paymentList["card"]["data"] as $key => $value) {
                            ?><option value="<?php echo $value["card"] ?>"><?php echo $value["description"] ?></option><?php
                            }
                            ?></select><?php }
                        ?>                    
                </div>
                <div class="formality bank col-xs-12">
                    <label>Chọn ngân hàng:</label>
                </div>
                <div class="formality bank col-xs-12">
                    <?php if (is_array($paymentList) && isset($paymentList["banking"]["data"])) {
                        ?><select id="bank-formality" name="bankCode" class="form-control"><?php
                        ?><?php
                        foreach ($paymentList["banking"]["data"] as $key => $value) {
                            ?><option type="<?php echo $value["type"] ?>" value="<?php echo $value["code"] ?>"><?php echo $value["message"] ?></option><?php
                            }
                            ?></select><?php }
                        ?>                    
                </div>
                <div class="formality bank col-xs-12">
                    <label>Chọn mệnh giá:</label>
                </div>
                <div class="formality bank col-xs-12">                    
                    <?php if (is_array($paymentList) && isset($paymentList["banking"]["prices"])) {
                        ?><select id="bank-deno" name="bankMoney" class="form-control"><?php
                        ?><?php
                        foreach ($paymentList["banking"]["prices"] as $key => $value) {
                            ?><option value="<?php echo $value["message"] ?>"><?php echo $value["description"] ?></option><?php
                            }
                            ?></select><?php }
                        ?>                        
                </div>
                <div class="formality momo col-xs-12">
                    <label>Chọn mệnh giá:</label>
                </div>
                <div class="formality momo col-xs-12">
                    <select id="momo-deno" name="momoMoney" class="form-control">
                        <?php
                        if ($momoMoney == TRUE)
                            foreach ($momoMoney as $key => $value) {
                                if (!in_array(Misc\Http\Util::get_remote_ip(), array("127.0.0.1", "118.69.76.212", "115.78.161.88", "115.78.161.124", "115.78.161.134"))) {
                                    if ((int) $value["money"] < 50000)
                                        continue;
                                }
                                ?>
                                <option value="<?php echo $value["money"] ?>"><?php echo number_format($value["money"], 0) ?></option>
                                <?php
                            }
                        ?>
                    </select>
                </div>                
                <div class="formality mcard col-xs-12">
                    <label for="serial">
                        <span class="required">Số Seri:</span>
                    </label>
                    <input type="text" id="serial" name="serial" autocomplete="false" class="form-control required" placeholder="Số Seri" maxlength="15" />                    
                </div>                
                <div class="formality mcard col-xs-12">
                    <label for="serial">
                        <span class="required">Số Pin:</span>
                    </label>
                    <input type="text" id="pin" name="pin" autocomplete="off" class="form-control required" placeholder="Số Pin"  maxlength="15"/>                    
                </div>
                <?php
//                if (in_array(Misc\Http\Util::get_remote_ip(), array("127.0.0.1", "118.69.76.212", "115.78.161.88", "115.78.161.124", "115.78.161.134"))) {
                ?>                                   
                <div class="package col-xs-12" style="display: none">
                    <label>Chọn gói nạp:</label>
                </div>
                <div class="package col-xs-12" style="display: none">
                    <select id="card_type" name="card_type" class="form-control">                        
                        <option value="0">Nạp thường</option>
                        <?php
                        if ($itemList == TRUE) {
                            foreach ($itemList as $key => $value) {
                                ?>                        
                                <option value="<?php echo $value["card_type"] ?>"><?php echo $value["desc"][1] ?></option>
                                <?php
                            }
                        }
                        ?>
                    </select>
                </div>
                <?php // } ?>
            </div>
        </div>
        <div class="col-xs-12 div-button">
            <input id="btn-submit" type="submit" autocomplete="off" class="form-control" value="Nạp ngay" />
        </div>
        <?php
        if (!empty($note)) {
            ?>
            <div class="col-xs-12 note">
                <label style="color: red">Lưu ý: </label><br>
                <span><?php echo $note ?></span>
            </div>
            <?php
        }
        ?>

    </div>
</form>
<div id="dialog-result"></div>
<script type="text/javascript">
    $(document).ready(function () {

    });
</script>
<?php
include $controller->getPathView() . 'footer.php';
?>

