import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const FlatDetailCarousel = () => {
  return (
    <Carousel showThumbs={false}>
      <div className="w-5/6 mb-10 mx-auto overflow-hidden rounded-lg shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Hut in woods"
        />
      </div>

      <div className="w-5/6 mb-10 mx-auto overflow-hidden rounded-lg shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1592928038511-20202bdad1fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Hut in woods by night"
        />
      </div>

      <div className="w-5/6 mb-10 mx-auto overflow-hidden rounded-lg shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1609962526051-011a43a76ec3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Hut interiot"
        />
      </div>
    </Carousel>
  );
};

export default FlatDetailCarousel;
