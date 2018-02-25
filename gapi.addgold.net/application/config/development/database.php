<?php

if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

$db['system_info'] = array(
    'cfg' => array('master' => 1, 'master_random' => false, 'slave_random' => false),
    'db' => array(
        gen_cfg_db('127.0.0.1', 'gapi', 'qWlAQ7H2kb', 'gapi'),
        gen_cfg_db('127.0.0.1', 'gapi', 'qWlAQ7H2kb', 'gapi')
    )
);

$db['user_info'] = array(
    'cfg' => array('master' => 1, 'master_random' => false, 'slave_random' => false),
    'db' => array(
        gen_cfg_db('127.0.0.1', 'gapi', 'qWlAQ7H2kb', 'gapi'),
        gen_cfg_db('127.0.0.1', 'gapi', 'qWlAQ7H2kb', 'gapi')
    )
);

$db['kingofgame_globaldb_test'] = array(
    'cfg' => array('master' => 1, 'master_random' => false, 'slave_random' => false),
    'db' => array(
        gen_cfg_db('203.162.80.92', 'mig_tech', 'migtech@@@', 'cokdb_global'),
        gen_cfg_db('203.162.80.92', 'mig_tech', 'migtech@@@', 'cokdb_global')
    )
);

$db['kingofgame_globaldb'] = array(
    'cfg' => array('master' => 1, 'master_random' => false, 'slave_random' => false),
    'db' => array(
        gen_cfg_db('103.57.220.28', 'mig_tech', 'sQLc0K182GF23', 'cokdb_global'),
        gen_cfg_db('103.57.220.28', 'mig_tech', 'sQLc0K182GF23', 'cokdb_global')
    )
);

$db['daupha_gamedata_test'] = array(
    'cfg' => array('master' => 1, 'master_random' => false, 'slave_random' => false),
    'db' => array(
        gen_cfg_db('203.162.80.93', 'mig_tech', 'rTYU!@#!#F14N', 'gamedata'),
        gen_cfg_db('203.162.80.93', 'mig_tech', 'rTYU!@#!#F14N', 'gamedata')
    )
);

$db['daupha_gamedata_1'] = array(
    'cfg' => array('master' => 1, 'master_random' => false, 'slave_random' => false),
    'db' => array(
        gen_cfg_db('103.57.220.40', 'mig_tech', 'sQLc0K182GF23', 'gamedata_1'),
        gen_cfg_db('103.57.220.40', 'mig_tech', 'sQLc0K182GF23', 'gamedata_1')
    )
);

$db['daupha_gamedata_2'] = array(
    'cfg' => array('master' => 1, 'master_random' => false, 'slave_random' => false),
    'db' => array(
        gen_cfg_db('103.57.220.40', 'mig_tech', 'sQLc0K182GF23', 'gamedata_2'),
        gen_cfg_db('103.57.220.40', 'mig_tech', 'sQLc0K182GF23', 'gamedata_2')
    )
);

$db['daupha_gamedata_3'] = array(
    'cfg' => array('master' => 1, 'master_random' => false, 'slave_random' => false),
    'db' => array(
        gen_cfg_db('103.57.220.40', 'mig_tech', 'sQLc0K182GF23', 'gamedata_3'),
        gen_cfg_db('103.57.220.40', 'mig_tech', 'sQLc0K182GF23', 'gamedata_3')
    )
);

$db['daupha_gamedata_4'] = array(
    'cfg' => array('master' => 1, 'master_random' => false, 'slave_random' => false),
    'db' => array(
        gen_cfg_db('103.57.220.40', 'mig_tech', 'sQLc0K182GF23', 'gamedata_4'),
        gen_cfg_db('103.57.220.40', 'mig_tech', 'sQLc0K182GF23', 'gamedata_4')
    )
);

/* End of file database.php */
/* Location: ./application/config/database.php */