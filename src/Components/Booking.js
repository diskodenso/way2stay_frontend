import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { authContext } from "../Context/authContext";
import Loader from "./Loader";
import { Link, useNavigate } from "react-router-dom";
import FlatDetailCarousel from "./FlatDetailCarousel";
import SingleFlatMap from "./SingleFlatMap";
import ToTopButton from "./ToTopButton";

// erstelle booking
// verified - wenn verified checken ob flatID existiert und wenn ja dann booking
// create a booking - check ob flatId existiert
const Booking = ({ flat }) => {
  const [bookings, setBookings] = useState(null);
  const { userId, user, verified } = useContext(authContext);
  const apiUrl = process.env.REACT_APP_API_URL;
  const [error, isError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMatch, setIsMatch] = useState(false);
  const navigate = useNavigate(authContext);

  useEffect(() => {
    !verified && navigate(`{apiUrl}`);
    setLoading(false);
  }, [verified]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

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
        <div className="flex w-5/6 gap-5 m-auto md:flex-wrap lg:flex-nowrap justify-center items-start">
          <div className="sticky w-1/3 rounded-lg p-5 my-5 shadow-lg bg-white">
            <div className="flex justify-between mb-5">
              <h3 className="font-heading text-2xl">
                The home you want to share
              </h3>
              <Link
                to={"/flats/62bb072dd491a11505c2148f"}
                className="border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-white"
              >
                View this flat
              </Link>
            </div>
            <FlatDetailCarousel />
            <div className="mt-5 w-5/6 h-60 mx-auto bg-lightgreen rounded-lg shadow-lg text-center">
              Map
            </div>
            <p className="ml-10 mt-5">
              Straßenname 12 <br />
              12345 Keinort <br />
              Germany
            </p>
          </div>
        </div>

        <div className="flex w-5/6 gap-5 m-auto md:flex-wrap lg:flex-nowrap justify-center items-start">
          <div className="sticky w-1/3 rounded-lg p-5 my-5 shadow-lg bg-white">
            <h3 className="font-heading text-2xl mb-5">
              The home you want to book
            </h3>
            <FlatDetailCarousel />
            <div className="mt-5 w-5/6 h-60 mx-auto bg-lightgreen rounded-lg shadow-lg text-center">
              Map
            </div>
            <div className="flex justify-between items-end mt-5">
              <p className="ml-10">
                Straßenname 12 <br />
                12345 Keinort <br />
                Germany
              </p>
              <Link
                to={"/flats/62bb072dd491a11505c2148f"}
                className="border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-white"
              >
                View this flat
              </Link>
            </div>
          </div>
        </div>

        <div className="flex w-5/6 gap-5 m-auto md:flex-wrap lg:flex-nowrap justify-center items-start">
          <div className="sticky w-1/3 rounded-lg p-5 my-5 shadow-lg bg-white">
            <div className="flex justify-between items-center gap-5 mb-5">
              <div className="flex gap-4">
                <i className="text-xl text-white text-center bg-green rounded-full w-8 h-8 fa fa-user"></i>
                <h3 className="font-heading text-2xl">{user.username}</h3>
              </div>

              <Link
                to={"/flats/62bb072dd491a11505c2148f"}
                className="border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-white"
              >
                Book now!
              </Link>
            </div>

            <div className="flex">
              <div className="w-1/2 m-5">
                <h3 className="pb-3 font-heading text-xl">Arrival</h3>
                <input
                  name="start"
                  className="p-2 rounded border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5"
                  type="date"
                  placeholder="YYYY/MM/DD"
                />
              </div>
              <div className="w-1/2 m-5">
                <h3 className="pb-3 font-heading text-xl">
                  Departure
                </h3>
                <input
                  name="end"
                  type="date"
                  className="p-2 rounded border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5"
                  placeholder="YYYY/MM/DD"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
