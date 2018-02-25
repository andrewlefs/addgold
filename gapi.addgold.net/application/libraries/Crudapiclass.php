<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

require_once __DIR__ . '/crudapi/autoload.php';
class Crudapiclass{
    public $api;


    function __construct(){
        $CI =& get_instance();
        $db_info = $CI->load->database(array('db' => 'user_info', 'type' => 'master'), true);

        $this->api = new PHP_CRUD_API(array(
 	        'dbengine'=>'MySQL',
	        'hostname'=>$db_info->hostname,
 	        'username'=>$db_info->username,
 	        'password'=>$db_info->password,
 	        'database'=>'gapi',
 	        'charset'=>'utf8',
            'request' => $_GET['table']
        ));
    }

    public function execute(){
        $this->api->executeCommand();
    }

}