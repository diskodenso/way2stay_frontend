import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authContext } from "../Context/authContext"
import Loader from "./Loader";
import TimeSheet from "./TimeSheet";

const TimeSheetListContainer = ({ flat }) => {
    const { verified, userId } = useContext(authContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [timeSheets, setTimeSheets] = useState(null);
    const [isOwner, setIsOwner] = useState(false);

    const navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        if (flat) {
            axios
                .get(`${apiUrl}/timesheets/flats/${flat._id}`)
                .then(res => {
                    setTimeSheets(res.data.timeSheet);
                    setLoading(false);
                    setError(null);
                })
                .catch(err => {
                    console.log(err);
                    toast.error('Der Timesheet-Editor konnte nicht geladen werden!')
                });
            (userId === flat.userId) && setIsOwner(true);
        } else {
            setLoading(false);
            toast.error('Der Timesheet-Editor benötigt eine Wohnung!');
            setError({ message: 'Der Timesheet-Editor benötigt eine Wohnung!' });
        }
    }, [apiUrl, flat, navigate, userId, verified])

    if (error) { return <h2>Bugger, an error occured!</h2> };
    if (loading) { return (<Loader />) };

    if (flat) {
        return (
            <>
                {
                    timeSheets.map(timeSheet => {
                        return <TimeSheet key={timeSheet._id} timeSheet={timeSheet} flat={flat} isOwner={isOwner} />
                    })
                }
                <TimeSheet timesheet={null} flat={flat} isOwner={isOwner} />
            </>
        )
    }
}

export default TimeSheetListContainer