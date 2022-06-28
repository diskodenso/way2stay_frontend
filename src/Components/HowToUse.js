import React from 'react'
import Button from './Button'

const HowToUse = () => {
  return (
    <div className='text-center flex flex-col bg-yellow opacity-80 p-4 rounded-lg w-52 px-8 shadow-lg'>
        <h2 className='mt-3 font-heading text-xl font-bold'>how 2 use</h2>
        <p className='my-3'>Learn how to use way2stay with a very simple step by step guide</p>
        <button className="my-3 bg-yellow border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-yellow">To the guide</button>
    </div>
  )
}

export default HowToUse