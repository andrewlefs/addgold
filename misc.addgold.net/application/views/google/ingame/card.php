<?php

use Misc\Security;

include $controller->getPathView() . 'ingame/header.php';
?>
<form id="submitRecharg" action="/topup" method="post">
    <input name="token"  type="hidden" value="<?php echo $hashToken ?>" />
    <select id="serverlist" name="serverlist" class="form-control required" style="display: none">
        <option value="<?php echo $info["server_id"] ?>"><?php echo $info["server_id"] ?></option>
    </select>
    <select id="character" name="character" class="form-control required" style="display: none">
        <option id="<?php echo $info["character_id"] ?>" value="<?php echo $info["hash"] ?>"><?php echo $info["character_name"] ?></option>
    </select>
    <select id="formality" name="formality" class="form-control" style="display: none">
        <option value="mcard">Thẻ cào</option>
    </select>
    <select id="card_type" name="card_type" class="form-control" style="display: none">                        
        <option value="<?php echo $info["card_type"] ?>"><?php echo $info["card_type"] ?></option>
    </select>
    <div class="cart-box">
        <div class="cart-row">
            <table class="table">
                <tr>
                    <td width="35%">Loại thẻ:</td>
                    <td  colspan="2">
                        <select id="mcard-formality" name="cardType" class="custom-select">                        
                            <option value="gate">Gate</option>
                            <option value="viettel">Viettel</option>
                            <option value="mobi">Mobiphone</option>
                            <option value="vina">Vina</option>
                        </select>
                    </td>

                </tr>
            </table>

        </div> 
        <div class="cart-row">
            <table class="table">
                <tr>
                    <td width="29%">Số Seri:</td>
                    <td width="59%"><input id="serial" name="serial" autocomplete="false" class="cart-input" type="text"></td> 
                    <td><a class="empty-input" href="#"><img src="/v1/inapp/images/remove.svg" class="img-responsive" alt=""></a></td>

                </tr>
            </table>

        </div> 
        <div class="cart-row">
            <table class="table">
                <tr>
                    <td width="29%">Mã Pin:</td>
                    <td width="59%"><input id="pin" name="pin" autocomplete="off"  class="cart-input" type="text"></td> 
                    <td><a class="empty-input" href="#"><img src="/v1/inapp/images/remove.svg" class="img-responsive" alt=""></a></td>

                </tr>
            </table>

        </div> 

    </div>
    <div class="cart-box pading-top-none">
        <input id="btn-submit" type="submit" value="Nạp ngay" class="btn submit-button">
    </div>

</form>
<script type="text/javascript">
    $(document).ready(function () {
        //$("body").customLoading();
    })
</script>
<?php
include $controller->getPathView() . 'ingame/footer.php';
?>
