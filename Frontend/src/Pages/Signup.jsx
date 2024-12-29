import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { TiArrowLeftThick } from "react-icons/ti";
import { MdArrowForwardIos, MdAttachEmail } from "react-icons/md";
import { FaCircleUser, FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { GiPadlock } from "react-icons/gi";

function SignupPage() {
  const nav = useNavigate();

  return (
  <div>
 
    <div className="flex flex-col md:flex-row h-screen w-full">

      <div className="relative md:block hidden w-full md:w-1/2 h-1/3 md:h-full bg-gray-200">
        <img
          src="https://i.pinimg.com/736x/a4/96/07/a49607da3c9b74424fcf35c9b7456ed2.jpg"
          alt="DSAIC"
          className="object-cover w-full h-full"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black z-10 bg-opacity-50"></div>
   
        
      </div>

      <div className="w-full md:w-2/3 h-fit md:h-full flex flex-col justify-center items-center p-4 bg-white">

       <div className="w-full mb-4 flex items-center h-fit p-3">
        <button
            className="md:absolute  md:top-4 mb-4 left-4 px-4 py-2 z-50 bg-lightGreen md:flex flex justify-center items-center gap-2 text-lg text-white font-medium rounded shadow-2xl transition-all duration-150 hover:bg-gray-800"
            onClick={() => nav("/")}
          >
            <TiArrowLeftThick size={20}/>
            Go Back
          </button>
       </div>

        <div className="mb-2 w-full max-w-md text-start">
          <h1 className="text-2xl text-gray-800 font-bold mb-3">
            Create your Account 🎉
          </h1>
          <p className="text-base font-semibold text-gray-500">Become part of us</p>
        </div>

        <form className="w-full max-w-md rounded-lg ">
          <div className="w-full p-2 mb-2">
            <div className="h-12 w-full flex items-center gap-3 shadow-md bg-slate-100 border text-gray-800 rounded p-3 mb-2 text-lg font-bold">
              <FaFacebook size={25} className="text-blue-600"/>
              <p>Continue with Facebook</p>
            </div>
            <div className="h-12 w-full flex items-center gap-3 shadow-md bg-slate-100 border text-gray-800 rounded p-3 mb-2 text-lg font-bold">
              <FcGoogle size={25}/>
              <p>Continue with Google</p>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full p-2">
              <label htmlFor=" " className="font-bold mb-3 text-gray-800">Full Name</label>
              <div className="border-2 border-lightGreen flex items-center rounded h-12">
                <FaCircleUser className="h-full w-fit p-2 text-lightGreen"/>
                <input className="border-none outline-none w-full pl-2 h-full bg-transparent font-semibold" type="text" placeholder="Ex:  John Doe" />
              </div>
            </div>
            <div className="w-full p-2">
              <label htmlFor=" " className="font-bold mb-3 text-gray-800">Email Address</label>
              <div className="border-2 border-lightGreen flex items-center rounded h-12">
                <MdAttachEmail className="h-full w-fit p-2 text-lightGreen"/>
                <input className="border-none outline-none w-full pl-2 h-full bg-transparent font-semibold" type="email" placeholder="Ex: johndoe@gmail.com" />
              </div>
            </div> 
            <div className="w-full p-2">
              <label htmlFor=" " className="font-bold mb-3 text-gray-800">Password</label>
              <div className="border-2 border-lightGreen flex items-center rounded h-12">
                <GiPadlock className="h-full w-fit p-2 text-lightGreen"/>
                <input className="border-none outline-none w-full pl-2 h-full bg-transparent font-semibold" type="password" placeholder="Ex: Secret123" />
              </div>
            </div>
          </div>

          <button className="w-full h-12 bg-lightGreen font-semibold text-lg flex justify-center items-center gap-2 text-white p-2 rounded ">
            Sign Up 
            <MdArrowForwardIos/>
          </button>
        </form>


        <p className="gap-2 mt-2 text-sm">
          Already have an account?
          <a href="/auth/login" className="text-lightGreen ml-2 font-bold underline hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
    </div>
  );
}

export default SignupPage;
