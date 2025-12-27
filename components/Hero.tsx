"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const subheadingRef = useRef<HTMLParagraphElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // IMPORTANT: start FALSE to match server-rendered HTML, set true only on mount
  const [showVideo, setShowVideo] = useState<boolean>(false);

  useEffect(() => {
    // set initial based on viewport after mount (prevents SSR mismatch)
    setShowVideo(window.innerWidth >= 768);

    // debounce resize updates
    let tid: number | null = null;
    const onResize = () => {
      if (tid) window.clearTimeout(tid);
      tid = window.setTimeout(() => setShowVideo(window.innerWidth >= 768), 120);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (tid) window.clearTimeout(tid);
    };
  }, []);

  // Attempt to play with robust fallbacks (runs only after mount and when showVideo toggles)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    console.log("[Hero] video element mounted, src=", video.currentSrc || video.src);

    // Ensure muted is set before attempting play (autoplay policies).
    video.muted = true;
    video.playsInline = true;
    video.loop = true;

    const tryPlay = async (retryWithMuted = true) => {
      try {
        const p = video.play();
        if (p !== undefined) await p;
        console.log("[Hero] video.play() succeeded");
      } catch (err) {
        console.warn("[Hero] video.play() rejected:", err);
        if (retryWithMuted) {
          video.muted = true;
          try {
            await video.play();
            console.log("[Hero] video.play() succeeded after muting");
          } catch (err2) {
            console.error("[Hero] still failed after muting:", err2);
          }
        }
      }
    };

    // Try immediate play and on canplaythrough
    tryPlay(true);
    const onCanPlayThrough = () => {
      console.log("[Hero] canplaythrough — trying again");
      tryPlay(false);
    };
    const onError = () => console.error("[Hero] video error:", video.error);

    video.addEventListener("canplaythrough", onCanPlayThrough);
    video.addEventListener("error", onError);

    // Pause when page hidden (save CPU)
    const onVisibility = () => {
      if (document.hidden) {
        video.pause();
        console.log("[Hero] page hidden — paused video");
      } else {
        tryPlay(false);
        console.log("[Hero] page visible — attempting play");
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      video.removeEventListener("canplaythrough", onCanPlayThrough);
      video.removeEventListener("error", onError);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [showVideo]);

  // GSAP (unchanged, kept as-is)
  useEffect(() => {
    if (
      !heroRef.current ||
      !contentRef.current ||
      !headingRef.current ||
      !subheadingRef.current ||
      !descriptionRef.current ||
      !buttonsRef.current
    ) {
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current!,
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
      );

      gsap.fromTo(
        contentRef.current!,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power2.out" }
      );

      const tl = gsap.timeline({ delay: 0.8 });
      tl.fromTo(
        headingRef.current?.querySelectorAll("h1, span") ?? [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }
      )
        .fromTo(
          subheadingRef.current!,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          descriptionRef.current!,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.2"
        )
        .fromTo(
          buttonsRef.current?.children ?? [],
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.2"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-screen overflow-hidden">

      <div ref={heroRef} className="relative h-screen w-full">
        {/* Media container: keep the same element shape (div) for SSR -> client.
            We use suppressHydrationWarning because the inner content (video vs image)
            will intentionally differ until the client sets showVideo on mount. */}
        <div
          suppressHydrationWarning
          aria-hidden="true"
          className="absolute inset-0"
        >
          {/*
            On SSR this will render the fallback image (because showVideo === false).
            On client mount, showVideo may become true and React will replace inner contents.
          */}
          {showVideo ? (
            <video
              ref={videoRef}
              id="heroVideo"
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/hero-bg.jpg"
              aria-hidden="true"
            >
              <source src="/hero-video-low.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            // fallback image used on server and initially on client
            <div
              className="absolute inset-0 bg-cover bg-center md:hidden"
              style={{ backgroundImage: "url('https://edinztech.com/img/gallery/b70bb.jpeg')" }}
            />
          )}

          {/* Desktop fallback image only shown when video is not present */}
          {!showVideo && (
            <div
              className="hidden md:block absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/hero-bg.jpg')" }}
            />
          )}
        </div>

        {/* Overlay & content */}
        <section className="relative z-20 bg-black/60 backdrop-blur-[9px]  h-screen flex items-center justify-center text-center px-6">
          <div ref={contentRef} className="relative z-30 max-w-3xl text-white">
            <div ref={headingRef}>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight opacity-0">
                Inspire Softech Solutions<br />
                <span className="text-amber-500 opacity-0">Group of Companies</span>
              </h1>
            </div>

            <p ref={subheadingRef} className="mt-6 opacity-0 text-lg md:text-xl font-medium">
              Empowering Growth through Knowledge & Technology
            </p>

            <p ref={descriptionRef} className="mt-4 opacity-0 text-gray-300 text-base md:text-lg">
              A dynamic technology consortium uniting four specialized companies
              to empower individuals and organizations worldwide
            </p>

            <div ref={buttonsRef} className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/companies" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-md shadow-md transform transition-all hover:scale-105 duration-200 ">
                Explore Our Companies →
              </Link>
              <Link href="/services">
                <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transform transition-transform hover:scale-105 duration-200">
                  Discover Our Services
                </button>
              </Link>
            </div>
            {/* <div className="flex items-center justify-center px-4">
              <div className="bg-zinc-800 px-6 sm:px-10 md:px-16 py-2 sm:py-1 rounded-xl translate-y-10 sm:translate-y-16 shadow-lg">
                <h1 className="text-base sm:text-lg md:text-lg text-center animate-pulse duration-500 text-white">
                  ⚠️ Website under maintenance ⚠️
                </h1>
              </div>
            </div> */}


          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
