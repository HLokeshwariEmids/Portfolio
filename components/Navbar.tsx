"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.href.replace("#", ""));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed left-1/2 top-4 z-50 -translate-x-1/2 transition-all duration-500",
          scrolled ? "top-3" : "top-5"
        )}
      >
        <nav
          className={cn(
            "relative flex items-center gap-1 rounded-full border border-border-strong/80 bg-white/80 px-2 py-1.5 backdrop-blur-xl transition-all duration-500",
            scrolled
              ? "shadow-[0_8px_30px_-10px_rgba(37,99,235,0.35)]"
              : "shadow-[0_2px_12px_-6px_rgba(37,99,235,0.15)]"
          )}
        >
          <a
            href="#home"
            className="ml-2 mr-3 flex items-center gap-2 text-sm font-medium"
            aria-label="Home"
          >
            <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue via-accent-sky to-accent-cyan">
              <span className="text-[10px] font-bold text-white">L</span>
            </span>
            <span className="hidden text-fg sm:inline">Lokeshwari</span>
          </a>

          <ul className="hidden items-center gap-0.5 md:flex">
            {links.map((l) => {
              const id = l.href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={cn(
                      "relative rounded-full px-3 py-1.5 text-[13px] transition-colors",
                      isActive
                        ? "text-fg"
                        : "text-fg-muted hover:text-fg"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="absolute inset-0 -z-10 rounded-full bg-accent-blue/[0.10]"
                      />
                    )}
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href={site.resumeUrl}
            download
            className="ml-1 hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-blue to-accent-sky px-3.5 py-1.5 text-[13px] font-medium text-white shadow-[0_6px_18px_-8px_rgba(37,99,235,0.6)] transition-all hover:brightness-105 md:inline-flex"
          >
            Resume
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full text-fg hover:bg-accent-blue/[0.08] md:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="flex items-center gap-2 text-sm font-medium">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue via-accent-sky to-accent-cyan text-[10px] font-bold text-white">
                  L
                </span>
                Lokeshwari
              </span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-accent-blue/[0.08]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <ul className="flex flex-col gap-1 px-6 pt-6">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border py-4 text-2xl font-medium text-fg"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 px-6">
              <a
                href={site.resumeUrl}
                download
                className="btn-primary w-full"
                onClick={() => setOpen(false)}
              >
                Download Resume
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
