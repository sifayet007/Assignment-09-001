import React, { useContext, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const [show, setShow] = useState(true);
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelRegisterFrom = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(
      "Name:",
      name,
      "PhotoURl:",
      photo,
      "Email:",
      email,
      "Password:",
      password
    );
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...result.user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch(() => {});
      })

      .catch((err) => {
        const error = err.message;
        const errorcode = err.code;
        console.log(error);
        console.log(errorcode);
      });
  };

  return (
    <div className="md:flex">
      <div className="w-full h-screen flex justify-center items-center px-10">
        <div className="rounded-lg shadow-lg ">
          <h1 className="lg:text-4xl md:text-2xl font-bold  py-8 px-10 bg-gradient-to-r from-blue-600 rounded-t-lg to-purple-600 to-80% text-white">
            Register your account
          </h1>
          <form onSubmit={handelRegisterFrom} action="" className="">
            <div className="mt-8 px-5">
              <input
                className="py-[14px] pl-[14px] rounded-full border-2 w-full focus:outline-none"
                type="text"
                name="name"
                required
                placeholder="Your Name"
                id=""
              />
            </div>
            <div className="mt-8 px-5">
              <input
                className="py-[14px] pl-[14px] rounded-full border-2 w-full focus:outline-none"
                type="text"
                name="photo"
                required
                placeholder="Photo Url"
                id=""
              />
            </div>
            <div className="mt-8 px-5">
              <input
                className="py-[14px] pl-[14px] rounded-full border-2 w-full focus:outline-none"
                type="email"
                name="email"
                required
                placeholder="Email adders"
                id=""
              />
            </div>
            <div className="flex flex-col mt-5 px-5 relative">
              <span
                className=" absolute right-10 top-5 "
                onClick={() => setShow(!show)}
              >
                {show ? <IoMdEyeOff /> : <IoMdEye />}
              </span>
              <input
                className="py-[14px] pl-[14px]  focus:outline-none w-full border-2 rounded-full"
                type={show ? "password" : "text"}
                name="password"
                required
                placeholder="Password"
                id=""
              />
            </div>

            <div className="px-5">
              <button className="bg-gradient-to-r  from-blue-600 w-full py-[14px] mt-10 rounded-full text-white font-bold to-purple-600 to-80% ">
                Register
              </button>
            </div>
          </form>
          <div className="flex justify-center my-5">
            <p>
              Already have an account ?
              <Link to="/login" className="text-red-500 underline font-bold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="hidden w-full md:flex justify-center items-center h-screen bg-blue-900">
        <h1 className="font-bold text-white lg:text-5xl md:text-3xl ">
          Winter Clothing <br />
          <span className="flex float-end text-red-700 "> Donation .</span>
        </h1>
      </div>
    </div>
  );
};

export default Register;
