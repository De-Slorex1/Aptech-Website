"use client";

import { useEffect, useState } from "react";

const images: string[] = [
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
];

export default function HeroVisual() {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev: number) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto">

      {/* Background Glow */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-brand-tertiary/20 to-purple-500/20 blur-3xl rounded-3xl" />

      {/* Main Container */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">

        {/* Slider Track */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {images.map((img: string, i: number) => (
            <img
              key={i}
              src={img}
              alt="Students learning"
              className="w-full flex-shrink-0 object-cover aspect-[4/3]"
              loading="lazy"
            />
          ))}
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Floating Glass Card */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-white/5 backdrop-blur-xl p-4 rounded-xl border border-white/10">
            <p className="text-sm font-semibold text-white">
              Global Certification
            </p>
            <p className="text-xs text-white/70">
              Recognized in UK, UAE, Malaysia & Canada
            </p>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, i: number) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}