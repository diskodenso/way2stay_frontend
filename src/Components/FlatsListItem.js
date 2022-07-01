import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { authContext } from '../Context/authContext';
import Loader from './Loader';

export const FlatsListItem = ({ flat }) => {
    const { userId, user, imgPlaceholder } = useContext(authContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [favoriteList, setFavoriteList] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const [rating, setRating] = useState(0);
    const apiUrl = process.env.REACT_APP_API_URL;
    const owner = (userId === flat.userId);
    const [shortDescription, setShortDescription] = useState(null);

    useEffect(() => {
        console.log(user);
        if (user) {
            setFavoriteList(user.favorites);
            setIsFavorite(user.favorites.find(fav => { return fav === flat._id }));
            setLoading(false);
        } else {
            setLoading(false);
            setError(null);
        }

        flat.description.length >= 200 ? setShortDescription(`${flat.description.substring(0, 199)} ...`) : (setShortDescription(flat.description));
    }, [apiUrl, flat._id, userId, favoriteList, user, flat.description]);

    // console.log(flat);
    // console.log(owner);

    const handleToggleFavorite = async (e) => {
        setIsFavorite(!isFavorite);
        const tempFav = favoriteList;
        const favIndex = tempFav.findIndex(fav => (fav === flat._id));
        console.log(favIndex);
        if (favIndex < 0) {
            tempFav.push(flat._id)
            toast.success(`Die Wohnung ${flat.title} wurde erfolgreich zu deinen Favoriten hinzugefügt`)
        } else {
            toast.success(`Die Wohnung ${flat.title} wurde erfolgreich von deinen Favoriten entfernt`)
            setFavoriteList(favoriteList.splice(favIndex, 1))
        }
        axios
            .put(`${apiUrl}/users/${userId}`, {
                userId: userId,
                favorites: favoriteList
            })
            .then(res => {
                setError(null);
            })
            .catch(err => {
                setError(err);
            });
    }

    if (loading) { return <Loader />; }

    if (error) {
        return (<h2 className='text-center my-10'>Bugger, an error occured!</h2>);
    }

    return (
        <>
            <ToastContainer />
            <div className='overflow-hidden shadow-lg rounded-lg w-1/3 h-[30rem] bg-white flex flex-col justify-between'>
                <div>

                    {(owner && userId) && (
                        <div className='absolute flex justify-end p-1'>
                            <Link to={`/flats/editor/${flat._id}`}>
                                <i className='fa fa-pen' />
                            </Link>
                        </div>
                    )}
                    {(!owner && userId) && (
                        <div className='absolute flex justify-end p-1'>
                            <button type='button' onClick={handleToggleFavorite} className='p-3'>
                                <i name={'favicon'} value={flat._id} className={`fa fa-heart text-4xl ${(isFavorite) ? 'text-red' : 'text-white'}`}>
                                    <div name={'iconContainer'}>
                                    </div>
                                </i>
                            </button>
                        </div>
                    )}
                    <div>
                        <img src={imgPlaceholder} alt={'placeholder'} />
                    </div>

                    <div className='px-5 py-2'>
                        <div className='text-center text-xl font-bold'>
                            <h3>{flat.title}</h3>
                        </div>
                        <div>
                            {shortDescription}
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center p-5'>
                    <div className='flex items-center gap-2'>
                        <i className='fa fa-map-marker-alt' />
                        {(flat.location) ? flat.location.city : 'unknown, yet'}
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div className='flex items-center gap-1'>
                            <i className={`fa fa-star ${(rating < 1) ? 'text-[#e0e0e0]' : 'text-[#ffd700]'}`} />
                            <i className={`fa fa-star ${(rating < 1.5) ? 'text-[#e0e0e0]' : 'text-[#ffd700]'}`} />
                            <i className={`fa fa-star ${(rating < 2.5) ? 'text-[#e0e0e0]' : 'text-[#ffd700]'}`} />
                            <i className={`fa fa-star ${(rating < 3.5) ? 'text-[#e0e0e0]' : 'text-[#ffd700]'}`} />
                            <i className={`fa fa-star ${(rating < 4.5) ? 'text-[#e0e0e0]' : 'text-[#ffd700]'}`} />
                        </div>
                        {rating}/5
                    </div>
                </div>
            </div>
        </>
    )
}


