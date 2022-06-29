import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'

const NavBar = () => {
    return (
        <div className='p-4 shadow-md bg-[#f1f5ee]'>
            <div className='flex justify-between text-red'>
                <div>
                    <img src='../../public/Logo.svg' alt='Logo'></img>
                </div>
                <div>
                    <NavLink to={'/'} className={'active:font-bold mx-5'}>Home</NavLink>
                    <NavLink to={'/faq'} className={'active:font-bold'} >FAQ's</NavLink>
                    <Button link={'/signup'} value={'Sign Up'} classes={'mx-5 bg-opacity-0 border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-yellow/80'} />
                    <Button link={'/login'} value={'Login'} classes={'bg-opacity-0 border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-yellow/80'} />
                </div>
            </div>
        </div>
    )
}

export default NavBar