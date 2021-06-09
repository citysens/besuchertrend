<?php
require('../../framework/config/smartyConfig.inc.php');
$smarty->addPluginsDir(BASE_DIR . 'project/lib/smarty/smartyPlugins');
if (!$config->getDebug()) {
    $smarty->loadFilter('output', 'trimwhitespace');
}
