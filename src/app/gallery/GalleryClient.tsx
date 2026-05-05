"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Award, Image as ImageIcon, Maximize2, Play, Sparkles, X } from "lucide-react";
import { useState } from "react";

type GalleryItem = {
  title: string;
  category: string;
  image: string;
  height: string;
  mediaType?: "image" | "video";
};

const galleryItems: GalleryItem[] = [
  {
    title: "Aptech Center Moment",
    category: "Campus Life",
    image: "/aptech1.jpeg",
    height: "h-[320px]",
  },
  {
    title: "Student Achievement Highlight",
    category: "Achievement",
    image: "/aptech2.jpeg",
    height: "h-[410px]",
  },
  {
    title: "Learning in Action",
    category: "Training",
    image: "/aptech3.jpeg",
    height: "h-[560px]",
  },
  {
    title: "Center Showcase",
    category: "Community",
    image: "/aptech4.jpeg",
    height: "h-[330px]",
  },
  {
    title: "Student Moment",
    category: "Milestone",
    image: "/aptech5.jpeg",
    height: "h-[360px]",
  },
  {
    title: "Aptech Experience",
    category: "Success",
    image: "/aptech6.jpeg",
    height: "h-[520px]",
  },
  {
    title: "Center Highlight Reel",
    category: "Video Moment",
    image: "/aptech7.MOV",
    height: "h-[440px]",
    mediaType: "video",
  },
  {
    title: "Center Memory",
    category: "Student Life",
    image: "/aptech8.jpeg",
    height: "h-[430px]",
  },
  {
    title: "Achievement Moment",
    category: "Milestone",
    image: "/aptech9.jpeg",
    height: "h-[350px]",
  },
  {
    title: "Learning Community",
    category: "Community",
    image: "/aptech10.jpeg",
    height: "h-[540px]",
  },
  {
    title: "Aptech Showcase",
    category: "Center Life",
    image: "/aptech11.jpeg",
    height: "h-[390px]",
  },
  {
    title: "Student Success Story",
    category: "Achievement",
    image: "/aptech12.jpeg",
    height: "h-[470px]",
  },
];

const stats = [
  { value: "2K+", label: "Students trained" },
  { value: "10+", label: "Global certifications" },
  { value: "50+", label: "Industry partners" },
];

export default function GalleryClient() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-primary pt-32 pb-24 text-white">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(242,22,7,0.18),_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(79,70,229,0.16),_transparent_30%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-tertiary/70 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[88rem] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-14 grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end"
        >
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm text-white/80 backdrop-blur">
              <Sparkles className="h-4 w-4 text-brand-tertiary" />
              Aptech Ibadan Gallery
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white lg:text-7xl">
              Moments &{" "}
              <span className="relative inline-block text-brand-tertiary">
                Achievements
                <span className="absolute -bottom-2 left-0 h-1 w-24 rounded-full bg-brand-tertiary" />
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
              A living showcase of student wins, practical sessions, project
              presentations, certification milestones, and the learning culture
              across our centers.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-brand-tertiary">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-white/55">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mb-8 flex items-center gap-3 border-y border-white/10 py-4 text-white/65">
          <ImageIcon className="h-5 w-5 text-brand-tertiary" />
          <p className="text-sm font-medium uppercase tracking-[0.28em]">
            Student life, center events, and success stories
          </p>
        </div>

        <div className="columns-1 gap-6 md:columns-2 xl:columns-3">
          {galleryItems.map((item, index) => (
            <motion.button
              key={item.title}
              type="button"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: (index % 4) * 0.06 }}
              viewport={{ once: true, margin: "-80px" }}
              onClick={() => setActiveItem(item)}
              className="group relative mb-6 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left shadow-2xl shadow-black/20"
              aria-label={`View ${item.title}`}
            >
              {item.mediaType === "video" ? (
                <video
                  src={item.image}
                  className={`${item.height} w-full object-cover transition duration-700 group-hover:scale-105`}
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                  aria-label={item.title}
                />
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  className={`${item.height} w-full object-cover transition duration-700 group-hover:scale-105`}
                  loading={index < 4 ? "eager" : "lazy"}
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-80 transition duration-300 group-hover:opacity-90" />

              <div className="absolute left-4 top-4 rounded-lg bg-black/45 px-3 py-1 text-xs font-semibold text-white/85 backdrop-blur">
                {item.category}
              </div>

              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-black/35 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                {item.mediaType === "video" ? (
                  <Play className="h-4 w-4" />
                ) : (
                  <Maximize2 className="h-4 w-4" />
                )}
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="mb-3 h-px w-full bg-white/15" />
                <h2 className="text-lg font-semibold text-white">
                  {item.title}
                </h2>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
            onClick={() => setActiveItem(null)}
          >
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-tertiary"
              aria-label="Close gallery preview"
            >
              <X className="h-5 w-5" />
            </button>

            <motion.div
              initial={{ scale: 0.96, y: 18 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 18 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-brand-primary shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              {activeItem.mediaType === "video" ? (
                <video
                  src={activeItem.image}
                  className="max-h-[78vh] w-full bg-black"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="max-h-[78vh] w-full object-contain bg-black"
                />
              )}

              <div className="flex flex-col gap-3 border-t border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-tertiary">
                    {activeItem.category}
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-white">
                    {activeItem.title}
                  </h2>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/70">
                  <Award className="h-4 w-4 text-brand-tertiary" />
                  Aptech Ibadan
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
