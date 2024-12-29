import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { FaRegUser, FaPhoneSquare } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { TiArrowLeftThick } from "react-icons/ti";
import axios from 'axios'
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { GiPadlock } from "react-icons/gi";

const Registration = () => {
  const navigate = useNavigate();

  const handleRegister = async (e) =>{
    e.preventDefault();
    const { email, name, tel, pwd} = e.target
    const data = {
      email: email.value,
      username:  name.value,
      phonenumber: tel.value,
      password: pwd.value
    }
    try {
      const res = await axios.post(`${backendUrl}/user/register`, data)
      const response = res.data

      if(response.success){
        localStorage.setItem("token",response.token)
        toast.success("Account created")
        navigate('/')
      }
    } catch (error) {
      console.log("Error", error)
      toast.error(error.response.data.message)
    }
  }

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-slate-100">
      {/* Left Section with Image */}
      <div className="relative hidden md:block w-1/2 h-full">
        <img
          src="https://i.pinimg.com/736x/a4/96/07/a49607da3c9b74424fcf35c9b7456ed2.jpg"
          alt="DSAIC"
          className="object-cover w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      </div>

      {/* Right Section with Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-4">
        <div className="w-full mb-10">
          <button
            onClick={() => navigate("/")}
            className="md:absolute top-4 left-4 mb-4 flex items-center gap-2 px-4 py-2 bg-lightGreen text-white font-medium rounded shadow-lg hover:bg-gray-800"
          >
            <TiArrowLeftThick size={20} />
            Go Back
          </button>
        </div>

        <div className="mb-6 text-start">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">
            Get Registered  🎉
          </h1>
          <p className="text-gray-500">
            Join us for <span className="font-extrabold text-gray-800">Ksh 200</span> to access exclusive certificates and hackathons!
          </p>
        </div>

        <form onSubmit={handleRegister} className="w-full md:px-12 rounded-lg">
          {/* Full Name */}
          <div className="w-full p-2">
            <label className="font-bold text-gray-800 mb-1 block" htmlFor="name">
              Username
            </label>
            <div className="border-2 border-lightGreen flex items-center rounded h-12">
              <FaRegUser className="h-full w-fit p-2 text-lightGreen" />
              <input
                type="text"
                className="border-none outline-none w-full px-2 h-full bg-transparent font-semibold"
                placeholder="Ex: John Doe"
                name="name"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="w-full p-2">
            <label className="font-bold text-gray-800 mb-1 block" htmlFor="email">
              Email Address
            </label>
            <div className="border-2 border-lightGreen flex items-center rounded h-12">
              <MdMarkEmailUnread className="h-full w-fit p-2 text-lightGreen" />
              <input
                type="email"
                name="email"
                className="border-none outline-none w-full px-2 h-full bg-transparent font-semibold"
                placeholder="Ex: johndoe@gmail.com"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="w-full p-2">
            <label className="font-bold text-gray-800 mb-1 block" htmlFor="phone">
              Phone Number
            </label>
            <div className="border-2 border-lightGreen flex items-center rounded h-12">
              <FaPhoneSquare className="h-full w-fit p-2 text-lightGreen" />
              <input
                type="tel"
                name="tel"
                className="border-none outline-none w-full px-2 h-full bg-transparent font-semibold"
                placeholder="Ex: +254712345678"
              />
            </div>
          </div>
          {/* Password  */}
          <div className="w-full p-2">
              <label htmlFor=" " className="font-bold mb-3 text-gray-800">Password</label>
              <div className="border-2 border-lightGreen flex items-center rounded h-12">
                <GiPadlock className="h-full w-fit p-2 text-lightGreen"/>
                <input required className="border-none outline-none w-full pl-2 h-full bg-transparent font-semibold" type="password" name="pwd" placeholder="Ex: Secret123" />
              </div>
          </div>

          {/* Terms & Conditions */}
          <div className="mb-4 flex items-center gap-2">
            <input type="checkbox" required className="accent-lightGreen" />
            <p className="text-gray-500 text-sm font-semibold">
              I agree with Terms & Conditions
            </p>
          </div>

          {/* Register Button */}
          <button className="w-full h-12 bg-lightGreen font-semibold text-lg flex justify-center items-center gap-2 text-white rounded hover:bg-darkGreen">
            Register
          </button>
        </form>

        <p className="mt-4 text-sm">
          Already have an account?
          <a href="/auth/login" className="text-lightGreen ml-2 font-bold underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Registration;
