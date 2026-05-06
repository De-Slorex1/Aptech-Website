"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaTiktok, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  // const socialLinks = [
  //   {
  //     icon: Music2,
  //     href: "https://www.tiktok.com/@aptechagodi?lang=en",
  //     label: "TikTok",
  //   },
  //   {
  //     icon: Linkedin,
  //     href: "https://www.linkedin.com/company/aptechagodi",
  //     label: "LinkedIn",
  //   },
  //   {
  //     icon: Instagram,
  //     href: "https://www.instagram.com/aptechagodi",
  //     label: "Instagram",
  //   },
  // ];

  return (
    <footer className="bg-brand-primary text-white pt-20 pb-10 relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">

          {/* Brand */}
          <div>
            <Image src="/logo.png" alt="Logo" width={120} height={40} />

            <p className="text-white/70 leading-relaxed mb-8">
              Empowering the next generation of tech leaders through industry-aligned training
              and innovative software solutions.
            </p>

            {/* ✅ SOCIAL ICONS FIXED */}
            <div className="flex gap-4">
              <motion.a
                href="https://www.tiktok.com/@aptechagodi?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center 
                hover:bg-brand-tertiary transition-all duration-300 shadow-lg hover:shadow-brand-tertiary/30"
              >
                <FaTiktok className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/company/aptechagodi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center 
                hover:bg-brand-tertiary transition-all duration-300 shadow-lg hover:shadow-brand-tertiary/30"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/aptechagodi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center 
                hover:bg-brand-tertiary transition-all duration-300 shadow-lg hover:shadow-brand-tertiary/30"
              >
                <FaInstagram className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-bold mb-6">Programs</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link href="/courses/adse" className="hover:text-brand-tertiary">Software Engineering</Link></li>
              <li><Link href="/courses/acns" className="hover:text-brand-tertiary">Network Specialist</Link></li>
              <li><Link href="/courses/multimedia" className="hover:text-brand-tertiary">Multimedia</Link></li>
              <li><Link href="/courses/cybersecurity" className="hover:text-brand-tertiary">CyberSecurity</Link></li>
              <li><Link href="/courses/data-science" className="hover:text-brand-tertiary">Data Analytics</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#about" className="hover:text-brand-tertiary">About Us</a></li>
              <li><Link href="/career" className="hover:text-brand-tertiary">Careers</Link></li>
              <li>
                <a href="https://forms.gle/JsUVMFHnnuoxLTeM9" target="_blank" rel="noopener noreferrer"
                  className="hover:text-brand-tertiary">
                  Apply Now
                </a>
              </li>
              <li>
                <a href="https://wa.me/2347070491555" target="_blank" rel="noopener noreferrer"
                  className="hover:text-brand-tertiary">
                  Career Advice
                </a>
              </li>
              <li>
                <a href="https://wa.me/2347070491555" target="_blank" rel="noopener noreferrer"
                  className="hover:text-brand-tertiary">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Talk To Us</h4>

            <ul className="space-y-4 text-slate-400">

              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-brand-tertiary" />
                <span>info@itssng.com</span>
              </li>

              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-brand-tertiary" />
                <span>+234 707 049 1555</span>
              </li>

              <li className="flex flex-col gap-4">

                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-brand-tertiary" />
                  <div>
                    <p className="font-bold text-white text-sm uppercase">Agodi Center</p>
                    <p className="text-sm">Agodi, Ibadan, Nigeria</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-brand-tertiary" />
                  <div>
                    <p className="font-bold text-white text-sm uppercase">Ringroad Center</p>
                    <p className="text-sm">Ringroad, Ibadan, Nigeria</p>
                  </div>
                </div>

              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-white/50 text-sm">
            © {currentYear} Itssc Aptech. All rights reserved.
          </p>

          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>

        </div>
      </div>
    </footer>
  );
}