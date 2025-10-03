// app/components/NavbarDesktop.tsx
import React from "react";

const NavbarDesktop = () => {
    const links = [
        { label: "Home", href: "#" },
        { label: "About Us", href: "#" },
        { label: "Our Companies", href: "#" },
        { label: "Services", href: "#" },
        { label: "Contact", href: "#" },
    ];

    return (
        <nav className="md:flex items-center justify-between bg-gray-900 px-6 py-4 shadow-md sticky top-0 z-50">
            <div className="flex items-center space-x-2">
                <div className="bg-amber-500 text-white font-bold px-4 py-2 rounded-md">
                    INSPIRE
                </div>
                <span className="text-white font-semibold text-lg">SOFTECH</span>
            </div>

            {/* Links */}
            <ul className="flex space-x-8 text-white">
                {links.map((link) => (
                    <li
                        key={link.label}
                        className={`cursor-pointer ${link.label === "Home"
                            ? "text-amber-500 font-semibold"
                            : "hover:text-amber-500"
                            }`}
                    >
                        {link.label}
                    </li>
                ))}
            </ul>

            {/* Button */}
            <button className="bg-amber-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-md">
                Login
            </button>
        </nav>
    );
};

export default NavbarDesktop;
