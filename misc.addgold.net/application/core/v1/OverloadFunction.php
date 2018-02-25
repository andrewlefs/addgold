<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * extend function version php not support
 */
if (!function_exists("array_column")) {

    function array_column(array $array, $column) {
        if ($array == false)
            return array();
        foreach ($array as $key => $value) {
            if (isset($value[$column])) {
                $data[] = $value[$column];
            }
        }
        return $data;
    }

}
if (!function_exists("array_of_column_value")) {

    function array_of_column_value(array $arrays, $col, $val) {
        if ($arrays == false)
            return array();
        foreach ($arrays as $key => $value) {
            if (isset($value[$col]) && $value[$col] == $val) {
                $data[] = $value;
            }
        }
        return $data;
    }

}
if (!function_exists("array_get_value_fields")) {

    function array_get_value_fields($value, $fields) {        
        foreach ($fields as $ky => $val) {
            if (isset($value[$val]))
                $fields[$ky] = $value[$val];
        }
        return $fields;
    }

}
if (!function_exists("array_column_items")) {

    function array_column_items(array $arrays, $col, $val, array $fields) {
        if ($arrays == false)
            return array();
        foreach ($arrays as $key => $value) {
            if (!isset($data[$val]) && isset($value[$col]) && $value[$col] == $val) {
                $data[$val] = array_get_value_fields($value, $fields);
            }
        }
        return $data;
    }

}

if (!function_exists("hash_equals")) {

    function hash_equals($a, $b) {		
        return $a === $b;
    }

}
if (!function_exists("args_with_keys")) {

    function args_with_keys($params, array $unsetkeys = array()) {
        $res = array();
        foreach ($params as $key => $value) {
            if (is_object($value))
                continue;
            if (is_bool($value))
                continue;
            if (isset($unsetkeys[$key]))
                continue;
            if (is_array($value))
                $res[$key] = json_encode($value);
            else
                $res[$key] = $value;
        }
        return $res;
    }

}

if (!function_exists("args_with_not_empty_keys")) {

    function args_with_not_empty_keys($params, array $requires = array()) {
        $res = array();
        foreach ($requires as $key => $value) {
            if (!isset($params[$value]))
                continue;
            if (is_null($params[$value]) || empty($params[$value]))
                continue;
            if (is_array($params[$value]) || is_object($params[$value]))
                $res[$value] = json_encode($params[$value]);
            else
                $res[$value] = $params[$value];
        }
        return $res;
    }

}
if (!function_exists("array_merge_is_null")) {

    function array_merge_is_null(/* Dynamic */) {
        $args = func_get_args();
        $res = array();
        foreach ($args as $key => $value) {
            if (!is_null($value))
                $res = array_merge($res, $value);
        }
        return $res;
    }

}

if (!function_exists("array_level_up")) {

    function array_level_up(array $args) {
        if (is_null($args))
            return null;
        $res = array();
        foreach ($args as $key => $value) {
            if (is_array($value)) {
                $rs = array_level_up($value);
                $res = array_merge_is_null($res, $rs);
            } else {
                $res[$key] = $value;
            }
        }
        return $res;
    }

}

if (!function_exists("path_end")) {

    function path_end($path) {
        $paths = explode("/", $path);
        $lenght = count($paths);
        for ($i = $lenght - 1; $i >= 0; $i--) {
            if (empty($paths[$i]) == false)
                return $paths[$i];
        }
    }

}
