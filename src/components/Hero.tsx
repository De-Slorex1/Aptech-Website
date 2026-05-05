"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, SquarePlay } from "lucide-react";
import Link from "next/link";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden text-white"
      style={{
        background: "radial-gradient(circle at top right, #0f172a, #020617)",
      }}
    >
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-tertiary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-secondary/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-brand-tertiary" />
              Empowering Tomorrow&apos;s Technologists
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Launch Your Tech{" "}
              <span className="text-brand-tertiary">Career Globally</span>
            </h1>

            {/* Text */}
            <p className="text-lg lg:text-xl text-white/80 max-w-xl mb-10">
              Join Aptech Ibadan for world-class IT training. 
              We build careers aligned with global standards and empower 
              the next generation of tech leaders.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://forms.gle/JsUVMFHnnuoxLTeM9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-tertiary text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-brand-tertiary/90 transition-all hover:scale-105 shadow-lg shadow-brand-tertiary/20"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5" />
              </a>

              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 text-white/80 px-8 py-4 rounded-2xl text-lg font-semibold hover:text-white transition"
              >
                <SquarePlay className="w-5 h-5" />
                Watch Video
              </Link>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i: number) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border border-white/20 bg-slate-200 overflow-hidden"
                  >
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20}`}
                      alt="avatar"
                    />
                  </div>
                ))}
              </div>

              <p className="text-sm text-white/70">
                Joined by{" "}
                <span className="text-brand-tertiary font-semibold">
                  2000+
                </span>{" "}
                graduates globally
              </p>
            </div>
          </motion.div>

          {/* RIGHT */}
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
