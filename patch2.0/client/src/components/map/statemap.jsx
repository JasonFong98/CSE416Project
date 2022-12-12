import { useEffect, useRef, useContext, useState} from "react";
import { GeoJSON, LayersControl } from "react-leaflet";
import { useLocation} from "react-router-dom";
import api from "../../api/api";
import { GlobalStoreContext } from "../../store/store";

const StateMap = () => {
  const stateGeoJsonLayer = useRef();
  const location = useLocation();
  const {store}  = useContext(GlobalStoreContext);

  useEffect(() => {
    const stateLayer = stateGeoJsonLayer.current;
    
    if(store.geoJson == "Enacted Plan"){
      stateLayer.clearLayers();
      api.getStateMap(location.state.code).then((res) => {
        stateLayer.addData(res.data.features);
      });
    }else if (store.geoJson == "Average MMD Plan"){
      stateLayer.clearLayers();
      api.getUSMap().then((res) => {
        stateLayer.addData(res.data);
      });
    }else{
      stateLayer.clearLayers();
    }
    
  }, [store]);


  const onEachFeature = (district, layer) => {
    layer.bindPopup("District: " + parseInt(district.properties.NAME, 10));
    layer.on({
      mouseout: (event) => {
        layer.closePopup();
      },
      mouseover: (event) => {
        layer.openPopup();
      },
    });
  };


  let layer = (
    <LayersControl.Overlay checked name="Districts">
    <GeoJSON pathOptions={{color: 'red', fillColor: 'pink'}} ref={stateGeoJsonLayer} onEachFeature={onEachFeature} />
    </LayersControl.Overlay>
  );

  if(store.geoJson == "Average MMD Plan"){
    layer = (
      <LayersControl.Overlay checked name="Average MMD Plan">
        <GeoJSON pathOptions={{color: 'red', fillColor: 'pink'}} ref={stateGeoJsonLayer} onEachFeature={onEachFeature} />
      </LayersControl.Overlay>
    ); 
  }
  return (
    <LayersControl>
      {layer}
    </LayersControl>
  );
};

export default StateMap;
