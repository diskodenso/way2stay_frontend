import React from 'react'

export const FlatsListItem = ({ flat }) => {
    console.log(flat);
    return (
        <div className='border rounded-lg w-1/3 bg-gray text-white'>
            <div className='flex justify-end'>Bearbeiten</div>
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
