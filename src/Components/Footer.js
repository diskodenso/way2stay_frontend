import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="z-50 p-4 bg-[#f1f5ee] shadow-2xl md:flex md:items-center md:justify-between md:p-6">
      <span className="ml-5 text-sm text-gray-500 sm:text-center">
        <div className="flex mb-5">
          <img
            src="https://i.ibb.co/F7Gs6b1/Logo-S.png"
            className="mr-3 h-10 w-10"
            alt="Logo"
          ></img>
          <h1 className="font-script text-4xl">way2stay</h1>
        </div>
        © 2022{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          way2stay
        </a>{" "}
        • All Rights Reserved
      </span>

    <div className="flex gap-40 mr-80">
      <div>
        <ul>
          <li>
            <Link to={"/"} className="hover:underline">
              How 2 use
            </Link>
          </li>
          <li>
            <Link to={"/"} className="hover:underline">
              FAQ
            </Link>
          </li>
          <li>
            <Link to={"/"} className="hover:underline">
              Contact
            </Link>
          </li>
          <li>
            <Link to={"/"} className="hover:underline">
              Partnerships
            </Link>
          </li>
          <li>
            <Link to={"/"} className="hover:underline">
              Featured
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <Link to={"/"} className="hover:underline">
              Careers
            </Link>
          </li>
          <li>
            <Link to={"/"} className="hover:underline">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to={"/"} className="hover:underline">
              Cookies
            </Link>
          </li>
          <li>
            <Link to={"/"} className="hover:underline">
              Terms
            </Link>
          </li>
        </ul>
      </div>
      </div>

      <div className="mr-40">
        <div className="mb-5 font-heading text-xl">Follow us on:</div>
        <div className="text-2xl">
          <a href="https://facebook.com/" target="_blank">
            <i className="mr-2 text-blue hover:text-green fa fa-facebook"></i>
          </a>
          <a href="https://twitter.com/" target="_blank">
            <i className="mx-2 text-lightblue hover:text-green fa fa-twitter"></i>
          </a>
          <a href="https://instagram.com/" target="_blank">
            <i className="mx-2 text-red hover:text-green fa fa-instagram"></i>
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <i className="mx-2 text-blue hover:text-green fa fa-linkedin"></i>
          </a>
          <a href="https://github.com/" target="_blank">
            <i className="ml-2 text-[#505050] hover:text-green fa fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
