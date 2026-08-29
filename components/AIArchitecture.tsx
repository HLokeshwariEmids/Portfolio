"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Layer = {
  id: string;
  title: string;
  short: string;
  tools: string[];
  description: string;
};

const layers: Layer[] = [
  {
    id: "data",
    title: "Data",
    short: "Ingestion",
    tools: ["PDFs", "Transcripts", "EDI 834/837", "Enterprise APIs"],
    description:
      "Enterprise healthcare documents, transcripts, EDI files, and structured payer data flow into the system.",
  },
  {
    id: "retrieval",
    title: "Retrieval",
    short: "Vector + Hybrid",
    tools: ["pgvector", "FAISS", "Hybrid Search", "Multi-model Embeddings"],
    description:
      "Chunking, multi-model embeddings, and hybrid vector + full-text search over the corpus.",
  },
  {
    id: "knowledge",
    title: "Knowledge",
    short: "Graphs & Ontology",
    tools: ["Neo4j", "GraphRAG", "Ontology Extraction", "Citations"],
    description:
      "Structured knowledge graphs and ontologies extracted from unstructured content — reasoning + retrieval.",
  },
  {
    id: "agents",
    title: "Agents",
    short: "Multi-agent Orchestration",
    tools: ["Google ADK", "MCP", "Meta Prompting", "Tool Use"],
    description:
      "Multi-agent workflows that plan, retrieve, validate, and act — coordinated through ADK and MCP tools.",
  },
  {
    id: "llm",
    title: "LLM Layer",
    short: "Gateway & Models",
    tools: ["LiteLLM", "OpenAI-compatible Gateway", "LangChain"],
    description:
      "Model-agnostic gateway routing and prompt orchestration — swap models without touching agents.",
  },
  {
    id: "application",
    title: "Application",
    short: "Full-Stack",
    tools: ["FastAPI", "React", "TypeScript", "Streamlit"],
    description:
      "Production full-stack applications and portals that expose the AI system to end users.",
  },
  {
    id: "cloud",
    title: "Cloud",
    short: "Deployment",
    tools: ["Azure", "AWS", "Docker", "PostgreSQL"],
    description:
      "Cloud-native deployment on Azure and AWS with containerized services and managed databases.",
  },
];

export default function AIArchitecture() {
  const [active, setActive] = useState<string>("agents");
  const activeLayer = layers.find((l) => l.id === active)!;

  return (
    <section className="relative py-24 md:py-36">
      <div className="container-x">
        <div className="section-label">§ 05 — System Architecture</div>
        <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl font-display text-display font-semibold leading-[1.05] tracking-tight text-balance gradient-text">
            How I build AI systems.
          </h2>
          <p className="max-w-sm text-sm text-fg-muted">
            Not a single prompt call — a layered architecture. Click any layer
            to see what I use there.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
          {/* Stack visualization */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-border bg-bg-soft/40 p-6 md:p-8">
              <div className="mb-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-fg-faint">
                <span>architecture.stack</span>
                <span>{layers.length} layers</span>
              </div>

              <div className="space-y-2">
                {layers.map((layer, i) => {
                  const isActive = layer.id === active;
                  return (
                    <motion.button
                      key={layer.id}
                      onClick={() => setActive(layer.id)}
                      onMouseEnter={() => setActive(layer.id)}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className={`group relative w-full overflow-hidden rounded-lg border p-4 text-left transition-all duration-300 ${
                        isActive
                          ? "border-accent-indigo/40 bg-gradient-to-r from-accent-indigo/10 via-accent-violet/5 to-transparent"
                          : "border-border bg-bg/40 hover:border-border-strong hover:bg-bg-soft/60"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`font-mono text-xs transition-colors ${
                            isActive ? "text-accent-indigo" : "text-fg-faint"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="flex-1">
                          <div
                            className={`font-display text-lg font-semibold tracking-tight transition-colors ${
                              isActive ? "text-fg" : "text-fg-muted"
                            }`}
                          >
                            {layer.title}
                          </div>
                          <div className="mt-0.5 text-xs text-fg-subtle">
                            {layer.short}
                          </div>
                        </div>
                        <div
                          className={`h-1.5 w-1.5 rounded-full transition-all ${
                            isActive
                              ? "bg-accent-indigo shadow-[0_0_10px_rgba(99,102,241,0.6)]"
                              : "bg-fg-faint"
                          }`}
                        />
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-5">
            <motion.div
              key={activeLayer.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="sticky top-24 rounded-2xl border border-border bg-bg-soft/40 p-6 md:p-8"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-fg-faint">
                Layer detail
              </div>
              <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight">
                {activeLayer.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                {activeLayer.description}
              </p>

              <div className="mt-8">
                <div className="font-mono text-[10px] uppercase tracking-widest text-fg-faint">
                  Tools & Technologies
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeLayer.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border-strong bg-bg px-2.5 py-1 font-mono text-xs text-fg"
                    >
                      → {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
