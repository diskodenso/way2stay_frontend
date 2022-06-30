import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { authContext } from "../Context/authContext";
import Loader from "./Loader";

const FlatsEditor = ({ newFlat, flatId }) => {
    const { userId, verified } = useContext(authContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [flat, setFlat] = useState(null);
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        if (!newFlat) {
            axios
                .get(`${apiUrl}/flats/${flatId}`)
                .then(res => {
                    setLoading(false);
                    console.log(res.data);
                })
                .catch(err => {
                    setLoading(false)
                    console.log(err);
                })
        } else {
            setLoading(false);
        }

    }, [apiUrl, flatId, newFlat])


    const submitHandler = async () => {

    }

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return (
            <h2 className='text-center my-10'>Bugger, an error occured!</h2>
        );
    }

    if (!loading && !error && (newFlat || verified)) {
        return (
            <>
                <div className='w-2/3 border rounded-lg p-5 my-5 shadow-lg border-[#b9b9b9] bg-white mx-auto'>
                    <div className='items-center gap-5 mb-5'>
                        <picture className='rounded-full w-[50px] h-[50px] bg-green'>

                        </picture>
                    </div>
                    <div className='flex justify-between items-center mt-8'>
                        <h2>Daten</h2>
                    </div>
                    <form onSubmit={submitHandler} className='my-5 items-stretch'>
                        <input name="title" type={'text'} className='border-b-2 border-[#6b6b6b] w-full focus:outline-none my-5' placeholder='Titel der Wohnung' defaultValue={''} required />
                        <textarea name="description" type={'text'} className='border-b-2 border-[#6b6b6b] w-full focus:outline-none my-5' placeholder='Beschreibung der Wohnung' defaultValue={''} required />
                        <div className="flex gap">
                            <div className="flex flex-col gap-2">
                            <h3>Kategorien</h3>
                                <div className="flex gap-2">
                                    <input id="cbCat1" name="pets" type={'checkbox'} />
                                    <label htmlFor="cbCat1">Kategorie 1</label>
                                </div>
                                <div className="flex gap-2">
                                    <input id="cbCat2" name="pets" type={'checkbox'} />
                                    <label htmlFor="cbCat2">Kategorie 2</label>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                            <h3>Details</h3>
                                <div className="flex gap-2">
                                    <input id="cbPets" name="pets" type={'checkbox'} />
                                    <label htmlFor="cbPets">Haustiere</label>
                                </div>
                                <div className="flex gap-2">
                                    <input id="cbChildren" name="pets" type={'checkbox'} />
                                    <label htmlFor="cbChildren">Kinder</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <input name='email' type={'email'} className='border-b-2 border-[#6b6b6b] w-full focus:outline-none my-5' placeholder='E-Mail Adresse' defaultValue={''} required /> */}
            </>
        )
    }
}

export default FlatsEditor