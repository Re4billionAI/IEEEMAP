import "./styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";
import Placholder from "./placeholder.png"; 

// ✅ 1. Use image from public folder
const customIcon = new Icon({
  iconUrl: Placholder, // Make sure this image exists in the public folder
  iconSize: [38, 38]
});

// ✅ 2. Custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};

// ✅ 3. Your marker array (same as provided)
const markers = [{
    geocode:[19.517194, 73.022524],
    name: "KarelaPada "
  },{
    geocode:[19.523652, 73.012513],
    name: "GhayGotha "
  },]

const indiaBounds = [[8, 68], [37, 98]];

export default function App() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={[22, 78]}
        zoom={5}
        maxBounds={indiaBounds}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createClusterCustomIcon}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker.geocode}
              icon={customIcon} // ✅ Add this line
            >
              <Popup>{marker.name}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}
