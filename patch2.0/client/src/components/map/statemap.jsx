import { useEffect, useRef, useContext, useState} from "react";
import { GeoJSON, LayersControl } from "react-leaflet";
import { useLocation} from "react-router-dom";
import api from "../../api/api";
import { GlobalStoreContext } from "../../store/store";

const StateMap = () => {
  const stateGeoJsonLayer = useRef();
  const location = useLocation();
  const {store}  = useContext(GlobalStoreContext);
  const [data, setData] = useState({});

  useEffect(() => {
    const stateLayer = stateGeoJsonLayer.current;
    store.setDistrictData(data);
    if(store.geoJson == "Enacted Plan"){
      api.getStateMap(location.state.code).then((res) => {
        stateLayer.clearLayers().addData(res.data.features);
      });
    }else if (store.geoJson == "mmd1"){
      api.getMMDAveragePlan(location.state.code, store.mmd1).then((res) => {
        stateLayer.clearLayers().addData(res.data.features);
      });
    }else if (store.geoJson == "mmd2"){
      api.getMMDAveragePlan(location.state.code, store.mmd2).then((res) => {
        stateLayer.clearLayers().addData(res.data.features);
      });
    }else{
      stateLayer.clearLayers();
    }
    
  }, [store.geoJson, data]);
  
  const onEachFeature = (district, layer) => {
    if(district.properties.NAME){
      layer.bindPopup("District: " + parseInt(district.properties.NAME, 10));
    }else{
      layer.bindPopup("District: " + parseInt(district.properties.District, 10));
    }
    layer.on({
      click:(event)=>{
        setData(event.target.feature.properties);
        layer.setStyle({color: "red", fillColor:"green"})
      },
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
      <LayersControl.Overlay checked name=" ">
        <GeoJSON style={{fillColor: "lightblue"}} ref={stateGeoJsonLayer} onEachFeature={onEachFeature} />
      </LayersControl.Overlay>
    </LayersControl>
  );
};

export default StateMap;
