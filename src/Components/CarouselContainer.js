import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselContainer = () => {
  return (
    <Carousel showThumbs={false}>
      <div className="flex gap-12 pr-10 pb-20">
        <div className="w-1/2 my-auto">
          <div className="flex w-3/5 mx-auto justify-between">
            <h1 className="pb-10 font-heading text-3xl align">Matthias</h1>
            <p className="text-2xl text-yellow">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </p>
          </div>
          <p className="w-2/3 mx-auto pb-10">
            This was such a fantastic stay for my family, including 2 kids. The
            home is gorgeous and well-equipped and the views are unparalleled!
            We would love to come again.
          </p>
          <Link
            to={"/flats/62bb072dd491a11505c2148f"}
            className="border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-[#f1f5ee]"
          >
            Visit this home
          </Link>
        </div>
        <div className="w-1/3 mx-auto overflow-hidden">
          <img
            src="https://i.ibb.co/CJQ9LVQ/Choose-Location.png"
            alt="Pointing at world map"
          />
        </div>
      </div>

      <div className="flex gap-12 pr-10 pb-20">
        <div className="w-1/2 my-auto">
          <div className="flex w-3/5 mx-auto justify-between">
            <h1 className="pb-10 font-heading text-3xl align">Marcel</h1>
            <p className="text-2xl text-yellow">
              <i class="fa fa-star text-[#d9d9d9]"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </p>
          </div>
          <p className="w-2/3 mx-auto pb-10">
            REZENSION Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum.
          </p>
          <Link
            to={"/flats/:flatId"}
            className="border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-[#f1f5ee]"
          >
            Visit this home
          </Link>
        </div>
        <div className="w-1/3 mx-auto overflow-hidden">
          <img
            src="https://i.ibb.co/tZFqcS2/Trust-Hands.png"
            alt="People holding hands"
          />
        </div>
      </div>

      <div className="flex gap-12 pr-10 pb-20">
        <div className="w-1/2 my-auto">
          <div className="flex w-3/5 mx-auto justify-between">
            <h1 className="pb-10 font-heading text-3xl align">Disko Denso</h1>
            <p className="text-2xl text-yellow">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </p>
          </div>
          <p className="w-2/3 mx-auto pb-10">
            REZENSION Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum.
          </p>
          <Link
            to={"/flats/:flatId"}
            className="border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-[#f1f5ee]"
          >
            Visit this home
          </Link>
        </div>
        <div className="w-1/3 mx-auto overflow-hidden">
          <img
            src="https://i.ibb.co/sjPZ2CD/Holding-Globe.png"
            alt="Hand holding globe"
          />
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselContainer;
