<?php
define('BASE_DIR', realpath(dirname(__FILE__) . '/../..') . '/');

include(BASE_DIR . 'framework/libExt/vendor/autoload.php');
include(BASE_DIR . 'project/libExt/vendor/autoload.php');

// reqire the project config file.
require(BASE_DIR . 'project/config/config.inc.php');
