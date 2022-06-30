import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Loader from './Loader'
import { useNavigate } from 'react-router-dom';
import { authContext } from '../Context/authContext';


export const Signup = () => {
    const { verified, setVerified } = useContext(authContext);
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    let isSamePassword = true;
    let isPasswordMinimumLength = true;
    let isEmailExists = false;
    let isUsernameExists = false;
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        if (!verified) {
            axios
                .get(`${apiUrl}/users`)
                .then(res => {
                    setUsers(res.data.users);
                    // setTimeout(() => {
                    setLoading(false);
                    // }, 1000);
                    setError(null);
                })
                .catch(err => {
                    setLoading(false);
                    setError(err);
                })
        } else {
            navigate('/dashboard');
        }
    }, [apiUrl, navigate, verified]);

    const submitHandler = (e) => {
        e.preventDefault();
        const { username, email, password, password2 } = e.target;
        (password.value === password2.value) ? isSamePassword = true : isSamePassword = false;
        (!isSamePassword) && toast.error('Das Passwort stimmt nicht überein');
        (password.value.length > 3) ? isPasswordMinimumLength = true : isPasswordMinimumLength = false;
        (!isPasswordMinimumLength) && toast.error('Das Passwort muss mindestens 4 Zeichen lang sein!');
        console.log(users);
        (users.find(user => { return user.contact.email === email.value })) ? isEmailExists = true : isEmailExists = false;
        (isEmailExists) && toast.error('Die E-Mail-Adresse existiert bereits!');
        (users.find(user => { return user.username === username.value })) ? isUsernameExists = true : isUsernameExists = false;
        (isUsernameExists) && toast.error('Der Benutzername existiert bereits!');

        if (isSamePassword && isPasswordMinimumLength && !isEmailExists && !isUsernameExists) {
            axios
                .post(`${apiUrl}/users/signup`, {
                    username: username.value,
                    email: email.value,
                    password: password.value
                })
                .then(res => {
                    console.log(res);
                    localStorage.setItem('token', res.headers.authorization);
                    setVerified(true);
                    toast.success('Benutzer erfolgreich angelegt');
                    // navigate('/dashboard');
                })
                .catch(err => console.log(err));
        } else {
            console.log();
        }
    }

    if (error) { return <h2>Oh no, an error occured!</h2> }
    if (loading) { return <Loader /> }

    return (
        <>
            <div className=' bg-[url("https://i.ibb.co/qJFwrYN/Landingpage-BG1.png")] w-full bg-no-repeat min-h-[65vh] mt-20'>
            <ToastContainer />
            <div className='border rounded-lg p-5 my-5 shadow-lg border-[#b9b9b9] bg-white w-96 m-auto'>
                <h2 className='text-center mb-5'>Registriere Dich hier</h2>
                <form onSubmit={submitHandler}>
                    <input name='username' type={'text'} className='border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5' placeholder='Benutzername' />
                    <input name='email' type={'email'} className='border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5' placeholder='E-Mail-Adresse' />
                    <input name='password' type={'password'} className='border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5' placeholder='Passwort' />
                    <input name='password2' type={'password'} className='border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5' placeholder='Passwort wiederholen' />
                    <div className='flex justify-end'>
                        <button type={'submit'} className='border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-white' >Absenden</button>
                    </div>
                </form>
            </div>
            </div>
        </>
    )
}