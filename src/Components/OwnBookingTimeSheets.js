import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authContext } from "../Context/authContext";
import SingleFlatMap from "./SingleFlatMap";
import Loader from "./Loader";
import TimeSheet from "./TimeSheet";
import ToTopButton from "./ToTopButton";

const OwnBookingTimeSheets = ({ flat }) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [ownTimeSheets, setOwnTimeSheets] = useState(null);
  const { verified } = useContext(authContext);
  const navigate = useNavigate(authContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(flat);
  useEffect(() => {
    !verified && navigate(`/login`);
    try {
      axios
        .get(`${apiUrl}/timesheets/flats/${flat._id}`)
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
  }, [apiUrl, verified, navigate, flat._id]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h3>Oh no, an error occured</h3>;
  }

  return (
    <>
      <ToTopButton />
      <div className='bg-[url("https://i.ibb.co/qJFwrYN/Landingpage-BG1.png")] w-full bg-no-repeat min-h-[73vh] mt-20'>
        <div className="w-2/3 gap-5 m-auto justify-center items-start">
          {ownTimeSheets &&
            ownTimeSheets.map((ts) => {
              return <TimeSheet timeSheet={ts} flat={flat} isOwner={false} />;
            })}
        </div>
      </div>
    </>
  );
};

export default OwnBookingTimeSheets;
