// create map
const map = L.map('mapid').setView([-3.1306426,-60.0236332], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [50,60],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

function addMarker({id, name, lat, lng}) {


    //create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/startup?id=${id}"><img src="/images/arrow-white.svg" > </a>`)

    //create and add marker
    L
    .marker([lat,lng], { icon })
    .addTo(map)
    .bindPopup(popup)
}

const startupsSpan = document.querySelectorAll('.startups span')

// extrai os dados e chama a função
startupsSpan.forEach( span => {
    const startup = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(startup)
})