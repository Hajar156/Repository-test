import React, { useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    // create map instance
    const map = L.map(mapRef.current).setView([31.7917, -7.0926], 6);

    // add tile layer (OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);

    // add markers or other map features
    // ...

    return () => {
      // clean up on unmount
      map.remove();
    };
  }, []);

  return <div className="Map" ref={mapRef}></div>;
}

export default Map;