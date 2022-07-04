import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { authContext } from "../Context/authContext";
import Loader from "./Loader";
import { Link, useNavigate } from "react-router-dom";

// erstelle booking
// verified - wenn verified checken ob flatID existiert und wenn ja dann booking
// create a booking - check ob flatId existiert
const Booking = ({ flat }) => {
  const [bookings, setBookings] = useState(null);
  const { userId, user, verified } = useContext(authContext);
  const apiUrl = process.env.REACT_APP_API_URL;
  const [error, isError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMatch, setIsMatch] = useState(false);
  const navigate = useNavigate(authContext);

  useEffect(() => {
    !verified && navigate(`{apiUrl}`);
  }, [verified]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h3>Oh no, an error occured</h3>;
  }
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
              <Link
                to={"/flats/62bb072dd491a11505c2148f"}
                className="border-2 border-green rounded-md px-3 py-2 text-green font-bold hover:bg-green hover:text-white"
              >
                Book now!
              </Link>
              <h2>Buche dein neues Zuhause</h2>
            </div>
            <form onSubmit={submitHandler} className="my-5 items-stretch">
              <input
                name="arrival"
                type={"arrival"}
                className="border-b-2 border-[#6b6b6b] w-full focus:outline-none my-5"
                placeholder="E-Mail Adresse"
                defaultValue={user.contact && user.contact.email}
                required
              />
              <input
                name="departure"
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
        </div>
      </div>
    </>
  );
};

export default Booking;
