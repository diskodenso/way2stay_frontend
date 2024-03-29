import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authContext } from '../Context/authContext';
import { CloudinaryShow } from './CloudinaryShow';
import Loader from './Loader';

export const FlatsListItem = ({ flat }) => {
    const { userId, user } = useContext(authContext);
    // const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [favoriteList, setFavoriteList] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const [rating, setRating] = useState(0);
    const apiUrl = process.env.REACT_APP_API_URL;
    const owner = (userId === flat.userId);
    const [shortDescription, setShortDescription] = useState(null);

    // #####################################################
    // TODO's
    // - Calculate and set ratings according the reviews
    // #####################################################

    useEffect(() => {
        if (user) {
            setFavoriteList(user.favorites);
            setIsFavorite(user.favorites.find(fav => { return fav === flat._id }));
            setLoading(false);
        } else {
            setLoading(false);
            setError(null);
        }
        setRating(0);
        flat.description.length >= 200 ? setShortDescription(`${flat.description.substring(0, 199)} ...`) : (setShortDescription(flat.description));
    }, [apiUrl, flat._id, userId, favoriteList, user, flat.description]);

    // console.log(flat);
    // console.log(owner);

    const handleToggleFavorite = async (e) => {
        setIsFavorite(!isFavorite);
        const tempFav = favoriteList;
        const favIndex = tempFav.findIndex(fav => (fav === flat._id));
        if (favIndex < 0) {
            tempFav.push(flat._id)
            toast.success(`The flat ${flat.title} was added to your favorite list`)
        } else {
            toast.success(`The flat ${flat.title} was removed from your favorite list`)
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

    const deleteHandler = (e) => {
        axios
            .delete(`${apiUrl}/flats/${flat._id}`)
            .then(res => {
                axios
                    .get(`${apiUrl}/users`)
                    .then(res => {
                        const userEdit = res.data.users.filter(user => {
                            return user.favorites.includes(flat._id);
                        });
                        const indexToDelete = userEdit.findIndex(flat._id);
                        userEdit.splice(indexToDelete, 1);
                        userEdit.forEach(user => {
                            axios
                                .put(`${apiUrl}/users/${user._id}`)
                                .then(console.log(user))
                                .catch(err => toast.error('The flat was not deleted from all favorite lists!'));

                        });
                    })
                toast.success('Wohnung wurde erfolgreich gelöscht')
            })
            .catch(err => { toast.error('The flat could not be deleted!') });
    }

    if (loading) { return <Loader />; }

    if (error) {
        return (<h2 className='text-center my-10'>Bugger, an error occured!</h2>);
    }

    return (
        <>
            <div className='overflow-hidden shadow-lg rounded-lg w-96 bg-[#e8f3ea] flex flex-col justify-between'>
                <div className='min-h-[27rem]'>
                    <Link to={`/flats/${flat._id}`}>
                        <div>
                            <CloudinaryShow publicId={flat.images[0]} />
                        </div>
                    </Link>

                    <div className='px-5 py-2'>
                        <div className='flex items-center justify-between text-xl font-bold'>
                            <h3>{flat.title}</h3>
                            {(owner && userId) && (
                                <div className='flex flex-end gap-4'>
                                    <Link to={`/flats/editor/${flat._id}`}>
                                        <i className='fa fa-pen text-green' />
                                    </Link>
                                    <button type='button' onClick={deleteHandler} >
                                        <i className='fas fa-trash-alt text-red' />
                                    </button>
                                </div>
                            )}
                            {(!owner && userId) && (
                                <button type='button' onClick={handleToggleFavorite} className='p-3 z-20'>
                                    <i name={'favicon'} value={flat._id} className={`fa fa-heart ${(isFavorite) ? 'text-red' : 'text-lightblue'}`} />
                                </button>
                            )}
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