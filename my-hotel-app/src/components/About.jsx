import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      
      <div className="relative font-playfair shadow-md">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold  font-playfair">About Us</h1>
        </div>
      </div>

      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-2 text-gray-600">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sequi fuga iure sint? Placeat, numquam sapiente maxime minima voluptate nihil.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolore quasi ex doloribus, sint quod nostrum numquam facere dolorum est!
          </p>
        </div>
      </div>

     
      <div className="mt-12 text-center">
        <a href="#">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md">
            Learn More
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;