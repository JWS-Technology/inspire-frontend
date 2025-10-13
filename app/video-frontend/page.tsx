"use client";

import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Fullscreen, BookOpen, ClockPlus, Volume1 } from "lucide-react";
import Image from "next/image";
import "./video.css";

const WATERMARK_KEY = "inspiresoftech_video_watermark_id";

function generateWatermarkId() {
  try {
    if (typeof window !== "undefined") {
      const existing = sessionStorage.getItem(WATERMARK_KEY);
      if (existing) return existing;
      const id =
        (window.crypto?.randomUUID?.() ?? `id-${Math.random().toString(36).slice(2, 10)}`) +
        "-" +
        Date.now().toString(36);
      sessionStorage.setItem(WATERMARK_KEY, id);
      return id;
    }
  } catch {
    return `id-${Math.random().toString(36).slice(2, 10)}`;
  }
  return `id-${Math.random().toString(36).slice(2, 10)}`;
}

function formatTime(time: number) {
  if (!isFinite(time) || time < 0) return "0:00";
  const hr = Math.floor(time / 3600);
  const min = Math.floor((time % 3600) / 60);
  const sec = Math.floor(time % 60);
  return (hr > 0 ? hr + ":" : "") + `${min}:${sec.toString().padStart(2, "0")}`;
}

export default function Page() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [watermarkId, setWatermarkId] = useState<string | null>(null);
  const [showControls, setShowControls] = useState(true);
  const [watermarkY, setWatermarkY] = useState(8);

  // NEW: volume state and volume UI open state
  const [volume, setVolume] = useState(1); // 0..1
  const [volumeOpen, setVolumeOpen] = useState(false);

  useEffect(() => setWatermarkId(generateWatermarkId()), []);

  useEffect(() => {
    const tick = () => setWatermarkY(Math.floor(Math.random() * 70) + 5);
    tick();
    const t = setInterval(tick, 16000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onLoaded = () => {
      setDuration(v.duration || 0);
      // initialize volume from the actual video element if available
      setVolume(typeof v.volume === "number" ? v.volume : 1);
      setIsMuted(!!v.muted);
    };

    const onTime = () => {
      setCurrentTime(v.currentTime);
      if (v.duration) setProgress((v.currentTime / v.duration) * 100);
    };

    v.addEventListener("loadedmetadata", onLoaded);
    v.addEventListener("timeupdate", onTime);

    return () => {
      v.removeEventListener("loadedmetadata", onLoaded);
      v.removeEventListener("timeupdate", onTime);
    };
  }, []);

  useEffect(() => {
    const VOLUME_STEP = 0.05; // 5% per key press

    const handler = (e: KeyboardEvent) => {
      const active = document.activeElement;
      if (
        active &&
        (active.tagName === "INPUT" ||
          active.tagName === "TEXTAREA" ||
          (active as HTMLElement).isContentEditable)
      )
        return;

      const v = videoRef.current;
      if (!v) return;

      const setVol = (newVol: number) => {
        const clamped = Math.max(0, Math.min(1, newVol));
        if (v.muted && clamped > 0) v.muted = false;
        v.volume = clamped;
        setVolume(clamped);
        setIsMuted(v.muted);
      };

      switch (e.code) {
        case "Space":
        case "KeyK":
          e.preventDefault();
          togglePlay();
          break;

        case "ArrowLeft":
          e.preventDefault();
          v.currentTime = Math.max(0, v.currentTime - 5);
          break;

        case "ArrowRight":
          e.preventDefault();
          v.currentTime = Math.min(v.duration || 0, v.currentTime + 5);
          break;

        case "ArrowUp":
          e.preventDefault();
          setVol(v.volume + VOLUME_STEP);
          break;

        case "ArrowDown":
          e.preventDefault();
          setVol(v.volume - VOLUME_STEP);
          break;

        case "KeyM":
          e.preventDefault();
          toggleMute();
          break;

        case "KeyF":
          e.preventDefault();
          toggleFullscreen();
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // helper to set volume (keeps state + video element in sync)
  const applyVolume = (newVol: number) => {
    const v = videoRef.current;
    const clamped = Math.max(0, Math.min(1, newVol));
    if (v) {
      v.volume = clamped;
      if (v.muted && clamped > 0) v.muted = false;
      setIsMuted(v.muted);
    }
    setVolume(clamped);
  };

  const togglePlay = async () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      await v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
    setShowControls(true);
    setTimeout(() => setShowControls(false), 2500);
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
    // if unmuting and volume is 0, set to a sensible default
    if (!v.muted && v.volume === 0) {
      applyVolume(0.5);
      if (v) v.volume = 0.5;
    }
  };

  const seek = (value: number) => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    v.currentTime = (value / 100) * v.duration;
    setProgress(value);
  };

  const toggleFullscreen = async () => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      await el.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="https://edinztech.com/assets/img/inspire.png" alt="logo" width={84} height={84} />
            <div>
              <h1 className="text-lg font-semibold text-amber-600">Inspire Edinz — Learning Hub</h1>
              <p className="text-xs text-gray-500">Upskill with practical, project-focused courses</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-amber-600 text-white flex items-center justify-center">J</div>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto p-6">
          <div ref={containerRef} id="video-container" className="relative bg-black rounded-lg overflow-hidden shadow mt-2">
            <video
              ref={videoRef}
              onClick={togglePlay}
              className="w-full h-auto bg-black cursor-pointer"
              src="/SEO.mp4"
              preload="metadata"
              playsInline
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
              onDoubleClick={toggleFullscreen}
            />

            {watermarkId && (
              <div
                className="absolute moving-div z-30 pointer-events-none"
                style={{ top: `${watermarkY}%` }}
                title={watermarkId}
                aria-hidden
              >
                <span className="text-red-500 opacity-[0.6] font-mono text-sm select-none pointer-no-wrap">
                  {watermarkId.slice(0, 10)}
                </span>
              </div>
            )}

            <div className="absolute top-4 right-4">
              <Image src="https://edinztech.com/assets/img/inspire.png" alt="logo" width={100} height={100} />
            </div>

            <div className={`absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent transition-opacity ${showControls ? "opacity-100" : "opacity-0"}`}>
              <div className="w-full cursor-pointer" onClick={(e) => {
                const rect = (e.target as HTMLElement).getBoundingClientRect();
                const clickX = (e as React.MouseEvent).clientX - rect.left;
                const pct = (clickX / rect.width) * 100;
                seek(pct);
              }}>
                <div className="h-1 w-full bg-white/20 rounded">
                  <div style={{ width: `${progress}%` }} className="h-1 bg-white rounded" />
                </div>
              </div>

              <div className="flex items-center justify-between text-white mt-3">
                <div className="flex items-center gap-3">
                  <button onClick={togglePlay} aria-label="play-pause" className="flex items-center">
                    {isPlaying ? <Pause size={22} /> : <Play size={22} />}
                  </button>


                  {/* Simple Horizontal Volume Control */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleMute}
                      aria-label={isMuted ? "Unmute" : "Mute"}
                      className="flex items-center transition-transform hover:scale-110"
                    >
                      {isMuted || volume === 0 ? (
                        <VolumeX size={18} />
                      ) : volume < 0.5 ? (
                        <Volume1 size={18} />
                      ) : (
                        <Volume2 size={18} />
                      )}
                    </button>

                    <div className="flex items-center gap-2 w-24">
                      <input
                        aria-label="volume"
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                        value={volume}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          applyVolume(val);
                        }}
                        className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                      />
                      <span className="text-xs text-white/80 min-w-[35px]">
                        {Math.round(volume * 100)}%
                      </span>
                    </div>
                  </div>

                  <div className="text-sm">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => { if (videoRef.current) videoRef.current.currentTime = Math.max(0, (videoRef.current.currentTime || 0) - 10); }}
                    aria-label="rewind"
                    className="transition-transform hover:scale-110"
                  >◀◀</button>
                  <button
                    onClick={() => { if (videoRef.current) videoRef.current.currentTime = Math.min((videoRef.current.duration || 0), (videoRef.current.currentTime || 0) + 10); }}
                    aria-label="forward"
                    className="transition-transform hover:scale-110"
                  >▶▶</button>
                  <button
                    onClick={toggleFullscreen}
                    aria-label="fullscreen"
                    className="transition-transform hover:scale-110"
                  >
                    <Fullscreen size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* --- Styled Course Header --- */}
          <section className="mt-4 bg-gradient-to-r from-white via-amber-50 to-white border rounded-xl p-6 shadow-md flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0 bg-amber-100 rounded-lg p-3">
              <BookOpen size={36} className="text-amber-600" />
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-amber-600 tracking-tight">SEO in Next.js</h2>
                  <p className="mt-1 text-sm text-gray-600">Master SEO best practices for Next.js apps — server-side rendering, metadata strategy, sitemaps, and performance tuning.</p>

                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-md bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700 border border-amber-100">Beginner → Intermediate</span>
                    <span className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 text-xs text-gray-600 border"><BookOpen width={15} height={15} className="-translate-y-0.5" /> 12 modules</span>
                    <span className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 text-xs text-gray-600 border"><ClockPlus width={15} height={15} className="-translate-y-0.5" /> 18 hours</span>
                  </div>
                </div>

                <div className="flex-shrink-0 flex flex-col items-end gap-3">
                  <div className="text-right">
                    <div className="text-xs text-gray-900">Instructor</div>
                    <div className="text-sm text-gray-500 font-medium">Aravind</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-gray-700">Syllabus</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-6 bg-white rounded-lg p-4 shadow">
            <h2 className="font-semibold text-black mb-2">Course content</h2>
            <p className="text-sm text-gray-900">A concise, focused curriculum covering HTML, CSS, JavaScript and MERN basics.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
