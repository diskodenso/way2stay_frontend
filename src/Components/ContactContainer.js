import React from 'react'

const ContactContainer = () => {
  return (
    <div className='bg-[url("https://i.ibb.co/HgSDHVH/Contact-Container-BG.png")] w-full bg-no-repeat'>
        <div className='flex justify-end w-5/6 mx-auto pt-20 pb-16 gap-12'>
            <div className='w-1/2'>
                <div className='flex items-end overflow-hidden'>
                    <img className='w-80 h-80 ml-auto mr-40' src="https://i.ibb.co/dMt5FdB/Contact-Container-Picture.png"></img>
                </div>
            </div>
            <div className='w-1/2'>
                <h1 className='font-script text-5xl mb-10'>
                    Our team is ALWAYS here <br/>
                    in case you need any help.
                </h1>
                <p className='w-96 text-xl font-heading'>
                    Please get in touch if you...
                </p>
                <ul className='ml-5 mb-10 marker:text-blue list-disc'>
                    <li>have any questions before you join.</li>
                    <li>want help getting ready for your first swap.</li>
                    <li>need absolutely anything else!</li>
                </ul>
                <button className="my-3 bg-opacity-0 border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-[#BDE8F7]">Contact us</button>
            </div>
        </div>
    </div>
  )
}

export default ContactContainer