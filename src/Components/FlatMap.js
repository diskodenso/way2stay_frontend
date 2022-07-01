import { Popup } from "leaflet";
import React, { useState } from 'react'
// import Map, Marker, Popup and title from leaflet
import { Map, Marker, Popup, Tilelayer } from "react-leaflet";

const FlatMap = () => {
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
                  key={data.flats.flatId}
                  position={{ data.flats.coordinates.lang }, { data.flats.coordinates.lat }}
                  onClick={() => { setActiveFlat(flat) }} />
              ))}
        {activeFlat && (
          <Popup
            position={{ data.activeFlat.coordinates.lang }, { data.activeFlat.coordinates.lat }}
            onClose={() => { setActiveFlat(null) }}
            //icon={houseMarker}
          >
            <div>
              <h2>{data.activeFlat.title}</h2>
              <p>{data.activeFlat.description}</p>
            </div>
          </Popup>
        )}
      </Map>
    </>
  );
};

export default FlatMap;