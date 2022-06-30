import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'
import { authContext } from '../Context/authContext';

const Login = () => {
    const navigate = useNavigate();
    const { verified, setVerified, setUserId } = useContext(authContext);
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        if (verified) {
            navigate('/dashboard');
        }
    }, [navigate, verified])

    const submitHandler = (e) => {
        const { email, password } = e.target;
        e.preventDefault();
        axios
            .post(`${apiUrl}/users/login`, {
                "email": `${email.value}`,
                "password": `${password.value}`
            })
            .then(res => {
                // const verifyHandler = async () => {
                //     try {
                localStorage.setItem('token', res.headers.authorization);
                toast.success('Du wurdest erfolgreich eingeloggt');
                setVerified(true);
                console.log(res.data);
                setUserId(res.data.userId)
                navigate('/dashboard');
                // } catch (error) {
                //     console.log(error);
                // }
                // }
                // verifyHandler();
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
                    <div className='flex justify-end'>  
                        <button type={'submit'} className='border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-white' >Absenden</button>
                    </div>
                </form>
            </div>
        </>
    )


}

export default Login