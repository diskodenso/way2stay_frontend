import React from "react";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <>
      <div className=' bg-[url("https://i.ibb.co/qJFwrYN/Landingpage-BG1.png")] w-full bg-no-repeat min-h-[73vh] mt-20 pb-20'>
        <div>
          <Link
            to={'/flats/62bb072dd491a11505c2148f'}
            className="border-2 border-green rounded-md px-3 py-2 text-green font-bold hover:bg-green hover:text-white"
          >
            Book now!
          </Link>
        </div>
      </div>
    </>
  );
};

export default Booking;
