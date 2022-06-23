import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FlatsList } from './FlatsList'
import Loader from './Loader';

const UserDashboard = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API_URL;
        axios
            .get(`${apiUrl}/flats`)
            .then(res => {
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    if (loading) {
        return <Loader />;
    }
        
    return (
        <>
            <div className='flex w-5/6 gap-5 m-auto md:flex-wrap lg:flex-nowrap justify-center'>
                <div className='w-1/3 border rounded-lg p-5 my-5 shadow-lg border-[#b9b9b9] bg-white'>
                    <div className='items-center gap-5 mb-5'>
                        <picture className='rounded-full w-[50px] h-[50px] bg-green'>

                        </picture>
                        <p>Username</p>
                    </div>
                    <div className='flex justify-between items-center mt-8'>
                        <h2>Persönliche Daten</h2>
                        <button type='button' className='border-2 border-blue rounded-md px-3 py-1 text-blue font-bold hover:bg-blue hover:text-white'>Bearbeiten</button>
                    </div>
                    <form className='my-5 items-stretch'>
                        <input className='border-b-2 border-[#6b6b6b] w-full focus:outline-none my-5' placeholder='E-Mail Adresse' />
                        <input className='border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5' placeholder='Passwort' />
                        <input className='border-b-2 border-[#6b6b6b] focus:outline-none w-full' placeholder='Passwort wiederholen' />
                        <div className='flex justify-between gap-4 items-stretch my-5'>
                            <input className='border-b-2 border-[#6b6b6b] w-1/2 focus:outline-none' placeholder='Vorname' />
                            <input className='border-b-2 border-[#6b6b6b] w-1/2 focus:outline-none' placeholder='Nachname' />
                        </div>
                        <div className='flex justify-between gap-4 my-5'>
                            <input className='border-b-2 border-[#6b6b6b] focus:outline-none w-[4em]' placeholder='PLZ' />
                            <input className='border-b-2 border-[#6b6b6b] focus:outline-none w-full' placeholder='Ort' />
                        </div>
                        <div className='flex justify-between gap-4 my-5'>
                            <input className='border-b-2 border-[#6b6b6b] focus:outline-none w-5/6' placeholder='Straße' />
                            <input className='border-b-2 border-[#6b6b6b] focus:outline-none w-1/6' placeholder='Nr.' />
                        </div>
                        <input className='border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-3' placeholder='Mobil- / Telefonnummer' />
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
                            <div className='flex gap-5 my-5'>
                                <FlatsList />
                                <FlatsList />
                                <FlatsList />
                            </div>
                        </div>
                    </div>
                    <div className='border rounded-lg p-5 my-5 shadow-lg border-[#b9b9b9] bg-white'>
                        <div>
                            <h2>Meine Favoriten</h2>
                            <div className='flex gap-5 my-5'>
                                <FlatsList />
                                <FlatsList />
                                <FlatsList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDashboard