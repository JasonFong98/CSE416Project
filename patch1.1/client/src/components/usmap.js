import * as React from 'react';
import { geoJson } from "leaflet";
import { useEffect, useRef, useState } from "react";
import { useMap, GeoJSON } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import MuiButton from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import api from "../api/api";

const USMap = () => {
  const navigate = useNavigate();
  const map = useMap();
  const geoJsonLayer = useRef();

  const states = ["Florida", "Ohio", "North Carolina"];
  const stateBounds = new Map();

  let stateStyle = {
    weight: 0.8,
    fillColor: "lightgreen",
    color: "green",
  };

  const handleMenu = (stateCode, name, popupState) => {
    navigate(`/home/${name}`);
    api.getStateMap(stateCode).then((res) => {
      geoJsonLayer.current.addData(
        res.data.ensemble.currentDistrictPlan.features
      );
    });
    document.getElementById('state-menu').style.display="none";
    popupState.close();
    map.fitBounds(stateBounds.get(name));
  }

  useEffect(() => {
    api.getUSMap().then((res) => {
      geoJsonLayer.current.addData(res.data);
    });
  }, []);

  const onEachFeature = (state, layer) => {
    if (states.includes(state.properties.NAME)) {
      layer.setStyle({
        color: "yellow",
        fillColor: "yellow",
        fillOpacity: "0.8",
      });

      stateBounds.set(state.properties.NAME, layer.getBounds());
    }
    layer.bindPopup(state.properties.NAME, {autoPan: false});
    layer.on({
      click: (event) => {
        if(states.includes(state.properties.NAME)){}
        api.getStateMap(state.properties.STUSPS).then((res) => {
          geoJsonLayer.current.addData(
            res.data.ensemble.currentDistrictPlan.features
          );
        });
        document.getElementById('state-menu').style.display="none";
        map.fitBounds(event.target.getBounds());
        //geoJsonLayer.current.remove(layer);
        navigate(`/home/${state.properties.NAME}`,{props:geoJsonLayer});
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

  return geoJsonLayer ? (
    <div>
      <div id="state-menu">
          <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <MuiButton variant="contained" {...bindTrigger(popupState)}>
                    Select a state<ArrowDropDownIcon/>
                </MuiButton>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={() => handleMenu('FL', 'Florida', popupState)}>Florida</MenuItem>
                    <MenuItem onClick={() => handleMenu('NC', 'North Carolina', popupState)}>North Carolina</MenuItem>
                    <MenuItem onClick={() => handleMenu('OH', 'Ohio', popupState)}>Ohio</MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
        </div>
        {/* <div className="lds-dual-ring"></div> */}
      <GeoJSON
        ref={geoJsonLayer}
        style={stateStyle}
        onEachFeature={onEachFeature}
      />
    </div>
  ) : (<div></div>
  );
};

export default USMap;
