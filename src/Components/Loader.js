import React from 'react'

const Loader = () => {
    return (
        <div className='flex justify-center place-items-center h-[85vh]'>
            <picture className='fixed text-center mb-[35vh]'>
                <img className='h-[20vh] animate-spin' src={'sauce.png'} alt='A bottle of sauce' />
            </picture>
            <h2 className='text-xl'>wait until the sauce code is filled up</h2>
        </div>
    )
}

export default Loader