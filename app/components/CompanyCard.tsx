"use client";

import React from "react";

export interface CompanyCardProps {
  icon: React.ReactNode;
  title: string;
  tagline?: string;
  description: string;
  about?: string;
  services: string[];
  focusAreas?: string[];
  mission?: string;
  vision?: string;
  color?: "amber" | "blue" | "green" | "purple";
  accentClass?: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  icon,
  title,
  tagline,
  description,
  about,
  services,
  focusAreas,
  mission,
  vision,
  color = "amber",
  accentClass,
}) => {
  const colorMap = {
    amber: {
      accent: "bg-amber-400",
      text: "text-amber-500",
      dot: "bg-amber-500",
      pillBg: "bg-amber-50",
      pillRing: "ring-amber-200/60",
      headerGradient: "from-amber-400 to-yellow-400",
    },
    blue: {
      accent: "bg-blue-400",
      text: "text-blue-500",
      dot: "bg-blue-500",
      pillBg: "bg-blue-50",
      pillRing: "ring-blue-200/60",
      headerGradient: "from-blue-400 to-cyan-400",
    },
    green: {
      accent: "bg-green-400",
      text: "text-green-500",
      dot: "bg-green-500",
      pillBg: "bg-green-50",
      pillRing: "ring-green-200/60",
      headerGradient: "from-green-400 to-emerald-400",
    },
    purple: {
      accent: "bg-purple-400",
      text: "text-purple-500",
      dot: "bg-purple-500",
      pillBg: "bg-purple-50",
      pillRing: "ring-purple-200/60",
      headerGradient: "from-purple-400 to-violet-400",
    },
  } as const;

  const theme = colorMap[color];

  return (
    <article
      className="w-[90vw] max-w -4xl bg-white rounded-2xl border border-gray-100 p-6 md:p-8 transition-all duration-300 ease-in-out transform hover:-tran slate-y-1 hove r:scale-110 hover: shadow-xl"
      aria-labelledby={`company-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div
            className={`w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center ${
              accentClass || theme.accent
            } text-white shadow-inner`}
            aria-hidden="true"
          >
            {icon}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3
            id={`company-${title.replace(/\s+/g, "-").toLowerCase()}`}
            className="text-lg md:text-2xl font-extrabold text-gray-900 leading-tight"
          >
            {title}
          </h3>

          {tagline && (
            <p className={`mt-2 text-sm md:text-base italic font-medium ${theme.text}`}>
              {tagline}
            </p>
          )}

          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            {description}
          </p>

          {about && (
            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              {about}
            </p>
          )}

          {/* ===== NEW: Core Services stylized header ===== */}
         

          {/* ===== optional extra sections (unchanged behavior) ===== */}
          {focusAreas && (
            <>
              <h4 className="mt-6 text-gray-900 font-semibold">Focus Areas:</h4>
              <ul className="mt-3 grid gap-3 text-gray-700 text-sm md:text-base">
                {focusAreas.map((area, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className={`mt-2 inline-flex w-3 h-3 rounded-full ${theme.dot} flex-shrink-0`}
                    />
                    <span className="leading-snug">{area}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {(mission || vision) && (
            <div className="mt-6 space-y-3">
              {mission && (
                <p className="text-sm md:text-base text-gray-600">
                  <span className={`font-semibold ${theme.text}`}>Mission:</span>{" "}
                  {mission}
                </p>
              )}
              {vision && (
                <p className="text-sm md:text-base text-gray-600">
                  <span className={`font-semibold ${theme.text}`}>Vision:</span>{" "}
                  {vision}
                </p>
              )}
            </div>
          )}

           <div className="mt-6">
            <div className="flex items-center gap-3">
              {/* small rounded gradient bar */}
              <span
                className={`inline-block w-10 h-2 rounded-full bg-gradient-to-r ${theme.headerGradient} shadow-sm`}
                aria-hidden="true"
              />
              <h4 className="text-sm md:text-base font-semibold text-gray-600 uppercase tracking-wide">
                Core Services
              </h4>
            </div>

            {/* pill-style services grid (like your screenshot) */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-9">
              {services.map((svc, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 rounded-full px-5 py-4 ${theme.pillBg} border border-transparent shadow-sm hover:shadow-md transition-all duration-200 cursor-default`}
                >
                  {/* arrow / icon accent */}
                  <span
                    className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${theme.dot} text-white flex-shrink-0`}
                    aria-hidden="true"
                  >
                    {/* simple arrow icon (svg) */}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block"
                    >
                      <path d="M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>

                  <span className="text-sm md:text-base text-gray-700">{svc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CompanyCard;
