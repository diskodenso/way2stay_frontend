import axios from 'axios';
import React, { useEffect } from "react";
import ToTopButton from "./ToTopButton";
import { useState } from "react";
import { FlatsListItem } from "./FlatsListItem";
import Loader from "./Loader";

const FlatsList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [flats, setFlats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [flatCount, setFlatCount] = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${apiUrl}/flats`)
      .then((res) => {
        setFlats(res.data.flats);
        setFlatCount(res.data.flats.length);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoading(false);
      });
      axios
      .get(`${apiUrl}/categories`);
    }, []);

    const toggling = () => setIsOpen(!isOpen);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h3>Oh no, an error occured</h3>;
  }

  return (
    <>
      <ToTopButton />
      <div className='bg-[url("https://i.ibb.co/qJFwrYN/Landingpage-BG1.png")] w-full min-h-screen pb-20 bg-no-repeat'>
        <div className="w-5/6 flex justify-between mx-auto mt-20">
          <h2 className=" font-script text-4xl">
            We've found {flatCount} results to your search.
          </h2>

          <div>
            <div>
              <div onClick={toggling} className="mb-2">
                {isOpen ? (
                  <h2 className="flex gap-3 font-heading text-2xl w-[16rem] justify-between text-blue">
                    <i className="text-blue fa fa-filter"></i>
                    Filter by
                    <i className="text-lg fa fa-caret-up"></i>
                  </h2>
                ) : (
                  <h2 className="flex gap-3 font-heading text-2xl w-[16rem] justify-between hover:text-blue">
                    <i className="text-blue fa fa-filter"></i>
                    Filter your search
                    <i className="text-lg fa fa-caret-down"></i>
                  </h2>
                )}
              </div>
              {isOpen && (
                <div className="bg-blue/60 absolute rounded ml-9 w-[14rem]">
                  <ul>
                    <li className="mr-2 pl-2 my-1 w-full rounded hover:bg-blue hover:text-white">
                      Bedrooms
                    </li>
                    <li className="mr-2 pl-2 my-1 w-full rounded hover:bg-blue hover:text-white">
                      Bathrooms
                    </li>
                    <li className="mr-2 pl-2 my-1 w-full rounded hover:bg-blue hover:text-white">
                      m&#178;
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-16 mt-20 w-5/6 mx-auto">
          {/* <FlatsListItem /> */}

          {flats && (
            flats.map((flat) => {
              return <FlatsListItem flat={flat} />
            }) 
          )}

        </div>
      </div>
    </>
  );
};

export default FlatsList;
