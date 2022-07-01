import React from "react";

const TimeSheet = () => {
  return (
    <>
      <div className="flex w-1/3 bg-white shadow-lg rounded-lg">
        <div className="w-1/2 m-5">
            <h3 className="pb-3 font-heading font-bold text-xl">From</h3>
          <input
            className="p-2 rounded border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5"
            type="date"
          />
        </div>

        <div className="w-1/2 m-5">
            <h3 className="pb-3 font-heading font-bold text-xl">To</h3>
          <input
            className="p-2 rounded border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5"
            type="date"
          />
        </div>
      </div>
    </>
  );
};

export default TimeSheet;
