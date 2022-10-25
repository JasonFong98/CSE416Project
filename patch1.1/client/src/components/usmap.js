import { useEffect, useRef, useState } from "react";
import { useMap, GeoJSON } from "react-leaflet";
import { useNavigate } from "react-router-dom";

import api from "../api/api";

const USMap = () => {
  const navigate = useNavigate();
  const map = useMap();
  const geoJsonLayer = useRef();

  const states = ["Florida", "Ohio", "North Carolina"];

  let state_style = {
    weight: 0.8,
    fillColor: "lightgreen",
    color: "green",
  };

  useEffect(() => {
    api.getUSMap().then((res) => {
      geoJsonLayer.current.addData(res.data.features);
    });
  }, []);

  const onEachFeature = (state, layer) => {
    if (states.includes(state.properties.NAME)) {
      layer.setStyle({
        color: "yellow",
        fillColor: "yellow",
        fillOpacity: "0.8",
      });
    }
    layer.bindPopup(state.properties.NAME);
    layer.on({
      click: (event) => {
        map.fitBounds(event.target.getBounds());
        api.getStateMap(state.properties.NAME).then((res) => {
          geoJsonLayer.current.addData(res.data.features);
        });
        navigate(`/home/${state.properties.NAME}`);
      },
      mouseout: (event) => {
        if (states.includes(state.properties.NAME)) {
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

  console.log(geoJsonLayer.current);

  return geoJsonLayer ? (
    <GeoJSON
      ref={geoJsonLayer}
      style={state_style}
      onEachFeature={onEachFeature}
    />
  ) : (
    <div></div>
  );
};

export default USMap;
