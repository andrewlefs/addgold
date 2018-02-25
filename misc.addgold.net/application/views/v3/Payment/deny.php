<?php

use Misc\Security;

include $controller->getPathView() . 'header.php';
?>
<div class="main">
    <noscript class="constrain">JavaScript is required for full functionality.</noscript>    
    <div class="shorten header mdl-shadow--2dp" style="min-height: calc(100vh - 179px);">
        <div class="shorten content constrain" style="padding-top: 0px">   
            <span class="deny-row">
                <button class="mdl-button mdl-js-button mdl-button--icon" style="color: red" data-upgraded=",MaterialButton" tabindex="0">                        
                    <i class="material-icons">error</i>
                </button>                                                            
            </span>
            <span  class="deny-row"><?php echo $message ?></span>
        </div>

    </div>    
    <?php
    include $controller->getPathView() . 'footer.php';
    ?>
