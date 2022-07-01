import React from "react";
import ToTopButton from "./ToTopButton.js";
import AboutMap from "./AboutMap.js";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
        <div className="flex justify-between w-5/6 mx-auto my-20">
          <div className="bg-[#f1f5ee] border border-[#d9d9d9] shadow-lg rounded-lg w-2/3">
            <h1 className="font-script text-5xl pb-10 mt-6 ml-6">Our vision</h1>
            <p className="mx-6 mb-6">
              Our concept will change the way you think about vacation and
              working remote. Full service comfort, friendly people, a relaxing
              atmosphere, and all of that completely free give you an experience
              that will leave you glowing both inside and out.
            </p>
          </div>
        </div>

        <div className="flex justify-end w-5/6 mx-auto my-20">
          <div className="bg-[#f1f5ee] border border-[#b3b3b3] shadow-lg rounded-lg w-2/3">
            <h1 className="flex justify-end font-script text-5xl pb-10 mt-6 mr-6">
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

        <div className="flex w-5/6 mx-auto my-20">
          <div className="w-full rounded-lg mx-auto">
            <h1 className="font-script text-5xl pb-10 mt-6 ml-6">
              Meet the team
            </h1>
            <div className="flex justify-between gap-12 mx-40 mb-10">
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8">
                <img
                  className="h-80 w-60 py-5 border border-[#b3b3b3] bg-[#f1f5ee]/75 object-contain rounded-lg"
                  src="https://i.ibb.co/8c1sqKw/Ketchup.png"
                  alt="Ketchup"
                ></img>
                <h2 className="font-heading text-2xl mt-5 mb-2">Matthias</h2>
                <p>Hello, I am the brain behind this website.</p>
              </div>
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8">
                <img
                  className="h-80 w-60 py-5 border border-[#b3b3b3] bg-[#f1f5ee]/75 object-contain rounded-lg"
                  src="https://i.ibb.co/Jx41911/Sriracha.png"
                  alt="Sriracha"
                ></img>
                <h2 className="font-heading text-2xl mt-5 mb-2">Marcel</h2>
                <p>Hello, I am the designer of this website.</p>
              </div>
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8">
                <img
                  className="h-80 w-60 py-5 border border-[#b3b3b3] bg-[#f1f5ee]/75 object-contain rounded-lg"
                  src="https://i.ibb.co/JydbyKH/Szechuan.png"
                  alt="Szechuan"
                ></img>
                <h2 className="font-heading text-2xl mt-5 mb-2">Denis</h2>
                <p>Hello, I am the creator of this website.</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between w-5/6 mx-auto my-20 py-6">
          <h2 className="font-script text-5xl text-center mb-6 ml-6">
            Contact us
          </h2>
          <form className="bg-white w-5/6 mx-auto px-20 py-6 rounded-lg shadow-lg" onSubmit={submitHandler}>
            <input
              name="contactMail"
              type={"email"}
              className="p-2 rounded border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5"
              placeholder="Please enter your e-mail"
              required
            />
            <input
              name="subject"
              type={"text"}
              className="p-2 rounded border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5"
              placeholder="Subject"
            />
            <textarea
              name="contactField"
              type={"text"}
              className="p-2 rounded border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5"
              placeholder="How can we help you?"
              rows={1}
              required
            />
            <div className="flex justify-end">
              <button
                type={"submit"}
                className="w-1/12 border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-[#f1f5ee]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between w-5/6 mx-auto">
        <h2 className="font-script text-5xl text-center mb-5 ml-6">Find us</h2>
        <div className="w-5/6 mx-auto rounded-lg overflow-hidden mb-5 shadow-lg">
          <AboutMap />
        </div>
      </div>
    </>
  );
};

export default Contact;
