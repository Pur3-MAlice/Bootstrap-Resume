function initMap() {
    const myLatLng = { lat: 53.483959, lng: -2.244644 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 9,
        center: myLatLng,
    });
    new google.maps.Marker({
        position: myLatLng, map,
        title: "Manchester",
    });
}
window.initMap = initMap; 