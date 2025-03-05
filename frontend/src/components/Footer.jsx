import React from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ------left section------- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-grey-600 leading-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
            architecto maxime, possimus quas placeat tenetur labore veniam ea
            explicabo esse.
          </p>
        </div>
        {/* ------center section------- */}
        <div>
          <p className="text-xl font-medium mb-5">Option</p>
          <ul className="flex  flex-col gap-2 text-gray-600">
            <NavLink to="/">
              <li className="py-1">Home</li>
            </NavLink>
            <NavLink to="/about">
              <li className="py-1">About</li>
            </NavLink>
          </ul>
        </div>
        {/* ------right section------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex  flex-col gap-2 text-gray-600">
            <li>Phone : <br /> 9904759466 <br />9824720770</li>   
          </ul>
        </div>
      </div>
      {/* -------copytag------- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
