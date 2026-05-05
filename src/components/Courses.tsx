"use client";

import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Shield,
  Cpu,
  Globe,
  Briefcase,
  LucideIcon,
} from "lucide-react";

type Program = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const programs: Program[] = [
  {
    title: "Advanced Diploma in Software Engineering",
    description:
      "Become a full-stack developer with real-world projects and global certification.",
    icon: Code,
  },
  {
    title: "Arena Multimedia Specialist Program",
    description:
      "Master UI/UX, animation, and digital design tools used in top creative industries.",
    icon: Palette,
  },
  {
    title: "Aptech Certified Network Specialist",
    description:
      "Build, manage, and secure enterprise-level network infrastructures.",
    icon: Globe,
  },
  {
    title: "Certified Ethical Hacking",
    description:
      "Learn ethical hacking, network security, and how to protect systems from attacks.",
    icon: Shield,
  },
  {
    title: "Skill Builders & Smart Professional",
    description:
      "Work with data, machine learning, and AI systems shaping the future.",
    icon: Cpu,
  },
  {
    title: "JAPA Courses",
    description:
      "Specialized tracks designed for relocation, job readiness, and global opportunities.",
    icon: Briefcase,
  },
];

export default function Courses() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-brand-tertiary font-semibold mb-4">
            OUR PROGRAMS
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-brand-primary">
            Choose Your <span className="text-brand-tertiary">Career Path</span>
          </h2>

          <p className="text-slate-600 text-lg">
            Whether you&apos;re starting from scratch or leveling up, we provide structured
            programs designed to take you from beginner to job-ready.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program: Program, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                group relative p-8 rounded-3xl bg-white border-2 border-slate-100
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl
                hover:border-brand-tertiary/60
                hover:bg-red-50/30
                overflow-hidden
              "
            >
              {/* Accent line */}
              <div className="absolute left-0 top-0 h-full w-1 bg-brand-tertiary scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-brand-tertiary/5 to-transparent pointer-events-none" />

              {/* Icon */}
              <div className="w-14 h-14 bg-brand-tertiary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-tertiary group-hover:scale-110 transition-all duration-300">
                <program.icon className="w-6 h-6 text-brand-tertiary group-hover:text-white transition" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-brand-primary">
                {program.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed mb-6">
                {program.description}
              </p>

              {/* CTA */}
              <div className="flex items-center text-sm text-brand-tertiary font-semibold">
                Explore Program →
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
