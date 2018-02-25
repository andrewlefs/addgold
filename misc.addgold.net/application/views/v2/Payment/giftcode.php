<?php

use Misc\Security;

include $controller->getPathView() . 'header.php';
?>
<style>
@media only screen and (max-width : 480px) {
	.nav-bar a{    font-size: 14px;}
	.nav-bar{    padding-left: 0;padding-right: 0; }
	.menu-h{padding-left: 0;}
	
}
</style>
<div class="col-xs-12 nav-bar">
    <div class="menu-h col-xs-6">
        <div class="DUQW2P-X-c" style="margin-top: 0px; margin-right: 0px;">
            <ul>
                <li class=""><a href="/nap-<?php echo $gameId ?>.html">Nạp Tiền</a></li>
                <li><a href="/ty-gia-<?php echo $gameId ?>.html">Tỷ giá</a></li>
                <li class="active"><a href="#">GiftCode</a></li>
            </ul>
        </div>
    </div>
    <?php include 'game-dropdown.php' ?>
</div>
<form id="submitGiftCode" action="/topgiftcode" style="display: inline-block">
    <input type="hidden" value="<?php echo $hashToken ?>" name="token" id="token"/>
    <input type="hidden" value="<?php echo $event ?>" name="event" id="event"/>
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

                </div>
                <div class="col-xs-12">
                    <select id="serverlist" name="serverlist" class="form-control required">
                        <option value="">Chọn máy chủ</option>
                        <?php
                        if ($serverList == true) {
                            foreach ($serverList as $key => $value) {
                                if ($value["is_test_server"] == 1 && !in_array(Misc\Http\Util::get_remote_ip(), array("113.161.78.101", "127.0.0.1", "118.69.76.212", "115.78.161.88", "115.78.161.124", "115.78.161.134"))) {
                                    continue;
                                }
                                ?>
                                <option value="<?php echo $value["server_id_merge"] ?>"
                                        token-data="<?php echo $value["server_id"] ?>"
                                        hashToken="<?php echo $hashToken ?>"
                                        maintenance="<?php echo $value["is_maintenance"] ?>"><?php
                                    $position = strpos($value["server_name"], "[");
                                    if ($position != -1)
                                        $serverName = substr($value["server_name"], 0, $position);
                                    else
                                        $serverName = $value["server_name"];
                                    echo trim($serverName) . ($value["is_maintenance"] == 1 ? " (Đang bảo trì)" : "");
                                    ?></option>
                                <?php
                            }
                        }
                        ?>
                    </select>
                </div>



                <div class="col-xs-12">
                    <label>Giftcode:</label>
                </div>
                <div class="col-xs-12">

                    <input type="text" id="giftcode" name="giftcode" autocomplete="false" class="form-control required" placeholder="Nhập Giftcode" maxlength="20" />

                </div>


            </div>
            <div class="col-xs-6">

                <div class="col-xs-12">
                    <label for="character">
                        <span class="required">Chọn nhân vật:</span>
                    </label>

                </div>

                <div class="col-xs-12">
                    <select id="character" name="character" class="form-control required">
                    </select>
                </div>



            </div>
        </div>
		<div class="col-xs-12">
			<div style="color:red;font-style:italic">
			<br/>
				Cần online trước khi nhập code và nhận thư ngay sau khi nhập code thành công. Chúng tôi không xử lý các trường hợp mất quà Giftcode do không online nhân vật trước khi nhập code và không nhận thư ngay.
			</div>
		</div>
        <div class="col-xs-12 div-button">
            <input id="btn-submit" type="submit" autocomplete="off" class="form-control" value="Nhận Giftcode"/>
            <input id="btn-event" style="display: none" type="button" autocomplete="off" class="form-control"
                   value="Sự kiện Mobo"/>
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
<!-- The Modal -->
<div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
        <div class="modal-header">
            <span class="close">&times;</span>
            <h2>Thông báo</h2>
        </div>
        <div class="modal-body">
            <p><span id="smsSyntax"></span></p>
            <p>Nạp OTP: <span><a class="" id="otpSyntax" href="">Tiếp tục</a></span></p>
        </div>
    </div>
</div>
<a id="anchorID" href="#" target="_bank"></a>
<script type="text/javascript">
    $(document).ready(function () {
        var formatlity_choose = $("#formality").val();
        $(".formality").hide();
        $("." + formatlity_choose).show();
    });
    // Get the modal
    var modal = document.getElementById('myModal');


    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
</script>
<?php
include $controller->getPathView() . 'footer.php';
?>

