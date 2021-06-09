<?php
require(dirname(__FILE__) . '/../app/CortexRouter.php');
$router = new CortexRouter();

$router->addMatchTypes([
    'l' => '[a-z]{2}(?:_[a-z]++)?'
]);