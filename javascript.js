const btn = document.getElementById("btn");
const IP = document.getElementById("domain");

const ipAddress = document.getElementById("ip-address");
const loc = document.getElementById("location");
const timezone = document.getElementById("timezone");
const isp = document.getElementById("isp");

var map = L.map('map').setView([20.5937, 78.9629], 14);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
osm.addTo(map);

async function trackIP() {
     let input = IP.value;
        let lat;
        let lng;
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_lhB8qy5mzZVhDZx8nDtKYIOxzixmX&ipAddress=${input}`);
    
    const data = await response.json();
    
    ipAddress.innerHTML = data.ip;
    isp.innerHTML = data.isp;
    loc.innerHTML = `${data.location.city}, ${data.location.country}`;
    timezone.innerHTML = data.location.timezone;
    lat = data.location.lat;
    lng = data.location.lng;

    map.panTo(new L.LatLng(lat, lng));
     var marker = L.marker([lat, lng],{icon: myIcon});
marker.addTo(map);
};

var myIcon = L.icon({
    iconUrl: './images/icon-location.svg',
    iconSize: [60, 80]
});