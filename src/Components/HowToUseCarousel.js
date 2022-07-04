import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HowToUseCarousel = () => {
  return (
    <Carousel showThumbs={false}>
      <div className="flex gap-12 pr-10 pb-10">
        <div className="flex flex-col w-1/2 my-auto text-start">
            <h2 className="pb-10 font-heading text-3xl ml-40">BeispielName</h2>
          <p className="w-2/3 ml-40 pb-10">
            REZENSION Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum.
          </p>
        </div>
        <div className="w-1/3 mx-auto overflow-hidden">
          <img
            src="https://i.ibb.co/CJQ9LVQ/Choose-Location.png"
            alt="Pointing at world map - Image"
          />
        </div>
      </div>

    </Carousel>
  );
};

export default HowToUseCarousel;
