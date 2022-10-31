/*global kakao */
import React, { useEffect } from 'react';

const { kakao } = window;

const Map = ({ searchPlaces }) => {

    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(33.36241576632475, 126.5333088372503),
            level: 10
        };
        const map = new kakao.maps.Map(container, options);

        var markers = [];
        var infowWindows = [];
        // const ps = new kakao.maps.services.Places();
        // ps.keywordSearch(searchPlace, placesSearchCB);

        // function placesSearchCB(data, status, pagination) {
        //     if (status === kakao.maps.services.Status.OK) {

        //         let bounds = new kakao.maps.LatLngBounds();

        //         for (let i = 0; i < data.length; i++) {
        //             displayMarker(data[i]);
        //             bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        //         }

        //         map.setBounds(bounds);
        //     }
        // }
        if (searchPlaces == "removeAll") {
            removeMarkers();
        }
        else if (searchPlaces !== "") {
            setMarkers(searchPlaces);
        }
        function setMarkers(places) {
            if (markers.length > 0) {
                removeMarkers();
            }

            let bounds = new kakao.maps.LatLngBounds();
            for (let i = 0; i < places.length; i++) {
                displayMarker(places[i]);
                bounds.extend(new kakao.maps.LatLng(places[i].latitude, places[i].longtitude))
            }
            map.setBounds(bounds);
        }

        function displayMarker(place) {
            let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.latitude, place.longtitude),
                title: place.name,
                clickable: true,
            });

            let infoWindow = makeInfoWindow(place.name);
            kakao.maps.event.addListener(marker, 'click', makeOverListener(marker, infoWindow));

            markers.push(marker);
        }

        function removeMarkers() {
            for (let i = 0; i < markers.length; i++) {
                markers[i].setMap(null);
            }
        }

        function makeInfoWindow(content) {
            let infoWindow = new kakao.maps.InfoWindow({
                content: content,
                removable: true,
            })
            infowWindows.push(infoWindow);

            return infoWindow;
        }

        function closeInfoWindow() {
            for (let i = 0; i < infowWindows.length; i++) {
                infowWindows[i].close();
            }
        }

        function panTo(lat, lng) {
            var moveLatLng = new kakao.maps.LatLng(lat, lng);

            map.panTo(moveLatLng);
        }

        function makeOverListener(marker, infoWindow) {
            return function () {
                closeInfoWindow();

                infoWindow.open(map, marker);
                var latLng = marker.getPosition();
                //map.getLevel() < 3 ? null : map.setLevel(3);
                map.setLevel(3);

                panTo(latLng.getLat(), latLng.getLng());
            }
        }
    }, [searchPlaces]);

    return (
        <div id='map' style={{
            width: '60%',
            height: '500px',
            display: 'inline-block'
        }}></div>
    );
}

export default Map;