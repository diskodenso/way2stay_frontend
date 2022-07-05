import axios from "axios";
import "./FlatDetailMap.css";
import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { authContext } from "../Context/authContext.js";
import SingleFlatMap from "./SingleFlatMap";
import Loader from "./Loader";
import FlatDetailCarousel from "./FlatDetailCarousel.js";
import FlatDetailReviews from "./FlatDetailReviews";
import ToTopButton from "./ToTopButton.js";
import TimeSheetListContainer from "./TimeSheetListContainer";

const FlatDetail = () => {
    const { flatId } = useParams();
    const { userId } = useContext(authContext)
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [flat, setFlat] = useState(null);
    const [categories, setCategories] = useState(null);

    const apiUrl = process.env.REACT_APP_API_URL;

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
            navigate('/')
            setLoading(false);
        }
    }, [apiUrl, flatId, navigate]);

    const clickHandler = () => {
        if (userId !== flat.userId) {
            navigate(`/bookings/flats/${flatId}`);
        } else {
            navigate(`/flats/editor/${flat._id}`);
        }

    }

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return (
            <h2 className="text-center my-10">Damn Daniel, an error occured!</h2>
        );
    }

    if (!loading && !error && flat && categories) {
        return (
            <>
                <ToTopButton />
                <div className=' bg-[url("https://i.ibb.co/qJFwrYN/Landingpage-BG1.png")] w-full bg-no-repeat min-h-[73vh] mt-20 pb-20'>
                    <div className="w-2/3 rounded-lg p-5 shadow-lg bg-white mx-auto">
                        <div className="flex justify-between mt-5 mb-10 ml-10 mr-5">
                            <h2 className="font-script text-4xl">{flat.title}</h2>
                            <button
                                onClick={clickHandler}
                                className="border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-white"
                            >
                                {(flat) && (flat.userId !== userId ? 'Book it' : <i className="fa fa-pen" />)}
                            </button>
                        </div>

                        <div className="flex gap-8">
                            <div className="w-1/2">
                                <FlatDetailCarousel images={flat.images} />
                                <div className="ml-10 mt-10 mr-5">
                                    <h3 className="font-heading text-2xl mb-2">
                                        About this home
                                    </h3>
                                    <div>{flat.description}</div>

                                    <h3 className="font-heading text-2xl mt-10 mb-2">Location</h3>
                                    {flat.location && flat.location.city}

                                    <div>
                                        <h3 className="font-heading text-2xl mt-10 mb-2">
                                            Categories
                                        </h3>
                                        <div className="flex flex-wrap gap-5">
                                            {categories.map((category) => (
                                                <div key={category._id}>
                                                    <input
                                                        className="mr-2"
                                                        type={"checkbox"}
                                                        name={`cb_${category._id}`}
                                                        checked={
                                                            flat.details.categories &&
                                                            flat.details.categories.includes(category._id)
                                                        }
                                                        disabled
                                                    />
                                                    {category.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col w-1/2 mb-5">
                                <div className="rounded-lg shadow-lg overflow-hidden mr-5">
                                    <SingleFlatMap flat={flat} />
                                </div>

                                <div className="border border-[#b3b3b3] p-3 rounded-lg shadow-lg min-h-36 mr-5 mt-10">
                                    <TimeSheetListContainer flat={flat} isView={true} />
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 ml-10 mr-5">
                            <h3 className="font-heading text-2xl mb-5">Reviews</h3>
                            <FlatDetailReviews />
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default FlatDetail;
