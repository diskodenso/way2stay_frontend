import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authContext } from "../Context/authContext";
import SingleFlatMap from "./SingleFlatMap";
import Loader from "./Loader";

const OwnBookingTimeSheets = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [ownTimeSheets, setOwnTimeSheets] = useState(null);
  const { userId, verified } = useContext(authContext);
  const navigate = useNavigate(authContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ownFlats, setOwnFlats] = useState(null);

  useEffect(() => {
    !verified && navigate(`/login`);
    const ownBookingData = async () => {
      if (verified && userId) {
        try {
          await axios
            .get(`${apiUrl}/flats/users/${userId}`)
            .then((res) => {
              setOwnFlats(res.data.flat);
              console.log(res.data.flat);
              setLoading(false);
              setError(null);
            })
            .catch((err) => {
              setLoading(false);
              setError(err);
              toast.error("Sorry, we couldn't find your flat");
            });
          await axios
            .get(`${apiUrl}/timesheets/flats/${ownFlats._id}`)
            .then((res) => {
              setOwnTimeSheets(res.data.timeSheet);
              console.log(res.data.timeSheet);
              setLoading(false);
              setError(null);
            })
            .catch((err) => {
              setLoading(false);
              setError(err);
              toast.error("Sorry, we could not get your timesheets");
            });
        } catch (error) {
          setLoading(false);
          setError(error);
          console.log(error);
        }
      }
    };
    ownBookingData();
  }, [verified, userId, navigate, ownFlats._id, apiUrl]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h3>Oh no, an error occured</h3>;
  }
  return (
    <>
      <div className="flex w-5/6 gap-5 m-auto md:flex-wrap lg:flex-nowrap justify-center items-start">
        <div className="sticky w-1/3 rounded-lg p-5 my-5 shadow-lg bg-white">
          <h3 className="font-heading text-2xl mb-5">{ownFlats.title}</h3>
          {/* <FlatDetailCarousel /> */}
          <div className="mt-5 w-5/6 h-60 mx-auto bg-lightgreen rounded-lg shadow-lg text-center">
            <SingleFlatMap />
          </div>
          <div className="flex justify-between items-end mt-5">
            <p className="ml-10">
              {ownFlats.location.street} {ownFlats.location.housenumber} <br />
              {ownFlats.location.postalcode} {ownFlats.location.city} <br />
              {ownFlats.location.country}
            </p>
            <Link
              to={`/flats/${ownFlats.id}`}
              className="border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-white"
            >
              View this flat
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnBookingTimeSheets;
