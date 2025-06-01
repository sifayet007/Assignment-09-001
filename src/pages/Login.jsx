import { useContext, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { loginUser, setUser } = useContext(AuthContext);
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const handelLoginFrom = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log("Email:", email, "Password:", password);
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        const err = error.message;
        console.log(err);
      });
  };
  return (
    <div className="md:flex">
      <div className="hidden w-full md:flex justify-center items-center h-screen bg-blue-900">
        <h1 className="font-bold text-white lg:text-5xl md:text-3xl ">
          Winter Clothing <br />
          <span className="flex float-end text-red-700 "> Donation .</span>
        </h1>
      </div>
      <div className="w-full h-screen flex justify-center items-center px-10">
        <div className="rounded-lg shadow-lg ">
          <h1 className="lg:text-4xl md:text-2xl font-bold  py-8 px-10 bg-gradient-to-r from-blue-600 rounded-t-lg to-purple-600 to-80% text-white">
            Login your account
          </h1>
          <form onSubmit={handelLoginFrom} action="" className="">
            <div className="mt-8 px-5">
              <input
                className="py-[14px] pl-[14px] rounded-full border-2 w-full focus:outline-none"
                type="email"
                name="email"
                required
                placeholder="Email adders"
                id="email"
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
                id="password"
              />
            </div>
            <div className="flex justify-between px-5 mt-3">
              <div className="space-x-3">
                <input type="checkbox" name="" id="" />
                <span>Remember me</span>
              </div>
              <button className="hover:underline">Forget password</button>
            </div>

            <div className="px-5">
              <button className="bg-gradient-to-r  from-blue-600 w-full py-[14px] mt-10 rounded-full text-white font-bold to-purple-600 to-80% ">
                Login
              </button>
            </div>
          </form>
          <div className="flex justify-center my-5">
            <p>
              Not a member?{" "}
              <Link to="/register" className="text-red-500 underline font-bold">
                Register now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
