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

  // 🔥 ACTIVE HELPERS
  const isActive = (href: string) => pathname === href;
  const isCourseActive = (slug: string) =>
    pathname === `/courses/${slug}`;

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
    { name: "Arena Multimedia Specialist Program", slug: "amsp" },
    { name: "Arena Skill Builders & Smart Professional", slug: "arenasmartpro" },
    { name: "Arena Realtime 3D & Game Art", slug: "realtime3d" },
    { name: "Arena VFX For Animation & Films", slug: "vfx" },
    { name: "Aptech Certified Network Specialist", slug: "acns" },
    { name: "Skill Builders & Smart Professional", slug: "smartstack" },
    { name: "Certified Ethical Hacking", slug: "ethical-hacking" },
    { name: "JAPA Courses", slug: "japa" }
  ];

  const navLinks: { name: string; href: string }[] = [
    { name: "Blogs", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
    { name: "About us", href: "/about" },
    { name: "Contact us", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isSolid
          ? "bg-[#0b1220]/80 backdrop-blur-md border-b border-red-500/10 shadow-[0_0_25px_rgba(239,68,68,0.08)] py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="group">
          <Image src="/logo.png" alt="Logo" width={120} height={40} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">

          {/* Home */}
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-all",
              isActive("/")
                ? "text-red-400 border-b border-red-500/60 shadow-[0_2px_10px_rgba(239,68,68,0.25)]"
                : "text-white hover:text-red-400"
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
                pathname.startsWith("/courses")
                  ? "text-red-400"
                  : "text-white hover:text-red-400"
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
                  className="
                    absolute top-full left-0 mt-4 w-[320px]
                    bg-[#0b1220]/95 backdrop-blur-md
                    rounded-2xl
                    shadow-[0_0_30px_rgba(239,68,68,0.10)]
                    border border-red-500/10 p-4
                  "
                >
                  <div className="flex flex-col gap-2">
                    {courses.map((course, i) => (
                      <Link
                        key={i}
                        href={`/courses/${course.slug}`}
                        className={cn(
                          "text-sm px-3 py-2 rounded-lg transition-all",
                          isCourseActive(course.slug)
                            ? "text-red-300 bg-red-500/10 border border-red-500/30 shadow-[0_0_12px_rgba(239,68,68,0.15)]"
                            : "text-white/80 hover:text-red-300 hover:bg-red-500/5"
                        )}
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
                "text-sm font-medium transition-all",
                isActive(link.href)
                  ? "text-red-400 border-b border-red-500/60 shadow-[0_2px_10px_rgba(239,68,68,0.25)]"
                  : "text-white hover:text-red-400"
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
            className="
              inline-flex items-center gap-2
              bg-red-600 hover:bg-red-500
              text-white px-6 py-2.5 rounded-full text-sm font-bold
              shadow-[0_0_20px_rgba(239,68,68,0.25)]
              border border-red-500/30
              hover:shadow-[0_0_30px_rgba(239,68,68,0.35)]
              transition-all hover:scale-105
            "
          >
            Enroll now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-white"
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
            className="
              md:hidden mt-4 rounded-2xl p-6
              bg-[#0b1220]/95 backdrop-blur-md
              border border-red-500/10
              shadow-[0_0_25px_rgba(239,68,68,0.08)]
            "
          >
            <div className="flex flex-col gap-4">

              <div>
                <p className="font-bold text-red-300 mb-2">Courses</p>
                <div className="flex flex-col gap-2">
                  {courses.map((course, i) => (
                    <Link
                      key={i}
                      href={`/courses/${course.slug}`}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-sm transition-all",
                        isCourseActive(course.slug)
                          ? "text-red-300"
                          : "text-white/70 hover:text-red-300"
                      )}
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
                  className={cn(
                    "text-lg font-semibold transition-all",
                    isActive(link.href)
                      ? "text-red-400"
                      : "text-white hover:text-red-400"
                  )}
                >
                  {link.name}
                </Link>
              ))}

              <a
                href="https://wa.me/2347070491555"
                className="
                  bg-red-600 hover:bg-red-500
                  text-white py-3 rounded-xl text-center font-bold
                  shadow-[0_0_20px_rgba(239,68,68,0.25)]
                "
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