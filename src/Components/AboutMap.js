import React, { useContext, useEffect } from "react";
// import Map, Marker, Popup and title from leaflet
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const AboutMap = () => {
  return (
    <>
      <h1>You can find us here:</h1>
      <MapContainer center={[54.525963, 15.255119]} zoom={16}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[52.457119, 13.54023]} />
        <Popup position={[52.457119, 13.54023]}>
          <div>
            <h2>Our beautiful Office</h2>
            <p>Visit Us: Mo-Fr 10am - 6pm</p>
          </div>
        </Popup>
      </MapContainer>
    </>
  );
};

export default AboutMap;
