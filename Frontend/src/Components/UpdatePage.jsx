import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TiArrowLeftThick } from "react-icons/ti";
import { MdAttachEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitter, FaUser } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { IoCloudUpload } from "react-icons/io5";

const UpdatePage = () => {
  const nav = useNavigate();
  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    setProfilePicture(URL.createObjectURL(file));
  };

  return (
    <div className="flex flex-col h-fit items-center overflow-y-scroll w-full p-2">

      <div className="w-full bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Update Profile</h2>
        
        <div className="flex md:flex-row flex-col w-full h-full p-2  justify-center items-center gap-2">
            {/* Profile Picture Upload */}
            <div className="flex flex-col md:w-1/2  w-full min-h-44 h-screen  justify-center  items-center p-5">
                <label htmlFor="profilePicture" className="cursor-pointer w-full h-full ">
                    <input
                    type="file"
                    id="profilePicture"
                    accept="image/*"
                    onChange={handleProfilePictureChange}
                    className="hidden"
                    />
                    <div className="w-full h-full  flex justify-center items-center mb-2">
                        <div className="relative w-3/4 md:h-1/2  h-fit">
                            <img
                                src={profilePicture || "https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"}
                                alt="Profile Preview"
                                className="w-full h-full object-cover overflow-hidden rounded-full border-4 border-lightGreen"
                            />
                            <span className="absolute text-2xl w-1/4 flex justify-center items-center h-1/4 bottom-0 right-0 z-20 p-2 bg-lightGreen text-white rounded-full">
                                <IoCloudUpload />
                            </span>
                        </div>
                    </div>
                </label>
            </div>

            {/* Form */}
            <form className="space-y-4 md:w-1/2 w-full">
                {/* Full Name */}
                <div>
                    <label className="text-sm font-semibold text-gray-600">Full Name</label>
                    <div className="flex items-center border-2 border-lightGreen rounded h-12">
                    <FaUser className="h-full p-2 text-lightGreen" />
                    <input
                        type="text"
                        placeholder="John Doe"
                        className="border-none outline-none w-full pl-2 h-full font-semibold bg-transparent"
                    />
                    </div>
                </div>

                {/* Email Address */}
                <div>
                    <label className="text-sm font-semibold text-gray-600">Email Address</label>
                    <div className="flex items-center border-2 border-lightGreen rounded h-12">
                    <MdAttachEmail className="h-full p-2 text-lightGreen" />
                    <input
                        type="email"
                        placeholder="johndoe@example.com"
                        className="border-none outline-none w-full pl-2 h-full font-semibold bg-transparent"
                    />
                    </div>
                </div>

                {/* Bio */}
                <div>
                    <label className="text-sm font-semibold text-gray-600">Bio</label>
                    <textarea
                    placeholder="Tell us about yourself..."
                    className="w-full font-semibold border-2 border-lightGreen rounded p-2 resize-none h-24"
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="text-sm font-semibold text-gray-600">Current Password</label>
                    <div className="flex items-center border-2 border-lightGreen rounded h-12">
                        <GiPadlock className="h-full p-2 text-lightGreen" />
                        <input
                            type="password"
                            placeholder="Current Password"
                            className="border-none outline-none w-full pl-2 h-full font-semibold bg-transparent"
                        />
                    </div>
                </div>

                <div>
                    <label className="text-sm font-semibold text-gray-600">New Password</label>
                    <div className="flex items-center border-2 border-lightGreen rounded h-12">
                        <GiPadlock className="h-full p-2 text-lightGreen" />
                        <input
                            type="password"
                            placeholder="New Password"
                            className="border-none outline-none w-full pl-2 h-full font-semibold bg-transparent"
                        />
                    </div>
                </div>


                {/* Social Links */}
                {/* <div>
                    <label className="text-sm font-semibold text-gray-600">Social Accounts</label>
                    <div className="flex gap-3 mt-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700">
                        <FaFacebook />
                        Facebook
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded shadow hover:bg-pink-600">
                        <FaInstagram />
                        Instagram
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded shadow hover:bg-blue-500">
                        <FaTwitter />
                        Twitter
                    </button>
                    </div>
                </div> */}

                {/* Save Changes Button */}
                <button className="w-full h-12 bg-lightGreen font-semibold text-base md:text-lg flex justify-center items-center text-white rounded mt-4">
                    Save Changes
                </button>
                </form>
            </div>
        

        
      </div>
    </div>
  );
};

export default UpdatePage;

