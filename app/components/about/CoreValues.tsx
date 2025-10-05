"use client";

import React, { useEffect, useRef } from "react";
import { Shield, Lightbulb, HeartHandshake, Award, Star } from "lucide-react";
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

    return (
        <div className="bg-white">
            {/* Values Section */}
            <section
                ref={el => { sectionRefs.current[1] = el; }}
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


        </div>
    );
};

export default AboutPage;