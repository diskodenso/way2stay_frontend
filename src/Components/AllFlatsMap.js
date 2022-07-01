// import { Icon } from "leaflet";
import React, { useState } from "react";
// import Map, Marker, Popup and title from leaflet
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

const AllFlatsMap = ({ flats }) => {
  const [activePopup, setActivePopup] = useState(null);

  // --- custom icon as marker --- //
  // const houseMarker = new Icon({
  //   iconUrl: "/house.svg",
  //   iconSize: [25, 25]
  // });
  return (
    <>
      <Map center={[54.525963, 15.255119]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {flats.map((flat) => (
          <Marker
            key={flat.flatId}
            position={(flat.coordinates.lat, flat.coordinates.lang)}
            onClick={() => {
              setActivePopup(flat);
            }}
          />
        ))}
        {activePopup && (
          <Popup
            position={
              (activePopup.coordinates.lat, activePopup.coordinates.lang)
            }
            onClose={() => {
              setActiveFlat(null);
            }}
            //icon={houseMarker}
          >
            <div>
              <h2>{activePopup.title}</h2>
              <p>{activePopup.description}</p>
              <p>
                {activePopup.location.city}
                {activePopup.location.postalcode}
              </p>
            </div>
          </Popup>
        )}
      </Map>
    </>
  );
};

export default AllFlatsMap;
