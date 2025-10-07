"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type Logo = {
    id: string;
    src: string;
    alt: string;
    gradient?: string;
};

const logos: Logo[] = [
    {
        id: "St. Joseph's College, Trichy",
        src: "/logos/sjc.png",
        alt: "SJC",
        gradient: "from-blue-500/10 to-purple-500/10"
    },
    {
        id: "St. Joseph's College of Engineering",
        src: "/logos/sjc.png",
        alt: "SJC Engineering",
        gradient: "from-green-500/10 to-cyan-500/10"
    },
    {
        id: "St. Joseph's Institute of Technology",
        src: "/logos/sjc.png",
        alt: "SJC Tech",
        gradient: "from-orange-500/10 to-red-500/10"
    },
    {
        id: "St. Joseph's Business School",
        src: "/logos/sjc.png",
        alt: "SJC Business",
        gradient: "from-purple-500/10 to-pink-500/10"
    },
];

export default function LogoRowMarquee() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const marqueeRef = useRef<HTMLDivElement | null>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        const container = containerRef.current;
        if (!marquee || !container) return;

        const resizeAndAnimate = () => {
            if (tlRef.current) {
                tlRef.current.kill();
                tlRef.current = null;
            }

            const totalWidth = marquee.scrollWidth;
            const singleWidth = totalWidth / 2 || totalWidth;

            if (singleWidth === 0) return;

            const speedPxPerSec = 40;
            const duration = Math.max(12, singleWidth / speedPxPerSec);

            const ctx = gsap.context(() => {
                tlRef.current = gsap.timeline({
                    repeat: -1,
                    defaults: { ease: "power1.inOut" },
                });

                gsap.set(marquee, { x: 0 });

                tlRef.current
                    .fromTo(marquee,
                        { x: 0 },
                        {
                            x: -singleWidth,
                            duration,
                            ease: "power1.inOut",
                        }
                    );

                // Add subtle scale animation to logos
                tlRef.current.fromTo(marquee.children,
                    { scale: 0.98 },
                    { scale: 1, duration: 3, ease: "power2.out" },
                    0
                );
            }, container);
        };

        const onLoad = () => {
            window.setTimeout(resizeAndAnimate, 50);
        };

        onLoad();

        const onResize = () => {
            if ((window as any).__logoMarqueeResizeTid) {
                window.clearTimeout((window as any).__logoMarqueeResizeTid);
            }
            (window as any).__logoMarqueeResizeTid = window.setTimeout(() => {
                resizeAndAnimate();
            }, 120);
        };

        window.addEventListener("resize", onResize);
        window.addEventListener("orientationchange", onResize);

        const imgs = Array.from(marquee.querySelectorAll("img"));
        let loadedCount = 0;
        const onImgLoad = () => {
            loadedCount++;
            if (loadedCount === imgs.length) {
                resizeAndAnimate();
            }
        };
        imgs.forEach((img) => {
            if ((img as HTMLImageElement).complete) {
                onImgLoad();
            } else {
                img.addEventListener("load", onImgLoad, { once: true });
                img.addEventListener("error", onImgLoad, { once: true });
            }
        });

        return () => {
            if (tlRef.current) {
                tlRef.current.kill();
                tlRef.current = null;
            }
            window.removeEventListener("resize", onResize);
            window.removeEventListener("orientationchange", onResize);
        };
    }, []);

    const handleHoverStart = () => {
        if (tlRef.current) {
            tlRef.current.timeScale(0.4);
        }
    };

    const handleHoverEnd = () => {
        if (tlRef.current) {
            tlRef.current.timeScale(1);
        }
    };

    return (
        <section className="w-full py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-32 -left-32 w-80 h-80 bg-gradient-to-r from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-l from-purple-100/40 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-100/20 to-blue-100/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-8xl mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Partners</span>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    </div>
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-6">
                        Trusted Institutions
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed font-light">
                        Collaborating with prestigious educational institutions worldwide to deliver excellence
                    </p>
                </div>

                {/* Marquee container with enhanced gradient overlays */}
                <div className="relative">
                    {/* Left gradient fade with shine effect */}
                    <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-slate-50/95 via-slate-50/50 to-transparent z-20 pointer-events-none">
                        <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
                    </div>

                    {/* Right gradient fade with shine effect */}
                    <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-slate-50/95 via-slate-50/50 to-transparent z-20 pointer-events-none">
                        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
                    </div>

                    {/* Main marquee container */}
                    <div
                        ref={containerRef}
                        className="relative overflow-hidden rounded-3xl bg-whi te/60 backdro p-blur-md transition-shadow duration-500"
                        onMouseEnter={handleHoverStart}
                        onMouseLeave={handleHoverEnd}
                        aria-hidden={false}
                    >
                        {/* Marquee wrapper */}
                        <div
                            ref={marqueeRef}
                            className="flex items-center gap-10 whitespace-nowrap will-change-transform py-4"
                            style={{ alignItems: "center" }}
                            aria-label="Scrolling partner logos"
                        >
                            {/* First set */}
                            {logos.map((logo, index) => (
                                <Tile key={`a-${logo.id}`} logo={logo} index={index} />
                            ))}
                            {/* Second set (duplicate) */}
                            {logos.map((logo, index) => (
                                <Tile key={`b-${logo.id}`} logo={logo} index={index} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Decorative footer */}
                <div className="flex justify-center mt-12">
                    <div className="flex items-center gap-2 text-slate-400">
                        <div className="w-16 h-px bg-gradient-to-r from-transparent to-slate-300"></div>
                        <span className="text-xs font-medium">Scroll to Explore</span>
                        <div className="w-16 h-px bg-gradient-to-l from-transparent to-slate-300"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Tile({ logo, index }: { logo: Logo; index: number }) {
    const tileRef = useRef<HTMLDivElement>(null);

    const handleHover = () => {
        if (tileRef.current) {
            gsap.to(tileRef.current, {
                y: -6,
                scale: 1.03,
                duration: 0.3,
                ease: "back.out(1.7)",
            });
        }
    };

    const handleHoverExit = () => {
        if (tileRef.current) {
            gsap.to(tileRef.current, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
            });
        }
    };

    return (
        <div
            ref={tileRef}
            className="flex-shrink-0 w-80 h-32 bg-gradient-to-br from-white/95 to-white/85 rounded-2xl shadow-md hover:shadow-xl border border-white/80 backdrop-blur-sm flex items-center px-7 transition-all duration-400 hover:border-blue-200/60 relative overflow-hidden group cursor-pointer"
            role="img"
            aria-label={logo.alt}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
        >
            {/* Animated background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${logo.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>

            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out"></div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-blue-500/5 blur-md"></div>

            {/* Content */}
            <div className="flex items-center gap-6 w-full relative z-10">
                {/* Logo container with enhanced styling */}
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all duration-500 group-hover:scale-110 border border-slate-100/80 relative overflow-hidden">
                    {/* Logo background shine */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50/80"></div>
                    <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={60}
                        height={60}
                        style={{
                            objectFit: "contain",
                        }}
                        className="transition-transform duration-500 group-hover:scale-110 relative z-10 drop-shadow-sm"
                        priority={index < 4}
                    />
                </div>

                {/* Text content */}
                <div className="flex-1 min-w-0">
                    <h2 className="text-[16px] font-semibold bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-500 leading-tight whitespace-normal line-clamp-2">
                        {logo.id}
                    </h2>
                    <p className="text-xs text-slate-500 mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-75 font-medium">
                        Premier Education Partner
                    </p>
                </div>

                {/* Hover indicator arrow */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 transform translate-x-2 group-hover:translate-x-0">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}