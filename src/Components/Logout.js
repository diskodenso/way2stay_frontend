import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { authContext } from '../Context/authContext';

const Logout = () => {
    const { setVerified, setUserId } = useContext(authContext);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('token');
        setVerified(false);
        setUserId(null);
        toast.success('Du wurdest erfolgreich ausgeloggt');
        navigate('/');
    }, [navigate, setUserId, setVerified]);

    return (
        <>
            <div className='border rounded-lg p-5 my-5 shadow-lg border-[#b9b9b9] bg-white w-96 m-auto'>
                <h2 className='text-center mb-5'>Du wurdest erfolgreich ausgeloggt</h2>
            </div>
        </>
    )
}

export default Logout