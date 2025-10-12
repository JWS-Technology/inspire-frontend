// Page.tsx (or the file you already have) — replace component contents with this
"use client";
import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react";
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

const Page = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);

  // IMPORTANT: use state for watermark ID so rendering updates when it's available
  const [watermarkId, setWatermarkId] = useState<string | null>(null);

  // vertical position (percent). start with a safe default
  const [yValue, setyValue] = useState<number>(8);

  useEffect(() => {
    // generate watermark id once client-side
    setWatermarkId(generateWatermarkId());
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const newTime = (parseFloat(e.target.value) / 100) * video.duration;
    video.currentTime = newTime;
    setProgress(parseFloat(e.target.value));
  };

  const toggleFullscreen = () => {
    const videoContainer = document.getElementById("video-container");
    if (!videoContainer) return;
    if (!document.fullscreenElement) {
      videoContainer.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // safe random percent
  function randomPercent(min = 5, max = 85) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    // set an initial value immediately
    setyValue(randomPercent());

    // update every 12s (smoother)
    const interval = setInterval(() => {
      setyValue(randomPercent());
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-neutral-900 p-4">
      <div
        id="video-container"
        className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl"
      >
        <video
          ref={videoRef}
          src="/SEO.mp4"
          className="w-full h-auto rounded-2xl select-none bg-black"
          onTimeUpdate={handleTimeUpdate}
          onClick={togglePlay}
          onEnded={() => setIsPlaying(false)}
          controlsList="nodownload nofullscreen noremoteplayback"
          onContextMenu={(e) => e.preventDefault()}
          disablePictureInPicture
          playsInline
          preload="metadata"
        />

        {/* watermark: render when state contains id */}
        {watermarkId && (
          <div
            className="absolute moving-div z-30 pointer-events-none"
            style={{
              top: `${yValue}%`, // vertical position in percent (safe)
            }}
            title={watermarkId}
            aria-hidden="true"
          >
            <span className="text-red-500 font-mono text-sm select-none pointer-no-wrap">
              {watermarkId.slice(0, 10)} {/* trimmed, readable id */}
            </span>
          </div>
        )}

        {/* Controls */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col space-y-2">
          <input
            type="range"
            min={0}
            max={100}
            value={progress}
            onChange={handleProgressChange}
            className="w-full h-1 accent-red-600 cursor-pointer"
          />
          <div className="flex items-center justify-between text-white px-2">
            <div className="flex items-center space-x-4">
              <button onClick={togglePlay} className="hover:scale-105 transition-transform">
                {isPlaying ? <Pause size={22} /> : <Play size={22} />}
              </button>
              <button onClick={toggleMute} className="hover:scale-105 transition-transform">
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>
            <button onClick={toggleFullscreen} className="hover:scale-105 transition-transform">
              {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
