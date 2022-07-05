import React from "react";
import ContactContainer from "./ContactContainer";
import ToTopButton from "./ToTopButton";
import HowToUseCarousel from "./HowToUseCarousel";

const HowToUse = () => {
  return (
    <>
      <ToTopButton />
      <div className='bg-[url("https://i.ibb.co/qJFwrYN/Landingpage-BG1.png")] w-full min-h-screen bg-no-repeat'>
        <div className="flex justify-between w-5/6 mx-auto my-20">
          <div className="bg-[#f1f5ee] border border-[#d9d9d9] shadow-lg rounded-lg w-2/3">
            <h1 className="font-script text-5xl pb-5 mt-6 ml-6">
              A quick guide on how to use way2stay.
            </h1>
            <p className="font-script text-2xl mx-6 mb-6">
              Discover a new way of traveling and start swapping in just a few
              steps.
            </p>
          </div>
        </div>

        <div className="flex justify-end w-5/6 mx-auto my-20">
          <div className="bg-[#f1f5ee] border border-[#b3b3b3] shadow-lg rounded-lg w-2/3">
            <h1 className="flex justify-end font-script text-5xl pb-10 mt-6 mr-6">
              What is a home swap?
            </h1>
            <p className="mx-6 mb-6">
              A home swap is as simple as it sounds. You exchange your home with
              another lovely person or family for a vacation. You get to choose
              your ideal home and location from thousands of beautiful character
              homes in over 100 countries, owned by the happiest community of
              members!
            </p>
          </div>
        </div>

        <div className="w-5/6 mx-auto my-20">
          <div className="bg-[#f1f5ee] border border-[#d9d9d9] shadow-lg rounded-lg">
            <h1 className="font-script text-5xl pt-6 pl-6 mb-10">
              Home swapping in 5 easy steps.
            </h1>
            <div className="flex w-5/6 mx-auto mb-5">
              <div className="w-full">
                <HowToUseCarousel />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-20">
          <ContactContainer />
        </div>
      </div>
    </>
  );
};

export default HowToUse;
