import axios from 'axios';
import React from 'react'
import { toast, ToastContainer } from 'react-toastify'

const apiUrl = process.env.REACT_APP_API_URL;

const submitHandler = (e) => {
    const { email, password } = e.target;

    e.preventDefault();
    if (email) { }
    axios
        .get(`${apiUrl}/users/login`, {
            body: {
                email: email,
                password: password
            }
        })
        .then(res => {
            console.log(res);
            toast.success('Du wurdest erfolgreich eingeloggt')
        })
        .catch(err => {
            toast.error('Benutzerdetails nicht korrekt!')
        });


}

const Login = () => {
    return (
        <>
            <ToastContainer />
            <div className='border rounded-lg p-5 my-5 shadow-lg border-[#b9b9b9] bg-white w-96 m-auto'>
                <h2 className='text-center mb-5'>Logge Dich hier ein</h2>
                <form onSubmit={submitHandler}>
                    <input name='username' type={'text'} className='border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5' placeholder='Benutzername' />
                    <input name='email' type={'email'} className='border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5' placeholder='E-Mail-Adresse' />
                    <input name='password' type={'password'} className='border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5' placeholder='Passwort' />
                    <button type={'submit'} className='border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-white' >Absenden</button>
                </form>
            </div>
        </>
    )

}

export default Login