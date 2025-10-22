"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import {
    GraduationCap,
    Code,
    Cloud,
    Cpu,
    Building2,
    ArrowRight,
    X,
    ExternalLink,
    Sparkles,
    Target,
    Users,
    Zap,
} from "lucide-react";
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
        about:
            "Delivering web, mobile and enterprise solutions for growing businesses.",
        services: ["Web & mobile apps", "Enterprise software", "Cloud & e-commerce"],
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
        name: "IGreen StarTech Solutions",
        shortName: "IGreen StarTech Solutions",
        icon: Cpu,
        color: "purple",
        description: "AI, IoT & Emerging Tech Research",
        about: "R&D focused on AI, IoT and data-driven products.",
        services: ["AI/ML", "IoT prototyping", "Data science"],
    },
];

const colorMap = {
    amber: {
        accent: "amber-500",
        soft: "amber-50",
        gradient: "from-amber-500 to-yellow-500",
        light: "amber-100",
        hoverText: "group-hover:text-amber-500",
        hoverBorder: "hover:border-amber-500",
        hoverShadow: "hover:shadow-amber-200/50",
        hoverBg: "hover:bg-amber-500/3",
    },
    blue: {
        accent: "blue-500",
        soft: "blue-50",
        gradient: "from-blue-500 to-cyan-500",
        light: "blue-100",
        hoverText: "group-hover:text-blue-500",
        hoverBorder: "hover:border-blue-500",
        hoverShadow: "hover:shadow-blue-200/50",
        hoverBg: "hover:bg-blue-500/3",
    },
    green: {
        accent: "green-500",
        soft: "green-50",
        gradient: "from-green-500 to-emerald-500",
        light: "green-100",
        hoverText: "group-hover:text-green-500",
        hoverBorder: "hover:border-green-500",
        hoverShadow: "hover:shadow-green-200/50",
        hoverBg: "hover:bg-green-500/3",
    },
    purple: {
        accent: "purple-500",
        soft: "purple-50",
        gradient: "from-purple-500 to-violet-500",
        light: "purple-100",
        hoverText: "group-hover:text-purple-500",
        hoverBorder: "hover:border-purple-500",
        hoverShadow: "hover:shadow-purple-200/50",
        hoverBg: "hover:bg-purple-500/3",
    },
} as const;



export default function OurCompaniesSimplePro() {
    const [open, setOpen] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [isVisible, setIsVisible] = useState(false);

    // client-only mount flag (prevents hydration mismatch for random particles)
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    // generate deterministic-ish particles only on client
    const particles = useMemo(() => {
        if (!mounted) return [];
        return Array.from({ length: 12 }).map(() => ({
            top: `${Math.round(Math.random() * 90)}%`,
            left: `${Math.round(Math.random() * 95)}%`,
            size: `${Math.round(6 + Math.random() * 10)}px`,
            opacity: 0.08 + Math.random() * 0.32,
        }));
    }, [mounted]);

    // prefers-reduced-motion (client)
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined" && window.matchMedia) {
            setPrefersReducedMotion(
                window.matchMedia("(prefers-reduced-motion: reduce)").matches
            );
        }
    }, []);

    // IntersectionObserver: reveal when section visible
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.18 }
        );
        obs.observe(el);
        return () => {
            obs.disconnect();
        };
    }, []);

    // Entrance animation (headers -> cards -> stats -> particles)
    useEffect(() => {
        if (!isVisible || !containerRef.current) return;
        if (prefersReducedMotion) {
            // reveal without animation
            const cards = cardsRef.current.filter(Boolean) as HTMLElement[];
            cards.forEach((c) => (c.style.opacity = "1"));
            const stats = Array.from(
                containerRef.current.parentElement!.querySelectorAll(".stat")
            ) as HTMLElement[];
            stats.forEach((s) => (s.style.opacity = "1"));
            const headers = Array.from(
                containerRef.current.parentElement!.querySelectorAll(".section-header")
            ) as HTMLElement[];
            headers.forEach((h) => (h.style.opacity = "1"));
            return;
        }

        // create a GSAP context scoped to containerRef so cleanup is automatic
        const ctx = gsap.context(() => {
            const headers = Array.from(
                containerRef.current!.parentElement!.querySelectorAll(".section-header")
            ) as HTMLElement[];
            const cards = cardsRef.current.filter(Boolean) as HTMLElement[];
            const stats = Array.from(
                containerRef.current!.parentElement!.querySelectorAll(".stat")
            ) as HTMLElement[];
            const particleEls = Array.from(
                containerRef.current!.querySelectorAll(".floating-particle")
            ) as HTMLElement[];

            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // header
            tl.fromTo(
                headers,
                { opacity: 0, y: -26 },
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
            );

            // cards
            tl.fromTo(
                cards,
                { opacity: 0, y: 18, rotationX: 6, scale: 0.985 },
                {
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    scale: 1,
                    duration: 0.3,
                    stagger: { each: 0.5, from: "start" },
                },
                "-=0.1"
            );

            // stats
            tl.fromTo(
                stats,
                { opacity: 0, y: 18, scale: 0.96 },
                { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.08 },
                "-=0.45"
            );

            // particles float
            if (particleEls.length) {
                gsap.to(particleEls, {
                    y: -14,
                    duration: 2.2,
                    repeat: -1,
                    yoyo: true,
                    stagger: 0.32,
                    ease: "sine.inOut",
                });
            }
        }, containerRef);

        // cleanup — ensure we return a void-producing cleanup
        return () => {
            ctx.revert();
        };
    }, [isVisible, prefersReducedMotion]);

    // overlay open/close animation (no page blur — overlay uses CSS backdrop-blur)
    useEffect(() => {
        if (!overlayRef.current) return;
        // if user prefers reduced motion, skip fancy anim
        if (prefersReducedMotion) {
            overlayRef.current.style.opacity = open ? "1" : "0";
            return;
        }

        const overlay = overlayRef.current;
        // animate overlay backdrop + content (overlay is the backdrop element; content is sibling .overlay-content)
        const content = overlay.parentElement?.querySelector(
            ".overlay-content"
        ) as HTMLElement | null;
        const tl = gsap.timeline();

        if (open) {
            tl.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.36, ease: "power2.out" }, 0);
            if (content)
                tl.fromTo(
                    content,
                    { opacity: 0, y: 18, scale: 0.98 },
                    { opacity: 1, y: 0, scale: 1, duration: 0.42, ease: "back.out(1.0)" },
                    0.04
                );
        } else {
            tl.to(content, { opacity: 0, y: 8, scale: 0.995, duration: 0.22, ease: "power2.in" }, 0);
            tl.to(overlay, { opacity: 0, duration: 0.22, ease: "power2.in" }, 0.02);
        }

        // cleanup — make sure to return a void-producing function
        return () => {
            tl.kill();
        };
    }, [open, prefersReducedMotion]);

    // keyboard escape to close overlay
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(null);
        };
        window.addEventListener("keydown", onKey);
        return () => {
            window.removeEventListener("keydown", onKey);
        };
    }, []);

    // hover handlers (instant tweens)
    const handleCardHover = (index: number) => {
        if (prefersReducedMotion) return;
        const card = cardsRef.current[index];
        if (card)
            gsap.to(card, {
                y: -8,
                scale: 1.02,
                rotationY: 2,
                duration: 0.28,
                ease: "power2.out",
            });
    };
    const handleCardLeave = (index: number) => {
        if (prefersReducedMotion) return;
        const card = cardsRef.current[index];
        if (card)
            gsap.to(card, {
                y: 0,
                scale: 1,
                rotationY: 0,
                duration: 0.28,
                ease: "power2.out",
            });
    };

    return (
        <section
            ref={sectionRef}
            className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
        >
            {/* Animated Background — render particles only after client mount to avoid hydration mismatch */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {mounted &&
                    particles.map((p, i) => (
                        <div
                            key={i}
                            className="floating-particle absolute rounded-full"
                            style={{
                                top: p.top,
                                left: p.left,
                                width: p.size,
                                height: p.size,
                                background: "rgba(245, 158, 11, 0.12)",
                                opacity: p.opacity,
                                filter: "blur(6px)",
                                transform: "translateZ(0)",
                            }}
                        />
                    ))}
                <div className="absolute top-10 left-10 w-32 h-32 bg-amber-200/20 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl" />
            </div>

            <div ref={containerRef} className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="section-header inline-flex items-center gap-3 mb-6 bg-white rounded-full px-6 py-3 shadow-lg border border-amber-100">
                        <Building2 className="w-5 h-5 text-amber-500" />
                        <span className="text-sm font-semibold text-gray-700 tracking-wide">OUR COMPANIES</span>
                        <Sparkles className="w-5 h-5 text-amber-500" />
                    </div>

                    <h1 className="section-header text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        One Group,{" "}
                        <span className="text-transparent bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text">
                            Focused Teams
                        </span>
                    </h1>
                    <p className="section-header text-gray-600 text-lg max-w-2xl mx-auto">
                        Clear specializations, measurable outcomes — built for scale and innovation.
                    </p>
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${isVisible ? "" : "opacity-0"}`}>
                    {companies.map((c, index) => {
                        const colors = colorMap[c.color as keyof typeof colorMap];
                        const Icon = c.icon;
                        return (
                            <article
                                ref={(el) => { cardsRef.current[index] = el as HTMLDivElement | null; }}
                                key={c.id}
                                className={`company-card group opacity-0 bg-white rounded-2xl border border-gray-200 shadow-lg p-6 flex items-start gap-5 cursor-pointer transform-gpu will-change-transform transition-all duration-500 hover:shadow-xl ${colors.hoverBorder} ${colors.hoverBg} ${colors.hoverShadow}`}
                                onClick={() => setOpen(c.id)}
                                onMouseEnter={() => handleCardHover(index)}
                                onMouseLeave={() => handleCardLeave(index)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") setOpen(c.id);
                                }}
                                aria-label={`${c.name} — open details`}
                            >
                                <div className="relative">
                                    <div
                                        className={`flex-shrink-0 rounded-xl p-4 bg-gradient-to-r ${colors.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                        style={{ width: 64, height: 64 }}
                                    >
                                        <Icon className="w-9 h-9 -translate-0.5  text-white" />
                                    </div>
                                    <div
                                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500"
                                        style={{ background: "rgba(0,0,0,0.02)" }}
                                    />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">{c.shortName}</h3>
                                    <p className="text-gray-600 mt-2 leading-relaxed">{c.description}</p>
                                    <div className="mt-4 flex items-center gap-4">
                                        <button className="text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors duration-300 group-hover:scale-105" onClick={(e) => { e.stopPropagation(); setOpen(c.id); }}>Explore Details</button>
                                        <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">{c.services.length} specialized services</span>
                                    </div>
                                </div>

                                <ArrowRight className={`w-5 h-5 text-gray-400 ${colors.hoverText} group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1`} />
                            </article>
                        );
                    })}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                    {[
                        { value: "4", label: "Specialized Companies", color: "amber", icon: Target },
                        { value: "16+", label: "Core Services", color: "blue", icon: Zap },
                        { value: "17+", label: "Years Excellence", color: "green", icon: Users },
                        { value: "1000+", label: "Projects Delivered", color: "amber", icon: Building2 },
                    ].map((stat, idx) => {
                        const Icon = stat.icon;
                        const statColors = colorMap[stat.color as keyof typeof colorMap];
                        return (
                            <div key={idx} className={`stat bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-200 transition-all duration-500 hover:scale-105 ${statColors.hoverBg} ${statColors.hoverBorder} ${statColors.hoverShadow}`}
                            >
                                <div className={`w-12 h-12 mx-auto mb-3 bg-${stat.color}-100 rounded-xl flex items-center justify-center`}>
                                    <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                                </div>
                                <div className={`text-2xl font-bold text-${stat.color}-600 mb-1`}>{stat.value}</div>
                                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Overlay — backdrop-blur applied here so dialog stays sharp */}
            {open && (
                <div className="fixed   inset-0 z-50 flex items-center justify-center px-4 pointer-events-auto">
                    {/* backdrop: semi-transparent + blur — only affects what's behind it */}
                    <div ref={overlayRef} className="absolute inset-0 bg-black/55 backdrop-blur-md transition-all" onClick={() => setOpen(null)} />

                    {/* dialog content (not blurred) — GSAP animates this for buttery effect */}
                    <div className="overlay-content  top-[9vh] relative max-w-4xl md:top-0 w-full mx-auto bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden transform-gpu will-change-transform">
                        <div className="p-8 flex flex-col md:flex-row gap-8">
                            <div className="flex-shrink-0">
                                {(() => {
                                    const comp = companies.find((x) => x.id === open)!;
                                    const Icon = comp.icon;
                                    const colors = colorMap[comp.color as keyof typeof colorMap];
                                    return (
                                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${colors.gradient} flex items-center justify-center shadow-xl`}>
                                            <Icon className="w-10 h-10 text-white" />
                                        </div>
                                    );
                                })()}
                            </div>

                            <div className="flex-1 min-w-0">
                                <h3 id="company-title" className="text-2xl font-bold text-gray-900 mb-3">{companies.find((x) => x.id === open)!.name}</h3>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">{companies.find((x) => x.id === open)!.about}</p>

                                <div className="mb-8">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2"><Zap className="w-5 h-5 text-amber-500" />Core Services</h4>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        {companies.find((x) => x.id === open)!.services.map((s, i) => <div key={i} className="p-4 rounded-xl bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors duration-300">{s}</div>)}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <a className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105" href="/companies" >Explore Services <ExternalLink className="w-4 h-4" /></a>
                                    <a className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:border-gray-400 transition-all duration-300 hover:scale-105" href="/contact">Contact Team <ArrowRight className="w-4 h-4 " /></a>
                                </div>
                            </div>

                            <button className="absolute top-4 right-4 p-3 rounded-xl hover:bg-gray-100 transition-colors duration-300 hover:scale-110" onClick={() => setOpen(null)} aria-label="Close dialog"><X className="w-5 h-5 text-gray-600" /></button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
