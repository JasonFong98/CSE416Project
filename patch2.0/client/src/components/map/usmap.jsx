import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GeoJSON, useMap } from "react-leaflet";
import api from "../../api/api";

const USMap = () => {
  const states = ["Florida", "North Carolina", "Ohio"];
  const geoJsonLayerRef = useRef(null);
  const map = useMap();
  const navigate = useNavigate();

  const stateStyle = {
    weight: 0.8,
    opacity: 0.5,
    // color: "#EDE4E0",
  };

  const onEachFeature = (state, layer) => {
    if (states.includes(state.properties.NAME)) {
      layer.setStyle({
        color: "#00ABB3",
        fillOpacity: "0.2",
      });

      // map.set(state.properties.NAME, layer.getBounds());
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
    <GeoJSON
      ref={geoJsonLayerRef}
      style={stateStyle}
      onEachFeature={onEachFeature}
    />
  );
};

export default USMap;
