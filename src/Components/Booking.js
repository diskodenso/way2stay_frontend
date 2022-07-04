import axios from "axios";
import { useState, useContext, useEffect, useNavigate } from "react";
import { authContext } from "../Context/authContext";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// erstelle booking
// verified - wenn verified checken ob flatID existiert und wenn ja dann booking
// create a booking - check ob flatId existiert
const Booking = () => {
  const { flatId } = useParams();
  const [booking, setBooking] = useState(null);
  const { userId, verified } = useContext(authContext);
  const apiUrl = process.env.REACT_APP_API_URL;
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMatch, setIsMatch] = useState(false);
  const navigate = useNavigate(authContext);

  useEffect(() => {
    !verified && navigate(`${apiUrl}/users/login`);
    axios
      .get(`${apiUrl}/bookings/flat/${flatId}`)
      .then((res) => {
        setBooking(res.data);
        setLoading(false);
        setError(null);
        console.log(booking);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
        console.log(err);
      });
  }, [apiUrl, verified, navigate]);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("I dont know where to lead after a booking was successfully");
  };

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h3>Oh no, an error occured</h3>;
  }
  return (
    <>
      <div className=' bg-[url("https://i.ibb.co/qJFwrYN/Landingpage-BG1.png")] w-full bg-no-repeat min-h-[73vh] mt-20 pb-20'>
        <div className="w-2/3 border rounded-lg p-5 shadow-lg border-[#b9b9b9] bg-white mx-auto">
          <div className="flex justify-between mt-5 mb-10 ml-10 mr-5">
            <h2 className="font-script text-4xl">{flat.title}</h2>
          </div>
          <div className="flex gap-8">
            <div className="w-1/2">
              <FlatDetailCarousel />
              <div className="ml-10 mt-10 mr-5">
                <h3 className="font-heading text-2xl mb-5">About your home</h3>
                <div>flatOneId.description</div>
                <div className="mt-10">
                  flatOneId.location && flatOne.location.city
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="w-1/2">
              <FlatDetailCarousel />
              <div className="ml-10 mt-10 mr-5">
                <h3 className="font-heading text-2xl mb-5">About this home</h3>
                <div>flatTwoId.description</div>
                <div className="mt-10">
                  flatTwoId.location && flatTwoId.location.city
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 mb-5">
            <button
              onClick={handleClick}
              name="request"
              type="request"
              className="border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-white"
            >
              Request Booking
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
