import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import USMap from "./usmap";

const Map = () => {
  return (
    <div
      style={{
        width: "50%",
        height: "100%",
        right: 0,
        position: "fixed",
        backgroundColor: "#E8F4F8",
      }}
    >
      <MapContainer
        style={{ height: "93.5vh" }}
        center={[40, -95]}
        zoom={4}
        scrollWheelZoom={false}
        // zoomControl={false}
      >
        <USMap />
      </MapContainer>
    </div>
  );
};

export default Map;
