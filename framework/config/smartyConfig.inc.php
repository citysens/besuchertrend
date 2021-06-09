<?php
$smarty = new Smarty();

// add framework plugins
$smarty->addPluginsDir(BASE_DIR . 'framework/libExt/smartyPlugins');

// Template directory
$smarty->addTemplateDir($config->getBasePath() . 'project/templates');
$smarty->addTemplateDir($config->getBasePath() . 'framework/templates');

// Caching directory
$smarty->setCompileDir($config->getBasePath() . 'tmp/tpl_c');
$smarty->setCacheDir($config->getBasePath() . 'tmp/s_cache');

$smarty->setCaching(Smarty::CACHING_OFF);
$smarty->compile_check = true;
$smarty->use_sub_dirs = true;

$smarty->assignByRef('config', $config);

