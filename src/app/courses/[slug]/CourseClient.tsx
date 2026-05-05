"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Term = {
  title: string;
  modules: string[];
};

type Course = {
  title: string;
  tagline: string;
  description: string;
  image: string;
  terms: Term[];
};

export default function CourseClient({ course }: { course: Course }) {
  const [active, setActive] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#f9fafb] text-slate-900">
    {/* ================= HERO ================= */}
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">

    {/* background image */}
    <img
        src={course.image}
        className="absolute inset-0 w-full h-full object-cover opacity-60"
    />

    {/* cinematic overlays */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-[#0A0A0A]" />

    {/* red ambient glow */}
    

    <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl px-6"
    >
        <h1 className="text-5xl md:text-7xl font-black leading-tight">
        <span className="text-white">{course.title}</span>
        </h1>

        {/* badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
        {["Paid Internship", "Global Exposure", "AI Powered", "Industry Cert"].map(
            (t, i) => (
            <span
                key={i}
                className="px-4 py-2 text-sm text-white rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
            >
                {t}
            </span>
            )
        )}
        </div>
    </motion.div>
    </section>
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold text-center mb-16">
          ADSE Program Structure
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {course.terms.map((term, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
            >
              {/* HEADER */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">
                  {term.title}
                </h3>

                <button
                  onClick={() =>
                    setActive(active === index ? null : index)
                  }
                  className="text-red-600 font-bold"
                >
                  {active === index ? "−" : "+"}
                </button>
              </div>

              {/* MODULES */}
              {active === index && (
                <div className="grid gap-3 mt-4">

                  {term.modules.map((mod, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 hover:bg-red-50 transition"
                    >
                      <div className="w-2 h-2 mt-2 rounded-full bg-red-600" />
                      <p className="text-sm text-slate-700">
                        {mod}
                      </p>
                    </motion.div>
                  ))}

                </div>
              )}
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-brand-primary text-white">
        <h2 className="text-4xl font-bold">
          Ready To Start Your <span className="text-red-500">Global Tech Journey?</span>
        </h2>

        <p className="text-white/60 mt-3">
          Join a new generation of global developers.
        </p>

        <a className="inline-block mt-8 bg-red-600 px-8 py-4 rounded-full font-bold hover:bg-red-500 transition">
          Apply Now
        </a>
      </section>

    </div>
  );
}