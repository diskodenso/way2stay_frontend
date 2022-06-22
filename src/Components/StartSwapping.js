import React from 'react'

const StartSwapping = () => {
    return (
        <div className='rounded-lg bg-green'>
            <form className='flex p-4'>
                <div className='flex flex-col'>
                    <label>I want to start from</label>
                    <input className='p-2' />
                </div>
                <div className='flex flex-col ml-4'>
                    <label>My destination should be</label>
                    <input className='p-2' />
                </div>
            </form>
        </div>
    )
}

export default StartSwapping