// MarqueeRows.tsx
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import MarqueeCard, { MarqueeItem } from "@/components/home/MarqueeCard"; // adjust path if needed

// --- TYPES ---
type RowConfig = {
  id: string;
  label: string;
  color: string;
  items: MarqueeItem[];
  reverse?: boolean;
};

// --- DATA: Clients grouped by category ---
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
    ],
    reverse: true,
  },
  {
    id: "education",
    label: "Educational Institutions",
    color: "from-violet-500 to-violet-600",
    items: [], // hidden by filter if empty
    reverse: false,
  },
];

// --- Helper: wait for images inside an element ---
const waitForImages = (el: HTMLElement | null) => {
  if (!el) return Promise.resolve();
  const imgs = Array.from(el.querySelectorAll("img")) as HTMLImageElement[];
  if (imgs.length === 0) return Promise.resolve();
  return Promise.all(
    imgs.map(
      (img) =>
        new Promise<void>((res) => {
          if (img.complete) return res();
          const done = () => {
            img.removeEventListener("load", done);
            img.removeEventListener("error", done);
            res();
          };
          img.addEventListener("load", done);
          img.addEventListener("error", done);
        })
    )
  );
};

// --- MarqueeTrack: infinite, seamless marquee using GSAP ---
function MarqueeTrack({
  items,
  reverse,
  rowId,
}: {
  items: MarqueeItem[];
  reverse?: boolean;
  rowId: string;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let destroyed = false;

    const start = async () => {
      await waitForImages(track);
      if (destroyed || !track) return;

      // kill previous tween
      if (tlRef.current) {
        try {
          tlRef.current.kill();
        } catch {}
        tlRef.current = null;
      }

      // Ensure the track has duplicated content: we already render [...items, ...items].
      // Measure single set width (half of scrollWidth)
      const singleWidth = track.scrollWidth / 2;
      if (!singleWidth || singleWidth <= 0) return;

      // Speed configuration (px/sec)
      const baseSpeedPxPerSec = 80; // tweak to taste
      // Duration to traverse one singleWidth distance
      const duration = Math.max(6, Math.abs(singleWidth) / baseSpeedPxPerSec);

      const direction = reverse ? 1 : -1; // -1 => animate left

      // Reset x then animate to direction * singleWidth and use wrap modifier
      gsap.set(track, { x: 0 });

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
            const val = parseFloat(x) || 0;
            return wrapFn(val) + "px";
          },
        },
      });
    };

    start();

    // restart on resize with debounce
    const onResize = () => {
      if (tlRef.current) {
        try {
          tlRef.current.kill();
        } catch {}
        tlRef.current = null;
      }
      window.clearTimeout((window as any).__marqueeResizeTid);
      (window as any).__marqueeResizeTid = window.setTimeout(() => {
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
        } catch {}
        tlRef.current = null;
      }
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, [items.length, reverse, rowId]);

  // Hover/focus handlers to slow the marquee (accessibility friendly)
  const handleEnter = () => {
    if (tlRef.current) gsap.to(tlRef.current, { timeScale: 0.25, duration: 0.25 });
  };
  const handleLeave = () => {
    if (tlRef.current) gsap.to(tlRef.current, { timeScale: 1, duration: 0.3 });
  };

  // Pause on focus of any child (keyboard users)
  const onChildFocus = () => {
    if (tlRef.current) gsap.to(tlRef.current, { timeScale: 0.25, duration: 0.2 });
  };
  const onChildBlur = () => {
    if (tlRef.current) gsap.to(tlRef.current, { timeScale: 1, duration: 0.2 });
  };

  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg hover:shadow-xl transition-all duration-500"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      // allow keyboard focus to pause - delegate focus/blur from children
      onFocus={handleEnter}
      onBlur={handleLeave}
    >
      {/* track (duplicated items) */}
      <div
        ref={trackRef}
        className="flex items-center gap-8 whitespace-nowrap py-6 px-8 will-change-transform"
        role="list"
        // attach keyboard focus listeners on container so child focus triggers blur/focus as well
        onFocusCapture={onChildFocus}
        onBlurCapture={onChildBlur}
      >
        {[...items, ...items].map((it, idx) => (
          <div
            className="flex-shrink-0"
            key={`${rowId}-${idx}`}
            role="listitem"
            // make each item focusable for keyboard users
            tabIndex={0}
          >
            <MarqueeCard item={it} />
          </div>
        ))}
      </div>
    </div>
  );
}

// --- MAIN COMPONENT ---
export default function MarqueeRows() {
  return (
    <div className="w-full py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-8 space-y-20">
        {rows
          .filter((row) => row.items && row.items.length > 0) // hide empty groups
          .map((row) => (
            <div key={row.id} className="space-y-10">
              <h2
                className={`text-2xl font-bold px-2 mb-4 bg-gradient-to-r ${row.color} bg-clip-text text-transparent`}
              >
                {row.label}
              </h2>

              <MarqueeTrack items={row.items} reverse={row.reverse} rowId={row.id} />
            </div>
          ))}
      </div>
    </div>
  );
}
