<?php
$myfile = fopen($_REQUEST['id'], "r") or die("Unable to open file!");
while(!feof($myfile)) {
    echo fgets($myfile) . "<br>";
}
fclose($myfile);

