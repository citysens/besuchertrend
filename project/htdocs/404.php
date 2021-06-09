<?php
require('../app/appStart.inc.php');

header("HTTP/1.1 404 Not Found");
$smarty->display('404.tpl');
