<?php

/**
 * Copyright 2016 Facebook, Inc.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to
 * use, copy, modify, and distribute this software in source code or binary
 * form for use in connection with the web services and APIs provided by
 * Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use
 * of this software is subject to the Facebook Developer Principles and
 * Policies [http://developers.facebook.com/policy/]. This copyright notice
 * shall be included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */
/**
 * You only need this file if you are not using composer.
 * Why are you not using composer?
 * https://getcomposer.org/
 */
if (version_compare(PHP_VERSION, '5.4.0', '<')) {
    throw new Exception('The Facebook SDK requires PHP version 5.4 or higher.');
}

//function __autoload($class) {
//    //echo $class;
//    $parts = explode('\\', $class);
//    require end($parts) . '.php';
//}

/**
 * Register the autoloader for the Facebook SDK classes.
 *
 * Based off the official PSR-4 autoloader example found here:
 * https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader-examples.md
 *
 * @param string $class The fully-qualified class name.
 *
 * @return void
 */
spl_autoload_register(function ($class) {
    // project-specific namespace prefix
    $prefix = 'GraphApi\\';
    //echo $prefix;

    // For backwards compatibility
    $customBaseDir = __DIR__ . '\\GraphApi\\';
    // @todo v6: Remove support for 'GRAPH_SHARE_SDK_V1_SRC_DIR'
    if (defined('GRAPH_SHARE_SDK_V1_SRC_DIR')) {
        $customBaseDir = GRAPH_SHARE_SDK_V1_SRC_DIR;
    } elseif (defined('GRAPH_SHARE_SDK_SRC_DIR')) {
        $customBaseDir = GRAPH_SHARE_SDK_SRC_DIR;
    }
    // base directory for the namespace prefix
    $baseDir = $customBaseDir ? : __DIR__ . '/';

    //echo $baseDir . "<br>";
    //echo $baseDir;
    // does the class use the namespace prefix?
    $len = strlen($prefix);

    if (strncmp($prefix, $class, $len) !== 0) {
        // no, move to the next registered autoloader
        return;
    }

    // get the relative class name
    $relativeClass = substr($class, $len);

    // replace the namespace prefix with the base directory, replace namespace
    // separators with directory separators in the relative class name, append
    // with .php
    //$file = rtrim($baseDir, '/') . $relativeClass  . '.php';
    //echo rtrim($baseDir, '/') . '/';
    //var_dump($relativeClass);
    $file = str_replace('\\', '/', rtrim($baseDir, '/')) . '/' . str_replace('\\', '/', $relativeClass) . '.php';

    //echo $file;
    // if the file exists, require it
    if (file_exists($file)) {
        //echo $file . "<br>";
        require_once $file;
    }
});
