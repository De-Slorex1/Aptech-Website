"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

type Term = {
  title: string;
  modules: string[];
};

type Course = {
  title: string;
  tagline: string;
  description: string;

  media: {
    type: "video" | "image";
    src: string;
  };

  terms: Term[];

  highlights?: string[];
  outcomes?: string; 
  totalHours?: number;
  jobRoles?: string[];

  industryOverview?: {
    growth: string;
    insight1: string;
    insight2: string;
    insight3: string;
  };

  skillBuilderPrograms?: string[];
};

export default function CourseClient({ course, slug }: { course: Course; slug: string; }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTerm = course.terms[activeIndex];
  const contentRef = useRef<HTMLDivElement>(null);

  const isSmartStack = slug === "smartstack";

  // ✅ FIXED SCROLL (safe + stable)
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const yOffset = -100;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }, [activeIndex]);

  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: "radial-gradient(circle at top right, #0f172a, #020617)",
      }}
    >
      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-black leading-tight">
            {course.title}
          </h1>

          <p className="mt-4 text-white/70 text-lg">
            {course.tagline}
          </p>

          <p className="my-5 text-white/60 leading-relaxed">
            {course.description}
          </p>

          <a
            href="https://wa.me/2347070491555"
            className="bg-red-600 hover:bg-red-500 text-white py-3 px-8 rounded-xl font-bold shadow-[0_0_20px_rgba(239,68,68,0.25)] border border-red-500/30 transition-all"
          >
            Enroll now
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="rounded-2xl overflow-hidden border border-red-500/20 bg-white/5">
            {course.media.type === "video" ? (
              <video
                className="w-full h-[320px] object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={course.media.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={course.media.src}
                className="w-full h-[320px] object-cover"
              />
            )}

            <div className="p-5">
              <p className="text-sm text-white/60">
                Preview of learning journey
              </p>
              <p className="font-bold text-lg mt-1">
                Structured, guided, industry-ready path
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-12 gap-10">
        {/* LEFT */}
        <div className="md:col-span-4 space-y-3">
          {course.terms.map((term, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-5 rounded-xl border transition-all ${
                  isActive
                    ? "bg-red-500/10 border-red-500/50 shadow-[0_0_25px_rgba(239,68,68,0.25)]"
                    : "bg-white/5 border-white/10 hover:border-red-500/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      isActive ? "bg-red-500" : "bg-white/20"
                    }`}
                  />
                  <h3 className="font-bold">{term.title}</h3>
                </div>

                <p className="text-sm text-white/60 mt-2">
                  {term.modules.length} modules
                </p>
              </button>
            );
          })}
        </div>

        {/* RIGHT */}
        <div ref={contentRef} className="md:col-span-8 space-y-6">
          {/* TERM */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-2xl p-8 bg-white/5 border border-red-500/20"
          >
            <h2 className="text-2xl font-bold mb-6">
              {activeTerm.title}
            </h2>

            <div className="space-y-3">
              {activeTerm.modules.map((mod, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg border border-white/10 bg-white/5 text-white/80 hover:bg-red-500/5 transition-all"
                >
                  {mod}
                </div>
              ))}
            </div>
          </motion.div>

          {/* SNAPSHOT (NOW CLEAN + SAFE) */}
          {(course.totalHours || course.outcomes) && (
            <div className="p-6 rounded-2xl bg-white/5 border border-red-500/20">
              <h3 className="font-bold mb-3">Program Snapshot</h3>

              {course.totalHours && (
                <p className="text-white/70 text-sm">
                  ⏱ {course.totalHours} Total Hours
                </p>
              )}

              {course.outcomes && (
                <p className="text-white/60 text-sm mt-2">
                  {course.outcomes}
                </p>
              )}
            </div>
          )}

          {/* HIGHLIGHTS */}
          {course.highlights && (
            <div className="p-6 rounded-2xl bg-white/5 border border-red-500/20">
              <h3 className="font-bold mb-3">Why This Program</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                {course.highlights.map((h, i) => (
                  <li key={i}>• {h}</li>
                ))}
              </ul>
            </div>
          )}

          {/* INDUSTRY */}
          {course.industryOverview && (
            <div className="p-6 rounded-2xl bg-white/5 border border-red-500/20">
              <h3 className="font-bold mb-3">Industry Insight</h3>

              <p className="text-white/70 text-sm">
                {course.industryOverview.growth}
              </p>
              <p className="text-white/60 text-sm mt-2">
                {course.industryOverview.insight1}
              </p>
              <p className="text-white/60 text-sm">
                {course.industryOverview.insight2}
              </p>
              <p className="text-white/60 text-sm">
                {course.industryOverview.insight3}
              </p>
            </div>
          )}

          {/* SKILLS */}
          {course.skillBuilderPrograms && (
            <div className="p-6 rounded-2xl bg-white/5 border border-red-500/20">
              <h3 className="font-bold mb-3">Skill Builder Stack</h3>

              <div className="flex flex-wrap gap-2">
                {course.skillBuilderPrograms.map((s, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 border border-red-500/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}