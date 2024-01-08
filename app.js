
const meCoords = [];

const arrDogCoords = [[45.51, -122.68],
[37.77, -122.43],
[34.04, -118.2]];


let map = L.map('map').setView([53, 27], 10);

let osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
osm.addTo(map);

if (!navigator.geolocation) {
    console.log('You browser not feature!')
} else {
    setInterval(() => {
        navigator.geolocation.getCurrentPosition(getPosition, errorMessage)
    }, 5000)
}

let marker, circle;
const getPosition = (position) => {

    console.log(position);

    let { latitude = latitude, longitude = longitude, accuracy = accuracy } = position.coords;

    console.log(latitude, longitude, accuracy);

    if (marker) {
        map.removeLayer(marker)
    }

    if (circle) {
        map.removeLayer(circle)
    }

    marker = L.marker([latitude, longitude]);
    circle = L.circle([latitude, longitude], { radius: accuracy });

    let featureGroup = L.featureGroup([marker, circle]).addTo(map)

    map.fitBounds(featureGroup.getBounds());
}

const errorMessage = (error) => {
    console.log('message: ' + error)
}
