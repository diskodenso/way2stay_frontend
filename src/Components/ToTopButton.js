import React from "react";

const toTopButton = document.getElementById("to-top-button");


        window.onscroll = function () {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                toTopButton.classList.remove("hidden");
            } else {
                toTopButton.classList.add("hidden");
            }
        }

const ToTopButton = () => {
  return (
    <a
      id="to-top-button"
      href="#top"
      onClick={toTopButton}
      title="Go To Top"
      className="fixed z-90 bottom-8 right-8 border-0 w-8 h-8 rounded drop-shadow-md bg-[#505050] text-white text-center text-xl font-bold"
    >
      <i className="fa fa-arrow-up"></i>
    </a>
  );
};

export default ToTopButton;
