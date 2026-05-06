"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";

const centers = [
  {
    name: "Aptech Agodi Center",
    address: "Westone Building, Beside the Office of the Governor’s Wife, Agodi, Ibadan",
    phone: "+234 707 049 1555",
    image: "/centers/agodi.jpg",
  },
  {
    name: "Aptech Ringroad Center",
    address: "93, M.K.O. Abiola Way, Adjacent Sunrise Mall, Ring Road, Ibadan",
    phone: "+234 806 463 4830",
    image: "/centers/ringroad.jpg",
  },
];

export default function CentersSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-brand-tertiary font-semibold uppercase tracking-widest mb-4">
            Our Locations
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
            Visit Our <span className="text-brand-tertiary">Learning Centers</span>
          </h2>

          <p className="text-slate-600 text-lg">
            Experience world-class tech training at any of our modern learning centers in Ibadan.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-10">

          {centers.map((center, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={center.image}
                  alt={center.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-2xl font-bold text-brand-primary mb-4">
                  {center.name}
                </h3>

                <div className="space-y-3 text-slate-600">

                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-brand-tertiary" />
                    <span>{center.address}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-brand-tertiary" />
                    <span>{center.phone}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-brand-tertiary font-semibold hover:gap-3 transition-all"
                  >
                    Get Directions
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}