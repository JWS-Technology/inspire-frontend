"use client";

import { BookOpen, GraduationCap, PhoneCall } from "lucide-react";
import React from "react";

const AboutSection: React.FC = () => {
    return (
        <section className="relative py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
                {/* LEFT SIDE - IMAGES */}
                <div className="relative flex-1 flex flex-col items-center justify-center gap-6 w-full md:w-1/2">
                    {/* Main large image */}
                    <div className="rounded-2xl overflow-hidden shadow-md w-[85%]">
                        <img
                            src="https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg?auto=compress&cs=tinysrgb&w=1200"
                            alt="Students studying"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Floating circular image */}
                    <div className="absolute top-10 right-10 hidden md:block border-8 border-white rounded-full overflow-hidden shadow-lg w-48 h-48">
                        <img
                            src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Students collaborating"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Secondary rectangular image */}
                    <div className="rounded-[30px] overflow-hidden shadow-md w-[70%] ml-auto">
                        <img
                            src="https://images.pexels.com/photos/5584673/pexels-photo-5584673.jpeg?auto=compress&cs=tinysrgb&w=1000"
                            alt="Team discussion"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Floating stat badge */}
                    <div className="absolute -bottom-6 left-6 bg-yellow-500 text-white rounded-[40px] shadow-lg px-6 py-3 flex items-center gap-3">
                        <div className="bg-white/20 rounded-full p-2">
                            <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="font-bold text-sm">17+ Years Of</p>
                            <p className="text-sm">Quality Service</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE - CONTENT */}
                <div className="flex-1 md:w-1/2">
                    <p className="text-yellow-500 font-semibold uppercase tracking-wide flex items-center gap-2 mb-2">
                        <BookOpen className="w-5 h-5 text-yellow-500" />
                        About Us
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
                        Inspire Softech Group <br />
                        <span className="text-yellow-500">Empowers Innovation.</span>
                    </h2>

                    <p className="text-gray-600 mb-6">
                        We unite four technology-driven companies—Inspire Softech Solutions, Edinz Tech, Adore Technology, and Igrean StarTech—to shape future-ready talent and digital solutions.
                    </p>

                    <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-1">Our Mission</h4>
                        <p className="text-gray-600 text-sm">
                            Building a sustainable bridge between education, innovation, and industry.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-1">Our Vision</h4>
                        <p className="text-gray-600 text-sm">
                            To be a global hub for technology, learning, and transformation.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h4 className="font-semibold text-gray-800 mb-2">Our Values</h4>
                        <ul className="flex flex-wrap gap-3 text-gray-700 text-sm">
                            <li className="bg-gray-50 px-4 py-2 rounded-md">Innovation</li>
                            <li className="bg-gray-50 px-4 py-2 rounded-md">Integrity</li>
                            <li className="bg-gray-50 px-4 py-2 rounded-md">Excellence</li>
                            <li className="bg-gray-50 px-4 py-2 rounded-md">Collaboration</li>
                        </ul>
                    </div>

                    {/* CTA + Contact */}
                    <div className="flex flex-wrap items-center gap-5 border-t border-gray-200 pt-6">
                        <a
                            href="#"
                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-md shadow-md transition-all duration-200 flex items-center gap-2"
                        >
                            Discover More →
                        </a>

                        <a href="tel:+918667493679">
                            <div className="flex items-center gap-3">
                                <div className="bg-green-100 p-3 rounded-full">
                                    <PhoneCall className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Call Now</p>
                                    <p className="font-semibold text-green-700 text-lg">
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
