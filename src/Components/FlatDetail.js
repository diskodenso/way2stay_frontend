import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { authContext } from "../Context/authContext.js";
import SingleFlatMap from "./SingleFlatMap";
import Loader from "./Loader";
import FlatDetailCarousel from "./FlatDetailCarousel.js";
import TimeSheet from "./TimeSheet.js";

const FlatDetail = () => {
  const { flatId } = useParams();
  const navigate = useNavigate();
  const { imgPlaceholder } = useContext(authContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [flat, setFlat] = useState(null);
  const [categories, setCategories] = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL;

  const handleClick = (e) => {
    navigate(`/bookings/${flatId}`);
  };
  useEffect(() => {
    if (flatId) {
      axios
        .get(`${apiUrl}/flats/${flatId}`)
        .then((res) => {
          setFlat(res.data.flat);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          console.log(err);
          setLoading(false);
        });
      axios
        .get(`${apiUrl}/categories`)
        .then((res) => {
          setCategories(res.data.categories);
        })
        .catch();
    } else {
      setLoading(false);
    }
  }, [apiUrl, flatId]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <h2 className="text-center my-10">Damn Daniel, an error occured!</h2>
    );
  }

  if (!loading && !error && flat) {
    return (
      <>
        <div className=' bg-[url("https://i.ibb.co/qJFwrYN/Landingpage-BG1.png")] w-full bg-no-repeat min-h-[73vh] mt-20 pb-20'>
          <div className="w-2/3 border rounded-lg p-5 shadow-lg border-[#b9b9b9] bg-white mx-auto">
            <div className="flex justify-between mt-5 mb-10 ml-10 mr-5">
              <h2 className="font-script text-4xl">{flat.title}</h2>
              <button
                onClick={handleClick}
                name="onClick"
                type="onClick"
                className="border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-white"
              >
                Book this flat
              </button>
            </div>

            <div className="flex gap-8">
              <div className="w-1/2">
                <FlatDetailCarousel />
                <div className="ml-10 mt-10 mr-5">
                  <h3 className="font-heading text-2xl mb-5">
                    About this home
                  </h3>
                  <div>{flat.description}</div>
                  <div className="mt-10">
                    {flat.location && flat.location.city}
                  </div>

                  {categories && (
                    <div className="mt-10 flex flex-col gap-5">
                      <div className="flex gap-1">
                        {categories.map((category) => {
                          <>
                            {console.log(category.name)}
                            <div key={`cb_${category._id}`}>
                              <input
                                type={"checkbox"}
                                name={`cb_${category._id}`}
                                checked={true}
                                disabled
                              />
                              <label htmlFor={`cb_${category._id}`}>
                                {category.name}
                              </label>
                            </div>
                            ;
                          </>;
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col w-1/2 mb-5">
                <div className="border border-[#b3b3b3] rounded-lg shadow-lg h-36 mr-5 mb-10">
                  <TimeSheet />
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden mr-5">
                  <SingleFlatMap flat={flat} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default FlatDetail;
