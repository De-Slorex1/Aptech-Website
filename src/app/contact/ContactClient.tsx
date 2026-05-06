"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Mail,
  MapPin,
  MessageSquareText,
  Navigation,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

type ContactInfo = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  tone: string;
};

type Center = {
  name: string;
  area: string;
  address: string;
  mapQuery: string;
  directionsHref: string;
};

const whatsappNumber = "2347070491555";

const contactInfo: ContactInfo[] = [
  {
    label: "Call",
    value: "+234 707 049 1555",
    href: "tel:+2347070491555",
    icon: Phone,
    tone: "bg-brand-accent text-black",
  },
  {
    label: "Email",
    value: "info@itssng.com",
    href: "mailto:info@itssng.com",
    icon: Mail,
    tone: "bg-white text-brand-primary",
  },
  {
    label: "WhatsApp",
    value: "Chat with an advisor",
    href: `https://wa.me/${whatsappNumber}`,
    icon: MessageSquareText,
    tone: "bg-brand-tertiary text-white",
  },
];

const centers: Center[] = [
  {
    name: "Agodi Center",
    area: "Agodi GRA",
    address:
      "WestOne Building, opposite Environmental Task Force Secretariat Drive, Agodi GRA, Ibadan.",
    mapQuery:
      "Aptech Ibadan 2 WestOne building opposite Environmental Task Force Secretariat Drive Agodi GRA Ibadan",
    directionsHref:
      "https://www.google.com/maps/search/?api=1&query=Aptech+Ibadan+2+WestOne+building+opposite+Environmental+Task+Force+Secretariat+Drive+Agodi+GRA+Ibadan",
  },
  {
    name: "Ringroad Center",
    area: "MKO Abiola Ring Road",
    address: "14, MKO Abiola Ring Road, Challenge, Ibadan.",
    mapQuery: "Aptech 14 MKO Abiola Ring Road Challenge Ibadan",
    directionsHref:
      "https://www.google.com/maps/search/?api=1&query=Aptech+14+MKO+Abiola+Ring+Road+Challenge+Ibadan",
  },
];

const visitHighlights = [
  "Admissions guidance",
  "Course counselling",
  "Campus visits",
];

const getMapEmbedSrc = (query: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(
    query
  )}&z=16&output=embed`;

export default function ContactClient() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fullName =
      `${form.firstName} ${form.lastName}`.trim() || "Website visitor";
    const text = [
      `Hello Aptech Ibadan, my name is ${fullName}.`,
      form.email ? `Email: ${form.email}` : "",
      form.subject ? `Subject: ${form.subject}` : "",
      form.message ? `Message: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#05070a] pt-32 text-white">
        <div
          className="absolute inset-0 bg-[linear-gradient(115deg,rgba(242,22,7,0.16),rgba(5,7,10,0)_36%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(5,7,10,0)_24%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-tertiary/70 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="pt-8"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm text-white/80 backdrop-blur">
                <Sparkles className="h-4 w-4 text-brand-accent" />
                Speak with Aptech Ibadan
              </div>

              <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white lg:text-7xl">
                Visit, call, or message the center closest to you.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/70">
                Get clear answers on admissions, fees, class schedules, campus
                visits, and the best course path for your career goals.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand-tertiary px-6 text-sm font-bold text-white shadow-xl shadow-brand-tertiary/20 transition hover:-translate-y-0.5 hover:bg-red-500"
                >
                  Chat on WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#locations"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/10 px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-brand-accent/50 hover:bg-white/15"
                >
                  View centers
                  <MapPin className="h-4 w-4 text-brand-accent" />
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group rounded-lg border border-white/10 bg-white/[0.07] p-4 shadow-xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:border-brand-tertiary/50 hover:bg-white/[0.1]"
                  >
                    <span
                      className={`mb-5 flex h-11 w-11 items-center justify-center rounded-lg ${item.tone}`}
                    >
                      <item.icon className="h-5 w-5" />
                    </span>

                    <span className="block text-xs font-bold uppercase text-white/55">
                      {item.label}
                    </span>
                    <span className="mt-2 flex items-center gap-2 text-sm font-bold text-white">
                      <span className="min-w-0 break-words">{item.value}</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-white/45 transition group-hover:text-brand-accent" />
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {visitHighlights.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/75"
                  >
                    <CheckCircle2 className="h-4 w-4 text-brand-accent" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="rounded-lg border border-white/10 bg-white p-6 text-slate-950 shadow-2xl shadow-black/35 sm:p-8"
            >
              <div className="mb-8 flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-50 text-brand-tertiary">
                  <MessageSquareText className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase text-slate-500">
                    Contact form
                  </p>
                  <h2 className="mt-1 text-3xl font-bold text-slate-950">
                    Send an enquiry
                  </h2>
                </div>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase text-slate-600">
                      First name
                    </span>
                    <input
                      value={form.firstName}
                      onChange={(event) =>
                        updateField("firstName", event.target.value)
                      }
                      type="text"
                      placeholder="John"
                      className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-brand-tertiary focus:bg-white focus:ring-4 focus:ring-brand-tertiary/10"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase text-slate-600">
                      Last name
                    </span>
                    <input
                      value={form.lastName}
                      onChange={(event) =>
                        updateField("lastName", event.target.value)
                      }
                      type="text"
                      placeholder="Doe"
                      className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-brand-tertiary focus:bg-white focus:ring-4 focus:ring-brand-tertiary/10"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-slate-600">
                    Email address
                  </span>
                  <input
                    value={form.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                    type="email"
                    placeholder="john@example.com"
                    className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-brand-tertiary focus:bg-white focus:ring-4 focus:ring-brand-tertiary/10"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-slate-600">
                    Subject
                  </span>
                  <input
                    value={form.subject}
                    onChange={(event) =>
                      updateField("subject", event.target.value)
                    }
                    type="text"
                    placeholder="Admission enquiry"
                    className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-brand-tertiary focus:bg-white focus:ring-4 focus:ring-brand-tertiary/10"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-slate-600">
                    Message
                  </span>
                  <textarea
                    value={form.message}
                    onChange={(event) =>
                      updateField("message", event.target.value)
                    }
                    placeholder="How can we help you?"
                    rows={5}
                    className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-brand-tertiary focus:bg-white focus:ring-4 focus:ring-brand-tertiary/10"
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-brand-primary px-6 text-sm font-bold text-white shadow-xl shadow-black/15 transition hover:-translate-y-0.5 hover:bg-brand-tertiary"
                >
                  Send on WhatsApp
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="locations" className="bg-slate-50 py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end"
          >
            <div>
              <p className="mb-4 text-sm font-bold uppercase text-brand-tertiary">
                Our locations
              </p>
              <h2 className="max-w-3xl text-4xl font-bold leading-tight text-slate-950 lg:text-5xl">
                Find the Aptech Ibadan center closest to you.
              </h2>
            </div>

            <p className="text-base leading-relaxed text-slate-600">
              Each map is embedded from Google Maps and opens into turn-by-turn
              directions when you need to plan your visit.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            {centers.map((center, index) => (
              <motion.article
                key={center.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-80px" }}
                className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl shadow-slate-200/70"
              >
                <div className="relative h-[360px] bg-slate-200">
                  <iframe
                    src={getMapEmbedSrc(center.mapQuery)}
                    title={`${center.name} Google map`}
                    className="h-full w-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-3 py-2 text-sm font-bold text-slate-950 shadow-lg">
                    <MapPin className="h-4 w-4 fill-brand-tertiary text-brand-tertiary" />
                    {center.area}
                  </div>
                </div>

                <div className="grid gap-6 border-t border-slate-200 p-6 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-50 text-brand-tertiary">
                        <Building2 className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-950">
                          {center.name}
                        </h3>
                        <p className="text-sm font-semibold text-brand-tertiary">
                          {center.area}
                        </p>
                      </div>
                    </div>

                    <p className="max-w-xl text-sm leading-relaxed text-slate-600">
                      {center.address}
                    </p>
                  </div>

                  <a
                    href={center.directionsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-tertiary"
                  >
                    Directions
                    <Navigation className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
