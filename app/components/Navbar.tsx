// Navbar.tsx
"use client";

import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  return (
    // fixed across the top, center the nav element (md screens)
    <div className="pointer-events-auto">
      {/* pointer-events-none on outer container prevents accidental blocking; inner nav will have pointer-events-auto */}
      <div className="hidden md:flex fixed inset-x-0 top-3 justify-center z-[100] pointer-events-auto">
        <NavbarDesktop />
      </div>

      {/* mobile nav: not fixed to keep natural flow, or change to fixed if you need it */}
      <div className="md:hidden fixed inset-x-0 to p -3 justify-center z-[100] pointer-events-auto">
        <NavbarMobile />
      </div>
    </div>
  );
};

export default Navbar;
