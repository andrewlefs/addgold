<?php

$ip_internal = array('45.76.183.153', '115.78.161.134','115.78.161.124','192.168.1.5','14.161.5.226','14.161.5.226','118.69.76.21','113.161.77.69','113.161.78.101','118.69.76.212','115.78.161.88','203.162.56.175','123.30.140.179');

if(!in_array($_SERVER['REMOTE_ADDR'], $ip_internal)){
	die('You do not have permission to access this area');
}
set_error_handler(function($errno, $errstr, $errfile, $errline, array $errcontext) {
    if (0 === error_reporting()) {
        return false;
    }
    throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
});

require_once 'curl.php';
$parse = parse_ini_file('../../config.ini', TRUE);

if(empty($parse) == TRUE){
	die('Setup links in config.ini with [production] section');
}

if(empty($parse['production']) == TRUE
OR empty($parse['database']) == TRUE){
	die('ONLY ACCEPT [production],[database],[cache] section');
}

$curl = new curl();
$index = 1;
$html = '';
$fail = 0;
$template = file_get_contents('template.html');
$array_keys = array('index','name','link','response_data','response_code');

foreach($parse['production'] as $key => $value){
	$result = $curl->execute($value);

	if($result['code'] == 200 OR $result['code'] == 301 OR $result['code'] == 400){
		$code = '<td style="background-color: #55E655;color: white;">'.$result['code'].'</td>';
	}else{
		$fail++;
		$code = '<td style="background-color: red;">'.$result['code'].'</td>';
	}
	$data = array($index,$key,$value,substr(strip_tags($result['data']), 0, 50), $code);
	$html .= str_replace($array_keys, $data, $template);
	$index++;
}

mysqli_report(MYSQLI_REPORT_STRICT);
foreach($parse['database'] as $key => $value){
    $connected = false;
    try{
        $mysqli = mysqli_init();
        $mysqli->options(MYSQLI_OPT_CONNECT_TIMEOUT, 5);
        //$mysqli = new mysqli($value['host'], $value['username'], $value['password'], $value['db_name']);
        $mysqli->real_connect($value['host'], $value['username'], $value['password'], $value['db_name']);

        if ($mysqli->connect_errno) {
            $fail++;
            $code = '<td style="background-color: red;">'. $mysqli->connect_error() . '</td>';
        }else{
			$mysqli->query("SELECT `id` FROM {$value['tbl_test']} LIMIT 1");
			$code = '<td style="background-color: #55E655;color: white;">OK</td>';
            $connected = true;
		}
	}
    catch (mysqli_sql_exception $ex){
		$fail++;
		$code = '<td style="background-color: red;">' . $ex->getMessage() . '</td>';
	}

	$data = array($index,$key,$value['host'],'Connect to mySQL',$code);
	$html .= str_replace($array_keys, $data, $template);

	if($connected){
		$mysqli->close();
	}
	$index++;
}

foreach($parse['cache'] as $key => $value){
	try{
		$memcache = new Memcache;
		$memcache->connect($value['host'], $value['port']);
		$code = '<td style="background-color: #55E655;color: white;">OK</td>';
	}catch (Exception $ex){
		$fail++;
		$code = '<td style="background-color: red;">FAIL</td>';
	}
	$data = array($index,$key,$value['host'],'Connect to Memcache',$code);
	$html .= str_replace($array_keys, $data, $template);
	$index++;
}


?>
<head>
	<link rel="stylesheet" href="style.css">
	<meta http-equiv="refresh" content="15">
</head>
<body>
	<table class="pure-table pure-table-bordered">
		<thead>
			<tr>
				<td colspan="5"><button onclick="location.reload()">Refresh</button></td>
			</tr>
			<tr>
				<th>#</th>				
				<th>Name</th>						
				<th>Link</th>
				<th>Response Data</th>				
				<th>Response Code</th>
			</tr>	
		</thead>
		<?php echo $html; ?>
	</table>
	<?php if($fail > 0) { ?>	
		<audio controls autoplay loop style="display:none;">		  
			<source src="alert.mp3" type="audio/mpeg">		
		</audio>
	<?php } ?>
</body>
