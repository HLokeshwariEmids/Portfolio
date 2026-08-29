"use client";

import { motion } from "framer-motion";

const items = [
  {
    metric: "9.85",
    unit: "/ 10",
    label: "B.Tech CGPA",
    sub: "Computer Science & Engineering · KL University",
  },
  {
    metric: "60%",
    unit: "",
    label: "Workflow time reduced",
    sub: "Claim processing automation",
  },
  {
    metric: "6+",
    unit: "",
    label: "Production AI systems",
    sub: "Healthcare · Enterprise",
  },
  {
    metric: "2026",
    unit: "",
    label: "AI Associate Consultant",
    sub: "Emids",
  },
];

const tags = [
  "Agentic AI",
  "RAG / GraphRAG",
  "Healthcare AI",
  "Multi-agent Systems",
  "LLM Applications",
  "Full-Stack Engineering",
];

export default function CredentialStrip() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-bg p-6 transition-colors hover:bg-bg-soft md:p-8"
            >
              <div className="flex items-baseline gap-1">
                <span className="font-display text-4xl font-semibold tracking-tight text-fg md:text-5xl">
                  {item.metric}
                </span>
                <span className="font-mono text-xs text-fg-subtle">
                  {item.unit}
                </span>
              </div>
              <div className="mt-3 text-sm font-medium text-fg">{item.label}</div>
              <div className="mt-1 text-xs text-fg-subtle">{item.sub}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-bg-soft/40 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-fg-muted"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
