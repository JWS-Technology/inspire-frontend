"use client";

import React, { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FaqItem = {
  id: string;
  q: string;
  a: string;
};

const FAQ: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      id: "faq-1",
      q: "How long are the internship programs?",
      a: "Our internship programs range from 4 to 12 weeks, designed to fit academic schedules. All programs are AICTE-approved and include real-world projects with mentor support.",
    },
    {
      id: "faq-2",
      q: "Do you provide placement assistance?",
      a: "Yes — we provide placement assistance including interview preparation, resume reviews, and direct introductions to partner companies for qualifying candidates.",
    },
    {
      id: "faq-3",
      q: "What industries do you serve?",
      a: "We work across education, manufacturing, retail, healthcare, fintech, and startups — offering tailored programs for students, enterprises, and R&D teams.",
    },
    {
      id: "faq-4",
      q: "Can you work with existing systems?",
      a: "Absolutely. Our teams handle integrations, migrations, and APIs to ensure smooth interoperability with your existing systems and workflows.",
    },
    {
      id: "faq-5",
      q: "What certifications do you offer?",
      a: "We offer certification courses aligned with industry standards and partner universities. Successful participants receive a certificate of completion recognized by our partner organizations.",
    },
  ];

  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-2">
          Everything you need to know about our services
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden"
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${faq.id}-panel`}
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                >
                  <span className="text-base md:text-lg font-medium text-gray-900">
                    {faq.q}
                  </span>

                  <span className="flex items-center gap-3 text-gray-500">
                    <span className="text-sm text-gray-400 hidden md:inline">
                      {isOpen ? "Close" : "Open"}
                    </span>
                    <span className="p-1 rounded-full bg-gray-50 border border-gray-100">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </span>
                  </span>
                </button>
              </h3>

              <div
                id={`${faq.id}-panel`}
                ref={(el) => {
                  contentRefs.current[faq.id] = el;
                }}
                className="px-6 overflow-hidden transition-[max-height] duration-300"
                style={{
                  maxHeight: isOpen
                    ? `${contentRefs.current[faq.id]?.scrollHeight ?? 200}px`
                    : "0px",
                }}
              >
                <div className="py-4 text-gray-600 border-t border-gray-100">
                  {faq.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
