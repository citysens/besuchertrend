<?php
global $router;

$router->map('GET',        '/[l:lang]?/',         '/main.php', 'framework_main');
$router->map('GET|POST',   '/api/[a:call]',       '/api.php',     'api');
