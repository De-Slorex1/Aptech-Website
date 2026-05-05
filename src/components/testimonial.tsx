"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  student: string;
  tech: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "E-Commerce Website",
    student: "Daniel A.",
    tech: "React, Node.js",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
  },
  {
    title: "Banking Dashboard UI",
    student: "Sarah M.",
    tech: "Figma, UI/UX",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    title: "Cybersecurity Monitoring Tool",
    student: "Ibrahim K.",
    tech: "Python",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "AI Chat Application",
    student: "Grace T.",
    tech: "Next.js, OpenAI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
];

export default function StudentProjects() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-brand-tertiary font-semibold mb-4 uppercase tracking-widest">
            Student Projects
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
            Built by Our Students
          </h2>

          <p className="text-slate-600 text-lg">
            Our students don’t just learn theory — they build real-world projects
            that prepare them for the tech industry.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project: Project, index: number) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Image */}
              <img
                src={`${project.image}?auto=format&fit=crop&w=800&q=80`}
                alt={project.title}
                className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-lg">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {project.student}
                </p>
                <p className="text-brand-tertiary text-xs mt-1">
                  {project.tech}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}