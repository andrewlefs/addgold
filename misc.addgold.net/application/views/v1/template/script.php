<?php
if ($script == true) {
    foreach ($script as $key => $value) {
        echo '<script src="' . $value . '"></script>';
    }
} else {
    ?>
    <script src="/v1/payment/js/jquery-1.11.3.min.js"></script>
    <script src="/v1/payment/js/bootstrap.min.js"></script>
    <script src="/v1/payment/js/script.js"></script>
    <?php    
}
?>


