import React from 'react'

const ContactContainer = () => {
  return (
    <div className='bg-lightblue flex justify-end w-5/6 mx-auto py-20 gap-12'>
    <div className='w-1/2'>
        <h1 className='font-script text-5xl mb-10'>
            Our team is ALWAYS here <br/>
            in case you need any help.
        </h1>
        <p className='w-96 text-xl font-heading'>
            Please get in touch if you...
        </p>
        <ul>
            <li>- Have any questions before you join</li>
            <li>- Want help getting ready for your first swap</li>
            <li>- Need absolutely anything else!</li>
        </ul>
        <button className="my-3 bg-lightblue border-2 border-yellow rounded-md px-3 py-1 text-yellow font-bold hover:bg-yellow hover:text-lightblue">Contact us</button>
    </div>
</div>
  )
}

export default ContactContainer