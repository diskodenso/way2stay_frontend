import React, { useContext } from "react";
// import Map, Marker, Popup and title from leaflet
import { Map, Marker, Popup, Tilelayer } from "react-leaflet";

const AboutMap = () => {
  return (
    <>
      <h1>You can find us here:</h1>
      <Map center={[54.525963, 15.255119]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[54.525963, 15.255119]}></Marker>
      </Map>
    </>
  );
};

export default AboutMap;
