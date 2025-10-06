"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PhoneCall, Phone, Mail, Globe, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#1f2326] text-gray-300 pt-5 pb-9">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* LEFT: Logo + tagline */}
          <div className="space-y-4">
            <div>
              <Image
                className="scale-110 translate-x-3"
                height={5}
                width={120}
                src="https://edinztech.com/assets/img/inspire.png"
                alt="logo"
              />
            </div>
            <p className="text-gray-400 italic max-w-[320px]">
              Empowering Growth through Knowledge &amp; Technology.
            </p>
          </div>

          {/* MIDDLE: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-amber-400">Home</Link></li>
              <li><Link href="/about" className="hover:text-amber-400">About Us</Link></li>
              <li><Link href="/companies" className="hover:text-amber-400">Companies</Link></li>
              <li><Link href="/services" className="hover:text-amber-400">Services</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400">Contact</Link></li>
            </ul>
          </div>

          {/* RIGHT: Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <a href="tel:+919360505768">
                <li className="flex items-center gap-3 mb-3">
                  <PhoneCall className="w-5 h-5 text-amber-400" />
                  <span>+91 93605 05768</span>
                </li>
              </a>
              <a href="tel:+918667493679">
                <li className="flex items-center gap-3 mb-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span>+91 86674 93679</span>
                </li>
              </a>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <a
                  href="mailto:info@inspiresoftechgroup.com"
                  className="hover:text-amber-400"
                >
                  info@inspiresoftechgroup.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-amber-400" />
                <a
                  href="https://www.inspiresoftechgroup.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400"
                >
                  www.inspiresoftechgroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* divider */}
        <div className="border-t border-gray-700 mt-8" />

        {/* copyright row */}
        <div className="mt-6 text-center text-sm text-gray-400">
          © 2025 INSPIRE SOFTECH Group of Companies – All Rights Reserved
        </div>
      </div>

      {/* BACK TO TOP BUTTON */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed z-10 bottom-8 right-8 bg-amber-500 hover:bg-amber-600 text-black p-3 rounded-full shadow-lg transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
