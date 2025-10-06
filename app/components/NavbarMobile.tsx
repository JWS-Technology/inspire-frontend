"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const NavbarMobile: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navRef = useRef<HTMLElement | null>(null);
    const logoRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const links = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Our Companies", href: "/companies" },
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

    // Click outside to close menu
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (open && navRef.current && !navRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        // Escape key to close menu
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (open && event.key === "Escape") {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleEscapeKey);
            // Prevent body scroll when menu is open
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscapeKey);
            document.body.style.overflow = "unset";
        };
    }, [open]);

    // Close menu when route changes (if using Next.js router)
    useEffect(() => {
        const handleRouteChange = () => {
            setOpen(false);
        };

        // If using Next.js, you can listen to route changes
        // window.addEventListener('routeChangeComplete', handleRouteChange);

        return () => {
            // window.removeEventListener('routeChangeComplete', handleRouteChange);
        };
    }, []);

    const handleLinkClick = () => {
        setOpen(false);
    };

    const handleGetStartedClick = () => {
        setOpen(false);
        // Add your get started logic here
    };

    return (
        <nav
            ref={navRef}
            className={`md:hidden rounded-4xl px-2 py-3 sticky top-0 z-50 transition-all duration-500 transform-gpu
                ${scrolled
                    ? "bg-gray-900/70 backdrop-blur-md shadow-xl scale-80"
                    : "bg-gray-900 backdrop-blur-lg shadow-md scale-100 w-screen rounded-none"
                }
                ${open ? "scale-90 bg-gray-900/95 px-7 py-6" : "px-5 py-4"}`}
        >
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div ref={logoRef} className="flex items-center">
                    <Link href="/"> <Image
                        className="scale-90 translate-x-3 -translate-y-0.5"
                        height={30}
                        width={150}
                        src="https://edinztech.com/assets/img/inspire.png"
                        alt="logo"
                    />
                    </Link>
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
                        ${open ? "rotate-90 bg-gray-800" : "rotate-0"}
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
                        const isHome = link.label === "Home";

                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={handleLinkClick}
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
                        onClick={handleGetStartedClick}
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

            {/* Overlay when menu is open */}
            {open && (
                <div
                    className="fixed z-40 -translate-x-4 -translate-y-4 w-screen h-screen"
                    onClick={() => setOpen(false)}
                />
            )}
        </nav>
    );
};

export default NavbarMobile;