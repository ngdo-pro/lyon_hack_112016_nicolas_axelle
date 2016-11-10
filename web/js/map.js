var map;
function initMap() {
    var poiId = document.getElementById("poi").innerHTML;
    var xhr = new XMLHttpRequest(), monResultat;
    xhr.open('GET', '/poi/ajax/' + poiId);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var poi = JSON.parse(xhr.responseText);
            var coord = {lat: -34.397 , lng:  150.644};
            var map = new google.maps.Map(document.getElementById('map'), {
                center: coord,
                zoom: 18
            });
            var contentString = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">' + poi.name + '</h1>'+
                '<div id="bodyContent">'+
                '<p>' + poi.typeDetail + '</p>'+
                '<p>' + poi.adress + '</p>'+
                '<p>' + poi.postalCode + '</p>'+
                '<p>' + poi.city + '</p>'+
                '<p>' + poi.phoneNumber + '</p>'+
                '<p>' + poi.openingHours + '</p>'+
                '<p>' + poi.tariff + '</p>'+
                '</div>'+
                '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            var marker = new google.maps.Marker({
                position: coord,
                map: map,
                title: poi.name
            });
            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });
        }
    };
    xhr.send('variable=valeur');


}