<div class="line1">
    <div class="message"><?php echo $message ?></div>
</div>
<?php if ($result == true) { ?>
    <?php $value = $result; ?>
    <div class="line1">
        <div class="transacation"><span>Mã giao dịch: <span class="tran"><?php echo $value["order_id"] ?></span></span></div>
    </div>
    <div class="line1"><span>Game: <span class="game-name"><?php echo $value["display"]["game"]["name"] ?></span></span></div>
    <div class="line1 char-info">
        <span>Máy chủ: <span class="server"><?php echo $value["display"]["server"]["name"] ?></span> </span>
        <span>Nhân vật: <span class="char"><?php echo $value["display"]["character"]["name"] ?></span> </span>
    </div>
    <div class="line1">
        <span style="min-width: 160px">Gói: <span> <?php echo $value["display"]["formality"]["name"] . " " . $value["display"]["formality"]["service_name"] ?></span></span>
        <span>Mệnh giá: <?php echo number_format($value["amount"], 0) ?> VNĐ</span>
    </div>
    <div class="line1">
        <span>Thời gian: </span>
        <span><?php echo date("H:i d/m/Y", strtotime($value["create_date"])) ?></span>
    </div>

    <?php
    //if (in_array(Misc\Http\Util::get_remote_ip(), array("127.0.0.1", "118.69.76.212", "115.78.161.88", "115.78.161.124", "115.78.161.134"))) {
    if (!empty($value["event_result"]) && $value["event_result"]["code"] == 0) {
        ?>
        <div class="line1">
            Gift Code: <label
                style="color: rgb(253,79,0);    font-weight: bold;    border: 1px solid;    padding: 10px;}"><?php echo $value["event_result"]["data"]["code"] ?></label>
        </div>
        <?php
    }
    //}
    ?>

<?php } ?>
