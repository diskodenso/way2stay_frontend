// import { Icon } from "leaflet";
import React, { useState } from 'react'
// import Map, Marker, Popup and title from leaflet
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

const FlatsMap = ({flats}) => {
    const [activeFlat, setActiveFlat] = useState(null);
    
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
              {flats.map(flat =>(
                <Marker
                  key={flat.flatId}
                  position={{ flats.coordinates.lat }, {  flats.coordinates.lat  }}
                  onClick={() => { setActiveFlat(flat) }} />
              ))}
        {activeFlat && (
          <Popup
            position={{ activeFlat.coordinates.lat }, { activeFlat.coordinates.lang }}
            onClose={() => { setActiveFlat(null) }}
            //icon={houseMarker}
          >
            <div>
              <h2>{activeFlat.title}</h2>
              <p>{activeFlat.description}</p>
            </div>
          </Popup>
        )}
      </Map>
    </>
  );
};

export default FlatsMap;