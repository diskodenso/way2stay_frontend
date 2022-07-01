import React from "react";
import ToTopButton from "./ToTopButton";

const FAQ = () => {
  return (
    <>
      <ToTopButton />
      <div className='bg-[url("https://i.ibb.co/qJFwrYN/Landingpage-BG1.png")] w-full h-full bg-no-repeat'>
        <h1 className="font-script text-5xl my-20 ml-40">
          Frequently Asked Questions
        </h1>

        <div className="flex justify-between w-5/6 mx-auto mb-10">
          <div className="bg-white border border-[#d9d9d9] w-full shadow-lg rounded-lg mx-auto">
            <h2 className="font-script text-3xl mt-6 ml-6 pb-5">
              What is Lorem Ipsum?
            </h2>
            <p className="mx-6 mb-6">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </div>

        <div className="flex justify-between w-5/6 mx-auto mb-10">
          <div className="bg-white border border-[#d9d9d9] w-full shadow-lg rounded-lg mx-auto">
            <h2 className="font-script text-3xl mt-6 ml-6 pb-5">
              Does this website use Lorem Ipsum?
            </h2>
            <p className="mx-6 mb-6">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Sometimes.
            </p>
          </div>
        </div>

        <div className="flex justify-between w-5/6 mx-auto mb-10">
          <div className="bg-white border border-[#d9d9d9] w-full shadow-lg rounded-lg mx-auto">
            <h2 className="font-script text-3xl mt-6 ml-6 pb-5">
              Is Lorem Ipsum free to use?
            </h2>
            <p className="mx-6 mb-6">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </div>
        </div>

        <div className="flex justify-between w-5/6 mx-auto pb-10">
          <div className="bg-white border border-[#d9d9d9] w-full shadow-lg rounded-lg mx-auto">
            <h2 className="font-script text-3xl mt-6 ml-6 pb-5">
              Is there a question about this website rather than Lorem Ipsum?
            </h2>
            <p className="mx-6 mb-6">
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.  At vero eos et accusam et justo duo dolores et ea rebum.
            </p>
          </div>
        </div>

        <div className="flex justify-between w-5/6 mx-auto pb-10">
          <div className="bg-white border border-[#d9d9d9] w-full shadow-lg rounded-lg mx-auto">
            <h2 className="font-script text-3xl mt-6 ml-6 pb-5">
              Are there anymore questions?
            </h2>
            <p className="mx-6 mb-6">
              No.
            </p>
          </div>
        </div>

      </div>
    </>
  );
};

export default FAQ;
