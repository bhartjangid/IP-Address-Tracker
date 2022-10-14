const btn = document.getElementById("btn");
const IP = document.getElementById("domain");

const ipAddress = document.getElementById("ip-address");
const loc = document.getElementById("location");
const timezone = document.getElementById("timezone");
const isp = document.getElementById("isp");
    let lat = 20.5937;
    let lng = 78.9629;
    var map = L.map('map').setView([lat, lng], 10);


async function eventFunction(){
// input value
    let input = IP.value;
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_lhB8qy5mzZVhDZx8nDtKYIOxzixmX&ipAddress=${input}`);
    const data = await response.json();
    ipAddress.innerHTML = data.ip;
    isp.innerHTML = data.isp;
    loc.innerHTML = `${data.location.city}, ${data.location.country}`;
    timezone.innerHTML = data.location.timezone;
    
    //  lat = data.location.lat;
    //  lng = data.location.lng;
    console.log(data);
    var map = L.map('map').setView([data.location.lat, data.location.lng], 10);
    var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
osm.addTo(map);
// marker
    var marker = L.marker([lat, lng],{icon: myIcon});
marker.addTo(map);
}

    btn.addEventListener('click', eventFunction);


// https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_lhB8qy5mzZVhDZx8nDtKYIOxzixmX&ipAddress=8.8.8.8

// custom Icon

var myIcon = L.icon({
    iconUrl: './images/icon-location.svg',
    iconSize: [60, 80]
});


// event Function


// scale
L.control.scale().addTo(map);
