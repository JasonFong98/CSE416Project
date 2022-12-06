import Map from "../components/map/map";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div id="layout">
      <div id="map-container">
        <Map />
      </div>
      <Outlet />
    </div>
  );
};

export default PageLayout;
