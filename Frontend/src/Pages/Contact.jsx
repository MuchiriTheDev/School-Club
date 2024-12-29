import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import NewsLetter from '../Components/NewsLetter';
import { FaLocationPin, FaPhone, FaUser } from 'react-icons/fa6';
import { FaMailBulk } from 'react-icons/fa';
import { MdAlternateEmail, MdWifiCalling } from 'react-icons/md';
import axios from 'axios';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('https://api.web3forms.com/submit', {
        ...formData,
        access_key: 'b582a0c9-a9e8-4fc0-ac40-0072a128af32',  // Replace with your Web3Forms access key
      });

      if (response.status === 200) {
        alert("Message sent successfully!");
        setFormData({
            name: '',
            email: '',
            phoneNumber: '',
            message: ''
          })
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message. Please check your internet connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="my-10 w-full h-fit">
        {/* Map of where our school is */}
        <div className="w-full bg-slate-100 p-4">
          <h1 className='text-gray-800 text-xl sm:text-4xl font-bold mx-5 my-3'>Location</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127311.30876944555!2d36.94195636412134!3d-0.3827428196204424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d96885b625aff9%3A0x2ebcdd4c5f0083a9!2sDedan%20Kimathi%20University%20of%20Technology!5e0!3m2!1sen!2ske!4v1693571530371!5m2!1sen!2ske"
            className='w-full h-[50vh] my-5'
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div className="w-full p-4 h-fit md:h-screen flex flex-col md:flex-row justify-center items-center gap-4">
          {/* Left side */}
          <div className="md:w-1/2 w-full h-full p-4">
            <h1 className="text-gray-800 mb-5 font-bold text-xl">How To Find Us</h1>
            <div className='w-full h-auto flex items-center gap-5 mb-4'>
              <div className="w-auto flex justify-center items-center p-2">
                <FaPhone className='h-full text-4xl text-lightGreen' />
              </div>
              <div className="w-auto h-full">
                <h1 className='text-gray-800 font-bold text-base mb-2'><a href="tel:+254101010101">Call To Action</a></h1>
                <p className='text-sm text-gray-600 font-medium '>
                  Click here to directly call us or reach out to <span className='font-bold'>0101010101</span>.
                </p>
              </div>
            </div>
            <div className='w-full h-auto flex items-center gap-5 mb-4'>
              <div className="w-auto flex justify-center items-center p-2">
                <FaMailBulk className='h-full text-4xl text-lightGreen' />
              </div>
              <div className="w-auto h-full">
                <h1 className='text-gray-800 font-bold text-base mb-2'><a href="mailto:dsaic@gmail.com">dsaic@gmail.com</a></h1>
                <p className='text-sm text-gray-600 font-medium '>
                Click here to directly email us or you can write an email to <span className='font-bold'>dsaic@gmail.com</span>.
                </p>
              </div>
            </div>
            <div className='w-full h-auto flex items-center gap-5 mb-4'>
              <div className="w-auto flex justify-center items-center p-2">
                <FaLocationPin className='h-full text-4xl text-lightGreen' />
              </div>
              <div className="w-auto h-full">
                <h1 className='text-gray-800 font-bold text-base mb-2'>
                  <a 
                    className="text-dark text-sm"
                    href="https://www.google.com/maps/place/Dedan+Kimathi+University+of+Technology,+Nyeri/"
                    target="_blank"
                    rel="noopener noreferrer">Kenya, Nyeri, Dedan Kimathi University</a>
                </h1>
                <p className='text-sm text-gray-600 font-medium '>
                  Click here to open google maps and see where we are located.
                </p>
              </div>
            </div>
          </div>
          <form className='md:w-1/2 w-full h-full p-4' onSubmit={handleSubmit}>
            <h1 className="text-gray-800 mb-5 font-bold text-xl">How Can We Help You</h1>
            <div className="w-full h- p-0 sm:p-2 flex flex-col sm:flex-row mb-4">
              <div className="md:w-1/2 w-full h-full p-0 sm:p-2 ">
                <div className="w-full mb-3 border-2 border-slate-100 outline-none focus:border-2 bg-slate-50 focus:border-lightGreen flex items-center rounded-md gap-2 ">
                  <FaUser className='h-full text-lightGreen text-3xl ml-3 ' />
                  <input type="text" placeholder='Full Name' className='border-none outline-none h-full bg-transparent w-full py-3 px-2' required name="name" id="name" value={formData.name} onChange={handleInputChange} />
                </div>
                <div className="w-full mb-3 border-2 border-slate-100 outline-none focus:border-2 bg-slate-50 focus:border-lightGreen flex items-center rounded-md gap-2 ">
                  <MdAlternateEmail className='h-full text-lightGreen text-3xl ml-3 ' />
                  <input type="email" placeholder='Email Address' className='border-none outline-none h-full bg-transparent w-full py-3 px-2' required name="email" id="email" value={formData.email} onChange={handleInputChange} />
                </div>
                <div className="w-full mb-3 border-2 border-slate-100 outline-none focus:border-2 bg-slate-50 focus:border-lightGreen flex items-center rounded-md gap-2 ">
                  <MdWifiCalling className='h-full text-lightGreen text-3xl ml-3 ' />
                  <input type="tel" placeholder='Phone Number' name="phoneNumber" id="phone-number" className='border-none outline-none h-full bg-transparent w-full py-3 px-2' required value={formData.phoneNumber} onChange={handleInputChange} />
                </div>
              </div>
              <div className="md:w-1/2 w-full h-full p-0 sm:p-2 ">
                <textarea className='w-full mb-3 border-2 border-slate-100 outline-none focus:border-2 bg-slate-50 focus:border-lightGreen flex items-center py-3 px-2 rounded-md gap-2' placeholder='Message' required name="message" id="msg" cols="30" rows="10" value={formData.message} onChange={handleInputChange}></textarea>
              </div>
            </div>
            <div className="w-fit h-fit p-0 sm:p-2 mb-3">
              {isLoading ? (
                <button type="button" className="bg-rose-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center cursor-not-allowed" disabled>
                  <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                  Sending ...
                </button>
              ) : (
                <button type="submit" className="bg-lightGreen text-white font-semibold py-2 px-4 rounded-md">
                  Send Message
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
