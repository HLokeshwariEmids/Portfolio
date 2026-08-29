export type Experience = {
  period: string;
  role: string;
  company: string;
  location?: string;
  summary: string;
  highlights: string[];
  stack: string[];
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    period: "2026 — Present",
    role: "AI Associate Consultant",
    company: "Emids",
    current: true,
    summary:
      "Building enterprise-grade AI systems for healthcare — multi-agent workflows, RAG and GraphRAG platforms, and production LLM applications.",
    highlights: [
      "Design multi-agent AI systems for Prior Authorization, Claim Denial Management, Medicare Plan Builder, Quote-to-Card enrollment, Healthcare Ontology, and intelligent knowledge platforms.",
      "Build scalable RAG and GraphRAG platforms with Neo4j, pgvector, PostgreSQL, and OpenAI-compatible LLM Gateways — enabling semantic search, knowledge graph reasoning, and citation-based responses.",
      "Develop production full-stack applications with React, TypeScript, and FastAPI, integrating enterprise healthcare data pipelines and AI-driven automation.",
    ],
    stack: [
      "Google ADK",
      "FastAPI",
      "LiteLLM",
      "MCP",
      "GraphRAG",
      "VectorRAG",
      "Azure",
      "Neo4j",
      "pgvector",
      "React",
      "TypeScript",
    ],
  },
  {
    period: "2025 — 2026",
    role: "Associate AI Software Engineering Intern",
    company: "Emids",
    summary:
      "Designed agentic AI systems that automated healthcare workflows end-to-end, reducing manual claim processing time by approximately 60%.",
    highlights: [
      "Designed enterprise-grade agentic AI systems using Google ADK, MCP tools, meta-prompting, FastAPI, and Azure.",
      "Automated healthcare workflows including claim denial analysis, Medicare plan building, and EDI 834/837 processing using multi-agent orchestration and LLM-driven pipelines.",
      "Built full-stack web portals with React and FastAPI to streamline healthcare operations and improve workflow efficiency.",
    ],
    stack: [
      "Google ADK",
      "MCP",
      "FastAPI",
      "Azure",
      "React",
      "Meta Prompting",
      "EDI 834/837",
    ],
  },
];
