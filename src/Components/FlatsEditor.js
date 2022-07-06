import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { authContext } from "../Context/authContext";
import SingleFlatMap from "../Components/SingleFlatMap";
import Loader from "./Loader";
import ImageList from "./ImageList";
import TimeSheetListContainer from "./TimeSheetListContainer";
import ToTopButton from "./ToTopButton";
import BookingsFlatList from "./BookingsFlatList";

const FlatsEditor = () => {
  const { flatId } = useParams();
  const { userId, verified } = useContext(authContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [flat, setFlat] = useState(null);
  const [categories, setCategories] = useState(null);
  const navigate = useNavigate();

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    !verified && navigate("/login");
    if (flatId) {
      axios
        .get(`${apiUrl}/flats/${flatId}`)
        .then((res) => {
          setFlat(res.data.flat);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
          console.log(err);
        });
    } else {
      setLoading(false);
    }
    axios
      .get(`${apiUrl}/categories`)
      .then((res) => {
        setCategories(res.data.categories);
      })
      .catch((err) => console.log(err));
  }, [apiUrl, flatId, navigate, verified]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const { title, description, street, housenumber, postalcode, city } =
      e.target;

    let flatCategories = categories.filter((category) => {
      return e.target[`${category._id}`].checked;
    });

    flatCategories &&
      (flatCategories = flatCategories.map((category) => {
        return category._id;
      }));

    if (!flatId) {
      axios
        .post(`${apiUrl}/flats`, {
          userId: userId,
          title: title.value,
          description: description.value,
          street: street.value,
          housenumber: housenumber.value,
          postalcode: postalcode.value,
          city: city.value,
          categories: flatCategories,
        })
        .then((res) => {
          toast.success("Die Wohnung wurde erfolgreich angelegt!");
          console.log(res.data);
          navigate(`/flats/editor/${res.data.flat._id}`);
        })
        .catch((err) => {
          console.log(err);
          setError(err);
        });
    } else {
      axios
        .put(`${apiUrl}/flats/${flatId}`, {
          title: title.value,
          description: description.value,
          street: street.value,
          housenumber: housenumber.value,
          postalcode: postalcode.value,
          city: city.value,
          categories: flatCategories,
        })
        .then((res) => {
          toast.success("Die Wohnung wurde erfolgreich geändert!");
        })
        .catch((err) => {
          console.log(err);
          setError(err);
        });
    }
  };

  const uploadPicture = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("file", e.target.files.files[0]);
    formData.append("upload_preset", "way2stay");

    axios
      .post(`${process.env.REACT_APP_CLOUDINARY_URL}/image/upload`, formData)
      .then((res) => {
        let pictures = [];
        flat.images && (pictures = flat.images);
        pictures.push(res.data.public_id);
        axios
          .put(`${apiUrl}/flats/${flatId}`, { images: pictures })
          .then((res) => {
            toast.success("Das Bild wurde erfolgreich hochgeladen!");
          })
          .catch((err) => {
            toast.error("Das Bild konnte nich hochgeladen werden!");
          });
      })
      .catch();
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h2 className="text-center my-10">Bugger, an error occured!</h2>;
  }

  if (!loading && flat && flatId && userId) {
    if (flat.userId !== userId) {
      return <h2 className="text-center my-10">This is NOT your flat!</h2>;
    }
  }

  if (!loading && !error && verified) {
    return (
      <>
        <ToTopButton />
        <div className=' bg-[url("https://i.ibb.co/qJFwrYN/Landingpage-BG1.png")] w-full bg-no-repeat min-h-[73vh] mt-20 pb-20'>
          <div className="w-2/3 rounded-lg p-5 shadow-lg bg-white mx-auto">
            <h2 className="font-script text-2xl mt-3">
              Information about your home
            </h2>
            <form onSubmit={submitHandler} className="my-5">
              <input
                name="title"
                type={"text"}
                className="border-b-2 border-[#6b6b6b] w-full focus:outline-none mt-5"
                placeholder="Enter a beautiful title for your home"
                defaultValue={flat && flat.title}
                required
              />
              <div
                name="citydetails"
                className="flex justify-between gap-4 my-5"
              >
                <input
                  name="postalcode"
                  type={"number"}
                  className="border-b-2 border-[#6b6b6b] focus:outline-none w-[4em] my-5"
                  placeholder="ZIP"
                  defaultValue={
                    flat && flat.location && flat.location.postalcode
                  }
                  required
                />
                <input
                  name="city"
                  type={"text"}
                  className="border-b-2 border-[#6b6b6b] focus:outline-none w-full my-5"
                  placeholder="City, Country"
                  defaultValue={flat && flat.location && flat.location.city}
                  required
                />
              </div>
              <div
                name="addressdetails"
                className="flex justify-between gap-4 my-5"
              >
                <input
                  name="street"
                  type={"text"}
                  className="border-b-2 border-[#6b6b6b] focus:outline-none w-5/6 mb-5"
                  placeholder="Street"
                  defaultValue={flat && flat.location && flat.location.street}
                  required
                />
                <input
                  name="housenumber"
                  type={"text"}
                  className="border-b-2 border-[#6b6b6b] focus:outline-none w-1/6 mb-5"
                  placeholder="No."
                  defaultValue={
                    flat && flat.location && flat.location.housenumber
                  }
                  required
                />
              </div>
              <div className="rounded-lg overflow-hidden z-30 mb-5">
                <SingleFlatMap flat={flat} />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-white"
                >
                  Update map
                </button>
              </div>
              <textarea
                name="description"
                type={"text"}
                className="border-b-2 border-[#6b6b6b] w-full focus:outline-none my-5"
                placeholder="Describe your home"
                defaultValue={flat && flat.description}
                required
              />
              <div className="flex gap-3">
                <div className="flex flex-col gap-2 mr-20 mb-5">
                  <h3 className="font-heading text-xl">Categories</h3>
                  {categories &&
                    categories.map((category) => {
                      return (
                        <div key={`cat_${category._id}`} className="flex gap-2">
                          <input
                            id={`cb_${category._id}`}
                            name={`${category._id}`}
                            type={"checkbox"}
                            defaultChecked={
                              flat &&
                              flat.details.categories &&
                              flat.details.categories.includes(category._id)
                            }
                          />
                          <label htmlFor={`${category._id}`}>
                            {category.name}
                          </label>
                        </div>
                      );
                    })}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-xl">Allowed</h3>
                  <div className="flex gap-2">
                    <input id="cbPets" name="pets" type={"checkbox"} />
                    <label htmlFor="cbPets">Pets</label>
                  </div>
                  <div className="flex gap-2">
                    <input id="cbChildren" name="pets" type={"checkbox"} />
                    <label htmlFor="cbChildren">Kids</label>
                  </div>
                </div>
              </div>
            </form>
            <hr />
            <form onSubmit={uploadPicture} className={"my-5"}>
              <div className="flex justify-between">
                <input name="files" type={"file"} accept={"image/*"} />
                <button
                  name="submit"
                  type="submit"
                  className="border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-white"
                >
                  Upload images
                </button>
              </div>
            </form>
            {flat && <ImageList flat={flat} />}
            <div>
              <>
                <h3 className="font-heading text-xl">Time Slots</h3>
                {flat && <TimeSheetListContainer flat={flat} />}
              </>
            </div>
            <div>
              <>
                <h3>Bookings</h3>
                {flat && <BookingsFlatList flat={flat} />}
              </>
            </div>
            <hr className="mt-5"/>
            <div className="flex justify-center">
              <button
                name="submit"
                type="submit"
                className="mt-5 border-2 border-green rounded-md px-5 py-1 text-green font-bold hover:bg-green hover:text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default FlatsEditor;
