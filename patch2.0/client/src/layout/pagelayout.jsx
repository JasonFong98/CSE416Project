import Map from "../components/map/map";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div id="layout">
      <Outlet />
      <div id="map-container">
        <Map />
      </div>
    </div>
  );
};

export default PageLayout;
