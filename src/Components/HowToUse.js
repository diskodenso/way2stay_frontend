import React from 'react'
import Button from './Button'

const HowToUse = () => {
  return (
    <div className='flex flex-col bg-green p-4 rounded-lg'>
        <h2>how 2 use</h2>
        <p>Learn how to use way2stay with a very simple step by step guide</p>
        <Button value={'to the guide'} bg={'red'} link={'/guide'} />
    </div>
  )
}

export default HowToUse