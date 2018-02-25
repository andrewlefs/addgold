<?php

namespace Payment\Http;

class DataReceivers extends \ArrayObject {

    /**
     * Indicates if we trust HTTP_X_FORWARDED_* headers.
     *
     * @var boolean
     */
    protected $trustForwarded = false;

    /**
     * List of query parameters that get automatically dropped when rebuilding
     * the current URL.
     */
    protected static $DROP_QUERY_PARAMS = array(
        'code',
        'state',
        'signed_request',
    );

    public function __construct() {
        $protocol = $this->getHttpProtocol() . '://';
        $host = $this->getHttpHost();
        $currentUrl = $protocol . $host . $_SERVER['REQUEST_URI'];
        $parts = parse_url($currentUrl);
        $query = '';
        $params = array();
        if (!empty($parts['query'])) {
            parse_str($parts['query'], $query);            
            $params = array_merge($params, $query);
        }
        if ($_POST == true) {
            $params = array_merge($params, $_POST);
        }        
        parent::__construct($params);
    }

    /**
     * Returns true if and only if the key or key/value pair should
     * be retained as part of the query string.  This amounts to
     * a brute-force search of the very small list of Facebook-specific
     * params that should be stripped out.
     *
     * @param string $param A key or key/value pair within a URL's query (e.g.
     *                      'foo=a', 'foo=', or 'foo'.
     *
     * @return boolean
     */
    protected function shouldRetainParam($param) {
        foreach (self::$DROP_QUERY_PARAMS as $drop_query_param) {
            if ($param === $drop_query_param ||
                    strpos($param, $drop_query_param . '=') === 0) {
                return false;
            }
        }

        return true;
    }

    /**
     * Returns the HTTP Host
     *
     * @return string The HTTP Host
     */
    protected function getHttpHost() {
        if ($this->trustForwarded && isset($_SERVER['HTTP_X_FORWARDED_HOST'])) {
            $forwardProxies = explode(',', $_SERVER['HTTP_X_FORWARDED_HOST']);
            if (!empty($forwardProxies)) {
                return $forwardProxies[0];
            }
        }
        return $_SERVER['HTTP_HOST'];
    }

    /**
     * Returns the HTTP Protocol
     *
     * @return string The HTTP Protocol
     */
    protected function getHttpProtocol() {
        if ($this->trustForwarded && isset($_SERVER['HTTP_X_FORWARDED_PROTO'])) {
            if ($_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') {
                return 'https';
            }
            return 'http';
        }
        /* apache + variants specific way of checking for https */
        if (isset($_SERVER['HTTPS']) &&
                ($_SERVER['HTTPS'] === 'on' || $_SERVER['HTTPS'] == 1)) {
            return 'https';
        }
        /* nginx way of checking for https */
        if (isset($_SERVER['SERVER_PORT']) &&
                ($_SERVER['SERVER_PORT'] === '443')) {
            return 'https';
        }
        return 'http';
    }

    /**
     * @param array $data
     */
    public function enhance(array $data) {
        foreach ($data as $key => $value) {
            $this[$key] = $value;
        }
    }

    /**
     * @param mixed $value
     * @return string
     */
    protected function exportNonScalar($value) {
        return json_encode($value);
    }

    /**
     * @return array
     */
    public function export() {
        $data = array();
        foreach ($this as $key => $value) {
            $data[$key] = is_null($value) || is_scalar($value) ? $value : $this->exportNonScalar($value);
        }

        return $data;
    }

    public function getData() {
        $querys = $_SERVER["QUERY_STRING"];
        $params = array();
        if ($querys == true && empty($querys) == false) {
            $retained_params = explode('&', $parts['query']);
            $params = array_merge($params, $retained_params);
        }
        if ($_POST == true) {
            $params = array_merge($params, $_POST);
        }
        foreach ($params as $key => $value) {
            $this[$key] = $value;
        }
        die;
    }

}
