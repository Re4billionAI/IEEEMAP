import "./styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import { Icon, divIcon, point } from "leaflet";
import Placeholder from "./placeholder.png"

// create custom icon
const customIcon = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconUrl: Placeholder,
  iconSize: [38, 38] // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};

// markers
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
  },

];

const indiaBounds = [[8, 68], [37, 98]];

export default function App() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={[22, 78]} // Adjust the center coordinates
        zoom={5} // Adjust the zoom level as needed
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
          {/* Mapping through the markers */}
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.geocode}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}
