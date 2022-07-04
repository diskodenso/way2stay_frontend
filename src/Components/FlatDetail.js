import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { authContext } from "../Context/authContext.js";
import SingleFlatMap from "./SingleFlatMap";
import Loader from "./Loader";

const FlatDetail = () => {
  const { flatId } = useParams();
  const navigate = useNavigate();
  const { imgPlaceholder } = useContext(authContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [flat, setFlat] = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL;

  const handleClick = (e) => {
    navigate(`/bookings/${flatId}`);
  };
  useEffect(() => {
    if (flatId) {
      axios
        .get(`${apiUrl}/flats/${flatId}`)
        .then((res) => {
          setFlat(res.data.flat);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
          console.log(err);
        });
    } else {
      setLoading(false);
    }
  }, [apiUrl, flatId]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <h2 className="text-center my-10">Damn Daniel, an error occured!</h2>
    );
  }

  if (!loading && !error && flat) {
    return (
      <>
        <div className=' bg-[url("https://i.ibb.co/qJFwrYN/Landingpage-BG1.png")] w-full bg-no-repeat min-h-[73vh] mt-20'>
          <div className="w-2/3 border rounded-lg p-5 shadow-lg border-[#b9b9b9] bg-white mx-auto">
            <div className="items-center gap-5 mb-5">
              <picture className="rounded-full w-[50px] h-[50px] bg-green"></picture>
            </div>
            <div className="flex justify-between items-center mt-8">
              <h2>Details zur Wohnung:</h2>
              <div className="flatDetailsContainer">
                <h3>{flat.title}</h3>
                <img src={imgPlaceholder} alt={"placeholder"} />
                <p>{flat.description}</p>
                <p>{flat.location && flat.location.city}</p>
                <SingleFlatMap flat={flat} />
                <button
                  onClick={handleClick}
                  name="onClick"
                  type="onClick"
                  className="border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-white"
                >
                  Buchen
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default FlatDetail;
