import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Cards = ({ donateCard }) => {
  console.log(donateCard);
  const { title, image, division, contactInfo, description } = donateCard;
  useEffect(() => {
    Aos.init({
      duration: 300,
      once: true,
    });
  }, []);

  return (
    <div data-aos="fade-up" className="shadow-md rounded-xl">
      <img className="h-80 w-full rounded-t-xl" src={image} alt="" />
      <div className="p-5">
        <div className="flex justify-between items-center mt-6">
          <h2 className="text-2xl font-bold ">{title}</h2>
          <span className="bg-blue-400 bg-opacity-40 px-4 rounded-full font-semibold py-1 text-blue-900">
            {division}
          </span>
        </div>
        <p className="text-gray-600 mt-3">{description}</p>
        <div className="flex justify-between items-center mt-5">
          <p>{contactInfo}</p>
          <a
            className="font-semibold py-2 md:px-5 px-2 flex items-center gap-2 bg-blue-700 text-white rounded-md hover:bg-blue-600"
            href="#donate"
          >
            Donate Naw
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
