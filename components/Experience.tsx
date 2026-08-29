"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-36">
      <div className="container-x">
        <div className="section-label">§ 02 — Experience</div>
        <h2 className="mt-8 max-w-2xl font-display text-display font-semibold leading-[1.05] tracking-tight text-balance gradient-text">
          Building production AI in industry.
        </h2>

        <div className="relative mt-20">
          {/* Vertical rail */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-border-strong to-transparent md:left-[calc(20%_-_1px)]" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-10"
              >
                {/* Node */}
                <div className="absolute left-[9px] top-1.5 h-3 w-3 md:left-[calc(20%_-_6px)]">
                  <div className="relative h-3 w-3">
                    {exp.current && (
                      <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
                    )}
                    <div
                      className={`relative h-3 w-3 rounded-full border-2 ${
                        exp.current
                          ? "border-emerald-400 bg-emerald-400"
                          : "border-fg-subtle bg-bg"
                      }`}
                    />
                  </div>
                </div>

                {/* Period */}
                <div className="pl-10 md:col-span-1 md:pl-0 md:text-right md:pr-4">
                  <div className="font-mono text-xs text-fg-subtle">
                    {exp.period}
                  </div>
                  {exp.current && (
                    <span className="mt-2 inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-emerald-300">
                      Current
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="pl-10 md:col-span-4 md:pl-8">
                  <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                    {exp.role}
                  </h3>
                  <div className="mt-1 text-fg-muted">
                    <span className="text-fg">{exp.company}</span>
                  </div>

                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-fg-muted">
                    {exp.summary}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {exp.highlights.map((h, hi) => (
                      <li
                        key={hi}
                        className="flex gap-3 text-sm leading-relaxed text-fg-subtle"
                      >
                        <span className="mt-2 h-px w-3 flex-shrink-0 bg-fg-faint" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {exp.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-bg-soft/50 px-2 py-1 font-mono text-[11px] text-fg-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
