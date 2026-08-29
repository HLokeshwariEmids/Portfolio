"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/credentials";

export default function Education() {
  const primary = education.find((e) => e.primary)!;
  const secondary = education.filter((e) => !e.primary);

  return (
    <section className="relative py-16 md:py-24">
      <div className="container-x">
        <div className="section-label">§ 07 — Education</div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Primary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card glow-border relative overflow-hidden p-8 lg:col-span-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(99,102,241,0.08),transparent_50%)]" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg">
                  <GraduationCap className="h-4 w-4 text-fg-muted" />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-fg-faint">
                  {primary.period}
                </div>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                {primary.degree}
              </h3>
              <div className="mt-2 text-fg-muted">{primary.institution}</div>
              <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-border-strong bg-bg-soft/60 px-4 py-1.5">
                <span className="font-mono text-xs uppercase tracking-widest text-fg-subtle">
                  Score
                </span>
                <span className="text-sm font-medium text-fg">
                  {primary.score}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Secondary */}
          <div className="grid grid-cols-1 gap-3 lg:col-span-4">
            {secondary.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="card p-5"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-fg-faint">
                  {e.period}
                </div>
                <div className="mt-2 text-sm font-medium text-fg">
                  {e.degree}
                </div>
                <div className="mt-1 text-xs text-fg-subtle">
                  {e.institution}
                </div>
                <div className="mt-3 font-mono text-xs text-fg-muted">
                  {e.score}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
