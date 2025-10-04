// app/components/NavbarDesktop.tsx
import React, { useState, useEffect } from "react";

const NavbarDesktop = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("Home");

    const links = [
        { label: "Home", href: "#" },
        { label: "About Us", href: "#" },
        { label: "Our Companies", href: "#" },
        { label: "Services", href: "#" },
        { label: "Contact", href: "#" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`w-[97vw] rounded-4xl md:flex items-center justify-between bg-gray-900 px-6 py-4 shadow-md sticky top-0 z-50 transition-all duration-500 ${
            scrolled 
                ? "bg-gray-900/95 backdrop-blur-sm shadow-xl scale-[0.98] hover:scale-100" 
                : "bg-gray-900"
        }`}>
            {/* Logo with bounce animation */}
            <div className="flex items-center space-x-2 group">
                <div className="bg-amber-500 text-white font-bold px-4 py-2 rounded-md transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-lg group-hover:shadow-amber-500/25">
                    INSPIRE
                </div>
                <span className="text-white font-semibold text-lg transition-all duration-300 group-hover:text-amber-500">
                    SOFTECH
                </span>
            </div>

            {/* Links with underline animation */}
            <ul className="flex space-x-8 text-white">
                {links.map((link) => (
                    <li
                        key={link.label}
                        className="relative group"
                        onClick={() => setActiveLink(link.label)}
                    >
                        <span
                            className={`cursor-pointer transition-all duration-300 ${
                                activeLink === link.label
                                    ? "text-amber-500 font-semibold"
                                    : "hover:text-amber-500"
                            }`}
                        >
                            {link.label}
                        </span>
                        {/* Animated underline */}
                        <span
                            className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full ${
                                activeLink === link.label ? "w-full" : ""
                            }`}
                        />
                    </li>
                ))}
            </ul>

            {/* Button with pulse animation */}
            <button className="relative bg-amber-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/25 active:scale-95 group overflow-hidden">
                <span className="relative z-10">Login</span>
                {/* Shine effect */}
                <div className="absolute inset-0 -left-10 -top-8 h-20 w-10 rotate-12 bg-white/20 transition-all duration-700 group-hover:left-32" />
            </button>
        </nav>
    );
};

export default NavbarDesktop;