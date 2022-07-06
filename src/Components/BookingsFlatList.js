import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BookingItem from './BookingItem';
import Loader from './Loader';

const BookingsFlatList = ({ flat }) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const [bookings, setBookings] = useState();

    useEffect(() => {
        axios
            .get(`${apiUrl}/bookings/flats/${flat._id}`)
            .then(res => {
                setBookings(res.data.bookings)
                setLoading(false);
            })
            .catch(err => console.log(err))


    }, [apiUrl, flat._id, setBookings, setLoading]);


    if (loading) { return <Loader /> }

    if (!bookings) { return <h3>no bookings, so far</h3> }

    return (
        <>
            {console.log(bookings)}
            <div className=" rounded-lg p-5 my-5">
                <div>
                    {
                        bookings.flatOne && bookings.flatOne.map(booking => {
                            return <BookingItem key={booking._id} booking={booking} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default BookingsFlatList