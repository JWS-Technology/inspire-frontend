"use client";

import React from "react";
import Image from "next/image";

export type MarqueeItem = { name: string; logo: string };

type Props = {
  item: MarqueeItem;
  /**
   * Tailwind width class to control card size.
   * Default widened from 22rem → 28rem for a larger look.
   */
  width?: string;
  /**
   * Optional label under title.
   */
  subtitle?: string;
};

export default function MarqueeCard({
  item,
  width = "min-w-[28rem]", // increased width
  subtitle = "Premium partnership",
}: Props) {
  const src = encodeURI(`/logos/${item.logo}`);

  return (
    <div className={`flex-shrink-0 ${width} group/tile`}>
      <div className="px-6 py-6 bg-white rounded-2xl shadow-md border border-slate-200/80 hover:border-slate-300 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg backdrop-blur-sm">
        <div className="flex items-center gap-5">
          {/* Company logo */}
          <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-inner overflow-hidden">
            <Image
              src={src}
              alt={item.name}
              width={80}
              height={80}
              style={{ objectFit: "contain" }}
              className="relative z-10"
            />
          </div>

          {/* Text content */}
          <div className="flex-1 min-w-0">
            <div className="text-lg font-semibold text-slate-800 leading-tight mb-1">
              {item.name}
            </div>

            <span className="text-sm text-slate-500 font-medium">{subtitle}</span>
          </div>

          {/* Arrow hover icon */}
          {/* <div className="opacity-0 group-hover/tile:opacity-100 transform group-hover/tile:translate-x-1 transition-all duration-300 text-slate-400 text-xl">
            →
          </div> */}
        </div>
      </div>
    </div>
  );
}
