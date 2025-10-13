// components/VideoPlayer.tsx

"use client";

import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Fullscreen, Volume1 } from "lucide-react";
import Image from "next/image";
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

export interface VideoPlayerProps {
    src: string;
    poster?: string;
    className?: string;
    autoplay?: boolean;
    controlsList?: string;
    showLogo?: boolean;
    logoSrc?: string;
}

export default function VideoPlayer({
    src,
    poster,
    className = "",
    autoplay = false,
    controlsList = "nodownload",
    showLogo = true,
    logoSrc,
}: VideoPlayerProps) {
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
    const [volume, setVolume] = useState(1);

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
        const VOLUME_STEP = 0.05;

        const handler = (e: KeyboardEvent) => {
            const active = document.activeElement;
            if (
                active &&
                (active.tagName === "INPUT" || active.tagName === "TEXTAREA" || (active as HTMLElement).isContentEditable)
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
            try {
                await v.play();
                setIsPlaying(true);
            } catch {
                // play failed (autoplay policy) — keep paused
                setIsPlaying(false);
            }
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
        <div ref={containerRef} className={`relative bg-black rounded-lg overflow-hidden shadow ${className}`}>
            <video
                ref={videoRef}
                onClick={togglePlay}
                className="w-full h-auto bg-black cursor-pointer"
                src={src}
                poster={poster}
                preload="metadata"
                playsInline
                controlsList={controlsList}
                onContextMenu={(e) => e.preventDefault()}
                onDoubleClick={toggleFullscreen}
                autoPlay={autoplay}
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

            {showLogo && logoSrc && (
                <div className="absolute top-4 right-4">
                    {/* use next/image where you import this component in Next pages; here we keep it plain for portability */}
                    <Image src={logoSrc} alt="logo" width={100} height={100} />
                </div>
            )}

            <div className={`absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent transition-opacity`} style={{ opacity: showControls ? 1 : 0 }}>
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
    );
}
