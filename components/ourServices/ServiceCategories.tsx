"use client";
import React from "react";
import { GraduationCap, Code2, Cloud, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServiceCategories() {
  // color mapping local to this component
  const colorStyles: Record<string, { border: string; bg: string; link: string }> = {
    amber: { border: "border-amber-200", bg: "bg-amber-500", link: "text-amber-600" },
    blue: { border: "border-blue-200", bg: "bg-blue-500", link: "text-blue-600" },
    green: { border: "border-green-200", bg: "bg-green-500", link: "text-green-600" },
    purple: { border: "border-purple-200", bg: "bg-purple-500", link: "text-purple-600" },
  };

  const services = [
    { icon: <GraduationCap className="w-6 h-6" />, title: "Training & Internships", description: "AICTE-approved programs with real-world projects", color: "amber" },
    { icon: <Code2 className="w-6 h-6" />, title: "Web & Mobile Apps", description: "Custom software solutions for modern businesses", color: "blue" },
    { icon: <Cloud className="w-6 h-6" />, title: "Enterprise Solutions", description: "ERP, CRM, and cloud transformation services", color: "green" },
    { icon: <Cpu className="w-6 h-6" />, title: "AI & R&D Innovation", description: "Cutting-edge research in AI, IoT, and Data Science", color: "purple" },
  ];

  return (
    <section>
      <div className="py-32 bg-white text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Service Categories</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive solutions across training, development, and innovation</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-6 pb-20">
        {services.map((service, index) => {
          const colors = colorStyles[service.color];
          return (
            <div key={index} className={`border ${colors.border} rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300`}>
              <div className="flex items-start gap-4">
                <div className={`${colors.bg} text-white p-3 rounded-lg flex items-center justify-center`}>{service.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-3">{service.description}</p>
                  <Link href="https://edinztech.com/program" target="_blank" className={`${colors.link} font-medium inline-flex items-center gap-1 hover:gap-2 transition-all`}>Learn more <ArrowRight className="w-4 h-4" /></Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
