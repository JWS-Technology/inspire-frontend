// app/components/Navbar.tsx
"use client";

import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
    return (
        <>
            <div className="hidden md:block">
                <NavbarDesktop />
            </div>
            <div className="md:hidden">
                <NavbarMobile />
            </div>
        </>
    );
};

export default Navbar;
