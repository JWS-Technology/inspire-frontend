"use client";

import { BookOpen, GraduationCap, PhoneCall } from "lucide-react";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // INCREASED DURATION and DELAY for a smoother, slower overall animation
            const tl = gsap.timeline({
                paused: true,
                defaults: {
                    duration: 0.9, // INCREASED from 1s to 1.2s
                    ease: "power2.out" // Changed to power2.out for a smoother deceleration
                },
                delay: 0.4 // INCREASED from 0.25s for a noticeable start delay
            });

            // --- Animation Steps (Smoother and Longer) ---

            // 1. Label
            tl.fromTo(
                ".gsap-label",
                { y: 20, autoAlpha: 0 }, // Simpler, smoother fade-up
                { y: 0, autoAlpha: 1 },
                0
            );

            // 2. Main Heading
            tl.fromTo(
                ".gsap-heading",
                { y: 30, autoAlpha: 0 }, // Increased distance for a smoother lift
                { y: 0, autoAlpha: 1, duration: 1.5, ease: "power3.out" }, // Longer duration for the main element
                "-=1.0" // Start 1.0s before the previous one ends (slight overlap)
            );

            // 3. Paragraphs (Increased stagger time for a softer flow)
            tl.fromTo(
                ".gsap-paragraph",
                { y: 20, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, stagger: 0.15 }, // INCREASED stagger from 0.08s to 0.15s
                "-=1.2"
            );

            // 4. Section Headings (Mission/Vision/Values)
            tl.fromTo(
                ".gsap-subheading",
                { x: -15, autoAlpha: 0 }, // Slight horizontal slide
                { x: 0, autoAlpha: 1, stagger: 0.1 }, // INCREASED stagger from 0.06s to 0.1s
                "-=1.0"
            );

            // 5. List items
            tl.fromTo(
                ".gsap-list-item",
                { y: 10, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, stagger: 0.1 }, // INCREASED stagger from 0.06s to 0.1s
                "-=0.8"
            );

            // 6. CTA + contact
            tl.fromTo(
                ".gsap-cta",
                { autoAlpha: 0, y: 10 }, // Simple fade and lift
                { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.2 }, // Stagger both CTA links
                "-=0.6"
            );

            // 7. Floating stat badge text/icon
            // Combined the badge text and icon animation into a single class for one smooth reveal
            tl.fromTo(
                ".gsap-badge",
                { y: 10, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, stagger: 0.05, duration: 0.8 },
                "-=1.0"
            );

            // ScrollTrigger remains the same (start animation when section enters viewport)
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top 80%",
                onEnter: () => tl.play(),
                onEnterBack: () => tl.play(),
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* LEFT SIDE - IMAGES */}
                <div className="relative flex-1 flex flex-col items-center justify-center gap-4 md:gap-6 w-full md:w-1/2">
                    {/* Main large image */}
                    <div className="rounded-2xl overflow-hidden shadow-md w-full md:w-[85%] relative">
                        <div className="relative w-full h-[300px] md:h-[400px]">
                            <Image
                                src="https://edinztech.com/img/gallery/013f4.jpg"
                                alt="Students studying"
                                fill
                                priority
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Floating circular image - Hidden on mobile, visible on md and up */}
                    <div className="absolute top-4 md:top-10 right-4 md:right-10 hidden md:block border-4 md:border-8 border-white rounded-full overflow-hidden shadow-lg w-24 h-24 md:w-48 md:h-48">
                        <div className="relative w-full h-full">
                            <Image
                                src="https://edinztech.com/img/gallery/b70bb.jpeg"
                                alt="Students collaborating"
                                fill
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Secondary rectangular image */}
                    <div className="hidden md:block rounded-2xl md:rounded-[30px] overflow-hidden shadow-md w-full md:w-[70%] md:ml-auto mt-4 md:mt-0">
                        <div className="relative w-full h-[180px] md:h-[220px]">
                            <Image
                                src="https://edinztech.com/img/gallery/c0349.jpeg"
                                alt="Team discussion"
                                fill
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Floating stat badge */}
                    <div className="absolute -bottom-4 md:-bottom-6 left-4 md:left-6 bg-yellow-500 text-white rounded-2xl md:rounded-[40px] shadow-lg px-4 py-2 md:px-6 md:py-3 flex items-center gap-2 md:gap-3">
                        <div className="bg-white/20 rounded-full p-1 md:p-2">
                            <GraduationCap className="w-4 h-4 md:w-6 md:h-6 text-white gsap-badge" />
                        </div>
                        <div>
                            <p className="font-bold text-xs md:text-sm gsap-badge">17+ Years Of</p>
                            <p className="text-xs md:text-sm gsap-badge">Quality Service</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE - CONTENT */}
                <div className="flex-1 md:w-1/2 mt-8 md:mt-0">
                    <p className="text-yellow-500 font-semibold uppercase tracking-wide flex items-center gap-2 mb-2 text-sm md:text-base gsap-label">
                        <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
                        <span className="gsap-label">About Us</span>
                    </p>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight md:leading-snug gsap-heading">
                        Inspire Softech Group <br />
                        <span className="text-yellow-500">Empowers Innovation.</span>
                    </h2>

                    <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed gsap-paragraph">
                        We unite four technology-driven companies—Inspire Softech Solutions, Edinz Tech, Adore Technology, and Igrean StarTech—to shape future-ready talent and digital solutions.
                    </p>

                    <div className="mb-4 md:mb-6">
                        <h4 className="font-semibold text-gray-800 mb-1 text-sm md:text-base gsap-subheading">Our Mission</h4>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed gsap-paragraph">
                            Building a sustainable bridge between education, innovation, and industry.
                        </p>
                    </div>

                    <div className="mb-4 md:mb-6">
                        <h4 className="font-semibold text-gray-800 mb-1 text-sm md:text-base gsap-subheading">Our Vision</h4>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed gsap-paragraph">
                            To be a global hub for technology, learning, and transformation.
                        </p>
                    </div>

                    <div className="mb-6 md:mb-8">
                        <h4 className="font-semibold text-gray-800 mb-2 text-sm md:text-base gsap-subheading">Our Values</h4>
                        <ul className="flex flex-wrap gap-2 md:gap-3 text-gray-700 text-xs md:text-sm">
                            <div className="scaleAnimation">
                                <li className=" bg-gray-50 px-3 py-1 md:px-4 md:py-2 rounded-md gsap-list-item">Innovation</li>
                            </div>
                            <div className="scaleAnimation">
                                <li className=" bg-gray-50 px-3 py-1 md:px-4 md:py-2 rounded-md gsap-list-item">Integrity</li>
                            </div>
                            <div className="scaleAnimation">
                                <li className=" bg-gray-50 px-3 py-1 md:px-4 md:py-2 rounded-md gsap-list-item">Excellence</li>
                            </div>
                            <div className="scaleAnimation">
                                <li className=" bg-gray-50 px-3 py-1 md:px-4 md:py-2 rounded-md gsap-list-item">Collaboration</li>
                            </div>
                        </ul>
                    </div>

                    {/* CTA + Contact */}
                    <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 md:gap-5 border-t border-gray-200 pt-4 md:pt-6">
                        <div className="hover:scale-110 transition-all duration-300">
                            <Link
                                href="/about"
                                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-5 py-2 md:px-6 md:py-3 rounded-md shadow-md transition-all duration-200 flex items-center gap-2 text-sm md:text-base w-full sm:w-auto justify-center gsap-cta "
                            >
                                Discover More →
                            </Link>

                        </div>
                        <div className="hover:scale-110 transition-all duration-300">


                            <a href="tel:+918667493679" className="w-full sm:w-auto gsap-cta">
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-100 p-2 md:p-3 rounded-full">
                                        <PhoneCall className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs md:text-sm">Call Now</p>
                                        <p className="text-black" style={{ fontFamily: "sans-serif" }}>+91 86674 93679</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
