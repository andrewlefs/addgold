<?php 
function redirect_ssl() {
    $CI =& get_instance();
    $class = $CI->router->fetch_class();
    $ssl_require =  array();  // add more controller name to require ssl.
	//'buygem',"recharge"
    if(!in_array($class,$ssl_require)) {
      // redirecting to ssl.
      $CI->config->config['base_url'] = str_replace('http://', 'https://', $CI->config->config['base_url']);
	  if ($_SERVER['SERVER_PORT'] != 443) redirect($CI->uri->uri_string()."?".$_SERVER['QUERY_STRING']);
    } 
}
?>