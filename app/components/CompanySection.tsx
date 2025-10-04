"use client";

import React, { useEffect, useRef, useState } from "react";
import { GraduationCap, Code, Cloud, Cpu, Building2, ArrowRight, Target, Zap } from "lucide-react";
import gsap from "gsap";

const OurCompaniesSmartGrid = () => {
    const [hoveredCompany, setHoveredCompany] = useState<number | null>(null);
    const [expandedCompany, setExpandedCompany] = useState<number | null>(null);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    const sectionRef = useRef<HTMLElement | null>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const expandTimeoutRef = useRef<number | null>(null);
    const collapseTimeoutRef = useRef<number | null>(null);

    const companies = [
        { id: 1, name: "Inspire Softech Solutions", shortName: "Inspire Softech", icon: GraduationCap, description: "Training & Skill Development", tagline: "Empowering Minds through Training, Internships & Skill Development", color: "amber", about: "Inspire Softech Solutions is the training and skill development arm of the group, empowering learners and professionals with hands-on internships, workshops, and certifications.", services: ["Internship programs (AICTE-approved, project-based)", "Online & international workshops", "Corporate & faculty development training", "Job-oriented certification courses"] },
        { id: 2, name: "Edinz Tech Pvt. Ltd.", shortName: "Edinz Tech", icon: Code, description: "Technology Services & Solutions", tagline: "Innovating Businesses with Smart Digital Solutions", color: "blue", about: "Edinz Tech Pvt. Ltd. is the technology services company of the group, delivering innovative IT solutions for businesses worldwide.", services: ["Web & mobile app development", "Enterprise software solutions", "IT consulting & strategy", "Cloud integration & e-commerce solutions"] },
        { id: 3, name: "Adore Technology Solutions", shortName: "Adore Technology", icon: Cloud, description: "Enterprise Technology & Automation", tagline: "Transforming Enterprises with Cloud & Business Technology", color: "green", about: "Adore Technology Solutions specializes in enterprise technology and business automation, helping organizations embrace secure and scalable digital systems.", services: ["ERP & CRM implementation", "Cloud-based enterprise solutions", "IT infrastructure & support services", "Business automation tools"] },
        { id: 4, name: "Igrean StarTech Solutions", shortName: "Igrean StarTech", icon: Cpu, description: "AI, IoT & Emerging Tech Research", tagline: "Driving the Future with AI, IoT & Emerging Tech", color: "purple", about: "Igrean StarTech Solutions is the research and innovation hub of the group, focused on emerging technologies such as AI, IoT, and Data Science.", services: ["Artificial Intelligence & Machine Learning", "IoT solutions & prototyping", "Data Science & advanced analytics", "Research-driven innovation projects"] }
    ];

    const colorClasses = {
        amber: { gradient: "from-amber-500 to-yellow-500", border: "border-amber-200", bg: "bg-amber-50", text: "text-amber-600", hover: "hover:border-amber-300" },
        blue: { gradient: "from-blue-500 to-cyan-500", border: "border-blue-200", bg: "bg-blue-50", text: "text-blue-600", hover: "hover:border-blue-300" },
        green: { gradient: "from-green-500 to-emerald-500", border: "border-green-200", bg: "bg-green-50", text: "text-green-600", hover: "hover:border-green-300" },
        purple: { gradient: "from-purple-500 to-violet-500", border: "border-purple-200", bg: "bg-purple-50", text: "text-purple-600", hover: "hover:border-purple-300" }
    };

    useEffect(() => {
        // detect touch capability once (useful for hybrid devices too)
        const touch = typeof window !== "undefined" && (
            'ontouchstart' in window ||
            navigator.maxTouchPoints > 0 ||
            // TypeScript: msMaxTouchPoints is not standard, so use type assertion to Navigator
            (navigator as Navigator & { msMaxTouchPoints?: number }).msMaxTouchPoints! > 0
        );
        setIsTouchDevice(Boolean(touch));

        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Section entrance
            gsap.fromTo(sectionRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });

            // Header animation
            gsap.fromTo(".section-header", { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "back.out(1.7)" });

            // Cards staggered animation (only pass existing DOM nodes)
            const nodes = cardsRef.current.filter(Boolean) as Element[];
            gsap.fromTo(nodes, { y: 60, opacity: 0, scale: 0.8 }, { y: 0, opacity: 1, scale: 1, duration: 0.8, delay: 0.6, stagger: 0.08, ease: "back.out(1.7)" });
        }, sectionRef);

        return () => {
            if (expandTimeoutRef.current) window.clearTimeout(expandTimeoutRef.current);
            if (collapseTimeoutRef.current) window.clearTimeout(collapseTimeoutRef.current);
            ctx.revert();
        };
    }, []);

    // Hover handler: set hovered state and schedule expand (desktop only)
    const handleCardHover = (id: number) => {
        if (isTouchDevice) return; // ignore hover on touch devices

        if (collapseTimeoutRef.current) {
            window.clearTimeout(collapseTimeoutRef.current);
            collapseTimeoutRef.current = null;
        }

        setHoveredCompany(id);

        if (expandTimeoutRef.current) {
            window.clearTimeout(expandTimeoutRef.current);
            expandTimeoutRef.current = null;
        }

        expandTimeoutRef.current = window.setTimeout(() => {
            setExpandedCompany(id);
            expandTimeoutRef.current = null;
        }, 250);
    };

    // Leave handler: collapse with a slight delay
    const handleCardLeave = () => {
        if (isTouchDevice) return;

        setHoveredCompany(null);

        if (expandTimeoutRef.current) {
            window.clearTimeout(expandTimeoutRef.current);
            expandTimeoutRef.current = null;
        }

        if (collapseTimeoutRef.current) window.clearTimeout(collapseTimeoutRef.current);
        collapseTimeoutRef.current = window.setTimeout(() => {
            setExpandedCompany(null);
            collapseTimeoutRef.current = null;
        }, 220);
    };

    // Click handler: toggle expansion on touch devices (and also allow click on desktop)
    const handleCardClick = (companyId: number) => {
        // if touch device, toggle expand
        if (isTouchDevice) {
            setExpandedCompany(prev => (prev === companyId ? null : companyId));
            // ensure hovered state matches (visual nicety)
            setHoveredCompany(companyId);
            return;
        }

        // On desktop, treat click as a toggle as well (optional)
        setExpandedCompany(prev => (prev === companyId ? null : companyId));
    };

    const getGridClasses = (companyId: number) => {
        if (!expandedCompany) return "md:col-span-1";

        if (companyId === expandedCompany) return "md:col-span-2";

        const expandedIndex = companies.findIndex(c => c.id === expandedCompany);
        const currentIndex = companies.findIndex(c => c.id === companyId);

        if (expandedIndex < 2 && currentIndex < 2) return currentIndex === expandedIndex ? "md:col-span-2" : "md:col-span-1";
        if (expandedIndex >= 2 && currentIndex >= 2) return currentIndex === expandedIndex ? "md:col-span-2" : "md:col-span-1";

        return "md:col-span-1";
    };

    return (
        <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="section-header text-center mb-16">
                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                        <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-lg border border-amber-100">
                            <Building2 className="w-4 h-4 text-amber-500" />
                            <span className="text-sm font-semibold text-gray-700">Our Companies</span>
                        </div>
                        <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-lg border border-blue-100">
                            <Target className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-semibold text-gray-700">Hover / Tap to Explore</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        The <span className="text-amber-500">Inspire Softech</span> Family
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Four specialized companies united under one umbrella to deliver comprehensive technology solutions.
                    </p>
                </div>

                {/* Smart Grid Layout */}
                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {companies.map((company, index) => {
                        const colors = colorClasses[company.color as keyof typeof colorClasses];
                        const IconComponent = company.icon;
                        const isExpanded = expandedCompany === company.id;
                        const isHovered = hoveredCompany === company.id;

                        return (
                            <div
                                key={company.id}
                                ref={el => { cardsRef.current[index] = el; }}
                                role="button"
                                tabIndex={0}
                                onClick={() => handleCardClick(company.id)}
                                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleCardClick(company.id); }}
                                onMouseEnter={() => handleCardHover(company.id)}
                                onMouseLeave={handleCardLeave}
                                className={`border-2 rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer ${colors.border} ${colors.bg} ${isExpanded ? 'md:col-span-2 shadow-2xl scale-105 z-10' : 'shadow-lg hover:shadow-xl'} ${getGridClasses(company.id)}`}
                            >
                                {/* Card Content */}
                                <div className={`p-6 ${isExpanded ? 'pb-4' : ''}`}>
                                    <div className="flex items-start gap-4">
                                        {/* Icon */}
                                        <div className={`bg-gradient-to-r ${colors.gradient} rounded-xl p-3 flex-shrink-0 shadow-lg transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>

                                        {/* Main Content */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{company.shortName}</h3>
                                            <p className="text-gray-700 font-medium mb-2">{company.description}</p>
                                            <p className={`text-sm italic ${colors.text} font-semibold`}>{company.tagline}</p>
                                        </div>

                                        {/* Arrow Indicator */}
                                        <div className={`flex-shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}>
                                            <ArrowRight className="w-5 h-5 text-gray-400" />
                                        </div>
                                    </div>

                                    {/* Expandable Content - Shows on hover/expand */}
                                    {isExpanded && (
                                        <div className="mt-4 pt-4 border-t transition-all duration-500 border-gray-200 animate-fadeIn" onMouseEnter={() => {
                                            // keep expanded if user moves the mouse into the expanded area
                                            if (collapseTimeoutRef.current) {
                                                window.clearTimeout(collapseTimeoutRef.current);
                                                collapseTimeoutRef.current = null;
                                            }
                                        }}>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                {/* About Section */}
                                                <div>
                                                    <h4 className={`font-bold text-sm uppercase tracking-wide mb-3 ${colors.text}`}>About</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">{company.about}</p>
                                                </div>

                                                {/* Core Services */}
                                                <div>
                                                    <h4 className={`font-bold text-sm uppercase tracking-wide mb-3 ${colors.text}`}>Core Services</h4>
                                                    <ul className="space-y-2">
                                                        {company.services.map((service, serviceIndex) => (
                                                            <li key={serviceIndex} className="flex items-start gap-2 text-gray-700 text-sm">
                                                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colors.gradient} mt-1.5 flex-shrink-0`} />
                                                                <span className="leading-relaxed">{service}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* CTA Button */}
                                            <button
                                                className={`w-full bg-gradient-to-r ${colors.gradient} text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg mt-4`}
                                                onClick={(e) => { e.stopPropagation(); /* CTA click won't toggle collapse */ }}
                                                onMouseEnter={(e) => e.stopPropagation()}
                                            >
                                                Explore {company.shortName}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Footer */}
                <div className="text-center mt-12">
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-200">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <Zap className="w-5 h-5 text-amber-500" />
                            <span className="text-gray-700 font-semibold text-lg">Working together to empower your digital transformation journey</span>
                            <Zap className="w-5 h-5 text-amber-500" />
                        </div>
                        <p className="text-gray-500 text-sm mb-6">One vision, multiple specialties - delivering excellence across all technology domains</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">Contact Our Team</button>
                            <button className="border-2 border-gray-300 hover:border-amber-500 text-gray-700 hover:text-amber-500 font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">View All Services</button>
                        </div>
                    </div>
                </div>

            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn { animation: fadeIn 0.28s ease-out forwards; }

                /* Smooth grid transitions */
                .grid { transition: grid-template-columns 0.5s ease; }
            `}</style>
        </section>
    );
};

export default OurCompaniesSmartGrid;
