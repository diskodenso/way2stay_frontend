import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authContext } from "../Context/authContext";
import SingleFlatMap from "./SingleFlatMap";
import Loader from "./Loader";

const OwnBookingTimeSheets = ({ selectedOwnFlat }) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [ownTimeSheets, setOwnTimeSheets] = useState(null);
  const { verified } = useContext(authContext);
  const navigate = useNavigate(authContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(selectedOwnFlat);
  useEffect(() => {
    !verified && navigate(`/login`);
    try {
      axios
        .get(`${apiUrl}/timesheets/flats/${selectedOwnFlat._id}`)
        .then((res) => {
          setOwnTimeSheets(res.data.timeSheet);
          console.log(res.data.timeSheet);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
          console.log(err);
          toast.error(
            "Sorry, we couldn't get the timesheets you have requested"
          );
        });
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }, [apiUrl, verified, selectedOwnFlat.id, navigate]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h3>Oh no, an error occured</h3>;
  }

  return <p>Test</p>;
};
export default OwnBookingTimeSheets;
