import axios from "axios";
import React, { useEffect, useNavigate, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { authContext } from "../Context/authContext";

const TimeSheet = () => {
  const { timesheetId } = useParams();
  const { flatId, verified } = useContext(authContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [flat, setFlat] = useState(null);
  const navigate = useNavigate(authContext);
  const [timesheet, setTimesheet] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  const [flats, setFlats] = useState(null);

  // if verified
  // useEffect(() => {
  //   !verified && navigate(`${apiUrl}/users/login`);
  //   const getTimes = async () => {
  //     if (verified && timesheetId) {
  //       try {
  //         await axios
  //           .get(`${apiUrl}/timesheets/${timesheetId}`)
  //           .then((res) => {
  //             setTimesheet(res.data);
  //             setLoading(false);
  //           })
  //           .catch((error) => {
  //             setError(err);
  //             setLoading(false);
  //             console.log(err);
  //           });
  //         await axios
  //           .get(`${apiUrl}/timesheets/flats/${flatId}`)
  //           .then((flatsRes) => {
  //             setFlats(flatsRes.data.flats);
  //             setLoading(false);
  //           })
  //           .catch((error) => {
  //             setError(error);
  //             setLoading(false);
  //             console.log(error);
  //           });
  //       } catch (error) {
  //         setError(error);
  //       }
  //     } else {
  //       setLoading(false);
  //     }
  //   };
  //   getTimes();
  // }, [apiUrl, navigate, timesheetId, verified]);

  // standard axios fetch of all timesheets
  useEffect(() => {
    axios
      .get(`${apiUrl}/timesheets`)
      .then((res) => {
        setTimesheet(res.data.timesheets);
        setLoading(false);
        setError(null);
        console.log(timesheet);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [apiUrl, navigate, verified, timesheet]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { start, end } = e.target;
      if (!timesheetId && verified) {
        await axios
          .post(`${apiUrl}/timesheets`, {
            start: start.value,
            end: end.value,
          })
          .then((res) => {
            setTimesheet(res.data);
            setLoading(false);
            console.log(timesheet)
          })
          .catch((error) => {
            setLoading(false);
            setError(error);
            console.log(error);
          });
        const updatedTimesheet = {
          start: start.value,
          end: end.value,
        };
        await axios.put(
          (`${apiUrl}/timesheets/${timesheetId}`, updatedTimesheet)
        );
      }
    } catch (error) {
      console.log(error);
    }

    if (loading) {
      return <Loader />;
    }

    if (error) {
      return (
        <h2 className="text-center my-10">Damn Daniel, an error occured!</h2>
      );
    }
    return (
      <>
        <div className="flex w-1/3 bg-white shadow-lg rounded-lg">
          <form onSubmit={handleSubmit} className="my-5 items-stretch">
            <div className="w-1/2 m-5">
              <h3 className="pb-3 font-heading font-bold text-xl">Arrival</h3>
              <input
                name="start"
                className="p-2 rounded border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5"
                type="date"
                placeholder="YYYY/MM/DD"
              />
            </div>
            <div className="w-1/2 m-5">
              <h3 className="pb-3 font-heading font-bold text-xl">Departure</h3>
              <input
                name="end"
                type="date"
                className="p-2 rounded border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5"
                placeholder="YYYY/MM/DD"
              />
            </div>
          </form>
        </div>
      </>
    );
  };
};

export default TimeSheet;
