<?php

use Misc\Security;

include $controller->getPathView() . 'header.php';
?>
<div class="col-xs-12 nav-bar">
    <div class="col-xs-6">
        <div class="DUQW2P-X-c" style="margin-top: 0px; ">                
            <ul> 
                <li><a href="/nap-<?php echo empty($gameId) ? '0' : $gameId ?>.html">Nạp Tiền</a></li>  
                <li><a href="/ty-gia-<?php echo empty($gameId) ? '0' : $gameId ?>.html">Tỷ giá</a></li>              
            </ul>
        </div> 
    </div>     
</div>
<div class="col-xs-12" style="margin-top: 15px">
    <label><span style="color: red">*</span> Chỉ hiển thị 5 giao dịch nạp gần nhất</label>
    <div class="rech-container">
        <?php
        if (is_array($history)) {
            foreach ($history as $key => $value) {
                ?>
                <div class="rech">
                    <div class="rech-title">
                        Mã giao dịch: <label style="color: red; font-weight: bold"><?php echo $value["order_id"] ?></label>
                    </div>
                    <div class="rech-details">
                        <div class="rech-header"><label style="color: blue; font-weight: bold"><?php echo $value["display"]["game"]["name"] ?></label></div>
                        <div class="rech-header"><label><?php echo date("H:i d/m/Y", strtotime($value["create_date"])) ?></label> </div>
                        <div class="rech-left">
                            <div class="col-xs-12">

                            </div>
                            <div class="col-xs-12">
                                <label style="font-weight: bold">Thông tin nhân vật</label>
                                <ul>
                                    <li>Máy chủ: <?php echo $value["display"]["server"]["name"] ?></li>
                                    <li>Nhân vật: <?php echo $value["display"]["character"]["name"] ?></li>                                        
                                </ul>
                            </div> 
                        </div>
                        <div class="rech-right">                            
                            <div class="col-xs-12">
                                <label style="font-weight: bold">Hình thức nạp</label>
                                <ul>
                                    <li><?php echo $value["display"]["formality"]["name"] . " " . $value["display"]["formality"]["service_name"] ?></li>
                                    <li>Mệnh giá: <?php echo number_format($value["amount"], 0) ?> VNĐ</li>                                        
                                </ul>
                            </div>

                        </div>
                    </div>
                     <?php                                    
                    //if (in_array(Misc\Http\Util::get_remote_ip(), array("127.0.0.1", "118.69.76.212", "115.78.161.88", "115.78.161.124", "115.78.161.134"))) {
                        if (!empty($value["event_result"]) && $value["event_result"]["code"] == 0) {
                            ?>
                            <div class="rech-title">
                                Gift Code: <label style="color: rgb(253,79,0);    font-weight: bold;    border: 1px solid;    padding: 10px;}"><?php echo $value["event_result"]["data"]["code"] ?></label>
                            </div>
                            <?php
                        }
                    //}
                    ?>
                </div>
                <?php
            }
        }
        ?>
    </div>    
</div>
<script type="text/javascript">
    $(document).ready(function () {
        //$("#history").paginationTable({row: 10});
    });
</script>
<?php
include $controller->getPathView() . 'footer.php';
?>

