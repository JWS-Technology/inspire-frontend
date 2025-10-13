"use client";

import { BookOpen, ClockPlus } from "lucide-react";
import Image from "next/image";
import "./video.css";
import VideoPlayer from '../../components/VideoPlayer';


export default function Page() {
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
          <VideoPlayer
            src="/SEO.mp4"
            poster="/poster.jpg"
            className="rounded-lg"
            autoplay={false}
            logoSrc="https://edinztech.com/assets/img/inspire.png"
          />

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
                    <div className="text-sm text-gray-500 font-medium">Noel Sebu</div>
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
