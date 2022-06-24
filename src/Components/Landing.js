import React from 'react'
import HowToUse from './HowToUse'
import StartSwapping from './StartSwapping'

const Landing = () => {
    return (
        <div className='flex justify-between w-5/6 mx-auto py-5'>
            <div className=''>
                <h1 className='font-script text-3xl'>
                    Make the world become YOUR home.
                </h1>
                <StartSwapping />
            </div>
            <div>
                <HowToUse />
            </div>
        </div>
    )
}

export default Landing