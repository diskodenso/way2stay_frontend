import React from "react";
// import Map, Marker, Popup and title from leaflet
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const AboutMap = () => {
  const mapPosition = [52.10696, 13.2726];
  const officePosition = [52.457119, 13.54023];
  return (
    <MapContainer center={mapPosition} zoom={16} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={officePosition}>
        <Popup>
          This is our beautiful office. <br /> You are welcome to come by <br />
          Monday to Friday 10am to 6pm.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default AboutMap;
