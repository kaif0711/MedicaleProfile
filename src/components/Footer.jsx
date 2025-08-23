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
          <img className="mb-5 w-40" src={assets.logo2} alt="" />
          <p className="w-full md:w-2/3 text-grey-600 leading-6">
            We are dedicated to enhancing the well-being of individuals and
            communities. We believe in the power of holistic health, offering a
            comprehensive range of services designed to nurture your physical,
            mental, and emotional well-being.
          </p>
          <p className="flex items-center gap-4 text-sm font-medium text-gray-900 mt-6">
            <a href="https://maps.app.goo.gl/HCixc2wvmvJSr1kY6">
              <img src={assets.loc_icon} alt="" className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/mansuri-clinic/">
              <img src={assets.linkdin_icon} alt="" />
            </a>
            <a href="mailto:Mansuriconsultancy30@gmail.com">
              <img src={assets.mail_icon} alt="" />
            </a>
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
            <li>
              &#x1F4DE; <a href="tel:+919904759466">+91 9904759466</a> <br />
              &#x1F4DE; <a href="tel:+919824720770">+91 9824720770</a>
            </li>
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
