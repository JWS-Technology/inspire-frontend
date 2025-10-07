"use client";
import React from "react";

export default function ServicePortfolio() {
  // local color mapping
  const colorStyles: Record<string, { border: string; tileBg: string; tileBorder: string }> = {
    amber: { border: "border-amber-200", tileBg: "bg-amber-50", tileBorder: "border-amber-100" },
    blue: { border: "border-blue-200", tileBg: "bg-blue-50", tileBorder: "border-blue-100" },
    green: { border: "border-green-200", tileBg: "bg-green-50", tileBorder: "border-green-100" },
    purple: { border: "border-purple-200", tileBg: "bg-purple-50", tileBorder: "border-purple-100" },
  };

  const portfolio = [
    {
      company: "Inspire Softech Solutions",
      color: "amber",
      items: [
        { title: "Internship Programs", subtitle: "For: Students & Fresh Graduates" },
        { title: "Corporate Training", subtitle: "For: Enterprises" },
        { title: "Faculty Development", subtitle: "For: Educational Institutions" },
        { title: "Certification Courses", subtitle: "For: Professionals" },
      ],
    },
    {
      company: "Edinz Tech Pvt. Ltd.",
      color: "blue",
      items: [
        { title: "Web Development", subtitle: "For: Startups & SMEs" },
        { title: "Mobile Apps", subtitle: "For: All Industries" },
        { title: "IT Consulting", subtitle: "For: Enterprises" },
        { title: "E-commerce Solutions", subtitle: "For: Retail Businesses" },
      ],
    },
    {
      company: "Adore Technology Solutions",
      color: "green",
      items: [
        { title: "ERP Implementation", subtitle: "For: Manufacturing & Retail" },
        { title: "CRM Solutions", subtitle: "For: Sales Organizations" },
        { title: "Cloud Migration", subtitle: "For: Enterprises" },
        { title: "IT Infrastructure", subtitle: "For: All Sectors" },
      ],
    },
    {
      company: "Igrean StarTech Solutions",
      color: "purple",
      items: [
        { title: "AI & Machine Learning", subtitle: "For: Tech Companies" },
        { title: "IoT Solutions", subtitle: "For: Smart Industries" },
        { title: "Data Analytics", subtitle: "For: Data-Driven Organizations" },
        { title: "R&D Projects", subtitle: "For: Innovation Teams" },
      ],
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-gray-900">Complete Service Portfolio</h2>
          <p className="text-gray-600 mt-2">Specialized services from each company in our group</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolio.map((c, idx) => {
            const cs = colorStyles[c.color];
            return (
              <div key={idx} className={`border ${cs.border} rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300`}>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{c.company}</h3>
                <div className="space-y-4">
                  {c.items.map((it, i2) => (
                    <div key={i2} className={`rounded-lg p-4 ${cs.tileBg} border ${cs.tileBorder}`}>
                      <div className="font-semibold text-gray-900">{it.title}</div>
                      <div className="text-sm text-gray-500 mt-1">{it.subtitle}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
