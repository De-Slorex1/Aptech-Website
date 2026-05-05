"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [showCourses, setShowCourses] = useState<boolean>(false);

  const pathname = usePathname();
  const isHome = pathname === "/";
  const isSolid = scrolled || isOpen || !isHome;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
type Course = {
  name: string;
  slug: string;
};

const courses: Course[] = [
  { name: "Advanced Diploma in Software Engineering", slug: "adse" },
  { name: "Advanced Diploma in Multimedia", slug: "multimedia" },
  { name: "Aptech Certified Network Specialist", slug: "networking" },
  { name: "Arena Multimedia Specialist Program", slug: "arena" },
  { name: "Skill Builders & Smart Professional", slug: "smart-pro" },
  { name: "Certified Ethical Hacking", slug: "ethical-hacking" },
  { name: "JAPA Courses", slug: "japa" },
];

  const navLinks: { name: string; href: string }[] = [
    { name: "Blogs", href: "/blogs" },
    { name: "Gallery", href: "/gallery" },
    { name: "About us", href: "/about" },
    { name: "Contact us", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isSolid ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="group">
          <Image src='/logo.png' alt="Logo" width={120} height={40} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">

          {/* Home */}
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-brand-tertiary",
              isSolid ? "text-slate-600" : "text-white"
            )}
          >
            Home
          </Link>

          {/* Courses Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowCourses(true)}
            onMouseLeave={() => setShowCourses(false)}
          >
            <button
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors",
                isSolid ? "text-slate-600" : "text-white"
              )}
            >
              Courses
              <ChevronDown className="w-4 h-4" />
            </button>

            <AnimatePresence>
              {showCourses && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-4 w-[320px] bg-white rounded-2xl shadow-xl border border-slate-100 p-4"
                >
                  <div className="flex flex-col gap-2">
                     {courses.map((course, i) => (
                        <Link
                          key={i}
                          href={`/courses/${course.slug}`}
                          className="text-sm text-slate-700 hover:text-brand-tertiary transition-colors px-3 py-2 rounded-lg hover:bg-slate-50"
                        >
                          {course.name}
                        </Link>
                      ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-tertiary",
                isSolid ? "text-slate-600" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}

          {/* CTA */}
          <a
            href="https://wa.me/2347070491555"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-tertiary text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-tertiary/90 transition-all hover:scale-105 shadow-lg shadow-brand-tertiary/20"
          >
            Enroll now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-lg",
            isSolid ? "text-black" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white mt-4 rounded-2xl shadow-xl p-6"
          >
            <div className="flex flex-col gap-4">

              <div>
                <p className="font-bold text-brand-primary mb-2">Courses</p>
                <div className="flex flex-col gap-2">
                  {courses.map((course, i) => (
                    <Link
                      key={i}
                      href={`/courses/${course.slug}`}
                      className="text-sm text-slate-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {course.name}
                    </Link>
                  ))}
                </div>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-slate-800"
                >
                  {link.name}
                </Link>
              ))}

              <a
                href="https://wa.me/2347070491555"
                className="bg-brand-tertiary text-white py-3 rounded-xl text-center font-bold"
              >
                Enroll now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}