<?php

$config = ConfigObject::getInstance();
$config->setDebug(true);

$config->setProjectName('Personenzählung');
$config->setProjectMenuName('PZ');

$config->setBasePath(BASE_DIR);
$config->setDefaultScheme('http');

$config->setModernLogger(true);
$config->setAdminEmail('mail@example.com');
$config->setMinimumLogLevel(Log::DEBUG);