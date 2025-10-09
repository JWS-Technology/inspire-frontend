"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

declare global {
  interface Window {
    __marqueeResizeTid?: number;
  }
}

type Item = { name: string; logo: string };

type RowConfig = {
    id: string;
    items: Item[];
    label: string;
    color: string;
    reverse?: boolean;
};

// --- EDIT THESE ARRAYS (logo path is relative to `public/logos/`) ---
const rows: RowConfig[] = [
    {
        id: "corporate",
        label: "Corporate Clients",
        color: "from-blue-500 to-blue-600",
        items: [
            { name: "HCL", logo: "corporate-clients/hcl.png" },
            { name: "Besmak", logo: "corporate-clients/besmak.jpg" },
            { name: "Blue Star", logo: "corporate-clients/blue star.png" },
            { name: "Cognizant", logo: "corporate-clients/cognizant.jpg" },
        ],
        reverse: false,
    },
    {
        id: "government",
        label: "Government Sector — Prime Clients",
        color: "from-emerald-500 to-emerald-600",
        items: [
            {
                name: "Advanced Training Institute - Government of India",
                logo: "Government Sector Prime  Clients/advanced training institute.png",
            },
            { name: "CPCL", logo: "Government Sector Prime  Clients/CPCL.png" },
            {
                name: "Integral Coach Factory",
                logo: "Government Sector Prime  Clients/integral coach factory.png",
            },
            // { name: "Southern Railway", logo: "Government Sector Prime  Clients/southern railway.png" },
        ],
        reverse: true,
    },
    {
        id: "education",
        label: "Educational Institutions",
        color: "from-violet-500 to-violet-600",
        items: [
            // add your education partners here
        ],
        reverse: false,
    },
];

export default function ThreeStreamLogoMarquee() {
    return (
        <section className="w-full py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-200 mb-6">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-slate-700">
                            Our Ecosystem
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Strategic{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                            Partnership Streams
                        </span>
                    </h2>

                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Three dedicated streams serving corporate, government, and education
                        sectors with tailored solutions and trusted partners.
                    </p>
                </div>

                <div className="space-y-8">
                    {rows.map((row, i) => (
                        <MarqueeRow key={row.id} config={row} index={i} />
                    ))}
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-sm">
                        <div className="text-2xl font-bold text-blue-600 mb-2">200+</div>
                        <div className="text-slate-600">Enterprise Clients</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-sm">
                        <div className="text-2xl font-bold text-emerald-600 mb-2">50+</div>
                        <div className="text-slate-600">Government Projects</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-sm">
                        <div className="text-2xl font-bold text-violet-600 mb-2">100+</div>
                        <div className="text-slate-600">Education Partners</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* Replace your MarqueeRow and LogoTile with this code (drop-in) */

function MarqueeRow({ config, index }: { config: RowConfig; index: number }) {
    const trackRef = useRef<HTMLDivElement | null>(null);
    const tlRef = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let destroyed = false;

        // helper: wait for all images inside track to settle (load or error)
        const waitForImages = () => {
            const imgs = Array.from(
                track.querySelectorAll("img")
            ) as HTMLImageElement[];
            if (imgs.length === 0) return Promise.resolve();
            return Promise.all(
                imgs.map(
                    (img) =>
                        new Promise<void>((resolve) => {
                            if (img.complete) return resolve();
                            const onDone = () => {
                                img.removeEventListener("load", onDone);
                                img.removeEventListener("error", onDone);
                                resolve();
                            };
                            img.addEventListener("load", onDone);
                            img.addEventListener("error", onDone);
                        })
                )
            );
        };

        const start = async () => {
            await waitForImages();
            if (destroyed || !track) return;

            // kill old tween
            if (tlRef.current) {
                try {
                    tlRef.current.kill();
                } catch { }
                tlRef.current = null;
            }

            // measure width of a single set (we duplicated items in markup)
            const singleWidth = track.scrollWidth / 2;
            if (!singleWidth || singleWidth <= 0) return;

            // px per second speed (tweak base or per-row)
            const speedPxPerSec = 80 + index * 10;
            const duration = Math.max(6, Math.abs(singleWidth) / speedPxPerSec);

            const direction = config.reverse ? 1 : -1; // -1 => animate left (0 -> -singleWidth)

            // reset to 0 then animate
            gsap.set(track, { x: 0 });

            // Use gsap.utils.wrap to keep x inside the looping range.
            // For leftwards motion animate from 0 -> -singleWidth and wrap into [-singleWidth, 0)
            const wrapFn = gsap.utils.wrap(
                direction < 0 ? -singleWidth : 0,
                direction < 0 ? 0 : singleWidth
            );

            tlRef.current = gsap.to(track, {
                x: direction * singleWidth,
                duration,
                ease: "none",
                repeat: -1,
                modifiers: {
                    x: (x: string) => {
                        // parse current x, wrap it, and return px string
                        const val = parseFloat(x) || 0;
                        return wrapFn(val) + "px";
                    },
                },
            });
        };

        // start and restart on resize
        start();
        const onResize = () => {
            if (tlRef.current) {
                try {
                    tlRef.current.kill();
                } catch { }
                tlRef.current = null;
            }
            // slight delay so layout stabilizes
            window.clearTimeout(window.__marqueeResizeTid);
            window.__marqueeResizeTid = window.setTimeout(() => {
                start();
            }, 120);
        };
        window.addEventListener("resize", onResize);
        window.addEventListener("orientationchange", onResize);

        return () => {
            destroyed = true;
            if (tlRef.current) {
                try {
                    tlRef.current.kill();
                } catch { }
                tlRef.current = null;
            }
            window.removeEventListener("resize", onResize);
            window.removeEventListener("orientationchange", onResize);
        };
        // stable dependency array length & order
    }, [config.items.length, config.reverse, index]);

    const handleEnter = () => {
        if (tlRef.current)
            gsap.to(tlRef.current, { timeScale: 0.25, duration: 0.4 });
    };
    const handleLeave = () => {
        if (tlRef.current) gsap.to(tlRef.current, { timeScale: 1, duration: 0.4 });
    };

    return (
        <div className="group">
            {/* header same as before */}
            <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-3">
                    <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${config.color} flex items-center justify-center text-white text-lg shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                    >
                        <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4 12h16"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-slate-800">{config.label}</h4>
                        <div className="flex items-center gap-2">
                            <div className="w-16 h-1 bg-gradient-to-r from-slate-300 to-transparent rounded-full" />
                            <span className="text-xs text-slate-500">Active stream</span>
                        </div>
                    </div>
                </div>
                <span className="text-xs text-slate-400 bg-white/80 px-3 py-1 rounded-full border border-slate-200">
                    ✨ Hover to slow
                </span>
            </div>

            <div
                className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg hover:shadow-xl transition-all duration-500"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
            >
                <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white via-white/95 to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white via-white/95 to-transparent z-20 pointer-events-none" />
                <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${config.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}
                />

                <div
                    ref={trackRef}
                    className="flex items-center gap-8 whitespace-nowrap py-6 px-8 will-change-transform"
                >
                    {[...config.items, ...config.items].map((it, idx) => (
                        <LogoTile key={`${config.id}-${idx}`} item={it} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function LogoTile({ item }: { item: Item }) {
    // encode URI to handle spaces / special chars
    const src = encodeURI(`/logos/${item.logo}`);

    return (
        <div className="flex-shrink-0 min-w-[22rem] md:min-w-[24rem] lg:min-w-[26rem] group/tile">
            <div className="px-5 py-4 bg-white rounded-xl shadow-md border border-slate-200/80 hover:border-slate-300 transform transition-all duration-500 hover:scale-[1.03] hover:shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-inner overflow-hidden">
                        {/* During dev, if next/image complains, you can add unoptimized to Image */}
                        <Image
                            src={src}
                            alt={item.name}
                            width={56}
                            height={56}
                            style={{ objectFit: "contain" }}
                            className="relative z-10"
                        />
                    </div>

                    <div className="min-w-0 flex-1">
                        <div className="text-base font-semibold text-slate-800 leading-tight mb-1">
                            {item.name}
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-slate-500 font-medium">
                                Premium partnership
                            </span>
                            <div className="flex items-center gap-1">
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                                <span className="text-xs text-slate-400">Active</span>
                            </div>
                        </div>
                    </div>

                    <div className="opacity-0 group-hover/tile:opacity-100 transform group-hover/tile:translate-x-1 transition-all duration-300 text-slate-400">
                        →
                    </div>
                </div>
            </div>
        </div>
    );
}
