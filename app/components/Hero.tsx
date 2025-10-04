"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !heroRef.current ||
      !contentRef.current ||
      !headingRef.current ||
      !subheadingRef.current ||
      !descriptionRef.current ||
      !buttonsRef.current
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      // Background animation
      gsap.fromTo(
        heroRef.current,
        {
          opacity: 0,
          scale: 1.1,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
        }
      );

      // Content container animation
      gsap.fromTo(
        contentRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: "power2.out",
        }
      );

      // Staggered text animations
      const tl = gsap.timeline({ delay: 0.8 });

      tl.fromTo(
        headingRef.current
          ? headingRef.current.querySelectorAll("h1, span")
          : [],
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        }
      )
        .fromTo(
          subheadingRef.current,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .fromTo(
          descriptionRef.current,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .fromTo(
          buttonsRef.current ? buttonsRef.current.children : [],
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.2"
        );
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <>
      <div className="h-screen w-screen overflow-hidden">
        <div
          ref={heroRef}
          className="h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        >
            <section className="relative bg-black/60 backdrop-blur-[7px] h-screen flex items-center justify-center text-center px-6">
              {/* Content */}
              <div
                ref={contentRef}
                className="relative z-20 -translate-y-9 max-w-3xl text-white"
              >
                {/* Heading */}
                <div ref={headingRef}>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    INSPIRE SOFTECH <br />
                    <span className="text-yellow-500">Group of Companies</span>
                  </h1>
                </div>

                {/* Subheading */}
                <p
                  ref={subheadingRef}
                  className="mt-6 text-lg md:text-xl font-medium"
                >
                  Empowering Growth through Knowledge & Technology
                </p>

                {/* Description */}
                <p
                  ref={descriptionRef}
                  className="mt-4 text-gray-300 text-base md:text-lg"
                >
                  A dynamic technology consortium uniting four specialized
                  companies to empower individuals and organizations worldwide
                </p>

                {/* Buttons */}
                <div
                  ref={buttonsRef}
                  className="mt-8 flex flex-col md:flex-row gap-4 justify-center"
                >
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-md shadow-md transform transition-transform hover:scale-105 duration-200">
                    Explore Our Companies →
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transform transition-transform hover:scale-105 duration-200">
                    Discover Our Services
                  </button>
                </div>
              </div>
            </section>
        </div>
      </div>
    </>
  );
};

export default Hero;
