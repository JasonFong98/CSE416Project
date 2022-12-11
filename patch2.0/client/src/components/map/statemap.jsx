import { useEffect, useRef } from "react";
import { GeoJSON, LayersControl } from "react-leaflet";
import { useLocation} from "react-router-dom";
import api from "../../api/api";

const StateMap = () => {
  const stateGeoJsonLayer = useRef();
  const location = useLocation();
  useEffect(() => {
    const stateLayer = stateGeoJsonLayer.current;
    api.getStateMap(location.state.code).then((res) => {
      stateLayer.addData(res.data.features);
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

  const layer = (
    <LayersControl.Overlay checked name="Districts">
      <GeoJSON pathOptions={{color: 'blue', fillColor: 'lightblue'}} ref={stateGeoJsonLayer} onEachFeature={onEachFeature} />
    </LayersControl.Overlay>
  );

  return (
    <LayersControl>
      {layer}
    </LayersControl>
  );
};

export default StateMap;
