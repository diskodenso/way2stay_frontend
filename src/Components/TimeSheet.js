import axios from "axios";
import { useEffect, useState, } from "react";
import Loader from "./Loader";
import { toast } from "react-toastify";
import { format, parseISO } from "date-fns";

const TimeSheet = ({ timeSheet, flat, isOwner }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiUrl = process.env.REACT_APP_API_URL;

    // standard axios fetch of all timesheets
    useEffect(() => {
        setLoading(false)
    }, [timeSheet]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { start, end, available } = e.target;
            if (!timeSheet) {
                await axios
                    .post(`${apiUrl}/timesheets`, {
                        flatId: flat._id,
                        start: start.value,
                        end: end.value,
                        available: true
                    })
                    .then((res) => {
                        toast.success("Verfügbarkeit wurde erfolgreich erstellt!");
                    })
                    .catch((err) => {
                        setError(err);
                        console.log(err);
                        toast.error("Verfügbarkeit konnte nicht erfolgreich erstellt werden!");
                    });
            } else {
                const updatedTimeSheet = {
                    start: start.value,
                    end: end.value,
                    available: available.checked
                };
                await axios
                    .put(`${apiUrl}/timesheets/${timeSheet._id}`, updatedTimeSheet)
                    .then((res) => {
                        toast.success("Buchungszeitraum wurde erfolgreich geändert!");
                    })
                    .catch((err) => {
                        setError(err);
                        console.log(err);
                        toast.error("Buchungszeitraum konnte nicht erfolgreich geändert werden!");
                    });
            }
        } catch (err) {
            console.log(err);
        }
    };

    if (loading) { return <Loader />; }

    if (error) { return (<h2 className="text-center my-10">Damn Daniel, an error occured!</h2>); }

    return (
        <>
            <div className="bg-white">
                <form onSubmit={handleSubmit} className="flex my-5 justify-between items-center gap-3">
                    <div className="w-1/2 m-5">
                        <label htmlFor="start" className="pb-3 font-heading font-bold text-xl">Arrival</label>
                        <input
                            name="start"
                            className="p-2 rounded border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5"
                            type="date"
                            disabled={!isOwner}
                            defaultValue={timeSheet && format(parseISO(timeSheet.start), 'yyyy-MM-dd')}
                        />
                    </div>
                    <div className="w-1/2 m-5">
                        <label htmlFor="end" className="pb-3 font-heading font-bold text-xl">Departure</label>
                        <input
                            name="end"
                            type="date"
                            className="p-2 rounded border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5"
                            disabled={!isOwner}
                            defaultValue={timeSheet && format(parseISO(timeSheet.end), 'yyyy-MM-dd')}
                        />
                    </div>

                    <div className="flex gap-2 justify-between">
                        <input
                            name="available"
                            type={'checkbox'}
                            disabled={!isOwner}
                            defaultChecked={timeSheet && timeSheet.available}
                        />
                        <label
                            htmlFor="available"
                        >
                            Verfügbar
                        </label>

                    </div>
                    <div className="flex flex-col items-center justify-between" hidden={!isOwner}>
                        <button
                            name="submit"
                            type="submit"
                            className='border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-white'
                        >
                            {!timeSheet ? <i className="fas fa-plus"/> : <i className="fa fa-pen"/>}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default TimeSheet;
