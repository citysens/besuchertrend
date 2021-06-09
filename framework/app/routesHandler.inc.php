<?php
//*******************
// Route Handling
//*******************
$match = $router->match();
if ($match) {
    // adding the names parameters to get vars. I don't think we need POST handling here.
    $_GET = array_merge($_GET, $match['params']);
    $_REQUEST = array_merge($_REQUEST, $match['params']);
    require('../htdocs' . $match['target']);
} else {
    require('../htdocs/404.php');
}

