import { useEffect, useRef } from "react";
import { GeoJSON, LayersControl } from "react-leaflet";
import { useLocation, useParams } from "react-router-dom";
import api from "../../api/api";

const StateMap = () => {
  const stateGeoJsonLayer = useRef();
  const location = useLocation();
  const params = useParams();
  console.log(params.id);
  console.log(location.state.code);
  useEffect(() => {
    const stateLayer = stateGeoJsonLayer.current;
    api.getStateMap(location.state.code).then((res) => {
      stateLayer.addData(res.data.ensemble.currentDistrictPlan.features);
      console.log(res.data.ensemble.currentDistrictPlan.features);
    });
  }, []);
  const onEachFeature = (district, layer) => {
    layer.bindPopup(district.properties.NAME);
    layer.on({
      mouseout: (event) => {
        layer.closePopup();
      },
      mouseover: (event) => {
        layer.openPopup();
      },
    });
  };
  return (
    <LayersControl>
      <LayersControl.Overlay name="Districts">
        <GeoJSON ref={stateGeoJsonLayer} onEachFeature={onEachFeature} />
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Precinct">
        <GeoJSON />
      </LayersControl.Overlay>
    </LayersControl>
  );
};

export default StateMap;
