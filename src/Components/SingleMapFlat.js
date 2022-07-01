// import { Icon } from "leaflet";
import React, { useState } from "react";
// import Map, Marker, Popup and title from leaflet
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

const SingleMapFlat = ({ flat }) => {
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
        {flat && (
          <Marker
            key={flat.flatId}
            position={(flat.coordinates.lat, flat.coordinates.lang)}
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
              <p>{(flat.location.city, flat.location.postalcode)}</p>
            </div>
          </Popup>
        )}
      </Map>
    </>
  );
};

export default SingleMapFlat;
