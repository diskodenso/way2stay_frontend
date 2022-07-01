import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { authContext } from '../Context/authContext';
import Loader from './Loader';

export const FlatsListItem = ({ flat }) => {
    const { userId } = useContext(authContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const apiUrl = process.env.REACT_APP_API_URL;
    const owner = (userId === flat.userId);

    useEffect(() => {
        if (userId) {

            axios
                .get(`${apiUrl}/users/${userId}`)
                .then(res => {
                    console.log(res.data.favorites);
                    setIsFavorite(res.data.favorites.find(fav => { return fav === flat._id }));
                    setLoading(false);
                })
                .catch(err => {
                    setError(err);
                    setLoading(false);
                });
        } else {
            setLoading(false);
            setError(null);
        }
    }, [apiUrl, flat._id, userId]);

    // console.log(flat);
    // console.log(owner);

    if (loading) { return <Loader />; }

    if (error) {
        return (<h2 className='text-center my-10'>Bugger, an error occured!</h2>);
    }

    return (
        <div className='border rounded-lg w-1/3 bg-gray text-white'>
            {(owner && userId) && (
                <div className='flex justify-end p-1'>
                    <Link to={`/flats/editor/${flat._id}`}>
                        <i className='fa fa-pen' />
                    </Link>
                </div>
            )}
            {(!owner && userId) && (
                <div className='flex justify-end p-1'>
                    <i className={`fa fa-heart ${(isFavorite) ? 'text-red' : 'text-green'}`} />
                </div>
            )}
            <div className='p-5'>
                <div className='text-center'>
                    {flat.title}
                </div>
                <hr />
                <div>
                    {flat.description}
                </div>
            </div>
        </div>
    )
}
