import React from "react";
import { Link } from "react-router-dom";
import CarouselContainer from "./CarouselContainer";
import ContactContainer from "./ContactContainer";
import HowToUseContainer from "./HowToUseContainer";
import StartSwapping from "./StartSwapping";
import ToTopButton from "./ToTopButton";

const Landing = () => {
  return (
    <>
      <ToTopButton />
      <div className='bg-[url("https://i.ibb.co/qJFwrYN/Landingpage-BG1.png")] w-full h-full bg-no-repeat'>
        <div className="flex justify-between w-5/6 mx-auto mt-20 mb-20">
          <div>
            <h1 className="font-script text-5xl mb-20">
              Make the WORLD become your home.
            </h1>
            <StartSwapping />
          </div>
          <div className="flex flex-col items-end mr-10">
            <HowToUseContainer />
          </div>
        </div>

        <div className="flex justify-end w-5/6 mx-auto mt-28 pb-20 gap-12">
          <div className="w-1/2">
            <div className="w-3/4 h-3/4 mx-auto mb-20 overflow-hidden">
              <img
                src="https://i.ibb.co/sjPZ2CD/Holding-Globe.png"
                alt="Hand holding globe"
              ></img>
            </div>
          </div>
          <div className="w-1/2 my-auto">
            <h1 className="font-script text-5xl pb-20">
              Work remote from WHEREVER <br />
              you want.
            </h1>
            <p className="w-96">
              You go to their place. They come to yours. Just find a home
              you&apos;d like to stay in, and see if the owner would like to
              stay in yours. Classic Swaps can happen at the same time or at
              different times.
            </p>
          </div>
        </div>

        <div className="flex w-5/6 mx-auto mt-20 gap-12">
          <h1 className="font-script text-5xl ml-20 mb-20">
            Spend your money for MEMORIES, <br />
            not for the flat.
          </h1>
        </div>
        <div className="flex w-5/6 mx-auto mb-20 gap-12">
          <div className="w-full">
            <CarouselContainer />
          </div>
        </div>
      </div>

      <div className='bg-[url("https://i.ibb.co/0FD7Bh3/Landingpage-BG2.png")] w-full h-full bg-no-repeat'>
        <div className="flex w-5/6 mx-auto pt-20 pb-10 gap-12">
          <div className="w-1/2">
            <div className="w-3/4 h-3/4 mx-auto mb-20 overflow-hidden ">
              <img
                src="https://i.ibb.co/CJQ9LVQ/Choose-Location.png"
                alt="Pointing at world map"
              ></img>
            </div>
            <div className="flex justify-center items-start">
              <Link
                to={"/flats"}
                className="bg-red border-2 border-lightgreen rounded-md px-3 py-1 text-lightgreen font-bold hover:bg-lightgreen hover:text-red"
              >
                Find your home
              </Link>
            </div>
          </div>

          <div className="w-1/2">
            <h1 className="font-script text-5xl mt-48 pb-20">
              Choose your FAVOURITE location <br />
              from across the world.
            </h1>
            <p className="w-96">
              You get to choose your ideal home and location from thousands of
              beautiful character homes in over 100 countries, owned by the
              happiest community of members.
            </p>
          </div>
        </div>

        <div className="flex w-5/6 mx-auto mt-48 mb-20">
          <div className="w-1/2 pl-20 mt-60">
            <h1 className="font-script text-5xl mb-20">People you'll TRUST.</h1>
            <p className="w-96">
              With our safety guidelines in place, swap homes with house proud
              members who will treat your place like their own. Avoid crowded
              hotels and stay where the locals live, with all the creature
              comforts of home.
            </p>
          </div>
          <div className="w-1/2 mt-20">
            <div className="w-3/4 mx-auto overflow-hidden">
              <img
                src="https://i.ibb.co/tZFqcS2/Trust-Hands.png"
                alt="People holding hands"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-40">
        <ContactContainer />
      </div>
    </>
  );
};

export default Landing;
