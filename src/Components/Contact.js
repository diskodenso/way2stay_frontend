import React from "react";
import ToTopButton from "./ToTopButton.js";
import AboutMap from "./AboutMap.js";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitted = useState(true);
    //  const { contactMail, subject, contactField } = e.target;
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <>
      <ToTopButton />
      <div className='bg-[url("https://i.ibb.co/qJFwrYN/Landingpage-BG1.png")] w-full min-h-screen bg-no-repeat'>
      <div className="flex w-5/6 mx-auto my-20">
          <div className="bg-white/80 rounded-lg w-1/2">
            <h1 className="flex justify-end font-script text-5xl pb-10 mt-6 mr-6">
              Our vision
            </h1>
            <p className="mx-6 mb-6">
              Our concept will change the way you think about vacation and
              working remote. Full service comfort, friendly people, a relaxing
              atmosphere, and all of that completely free give you an experience
              that will leave you glowing both inside and out.
            </p>
          </div>
        </div>
        <div className="flex justify-end w-5/6 mx-auto my-20">
          <div className="bg-white/80 rounded-lg w-1/2">
            <h1 className="font-script text-5xl pb-10 mt-6 ml-6">
              Who are we?
            </h1>
            <p className="mx-6 mb-6">
              We are way2stay, a small but motivated company specializing in
              freedom. We believe passionately in great bargains and excellent
              service, which is why we commit ourselves to giving you the best
              of both. If you&apos;re looking for something new, you&apos;re in
              the right place. We strive to be industrious and innovative,
              offering our customers something they want, putting their desires
              at the top of our priority list.
            </p>
          </div>
        </div>

      </div>

      <AboutMap />

      <div className="flex justify-between w-5/6 mx-auto my-20">
        <h2 className="text-center mb-5">Contact us:</h2>
        <form onSubmit={submitHandler}>
          <input
            name="contactMail"
            type={"email"}
            className="border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5"
            placeholder="Please enter your e-mail"
            required
          />
          <input
            name="subject"
            type={"text"}
            className="border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5"
            placeholder="Subject"
          />
          <input
            name="contactField"
            type={"text"}
            className="border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5"
            placeholder="How can we help you?"
            required
          />
          <div className="flex justify-end">
            <button
              type={"submit"}
              className="border-2 border-[#f1f5ee] rounded-md px-3 py-1 text-[#f1f5ee] font-bold hover:bg-[#f1f5ee] hover:text-green"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
