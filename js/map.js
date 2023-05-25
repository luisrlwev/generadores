function initMap() {

    /* ### Mapa con las coordenadas ### */
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: { lat: 20.639192, lng: -87.088637 },
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
        },
        streetViewControl: false
    });
    /* ### Fin Mapa con las coordenadas ### */

    /* ### Estilos del mapa ### */
    var styledMapType = new google.maps.StyledMapType(
        [{
                "featureType": "poi.business",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "off"
                }]
            }
        ], { name: 'Generadores del caribe' });

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
    /* ### Fin Estilos del mapa ### */
    /* ### Íconos en el mapa ### */
    var icon = 'img/marcador.png';

    var contentGeneradores = '<div class="info-window">' +
        '<h3 class="color">Generadores del caribe</h3>' +
        '<div class="info-content">' +
        '<p class="text-dark">¡Encontraste los mejores generadores en el caribe!</p>' +
        '<p>Calle blah blah blah.</p>'+
        '</div>' +
        '</div>';

    var infowindowGeneradores = new google.maps.InfoWindow({
        content: contentGeneradores
    });

    var marker = new google.maps.Marker({
        position: { lat: 20.637877, lng: -87.088594 },
        map: map,
        title: 'Generadores del caribe',
        icon: icon
    });

    marker.addListener('click', function() {
        infowindowGeneradores.open(map, marker);
    });
}