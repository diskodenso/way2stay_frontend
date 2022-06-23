import React from 'react'

export const FlatsList = ({ userId }) => {
    return (
        <div className='border rounded-lg w-1/3 bg-gray text-white'>
            <div className='flex justify-end'>Bearbeiten</div>
            <div className='p-5'>
                <div className='text-center'>
                    Bild
                </div>
                <hr />
                <div>
                    Body
                </div>
            </div>
        </div>
    )
}
