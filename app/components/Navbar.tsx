import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between bg-gray-900 px-6 py-4 shadow-md">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="bg-amber-500 text-white font-bold px-4 py-2 rounded-md">
            INSPIRE
          </div>
          <span className="text-white font-semibold text-lg">SOFTECH</span>
        </div>

        {/* Menu Links */}
        <ul className="flex space-x-8 text-white">
          <li className="text-amber-500 font-semibold cursor-pointer">Home</li>
          <li className="hover:text-amber-500 cursor-pointer">About Us</li>
          <li className="hover:text-amber-500 cursor-pointer">Our Companies</li>
          <li className="hover:text-amber-500 cursor-pointer">Services</li>
          <li className="hover:text-amber-500 cursor-pointer">Contact</li>
        </ul>

        {/* Button */}
        <button className="bg-amber-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-md">
          Get Started
        </button>
      </nav>
    </>
  );
};

export default Navbar;
