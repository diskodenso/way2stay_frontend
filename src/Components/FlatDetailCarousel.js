import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { CloudinaryShow } from "./CloudinaryShow";

const FlatDetailCarousel = ({ images }) => {
    return (
        <Carousel showThumbs={false}>
            {
                images !== [] ? images.map(image => {
                    return (
                        <div key={image} className="w-5/6 mb-10 mx-auto overflow-hidden rounded-lg shadow-lg">
                            <CloudinaryShow publicId={image} />
                        </div>
                    )
                }) : (
                        <>
                            {console.log(images)}
                    <div className="w-5/6 mb-10 mx-auto overflow-hidden rounded-lg shadow-lg">
                        <CloudinaryShow />
                    </div>
                        </>
                )
            }
        </Carousel>
    );
};

export default FlatDetailCarousel;
