"use client";

import { BookOpen, GraduationCap, PhoneCall } from "lucide-react";
import React from "react";

const AboutSection: React.FC = () => {
    return (
        <section className="relative py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* LEFT SIDE - IMAGES */}
                <div className="relative flex-1 flex flex-col items-center justify-center gap-4 md:gap-6 w-full md:w-1/2">
                    {/* Main large image */}
                    <div className="rounded-2xl overflow-hidden shadow-md w-full md:w-[85%]">
                        <img
                            src="https://edinztech.com/img/gallery/013f4.jpg"
                            alt="Students studying"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Floating circular image - Hidden on mobile, visible on md and up */}
                    <div className="absolute top-4 md:top-10 right-4 md:right-10 hidden md:block border-4 md:border-8 border-white rounded-full overflow-hidden shadow-lg w-24 h-24 md:w-48 md:h-48">
                        <img
                            src="https://edinztech.com/img/gallery/b70bb.jpeg"
                            alt="Students collaborating"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Secondary rectangular image */}
                    <div className="hidden md:block rounded-2xl md:rounded-[30px] overflow-hidden shadow-md w-full md:w-[70%] md:ml-auto mt-4 md:mt-0">
                        <img
                            src="https://edinztech.com/img/gallery/c0349.jpeg"
                            alt="Team discussion"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Floating stat badge */}
                    <div className="absolute -bottom-4 md:-bottom-6 left-4 md:left-6 bg-yellow-500 text-white rounded-2xl md:rounded-[40px] shadow-lg px-4 py-2 md:px-6 md:py-3 flex items-center gap-2 md:gap-3">
                        <div className="bg-white/20 rounded-full p-1 md:p-2">
                            <GraduationCap className="w-4 h-4 md:w-6 md:h-6 text-white" />
                        </div>
                        <div>
                            <p className="font-bold text-xs md:text-sm">17+ Years Of</p>
                            <p className="text-xs md:text-sm">Quality Service</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE - CONTENT */}
                <div className="flex-1 md:w-1/2 mt-8 md:mt-0">
                    <p className="text-yellow-500 font-semibold uppercase tracking-wide flex items-center gap-2 mb-2 text-sm md:text-base">
                        <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
                        About Us
                    </p>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight md:leading-snug">
                        Inspire Softech Group <br />
                        <span className="text-yellow-500">Empowers Innovation.</span>
                    </h2>

                    <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                        We unite four technology-driven companies—Inspire Softech Solutions, Edinz Tech, Adore Technology, and Igrean StarTech—to shape future-ready talent and digital solutions.
                    </p>

                    <div className="mb-4 md:mb-6">
                        <h4 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">Our Mission</h4>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                            Building a sustainable bridge between education, innovation, and industry.
                        </p>
                    </div>

                    <div className="mb-4 md:mb-6">
                        <h4 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">Our Vision</h4>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                            To be a global hub for technology, learning, and transformation.
                        </p>
                    </div>

                    <div className="mb-6 md:mb-8">
                        <h4 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Our Values</h4>
                        <ul className="flex flex-wrap gap-2 md:gap-3 text-gray-700 text-xs md:text-sm">
                            <li className="bg-gray-50 px-3 py-1 md:px-4 md:py-2 rounded-md">Innovation</li>
                            <li className="bg-gray-50 px-3 py-1 md:px-4 md:py-2 rounded-md">Integrity</li>
                            <li className="bg-gray-50 px-3 py-1 md:px-4 md:py-2 rounded-md">Excellence</li>
                            <li className="bg-gray-50 px-3 py-1 md:px-4 md:py-2 rounded-md">Collaboration</li>
                        </ul>
                    </div>

                    {/* CTA + Contact */}
                    <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 md:gap-5 border-t border-gray-200 pt-4 md:pt-6">
                        <a
                            href="#"
                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-5 py-2 md:px-6 md:py-3 rounded-md shadow-md transition-all duration-200 flex items-center gap-2 text-sm md:text-base w-full sm:w-auto justify-center"
                        >
                            Discover More →
                        </a>

                        <a href="tel:+918667493679" className="w-full sm:w-auto">
                            <div className="flex items-center gap-3">
                                <div className="bg-green-100 p-2 md:p-3 rounded-full">
                                    <PhoneCall className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs md:text-sm">Call Now</p>
                                    <p className="font-semibold text-green-700 text-base md:text-lg">
                                        +91 86674 93679
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;