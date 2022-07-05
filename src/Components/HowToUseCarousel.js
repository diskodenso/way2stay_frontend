import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HowToUseCarousel = () => {
  return (
    <Carousel showThumbs={false}>
      <div className="flex gap-12 pr-10 pb-10">
        <div className="flex flex-col w-1/2 my-auto text-start">
          <div className="flex w-3/5 mx-auto justify-between">
            <h2 className="pb-10 font-heading text-3xl">Getting started.</h2>
            <p className="font-heading text-2xl">1/5</p>
          </div>
          <p className="w-2/3 ml-40 pb-10">
            Ready for a vacation with all the comforts of home - plus new sights
            to discover? Then create a free account. List your home and view
            18,000 stunning properties.
          </p>
        </div>
        <div className="w-1/3 mx-auto overflow-hidden">
          <img
            src="https://i.ibb.co/CJQ9LVQ/Choose-Location.png"
            alt="Pointing at world map"
          />
        </div>
      </div>

      <div className="flex gap-12 pr-10 pb-10">
        <div className="flex flex-col w-1/2 my-auto text-start">
          <div className="flex w-3/5 mx-auto justify-between">
            <h2 className="pb-10 font-heading text-3xl">
              Save your favourite homes.
            </h2>
            <p className="font-heading text-2xl">2/5</p>
          </div>
          <p className="w-2/3 ml-40 pb-10">
            Out of those 18,000 stunning properties you can choose as many as
            you want and save them as favourites. You can then view on your
            profile page which ones you&apos;ve saved and visit them one by one.
          </p>
        </div>
        <div className="w-1/3 mx-auto overflow-hidden">
          <img
            src="https://i.ibb.co/CJQ9LVQ/Choose-Location.png"
            alt="Pointing at world map"
          />
        </div>
      </div>

      <div className="flex gap-12 pr-10 pb-10">
        <div className="flex flex-col w-1/2 my-auto text-start">
          <div className="flex w-3/5 mx-auto justify-between">
            <h2 className="pb-10 font-heading text-3xl">Talk to the owner.</h2>
            <p className="font-heading text-2xl">3/5</p>
          </div>
          <p className="w-2/3 ml-40 pb-10">
            Whether via chat or video function - let us guide you through your
            temporary home. Share your plans and tell why you would like to
            swap. Find a new home based on trust.
          </p>
        </div>
        <div className="w-1/3 mx-auto overflow-hidden">
          <img
            src="https://i.ibb.co/CJQ9LVQ/Choose-Location.png"
            alt="Pointing at world map"
          />
        </div>
      </div>

      <div className="flex gap-12 pr-10 pb-10">
        <div className="flex flex-col w-1/2 my-auto text-start">
          <div className="flex w-3/5 mx-auto justify-between">
            <h2 className="pb-10 font-heading text-3xl">
              If it fits - it fits!
            </h2>
            <p className="font-heading text-2xl">4/5</p>
          </div>
          <p className="w-2/3 ml-40 pb-10">
            If both owners are happy with the respective exchange apartment and
            the period of the swap it can start.
          </p>
        </div>
        <div className="w-1/3 mx-auto overflow-hidden">
          <img
            src="https://i.ibb.co/CJQ9LVQ/Choose-Location.png"
            alt="Pointing at world map"
          />
        </div>
      </div>

      <div className="flex gap-12 pr-10 pb-10">
        <div className="flex flex-col w-1/2 my-auto text-start">
          <div className="flex w-3/5 mx-auto justify-between">
            <h2 className="pb-10 font-heading text-3xl">Let&apos;s pack!</h2>
            <p className="font-heading text-2xl">5/5</p>
          </div>
          <p className="w-2/3 ml-40 pb-10">
            If someone also comes to your home, make sure that your apartment is
            ready for exchange so wipe again and make sure you have a second set
            of keys ready, that you have a second set of keys ready.
          </p>
        </div>
        <div className="w-1/3 mx-auto overflow-hidden">
          <img
            src="https://i.ibb.co/CJQ9LVQ/Choose-Location.png"
            alt="Pointing at world map"
          />
        </div>
      </div>
    </Carousel>
  );
};

export default HowToUseCarousel;
