"use client";

import React from "react";

interface CompanyCardProps {
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  services: string[];
}

const CompanyCards: React.FC<CompanyCardProps> = ({
  icon,
  title,
  tagline,
  description,
  services,
}) => {
  return (
    <div className="w-[96vw] bg-white rounded-xl shadow-lg border-b-3 border-gray-200 p-6 md:p-8 transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col sm:flex-row items-start gap-5">
        {/* ICON */}
        <div className="flex-shrink-0">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-amber-400 rounded-lg flex items-center justify-center shadow-inner">
            {icon}
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">
            {title}
          </h3>

          <p className="mt-2 text-amber-500 italic font-medium">{tagline}</p>

          <p className="mt-4 text-gray-600 leading-relaxed">{description}</p>

          <h4 className="mt-6 text-gray-900 font-semibold">Core Services:</h4>

          <ul className="mt-3 space-y-2 text-gray-700 text-sm md:text-base">
            {services.map((service, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-2 w-2 h-2 rounded-full bg-amber-500/90"></span>
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompanyCards;




