import axios from "axios";
import React, { useEffect } from "react";
import ToTopButton from "./ToTopButton";
import { useState, useContext } from "react";
import { FlatsListItem } from "./FlatsListItem";
import { authContext } from "../Context/authContext";
import Loader from "./Loader";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

const FlatsList = () => {
    const { userId } = useContext(authContext);
    const [isOpen, setIsOpen] = useState(false);
    const [flats, setFlats] = useState(null);
    const [filteredFlats, setFilteredFlats] = useState(null);
    const [categories, setCategories] = useState(null);
    const [filterCategoryName, setfilterCategoryName] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [flatCount, setFlatCount] = useState(0);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();


    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        let findCity = searchParams.get('city')
        findCity && (findCity = findCity.toLowerCase()); // 'name'
        axios
            .get(`${apiUrl}/flats`)
            .then((res) => {
                let tempFlats;
                if (userId) {
                    tempFlats = res.data.flats.filter((flat) => {
                        return flat.userId !== userId;
                    });
                } else {
                    tempFlats = res.data.flats;
                }
                findCity && (tempFlats = tempFlats.filter(flat => {
                    return flat.location && (flat.location.city.toLowerCase() === findCity);
                }))
                tempFlats && setFlatCount(tempFlats.length);
                tempFlats && setFilteredFlats(tempFlats);
                setFlats(res.data.flats);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setError(err);
                setLoading(false);
                toast.error('Could not get flats!')
            });
        axios
            .get(`${apiUrl}/categories`)
            .then(res => {
                setCategories(res.data.categories);
            })
            .catch(err => toast('Categories could not be loaded!'));
    }, [apiUrl, searchParams, userId]);

    const toggling = () => setIsOpen(!isOpen);

    const filter = (e) => {
        if (e.target.name !== 'filterDelete') {
            const { name } = e.target;
            let tempFlats = flats.filter(flat => flat.details.categories && (flat.details.categories.includes(name)));
            userId && (tempFlats = tempFlats.filter(flat => flat.userId !== userId));
            const ctgry = categories.find(cat => { return cat._id === name });
            console.log(ctgry);
            setfilterCategoryName(ctgry.name);
            setFilteredFlats(tempFlats);
            setFlatCount(tempFlats.length);
        } else {
            setfilterCategoryName(null);
            setFilteredFlats(flats);
            setFlatCount(flats.length);
        }
    };

    const search = (e) => {
        e.preventDefault();
        const { searchString } = e.target;
        navigate(`/flats?city=${searchString.value}`);
    }

    if (loading) {
        return <Loader />;
    }
    if (error) {
        return <h3>Oh no, an error occured</h3>;
    }

    return (
        <>
            <ToTopButton />
            <div className='bg-[url("https://i.ibb.co/qJFwrYN/Landingpage-BG1.png")] w-full min-h-screen pb-20 bg-no-repeat flex flex-col items-center mt-20'>
                <div className="w-5/6 mx-auto">
                    <div className="w-full flex justify-between">
                        <form onSubmit={search} className="flex items-center mb-10 border-2 outline-2 rounded pr-2">
                            <input
                                name="searchString"
                                className="p-2 outline-none focus:outline-blue mr-3"
                                placeholder="city"
                            />
                            <button type="submit">
                                <i className="hover:text-blue text-2xl fa fa-search"></i>
                            </button>
                        </form>
                        <div>
                            <div onClick={toggling} className="mb-2">
                                {isOpen ? (
                                    <h2 className="flex gap-3 font-heading text-2xl w-[16rem] justify-between text-blue">
                                        <i className="text-blue fa fa-filter"></i>
                                        {filterCategoryName ? filterCategoryName : 'Choose category'}
                                        <i className="text-lg fa fa-caret-up"></i>
                                    </h2>
                                ) : (
                                    <h2 className="flex gap-3 font-heading text-2xl w-[16rem] justify-between hover:text-blue">
                                        <i className="text-blue fa fa-filter"></i>
                                        {filterCategoryName ? filterCategoryName : 'Choose category'}
                                        <i className="text-lg fa fa-caret-down"></i>
                                    </h2>
                                )}
                            </div>
                            {isOpen && (
                                <div className="bg-lightblue absolute rounded ml-9 w-[14rem]">
                                    <ul>
                                        {categories && categories.map(cat => {
                                            return (
                                                <li key={cat._id} className="mr-2 pl-2 my-1 w-full rounded hover:bg-blue hover:text-white">
                                                    <button name={cat._id} onClick={filter} >{cat.name}</button>
                                                </li>
                                            )
                                        })}
                                        <li className="mr-2 pl-2 pb-1 mt-1 w-full rounded hover:bg-blue hover:text-white bg-red text-white">
                                            <button name={'filterDelete'} onClick={filter} >remove category filter</button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <h2 className=" font-script text-3xl">
                            We've found {flatCount} results to your search.
                        </h2>
                    </div>

                </div>
                <div className="flex flex-wrap gap-16 mt-10 w-5/6 justify-between">
                    {/* <FlatsListItem /> */}
                    {filteredFlats &&
                        filteredFlats.map((flat) => {

                            return (
                                (
                                    <FlatsListItem key={`flat_${flat._id}`} flat={flat} />
                                    // <h3>Hallo</h3>
                                )
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default FlatsList;
