"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Award,
  BedDouble,
  BookOpen,
  Building2,
  CheckCircle2,
  Globe2,
  GraduationCap,
  MapPin,
  MonitorCheck,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

type Stat = {
  value: string;
  label: string;
};

type Strength = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Program = {
  title: string;
  description: string;
};

type Center = {
  name: string;
  area: string;
  address: string;
  href: string;
};

const stats: Stat[] = [
  { value: "2", label: "Centers in Ibadan" },
  { value: "2000+", label: "Students trained" },
  { value: "10+", label: "Global certifications" },
  { value: "50+", label: "Industry partners" },
];

const strengths: Strength[] = [
  {
    title: "Globally aligned curriculum",
    description:
      "Our programs are structured to move students from beginner foundations to practical, career-ready competence.",
    icon: BookOpen,
  },
  {
    title: "Modern practical labs",
    description:
      "Students learn in a hands-on environment built around projects, guided practice, and real industry workflows.",
    icon: MonitorCheck,
  },
  {
    title: "Experienced instructors",
    description:
      "Our tutors bring real experience across software, design, networking, cybersecurity, data, and IT systems.",
    icon: Users,
  },
  {
    title: "Global education pathways",
    description:
      "Through international partnerships, students can access recognized credentials and study pathways beyond Nigeria.",
    icon: Globe2,
  },
];

const programs: Program[] = [
  {
    title: "Software Engineering",
    description:
      "Full-stack development, web technologies, databases, and project-based programming.",
  },
  {
    title: "Multimedia & Design",
    description:
      "UI/UX, animation, visual design, creative tools, and multimedia production.",
  },
  {
    title: "Networking & Cybersecurity",
    description:
      "Enterprise networks, security operations, ethical hacking, and system protection.",
  },
  {
    title: "Data, AI & Smart Professional Skills",
    description:
      "Data analytics, machine learning foundations, productivity tools, and workplace readiness.",
  },
];

const centers: Center[] = [
  {
    name: "Agodi Center",
    area: "Agodi GRA",
    address:
      "WestOne Building, opposite Environmental Task Force Secretariat Drive, Agodi GRA, Ibadan.",
    href: "https://www.google.com/maps/search/?api=1&query=Aptech+Ibadan+2+WestOne+building+opposite+Environmental+Task+Force+Secretariat+Drive+Agodi+GRA+Ibadan",
  },
  {
    name: "Ringroad Center",
    area: "MKO Abiola Ring Road",
    address: "14, MKO Abiola Ring Road, Challenge, Ibadan.",
    href: "https://www.google.com/maps/search/?api=1&query=Aptech+14+MKO+Abiola+Ring+Road+Challenge+Ibadan",
  },
];

export default function AboutClient() {
  return (
    <>
      <section className="relative min-h-[82vh] overflow-hidden bg-brand-primary pt-32 text-white">
        <Image
          src="/aptech10.jpeg"
          alt="Aptech Ibadan learning community"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88),rgba(0,0,0,0.64)_46%,rgba(0,0,0,0.18)),linear-gradient(180deg,rgba(0,0,0,0.42),rgba(0,0,0,0.82))]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex min-h-[calc(82vh-8rem)] max-w-7xl items-center px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm text-white/80 backdrop-blur">
              <Sparkles className="h-4 w-4 text-brand-accent" />
              About Aptech Ibadan
            </div>

            <h1 className="text-5xl font-bold leading-tight text-white lg:text-7xl">
              The best computer education center in Ibadan.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75">
              We train students for global technology careers through practical
              computer education, internationally aligned programs, experienced
              instructors, and a learning environment built for serious growth.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://forms.gle/JsUVMFHnnuoxLTeM9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand-tertiary px-6 text-sm font-bold text-white shadow-xl shadow-brand-tertiary/25 transition hover:-translate-y-0.5 hover:bg-red-500"
              >
                Enroll now
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-brand-accent/60 hover:bg-white/15"
              >
                Visit a center
                <MapPin className="h-4 w-4 text-brand-accent" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true, margin: "-80px" }}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70"
              >
                <p className="text-4xl font-bold text-brand-tertiary">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-600">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <p className="mb-4 text-sm font-bold uppercase text-brand-tertiary">
                Who we are
              </p>
              <h2 className="text-4xl font-bold leading-tight text-slate-950 lg:text-5xl">
                A practical learning community for students who want more than
                certificates.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Aptech Ibadan combines structured classroom learning with real
                projects, career direction, and global education pathways. Our
                goal is simple: help students become confident, employable, and
                ready for the opportunities technology creates.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Beginner-friendly pathways",
                  "Project-based training",
                  "International certifications",
                  "Career-focused guidance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-tertiary" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              viewport={{ once: true, margin: "-80px" }}
              className="grid gap-4 sm:grid-cols-2"
            >
              <div className="relative h-[430px] overflow-hidden rounded-lg bg-slate-200 sm:mt-10">
                <Image
                  src="/aptech3.jpeg"
                  alt="Aptech Ibadan students in a practical learning session"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="grid gap-4">
                <div className="relative h-[230px] overflow-hidden rounded-lg bg-slate-200">
                  <Image
                    src="/aptech11.jpeg"
                    alt="Aptech Ibadan center activity"
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="rounded-lg bg-brand-primary p-6 text-white">
                  <Award className="mb-5 h-8 w-8 text-brand-accent" />
                  <p className="text-2xl font-bold">Built for global careers</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Students gain practical confidence, recognized credentials,
                    and pathways into further study or work.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#05070a] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end"
          >
            <div>
              <p className="mb-4 text-sm font-bold uppercase text-brand-accent">
                Why students choose us
              </p>
              <h2 className="max-w-3xl text-4xl font-bold leading-tight lg:text-5xl">
                Premium computer education with real support around it.
              </h2>
            </div>

            <p className="text-base leading-relaxed text-white/70">
              We serve students across Ibadan and beyond, including learners who
              need accommodation support while studying.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {strengths.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true, margin: "-80px" }}
                className="rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-black/20"
              >
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-brand-tertiary">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[420px_1fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <p className="mb-4 text-sm font-bold uppercase text-brand-tertiary">
                What we teach
              </p>
              <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                Programs shaped around career outcomes.
              </h2>
              <p className="mt-6 leading-relaxed text-slate-600">
                From software engineering to cybersecurity, design, data, and
                international readiness, students can choose a path that matches
                their ambition.
              </p>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2">
              {programs.map((program, index) => (
                <motion.article
                  key={program.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  viewport={{ once: true, margin: "-80px" }}
                  className="rounded-lg border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70"
                >
                  <GraduationCap className="mb-6 h-7 w-7 text-brand-tertiary" />
                  <h3 className="text-xl font-bold text-slate-950">
                    {program.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {program.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-80px" }}
              className="rounded-lg bg-brand-primary p-8 text-white shadow-2xl shadow-slate-300/70 lg:p-10"
            >
              <BedDouble className="mb-6 h-10 w-10 text-brand-accent" />
              <p className="mb-4 text-sm font-bold uppercase text-brand-accent">
                Accommodation support
              </p>
              <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                Students from inside and outside Ibadan are welcome.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                We provide accommodation support for students who need a place to
                stay while studying with us, making it easier for learners from
                outside Ibadan to focus on their training and settle in quickly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              viewport={{ once: true, margin: "-80px" }}
              className="grid gap-4"
            >
              <div className="flex gap-4 rounded-lg border border-slate-200 bg-slate-50 p-6">
                <ShieldCheck className="h-7 w-7 shrink-0 text-brand-tertiary" />
                <div>
                  <h3 className="text-xl font-bold">A supported transition</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    New students can get guidance on studying in Ibadan,
                    choosing a center, and settling into a productive routine.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg border border-slate-200 bg-slate-50 p-6">
                <Building2 className="h-7 w-7 shrink-0 text-brand-tertiary" />
                <div>
                  <h3 className="text-xl font-bold">Two centers, one standard</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Whether you study at Agodi or Ringroad, the focus remains
                    practical learning, strong guidance, and global standards.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12 max-w-3xl"
          >
            <p className="mb-4 text-sm font-bold uppercase text-brand-tertiary">
              Our centers
            </p>
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Two Aptech Ibadan centers, closer to where students live and move.
            </h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            {centers.map((center, index) => (
              <motion.article
                key={center.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-80px" }}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70"
              >
                <div className="mb-6 flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-50 text-brand-tertiary">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-950">
                      {center.name}
                    </h3>
                    <p className="mt-1 text-sm font-bold text-brand-tertiary">
                      {center.area}
                    </p>
                  </div>
                </div>

                <p className="min-h-12 text-sm leading-relaxed text-slate-600">
                  {center.address}
                </p>

                <a
                  href={center.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-tertiary"
                >
                  Open location
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
