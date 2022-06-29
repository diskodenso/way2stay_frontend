import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'
import { authContext } from '../Context/authContext';

const Login = () => {
    const navigate = useNavigate();
    const { verified, setVerified } = useContext(authContext);
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        if (verified) {
            navigate('/dashboard');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [verified])

    const submitHandler = (e) => {
        const { email, password } = e.target;

        e.preventDefault();
        if (email) { }
        axios
            .post(`${apiUrl}/users/login`, {
                "email": `${email.value}`,
                "password": `${password.value}`
            })
            .then(res => {
                console.log(res);
                toast.success('Du wurdest erfolgreich eingeloggt');
                localStorage.setItem('token', res.headers.authorization);
                setVerified(true);
            })
            .catch(err => {
                console.log(err);
                toast.error('Benutzerdetails nicht korrekt!')
            });
    }
    return (
        <>
            <ToastContainer />
            <div className='border rounded-lg p-5 my-5 shadow-lg border-[#b9b9b9] bg-white w-96 m-auto'>
                <h2 className='text-center mb-5'>Logge Dich hier ein</h2>
                <form onSubmit={submitHandler}>
                    <input name='email' type={'email'} className='border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5' placeholder='E-Mail-Adresse' />
                    <input name='password' type={'password'} className='border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5' placeholder='Passwort' />
                    <button type={'submit'} className='border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-white' >Absenden</button>
                </form>
            </div>
        </>
    )


}

export default Login