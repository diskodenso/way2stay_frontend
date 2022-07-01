// import { Icon } from "leaflet";
import React, { useState } from "react";
// import Map, Marker, Popup and title from leaflet
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const SingleFlatMap = ({ flat }) => {
  const [activePopup, setActivePopup] = useState(null);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [isActive, setIsActive] = useState(true);
  if (flat.coordinates) {
    setLat([flat.coordinates.lat]);
    setLng([flat.coordinates.lang]);
    setIsActive(true);
  } else {
    setLat(54.526);
    setLng(15.2551);
    setIsActive(false);
  }

  // --- custom icon as marker --- //
  // const houseMarker = new Icon({
  //   iconUrl: "/house.svg",
  //   iconSize: [25, 25]
  // });
  return (
    <>
      <MapContainer center={[lat, lng]} zoom={isActive ? 12 : 10}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {isActive && (
          <Marker
            key={flat.flatId}
            position={[lat, lng]}
            onClick={() => {
              setActivePopup(flat);
            }}
          />
        )}
        {activePopup && (
          <Popup
            position={(flat.coordinates.lat, flat.coordinates.lang)}
            //icon={houseMarker}
          >
            <div>
              <h2>{flat.title}</h2>
              <p>{flat.description}</p>
              <p>{`${flat.location.postalcode}, ${flat.location.city}`}</p>
            </div>
          </Popup>
        )}
      </MapContainer>
    </>
  );
};

export default SingleFlatMap;
