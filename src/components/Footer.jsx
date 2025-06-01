import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { LuLockKeyhole } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="py-[50px] bg-blue-900 mt-10">
      <div className="md:py-3 py-1 lg:px-44 md:px-10 flex gap-5 md:flex-row flex-col justify-center md:mx-32 items-center  bg-white rounded-xl">
        <p className="md:text-xl ">
          The most Powerful way to positively impact the lives of others
        </p>
        <a
          className="font-semibold py-2 md:px-5 px-2 flex items-center gap-2 bg-blue-700 text-white rounded-md hover:bg-blue-600"
          href="#donate"
        >
          Donate Naw
        </a>
      </div>
      <div className="mt-20">
        <div className="lg:flex justify-around">
          <div className="flex justify-center gap-20">
            <div className="space-y-4 flex flex-col *:text-white">
              <h1 className="font-bold">About Us</h1>
              <span>Our Story</span>
              <span>our Mission & Vision</span>
              <span>Our care Value</span>
              <span>Out Impact</span>
              <span>Contact Us</span>
            </div>
            <div className="space-y-4 flex flex-col *:text-white">
              <h1 className="font-bold">Our Programs</h1>
              <span>Health care</span>
              <span>Education Vision</span>
              <span>Hunger relief</span>
              <span>Economic Developments</span>
            </div>
          </div>
          <div className="px-6 py-10 bg-blue-800 bg-opacity-50 shadow-xl rounded-lg">
            <h1 className="text-white text-xl">
              Stay Connect with Winter Clothing Donation
            </h1>
            <form className="mt-7" action="">
              <div>
                <div className="space-x-5 flex">
                  <input
                    className="py-[14px] pl-[14px] w-full rounded-md bg-blue-400 bg-opacity-50 text-white  focus:outline-none"
                    type="text"
                    name=""
                    required
                    placeholder="Firs Name"
                    id=""
                  />
                  <input
                    className="py-[14px] pl-[14px] rounded-md bg-blue-400 bg-opacity-50 w-full text-white  focus:outline-none"
                    type="text"
                    name=""
                    required
                    placeholder="Firs Name"
                    id=""
                  />
                </div>
                <div>
                  <textarea
                    className="pl-[14px] mt-5 py-2 rounded-md bg-blue-400 bg-opacity-50 w-full text-white  focus:outline-none"
                    name=""
                    id=""
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="mt-[30px] flex">
                  <input
                    className="py-[14px] pl-[14px] rounded-l-md bg-blue-400 bg-opacity-50 w-full text-white  focus:outline-none"
                    type="text"
                    name=""
                    required
                    placeholder="Email adders"
                    id=""
                  />
                  <button className="py-[14px] bg-orange-600 px-6 rounded-r-md">
                    Submit
                  </button>
                </div>
                <p className="flex gap-5 text-white mt-5 items-center">
                  <span>
                    <LuLockKeyhole />
                  </span>
                  This site is protected by reCAPTCHA and the Goggle Privacy
                  Policy and Term of Service apply
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr className="my-10" />
      <div className="flex justify-between md:px-28 px-5 *:text-white">
        <h1 className="font-bold text-white md:text-xl">
          Winter Clothing <br />
          <span className="flex float-end text-red-700 "> Donation .</span>
        </h1>
        <div className="flex items-center gap-4 *:cursor-pointer ">
          <span>
            <FaXTwitter />
          </span>
          <span>
            <FaYoutube />
          </span>
          <span>
            <FaLinkedin />
          </span>
          <span>
            <FaFacebook />
          </span>
          <span>
            <FaInstagram />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
