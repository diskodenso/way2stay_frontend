import React from 'react'
import HowToUse from './HowToUse'
import StartSwapping from './StartSwapping'

const Landing = () => {
    return (
        <div className='flex justify-between p-4'>
            <div>
                <h1 className='font-heading'>
                    Make YOUR home the world’s home,<br />
                    make the world become YOUR home
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