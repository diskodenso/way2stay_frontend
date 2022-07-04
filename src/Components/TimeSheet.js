import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";
import { authContext } from "../Context/authContext";
import { toast } from "react-toastify";
import FlatsEditor from "./FlatsEditor";

const TimeSheet = () => {
  const navigate = useNavigate(authContext);
  const { timesheetId } = useParams();
  const { flatId, verified } = useContext(authContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [flats, setFlat] = useState(null);
  const [timesheet, setTimesheet] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  // standard axios fetch of all timesheets
  useEffect(() => {
    !verified && navigate(`${apiUrl}/users/login`);
    axios
      .get(`${apiUrl}/timesheets`)
      .then((res) => {
        setTimesheet(res.data.timesheet);
        setLoading(false);
        setError(null);
        console.log(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
        toast.error("Oh no, an error occured");
      });
  }, [apiUrl, navigate, verified]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { start, end } = e.target;
      if (flatId) {
        await axios
          .post(`${apiUrl}/timesheets`, {
            start: start.value,
            end: end.value,
          })
          .then((res) => {
            setTimesheet(res.data.timesheet);
            setLoading(false);
            toast.success("Buchungszeitraum wurde erfolgreich erstellt!");
          })
          .catch((err) => {
            setLoading(false);
            setError(err);
            console.log(err);
            toast.error(
              "Oh, something went wrong with creating the booking period!"
            );
          });
      }
      const updatedTimeSheet = {
        start: start.value,
        end: end.value,
      };
      if (timesheet.flatId === flatId) {
        await axios
          .put(`${apiUrl}/timesheets/${timesheetId}`, updatedTimeSheet)
          .then((res) => {
            setTimesheet(res.data.timesheet);
            setLoading(false);
            toast.success("Booking successfully updated!");
          })
          .catch((err) => {
            setLoading(false);
            setError(err);
            console.log(err);
            toast.error(
              "Oh, something went wrong with changing the booking period!"
            );
          });
      }
    } catch (err) {
      console.log(err);
    }
    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <h2 className="text-center my-10">Damn, an error occured!</h2>;
    }
    return (
      <>
        <div className=' bg-[url("https://i.ibb.co/qJFwrYN/Landingpage-BG1.png")] w-full bg-no-repeat min-h-[73vh] mt-20 pb-20'>
          <div className="w-2/3 border rounded-lg p-5 shadow-lg border-[#b9b9b9] bg-white mx-auto">
            <div className="flex w-1/3 bg-white shadow-lg rounded-lg">
              <form onSubmit={handleSubmit} className="my-5 items-stretch">
                <div className="w-1/2 m-5">
                  <h3 className="pb-3 font-heading font-bold text-xl">
                    Arrival
                  </h3>
                  <input
                    className="p-2 rounded border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5"
                    name="start"
                    type="date"
                    placeholder="YYYY-MM-DD"
                  />
                </div>
                <div className="w-1/2 m-5">
                  <h3 className="pb-3 font-heading font-bold text-xl">
                    Departure
                  </h3>
                  <input
                    className="p-2 rounded border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5"
                    name="end"
                    type="date"
                    placeholder="YYYY-MM-DD"
                  />
                </div>
                <div>
                  <button
                    name="save"
                    type="save"
                    className="border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-white"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  };
};

export default TimeSheet;
