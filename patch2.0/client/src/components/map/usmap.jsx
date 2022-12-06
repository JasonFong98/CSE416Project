import * as React from 'react';
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GeoJSON, useMap } from "react-leaflet";
import api from "../../api/api";
import MuiButton from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const USMap = () => {
  const states = ["Florida", "North Carolina", "Ohio"];
  const geoJsonLayerRef = useRef(null);
  const map = useMap();
  const navigate = useNavigate();
  const stateBounds = new Map();

  const stateStyle = {
    weight: 0.8,
    opacity: 0.5,
    // color: "#EDE4E0",
  };

  const handleMenu = (stateCode, name, popupState) => {
    // api.getStateMap(stateCode).then((res) => {
    //   geoJsonLayer.current.addData(
    //     res.data.ensemble.currentDistrictPlan.features
    //   );
    // });
    document.getElementById('state-menu').style.display="none";
    popupState.close();
    map.fitBounds(stateBounds.get(name));
    navigate(`/home/${name}`, { state: { stateCode } });
  }

  const onEachFeature = (state, layer) => {
    if (states.includes(state.properties.NAME)) {
      layer.setStyle({
        color: "#00ABB3",
        fillOpacity: "0.2",
      });

      stateBounds.set(state.properties.NAME, layer.getBounds());
    }
    layer.bindPopup(state.properties.NAME, { autoPan: false });
    layer.on({
      click: (event) => {
        if (states.includes(state.properties.NAME)) {
          // api.getStateMap(state.properties.STUSPS).then((res) => {
          //   geoJsonLayerRef.current.addData(
          //     res.data.ensemble.currentDistrictPlan.features
          //   );
          // });
          const code = state.properties.STUSPS;
          console.log(event.target);
          map.fitBounds(event.target.getBounds());
          navigate(`/home/${state.properties.NAME}`, { state: { code } });
        }
        // document.getElementById("state-menu").style.display = "none";
        //geoJsonLayer.current.remove(layer);
      },
      mouseout: (event) => {
        layer.closePopup();
      },
      mouseover: (event) => {
        layer.openPopup();
      },
    });
  };

  useEffect(() => {
    const mapLayer = geoJsonLayerRef.current;
    api.getUSMap().then((res) => {
      mapLayer.addData(res.data);
    });
  }, []);

  return (
    <div>
      <div id="state-menu">
          <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <MuiButton variant="contained" {...bindTrigger(popupState)}>
                    Select a state<ArrowDropDownIcon/>
                </MuiButton>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={() => handleMenu('NC', 'North Carolina', popupState)}>North Carolina</MenuItem>
                    <MenuItem onClick={() => handleMenu('OH', 'Ohio', popupState)}>Ohio</MenuItem>
                    <MenuItem onClick={() => handleMenu('VA', 'Virginia', popupState)}>Virginia</MenuItem>
                  </Menu>
                </React.Fragment>
              )}
          </PopupState>
      </div>
      <GeoJSON
      ref={geoJsonLayerRef}
      style={stateStyle}
      onEachFeature={onEachFeature}
    />
    </div>
  );
};

export default USMap;
