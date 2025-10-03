// app/components/NavbarMobile.tsx
"use client";

import React, { useState } from "react";

const NavbarMobile = () => {
    const [open, setOpen] = useState(false);

    const links = [
        { label: "Home", href: "#" },
        { label: "About Us", href: "#" },
        { label: "Our Companies", href: "#" },
        { label: "Services", href: "#" },
        { label: "Contact", href: "#" },
    ];

    return (
        <nav className="md:hidden bg-gray-900 px-6 py-4 shadow-md sticky top-0 z-50">  <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <div className="bg-amber-500 text-white font-bold px-4 py-2 rounded-md">INSPIRE</div>
                <span className="text-white font-semibold text-lg">SOFTECH</span>
            </div>

            {/* Hamburger */}
            <button
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-label="Toggle navigation"
                className="text-gray-200 hover:text-amber-500 focus:outline-none"
            >
                {open ? "✖" : "☰"}
            </button>
        </div>

            {/* Mobile Menu */}
            {open && (
                <div className="mt-4 space-y-3">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={`block px-3 py-2 rounded-md ${link.label === "Home" ? "text-amber-500 font-semibold" : "text-white hover:text-amber-500"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}

                    <button
                        onClick={() => setOpen(false)}
                        className="w-full bg-amber-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-md"
                    >
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    );
};

export default NavbarMobile;
