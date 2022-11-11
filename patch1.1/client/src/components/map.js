import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import USMap from "./usmap";

const Map = () => {
  return (
    <div id="map-container">
      <MapContainer
        style={{ height: "60vh" }}
        center={[35, -95]}
        zoom={4}
        autoPan={false}
        // zoomControl={false}
      >
        <USMap />
      </MapContainer>
    </div>
  );
};

export default Map;
