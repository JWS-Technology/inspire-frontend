"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const NavbarMobile: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navRef = useRef<HTMLElement | null>(null);
    const logoRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const links = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Our Companies", href: "#" },
        { label: "Services", href: "#" },
        { label: "Contact", href: "#" },
    ];

    // Scroll listener to toggle scrolled state
    useEffect(() => {
        let lastY = 0;
        const handleScroll = () => {
            if (Math.abs(window.scrollY - lastY) > 5) {
                setScrolled(window.scrollY > 10);
                lastY = window.scrollY;
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <nav
            ref={navRef}
            className={`md:hidden ml-2 mr-2 rounded-4xl px-4 py-3 sticky top-0 z-50 transition-all duration-500 transform-gpu
        ${scrolled
                    ? "bg-gray-900/95 backdrop-blur-sm shadow-xl scale-80"
                    : "bg-gray-900 shadow-md scale-105 rounded-none -mt-3 "
                }
            ${open ? "scale-100" : ""}`}
        >
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div ref={logoRef} className="flex items-center">
                    <Image
                        className="scale-90 translate-x-3 -translate-y-0.5"
                        height={30}
                        width={150}
                        src="https://edinztech.com/assets/img/inspire.png"
                        alt="logo"
                    />
                </div>

                {/* Hamburger with rotation */}
                <button
                    onClick={() => setOpen((s) => !s)}
                    aria-expanded={open}
                    aria-label="Toggle navigation"
                    ref={buttonRef}
                    className={`
            text-gray-200 hover:text-amber-500 focus:outline-none 
            transition-all duration-600 text-2xl p-2 rounded-md
            ${open ? "rotate-90" : "rotate-0"}
          `}
                >
                    {open ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden transition-all duration-600 ease-out
          ${open ? "max-h-[520px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}
        `}
            >
                <div className="space-y-3">
                    {links.map((link, index) => {
                        // choose Home as active by default; you can wire this to router if needed
                        const isHome = link.label === "Home";

                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className={`
                  block px-3 py-2 rounded-md transform transition-all duration-500 ease-out
                  hover:bg-gray-800 active:bg-gray-700
                  ${open ? "translate-x-0 opacity-100 scale-100" : "translate-x-8 opacity-0 scale-95"}
                  ${isHome ? "text-amber-500 font-semibold bg-gray-800" : "text-white hover:text-amber-500"}
                `}
                                style={{
                                    transitionDelay: open ? `${index * 70}ms` : `${(links.length - index) * 40}ms`,
                                }}
                            >
                                {link.label}
                            </a>
                        );
                    })}

                    <button
                        onClick={() => setOpen(false)}
                        className={`
              w-full bg-amber-500 hover:bg-yellow-600 text-white font-semibold 
              px-4 py-2 rounded-md transform transition-all duration-500 ease-out
              hover:scale-105 active:scale-95
              ${open ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"}
            `}
                        style={{
                            transitionDelay: open ? `${links.length * 75}ms` : "0ms",
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
