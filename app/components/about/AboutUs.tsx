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

    const values = [
        { icon: Lightbulb, title: "Innovation", description: "Pushing boundaries with creative solutions", emoji: "💡" },
        { icon: Shield, title: "Integrity", description: "Building trust through transparency", emoji: "🤝" },
        { icon: Award, title: "Excellence", description: "Delivering exceptional quality in everything", emoji: "🌍" },
        { icon: HeartHandshake, title: "Collaboration", description: "Achieving more together", emoji: "🌟" }
    ];

    const milestones = [
        { year: "2007", title: "Company Founded", description: "Started our journey in technology education" },
        { year: "2012", title: "First Expansion", description: "Launched corporate training division" },
        { year: "2018", title: "Group Formation", description: "United four companies under one vision" },
        { year: "2024", title: "Global Reach", description: "Serving clients across 15+ countries" }
    ];

    return (
        <div className="bg-white">


            {/* Values Section */}
            <section
                ref={el => sectionRefs.current[1] = el}
                className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4">
                            <Star className="w-4 h-4 text-amber-400" />
                            <span className="text-sm font-semibold">Our Core Values</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            What <span className="text-amber-400">Drives Us</span>
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                            The principles that guide our decisions and shape our culture
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {values.map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105 group"
                                >
                                    <div className="bg-amber-500/20 rounded-xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="w-8 h-8 text-amber-400" />
                                    </div>
                                    <div className="flex items-center justify-center gap-2 mb-3">
                                        <h3 className="text-xl font-bold">{value.title}</h3>
                                        {/* <span className="text-2xl">{value.emoji}</span> */}
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Journey Timeline */}
            <section
                ref={el => sectionRefs.current[2] = el}
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
                                    <div className="flex-1 bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                                        <p className="text-gray-600">{milestone.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            {/* <section
                ref={el => sectionRefs.current[3] = el}
                className="py-16 md:py-20 bg-gradient-to-r from-amber-500 to-yellow-500"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Zap className="w-8 h-8" />
                            <Rocket className="w-8 h-8" />
                            <Users className="w-8 h-8" />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Transform Your Future?
                        </h2>

                        <p className="text-amber-100 text-lg md:text-xl mb-8 leading-relaxed">
                            Join thousands of individuals and organizations who have transformed their careers
                            and businesses with our comprehensive technology solutions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="#"
                                className="bg-white text-amber-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 text-lg"
                            >
                                Start Your Journey
                                <ArrowRight className="w-5 h-5" />
                            </a>

                            <a href="tel:+918667493679" className="group">
                                <div className="flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4 hover:bg-white/30 transition-all duration-300">
                                    <div className="bg-white/20 p-3 rounded-full">
                                        <PhoneCall className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-amber-100 text-sm">Call Us Now</p>
                                        <p className="font-bold text-white text-lg group-hover:scale-105 transition-transform">
                                            +91 86674 93679
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="mt-8 flex flex-wrap justify-center gap-6 text-amber-100 text-sm">
                            <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4" />
                                <span>15+ Countries Served</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                <span>10,000+ Students Trained</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="w-4 h-4" />
                                <span>500+ Projects Delivered</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default AboutPage;