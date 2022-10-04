import api from "./apis";
import USMap from "./geojson_data/us-states.json";
import Florida from "./geojson_data/P000C0109.json";
import Ohio from "./geojson_data/oh_cong_adopted_2022.json";
import NorthCarolina from "./geojson_data/NC_SMmap2_Statewide.json";
import React, {useState,useRef,useEffect} from "react";
import { GeoJSON,useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map=(props)=>{
    const states=["home","Florida","Ohio","North Carolina"];
    // const dict={"home":USMap.features,"Florida":Florida.features,"Ohio":Ohio.features, "North Carolina":NorthCarolina.features};
    // const keys=Object.keys(dict);
    //const [features,setFeatures]=useState(dict[props.state]);
    // }else if(props.state==="Florida"){
    //     setFeatures(Florida.features);
    // }else if(props.state==="Ohio"){
    //     setFeatures(Ohio.features);
    // }


    const [features,setFeatures] = useState(null);

    // function updateState(state){
    //   api.getStateDistrictPlan(state).then((res)=>{
    //     setFeatures(res.data.features);
    //   })
    // }

    const map=useMap();
    let state_style = {
      weight: 0.8,
      fillColor: "lightgreen",
      color: "green",
    };
    const onEachState = (state, layer) => {
      console.log(state.properties.name);
      if (states.includes(state.properties.name)) {
        layer.setStyle({
          color: "yellow",
          fillColor: "yellow",
          fillOpacity: "0.8",
        });
      }
      layer.bindPopup(state.properties.name);
      layer.on({
        click: (event) => {
          if(states.includes(state.properties.name)){
            props.handleClick(state.properties.name);

            map.fitBounds(event.target.getBounds())
          }
        },
        mouseout: (event) => {
          if (states.includes(state.properties.name)) {
            event.target.setStyle({
              color: "yellow",
              fillColor: "yellow",
              fillOpacity: "4.0",
            });
          } else {
            event.target.setStyle({
              color: "green",
              fillColor: "lightgreen",
            });
          }
          layer.closePopup();
        },
        mouseover: (event) => {
          event.target.setStyle({
            color: "yellow",
            fillColor: "yellow",
            opacity: "2.0",
          });
  
          event.target.setStyle({
            color: "darkgreen",
            fillColor: "darkgreen",
            opacity: "2.0",
          });
  
          layer.openPopup();
        },
      });
    };
    const geoJsonLayer = useRef();
  
    useEffect(() => {
      console.log(features);
      if(features===null){
        api.getStateDistrictPlan(props.state).then((res)=>{
          geoJsonLayer.current.clearLayers().addData(res.data.features);
          setFeatures(res.data.features);
        });
      }
      else if (geoJsonLayer.current) {
        geoJsonLayer.current.clearLayers().addData(features);
      }
    }, [geoJsonLayer, features]);

    return (<GeoJSON
      ref={geoJsonLayer}
      onEachFeature={onEachState}
      style={state_style}
      data={features}
    />);
  }

  export default Map;