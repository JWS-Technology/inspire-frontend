"use client";

import React, { useEffect, useRef, useState } from "react";
import { GraduationCap, Code, Cloud, Cpu, Building2, ArrowRight, Zap, X, ExternalLink } from "lucide-react";
import gsap from "gsap";

const companies = [
    {
        id: 1,
        name: "Inspire Softech Solutions",
        shortName: "Inspire Softech",
        icon: GraduationCap,
        color: "amber",
        description: "Training & Skill Development",
        about:
            "Empowering learners and professionals with hands-on internships, workshops, and certifications.",
        services: [
            "AICTE-approved internship programs",
            "Corporate & faculty development training",
            "Job-oriented certification courses",
        ],
    },
    {
        id: 2,
        name: "Edinz Tech Pvt. Ltd.",
        shortName: "Edinz Tech",
        icon: Code,
        color: "blue",
        description: "Technology Services & Solutions",
        about: "Delivering web, mobile and enterprise solutions for growing businesses.",
        services: ["Web & mobile apps", "Enterprise software", "Cloud & e‑commerce"],
    },
    {
        id: 3,
        name: "Adore Technology Solutions",
        shortName: "Adore Tech",
        icon: Cloud,
        color: "green",
        description: "Enterprise Technology & Automation",
        about: "Cloud-first enterprise systems, ERP/CRM and automation tooling.",
        services: ["ERP & CRM", "Cloud integration", "Infra & support"],
    },
    {
        id: 4,
        name: "Igrean StarTech Solutions",
        shortName: "Igrean StarTech",
        icon: Cpu,
        color: "purple",
        description: "AI, IoT & Emerging Tech Research",
        about: "R&D focused on AI, IoT and data-driven products.",
        services: ["AI/ML", "IoT prototyping", "Data science"],
    },
];

const colorMap = {
    amber: { accent: "amber-500", soft: "amber-50" },
    blue: { accent: "blue-500", soft: "blue-50" },
    green: { accent: "green-500", soft: "green-50" },
    purple: { accent: "purple-500", soft: "purple-50" },
} as const;

export default function OurCompaniesSimplePro() {
    const [open, setOpen] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // entrance animation (subtle, performant)
        if (!containerRef.current) return;
        const cards = Array.from(containerRef.current.querySelectorAll('.company-card')) as HTMLElement[];
        gsap.fromTo(
            cards,
            { opacity: 0, y: 12, scale: 0.995 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.07, ease: 'power2.out' }
        );
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(null);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    useEffect(() => {
        if (!overlayRef.current) return;
        if (open) {
            gsap.fromTo(
                overlayRef.current,
                { opacity: 0, scale: 0.98 },
                { opacity: 1, scale: 1, duration: 0.32, ease: 'power2.out' }
            );
        } else {
            gsap.to(overlayRef.current, { opacity: 0, duration: 0.24, ease: 'power2.in' });
        }
    }, [open]);

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <Building2 className="w-5 h-5 text-amber-500" />
                        <h2 className="text-lg font-semibold text-gray-700">Our Companies</h2>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">One Group, Focused Teams</h1>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Clear specializations, measurable outcomes — built for scale.</p>
                </div>

                {/* GRID */}
                <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {companies.map((c) => {
                        const colors = colorMap[c.color as keyof typeof colorMap];
                        const Icon = c.icon;
                        return (
                            <article
                                key={c.id}
                                className="company-card bg-white rounded-xl  border shadow-sm p-5 flex items-start gap-4 cursor-pointer will-change-transform transition-transform hover:translate-y-[-4px]  hover:shadow-md"
                                onClick={() => setOpen(c.id)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') setOpen(c.id);
                                }}
                                aria-label={`${c.name} — open details`}
                            >
                                <div className={`flex-shrink-0 rounded-lg p-3 bg-${colors.soft} border border-${colors.accent}`}
                                    style={{ width: 56, height: 56, display: 'grid', placeItems: 'center' }}>
                                    <Icon className={`w-5 h-5 text-${colors.accent}`} />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-medium text-gray-900">{c.shortName}</h3>
                                    <p className="text-sm text-gray-600 mt-1">{c.description}</p>
                                    <div className="mt-3 flex items-center gap-3">
                                        <button className="text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-lg" onClick={(e) => { e.stopPropagation(); setOpen(c.id); }}>
                                            Learn
                                        </button>
                                        <span className="text-xs text-gray-400">{c.services.length} services</span>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* STATS */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <div className="text-xl font-semibold text-amber-500">4</div>
                        <div className="text-xs text-gray-500">Companies</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <div className="text-xl font-semibold text-blue-500">16+</div>
                        <div className="text-xs text-gray-500">Services</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <div className="text-xl font-semibold text-green-500">17+</div>
                        <div className="text-xs text-gray-500">Years</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <div className="text-xl font-semibold text-purple-500">1000+</div>
                        <div className="text-xs text-gray-500">Projects</div>
                    </div>
                </div>
            </div>

            {/* Overlay details (absolute) */}
            {open && (
                <div className="fixed inset-0 z-40 flex items-center justify-center px-4">
                    <div
                        ref={overlayRef}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={() => setOpen(null)}
                    />

                    <div
                        className="relative max-w-3xl w-full mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="company-title"
                        style={{ transformOrigin: 'center', willChange: 'transform, opacity' }}
                    >
                        <div className="p-6 md:p-8 flex items-start gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-lg bg-gray-50 flex items-center justify-center border">
                                    {(() => {
                                        const comp = companies.find((x) => x.id === open)!;
                                        const Icon = comp.icon;
                                        return <Icon className="w-6 h-6 text-gray-700" />;
                                    })()}
                                </div>
                            </div>

                            <div className="flex-1 min-w-0">
                                <h3 id="company-title" className="text-xl font-semibold text-gray-900">{companies.find((x) => x.id === open)!.name}</h3>
                                <p className="text-sm text-gray-600 mt-2">{companies.find((x) => x.id === open)!.about}</p>

                                <div className="mt-4 grid sm:grid-cols-2 gap-3">
                                    {companies.find((x) => x.id === open)!.services.map((s, i) => (
                                        <div key={i} className="p-3 rounded-lg bg-gray-50 text-sm text-gray-700">{s}</div>
                                    ))}
                                </div>

                                <div className="mt-6 flex gap-3">
                                    <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium" href="#" onClick={(e) => e.preventDefault()}>
                                        Explore Services <ExternalLink className="w-4 h-4 opacity-80" />
                                    </a>
                                    <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium" href="#" onClick={(e) => e.preventDefault()}>
                                        Contact Team <ArrowRight className="w-4 h-4 opacity-80" />
                                    </a>
                                </div>
                            </div>

                            <button className="absolute top-3 right-3 p-2 rounded-full  hover:bg-gray-100" onClick={() => setOpen(null)} aria-label="Close dialog">
                                <X className="w-4 h-4 text-gray-700" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
        /* Keep animation GPU-friendly: only transform & opacity changes on hover/enter */
        .company-card { will-change: transform, opacity; }

        /* Tailwind dynamic classes can't be used in string templates for bg-*/
        /* So keep a minimal mapping in code if you need more complex colorization. */
      `}</style>
        </section>
    );
}
