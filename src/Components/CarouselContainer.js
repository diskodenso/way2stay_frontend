import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselContainer = () => {
  return (
    <Carousel className="bg-green">
      <div className="flex gap-12 pr-10 pb-20">
        <div className="w-1/2 my-auto">
            <div className="flex w-3/5 mx-auto justify-between">
                <h1 className="pb-10 font-heading text-3xl align">BeispielName</h1>
                <p className="text-3xl text-yellow"># # # # #</p>
            </div>
            <p className="w-2/3 mx-auto pb-10">REZENSION Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            <button className="bg-green border-2 border-yellow rounded-md px-3 py-1 text-yellow font-bold hover:bg-yellow hover:text-green">Visit this home</button>
        </div>
        <div className="w-1/2 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80" alt="TestImage"/>
        </div>
      </div>
      <div className="flex gap-12 pr-10 pb-20">
        <div className="w-1/2">

        </div>
        <div className="w-1/2 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="TestImage2" />
        </div>
      </div>
      <div className="flex gap-12 pr-10 pb-20">
        <div className="w-1/2">

        </div>
        <div className="w-1/2 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="TestImage" />
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselContainer;
