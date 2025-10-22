"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { NavLink } from "./Navbar";
import Link from "next/link";

type Props = {
    links: NavLink[];
};
const NavbarDesktop: React.FC<Props> = ({ links }) => {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("");
    const navRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLUListElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);



    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!pathname) return;

        // Map pathname to your labels. If you keep foldered routes or dynamic routes,
        // adjust mapping logic accordingly.
        if (pathname === "/" || pathname === "") {
            setActiveLink("Home");
            return;
        }

        if (pathname.startsWith("/about")) {
            setActiveLink("About Us");
            return;
        }

        if (pathname.startsWith("/companies")) {
            setActiveLink("Our Companies");
            return;
        }

        // add more page checks if you create more routes:
        // if (pathname.startsWith("/companies")) { setActiveLink("Our Companies"); return; }

        // Default fallback: clear selection for anchor-section pages
        setActiveLink("");
    }, [pathname]);


    // GSAP Animations - All elements with same animation
    useEffect(() => {
        if (!navRef.current || !logoRef.current || !linksRef.current || !buttonRef.current) return;

        const ctx = gsap.context(() => {
            // Navbar entrance animation
            gsap.fromTo(navRef.current,
                {
                    y: -100,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out"
                }
            );

            // All children elements with same animation
            const children = [
                logoRef.current,
                ...(linksRef.current ? Array.from(linksRef.current.children) : []),
                buttonRef.current
            ];

            // Same animation for all elements
            gsap.fromTo(children,
                {
                    y: -30,
                    opacity: 0,
                    scale: 0.8
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    delay: 0.3,
                    ease: "power2.out"
                }
            );
        });

        return () => ctx.revert();
    }, []);

    const handleLinkClick = (label: string) => {
        setActiveLink(label);

        // Same click animation for all links
        const clickedElement = linksRef.current?.querySelector(`[data-label="${label}"]`);
        if (clickedElement) {
            gsap.fromTo(clickedElement,
                {
                    scale: 0.9
                },
                {
                    scale: 1,
                    duration: 0.3,
                    ease: "back.out(1.7)"
                }
            );
        }
    };

    const handleButtonClick = () => {
        if (!buttonRef.current) return;

        // Same click animation as links
        gsap.fromTo(buttonRef.current,
            {
                scale: 0.9
            },
            {
                scale: 1,
                duration: 0.3,
                ease: "back.out(1.7)"
            }
        );
    };

    return (
        <nav
            ref={navRef}
            className={` rounded-4xl md:flex items-center justify-between bg-gray-900 px-6 py-4 shadow-md sticky top-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-gray-900/70 backdrop-blur-sm shadow-xl scale-[0.80] w-[60vw] hover:scale-85"
                : "bg-gray-900 w-[97vw]"
                }`}
        >
            {/* Logo */}
            {/* <div ref={logoRef} className="flex items-center space-x-2 group">
                <div className="bg-amber-500 text-white font-bold px-4 py-2 rounded-md transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-lg group-hover:shadow-amber-500/25">
                    INSPIRE
                </div>
                <span className="text-white font-semibold text-lg transition-all duration-300 group-hover:text-amber-500">
                    SOFTECH
                </span>
            </div> */}
            <Link href="/">
                <div className="">
                    <Image className="scale-110 translate-x-3 -translate-y-0.5" height={5} width={120} src="https://edinztech.com/assets/img/inspire.png" alt="logo" />
                </div>
            </Link>
            {/* <div className="">
                <Image className="scale-110 translate-x-3 -translate-y-0.5" height={5} width={120} src="https://edinztech.com/assets/img/inspire.png" alt="logo" />
            </div> */}

            {/* Links */}
            <ul ref={linksRef} className="flex space-x-8 text-white">
                {links.map((link) => (
                    <li
                        key={link.label}
                        className="relative group"
                        onClick={() => handleLinkClick(link.label)}
                    >
                        <a href={link.href}>
                            <span
                                data-label={link.label}
                                className={`cursor-pointer transition-all duration-300 ${activeLink === link.label
                                    ? "text-amber-500 font-semibold"
                                    : "hover:text-amber-500"
                                    }`}
                            >
                                {link.label}
                            </span>
                            {/* Animated underline */}
                            <span
                                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full ${activeLink === link.label ? "w-full" : ""
                                    }`}
                            />
                        </a>
                    </li>
                ))}
            </ul>

            {/* Button */}
            <button
                ref={buttonRef}
                onClick={handleButtonClick}
                className="relative bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/25 active:scale-95 group overflow-hidden"
            >
                <span className="relative z-10">Login</span>
                {/* Shine effect */}
                <div className="absolute inset-0 -left-10 -top-8 h-20 w-10 rotate-12 bg-white/20 transition-all duration-700 group-hover:left-32" />
            </button>
        </nav>
    );
};

export default NavbarDesktop;