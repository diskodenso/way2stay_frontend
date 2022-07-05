// import { Icon } from "leaflet";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import Map, Marker, Popup and title from leaflet
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Loader from "./Loader";

const SingleFlatMap = ({ flat }) => {
    const [loading, setLoading] = useState(true);
    const [activePopup, setActivePopup] = useState(null);
    const [lat, setLat] = useState(54.526);
    const [lng, setLng] = useState(15.255);
    const [isStandard, setIsStandard] = useState(true);

    useEffect(() => {
        if (flat && flat.location) {
            axios
                .get(`${process.env.REACT_APP_GEOAPI}${flat.location.housenumber}%20${flat.location.street}%2C%20${flat.location.city}%20W1H%201LJ%2C%20${flat.location.country}&apiKey=${process.env.REACT_APP_GEOAPI_KEY}`)
                .then(res => {
                    setLng(res.data.features[0].geometry.coordinates[0]);
                    setLat(res.data.features[0].geometry.coordinates[1]);
                    setIsStandard(false);
                    setLoading(false);
                })
                .catch(error => {
                    console.log('error', error)
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
        // setLoading(false);
    }, [flat]);

    // --- custom icon as marker --- //
    // const houseMarker = new Icon({
    //   iconUrl: "/house.svg",
    //   iconSize: [25, 25]
    // });

    if (loading) { return <Loader /> };

    return (
        <>
            <MapContainer center={[lat, lng]} zoom={!isStandard ? 14 : 8} className='z-30'>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {!isStandard && (
                    <>
                        <Marker
                            key={`marker_${flat.flatId}`}
                            position={[lat, lng]}
                            onClick={() => { setActivePopup(flat); }}
                        />
                        {activePopup && (
                            <Popup
                                position={[lat, lng]}
                            >
                                <div>
                                    <h2>{flat.title}</h2>
                                    <p>{flat.description}</p>
                                    <p>{`${flat.location.postalcode}, ${flat.location.city}`}</p>
                                </div>
                            </Popup>
                        )}
                    </>
                )}
            </MapContainer>
        </>
    );
};

export default SingleFlatMap;
