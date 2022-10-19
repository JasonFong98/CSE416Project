import api from "./apis";
import React, {useState,useRef,useEffect} from "react";
import { GeoJSON,useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map=(props)=>{
    const states=["home","Florida","Ohio","North Carolina"];
    const [features,setFeatures] = useState(null);
    const map=useMap();
    const geoJsonLayer = useRef();
  
    useEffect(() => {
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

    let state_style = {
      weight: 0.8,
      fillColor: "lightgreen",
      color: "green",
    };

    const onEachState = (state, layer) => {
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

    return (<GeoJSON
      ref={geoJsonLayer}
      onEachFeature={onEachState}
      style={state_style}
      data={features}
    />);
  }

  export default Map;