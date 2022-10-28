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
            for (let i = 0; i < markers.length; i++) {
                markers[i].setMap(null);
            }
        }
        else if (searchPlaces !== "") {
            setMarkers(searchPlaces);
        }
        function setMarkers(places) {
            let bounds = new kakao.maps.LatLngBounds();
            for (let i = 0; i < places.length; i++) {
                displayMarker(places[i]);
                bounds.extend(new kakao.maps.LatLng(places[i].lat, places[i].lng))
            }
            map.setBounds(bounds);
        }

        function displayMarker(place) {
            let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.lat, place.lng),
                title: place.title
            });
            markers.push(marker);
        }
    }, [searchPlaces]);

    return (
        <div id='map' style={{
            width: '1000px',
            height: '500px'
        }}></div>
    );
}

export default Map;