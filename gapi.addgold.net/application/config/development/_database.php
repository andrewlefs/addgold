<?php

if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

$db['system_info'] = array(
    'cfg' => array('master' => 1, 'master_random' => false, 'slave_random' => false),
    'db' => array(
        gen_cfg_db('localhost', 'root', '', 'gapi_mobo_vn'),
        gen_cfg_db('localhost', 'root', '', 'gapi_mobo_vn')
    )
);

$db['user_info'] = array(
    'cfg' => array('master' => 1, 'master_random' => false, 'slave_random' => false),
    'db' => array(
        gen_cfg_db('localhost', 'root', '', 'gapi_mobo_vn'),
        gen_cfg_db('localhost', 'root', '', 'gapi_mobo_vn')
    )
);

//$db['system_info'] = array(
//    'cfg' => array('master' => 1, 'master_random' => false, 'slave_random' => false),
//    'db' => array(
//        gen_cfg_db('localhost', 'gapimobo', '768CAKLmcx', 'gapi_mobo_vn'),
//        gen_cfg_db('localhost', 'gapimobo', '768CAKLmcx', 'gapi_mobo_vn')
//    )
//);
//
//$db['user_info'] = array(
//    'cfg' => array('master' => 1, 'master_random' => false, 'slave_random' => false),
//    'db' => array(
//        gen_cfg_db('localhost', 'gapimobo', '768CAKLmcx', 'gapi_mobo_vn'),
//        gen_cfg_db('localhost', 'gapimobo', '768CAKLmcx', 'gapi_mobo_vn')
//    )
//);

/* End of file database.php */
/* Location: ./application/config/database.php */