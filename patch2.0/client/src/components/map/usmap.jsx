import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GeoJSON, LayersControl, useMap } from "react-leaflet";
import api from "../../api/api";

const USMap = () => {
  const layerControlRef = useRef(null);
  const geoJsonLayerRef = useRef(null);
  const map = useMap();
  useEffect(() => {
    const layer = geoJsonLayerRef.current;
    const layerControl = layerControlRef.current;
    layerControl.remove();
    api.getUSMap().then((res) => {
      layer.addData(res.data);
    });
  }, []);
  return (
    <LayersControl ref={layerControlRef}>
      <GeoJSON ref={geoJsonLayerRef} />
    </LayersControl>
  );
};

export default USMap;
