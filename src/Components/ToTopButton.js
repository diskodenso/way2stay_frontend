import React from "react";

const ToTopButton = () => {
  return (
    <>
      <div className="top-0" href="#top"></div>
      <a
        href="#top"
        title="Go to top"
        className="fixed z-30 bottom-8 right-8 w-8 h-8 rounded drop-shadow-md border-2 border-blue text-blue hover:bg-blue hover:text-[#f1f5ee] text-center text-xl font-bold"
      >
        <i className="fa fa-arrow-up"></i>
      </a>
    </>
  );
};

export default ToTopButton;
