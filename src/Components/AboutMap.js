import React from "react";
// import Map, Marker, Popup and title from leaflet
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const AboutMap = () => {
  const position = [52.10696, 13.2726];

  render(
    <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          This is our beautiful office. <br /> Come by Monday to Friday 10am to
          6pm.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default AboutMap;
