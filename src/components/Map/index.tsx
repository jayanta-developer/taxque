import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./style.css";
import markIcon1 from "../../assets/images/locationIcon2.png";

interface MapComponentProps {
  latitude: number;
  longitude: number;
  description?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({
  latitude,
  longitude,
  description,
}) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<maplibregl.Map | null>(null);
  const markerRef = useRef<maplibregl.Marker | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapInstance.current = new maplibregl.Map({
      container: mapContainer.current,
      style:
        "https://api.jawg.io/styles/jawg-dark.json?access-token=mm8Fby5IHniYBn6LudtCtxAYTJOplhRsn77BkcfxdmL0sBZ07835gPFUi31DECmE",
      center: [longitude, latitude],
      zoom: 12,
    });

    return () => {
      mapInstance.current?.remove();
    };
  }, [latitude, longitude]);

  useEffect(() => {
    if (!mapInstance.current) return;

    markerRef.current?.remove();

    const markerElement = document.createElement("img");
    markerElement.src = markIcon1;
    markerElement.style.width = "32px";
    markerElement.style.height = "32px";

    markerRef.current = new maplibregl.Marker({ element: markerElement })
      .setLngLat([longitude, latitude])
      .setPopup(
        new maplibregl.Popup({ offset: 25 }).setText(description || "Marker")
      )
      .addTo(mapInstance.current);

    markerRef.current.getPopup().addTo(mapInstance.current);
  }, [latitude, longitude, description]);

  return (
    <div
      ref={mapContainer}
      className="map-container"
      style={{ width: "100%", height: "400px" }}
    />
  );
};

export default MapComponent;
