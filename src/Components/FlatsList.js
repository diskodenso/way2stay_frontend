import React from "react";
import ToTopButton from "./ToTopButton";

const FlatsList = () => {
  return (
    <>
    <ToTopButton />
      <div className='bg-[url("https://i.ibb.co/qJFwrYN/Landingpage-BG1.png")] w-full h-full bg-no-repeat'>
        <div className="flex justify-between ml-40 my-20">
          <h1 className=" w-1/2 font-script text-4xl">
            We've found XXX results to your search.
          </h1>
            <h1 className="font-heading text-2xl mr-40 hover:text-blue">
                <i className="text-blue mr-3 fa fa-filter"></i>
                Filter your search
            </h1>
        </div>
      </div>
    </>
  );
};

export default FlatsList;
