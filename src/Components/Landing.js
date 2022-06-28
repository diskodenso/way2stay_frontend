import React from 'react'
import CarouselContainer from './CarouselContainer'
import ContactContainer from './ContactContainer'
import HowToUse from './HowToUse'
import StartSwapping from './StartSwapping'

const Landing = () => {
    return (
        <>
            <div className='flex justify-between w-5/6 mx-auto my-20'>
                <div>
                    <h1 className='font-script text-5xl mb-20'>
                        Make the WORLD become your home.
                    </h1>
                    <StartSwapping />
                </div>
                <div>
                    <HowToUse />
                </div>
            </div>

            <div className='bg-green flex justify-end w-5/6 mx-auto py-20 gap-12'>
                <div className='w-1/2'></div>
                <div className='w-1/2'>
                    <h1 className='font-script text-5xl pb-20'>
                        Work remote from WHEREVER <br/>
                        you want.
                    </h1>
                    <p className='w-96'>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit. 
                    </p>
                </div>
            </div>

            <div className='flex w-5/6 mx-auto mt-20 gap-12'>
                <h1 className='font-script text-5xl mb-10'>
                Spend your money for MEMORIES, <br/>
                not for the flat.
                </h1>
            </div>
            <div className='flex w-5/6 mx-auto mb-20 gap-12'>
                <div className='w-full'>
                    <CarouselContainer />
                </div>
            </div>

            <div className='bg-red flex w-5/6 mx-auto pt-20 pb-10 gap-12'>
                <div className='w-1/2'>
                    <div className='w-3/4 h-3/4 mx-auto mb-10 overflow-hidden '>
                        <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"></img>
                    </div>
                    <div className='flex justify-center items-start'>
                        <button className="bg-red border-2 border-yellow rounded-md px-3 py-1 text-yellow font-bold hover:bg-yellow hover:text-red">Search by country</button>
                    </div>
                </div>

                <div className='w-1/2'>
                    <h1 className='font-script text-5xl pb-20'>
                        Choose your FAVOURITE location <br/>
                        from across the world.
                    </h1>
                    <p className='w-96'>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit. 
                    </p>
                </div>
            </div>

            <div className='flex w-5/6 mx-auto mt-20'>
                <div className='w-1/2'>
                    <h1 className='font-script text-5xl mb-20'>
                        People you'll TRUST.
                    </h1>
                    <p className='w-96'>
                        With our safety guidelines in place, swap homes with proud house members who will treat your place like their own. Avoid crowded hotels and stay where the locals live, with all the creature comforts of home.
                    </p>
                </div>
                <div className='w-1/2'>
                    <div className='w-3/4 h-3/4 mx-auto overflow-hidden '>
                        <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"></img>
                    </div>
                </div>
            </div>

            <ContactContainer />
        </>
    )
}

export default Landing