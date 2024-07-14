var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?pk.eyJ1IjoicmV5bmFqYSIsImEiOiJjbHlsMWozNmUwamIzMmtvZ2MzM2pvbG1kIn0.az6-coAWRqug_CR7RwgPWg', {
  attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18,
  id: 'mapbox://styles/reynaja/clyl1kyv601vv01qo0ijj5607', // Replace with your Mapbox style ID
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoicmV5bmFqYSIsImEiOiJjbHlsMWozNmUwamIzMmtvZ2MzM2pvbG1kIn0.az6-coAWRqug_CR7RwgPWg'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map)
  .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
  .openPopup();

map.on('click', function(e) {
  var popup = L.popup()
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
});