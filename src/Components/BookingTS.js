import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authContext } from "../Context/authContext";
import Loader from "./Loader";
import ToTopButton from "./ToTopButton";
import { format, parseISO } from "date-fns";

const OwnBookingTimeSheets = ({ flat }) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [timeSheets, setTimeSheets] = useState(null);
    const [selectedTimeSheet, setSelectedTimeSheet] = useState(null);
    const [isOpen, setIsOpen] = useState(null);
    const { verified } = useContext(authContext);
    const navigate = useNavigate(authContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        !verified && navigate(`/login`);
        try {
            axios
                .get(`${apiUrl}/timesheets/flats/${flat._id}`)
                .then((res) => {
                    setTimeSheets(res.data.timeSheet);
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

    const toggling = () => {
        setIsOpen(!isOpen);
    };

    const select = (e) => {
        const { name } = e.target;
        console.log(e.target.name);
        setSelectedTimeSheet(timeSheets.find(timeSheet => timeSheet._id === name));
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
            <div className=" gap-5 m-auto justify-center items-start">
                <button onClick={toggling} className="mb-2 w-full">
                    <div className="flex gap-3 my-4 items-center">
                        <i className=" fa fa-calendar" />
                        <p>{selectedTimeSheet ? `${format(parseISO(selectedTimeSheet.start), 'yyyy-MM-dd')} - ${format(parseISO(selectedTimeSheet.end), 'yyyy-MM-dd')}` : "choose your desired time range"}</p>
                        <i className="text-lg fa fa-caret-up" />
                    </div>
                </button>
                {isOpen && (
                    <div className="bg-lightblue absolute rounded overflow-hidden ml-9 w-[14rem]">
                        <ul>
                            {timeSheets &&
                                timeSheets.map(ts => {
                                    return (
                                        <li
                                            key={ts._id}
                                            className="mr-2 pl-2 my-1 w-full rounded hover:bg-blue hover:text-white"
                                        >
                                            <button name={ts._id} onClick={select}>
                                                {`${format(parseISO(ts.start), 'yyyy-MM-dd')} - ${format(parseISO(ts.end), 'yyyy-MM-dd')}`}
                                            </button>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default OwnBookingTimeSheets;
