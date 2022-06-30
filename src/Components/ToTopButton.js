import React from "react";

const ToTopButton = () => {
  return (
    <>
      <div className="top-0" href="#top"></div>
      <a
        href="#top"
        title="Go to top"
        className="fixed z-30 bottom-8 right-8 border-0 w-8 h-8 rounded drop-shadow-md bg-[#505050] text-white text-center text-xl font-bold"
      >
        <i className="fa fa-arrow-up"></i>
      </a>
    </>
  );
};

export default ToTopButton;
