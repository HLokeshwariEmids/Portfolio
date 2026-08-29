export type SkillGroup = {
  category: string;
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "ai",
    label: "AI & LLM Systems",
    items: [
      "Google ADK",
      "LangChain",
      "LiteLLM",
      "RAG",
      "GraphRAG",
      "FAISS",
      "MCP Server",
      "Prompt Engineering",
    ],
  },
  {
    category: "backend",
    label: "Backend",
    items: ["FastAPI", "Spring Boot", "Django", "Node.js", "Flask"],
  },
  {
    category: "frontend",
    label: "Frontend",
    items: ["React.js", "Tailwind CSS", "JSP"],
  },
  {
    category: "cloud",
    label: "Cloud & DevOps",
    items: ["Azure", "AWS", "Docker"],
  },
  {
    category: "databases",
    label: "Databases",
    items: ["MongoDB", "PostgreSQL", "SQLite", "MySQL"],
  },
  {
    category: "programming",
    label: "Programming",
    items: ["Python", "Java", "JavaScript", "C"],
  },
];
