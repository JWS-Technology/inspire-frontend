"use client";

import React from "react";
import { Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  companyHref?: string;
};

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "The internship program gave me real project experience. Within 2 months of completion, I landed my dream job!",
      name: "Priya Sharma",
      role: "Software Engineer",
      company: "TCS",
    },
    {
      quote:
        "Adore Technology migrated our entire infrastructure to the cloud with zero downtime. Impressive execution!",
      name: "Rajesh Kumar",
      role: "CTO",
      company: "RetailCo",
    },
    {
      quote:
        "Their faculty development programs are exceptional. Our teachers gained cutting-edge industry skills.",
      name: "Dr. Anita Desai",
      role: "HOD Computer Science",
      company: "Engineering College",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-gray-700 border rounded-full bg-white border-gray-200">
            Client Voices
          </div>

          <h2 className="text-4xl font-extrabold text-gray-900">What People Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const highlighted = i === 1; // middle card highlighted
            return (
              <article
                key={i}
                className={`relative bg-white rounded-xl p-6 md:p-8 border ${
                  highlighted ? "border-amber-200" : "border-gray-100"
                } shadow-sm hover:shadow-md transition-shadow duration-200`}
              >
                {/* Star row */}
                <div className="flex items-center gap-2 mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className={`w-5 h-5 ${
                        highlighted ? "text-amber-500" : "text-amber-500"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 leading-relaxed">{t.quote}</p>

                <hr className="border-t border-gray-100 mb-4" />

                {/* Footer: name, role, company */}
                <div className="mt-4">
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                  <div className="text-sm mt-2">
                    <a
                      href={t.companyHref ?? "#"}
                      className={`text-sm font-medium ${
                        highlighted ? "text-amber-600" : "text-amber-600"
                      }`}
                    >
                      {t.company}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
