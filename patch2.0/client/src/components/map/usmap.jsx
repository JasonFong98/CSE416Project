import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GeoJSON, useMap } from "react-leaflet";
import api from "../../api/api";

const USMap = () => {
  const geoJsonLayerRef = useRef(null);
  const map = useMap();

  const stateStyle = {
    weight: 0.8,
    opacity: 0.8,
  };

  useEffect(() => {
    const mapLayer = geoJsonLayerRef.current;
    api.getUSMap().then((res) => {
      mapLayer.addData(res.data);
    });
  }, []);

  return <GeoJSON ref={geoJsonLayerRef} style={stateStyle} />;
};

export default USMap;
