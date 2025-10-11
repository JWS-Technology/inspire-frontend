// components/ClientMarquee.tsx
"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

/* === Data (corporate + government + 35 education logos) === */
const corporateAndGovClients = [
  { name: "HCL", logo: "corporate-clients/hcl.png" },
  { name: "Besmak", logo: "corporate-clients/besmak.jpg" },
  { name: "Blue Star", logo: "corporate-clients/blue star.png" },
  { name: "Cognizant", logo: "corporate-clients/cognizant.jpg" },
  { name: "Crossdomain", logo: "corporate-clients/crossdomain.jpg" },
  { name: "Hwashin", logo: "corporate-clients/hwashin.png" },
  { name: "Mphasis", logo: "corporate-clients/mphasis.jpg" },
  { name: "Muthoot Fincorp", logo: "corporate-clients/muthoot fincorp.jpg" },
  { name: "Redington", logo: "corporate-clients/redington.png" },
  { name: "Samsung", logo: "corporate-clients/samsung.jpg" },
  { name: "SGH", logo: "corporate-clients/sgh.png" },
  { name: "Tata Consultancy Services", logo: "corporate-clients/tata consultancy services.jpg" },
  { name: "Tata Power", logo: "corporate-clients/tata power.png" },
  { name: "Titan", logo: "corporate-clients/titan.png" },
  { name: "Valeo", logo: "corporate-clients/valeo.jpg" },
  { name: "Wipro", logo: "corporate-clients/wipro.jpg" },
  { name: "Yazaki", logo: "corporate-clients/yazaki.png" },
  { name: "Advanced Training Institute - Government of India", logo: "goverment-clients/advanced-training-institute.png" },
  { name: "CPCL", logo: "goverment-clients/cpcl.png" },
  { name: "Integral Coach Factory", logo: "goverment-clients/integral-coach-factory.png" },
];

const educationInstitutions = Array.from({ length: 35 }, (_, i) => ({
  name: `Institution ${i + 1}`,
  logo: `educational-institution/${i + 1}.png`,
}));

const clients = [...corporateAndGovClients, ...educationInstitutions, ...corporateAndGovClients, ...educationInstitutions, ...corporateAndGovClients, ...educationInstitutions,];

export default function ClientMarquee() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Tween | null>(null);
  const mountedRef = useRef(false);
  const prevSingleWidthRef = useRef<number | null>(null);
  const resizeTidRef = useRef<number | null>(null);

  // Robust image-load wait that works well with next/image placeholders
  const waitForImages = (el: HTMLElement | null, timeout = 1500) => {
    if (!el) return Promise.resolve();
    const imgs = Array.from(el.querySelectorAll("img")) as HTMLImageElement[];
    if (imgs.length === 0) return Promise.resolve();

    return new Promise<void>((resolve) => {
      let remaining = imgs.length;
      let resolved = false;

      const tryResolve = () => {
        if (resolved) return;
        resolved = true;
        resolve();
      };

      const onOneDone = () => {
        remaining -= 1;
        if (remaining <= 0) tryResolve();
      };

      imgs.forEach((img) => {
        if (img.complete && img.naturalWidth !== 0) {
          onOneDone();
          return;
        }
        const done = () => {
          img.removeEventListener("load", done);
          img.removeEventListener("error", done);
          onOneDone();
        };
        img.addEventListener("load", done);
        img.addEventListener("error", done);
      });

      // fallback: if some images never fire, resolve after timeout + a couple of rAFs
      setTimeout(() => {
        requestAnimationFrame(() => requestAnimationFrame(() => tryResolve()));
      }, timeout);
    });
  };

  /**
   * Start or restart the marquee tween.
   * - preserves previous tween progress to avoid visual snap
   * - only restarts when measured singleWidth changes by > threshold px
   */
  const startTween = async (attempt = 0) => {
    const track = trackRef.current;
    if (!track) return;

    await waitForImages(track);
    // small additional paint delay
    await new Promise((r) => setTimeout(r, 60));

    // measure total and compute singleWidth (we duplicate children, so single = half of scrollWidth)
    const totalScrollWidth = track.scrollWidth;
    let singleWidth = totalScrollWidth / 2;

    // fallback alternative measurement
    const visible = track.clientWidth || track.getBoundingClientRect().width || 0;
    if (!singleWidth || singleWidth <= visible) {
      const alt = totalScrollWidth - visible;
      if (alt > 0) singleWidth = alt;
    }

    // Retry logic if measurement invalid
    if (!singleWidth || singleWidth <= 0) {
      if (attempt < 6) {
        await new Promise((r) => setTimeout(r, 120 + attempt * 80));
        return startTween(attempt + 1);
      }
      // give up after retries
      // eslint-disable-next-line no-console
      console.warn("ClientMarquee: failed to measure track width after retries.", {
        totalScrollWidth,
        visible,
        singleWidth,
      });
      return;
    }

    // Only restart if the measured singleWidth changed noticeably to avoid micro restarts.
    const prev = prevSingleWidthRef.current;
    const thresholdPx = 2; // change threshold to tolerate tiny differences
    if (prev !== null && Math.abs(singleWidth - prev) <= thresholdPx && tlRef.current) {
      // no meaningful change — do nothing
      return;
    }

    // keep previous tween progress so we can restore it after creating the new tween
    const prevProgress = tlRef.current ? tlRef.current.progress() : 0;

    // kill existing tween (if any)
    if (tlRef.current) {
      try {
        tlRef.current.kill();
      } catch { }
      tlRef.current = null;
    }
    try {
      gsap.killTweensOf(track);
    } catch { }

    // store new measurement
    prevSingleWidthRef.current = singleWidth;

    // speed configuration (px per second)
    const speedPxPerSec = 200;
    const duration = Math.max(6, Math.abs(singleWidth) / speedPxPerSec);
    const sign = -1; // leftward flow visually

    // set initial transform to the wrapped value consistent with progress restoration.
    // DO NOT set x:0 unconditionally (that causes snapping).
    // create wrap function for modifiers
    const wrapFn = gsap.utils.wrap(sign < 0 ? -singleWidth : 0, sign < 0 ? 0 : singleWidth);

    // create the looping tween
    tlRef.current = gsap.to(track, {
      x: sign * singleWidth,
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

    // restore previous loop progress so the motion appears continuous
    try {
      const clamped = Math.max(0, Math.min(1, prevProgress || 0));
      tlRef.current.progress(clamped);
    } catch (e) {
      // noop: if progress restore fails, it's not catastrophic
    }
  };

  useEffect(() => {
    mountedRef.current = true;
    startTween();

    const onResize = () => {
      // debounce resize to avoid frequent restarts
      if (resizeTidRef.current) {
        window.clearTimeout(resizeTidRef.current);
      }
      resizeTidRef.current = window.setTimeout(() => {
        startTween();
        resizeTidRef.current = null;
      }, 200); // 200ms debounce
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    return () => {
      mountedRef.current = false;
      if (tlRef.current) {
        try {
          tlRef.current.kill();
        } catch { }
        tlRef.current = null;
      }
      if (resizeTidRef.current) {
        window.clearTimeout(resizeTidRef.current);
        resizeTidRef.current = null;
      }
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // pause/resume on hover & focus (smooth via timeScale)
  const handleEnter = () => {
    if (tlRef.current) gsap.to(tlRef.current, { timeScale: 0.55, duration: 0.9 });
  };
  const handleLeave = () => {
    if (tlRef.current) gsap.to(tlRef.current, { timeScale: 1, duration: 0.25 });
  };

  return (
    <section className="w-full bg-white overflow-hidden">
      <div
        className="relative"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onFocus={handleEnter}
        onBlur={handleLeave}
      >
        {/* track: duplicated clients for seamless loop */}
        <div
          ref={trackRef}
          className="flex items-center gap-10 whitespace-nowrap will-change-transform"
          aria-hidden={false}
        >
          {[...clients, ...clients].map((c, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-xl border border-slate-200 shadow-sm p-3"
              title={c.name}
              tabIndex={0}
            >
              <Image
                src={`/logos/${c.logo}`}
                alt={c.name}
                width={100}
                height={100}
                className="object-contain"
                onLoadingComplete={() => {
                  // no-op; DOM <img> listeners handle readiness
                }}
              />
            </div>
          ))}
        </div>

        {/* Optional masks — uncomment to add soft edges */}
        {/* <div className="absolute left-0 top-0 bottom-0 w-20 pointer-events-none" style={{background: 'linear-gradient(to right, white, transparent)'}} /> */}
        {/* <div className="absolute right-0 top-0 bottom-0 w-20 pointer-events-none" style={{background: 'linear-gradient(to left, white, transparent)'}} /> */}
      </div>
    </section>
  );
}

