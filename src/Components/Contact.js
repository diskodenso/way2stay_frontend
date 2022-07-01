import React from "react";
import ToTopButton from "./ToTopButton";
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
      <div className='bg-[url("https://i.ibb.co/HgSDHVH/Contact-Container-BG.png")] w-full bg-no-repeat'>
        <div className="flex justify-end w-5/6 mx-auto pt-20 pb-16 gap-12"></div>
        <h2 className="text-center mb-5">Kontaktiere uns hier:</h2>
        <form onSubmit={submitHandler}>
          <input
            name="contactMail"
            type={"email"}
            className="border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5"
            placeholder="Bitte geben Sie Ihre E-Mail ein"
            required
          />
          <input
            name="subject"
            type={"text"}
            className="border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5"
            placeholder="Betreff"
          />
          <input
            name="contactField"
            type={"text"}
            className="border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5"
            placeholder="Kontaktiere uns"
            required
          />
          <div className="flex justify-end">
            <button
              type={"submit"}
              className="border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-white"
            >
              Absenden
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
