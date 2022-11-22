import { FeatureGroup, MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import USMap from "./usmap";

const Map = () => {
  // const map_api = import.meta.env.VITE_MAPTILER_API;
  // const URL =
  //   "https://api.maptiler.com/maps/bright-v2/{z}/{x}/{y}.png?key=" + map_api;
  const URL =
    "https://maps.geoapify.com/v1/tile/osm-liberty/{z}/{x}/{y}.png?apiKey=" +
    import.meta.env.VITE_GEOAPIFY_API;
  return (
    <div id="us-map-container">
      <MapContainer style={{ height: "60vh" }} center={[40, -99]} zoom={5}>
        <TileLayer
          // url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          url={URL}
          attribution="&copy; Powered by <a href=https://www.geoapify.com/ target=_blank>Geoapify</a> | <a href=https://openmaptiles.org/ target=_blank>© OpenMapTiles</a> <a href=https://www.openstreetmap.org/copyright target=_blank>© OpenStreetMap</a> contributors"
        />
        <FeatureGroup>
          <USMap />
        </FeatureGroup>
      </MapContainer>
    </div>
  );
};

export default Map;
