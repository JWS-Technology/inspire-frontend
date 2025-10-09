"use client";

import React, { useEffect, useRef } from "react";
import { BookOpen, GraduationCap, PhoneCall, Target, Eye, Users, Zap, ArrowRight, Rocket, Shield, Globe, Lightbulb, HeartHandshake, Award, Clock, Star } from "lucide-react";
import gsap from "gsap";

const AboutPage: React.FC = () => {
    const sectionRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Staggered section animations
            gsap.fromTo(sectionRefs.current.filter(Boolean),
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRefs.current[0],
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Floating animation for icons
            gsap.to(".floating-icon", {
                y: -10,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.5
            });
        });

        return () => ctx.revert();
    }, []);


    const milestones = [
        { year: "2007", title: "Company Founded", description: "Started our journey in technology education" },
        { year: "2012", title: "First Expansion", description: "Launched corporate training division" },
        { year: "2018", title: "Group Formation", description: "United four companies under one vision" },
        { year: "2024", title: "Global Reach", description: "Serving clients across 15+ countries" }
    ];

    return (
        <div className="bg-white">

            {/* Journey Timeline */}
            <section
                ref={el => { sectionRefs.current[2] = el; }}
                className="py-16 md:py-24 bg-white"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 py-2 mb-4">
                            <Clock className="w-4 h-4 text-amber-600" />
                            <span className="text-sm font-semibold text-amber-700">Our Journey</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Milestones & <span className="text-amber-500">Achievements</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            From humble beginnings to becoming a technology powerhouse
                        </p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-amber-200 h-full hidden md:block"></div>

                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                        } gap-6 md:gap-12`}
                                >
                                    {/* Year */}
                                    <div className="flex-1 text-center md:text-right">
                                        <div className="bg-amber-500 text-white rounded-2xl px-6 py-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
                                            <div className="text-2xl md:text-3xl font-bold">{milestone.year}</div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className={`flex-1 gap-5  ${index % 2 === 0 ? '-translate-x-5' : 'translate-x-5'
                                        }  bg-gray-50 rounded-2xl  p-6 shadow-lg border border-gray-200`}>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                                        <p className="text-gray-600">{milestone.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutPage;