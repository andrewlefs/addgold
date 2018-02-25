<div style="border:1px solid #990000;padding-left:20px;margin:0 0 10px 0;">

    <h4>A PHP Error was encountered</h4>

    <p>Severity: <?php echo $severity; ?></p>
    <p>Message:  <?php echo $message; ?></p>
    <p>Filename: <?php echo $filepath; ?></p>
    <p>Line Number: <?php echo $line; ?></p>

</div>
<?php
/** TUNGTT 19/08/2015 **/
function getCurrentURL(){
	$pageURL = 'http';
	if ($_SERVER["HTTPS"] == "on") {$pageURL .= "s";}
	$pageURL .= "://";
	if ($_SERVER["SERVER_PORT"] != "80") {
		$pageURL .=
		$_SERVER["SERVER_NAME"].":".$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"];
	}
	else {
		$pageURL .= $_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];
	}
	return $pageURL;
}
$filename=explode('.',basename(__FILE__));
MEAPI_Log::writeCsv(array(getCurrentURL(),date('M-d-y'),date('H:m:s')), $filename[0]."_".date('H'));
?>