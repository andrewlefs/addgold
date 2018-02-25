<?php

use Misc\Security;

include $controller->getPathView() . 'header.php';
?>
<div class="col-xs-12 nav-bar">
<!--    <div class="col-xs-6">
        <div class="DUQW2P-X-c" style="margin-top: 0px; ">                
            <ul> 
                <li><a href="/nap-<?php echo empty($gameId) ? '0' : $gameId ?>.html">Nạp Tiền</a></li>  
                <li><a href="/ty-gia-<?php echo empty($gameId) ? '0' : $gameId ?>.html">Tỷ giá</a></li>              
            </ul>
        </div> 
    </div>     -->
</div>
<div class="banner">
<!--    <img src="/v1/nap/images/banner.png"/>-->
</div>

<?php
if ($gameList == true) {
    ?>
    <section class="DUQW2P-k-P"> 
        <div class="DUQW2P-k-Q"> 
            <div class="DUQW2P-bi-e DUQW2P-k-F">                         
                <div class="DUQW2P-bi-f"> 
                    <div class="id-card-list card-list two-cards">
                        <div class="alert-game col-xs-12">Vui lòng chọn game để nạp</div>
                        <?php
                        if ($gameList == true && is_array($gameList)) {
                            foreach ($gameList as $key => $value) {
                                if ($value["publish"] == 0 && !in_array(Misc\Http\Util::get_remote_ip(), array("127.0.0.1", "118.69.76.212", "115.78.161.88", "115.78.161.124", "115.78.161.134"))) {
                                    continue;
                                }
                                ?>
                                <div class="card no-rationale square-cover apps medium" data-docid="org.jtb.alogcat" data-original-classes="card no-rationale square-cover apps medium" data-short-classes="card no-rationale square-cover apps medium" data-thin-classes="card no-rationale square-cover apps medium"> 
                                    <div class="card-content id-track-click id-track-impression" data-docid="org.jtb.alogcat" data-server-cookie="CAIaGwoXEhUKD29yZy5qdGIuYWxvZ2NhdBABGANCAA==" data-uitype="500">                                                  
                                        <div class="cover"> 
                                            <div class="cover-image-container"> 
                                                <div class="cover-outer-align"> 
                                                    <div class="cover-inner-align"> 
                                                        <a href="/nap-<?php echo $value["app_id"] ?>.html" title="<?php echo $value["name"] ?>" aria-hidden="true" tabindex="-1">
                                                            <img alt="<?php echo $value["name"] ?>" class="cover-image" data-cover-large="" data-cover-small="" src="<?php echo $value["icon"] ?>" aria-hidden="true">
                                                        </a>
                                                    </div>
                                                </div> 
                                            </div>                                             
                                        </div> 
                                        <div class="details">          
                                            <a class="title" href="/nap-<?php echo $value["app_id"] ?>.html" title="<?php echo $value["name"] ?>" aria-hidden="true" tabindex="-1">  <?php echo $value["name"] ?> <span class="paragraph-end"></span> </a>
                                            <div class="subtitle-container">   
                                                <a class="subtitle" href="/nap-<?php echo $value["app_id"] ?>.html" title="Style Game"><?php echo $value["type"] ?></a>                                                   
                                            </div>  
                                            <div class="description">                                                 
                                                <?php
                                                $operations = $value["operation"];
                                                if ($operations == true) {
                                                    foreach ($operations as $k => $val) {
                                                        ?>                                                        
                                                        <i class="operation <?php echo $val?>"></i>
                                                        <?php
                                                    }
                                                }
                                                ?>
                                            </div> 
                                        </div>       
                                        <div class="reason-set">  

                                        </div>   
                                    </div>   
                                </div>  
                                <?php
                            }
                        }
                        ?>                                
                    </div> 
                </div>                
            </div> 
        </div>  
    </section>
    <?php
}
?>
<?php
include $controller->getPathView() . 'footer.php';
?>
