import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>

      <section className="relative h-screen flex items-center justify-center text-center px-6">
        {/* Background Image */}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

        {/* Content */}
        <div className="relative z-20 max-w-3xl text-white">
          {/* Badge */}
          <div className="inline-block bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full mb-6 shadow-md">
            🎁 WELCOME TO INSPIRE SOFTECH!
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            INSPIRE SOFTECH <br />
            <span className="text-yellow-500">Group of Companies</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg md:text-xl font-medium">
            Empowering Growth through Knowledge & Technology
          </p>

          {/* Description */}
          <p className="mt-4 text-gray-300 text-base md:text-lg">
            A dynamic technology consortium uniting four specialized companies to empower individuals and organizations worldwide
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-md shadow-md">
              Explore Our Companies →
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-md shadow-md">
              Discover Our Services
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
