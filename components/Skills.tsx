"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";

const layout: Record<string, string> = {
  ai: "md:col-span-4 md:row-span-2",
  backend: "md:col-span-2",
  frontend: "md:col-span-2",
  cloud: "md:col-span-2",
  databases: "md:col-span-2",
  programming: "md:col-span-2",
};

const accent: Record<string, string> = {
  ai: "from-accent-indigo/20 via-accent-violet/10 to-transparent",
  backend: "from-accent-cyan/15 to-transparent",
  frontend: "from-accent-blue/15 to-transparent",
  cloud: "from-accent-indigo/15 to-transparent",
  databases: "from-accent-violet/15 to-transparent",
  programming: "from-accent-cyan/15 to-transparent",
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-36">
      <div className="container-x">
        <div className="section-label">§ 04 — Technical Skills</div>
        <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl font-display text-display font-semibold leading-[1.05] tracking-tight text-balance gradient-text">
            The stack behind the systems.
          </h2>
          <p className="max-w-sm text-sm text-fg-muted">
            Chosen for production reliability — not novelty. Grouped by role in
            a modern AI system.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[minmax(200px,auto)]">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group card card-hover glow-border relative overflow-hidden p-6 md:p-7 ${layout[group.category]}`}
            >
              <div
                className={`absolute inset-0 -z-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${accent[group.category]}`}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-fg-faint">
                  <span>0{i + 1}</span>
                  <span className="h-px w-6 bg-fg-faint" />
                  <span>{group.label}</span>
                </div>

                <div
                  className={`mt-6 flex flex-wrap ${
                    group.category === "ai" ? "gap-2" : "gap-1.5"
                  }`}
                >
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-md border border-border bg-bg-soft/60 backdrop-blur-sm transition-all hover:border-border-strong hover:bg-bg-elevated hover:text-fg ${
                        group.category === "ai"
                          ? "px-3 py-1.5 text-sm text-fg-muted"
                          : "px-2 py-1 font-mono text-xs text-fg-muted"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {group.category === "ai" && (
                  <p className="mt-6 max-w-xs text-xs text-fg-subtle">
                    Building agentic AI, retrieval, and knowledge graph systems
                    in production.
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
