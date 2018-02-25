<?php

if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

$db['system_info'] = array(
    'cfg' => array('master' => 1, 'master_random' => false, 'slave_random' => false),
    'db' => array(
        gen_cfg_db('localhost', 'root', "", 'misc'),
        gen_cfg_db('localhost', 'root', "", 'misc'),
    )
);

//gen_cfg_db('127.0.0.1', 'misc', "JCFmeoB0JgHvMPogFbtV", 'misc'),
$db['user_info'] = array(
    'cfg' => array('master' => 1, 'master_random' => false, 'slave_random' => false),
    'db' => array(
        gen_cfg_db('localhost', 'root', "", 'misc'),
        gen_cfg_db('localhost', 'root', "", 'misc'),
    )
);
