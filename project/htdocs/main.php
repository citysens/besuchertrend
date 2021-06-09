<?php
require('../app/appStart.inc.php');

$config = ConfigObject::getInstance();
$smarty->assign('config', $config);
$smarty->display('main.tpl');
