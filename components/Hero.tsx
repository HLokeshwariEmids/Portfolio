"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Linkedin, Mail } from "lucide-react";
import HeroVisual from "./HeroVisual";
import { site } from "@/data/site";

const words = ["AI ENGINEER", "FULL-STACK ENGINEER"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] pt-32 md:pt-40"
    >
      <div className="container-x">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Left: Copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-bg-soft/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-fg-muted backdrop-blur"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Available for opportunities
            </motion.div>

            <h1 className="mt-8 font-display text-hero font-semibold leading-[0.95] tracking-tight text-balance">
              {words.map((w, i) => (
                <motion.span
                  key={w}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.05 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="block gradient-text"
                >
                  {w}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-fg-muted md:text-xl"
            >
              I design and build production-grade AI systems, agentic workflows,
              RAG platforms, and full-stack applications that automate complex
              healthcare and enterprise processes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a href="#projects" className="btn-primary group">
                View my work
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href={site.resumeUrl}
                download
                className="btn-secondary group"
              >
                Download Resume
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-14 flex flex-wrap items-center gap-6 text-sm text-fg-subtle"
            >
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 hover:text-fg"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
                <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-2 hover:text-fg"
              >
                <Mail className="h-4 w-4" />
                {site.email}
                <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </motion.div>
          </div>

          {/* Right: AI network visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl border border-border" />
              <div className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-faint">
                ai-system
              </div>
              <div className="absolute right-3 top-3 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-indigo/60" />
                <span className="h-1.5 w-1.5 rounded-full bg-accent-violet/60" />
                <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan/60" />
              </div>
              <HeroVisual />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.25em] text-fg-faint"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block"
        >
          scroll ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
