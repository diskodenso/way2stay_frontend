import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { authContext } from "../Context/authContext";
import Loader from "./Loader";

const FlatsEditor = () => {
    const { flatId } = useParams();
    const { userId, verified } = useContext(authContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [flat, setFlat] = useState(null);
    const navigate = useNavigate();

    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        (!verified) && navigate('/login');
        console.log(flatId);
        if (flatId) {
            axios
                .get(`${apiUrl}/flats/${flatId}`)
                .then(res => {
                    setFlat(res.data.flat)
                    setLoading(false);
                })
                .catch(err => {
                    setLoading(false);
                    setError(err);
                    console.log(err);
                })
        } else {
            setLoading(false);
        }

    }, [apiUrl, flatId, navigate, verified])


    const submitHandler = async (e) => {
        e.preventDefault();
        const { title, description, street, housenumber, postalcode, city } = e.target;
        if (!flatId) {
            axios
                .post(`${apiUrl}/flats`, {
                    userId: userId,
                    title: title.value,
                    description: description.value,
                    street: street.value,
                    housenumber: housenumber.value,
                    postalcode: postalcode.value,
                    city: city.value
                })
                .then(res => {
                    console.log(res.data.flat);
                    toast.success('Die Wohnung wurde erfolgreich angelegt!');
                    navigate(`/flats/editor/${res.data.flat._id}`);
                })
                .catch(err => {
                    console.log(err);
                    setError(err);
                });
        } else {
            axios
                .put(`${apiUrl}/flats/${flatId}`, {
                    userId: userId,
                    title: title.value,
                    description: description.value,
                    street: street.value,
                    housenumber: housenumber.value,
                    postalcode: postalcode.value,
                    city: city.value
                })
                .then(res => {
                    console.log(res.data.flat);
                    toast.success('Die Wohnung wurde erfolgreich geändert!');
                })
                .catch(err => {
                    console.log(err);
                    setError(err);
                });

        }
    }

    if (loading) { return <Loader />; }

    if (error) {
        return (<h2 className='text-center my-10'>Bugger, an error occured!</h2>);
    }

    if (!loading && flat && flatId && userId) {
        console.log(flat.userId);
        if (flat.userId !== userId) {
            return (<h2 className='text-center my-10'>This is NOT your flat!</h2>)
        }
    }

    if (!loading && !error && verified) {
        console.log(flat);
        return (
            <>
                <div className=' bg-[url("https://i.ibb.co/qJFwrYN/Landingpage-BG1.png")] w-full bg-no-repeat min-h-[73vh] mt-20'>
                    <ToastContainer />
                    <div className='w-2/3 border rounded-lg p-5 shadow-lg border-[#b9b9b9] bg-white mx-auto'>
                        <div className='items-center gap-5 mb-5'>
                            <picture className='rounded-full w-[50px] h-[50px] bg-green'>

                            </picture>
                        </div>
                        <div className='flex justify-between items-center mt-8'>
                            <h2>Daten</h2>
                        </div>
                        <form onSubmit={submitHandler} className='my-5 items-stretch'>
                            <input
                                name="title"
                                type={'text'}
                                className='border-b-2 border-[#6b6b6b] w-full focus:outline-none my-5'
                                placeholder='Titel der Wohnung'
                                defaultValue={(flat) && flat.title}
                                required
                            />
                            <div name='citydetails' className='flex justify-between gap-4 my-5'>
                                <input
                                    name='postalcode'
                                    type={'number'}
                                    className='border-b-2 border-[#6b6b6b] focus:outline-none w-[4em]'
                                    placeholder='PLZ'
                                    defaultValue={flat && flat.location.postalcode}
                                    required
                                />
                                <input
                                    name='city'
                                    type={'text'}
                                    className='border-b-2 border-[#6b6b6b] focus:outline-none w-full'
                                    placeholder='Ort'
                                    defaultValue={flat && flat.location.city}
                                    required
                                />
                            </div>
                            <div name='addressdetails' className='flex justify-between gap-4 my-5'>
                                <input
                                    name='street'
                                    type={'text'}
                                    className='border-b-2 border-[#6b6b6b] focus:outline-none w-5/6'
                                    placeholder='Straße'
                                    defaultValue={flat && flat.location.street}
                                    required
                                />
                                <input
                                    name='housenumber'
                                    type={'text'}
                                    className='border-b-2 border-[#6b6b6b] focus:outline-none w-1/6'
                                    placeholder='Nr.'
                                    defaultValue={flat && flat.location.housenumber}
                                    required
                                />
                            </div>
                            <h4 className="font-script bg-blue text-2xl">Hier kommt eine Map hin!</h4>
                            <textarea
                                name="description"
                                type={'text'}
                                className='border-b-2 border-[#6b6b6b] w-full focus:outline-none my-5'
                                placeholder='Beschreibung der Wohnung'
                                defaultValue={flat && flat.description}
                                required
                            />
                            <div className="flex gap-3">
                                <div className="flex flex-col gap-2">
                                    <h3>Kategorien</h3>
                                    <div className="flex gap-2">
                                        <input id="cbCat1" name="pets" type={'checkbox'} />
                                        <label htmlFor="cbCat1">Kategorie 1 Dynamically</label>
                                    </div>
                                    <div className="flex gap-2">
                                        <input id="cbCat2" name="pets" type={'checkbox'} />
                                        <label htmlFor="cbCat2">Kategorie 2 Dynamically</label>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3>Details</h3>
                                    <div className="flex gap-2">
                                        <input id="cbPets" name="pets" type={'checkbox'} />
                                        <label htmlFor="cbPets">Haustiere Dynamically</label>
                                    </div>
                                    <div className="flex gap-2">
                                        <input id="cbChildren" name="pets" type={'checkbox'} />
                                        <label htmlFor="cbChildren">Kinder Dynamically</label>
                                    </div>
                                </div>
                            </div>
                            <button
                                name='submit'
                                type='submit'
                                className='border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-white'
                            >
                                Speichern
                            </button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default FlatsEditor