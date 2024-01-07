
const arrCoords = [];

const arrDog = [[45.51, -122.68],
[37.77, -122.43],
[34.04, -118.2]];


const getPosition = (dataCoords) => {
    const crd = dataCoords.coords;

    console.log(crd);

    arrCoords.push(crd.latitude, crd.longitude)

    stratCard()
}

const errorMessage = (error) => {
    console.log('message: ' + error)
}

navigator.geolocation.getCurrentPosition(getPosition, errorMessage);


const stratCard = () => {

    let map = L.map('map', {
        center: arrCoords,
        zoom: 15
    });


    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker(arrCoords).addTo(map)
        .bindPopup('Я!.')
        .openPopup();



    let polyline = L.polyline(arrDog, { color: 'red' }).addTo(map);

    map.fitBounds(polyline.getBounds());
}


// console.log(geoPosition)

// console.log(geoPosition)

