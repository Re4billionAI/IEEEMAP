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
const markers = [
  {
    geocode: [12.245914085514979, 79.59611009470636],
    popUp: "Kollar ICICI Bank"
  },
  {
    geocode: [12.232884092747348, 79.49285273483387],
    popUp: "Modiyur ICICI Bank"
  },
  {
    geocode: [12.119422441362495, 79.38236576551719],
    popUp: "Ananthapuram ICICI Bank"
  },
  {
    geocode: [10.812364895087802, 78.77200842316836],
    popUp: "Vengur ICICI Bank"
  },
  {
    geocode: [11.931114941309213, 79.28076590969235],
    popUp: "Sithalingamadam ICICI Bank"
  },
  {
    geocode: [11.927369429691284, 79.1959115366784],
    popUp: "Keelathalanur ICICI Bank"
  },
  
  {
    geocode: [12.322467202995817, 79.48391685202753],
    popUp: "Agalur ICICI Bank"
  },{
    geocode: [11.9581922859929, 78.8987062724214],
    popUp: "puthirampatttu ICICI Bank"
  },{
    geocode: [11.5548451303901, 79.5544782238362],
    popUp: "vadalur ICICI Bank"
  },{
    geocode: [11.8894874998255, 78.9136923623407],
    popUp: "Pootai ICICI Bank"
  },{
    geocode: [11.8720030338827, 79.5807627095937],
    popUp: "Siruvanthadu ICICI Bank"
  },{
    geocode: [12.3422024756704, 79.3258336162621],
    popUp: "Melmalaiyanur ICICI Bank"
  },{
    geocode: [12.2053318865419, 79.7426921929505],
    popUp: "Perumukkal ICICI Bank"
  },{
    geocode: [11.3189097467824, 79.808258818514],
    popUp: "Thandanvakulam ICICI Bank"
  },{
    geocode: [12.3295609337406, 78.3611553095866],
    popUp: "Jambukuttapatti ICICI Bank"
  },{
    geocode: [11.5282757566832, 77.4586361130561],
    popUp: "Perumugai ICICI Bank"
  },{
    geocode: [10.8430395757423, 78.5849487198463],
    popUp: "Ayilapettaikoppu ICICI Bank"
  },{
    geocode: [16.279553320544, 80.2107223342481],
    popUp: "Nudurupadu ICICI Bank"
  },{
    geocode: [15.8648922788053, 78.0184930139662],
    popUp: "Panchalingala ICICI Bank"
  },{
    geocode: [12.2351381051585, 79.6491610491931],
    popUp: "Saram ICICI Bank"
  },{
    geocode: [16.68063, 77.630059],
    popUp: "kollampalle ICICI Bank"
  },{
    geocode: [16.550236, 77.774682],
    popUp: "Fareedpur ICICI Bank"
  },{
    geocode: [17.769356, 79.377558],
    popUp: "Ippagudem ICICI Bank"
  },{
    geocode: [17.157687, 78.067739],
    popUp: "Muthpoor ICICI Bank"
  },{
    geocode: [16.693727, 77.583813],
    popUp: "Chinnajatram ICICI Bank"
  },{
    geocode: [15.632905, 77.888107],
    popUp: "Laddagiri ICICI Bank"
  },{
    geocode: [14.308669, 76.810565],
    popUp: "Channamahgathihalli ICICI Bank"
  },{
    geocode: [13.313985, 75.974005],
    popUp: " Sindigere ICICI Bank"
  },{
    geocode: [10.974388, 78.385641],
    popUp: "Alagarai ICICI Bank"
  },{
    geocode: [10.2650, 78.0966],
    popUp: "Kaniyapuram ICICI Bank"
  },{
    geocode: [14.394696, 75.965068],
    popUp: "Kurki ICICI Bank"
  },{
    geocode: [11.10425, 79.714584],
    popUp: "Arupathy ICICI Bank"
  },{
    geocode:[10.859925, 79.08984],
    popUp: "keelathirupanthuruthi ICICI Bank"
  },{
    geocode: [18.530411, 74.014772],
    popUp: "Kolwadi ICICI Bank"
  },{
    geocode: [18.540989, 74.036405],
    popUp: "Sashte ICICI Bank"
  },{
    geocode:[21.107653, 73.067836],
    popUp: "Pisad ICICI Bank"
  },{
    geocode:[21.264865, 73.096398],
    popUp: "Timba ICICI Bank"
  },{
    geocode:[21.122221, 73.031595],
    popUp: "Tundi ICICI Bank"
  },{
    geocode:[21.061978, 73.132792],
    popUp: "Tarsadi ICICI Bank"
  },{
    geocode: [22.548139, 73.220255],
    popUp: "Gothada ICICI Bank"
  },{
    geocode:[22.596109, 73.360173],
    popUp: "Dhantej ICICI Bank"
  },{
    geocode:[19.517194, 73.022524],
    popUp: "KarelaPada "
  },{
    geocode:[19.523652, 73.012513],
    popUp: "GhayGotha "
  },




];

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
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}
