import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="flex justify-between items-center w-11/12 mx-auto">
      <h1 className="font-bold text-blue-800 md:text-xl">
        Winter Clothing <br />
        <span className="flex float-end text-red-700 "> Donation .</span>
      </h1>
      <div className=" font-semibold space-x-10 md:block hidden">
        <NavLink to="/" className="">
          Home
        </NavLink>
        <NavLink>Campaigns</NavLink>
        <NavLink>Donate</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
      </div>
      {show && (
        <div className="flex flex-col font-semibold absolute right-5 shadow-lg py-4   top-[5rem] md:hidden w-72 px-5 rounded-lg">
          <NavLink
            to="/"
            className="  flex justify-start items-center gap-4 font-semibold py-2 pl-5  hover:text-white rounded-md hover:bg-blue-600"
          >
            Home
          </NavLink>
          <NavLink className="  flex justify-start items-center gap-4 font-semibold py-2 pl-5  hover:text-white rounded-md hover:bg-blue-600">
            Campaigns
          </NavLink>
          <NavLink className="  flex justify-start items-center gap-4 font-semibold py-2 pl-5  hover:text-white rounded-md hover:bg-blue-600">
            Donate
          </NavLink>
          <NavLink className="  flex justify-start items-center gap-4 font-semibold py-2 pl-5  hover:text-white rounded-md hover:bg-blue-600">
            About
          </NavLink>
          <NavLink className="  flex justify-start items-center gap-4 font-semibold py-2 pl-5  hover:text-white rounded-md hover:bg-blue-600">
            Contact
          </NavLink>
        </div>
      )}
      <div className="flex justify-center items-center space-x-3">
        <Link
          to="/login"
          className="font-semibold py-2 px-5 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Login
        </Link>
        <div className="">
          {!show ? (
            <span
              onClick={() => setShow(!show)}
              className="md:hidden block duration-300"
            >
              <GiHamburgerMenu className="text-xl" />
            </span>
          ) : (
            <span onClick={() => setShow(!show)} className="md:hidden block ">
              <RxCross1 className="text-xl" />
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
