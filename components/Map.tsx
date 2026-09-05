"use client";

import Map from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

export default function MapComponent() {
  return (
    <Map
      initialViewState={{
        longitude: 91.8933,
        latitude: 25.5788,
        zoom: 12,
      }}
      mapStyle="https://tiles.openfreemap.org/styles/liberty"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
