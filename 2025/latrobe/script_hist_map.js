// each functionality of Leaflet is prefixed with L. to avoid name clashes with 
// default JS functionality. E.g., map() is also a function in default JS. 

// create map map_div container (selection of container via id -> 'map')
// const map_options = { crs: L.CRS.EPSG3857 }
const map = L.map('map-container', map_options).setView([51.04, 13.72], 13);
map.attributionControl.addAttribution('<a href=https://kartenforum.slub-dresden.de/>Historic maps hosted by SLUB Dresden</a>')
map.attributionControl.addAttribution('<br><a href=https://www.openstreetmap.org/copyright>© OpenStreetMap contributors</a>')
map.attributionControl.setPrefix(false)

// add the basemap (background map)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const wmsLayer = L.tileLayer.wms('https://wms.kartenforum.slub-dresden.de/map/10001963', {
    layers: 'df_dk_0010001_4948_1925',
    format: 'image/png',
    transparent: true,
}).addTo(map);