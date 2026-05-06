"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const categories = ["All", "AI", "Design", "Development", "Career"];

const posts = [
  {
    title: "How AI is Changing Software Engineering",
    category: "AI",
    image: "/blog/ai.jpg",
  },
  {
    title: "UI/UX Trends You Must Know in 2026",
    category: "Design",
    image: "/blog/uiux.jpg",
  },
  {
    title: "How to Become a Job-Ready Developer",
    category: "Career",
    image: "/blog/career.jpg",
  },
  {
    title: "Understanding Full Stack Development",
    category: "Development",
    image: "/blog/dev.jpg",
  },
];

export default function BlogPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? posts
      : posts.filter((p) => p.category === active);

  return (
    <div className="bg-slate-50">

      {/* HERO */}
      <section className="relative h-[70vh] flex items-end">
        <Image
          src="/blog/featured.jpg"
          alt="featured"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 p-10 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-4"
          >
            Insights for Future Tech Leaders
          </motion.h1>

          <p className="text-white/70">
            Learn, grow, and stay ahead in the tech industry.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 flex gap-4 flex-wrap">

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                active === cat
                  ? "bg-brand-tertiary text-black"
                  : "bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}

        </div>
      </section>

      {/* BLOG GRID */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filtered.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <p className="text-xs text-brand-tertiary font-bold mb-2">
                  {post.category}
                </p>

                <h3 className="text-lg font-bold text-brand-primary group-hover:text-brand-tertiary transition">
                  {post.title}
                </h3>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="py-20 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Stay Ahead in Tech
        </h2>

        <p className="text-white/70 mb-6">
          Get weekly insights, tutorials, and career tips.
        </p>

        <div className="flex justify-center gap-4">
          <input
            placeholder="Enter your email"
            className="px-4 py-3 rounded-xl text-black w-64"
          />
          <button className="bg-brand-tertiary px-6 py-3 rounded-xl font-bold text-black">
            Subscribe
          </button>
        </div>
      </section>

    </div>
  );
}