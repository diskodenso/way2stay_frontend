import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authContext } from "../Context/authContext";
import { FlatsListItem } from "./FlatsListItem";
import Loader from "./Loader";

const UserDashboard = () => {
    const navigate = useNavigate(authContext);
    const { userId, verified } = useContext(authContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [flats, setFlats] = useState(null);
    const [user, setUser] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        !verified && navigate("/login");
        const getData = async () => {
            if (verified && userId) {
                try {
                    await axios
                        .get(`${apiUrl}/users/${userId}`)
                        .then((res) => {
                            setUser(res.data);
                            const tempFav = [];
                            res.data.favorites.forEach((favorite) => {
                                axios
                                    .get(`${apiUrl}/flats/${favorite}`)
                                    .then((favRes) => {
                                        tempFav.push(favRes.data.flat);
                                        setLoading(false);
                                    })
                                    .catch((err) => console.log(err));
                            });
                            console.log(tempFav);
                            setFavorites(tempFav);
                        })
                        .catch((err) => {
                            setError(err);
                            console.log(err);
                        });
                    axios
                        .get(`${apiUrl}/flats/users/${userId}`)
                        .then((flatsRes) => {
                            setFlats(flatsRes.data.flats);
                            setLoading(false);
                        })
                        .catch((err) => {
                            setError(err);
                            setLoading(false);
                            console.log(err);
                        });
                } catch (error) {
                    setError(error);

                    console.log(error);
                }
            } else {
                setLoading(false);
            }
        };
        getData();
    }, [apiUrl, navigate, userId, verified]);

    const submitHandler = async (e) => {
        e.preventDefault();
        const {
            firstname,
            lastname,
            email,
            phone,
            postalcode,
            city,
            street,
            housenumber,
            isActive,
        } = e.target;
        let isEmailExists;
        await axios
            .get(`${apiUrl}/users`)
            .then((res) => {
                const existingEmailUser = res.data.users.find((user) => {
                    console.log(email.value);
                    console.log(user.contact.email);
                    return user.contact.email === email.value && userId !== user._id;
                });
                existingEmailUser && existingEmailUser.userId !== userId
                    ? (isEmailExists = true)
                    : (isEmailExists = false);
                isEmailExists && toast.error("Die E-Mail-Adresse existiert bereits!");
            })
            .catch((err) => {
                console.log(err);
                toast.error("Die Änderung des Profils ist fehlgeschlagen!");
                setLoading(false);
            });
        if (!isEmailExists && email.value) {
            const updatedUser = {
                firstname: firstname.value,
                lastname: lastname.value,
                email: email.value,
                phonenumber: phone.value,
                postalcode: postalcode.value,
                city: city.value,
                street: street.value,
                housenumber: housenumber.value,
                isActive: isActive.checked,
            };
            axios
                .put(`${apiUrl}/users/${userId}`, updatedUser)
                .then((res) => res.status === 200 && toast.success("Der Benutzer wurde erfolgreich geändert"))
                .catch((err) => {
                    toast.error("Die Änderung des Profils ist fehlgeschlagen!");
                    console.log(err);
                });
        }
    };

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <h2 className="text-center my-10">Bugger, an error occured!</h2>;
    }

    if (!loading && !error && verified && userId) {
        return (
            <>
                <div className='bg-[url("https://i.ibb.co/qJFwrYN/Landingpage-BG1.png")] w-full bg-no-repeat min-h-[73vh] mt-5'>
                    <div className="flex w-5/6 gap-5 m-auto md:flex-wrap lg:flex-nowrap justify-center items-start">
                        <div className="sticky w-1/3 rounded-lg p-5 my-5 shadow-lg bg-white">
                            <div className="items-center gap-5 mb-5">
                                <picture className="rounded-full w-[50px] h-[50px] bg-green"></picture>
                                <p>{user.username}</p>
                            </div>
                            <div className="flex justify-between items-center mt-8">
                                <h2>Persönliche Daten</h2>
                                {/* <button name='edit' type='button' className='border-2 border-blue rounded-md px-3 py-1 text-blue font-bold hover:bg-blue hover:text-white'>Bearbeiten</button> */}
                            </div>
                            <form onSubmit={submitHandler} className="my-5 items-stretch">
                                <input
                                    name="email"
                                    type={"email"}
                                    className="border-b-2 border-[#6b6b6b] w-full focus:outline-none my-5"
                                    placeholder="E-Mail Adresse"
                                    defaultValue={user.contact && user.contact.email}
                                    required
                                />
                                <input
                                    name="password"
                                    type={"password"}
                                    className="border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-5"
                                    placeholder="Passwort"
                                />
                                <input
                                    name="password2"
                                    type={"password"}
                                    className="border-b-2 border-[#6b6b6b] focus:outline-none w-full"
                                    placeholder="Passwort wiederholen"
                                />
                                <div
                                    name="namedetails"
                                    className="flex justify-between gap-4 items-stretch my-5"
                                >
                                    <input
                                        name="firstname"
                                        type={"text"}
                                        className="border-b-2 border-[#6b6b6b] w-1/2 focus:outline-none"
                                        placeholder="Vorname"
                                        defaultValue={user.firstname}
                                    />
                                    <input
                                        name="lastname"
                                        type={"text"}
                                        className="border-b-2 border-[#6b6b6b] w-1/2 focus:outline-none"
                                        placeholder="Nachname"
                                        defaultValue={user.lastname}
                                    />
                                </div>
                                <div
                                    name="citydetails"
                                    className="flex justify-between gap-4 my-5"
                                >
                                    <input
                                        name="postalcode"
                                        type={"number"}
                                        className="border-b-2 border-[#6b6b6b] focus:outline-none w-[4em]"
                                        placeholder="PLZ"
                                        defaultValue={user.address && user.address.postalcode}
                                        required
                                    />
                                    <input
                                        name="city"
                                        type={"text"}
                                        className="border-b-2 border-[#6b6b6b] focus:outline-none w-full"
                                        placeholder="Ort"
                                        defaultValue={user.address && user.address.city}
                                    />
                                </div>
                                <div
                                    name="addressdetails"
                                    className="flex justify-between gap-4 my-5"
                                >
                                    <input
                                        name="street"
                                        type={"text"}
                                        className="border-b-2 border-[#6b6b6b] focus:outline-none w-5/6"
                                        placeholder="Straße"
                                        defaultValue={user.address && user.address.street}
                                    />
                                    <input
                                        name="housenumber"
                                        type={"text"}
                                        className="border-b-2 border-[#6b6b6b] focus:outline-none w-1/6"
                                        placeholder="Nr."
                                        defaultValue={user.address && user.address.housenumber}
                                    />
                                </div>
                                <input
                                    name="phone"
                                    type={"tel"}
                                    className="border-b-2 border-[#6b6b6b] focus:outline-none w-full mb-3"
                                    placeholder="Mobil- / Telefonnummer"
                                    defaultValue={user.contact && user.contact.phonenumber}
                                />
                                <div className="flex items-center">
                                    <input
                                        name="isActive"
                                        type={"checkbox"}
                                        className="mr-2"
                                        defaultChecked={user.isActive}
                                    />
                                    <label htmlFor="isActive">Profil aktiv</label>
                                </div>
                                <div className="flex justify-between my-5 gap-4">
                                    <button
                                        name="reset"
                                        type="reset"
                                        className="border-2 border-red rounded-md px-3 py-1 text-red font-bold hover:bg-red hover:text-white"
                                    >
                                        Zurücksetzen
                                    </button>
                                    <button
                                        name="submit"
                                        type="submit"
                                        className="border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-white"
                                    >
                                        Speichern
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="flex flex-col w-2/3">
                            <div className=" rounded-lg p-5 my-5 shadow-lg bg-white">
                                <div>
                                    <div className="flex justify-between">
                                        <h2>Meine Wohnungen</h2>
                                        <Link
                                            to={"/flats/editor"}
                                            name="newFlat"
                                            newflat="true"
                                            className="border-2 border-green rounded-md px-3 py-1 text-green font-bold hover:bg-green hover:text-white"
                                        >
                                            neue Wohnung anlegen
                                        </Link>
                                    </div>

                                    <div className="flex gap-5 my-5 flex-wrap">
                                        {flats !== [] && flats !== null ? (
                                            <>
                                                {flats.map((flat) => {
                                                    return (
                                                        <FlatsListItem
                                                            key={`flat_${flat._id}`}
                                                            flat={flat}
                                                        />
                                                    );
                                                })}
                                            </>
                                        ) : (
                                            <h2>Du hast noch keine Wohnung angelegt!</h2>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className=" rounded-lg p-5 my-5 shadow-lg bg-white">
                                <div>
                                    <h2>Meine Favoriten</h2>
                                    <div className="flex gap-5 my-5">
                                        {favorites !== [] && favorites ? (
                                            <>
                                                {favorites.map((favorite) => {
                                                    return (
                                                        <FlatsListItem
                                                            key={`fav_${favorite._id}`}
                                                            flat={favorite}
                                                        />
                                                    );
                                                })}
                                            </>
                                        ) : (
                                            <h2>Du hast noch keine Favoriten angelegt!</h2>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default UserDashboard;
