<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Misc;

use Misc\Controller;

class MemcacheObject {

    const DEFAULT_HOST = "127.0.0.1";
    const DEFAULT_PORT = "11211";

    /**
     *
     * @var type 
     */
    protected $hostMemcache = self::DEFAULT_HOST;

    /**
     *
     * @var type 
     */
    protected $portMemcache = self::DEFAULT_PORT;

    /**
     *
     * @var type 
     */
    protected $controller;

    public function getController() {
        return $this->controller;
    }

    public function setController(Controller $controller) {
        $this->controller = $controller;
    }

    public function genCacheId($keyId) {
        return md5($this->getController()->getAppId() . $keyId);
    }

    /**
     * 
     * @return type
     */
    public function getHostMemcache() {
        return $this->hostMemcache;
    }

    /**
     * 
     * @return type
     */
    public function getPortMemcache() {
        return $this->portMemcache;
    }

    /**
     * 
     * @param type $hostMemcache
     */
    public function setHostMemcache($hostMemcache) {
        $this->hostMemcache = $hostMemcache;
    }

    /**
     * 
     * @param type $portMemcache
     */
    public function setPortMemcache($portMemcache) {
        $this->portMemcache = $portMemcache;
    }

    public function saveMemcache($key, $value, $group = "", $cachetime = 3600) {
        $memcache = new \Memcache;
        $status = @$memcache->connect($this->getHostMemcache(), $this->getPortMemcache());
        if ($status == true) {
            if (!empty($group))
                $group = $group . "_";
            $mkey = $_SERVER["HTTP_HOST"] . "_" . strtolower($group) . md5($key);
            $memcache->set($mkey, $value, false, $cachetime);
            $memcache->close();
            return true;
        }
        return false;
    }

    public function getMemcache($key, $group = "") {

        $memcache = new \Memcache;
        $status = @$memcache->connect($this->getHostMemcache(), $this->getPortMemcache());
        if ($status == true) {
            if (!empty($group))
                $group = $group . "_";
            $mkey = $_SERVER["HTTP_HOST"] . "_" . strtolower($group) . md5($key);
            $memcache->getversion();
            $value = $memcache->get($mkey);
            $memcache->close();
            //var_dump($value);die;
            return $value;
        }
        return null;
    }

    public function delete($key) {
        $memcache = new \Memcache;
        $status = @$memcache->connect($this->getHostMemcache(), $this->getPortMemcache());
        if ($status == true) {
            $memcache->set($key, false, false, 1);
            $del = $memcache->delete($key);
            $memcache->close();
            return $del;
        }
        return false;
    }

    public function getAllMemcache() {

        $memcache = new \Memcache;
        $status = @$memcache->connect($this->getHostMemcache(), $this->getPortMemcache());
        $caches = array();

        if ($status == true) {
            $slabs = $memcache->getExtendedStats('slabs');
            //var_dump($slabs);
            foreach ($slabs as $serverSlabs) {
                //var_dump($serverSlabs);
                if ($serverSlabs) {
                    foreach ($serverSlabs as $slabId => $slabMeta) {
                        //var_dump($slabMeta);
                        if (is_int($slabId)) {
                            try {
                                $cacheDump = $memcache->getExtendedStats('cachedump', (int) $slabId, 1000);
                                //var_dump($cacheDump);
                            } catch (Exception $e) {
                                continue;
                            }

                            if (is_array($cacheDump)) {
                                foreach ($cacheDump as $dump) {
                                    if (is_array($dump)) {
                                        foreach ($dump as $key => $value) {
                                            $clearFlag = preg_match('/^' . preg_quote($_SERVER["HTTP_HOST"], '/') . '/', $key);
                                            if ($clearFlag) {
                                                $splitKey = explode("_", $key);
                                                $v = $memcache->get($key);
                                                if (count($splitKey) > 2) {
                                                    if (!isset($caches[$_SERVER["HTTP_HOST"]][$splitKey[1]])) {
                                                        $caches[$_SERVER["HTTP_HOST"]][$splitKey[1]] = array();
                                                    }
                                                    $value["value"] = $v;
                                                    $caches[$_SERVER["HTTP_HOST"]][$splitKey[1]][$key] = json_encode($value);
                                                } else {
                                                    $value["value"] = $v;
                                                    if (!isset($caches[$_SERVER["HTTP_HOST"]])) {
                                                        $caches[$_SERVER["HTTP_HOST"]] = array();
                                                    }
                                                    $caches[$_SERVER["HTTP_HOST"]][$key] = json_encode($value);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            $memcache->close();
        }
        return $caches;
    }

     public function removeAllMemcache() {

        $memcache = new \Memcache;
        $status = @$memcache->connect($this->getHostMemcache(), $this->getPortMemcache());
        $caches = array();

        if ($status == true) {
            $slabs = $memcache->getExtendedStats('slabs');
            //var_dump($slabs);
            foreach ($slabs as $serverSlabs) {
                //var_dump($serverSlabs);
                if ($serverSlabs) {
                    foreach ($serverSlabs as $slabId => $slabMeta) {
                        //var_dump($slabMeta);
                        if (is_int($slabId)) {
                            try {
                                $cacheDump = $memcache->getExtendedStats('cachedump', (int) $slabId, 1000);
                                //var_dump($cacheDump);
                            } catch (Exception $e) {
                                continue;
                            }

                            if (is_array($cacheDump)) {
                                foreach ($cacheDump as $dump) {
                                    if (is_array($dump)) {
                                        foreach ($dump as $key => $value) {
                                            $clearFlag = preg_match('/^' . preg_quote($_SERVER["HTTP_HOST"], '/') . '/', $key);
                                            if ($clearFlag) {                                                
                                                $memcache->delete($key);                                                
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            $memcache->close();
        }
        return $caches;
    }
    
    public function clearByPrefix($prefixes = array()) {
        $prefixes = array_unique($prefixes);

        $memcache = new \Memcache;
        $status = @$memcache->connect($this->getHostMemcache(), $this->getPortMemcache());
        if ($status == true) {
            $slabs = $memcache->getExtendedStats('slabs');
            //var_dump($slabs);
            foreach ($slabs as $serverSlabs) {
                //var_dump($serverSlabs);
                if ($serverSlabs) {
                    foreach ($serverSlabs as $slabId => $slabMeta) {
                        //var_dump($slabMeta);
                        if (is_int($slabId)) {
                            try {
                                $cacheDump = $memcache->getExtendedStats('cachedump', (int) $slabId, 1000);
                                //var_dump($cacheDump);
                            } catch (Exception $e) {
                                continue;
                            }

                            if (is_array($cacheDump)) {
                                foreach ($cacheDump as $dump) {
                                    if (is_array($dump)) {
                                        foreach ($dump as $key => $value) {
                                            //var_dump($dump);
                                            $clearFlag = false;
                                            // Check key has prefix or not
                                            foreach ($prefixes as $prefix) {
                                                $clearFlag = $clearFlag || preg_match('/^' . preg_quote($prefix, '/') . '/', $key);
                                            }
                                            // Clear cache
                                            if ($clearFlag) {
                                                $this->clear($key);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            $memcache->close();
        }
    }

}
