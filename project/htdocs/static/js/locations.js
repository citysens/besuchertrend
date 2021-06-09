var Locations = Locations || {};
(function (window, $, exports, undefined) {
    'use strict';

    exports.init = function () {

    };

    exports.polygons = {}; // will be filled by renderPolygones()
    exports.heatCircles = {};
    exports.circles = {};
    exports.markers = {};

    exports.renderPolygones = function (map){

        exports.polygons['gloecklerstrasse_busparkplatz'] = L.circle(
            [48.39778687320853, 9.987060427665712],
            {
                radius: 50,
                color: '#888',
                opacity: 0.6,
                weight: 1,
                fillColor: '#888',
                fillOpacity: 0.6
            }
        ).addTo(map).on('click', function (){
            showInfo("gloecklerstrasse_busparkplatz");
        });

        // Hans und Sophie Scholl Platz (kein Sensor)
        exports.polygons['gloecklerstrasse_hirschstrasse'] = L.polygon(
            [
                [48.39749481028939, 9.993081986904146],
                [48.397525085182075, 9.993629157543184],
                [48.39729713260604, 9.993666708469393],
                [48.39728110465211, 9.993081986904146]
            ], {
                color: '#888',
                opacity: 0.6,
                weight: 1,
                fillColor: '#888',
                fillOpacity: 0.6
            }
        ).addTo(map).on('click', function (){
            showInfo("gloecklerstrasse_hirschstrasse");
        });

        // Judenhof
        exports.polygons['hafenbad_hafengasse'] = L.polygon(
            [
                [48.3987716827659, 9.994699358940125],
                [48.3987716827659, 9.995082914829256],
                [48.398319349459435, 9.995077550411226],
                [48.398312226068114, 9.994691312313082]
            ], {
                color: '#888',
                opacity: 0.6,
                weight: 1,
                fillColor: '#888',
                fillOpacity: 0.6
            }
        ).addTo(map).on('click', function (){
            showInfo("hafenbad_hafengasse");
        });

        // Marktplatz am Museum
        exports.polygons['hans_und_sophie'] = L.polygon(
            [
                [48.39696410630345, 9.994428455829622],
                [48.39687684236635, 9.993634521961214],
                [48.39674327482584, 9.99371498823166],
                [48.39663820144754, 9.993843734264376],
                [48.39670409494743, 9.994117319583895],
                [48.396761083851516, 9.994519650936128]
            ], {
                color: '#888',
                opacity: 0.6,
                weight: 1,
                fillColor: '#888',
                fillOpacity: 0.6
            }
        ).addTo(map).on('click', function (){
            showInfo("hans_und_sophie");
        });

        // Marktplatz, am Rathaus
        exports.polygons['hirschstrasse_muensterplatz'] = L.polygon(
            [
                [48.39676464565588, 9.992923736572267],
                [48.39678601647696, 9.993508720703127],
                [48.39656518422635, 9.993508720703127],
                [48.39655449877054, 9.993299245834352],
                [48.3965064141917, 9.992929100990297],
            ], {
                color: '#888',
                opacity: 0.6,
                weight: 1,
                fillColor: '#888',
                fillOpacity: 0.6
            }
        ).addTo(map).on('click', function (){
            showInfo("hirschstrasse_muensterplatz");
        });

        // Münsterplatz Süd
        exports.polygons['platzgasse_herrenkellergasse'] = L.polygon(
            [
                [48.39826236230092, 9.99284327030182],
                [48.398029070455095, 9.99284327030182],
                [48.39800057672125, 9.99259114265442],
                [48.39798454898894, 9.992076158523561],
                [48.398251677201586, 9.992076158523561]
            ], {
                color: '#888',
                opacity: 0.6,
                weight: 1,
                fillColor: '#888',
                fillOpacity: 0.6
            }
        ).addTo(map).on('click', function (){
            showInfo("platzgasse_herrenkellergasse");
        });

        // Münsterplatz, Ost.
        exports.polygons['platzgasse_kohlgasse'] = L.polygon(
            [
                [48.39885003930794, 9.993162453174593],
                [48.39885360096607, 9.99356746673584],
                [48.39880908022147, 9.993680119514467],
                [48.39813057925232, 9.993680119514467],
                [48.39804509817341, 9.993006885051729],
                [48.39826770484973, 9.99296933412552],
                [48.39828195164386, 9.993170499801638],
                [48.398362089786424, 9.99322682619095],
                [48.39844222780279, 9.993377029895784],
                [48.39849565307688, 9.99343603849411],
                [48.39855976333172, 9.993438720703127],
                [48.398620311831586, 9.993371665477754],
                [48.39868086025937, 9.993285834789278],
                [48.398732504449626, 9.99317318201065]
            ], {
                color: '#888',
                opacity: 0.6,
                weight: 1,
                fillColor: '#888',
                fillOpacity: 0.6
            }
        ).addTo(map).on('click', function (){
            showInfo("platzgasse_kohlgasse");
        });

        // Münsterplatz, vor der deutschen Bank
        exports.polygons['sedelhof'] = L.polygon(
            [
                [48.397633718472235, 9.99160945415497],
                [48.397690706334956, 9.99135732650757],
                [48.39791687628571, 9.991386830806732],
                [48.39823564954838, 9.991402924060823],
                [48.39824455380077, 9.991834759712221],
                [48.39800591929757, 9.991834759712221],
                [48.39800591929757, 9.991697967052461],

            ], {
                color: '#888',
                opacity: 0.6,
                weight: 1,
                fillColor: '#888',
                fillOpacity: 0.6
            }
        ).addTo(map).on('click', function (){
            showInfo("sedelhof");
        });

    };

    exports.renderHeatCircles = function (map){
        exports.heatCircles['gloecklerstrasse_busparkplatz'] = L.heatLayer([
            [48.39757316879813, 9.987489581108095, 1.0],
        ],{
            minOpacity: 0.6,
            radius: 50, // default 25
            blur: 7,    // default 15
            gradient: {0.4: 'green', 0.65: 'green', 1: 'green'}
        }).addTo(map);

        exports.heatCircles['gloecklerstrasse_hirschstrasse'] = L.heatLayer([
            [48.39829619843399, 9.986784160137178, 1.0],
        ],{
            minOpacity: 0.6,
            radius: 50, // default 25
            blur: 7,    // default 15
            gradient: {0.4: 'yellow', 0.65: 'yellow', 1: 'yellow'}
        }).addTo(map);

        exports.heatCircles['hafenbad_hafengasse'] = L.heatLayer([
            [48.39899962873483, 9.993562102317812, 1.0],
        ],{
            minOpacity: 0.6,
            radius: 50, // default 25
            blur: 7,    // default 15
            gradient: {0.4: 'yellow', 0.65: 'yellow', 1: 'yellow'}
        }).addTo(map);

        exports.heatCircles['hans_und_sophie'] = L.heatLayer([
            [ 48.39739864286372, 9.99333679676056, 1.0],
        ],{
            minOpacity: 0.6,
            radius: 50, // default 25
            blur: 7,    // default 15
            gradient: {0.4: 'yellow', 0.65: 'yellow', 1: 'yellow'}
        }).addTo(map);

        exports.heatCircles['hirschstrasse_muensterplatz'] = L.heatLayer([
            [48.39834784301477, 9.989994764328005, 1.0],
        ],{
            minOpacity: 0.6,
            radius: 50, // default 25
            blur: 7,    // default 15
            gradient: {0.4: 'yellow', 0.65: 'yellow', 1: 'yellow'}
        }).addTo(map);

        exports.heatCircles['platzgasse_herrenkellergasse'] = L.heatLayer([
            [48.400096604424945, 9.990995228290558, 1.0],
        ],{
            minOpacity: 0.6,
            radius: 50, // default 25
            blur: 7,    // default 15
            gradient: {0.4: 'yellow', 0.65: 'yellow', 1: 'yellow'}
        }).addTo(map);

        exports.heatCircles['platzgasse_kohlgasse'] = L.heatLayer([
            [48.399484010527495, 9.991083741188051, 1.0],
        ],{
            minOpacity: 0.6,
            radius: 50, // default 25
            blur: 7,    // default 15
            gradient: {0.4: 'yellow', 0.65: 'yellow', 1: 'yellow'}
        }).addTo(map);

        exports.heatCircles['sedelhof'] = L.heatLayer([
            [ 48.399464421647444, 9.984219968318941, 1.0],
        ],{
            minOpacity: 0.6,
            radius: 50, // default 25
            blur: 7,    // default 15
            gradient: {0.4: 'yellow', 0.65: 'yellow', 1: 'yellow'}
        }).addTo(map);
    };

    exports.renderCircles = function (map){

        let defaultOptions = {
            color: '#888',
            opacity: 0.6,
            weight: 1,
            fillColor: '#888',
            fillOpacity: 0.6,
            radius: 50
        };

        exports.circles['gloecklerstrasse_busparkplatz'] = L.circle([48.39757316879813, 9.987489581108095], defaultOptions).addTo(map);
        exports.circles['gloecklerstrasse_hirschstrasse'] = L.circle([48.39829619843399, 9.986784160137178], defaultOptions).addTo(map);
        exports.circles['hafenbad_hafengasse'] = L.circle([48.39899962873483, 9.993562102317812], defaultOptions).addTo(map);
        exports.circles['hans_und_sophie'] = L.circle([48.39739864286372, 9.99333679676056], defaultOptions).addTo(map);
        exports.circles['hirschstrasse_muensterplatz'] = L.circle([48.39834784301477, 9.989994764328005], defaultOptions).addTo(map);
        exports.circles['platzgasse_herrenkellergasse'] = L.circle([48.400096604424945, 9.990995228290558], defaultOptions).addTo(map);
        exports.circles['platzgasse_kohlgasse'] = L.circle([48.399484010527495, 9.991083741188051], defaultOptions).addTo(map);
        exports.circles['sedelhof'] = L.circle([48.399464421647444, 9.984219968318941], defaultOptions).addTo(map);
    };

    exports.renderMarker = function (map){

        let defaultOptions = {
            icon: L.icon({
                iconUrl: '/static/img/marker_green.svg',
                iconSize: [150, 150],
            }),
            opacity: '1.00'
        };

        exports.markers['gloecklerstrasse_busparkplatz'] = L.marker([48.39757316879813, 9.987489581108095], defaultOptions).addTo(map);
        exports.markers['gloecklerstrasse_hirschstrasse'] = L.marker([48.39829619843399, 9.986784160137178], defaultOptions).addTo(map);
        exports.markers['hafenbad_hafengasse'] = L.marker([48.39899962873483, 9.993562102317812], defaultOptions).addTo(map);
        exports.markers['hans_und_sophie'] = L.marker([48.39739864286372, 9.99333679676056], defaultOptions).addTo(map);
        exports.markers['hirschstrasse_muensterplatz'] = L.marker([48.39834784301477, 9.989994764328005], defaultOptions).addTo(map);
        exports.markers['platzgasse_herrenkellergasse'] = L.marker([48.400096604424945, 9.990995228290558], defaultOptions).addTo(map);
        exports.markers['platzgasse_kohlgasse'] = L.marker([48.399484010527495, 9.991083741188051], defaultOptions).addTo(map);
        exports.markers['sedelhof'] = L.marker([48.399464421647444, 9.984219968318941], defaultOptions).addTo(map);
    };

    var showInfo = function (locationName) {
        $('#info .info-content').html(locationName).show()
    };

})(window, jQuery, Locations);