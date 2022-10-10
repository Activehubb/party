import React, { useEffect, useState } from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import { Skeleton } from "../widget/skeleton/Skeleton";

export const Map = () => {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  useEffect(() => {
    const navigate = navigator.geolocation.getCurrentPosition((position) => {

      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    return () => navigate();
  }, []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });

  const [map, setMap] = useState(null);

  if (!isLoaded) {
    return <Skeleton />;
  }

  const center = { lat: parseFloat(lat), lng: parseFloat(long) };
  return (
    <div>
      <div class="grid mb-8 rounded-lg border border-gray-200 w-[720px] h-[480px] shadow-sm dark:border-gray-700 ">
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          //   options={{
          //     zoomControl: false,
          //     streetViewControl: false,
          //     mapTypeControl:false,
          //     fullscreenControl:false
          //   }}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={center} />
          {/* Displaying Markers / Directions */}
        </GoogleMap>
      </div>
    </div>
  );
};
