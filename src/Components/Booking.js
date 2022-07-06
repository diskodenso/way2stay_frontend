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
    const [isOpen, setIsOpen] = useState(null);
    const { userId, user, verified } = useContext(authContext);
    const [ownFlats, setOwnFlats] = useState(null);
    const [selectedOwnFlat, setSelectedOwnFlat] = useState(null);

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
                            // console.log(res.data.timeSheet);
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
                    await axios
                        .get(`${apiUrl}/flats/users/${userId}`)
                        .then((res) => {
                            setOwnFlats(res.data.flats);
                            // console.log(res.data.flats);
                            setLoading(false);
                            setError(null);
                        })
                        .catch((err) => {
                            setLoading(false);
                            setError(err);
                            toast.error("Sorry, we couldn't find your flat");
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
    }, [apiUrl, navigate, verified, flatId, userId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("damn");
    };

    const toggling = () => {
        setIsOpen(!isOpen);
    };

    const select = (e) => {
        const { name } = e.target;
        console.log(e.target.name);
        setSelectedOwnFlat(ownFlats.find(flat => flat._id === name));
        setIsOpen(false);
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
                <div className="w-2/3 gap-5 m-auto justify-center items-start">
                    <div className="rounded-lg p-5 my-5 shadow-lg bg-white">
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
                        <div className="mt-5 mx-auto bg-lightgreen rounded-lg overflow-hidden shadow-lg text-center">
                            <SingleFlatMap flat={customerFlats} />
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

                <div className="flex flex-col w-2/3 rounded-lg p-5 my-5 shadow-lg bg-white mx-auto">
                    <div className="flex justify-between items-center">

                        <button onClick={toggling} className="mb-2">
                            <h2 className="flex gap-3 font-heading text-2xl w-[16rem] justify-between text-blue">
                                <i className="text-blue fa fa-filter"></i>
                                {selectedOwnFlat ? selectedOwnFlat.title : "sauce your flat"}
                                <i className="text-lg fa fa-caret-up"></i>
                            </h2>
                        </button>
                        {isOpen && (
                            <div className="bg-lightblue absolute rounded overflow-hidden ml-9 w-[14rem]">
                                <ul>
                                    {ownFlats &&
                                        ownFlats.map((flat) => {
                                            return (
                                                <li
                                                    key={flat._id}
                                                    className="mr-2 pl-2 my-1 w-full rounded hover:bg-blue hover:text-white"
                                                >
                                                    <button name={flat._id} onClick={select}>
                                                        {flat.title}
                                                    </button>
                                                </li>
                                            );
                                        })}
                                </ul>
                            </div>
                        )}
                        <div className="flex justify-between mb-5">
                            <Link
                                to={`/flats/${flatId}`}
                                className="border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-white"
                            >
                                View this flat
                            </Link>
                        </div>
                    </div>
                    <div>
                        
                        <div>
                            {/* <FlatDetailCarousel /> */}
                            <div className="mt-5 mx-auto bg-lightgreen rounded-lg shadow-lg text-center overflow-hidden">
                                {console.log(selectedOwnFlat)}
                                {selectedOwnFlat && <SingleFlatMap flat={selectedOwnFlat} />}
                            </div>
                            {(selectedOwnFlat && selectedOwnFlat.location) && (
                                <p className="ml-10 mt-5">
                                    {selectedOwnFlat.location.street}{" "}
                                    {selectedOwnFlat.location.housenumber}
                                    <br />
                                    {selectedOwnFlat.location.postalcode} {selectedOwnFlat.location.city}
                                    <br />
                                    {selectedOwnFlat.country}
                                </p>
                            )}
                        </div>
                    </div>
                    {selectedOwnFlat && <OwnBookingTimeSheets flat={selectedOwnFlat} />}
                </div>
                {/* <form onSubmit={handleSubmit}>
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
            </div>
          </div>
        </form> */}
            </div>
        </>
    );
};

export default Booking;
