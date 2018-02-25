<?php

include("php_file_tree.php");

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>GET LOGS</title>
		<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
		<link href="styles/default/default.css" rel="stylesheet" type="text/css" media="screen" />
		
		<!-- Makes the file tree(s) expand/collapsae dynamically -->
		<script src="jquery-3.0.0.js" type="text/javascript"></script>
		<script src="php_file_tree_jquery.js" type="text/javascript"></script>
	</head>

	<body>
		<?php
		
		if ($_SERVER['PHP_AUTH_USER'] != 'coor' OR $_SERVER['PHP_AUTH_PW'] != 'coor@123') {
		   header('WWW-Authenticate: Basic realm="Enter user & pass here!"');
		   header('HTTP/1.0 401 Unauthorized');
		   echo "Access Denied";
		   die;
		}
		
		/*$whiteListIP = array('52.76.27.221', '203.162.79.103', '203.162.79.104', '203.162.79.118', '115.78.161.88', '115.78.161.124', '123.30.140.185', '10.10.10.28', '10.10.10.29', '123.30.140.181', '10.10.20.112', '10.10.20.113', '10.10.20.104', '203.162.79.126', '203.162.56.158');
        $clientIP = $_SERVER['REMOTE_ADDR'];
        // check IPs
        if (!in_array($clientIP, $whiteListIP)) {
            echo ('YOUR IP ' . $clientIP . ' IS REJECT');
            die;
        } */
		?>
	
		<style>
			ul {
				margin: 0;
				padding: 3px 15px;
			}
		</style>
		<div style="width: 225px;float: left">
			<?php
				echo php_file_tree("../../application/logs/", "javascript:get_content('[link]');");
			?>
		</div>
		<div style="width:790px;float: left; margin-left: 10px;" class="view_file">
			
		</div>
		<script>
			function get_content(link) {
				$.ajax({
					url:'ajax.php',
					type:"POST",
					data:{id:link},
					async:false,
					success:function(f){
						$(".view_file").html(f);
					}
				});
			}
		</script>
	</body>
</html>
