import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { authContext } from "../Context/authContext";
import Loader from "./Loader";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import FlatDetailCarousel from "./FlatDetailCarousel.js";
import ToTopButton from "./ToTopButton";
import SingleFlatMap from "./SingleFlatMap";
import OwnBookingTimeSheets from "./OwnBookingTimeSheets";
// import { format, parseISO } from "date-fns";
// import timesheet und zeitdaten rausholen
// erstelle booking
// verified - wenn verified checken ob flatID existiert und wenn ja dann booking
// create a booking - check ob flatId existiert
const Booking = () => {
  const { flatId } = useParams();
  const [customerFlats, setFlatsCustomer] = useState(null);
  const { user, verified } = useContext(authContext);
  const apiUrl = process.env.REACT_APP_API_URL;
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(authContext);
  const [customerTimeSheets, setCustomerTimeSheets] = useState(null);
  useEffect(() => {
    !verified && navigate(`/login`);
    const customerBookingData = async () => {
      if (verified && flatId) {
        try {
          await axios
            .get(`${apiUrl}/flats/${flatId}`)
            .then((res) => {
              setFlatsCustomer(res.data.flat);
              setLoading(true);
              setError(false);
            })
            .catch((err) => {
              setLoading(false);
              setError(err);
              console.log(err);
            });
          await axios
            .get(`${apiUrl}/timesheets/flats/${flatId}`)
            .then((res) => {
              setCustomerTimeSheets(res.data.timeSheet);
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
        } catch (err) {
          setLoading(false);
          setError(err);
          console.log(err);
        }
      } else {
        setLoading(false);
      }
    };
    customerBookingData();
  }, [apiUrl, navigate, verified, flatId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("damn");
    // const { departure, arrival } = e.target;

    // console.log(departure);
    // await axios
    //   .post(`${apiUrl}/bookings`, {
    //     departure: departure.value,
    //     arrival: arrival.value,
    //   })
    //   .then((res) => {
    //     setLoading(false);
    //     setBooking(res.data);
    //     console.log(booking);
    //     toast.success("Booking successfully requested");
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //     setError(err);
    //     toast.error("Oh no, something went wrong with the booking");
    //   });
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
              <h3 className="font-heading text-2xl">{customerFlats.title}</h3>
              <Link
                to={`/flats/${flatId}`}
                className="border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-white"
              >
                View this flat
              </Link>
            </div>
            {/* <FlatDetailCarousel /> */}
            <div className="mt-5 w-5/6 h-60 mx-auto bg-lightgreen rounded-lg shadow-lg text-center">
              <SingleFlatMap />
            </div>
            <p className="ml-10 mt-5">
              {customerFlats.location.street}{" "}
              {customerFlats.location.housenumber}
              <br />
              {customerFlats.location.postalcode} {customerFlats.location.city}
              <br />
              {customerFlats.country}
            </p>
          </div>
        </div>

        <OwnBookingTimeSheets />
        <form onSubmit={handleSubmit}>
          <div className="flex w-5/6 gap-5 m-auto md:flex-wrap lg:flex-nowrap justify-center items-start">
            <div className="sticky w-1/3 rounded-lg p-5 my-5 shadow-lg bg-white">
              <div className="flex justify-between items-center gap-5 mb-5">
                <div className="flex gap-4">
                  <i className="text-xl text-white text-center bg-green rounded-full w-8 h-8 fa fa-user"></i>
                  <h3 className="font-heading text-2xl">{user.username}</h3>
                </div>

                <button
                  type="submit"
                  className="border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-white"
                >
                  Book now!
                </button>
              </div>

              {/* <div className="flex">
                <div className="w-1/2 m-5">
                  <h3 className="pb-3 font-heading text-xl">Arrival</h3>
                  <input
                    name="arrival"
                    className="p-2 rounded border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5"
                    type="date"
                    placeholder="YYYY-MM-DD"
                    // defaultValue={
                    //   booking && format(parseISO(booking.arrival), "yyyy-MM-dd")
                    // }
                  />
                </div>
                <div className="w-1/2 m-5">
                  <h3 className="pb-3 font-heading text-xl">Departure</h3>
                  <input
                    name="departure"
                    type="date"
                    className="p-2 rounded border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5"
                    placeholder="YYYY-MM-DD"
                    // defaultValue={
                    //   booking && format(parseISO(booking.arrival), "yyyy-MM-dd")
                    // }
                  />
                </div>
              </div> */}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Booking;
