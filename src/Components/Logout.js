import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authContext } from '../Context/authContext';

const Logout = () => {
    const { setVerified, setUserId, verified } = useContext(authContext);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('token');
        setVerified(false);
        setUserId(null);
        navigate('/');
    }, [navigate, setUserId, setVerified]);

    return (
        <>
            {verified && toast.success('Du wurdest erfolgreich ausgeloggt')}
        </>
    )
}

export default Logout