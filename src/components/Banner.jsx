import { LuLockKeyhole } from "react-icons/lu";
import banner2 from "../assets/blanket-distribution-rangpur-10.jpg";
import { useState } from "react";
import toast from "react-hot-toast";

const Banner = () => {
  const [total, setTotal] = useState(0);
  const [input, setInput] = useState("");
  const donationAmountHandel = (e) => {
    e.preventDefault();

    const amount = parseFloat(input);
    console.log(typeof amount);

    if (!isNaN(amount) && amount > 0) {
      setTotal(amount + total);
      setInput("");
      toast.success("Thanks donate success");
    }
  };

  return (
    <section id="donate" className="mt-28 mb-10 lg:px-28 md:px-12 px-5">
      <h1 className="lg:text-5xl md:text-3xl text-2xl leading-normal font-bold">
        Serving the Underserved <br /> Individual to Community
      </h1>
      <div className="lg:flex gap-10  ">
        <div className="flex items-center gap-5 md:gap-10">
          <div>
            <img
              className=" md:w-[303px] lg:h-[345px] md:h-[300px] w-[250px] h-[250px] rounded-lg"
              src={banner2}
              alt=""
            />
          </div>
          <div>
            <p>
              Welcome to the CNK Foundation, where we empower underserved,
              <br />
              vulnerable, and special needs populations to change their world.
              <br />
              Join us in creating a more inclusive and equitable society.
            </p>
            <button className="text-green-500 py-2 px-6 border-2 border-green-500 rounded-full mt-10">
              Donate naw
            </button>
          </div>
        </div>
        <div className="px-6 py-10  shadow-xl rounded-md">
          <div className="text-center">
            <p className="font-semibold text-xl">Your Donation</p>
            <h1 className=" text-xl">{total} Tk</h1>
          </div>
          <form className="mt-7" onSubmit={donationAmountHandel} action="">
            <div>
              <div className="space-x-5 flex">
                <div className="w-full">
                  <input
                    className="py-[14px] pl-[14px] rounded-md bg-slate-200  w-full  focus:outline-none"
                    type="text"
                    name="firstName"
                    required
                    placeholder="Your full name"
                    id=""
                  />
                </div>
                <div className="w-full">
                  <select
                    className="py-[14px] px-5 rounded-md bg-slate-200   focus:outline-none w-full"
                    name=""
                    id=""
                  >
                    <option value="">Select division</option>
                    <option value="">Sylhet</option>
                    <option value="">Dhaka</option>
                    <option value="">Rangpur</option>
                    <option value="">Barosl</option>
                    <option value="">Chittagong</option>
                    <option value="">Noakhli</option>
                  </select>
                </div>
              </div>

              <div className="mt-[30px] flex">
                <input
                  className="py-[14px] pl-[14px] rounded-md bg-slate-200  w-full  focus:outline-none"
                  type="email"
                  name="email"
                  required
                  placeholder="Email adders"
                  id=""
                />
              </div>
              <div className="mt-[30px] flex">
                <input
                  onChange={(e) => setInput(e.target.value)}
                  className="py-[14px] pl-[14px] rounded-md bg-slate-200  w-full  focus:outline-none"
                  type="text"
                  name="amount"
                  value={input}
                  required
                  placeholder="Amount"
                  id=""
                />
              </div>
              <button className="text-orange-500 py-2 px-6 border-2 border-orange-500 rounded-full mt-10">
                Donate naw
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Banner;
