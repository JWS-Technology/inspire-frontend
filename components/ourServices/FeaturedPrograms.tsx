"use client";
import React from "react";
import { Award, Cloud, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FeaturedPrograms() {
  // local color mapping
  const colorStyles: Record<string, { border: string; bg: string; accentBg: string; link: string }> = {
    amber: { border: "border-amber-200", bg: "bg-amber-500", accentBg: "bg-amber-50", link: "text-amber-600" },
    blue: { border: "border-blue-200", bg: "bg-blue-500", accentBg: "bg-blue-50", link: "text-blue-600" },
    green: { border: "border-green-200", bg: "bg-green-500", accentBg: "bg-green-50", link: "text-green-600" },
    purple: { border: "border-purple-200", bg: "bg-purple-500", accentBg: "bg-purple-50", link: "text-purple-600" },
  };

  const featuredPrograms = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "AICTE Internship Program",
      org: "Inspire Softech Solutions",
      bullets: ["Real industry projects", "Mentor support", "Placement assistance", "Certificate of completion"],
      outcomeTitle: "Key Outcome",
      outcome: "95% placement rate in target sectors",
      tag: "4-12 weeks",
      color: "amber",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Enterprise Cloud Migration",
      org: "Adore Technology Solutions",
      bullets: ["Zero downtime migration", "Security audit included", "24/7 support", "Cost optimization"],
      outcomeTitle: "Key Outcome",
      outcome: "Average 40% cost reduction",
      tag: "2-6 months",
      color: "green",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "AI/ML Prototyping Lab",
      org: "Igrean StarTech Solutions",
      bullets: ["Custom AI models", "Data analysis", "Proof of concept", "Research collaboration"],
      outcomeTitle: "Key Outcome",
      outcome: "10x faster insights delivery",
      tag: "Project-based",
      color: "purple",
    },
  ];

  return (
    <section>
      <div className="py-8 text-center w-full">
        <div className="inline-block px-4 py-1 mb-4 text-sm font-medium text-gray-800 border rounded-full bg-white border-gray-200 shadow-sm">Flagship Services</div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Featured Programs</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our most popular and impactful service offerings</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {featuredPrograms.map((p, i) => {
            const c = colorStyles[p.color];
            return (
              <article key={i} className={`flex flex-col justify-between border ${c.border} rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300`}>
                <div className="flex justify-between items-start gap-4">
                  <div className={`${c.bg} text-white p-3 rounded-lg flex items-center justify-center`}>{p.icon}</div>
                  <div className="ml-auto"><span className="text-xs px-3 py-1 bg-gray-100 text-gray-500 rounded-full">{p.tag}</span></div>
                </div>

                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{p.title}</h3>
                  <div className="text-sm text-gray-500 mb-4">{p.org}</div>

                  <ul className="space-y-3 mb-6">
                    {p.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className={`w-5 h-5 ${p.color === "green" ? "text-green-500" : p.color === "purple" ? "text-purple-500" : p.color === "amber" ? "text-amber-500" : "text-blue-500"}`} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`rounded-lg p-4 ${c.accentBg} border ${c.border} mb-6`}>
                    <div className="text-sm text-gray-600 font-semibold mb-1">{p.outcomeTitle}</div>
                    <div className="text-lg font-bold text-gray-900">{p.outcome}</div>
                  </div>
                </div>

                <div className="mt-4">
                  <Link href="https://edinztech.com/program" target="_blank">

                    <button className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition-all duration-200">
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
