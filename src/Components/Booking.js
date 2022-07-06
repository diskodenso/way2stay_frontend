import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { authContext } from "../Context/authContext";
import Loader from "./Loader";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ToTopButton from "./ToTopButton";
import SingleFlatMap from "./SingleFlatMap";
import BookingTS from "./BookingTS";
// import { format, parseISO } from "date-fns";
// import timesheet und zeitdaten rausholen
// erstelle booking
// verified - wenn verified checken ob flatID existiert und wenn ja dann booking
// create a booking - check ob flatId existiert
const Booking = () => {
    const { flatId } = useParams();
    const { userId, verified } = useContext(authContext);
    const [customerFlat, setCustomerFlat] = useState(null);
    const [isOpen, setIsOpen] = useState(null);
    const [ownFlats, setOwnFlats] = useState(null);
    const [selectedOwnFlat, setSelectedOwnFlat] = useState(null);

    const apiUrl = process.env.REACT_APP_API_URL;
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(authContext);

    useEffect(() => {
        !verified && navigate(`/login`);
        const customerBookingData = async () => {
            if (verified && flatId) {
                try {
                    await axios
                        .get(`${apiUrl}/flats/${flatId}`)
                        .then((res) => {
                            setCustomerFlat(res.data.flat);
                            setLoading(true);
                            setError(false);
                        })
                        .catch((err) => {
                            setLoading(false);
                            setError(err);
                            console.log(err);
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
            <div className="w-2/3 gap-5 m-auto justify-center items-start">
                <div className="rounded-lg p-5 my-5 shadow-lg bg-white">
                    <div className="flex justify-between mb-5">
                        <h3 className="font-heading text-2xl">{customerFlat.title}</h3>
                        <Link
                            to={`/flats/${flatId}`}
                            className="border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-white"
                        >
                            View this flat
                        </Link>
                    </div>
                    {/* <FlatDetailCarousel /> */}
                    <div className="mt-5 mx-auto bg-lightgreen rounded-lg overflow-hidden shadow-lg text-center">
                        <SingleFlatMap flat={customerFlat} />
                    </div>
                    <p className="ml-10 mt-5">
                        {customerFlat.location.street}{" "}
                        {customerFlat.location.housenumber}
                        <br />
                        {customerFlat.location.postalcode} {customerFlat.location.city}
                        <br />
                        {customerFlat.country}
                    </p>
                    <BookingTS flat={customerFlat} />
                </div>
                <div className="rounded-lg p-5 my-5 shadow-lg bg-white">
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
                    {selectedOwnFlat && <BookingTS flat={selectedOwnFlat} />}
                </div>
            </div>
        </>
    );
};

export default Booking;