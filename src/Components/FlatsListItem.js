import React, { useContext } from 'react'
import { authContext } from '../Context/authContext';

export const FlatsListItem = ({ flat }) => {
    const { userId } = useContext(authContext);
    const owner = (userId === flat.userId);
    // console.log(flat);
    // console.log(owner);
    return (
        <div className='border rounded-lg w-1/3 bg-gray text-white'>
            {(owner) && <div className='flex justify-end p-1'><i className='fa fa-pen' /></div>}
            {(!owner) && <div className='flex justify-end p-1'><i className='fa fa-heart' /></div>}
            <div className='p-5'>
                <div className='text-center'>
                    {flat.title}
                </div>
                <hr />
                <div>
                    {flat.description}
                </div>
            </div>
        </div>
    )
}
