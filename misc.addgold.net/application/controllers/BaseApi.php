<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


require_once APPPATH . 'core/EI_Controller.php';

require_once 'autoloader.php';

class BaseApi extends EI_Controller {

    protected $_response;

    public function __construct() {
        parent::__construct();
    }

    public function getCache($key) {
        $memcache = new Memcache();
        $memcache->connect(CachedHosts::MEMCACHED_HOST, CachedHosts::MEMCACHED_PORT);
        $memcache->getVersion();
        return $memcache->get($key);
    }

    function saveCache($key, $data, $cacheTime = 3600) {
        $memcache = new Memcache();
        $memcache->connect(CachedHosts::MEMCACHED_HOST, CachedHosts::MEMCACHED_PORT);
        $memcache->set($key, $data, false, $cacheTime);
    }

}
