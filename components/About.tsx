"use client";

import { motion } from "framer-motion";

const focuses = [
  {
    title: "Agentic AI Systems",
    body: "Multi-agent architectures on Google ADK and MCP that plan, retrieve, validate, and act — not single-shot prompts.",
  },
  {
    title: "Retrieval & Knowledge",
    body: "Hybrid RAG and GraphRAG platforms with pgvector, Neo4j, and citation-grounded answers over enterprise corpora.",
  },
  {
    title: "Production Full-Stack",
    body: "FastAPI backends, React/TypeScript frontends, and cloud-native pipelines on Azure that ship — not demos.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-36">
      <div className="container-x">
        <div className="section-label">§ 01 — About</div>

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <h2 className="font-display text-display font-semibold leading-[1.05] tracking-tight text-balance gradient-text">
              Engineering intelligent systems,
              <br />
              <span className="accent-text">not just AI demos.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 lg:col-span-5"
          >
            <p className="text-lg leading-relaxed text-fg-muted">
              I&apos;m an AI Engineer working in production healthcare AI at
              Emids. My work sits at the intersection of{" "}
              <span className="text-fg">multi-agent AI systems</span>,{" "}
              <span className="text-fg">retrieval architectures</span>, and{" "}
              <span className="text-fg">full-stack engineering</span> — building
              things that actually go into production, not proofs of concept.
            </p>
            <p className="text-base leading-relaxed text-fg-subtle">
              I&apos;ve built prior authorization automation, healthcare
              knowledge platforms, GraphRAG ontology systems, and end-to-end
              enrollment agents — all with the same engineering discipline you&apos;d
              apply to any production backend.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-3">
          {focuses.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card card-hover glow-border p-6 md:p-8"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-faint">
                Focus / 0{i + 1}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
