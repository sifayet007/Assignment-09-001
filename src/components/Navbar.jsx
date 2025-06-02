import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  console.log(showProfile);

  const { user, logOut } = useContext(AuthContext);
  return (
    <nav className="flex justify-between items-center w-11/12 mx-auto">
      <div className="flex items-center gap-28">
        <h1 className="font-bold text-blue-800 md:text-xl">Shobar Jonno</h1>
        <div className=" font-semibold space-x-10 md:block hidden">
          <NavLink to="/" className="hover:text-blue-600">
            Home
          </NavLink>
          <NavLink className="hover:text-blue-600">Campaigns</NavLink>
          <NavLink className="hover:text-blue-600">Donate</NavLink>
          <NavLink className="hover:text-blue-600">About</NavLink>
          <NavLink className="hover:text-blue-600">Contact</NavLink>
        </div>
      </div>
      {show && (
        <div className="flex flex-col font-semibold absolute right-5 shadow-lg py-4  bg-white  top-[5rem] md:hidden w-72 px-5 rounded-lg">
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
        {user && user.email ? (
          <div className="relative">
            <img
              onClick={() => setShowProfile(!showProfile)}
              className="w-12 h-12 rounded-full cursor-pointer"
              src={user.photoURL}
              alt=""
            />

            {showProfile && (
              <div className="absolute shadow-md p-10 right-0 top-20 text-center  bg-white">
                <figure className="flex justify-center">
                  <img
                    className="w-28 rounded-md"
                    src={user?.photoURL}
                    alt=""
                  />
                </figure>
                <h2 className="font-bold mt-5">{user?.displayName}</h2>
                <p className="font-semibold mb-5">{user?.email}</p>

                <Link
                  onClick={logOut}
                  className="font-semibold py-2 px-5 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  LogOut
                </Link>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="font-semibold py-2 px-5 flex items-center gap-2 bg-blue-700 text-white rounded-md hover:bg-blue-600"
          >
            <FaUser />
            Login / Register
          </Link>
        )}
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
