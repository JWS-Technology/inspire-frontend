"use client";

import React from "react";
import { Play, ArrowRight, Users, BookOpen, Globe, PhoneCall } from "lucide-react";
import Image from "next/image";
// Refined Hero Section — modern, premium visual style with elegant layout and contrast

const AboutPageSimpleHero: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-b pt-40 pb-30 from-[#ffffff] via-[#fefaf5] to-[#f9f5f0] py-20 overflow-hidden">
            {/* Soft background glow */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-yellow-100/30 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    {/* Left Image Section */}
                    <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://edinztech.com/img/gallery/013f4.jpg"
                            alt="Inspire Softech Event"
                            width={800}
                            height={500}
                            priority
                            className="w-full h-[420px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* 
                        <img
                            src="https://edinztech.com/img/gallery/013f4.jpg"
                            alt="Inspire Softech Event"
                            className="w-full h-[420px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                        /> */}
                        {/* Overlay Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full shadow-lg hover:scale-105 transition">
                                <Play className="w-5 h-5 text-amber-600" />
                                <span className="font-medium text-gray-700">Watch Intro</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="lg:pl-6">
                        {/* Small Tag */}
                        <div className="inline-flex items-center gap-2 bg-amber-100/50 px-4 py-1.5 rounded-full text-sm font-semibold text-amber-700 mb-5">
                            About Us
                        </div>

                        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                            Pioneering <span className="text-amber-500">Digital</span> Transformation
                        </h1>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
                            At <span className="font-semibold text-gray-900">INSPIRE SOFTECH Group</span>, we’ve been driving innovation since 2007 — delivering
                            world-class <span className="text-amber-600 font-medium">training</span>, <span className="text-blue-600 font-medium">technology</span>, and
                            <span className="text-green-600 font-medium">industry-ready</span> solutions that connect learners with real-world impact.
                        </p>

                        {/* CTA Buttons */}
                        {/* <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <a
                                href="#about"
                                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold px-7 py-3.5 rounded-xl shadow-md hover:shadow-xl hover:from-amber-600 hover:to-yellow-600 transition-all duration-300"
                            >
                                Explore Our Story
                                <ArrowRight className="w-5 h-5" />
                            </a>

                            <a
                                href="tel:+918667493679"
                                className="inline-flex items-center gap-4 bg-white border border-gray-200 px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="bg-green-100 p-2 rounded-lg">
                                    <PhoneCall className="w-5 h-5 text-green-600" />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm text-gray-500">Call us</p>
                                    <p className="font-semibold text-gray-900">+91 86674 93679</p>
                                </div>
                            </a>
                        </div> */}

                        {/* Stats Section */}
                        <div className="flex flex-wrap items-cen ter justify-center sm:justify-start gap-8 border-t border-gray-200 pt-6">
                            {[
                                { icon: Users, label: "Students", value: "10K+" },
                                { icon: BookOpen, label: "Projects", value: "500+" },
                                { icon: Globe, label: "Countries", value: "15+" }
                            ].map(({ icon: Icon, label, value }, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="bg-amber-100 p-2.5 rounded-lg">
                                        <Icon className="w-5 h-5 text-amber-600" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 text-lg">{value}</div>
                                        <div className="text-sm text-gray-500">{label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPageSimpleHero;