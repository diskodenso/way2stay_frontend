import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FlatsListItem } from './FlatsListItem'
import Loader from './Loader';

const UserDashboard = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [flats, setFlats] = useState(null);
    const [user, setUser] = useState(null);
    // eslint-disable-next-line
    const [favorites, setFavorites] = useState(null);

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API_URL;
        axios.defaults.withCredentials = true;
        axios
            .get(`${apiUrl}/users/62b2e03b26764e46038fa5f9`)
            .then(res => {
                console.log(res.data);
                setUser(res.data);
            })
        axios
            .get(`${apiUrl}/flats`)
            .then(res => {
                setFlats(res.data.flats);
                // console.log(res.data.flats);
                // setFavorites(res.data.filter(flat => {return flat. }))
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            })
            .catch(err => {
                setError(true);
                console.log(err);
            })
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return (
            <h2 className='text-center my-10'>Bugger, an error occured!</h2>
        );
    }

    if (!error && !loading) {
        return (
            <>
                <div className='flex w-5/6 gap-5 m-auto md:flex-wrap lg:flex-nowrap justify-center'>
                    <div className='w-1/3 border rounded-lg p-5 my-5 shadow-lg border-[#b9b9b9] bg-white'>
                        <div className='items-center gap-5 mb-5'>
                            <picture className='rounded-full w-[50px] h-[50px] bg-green'>

                            </picture>
                            <p>{user.username}</p>
                        </div>
                        <div className='flex justify-between items-center mt-8'>
                            <h2>Persönliche Daten</h2>
                            <button type='button' className='border-2 border-blue rounded-md px-3 py-1 text-blue font-bold hover:bg-blue hover:text-white'>Bearbeiten</button>
                        </div>
                        <form className='my-5 items-stretch'>
                            <input type={'email'} className='border-b-2 border-[#6b6b6b] w-full focus:outline-none my-5' placeholder='E-Mail Adresse' value={user.contact.email} />
                            <input type={'password'} className='border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5' placeholder='Passwort' />
                            <input type={'password'} className='border-b-2 border-[#6b6b6b] focus:outline-none w-full' placeholder='Passwort wiederholen' />
                            <div className='flex justify-between gap-4 items-stretch my-5'>
                                <input type={'text'} className='border-b-2 border-[#6b6b6b] w-1/2 focus:outline-none' placeholder='Vorname' value={user.firstname && user.firstname} />
                                <input type={'text'} className='border-b-2 border-[#6b6b6b] w-1/2 focus:outline-none' placeholder='Nachname' value={user.lastname && user.lastname} />
                            </div>
                            <div className='flex justify-between gap-4 my-5'>
                                <input type={'number'} className='border-b-2 border-[#6b6b6b] focus:outline-none w-[4em]' placeholder='PLZ' value={user.address && user.address.postalcode} />
                                <input type={'text'} className='border-b-2 border-[#6b6b6b] focus:outline-none w-full' placeholder='Ort' value={user.address && user.address.city} />
                            </div>
                            <div className='flex justify-between gap-4 my-5'>
                                <input type={'text'} className='border-b-2 border-[#6b6b6b] focus:outline-none w-5/6' placeholder='Straße' value={user.address && user.address.street} />
                                <input type={'text'} className='border-b-2 border-[#6b6b6b] focus:outline-none w-1/6' placeholder='Nr.' value={user.address && user.address.housenumber} />
                            </div>
                            <input type={'tel'} className='border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-3' placeholder='Mobil- / Telefonnummer' value={user.contact && user.contact.phonenumber} />
                            <div className='flex justify-between my-5 gap-4'>
                                <button type='reset' className='border-2 border-red rounded-md px-3 py-1 text-red font-bold hover:bg-red hover:text-white'>Zurücksetzen</button>
                                <button type='submit' className='border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-white'>Speichern</button>
                            </div>
                        </form>
                    </div>
                    <div className='flex flex-col w-2/3'>
                        <div className='border rounded-lg p-5 my-5 shadow-lg border-[#b9b9b9] bg-white'>
                            <div>
                                <h2>Meine Wohnungen</h2>
                                <div className='flex gap-5 my-5 flex-wrap'>
                                    {
                                        flats ?
                                            (
                                                <>
                                                    {
                                                        flats.map((flat) => {
                                                            return <FlatsListItem key={flat._id} flat={flat} />
                                                        })
                                                    }
                                                </>

                                            )
                                            :
                                            (
                                                <h2>Du hast noch keine Wohnung angelegt!</h2>
                                            )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='border rounded-lg p-5 my-5 shadow-lg border-[#b9b9b9] bg-white'>
                            <div>
                                <h2>Meine Favoriten</h2>
                                <div className='flex gap-5 my-5'>
                                    {
                                        !flats ?
                                            (
                                                <>
                                                    flats.map(
                                                    return <FlatsListItem />
                                                    )
                                                </>

                                            )
                                            :
                                            (
                                                <h2>Du hast noch keine Favoriten angelegt!</h2>
                                            )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default UserDashboard