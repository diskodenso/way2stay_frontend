import React from 'react'
import Button from './Button'

const HowToUse = () => {
  return (
    <div className='text-center flex flex-col bg-yellow p-4 rounded-lg w-52 px-8 shadow-lg'>
        <h2 className='mt-3 font-heading text-xl font-bold'>how 2 use</h2>
        <p className='my-3'>Learn how to use way2stay with a very simple step by step guide</p>
        <button className="my-3 bg-opacity-0 border-2 border-[#505050] rounded-md px-3 py-1 text-[#505050] font-bold hover:bg-[#505050] hover:text-yellow">To the guide</button>
    </div>
  )
}

export default HowToUse