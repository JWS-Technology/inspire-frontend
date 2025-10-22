"use client";

import React, { useEffect, useRef, useState } from "react";
import { BookOpen, Users, GraduationCap, Award } from "lucide-react";

const StatsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    const stats = [
        { number: 500, label: "Total Courses", suffix: "+", icon: BookOpen },
        { number: 200000, label: "Our Students", suffix: "+", icon: Users },
        { number: 750, label: "Skilled Lecturers", suffix: "+", icon: GraduationCap },
        { number: 30, label: "Win Awards", suffix: "+", icon: Award }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <StatItem
                                key={index}
                                number={stat.number}
                                label={stat.label}
                                suffix={stat.suffix}
                                icon={IconComponent}
                                isVisible={isVisible}
                                delay={index * 200}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

interface StatItemProps {
    number: number;
    label: string;
    suffix?: string;
    icon: React.ComponentType<{ className?: string }>;
    isVisible: boolean;
    delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ number, label, suffix, icon: Icon, isVisible, delay }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const duration = 2000;
            const percentage = Math.min(progress / duration, 1);

            const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
            const currentCount = Math.floor(number * easeOutQuart);

            setCount(currentCount);

            if (progress < duration) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(number);
            }
        };

        const timeoutId = setTimeout(() => {
            animationFrame = requestAnimationFrame(animate);
        }, delay);

        return () => {
            clearTimeout(timeoutId);
            cancelAnimationFrame(animationFrame);
        };
    }, [isVisible, number, delay]);

    return (
        <div className="text-center text-white p-6 group hover:scale-105 transition-all duration-500">
            {/* Icon */}
            <div className="flex justify-center mb-4">
                <div className="p-3 bg-amber-500/10 rounded-full group-hover:bg-amber-500/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-amber-500" />
                </div>
            </div>

            {/* Animated Number */}
            <div className="mb-2">
                <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-amber-500">
                    {count}
                </span>
                {suffix && (
                    <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-amber-500">
                        {suffix}
                    </span>
                )}
            </div>

            {/* Label */}
            <p className="text-sm md:text-base text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                {label}
            </p>
        </div>
    );
};

export default StatsSection;