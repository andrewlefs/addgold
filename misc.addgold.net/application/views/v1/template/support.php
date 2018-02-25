<?php

use Misc\Http\Util_Helper;

if ($is_support == 1) {
    $name = "Cần liên hệ trợ giúp?";
    if (isset($support["name"][$lang]) && !empty($support["name"][$lang]))
        $name = $support["name"][$lang];
        
    $supportUrl = isset($support["url"]) ? Util_Helper::RebuildUrl($support["url"], $_GET, $controller->getSecret(), $controller->getTimeSlice()) : "#";
    ?>
    <div class="footer-sdk">
        <a href="<?php echo $supportUrl ?>"><?php echo $name ?></a>
    </div>
<?php } ?>