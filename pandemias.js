const OPEN_STREET_MAPS = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

const madCoords = L.latLng(40.4233873, -3.6927541)
const theBridgeCoords = L.latLng(40.421519, -3.692623)
const keepCodingCoords = L.latLng(40.404276, -3.689932)
const neolandCoords = L.latLng(40.422261, -3.714074)
const ironhackCoords = L.latLng(40.392508, -3.698211)
const upgradeHubCoords = L.latLng(40.458860, -3.694706)
const adalabCoords = L.latLng(40.413069, -3.718209)

const zoom = 14

const map = L.map('mapita')

map.setView(madCoords, zoom)

L.tileLayer(OPEN_STREET_MAPS).addTo(map)

const theBridgeMarker = L.marker(theBridgeCoords).addTo(map);
const keepCodingMarker = L.marker(keepCodingCoords).addTo(map);
const neolandMarker = L.marker(neolandCoords).addTo(map);
const ironhackMarker = L.marker(ironhackCoords).addTo(map);
const upgradeHubMarker = L.marker(upgradeHubCoords).addTo(map);
const adalabMarker = L.marker(adalabCoords).addTo(map);

const polygon = L.polygon([
  upgradeHubCoords,
  theBridgeCoords,
  neolandCoords,
  adalabCoords,
  ironhackCoords,
  keepCodingCoords,
  ]).addTo(map);

theBridgeMarker.bindPopup('un catarrillo sin más')
keepCodingMarker.bindPopup('aqui trabajan en remoto')
neolandMarker.bindPopup('no me queda claro donde está')
ironhackMarker.bindPopup('no se han dado cuenta todavía')
upgradeHubMarker.bindPopup('se han contagiado de los de vaughan')
adalabMarker.bindPopup('en realidad ya no están aquí')


function onMapClick(e) {
    alert("No hay lugar seguro");
    alert("vamos a morir todos")
}

map.on('click', onMapClick);
