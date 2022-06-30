import React from 'react'
import { Link } from 'react-router-dom'

const StartSwapping = () => {
    return (
        <div className='rounded-lg bg-yellow shadow-lg p-2'>
            <form className='flex p-3 gap-6'>
                <div className='flex flex-col w-1/2'>
                    <label className='pb-3 font-heading font-bold text-xl'>I want to start from:</label>
                    <input className='p-2 rounded focus:outline-[#505050]' />
                </div>
                <div className='flex flex-col w-1/2'>
                    <label className='pb-3 font-heading font-bold text-xl'>My destination should be:</label>
                    <input className='p-2 rounded focus:outline-[#505050]' />
                <div className='mt-4 text-right'>
                    <Link to={'/flats'} className="w-1/3 bg-opacity-0 border-2 border-[#505050] rounded-md px-3 py-1 text-[#505050] font-bold hover:bg-[#505050] hover:text-yellow">Submit</Link>
                </div>
                </div>
            </form>
        </div>
    )
}

export default StartSwapping