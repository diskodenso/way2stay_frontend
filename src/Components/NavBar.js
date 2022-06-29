import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../Context/authContext";
import Button from "./Button";

const NavBar = () => {
  const { verified } = useContext(authContext);

  return (
    <div className="p-4 shadow-md bg-[#f1f5ee]">
      <div className="flex justify-between text-red items-center">
        <div>
          <img src="https://i.ibb.co/F7Gs6b1/Logo-S.png" className="h-10 w-10" alt="Logo"></img>
        </div>
        <div>
          <NavLink to={"/"} className={"active:font-bold mx-5 text-blue font-bold hover:text-lightblue"}>
            Home
          </NavLink>
          <NavLink to={"/faq"} className={"active:font-bold text-blue font-bold hover:text-lightblue"}>
            FAQ's
          </NavLink>
          {!verified ? (
            <>
              <Button
                link={"/signup"}
                value={"Sign Up"}
                classes={
                  "mx-5 bg-opacity-0 border-2 border-lightblue rounded-md px-3 py-1 text-lightblue font-bold hover:bg-lightblue hover:text-[#f1f5ee]"
                }
              />
              <Button
                link={"/login"}
                value={"Login"}
                classes={
                  "bg-opacity-0 border-2 border-lightblue rounded-md px-3 py-1 text-lightblue font-bold hover:bg-lightblue hover:text-[#f1f5ee]"
                }
              />
            </>
          ) : (
            <Button
                link={"/logout"}
                value={"Log Out"}
                classes={
                  "bg-opacity-0 border-2 border-lightblue rounded-md px-3 py-1 text-lightblue font-bold hover:bg-lightblue hover:text-[#f1f5ee]"
                }
              />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
