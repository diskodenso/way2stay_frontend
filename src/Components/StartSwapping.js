import React from 'react'

const StartSwapping = () => {
    return (
        <div className='rounded-lg bg-yellow opacity-80 shadow-lg p-2'>
            <form className='flex p-3 gap-6'>
                <div className='flex flex-col w-1/2'>
                    <label className='pb-3 font-heading font-bold text-xl'>I want to start from:</label>
                    <input className='p-2 focus:outline-green' />
                </div>
                <div className='flex flex-col w-1/2'>
                    <label className='pb-3 font-heading font-bold text-xl'>My destination should be:</label>
                    <input className='p-2 focus:outline-green' />
                <div className='mt-4 text-right'>
                    <button className="w-1/3 bg-yellow border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-yellow">Submit</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default StartSwapping