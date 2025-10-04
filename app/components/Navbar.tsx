// app/components/Navbar.tsx
"use client";

import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
    return (
        <div className="md:relative md:flex md:justify-center md:top-3">
            <div className="hidden absolute md:b lock md:flex justify-center">
                <NavbarDesktop />
            </div>
            <div className="md:hidden">
                <NavbarMobile />
            </div>
        </div>
    );
};

export default Navbar;
