"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SuccessStories() {
  // local colors
  const colorStyles: Record<string, { border: string; link: string }> = {
    amber: { border: "border-amber-200", link: "text-amber-600" },
    blue: { border: "border-blue-200", link: "text-blue-600" },
    green: { border: "border-green-200", link: "text-green-600" },
    purple: { border: "border-purple-200", link: "text-purple-600" },
  };

  const successCases = [
    { percent: "95%", stat: "500+ Students Placed", desc: "Placement rate across AICTE internship batches", org: "Inspire Softech", color: "amber" },
    { percent: "40%", stat: "Enterprise Migration", desc: "Average cost reduction post cloud migration", org: "Adore Technology", color: "green" },
    { percent: "10x", stat: "AI Performance Boost", desc: "Faster insights with custom ML models", org: "Igrean StarTech", color: "purple" },
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-1 mb-4 text-sm font-medium text-gray-800 border rounded-full bg-white border-gray-200 shadow-sm">Proven Results</div>
          <h2 className="text-4xl font-extrabold text-gray-900">Success Stories</h2>
          <p className="text-gray-600 mt-2">Real impact from our programs and projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {successCases.map((s, i) => {
            const cs = colorStyles[s.color];
            return (
              <div key={i} className={`border ${cs.border} rounded-2xl p-8 bg-white shadow-sm hover:shadow-md transition-all duration-300 text-center`}>
                <div className={`${s.color === "amber" ? "text-amber-500" : s.color === "green" ? "text-green-500" : "text-purple-500"} text-5xl font-extrabold`}>{s.percent}</div>
                <h3 className="text-xl font-semibold text-gray-900 mt-4">{s.stat}</h3>
                <p className="text-sm text-gray-500 mt-3">{s.desc}</p>
                <div className={`mt-4 font-medium ${cs.link}`}>{s.org}</div>

                <Link href="https://edinztech.com/program" className="mt-6 inline-flex items-center gap-2 text-sm text-gray-700 font-medium hover:gap-3 transition-all">
                  Read case study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
