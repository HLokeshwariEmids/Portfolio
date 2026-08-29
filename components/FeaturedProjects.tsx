"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 md:py-36">
      <div className="container-x">
        <div className="section-label">§ 03 — Selected Work</div>
        <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl font-display text-display font-semibold leading-[1.05] tracking-tight text-balance gradient-text">
            Case studies in production AI.
          </h2>
          <p className="max-w-sm text-sm text-fg-muted">
            Real systems shipped in industry — agentic workflows, RAG platforms,
            and full-stack AI applications for healthcare.
          </p>
        </div>

        {/* Flagship cases */}
        <div className="mt-16 space-y-6">
          {featured.map((p, i) => (
            <FeaturedCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        {/* Secondary cases */}
        <div className="mt-16">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-faint">
            More projects
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {rest.map((p, i) => (
              <SecondaryCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group card glow-border block overflow-hidden p-8 transition-all duration-500 hover:border-border-strong md:p-12"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left column - meta + copy */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-fg-faint">
                {project.index}
              </span>
              <span className="h-px w-8 bg-border-strong" />
              <span className="font-mono text-xs uppercase tracking-widest text-fg-subtle">
                {project.domain}
              </span>
              <span className="ml-auto font-mono text-xs text-fg-faint">
                {project.year}
              </span>
            </div>

            <h3 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              {project.title}
            </h3>
            <p className="mt-3 text-lg text-fg-muted">{project.tagline}</p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-fg-faint">
                  Problem
                </div>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {project.problem}
                </p>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-fg-faint">
                  Solution
                </div>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {project.solution}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="font-mono text-[10px] uppercase tracking-widest text-fg-faint">
                Impact
              </div>
              <p className="mt-2 text-sm text-fg">{project.impact}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border bg-bg-soft/40 px-2 py-1 font-mono text-[11px] text-fg-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Right column - architecture diagram */}
          <div className="lg:col-span-5">
            <ArchitectureFlow steps={project.architecture} />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

function SecondaryCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group card card-hover glow-border block h-full p-6"
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-fg-faint">
            {project.index}
          </span>
          <span className="font-mono text-xs text-fg-faint">{project.year}</span>
        </div>

        <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">
          {project.tagline}
        </p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((s) => (
            <span
              key={s}
              className="rounded-md border border-border bg-bg-soft/40 px-2 py-0.5 font-mono text-[10px] text-fg-muted"
            >
              {s}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="rounded-md border border-border bg-bg-soft/40 px-2 py-0.5 font-mono text-[10px] text-fg-muted">
              +{project.stack.length - 4}
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );
}

function ArchitectureFlow({ steps }: { steps: string[] }) {
  return (
    <div className="relative flex h-full min-h-[280px] flex-col items-stretch justify-center gap-3 rounded-xl border border-border bg-bg/40 p-6">
      <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-fg-faint">
        <span>architecture</span>
        <div className="flex items-center gap-1">
          <span className="h-1 w-1 rounded-full bg-accent-indigo/70" />
          <span className="h-1 w-1 rounded-full bg-accent-violet/70" />
          <span className="h-1 w-1 rounded-full bg-accent-cyan/70" />
        </div>
      </div>
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
          className="relative"
        >
          <div className="flex items-center gap-3 rounded-lg border border-border bg-bg-soft/50 px-3 py-2.5">
            <span className="font-mono text-[10px] text-fg-faint">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm text-fg">{step}</span>
            <span className="ml-auto h-1 w-1 rounded-full bg-accent-indigo/40" />
          </div>
          {i < steps.length - 1 && (
            <div className="ml-6 h-3 w-px bg-gradient-to-b from-border-strong to-transparent" />
          )}
        </motion.div>
      ))}
    </div>
  );
}
