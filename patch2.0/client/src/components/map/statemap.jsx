import { useEffect, useRef, useContext, useState} from "react";
import { GeoJSON, LayersControl, useMap} from "react-leaflet";
import { useLocation, useParams} from "react-router-dom";
import api from "../../api/api";
import { GlobalStoreContext } from "../../store/store";

const StateMap = () => {
  const stateGeoJsonLayer = useRef();
  const location = useLocation();
  const map = useMap();
  const {store}  = useContext(GlobalStoreContext);
  const [data, setData] = useState({});

  useEffect(() => {
    const stateLayer = stateGeoJsonLayer.current;
    store.setDistrictData(data);
    if(store.geoJson == "Enacted Plan"){
      api.getStateMap(location.state.code).then((res) => {
        stateLayer.clearLayers().addData(res.data.features);
        map.fitBounds(stateLayer.getBounds());
      });
    }else if (store.geoJson == "smdRand"){
      api.getSMDRandomPlan(location.state.code, 1).then((res) => {
        stateLayer.clearLayers().addData(res.data.features);
      });
    }else if (store.geoJson == "mmdAvg1"){
      api.getMMDAveragePlan(location.state.code, store.mmd1).then((res) => {
        stateLayer.clearLayers().addData(res.data.features);
        console.log(res.data);
      });
    }else if (store.geoJson == "mmdAvg2"){
      api.getMMDAveragePlan(location.state.code, store.mmd2).then((res) => {
        stateLayer.clearLayers().addData(res.data.features);
        console.log(res.data);
      });
    }else{
      stateLayer.clearLayers();
    }
    
  }, [store.geoJson, data]);
  
  const onEachFeature = (district, layer) => {
    if(district.properties.DistrictDRSplit){
      layer.bindPopup("District: " + parseInt(district.properties.District, 10) + "<br>Number Of Rep: "+ district.properties.Representatives.split(" ").length +"<br>Representatives: "+ district.properties.Representatives.replaceAll(" ", ", "));
    }else if(district.properties.District){
      layer.bindPopup("District: " + parseInt(district.properties.District, 10) + "<br>Representative: "+ (district.properties.DemPercent > .5) ? "Democrat" : "Republican");  
    }else{
      layer.bindPopup("District: " + parseInt(district.properties.NAME, 10) + "<br>Representative: " + (district.properties.Representatives) + "<br>Party: " + (district.properties.DemVote > district.properties.RepVote) ? "Democrat": "Republican");    
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
