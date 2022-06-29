import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'

const NavBar = () => {
    return (
        <div className='p-4 shadow-md bg-white'>
            <div className='flex justify-between text-red'>
                <div>
                    Logo
                </div>
                <div>
                    <NavLink to={'/'} className={'active:font-bold mx-5'}>Home</NavLink>
                    <NavLink to={'/faq'} className={'active:font-bold'} >FAQ's</NavLink>
                    <Button link={'/signup'} value={'Sign Up'} bg={'lightgreen'} textcolor={'blue'} classes={'mx-5'} />
                    <Button link={'/login'} value={'Log In'} textcolor={'green'} />
                </div>
            </div>
        </div>
    )
}

export default NavBar