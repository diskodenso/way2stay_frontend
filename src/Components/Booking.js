import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { authContext } from "../Context/authContext";
import Loader from "./Loader";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import FlatDetailCarousel from "./FlatDetailCarousel.js";

// erstelle booking
// verified - wenn verified checken ob flatID existiert und wenn ja dann booking
// create a booking - check ob flatId existiert
const Booking = ({ flats }) => {
  const { flatId } = useParams();
  const [booking, setBooking] = useState(null);
  const { userId, user, verified } = useContext(authContext);
  const apiUrl = process.env.REACT_APP_API_URL;
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMatch, setIsMatch] = useState(false);
  const navigate = useNavigate(authContext);

  useEffect(() => {
    !verified && navigate(`/login`);
    const bookingData = async () => {
      if (verified) {
        try {
          await axios
            .get(`${apiUrl}/bookings/flats/${flatId}`)
            .then((res) => {
              setLoading(false);
              setError(false);
              setBooking(res.data);
              console.log(booking);
            })
            .catch((err) => {
              setLoading(false);
              setError(err);
              console.log(err);
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
    bookingData();
  }, [apiUrl, navigate, verified]);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("damn");
    const { arrival, departure } = e.target;
    await axios
      .post(`${apiUrl}/bookings`, {
        departure: departure.value,
        arrival: arrival.value,
      })
      .then((res) => {
        setLoading(false);
        setBooking(res.data);
        console.log(booking);
        toast.success("Booking successfully requested");
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
        toast.error("Oh no, something went wrong with the booking");
      });
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
            <form onSubmit={handleClick} className="my-5 items-stretch">
              <div className="flex gap-8">
                <div className="w-1/2">
                  <FlatDetailCarousel />
                  <div className="ml-10 mt-10 mr-5">
                    <h3 className="font-heading text-2xl mb-5">
                      Details about this home
                    </h3>
                    <div className="flex gap-2">
                      <input id="approved" name="approved" type={"checkbox"} />
                      <label htmlFor="cbPets">Approve Booking</label>
                    </div>
                    {/* <div>{flatOneId.description}</div> */}
                    <div className="mt-10">
                      {/* {flatOneId.location && flatOneId.location.city} */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-5 mb-10 ml-10 mr-5">
                {/* <h2 className="font-script text-4xl">{flatTwoId.title}</h2> */}
              </div>

              <div className="flex gap-8">
                <div className="w-1/2">
                  <FlatDetailCarousel />
                  <div className="ml-10 mt-10 mr-5">
                    <h3 className="font-heading text-2xl mb-5">
                      Details about the other home
                    </h3>
                    {/* <div>{flatTwoId.description}</div> */}
                    <div className="mt-10">
                      {/* {flatTwoId.location && flatTwoId.location.city} */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="items-center gap-5 mb-5">
                <button
                  name="request"
                  type="request"
                  className="border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-white"
                >
                  Request Swap
                </button>
              </div>
            </form>
            {/* <h2 className="font-script text-4xl">{flatOneId.title}</h2> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
