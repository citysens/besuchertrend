<?php
require('../app/appStart.inc.php');

if (isset($_GET['call']) && $_GET['call'] == 'pz') {

    $api = ExxAPI::create('please-fill-me', 'please-fill-me', Util::getLogger());
    $api->setApiBaseUrl('https://datenhub.ulm.de/api/datasets');
    $api->setTokenBaseUrl('https://datenhub.ulm.de/auth/realms/datenhubulm/protocol/openid-connect/token');

    $data = $api->getData('/weihnachtsmarkt_besucher/paxPlaceOccupation', 'pzulm', ['id=hans_und_sophie,gloecklerstrasse_busparkplatz,gloecklerstrasse_hirschstrasse,hafenbad_hafengasse,hirschstrasse_muensterplatz,platzgasse_herrenkellergasse,platzgasse_kohlgasse,sedelhof'], 'P2D');

    Comm::sendJSON($data, Comm::$HTTP_200_OK);

} else {

    Comm::sendJSON([
        'message' => 'just dont'
    ], Comm::$HTTP_400_BAD_REQUEST);

}