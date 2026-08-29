export type Project = {
  slug: string;
  index: string;
  title: string;
  year: string;
  tagline: string;
  problem: string;
  solution: string;
  architecture: string[];
  impact: string;
  stack: string[];
  featured: boolean;
  // Placeholders for you to fill in later
  githubUrl?: string;
  liveUrl?: string;
  domain: "Agentic AI" | "RAG / Knowledge" | "Full-Stack AI" | "Automation";
};

export const projects: Project[] = [
  {
    slug: "prior-authorization-automation",
    index: "01",
    title: "Prior Authorization Automation",
    year: "2026",
    tagline:
      "Automating complex insurance approval workflows with agentic AI.",
    problem:
      "Healthcare prior authorization requires manual review of patient documents, validation against payer requirements, and formatted medical documentation — a process that takes hours per case.",
    solution:
      "A multi-agent AI workflow that analyzes patient documents, validates payer requirements, and generates formatted medical documentation automatically.",
    architecture: [
      "Documents",
      "Agents",
      "Validation",
      "LLM",
      "Structured Output",
    ],
    impact:
      "Reduced manual work from hours to minutes across authorization cases.",
    stack: ["Python", "Google ADK", "LiteLLM", "FastAPI", "React", "TypeScript"],
    featured: true,
    domain: "Agentic AI",
  },
  {
    slug: "healthcare-workflow-ontology",
    index: "02",
    title: "Healthcare Workflow Ontology",
    year: "2026",
    tagline:
      "Extracting structured clinical knowledge from unstructured healthcare documents.",
    problem:
      "Clinical workflow knowledge is trapped in PDFs, transcripts, and long-form documents — making it hard to query, reason over, or reuse.",
    solution:
      "A multi-agent AI pipeline that extracts structured knowledge graphs from PDFs, transcripts, and text, stores them in Neo4j and pgvector, and enables hybrid GraphRAG + VectorRAG search over clinical workflows.",
    architecture: [
      "Documents",
      "Multi-Agent Extraction",
      "Knowledge Graph",
      "GraphRAG + VectorRAG",
      "Clinical Query",
    ],
    impact:
      "Enables clinical workflow queries with both graph reasoning and vector similarity in a single retrieval layer.",
    stack: ["Python", "Neo4j", "pgvector", "PostgreSQL", "Google ADK", "FastAPI"],
    featured: true,
    domain: "RAG / Knowledge",
  },
  {
    slug: "healthcare-knowledge-platform",
    index: "03",
    title: "Healthcare Knowledge Platform",
    year: "2026",
    tagline:
      "A Retrieval-Augmented Generation document store with citations.",
    problem:
      "Enterprise healthcare teams need a single searchable knowledge layer over their document corpus — with multimodal content, and answers grounded in cited sources.",
    solution:
      "A RAG document store with document ingestion, chunking, multi-model embeddings, hybrid vector/full-text search, multimodal PDF image retrieval, and citation-backed AI answers.",
    architecture: [
      "Ingestion",
      "Chunking",
      "Multi-Model Embeddings",
      "Hybrid Search",
      "Cited Answers",
    ],
    impact:
      "A production-ready RAG stack with hybrid retrieval, multimodal support, and grounded citations end-to-end.",
    stack: [
      "FastAPI",
      "Streamlit",
      "Azure PostgreSQL",
      "pgvector",
      "LLM Gateway",
    ],
    featured: true,
    domain: "RAG / Knowledge",
  },
  {
    slug: "quote-to-card",
    index: "04",
    title: "Quote To Card",
    year: "2026",
    tagline: "End-to-end AI insurance enrollment — quote to member ID card.",
    problem:
      "Member enrollment spans quote generation, onboarding, document extraction, EDI 834 filing, and ID card creation — historically a multi-day process across teams.",
    solution:
      "An end-to-end AI enrollment system covering quote generation, member onboarding via document extraction, EDI 834 filing, and automated ID card creation.",
    architecture: [
      "Quote",
      "Document Extraction",
      "Enrollment Agent",
      "EDI 834",
      "ID Card",
    ],
    impact: "Compressed a multi-day enrollment process to minutes.",
    stack: ["Python", "Google ADK", "LiteLLM", "FastAPI", "React", "TypeScript"],
    featured: false,
    domain: "Full-Stack AI",
  },
  {
    slug: "claim-denial",
    index: "05",
    title: "ClaimDenial",
    year: "2025",
    tagline: "Agentic claim management — denial analysis to appeal generation.",
    problem:
      "Denied claims require manual analysis, appeal drafting, and status tracking — a heavy operational load on claims teams.",
    solution:
      "An agentic system for denial analysis, appeal generation, and real-time claim tracking.",
    architecture: [
      "Claim Intake",
      "Denial Analysis Agent",
      "Appeal Generation",
      "Tracking",
    ],
    impact: "Reduced manual load by approximately 60%.",
    stack: ["Google ADK", "FastAPI", "React", "MongoDB"],
    featured: false,
    domain: "Agentic AI",
  },
  {
    slug: "product-plan-benefit-builder",
    index: "06",
    title: "Product Plan Benefit Builder",
    year: "2025",
    tagline: "Automated Medicare plan design and enrollment.",
    problem:
      "Medicare plan design, benefits configuration, and member enrollment involve heavy manual coordination across systems.",
    solution:
      "Multi-agent AI workflows that automate Medicare plan design, benefits configuration, and member enrollment.",
    architecture: [
      "Plan Design Agent",
      "Benefits Config",
      "Enrollment",
      "Automation",
    ],
    impact: "Automated a coordination-heavy workflow into a single AI pipeline.",
    stack: ["Google ADK", "FastAPI", "LiteLLM", "Azure"],
    featured: false,
    domain: "Automation",
  },
];
