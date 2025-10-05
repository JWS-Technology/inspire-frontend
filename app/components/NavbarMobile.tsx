// app/components/NavbarMobile.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
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
        <nav className="md:hidden bg-gray-900 px-6 py-4 shadow-md sticky top-0 z-50">
            <div className="flex items-center justify-between">
                {/* Logo */}
                {/* <div className="flex items-center space-x-2">
                    <div className="bg-amber-500 text-white font-bold px-4 py-2 rounded-md">INSPIRE</div>
                    <span className="text-white font-semibold text-lg">SOFTECH</span>
                </div> */}
                <div className="">

                    <Image className="scale-110 translate-x-3" height={5} width={120} src="https://edinztech.com/assets/img/inspire.png" alt="logo" />
                </div>
                {/* Hamburger with rotation animation */}
                <button
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-label="Toggle navigation"
                    className={`
                        text-gray-200 hover:text-amber-500 focus:outline-none 
                        transition-all duration-300 text-xl
                        ${open ? "rotate-90" : "rotate-0"}
                    `}
                >
                    {open ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Menu with Enhanced Animation */}
            <div className={`
                overflow-hidden transition-all duration-500 ease-out
                ${open ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}
            `}>
                <div className="space-y-3">
                    {links.map((link, index) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={`
                                block px-3 py-2 rounded-md transform transition-all duration-500 ease-out
                                hover:bg-gray-800 active:bg-gray-700
                                ${open
                                    ? "translate-x-0 opacity-100 scale-100"
                                    : "translate-x-8 opacity-0 scale-95"
                                }
                                ${link.label === "Home"
                                    ? "text-amber-500 font-semibold bg-gray-800"
                                    : "text-white hover:text-amber-500"
                                }
                            `}
                            style={{
                                transitionDelay: open ? `${index * 75}ms` : `${(links.length - index) * 50}ms`
                            }}
                        >
                            {link.label}
                        </a>
                    ))}

                    <button
                        onClick={() => setOpen(false)}
                        className={`
                            w-full bg-amber-500 hover:bg-yellow-600 text-white font-semibold 
                            px-4 py-2 rounded-md transform transition-all duration-500 ease-out
                            hover:scale-105 active:scale-95
                            ${open
                                ? "translate-y-0 opacity-100 scale-100"
                                : "translate-y-8 opacity-0 scale-95"
                            }
                        `}
                        style={{
                            transitionDelay: open ? `${links.length * 75}ms` : "0ms"
                        }}
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavbarMobile;