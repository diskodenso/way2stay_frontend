import React from "react";
import ContactContainer from "./ContactContainer";
import ToTopButton from "./ToTopButton";
import HowToUseCarousel from "./HowToUseCarousel";

const HowToUse = () => {
  return (
    <>
      <ToTopButton />
      <div className='bg-[url("https://i.ibb.co/qJFwrYN/Landingpage-BG1.png")] w-full min-h-screen bg-no-repeat'>
        <div className="flex-col w-5/6 mx-auto my-20">
          <h1 className="font-script text-5xl ml-20 mb-3">
            A quick guide on how to use way2stay.
          </h1>
          <h2 className="font-script text-2xl ml-20 mb-40">
            Discover a new way of traveling and start swapping in just a few
            steps.
          </h2>
        </div>

        <div className="w-5/6 flex flex-col items-end text-end mx-auto">
          <h2 className="font-script text-5xl pb-20">What is a home swap?</h2>
          <p className="w-1/3">
            A home swap is as simple as it sounds. You exchange your home with
            another lovely person or family for a vacation. You get to choose
            your ideal home and location from thousands of beautiful character
            homes in over 100 countries, owned by the happiest community of
            members!
          </p>
        </div>

        <div className="flex w-5/6 mx-auto mt-20 gap-12">
          <h1 className="font-script text-5xl ml-20 mb-20">
            Home swapping in 5 easy steps.
          </h1>
        </div>
        <div className="flex w-5/6 mx-auto mb-20">
          <div className="w-full">
            <HowToUseCarousel />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-40">
        <ContactContainer />
      </div>
    </>
  );
};

export default HowToUse;
