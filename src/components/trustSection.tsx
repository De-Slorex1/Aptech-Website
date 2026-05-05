"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, BookOpen, Award, Globe, LucideIcon } from "lucide-react";

type Stat = {
  label: string;
  value: string;
};

type Highlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/* ---------------- Animated Number ---------------- */
function AnimatedNumber({
  value,
  inView,
}: {
  value: string;
  inView: boolean;
}) {
  const [displayValue, setDisplayValue] = useState<number>(0);

  useEffect(() => {
    if (!inView) return;

    const numericValue = parseInt(value.replace(/\D/g, ""));
    const suffix = value.replace(/[0-9]/g, "");

    const controls = animate(0, numericValue, {
      duration: 2,
      onUpdate(latest) {
        setDisplayValue(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [inView, value]);

  return (
    <span>
      {displayValue}
      {value.includes("+") && "+"}
      {value.includes("%") && "%"}
    </span>
  );
}

/* ---------------- Main Section ---------------- */
export default function TrustSection() {
  const stats: Stat[] = [
    { label: "Students Trained", value: "2000+" },
    { label: "Success Rate", value: "95%" },
    { label: "Global Certifications", value: "10+" },
    { label: "Industry Partners", value: "50+" },
  ];

  const highlights: Highlight[] = [
    {
      title: "Experienced Instructors",
      description:
        "Our tutors are industry professionals with real-world experience in software, design, and IT systems.",
      icon: Users,
    },
    {
      title: "Structured Curriculum",
      description:
        "We follow globally aligned training programs designed to take students from beginner to job-ready.",
      icon: BookOpen,
    },
    {
      title: "Modern Learning Environment",
      description:
        "Well-equipped labs and hands-on practical sessions that simulate real industry conditions.",
      icon: Globe,
    },
    {
      title: "Industry Certifications",
      description:
        "Students graduate with globally recognized certifications that improve employability worldwide.",
      icon: Award,
    },
  ];

  const statsRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-brand-tertiary font-semibold mb-4 uppercase tracking-widest">
            Why Aptech Ibadan
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-brand-primary leading-tight mb-6">
            A Team of Innovative Experts
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            A team driven by passion for impact combining creativity, experience,
            and forward thinking solutions to prepare students for real-world success.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {highlights.map((item: Highlight, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition"
            >
              <item.icon className="w-6 h-6 text-brand-tertiary mb-4" />
              <h3 className="font-semibold text-brand-primary mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white rounded-3xl border border-slate-100 p-10"
        >
          {stats.map((stat: Stat, index: number) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-brand-tertiary">
                <AnimatedNumber value={stat.value} inView={isInView} />
              </h3>
              <p className="text-slate-600 text-sm mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}