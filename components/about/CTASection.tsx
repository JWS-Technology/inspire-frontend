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


    return (
        <div className="bg-white">

            {/* CTA Section */}
            <section
                ref={el => { sectionRefs.current[3] = el; }}
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
            </section>
        </div>
    );
};

export default AboutPage;