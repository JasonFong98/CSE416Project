import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import USMap from "./usmap";

const Map = () => {
  return (
    <div
      style={{
        width: "40%",
        height: "60%",
        top: "25%",
        left: "60%",
        position: "absolute",
        backgroundColor: "#E8F4F8",
        borderRadius: "30px"
      }}
    >
      <MapContainer
        style={{ height: "60vh" }}
        center={[35, -95]}
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
