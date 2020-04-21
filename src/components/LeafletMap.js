import '../../node_modules/leaflet/dist/leaflet.css';

import '../../node_modules/leaflet/dist/images/marker-icon-2x.png';
import '../../node_modules/leaflet/dist/images/marker-shadow.png';

import '../../node_modules/leaflet/dist/leaflet';

const LeafletMap = () => {


  var ccMap = L.map('map-clearcut').setView([46.230064775742619, -60.280816839649972], 13);

  var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  }).addTo(ccMap);

  var polyGeoJson = L.geoJson(clearcutJson).addTo(ccMap);
  setTimeout(() => {
    ccMap.flyToBounds(polyGeoJson.getBounds());
  }, 1000)

  document.getElementById('cc-toggle-check').onclick = function () {
    // console.dir(this);
    if (!this.__checked) {
      ccMap.addLayer(eval(this.dataset.layer));
    } else {
      ccMap.removeLayer(eval(this.dataset.layer));
    }
  }

  var pictouMap = L.map('map-pictou').setView([45.674803, -62.706196], 15);

  var Thunderforest_Pioneer = L.tileLayer('https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey={apikey}', {
    attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    apikey: 'd062f8378a7a4693ac7d32866f255cf2',
    maxZoom: 22
  }).addTo(pictouMap);

}

export default LeafletMap;
