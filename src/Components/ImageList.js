import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authContext } from "../Context/authContext";
import { CloudinaryShow } from "./CloudinaryShow"
import Loader from "./Loader";

const ImageList = ({ flat }) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const { userId } = useContext(authContext);
    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);

    const [isOwner, setIsOwner] = useState(true);

    useEffect(() => {
        setImages(flat.images);
        userId === flat.userId ? setIsOwner(true) : setIsOwner(false);
        setLoading(false);
    }, [flat.images, flat.userId, userId]);

    const deleteHandler = (e, image) => {
        e.preventDefault();

        const imageIndex = images.findIndex(iteration => (iteration === image));
        console.log(imageIndex);
        let newImageArray = [];
        images.length > 1 ? newImageArray = images.splice(imageIndex, 1) : newImageArray = [];
        console.log(newImageArray);
        axios
            .put(`${apiUrl}/flats/${flat._id}`, {
                images: newImageArray
            })
            .then(res => {
                console.log(res.data);
                (res.status === 200) && toast.success('Das Bild wurde erfolgreich gelöscht!')

            })
            .catch(err => {
                setError(err);
                setLoading(false)
            });
    }

    (loading && images !== []) && <Loader />

    return (
        <>
            <div className="flex flex-between gap-4 h-auto ">
                {
                    images.map(image => {
                        return (
                            <div key={`image_${image}`} className="flex flex-col h-auto w-1/3">
                                <div className="rounded-lg overflow-hidden bg-lightblue my-5 shadow-lg">
                                    {
                                        isOwner && (
                                            <button
                                                type="button"
                                                onClick={e => deleteHandler(e, image)}
                                                className='absolute rounded-full w-8 h-8 m-3 bg-white shadow-inner'
                                            >
                                                <i className="fas fa-trash-alt" />
                                            </button>
                                        )
                                    }
                                    <CloudinaryShow publicId={image} />
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </>
    )
}

export default ImageList