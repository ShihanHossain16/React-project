
import React from 'react';

const HeroSection = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse md:flex-row px-4 sm:px-6 md:px-8 py-10 relative">
      {/* Left Section */}
      <div className="w-full md:w-3/5 space-y-6 relative z-10">
        <div>
          <div className="flex justify-between">
            <h1 className="text-4xl font-playfair sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-800">Find the top</h1>
            <img src="https://i.ibb.co/H4YRj92/Vector-1.png" alt="Top Decoration" className="w-12 h-12" />
          </div>
          <h1 className="text-4xl font-playfair sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl relative">
            <span className="text-gray-800">
              Hotels nearby
              <span >.</span>
              <img
                src="https://i.ibb.co/6vXZ3d8/Vector.png"
                alt="Underline Decoration"
                className="absolute -bottom-4 right-52 w-28 sm:w-36 md:w-40 lg:w-48 xl:w-56 transform translate-x-4 opacity-50"
              />
            </span>
          </h1>
          <p className="mt-4 text-xs font-urbanist sm:text-base md:text-lg lg:text-xl text-light_gray font-thin">
            Looking for a comfortable and convenient home? Our house rental offers spacious living areas, modern
            amenities, and a prime location. Featuring multiple bedrooms, updated kitchens, and cozy living spaces, it's
            perfect for families or professionals.
          </p>
          <div className="flex flex-wrap justify-between mt-12 text-xs text-light_gray font-urbanist sm:text-base md:text-lg" >
            <p>Vila</p>
            <p>Family House</p>
            <p>Hotel</p>
            <p>Room</p>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-4 mt-10 mb-9">
            <button
              className="px-6 py-2 rounded-full shadow-lg hover:bg-opacity-80 transition"
              style={{ backgroundColor: 'rgb(238, 229, 216)', color: 'rgb(206, 175, 131)' }}
            >
              Discover now
            </button>
            <div className="flex items-center cursor-pointer">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-5.197 3.003A1 1 0 018 13.403V10.6a1 1 0 01.555-.894l5.197-3.003a1 1 0 011.496.894v6.006a1 1 0 01-1.496.894z"
                  />
                </svg>
              </div>
              <span className="ml-2 text-black">Watch our story</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-2/5">
        <img
          src="https://i.ibb.co/cY2Sn8p/Image.png"
          alt="Hotel"
          className="rounded-xl object-cover w-full h-full"
        />
      </div>

      {/* Availability Check */}
      <div className="absolute bottom-28 w-full hidden sm:block md:block lg:block xl:block">
        <p className="text-light_gray font-urbanist text-xs sm:text-base md:text-lg">Check Availability</p>
        <div className="flex flex-wrap md:flex-nowrap bg-white shadow-2xl rounded-full p-4 md:p-6 w-3/4">
          <div className="flex w-full justify-between items-center flex-wrap md:flex-nowrap">
            <div className="text-center px-20 sm:px-4">
              <p className="text-light_gray font-urbanist text-xs sm:text-sm">Check in</p>
              <p className="text-light_gray font-urbanist text-xs sm:text-sm">Add Dates</p>
            </div>
            <div className="hidden md:block border-r border-gray-300 h-10"></div>
            <div className="text-center px-20 sm:px-4">
              <p className="text-light_gray font-urbanist text-xs sm:text-sm">Check Out</p>
              <p className="text-light_gray font-urbanist text-xs sm:text-sm">Add Dates</p>
            </div>
            <div className="hidden md:block border-r border-gray-300 h-10"></div>
            <div className="text-center px-20 sm:px-4">
              <p className="text-light_gray font-urbanist text-xs sm:text-sm">Adults</p>
              <p className="text-light_gray font-urbanist text-xs sm:text-sm">Add Dates</p>
            </div>
            <div className="hidden md:block border-r border-gray-300 h-10"></div>
            <div className="text-center px-20 sm:px-4">
              <p className="text-light_gray font-urbanist text-xs sm:text-sm">Children</p>
              <p className="text-light_gray font-urbanist text-xs sm:text-sm">Add Dates</p>
            </div>
            <div className="hidden md:block border-r border-gray-300 h-10"></div>
            <div className="text-center px-20 sm:px-4">
              <p className="text-light_gray font-urbanist text-xs sm:text-sm">Rooms</p>
              <p className="text-light_gray font-urbanist text-xs sm:text-sm">Add Dates</p>
            </div>
            <div className="hidden md:block border-r border-gray-300 h-10"></div>
          </div>
          <button
            className="text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg ml-4 mt-4 md:mt-0"
            style={{ backgroundColor: 'rgb(206, 175, 131)' }}
          >
            <img src="https://i.ibb.co.com/xY3Cpjy/Vector-2.png" alt="Search" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
