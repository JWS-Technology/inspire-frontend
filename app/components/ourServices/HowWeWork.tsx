"use client";
import React from "react";
import { Target, Calendar, Zap, RefreshCw } from "lucide-react";

export default function HowWeWork() {
  // small local colors (used for badges/boxes)
  const colorStyles: Record<string, { boxBg: string; boxBorder: string }> = {
    amber: { boxBg: "bg-amber-50", boxBorder: "border-amber-100" },
    blue: { boxBg: "bg-blue-50", boxBorder: "border-blue-100" },
    green: { boxBg: "bg-green-50", boxBorder: "border-green-100" },
    purple: { boxBg: "bg-purple-50", boxBorder: "border-purple-100" },
  };

  const processSteps = [
    { icon: <Target className="w-6 h-6" />, title: "Discover", desc: "Share your goals and challenges", color: "amber" },
    { icon: <Calendar className="w-6 h-6" />, title: "Plan", desc: "Custom roadmap and timeline", color: "blue" },
    { icon: <Zap className="w-6 h-6" />, title: "Execute", desc: "Agile delivery with regular updates", color: "green" },
    { icon: <RefreshCw className="w-6 h-6" />, title: "Review", desc: "Continuous improvement & support", color: "purple" },
  ];

  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">How We Work</h2>
          <p className="text-gray-600 mt-2">Our proven 4-step process</p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-6 right-6 top-12 h-px bg-amber-100"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((p, idx) => {
              const cs = colorStyles[p.color];
              return (
                <div key={idx} className="flex flex-col items-center text-center px-4">
                  <div className="relative">
                    <div className={`rounded-lg p-4 ${cs.boxBg} border ${cs.boxBorder} w-20 h-20 flex items-center justify-center`}>{p.icon}</div>
                    <div className="absolute -top-2 -right-2 md:-right-4">
                      <div className="bg-amber-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-semibold">{String(idx + 1).padStart(2, "0")}</div>
                    </div>
                  </div>

                  <h4 className="mt-6 font-semibold text-lg text-gray-900">{p.title}</h4>
                  <p className="text-sm text-gray-500 mt-2">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
