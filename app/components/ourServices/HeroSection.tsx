"use client";

import React from "react";
import { ArrowRight, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center pt-[10rem] py-20 px-6 bg-white">
      {/* Tagline */}
      <div className="inline-block px-4 py-2 mb-6 text-sm font-medium text-gray-700 border rounded-full shadow-sm border-gray-200 bg-white backdrop-blur-md">
        Complete Technology & Training Solutions
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
        Empowering Growth through{" "}
        <span className="bg-gradient-to-r from-amber-500 via-gray-800 to-blue-600 bg-clip-text text-transparent">
          Knowledge & Technology
        </span>
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
        End-to-end services covering training, consulting, and technology
        solutions for students, professionals, and enterprises.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300">
          Contact Us <ArrowRight className="w-4 h-4" />
        </button>

        <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-semibold px-6 py-3 rounded-lg shadow-sm transition-all duration-300">
          View Internships
        </button>

        <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-semibold px-6 py-3 rounded-lg shadow-sm transition-all duration-300">
          <Download className="w-4 h-4" />
          Download Brochure
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
