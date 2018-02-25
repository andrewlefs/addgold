<?php

use Misc\Security;

include $controller->getPathView() . 'header.php';
?>
<div class="wrap-content">


    <div class="choice-list">
        <div class="row row-label col-xs-12">
            <span class="label-rech">Lịch sử nạp thẻ</span>

        </div>
        <div class="row row-label col-xs-12">
            <label><span style="color: red">*</span> Chỉ hiển thị 5 giao dịch nạp gần nhất</label>
        </div>
        <?php
        if (is_array($history)) {
            foreach ($history as $key => $value) {
                ?>

                <div class="row-hist">
                    <div class="create-time">
                        <span>Thời gian: </span>
                        <span><?php echo date("H:i d/m/Y", strtotime($value["create_date"])) ?></span>
                    </div>
                    <div class="box-result">
                        <div class="line1">
                            <div class="message">Chúc mừng bạn
                                đã <?php echo $value["display"]["formality"]["name"] . " " . $value["display"]["formality"]["service_name"] ?>
                                thành công <?php echo number_format($value["amount"], 0) ?> VNĐ nhận <?php echo $value["credit"];?> Kim Cương
                            </div>
                            <div class="transacation"><span>Mã giao dịch: <span
                                        class="tran"><?php echo $value["order_id"] ?></span></span></div>
                        </div>

                        <div class="line1"><span>Game: <span
                                    class="game-name"><?php echo $value["display"]["game"]["name"] ?></span></span>
                        </div>
                        <div class="line1 char-info">
                            <span>Máy chủ: <span class="server"><?php echo $value["display"]["server"]["name"] ?></span> </span>
                            <span>Nhân vật: <span
                                    class="char"><?php echo $value["display"]["character"]["name"] ?></span> </span>
                        </div>
                        <div class="line1">
                            <span>Mệnh giá: <?php echo number_format($value["amount"], 0) ?> VNĐ</span>
                        </div>
                    </div>
                </div>

                <?php
            }
        }
        ?>
    </div>


</div>

<?php
include $controller->getPathView() . 'footer.php';
?>

