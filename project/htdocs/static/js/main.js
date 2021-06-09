var Main = Main || {};
(function (window, $, exports, undefined) {
    'use strict';

    let map;
    let currentData = null;

    exports.init = function () {
        initMap();
        getData();

        setInterval(getData, 30000);
    };


    var initMap = function() {
        map = L.map('mapid').setView([48.398544, 9.992987], 17);

        L.tileLayer('https://c.tile.openstreetmap.de/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            maxZoom: 19,
            zoomSnap: 0.5,
        }).addTo(map);
        map.zoomControl.remove();

        L.control.zoom({ position: 'bottomright' }).addTo(map);
        map.on('locationfound', function (e) {
            var corner1 = L.latLng(e.latitude, e.longitude);
            var corner2 = L.latLng(48.398307368756605, 9.993683762724562);
            bounds = L.latLngBounds(corner1, corner2);
            map.fitBounds(bounds, {
                padding: L.Point(20, 20)
            });
        });

        L.control.locate({
            position: 'bottomright',
            icon: 'location-icon'
        }).addTo(map);

        var corner1 = L.latLng(48.40051285215814, 9.986662261364422),
            corner2 = L.latLng(48.39665256884672, 9.995352465850566),
            bounds = L.latLngBounds(corner1, corner2);
        map.fitBounds(bounds);

        // a handful of different visualizations
        //Locations.renderPolygones(map);
        //Locations.renderHeatCircles(map);
        //Locations.renderCircles(map);
        //Locations.renderImageOverlays(map);
        Locations.renderMarker(map);

        map.on('zoomend', function() {
            if (currentData != null) {
                let currentZoom = map.getZoom();
                Object.keys(Locations.markers).forEach(function (key, i) {
                    let metresPerPixel = 40075016.686 * Math.abs(Math.cos(map.getCenter().lat * Math.PI/180)) / Math.pow(2, map.getZoom()+8);
                    let size = 100 / metresPerPixel; //
                    Locations.markers[key].setIcon(L.icon({
                        iconUrl: currentData[key] ? '/static/img/marker_yellow.svg' : '/static/img/marker_green.svg',
                        iconSize: [size, size],
                    }));
                });
            }
        });
    };

    var getData = function() {

        $.ajax({
            url: "/api/pz",
            type: "GET",
            dataType: 'json'
        }).done(function(data) {
            currentData = data;
            Object.keys(data).forEach(function (key, i){

                // polygons
                // Locations.polygons[key].setStyle({
                //     fillColor: data[key] ? 'yellow' : 'green',
                //     color: data[key] ? 'yellow' : 'green',
                // });

                // circles
                // Locations.circles[key].setStyle({
                //     fillColor: data[key] ? 'yellow' : 'green',
                //     color: data[key] ? 'yellow' : 'green',
                // });

                Locations.markers[key].setIcon(L.icon({
                    iconUrl: data[key] ? '/static/img/marker_yellow.svg' : '/static/img/marker_green.svg',
                }));

                // heatmap
                // Locations.circles[key].setOptions({
                //     gradient: {1: data[key] ? 'yellow' : 'green'}
                // });
            });
        }).fail(function(jqXHR, textStatus) {

        });

    };

})(window, jQuery, Main);