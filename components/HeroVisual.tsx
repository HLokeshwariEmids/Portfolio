"use client";

import { motion } from "framer-motion";

/**
 * Abstract AI system architecture:
 * User → Agent → Tools / RAG → LLM → Production
 * Rendered as a subtle animated node graph.
 */

const nodes = [
  { id: "user", label: "USER", cx: 60, cy: 200, r: 5 },
  { id: "agent", label: "AGENT", cx: 180, cy: 130, r: 8, primary: true },
  { id: "tools", label: "TOOLS", cx: 180, cy: 270, r: 6 },
  { id: "rag", label: "RAG", cx: 300, cy: 90, r: 7 },
  { id: "knowledge", label: "KNOWLEDGE", cx: 300, cy: 200, r: 7 },
  { id: "graph", label: "GRAPH", cx: 300, cy: 310, r: 6 },
  { id: "llm", label: "LLM", cx: 420, cy: 200, r: 10, primary: true },
  { id: "output", label: "PRODUCTION", cx: 540, cy: 200, r: 5 },
];

const edges: [string, string][] = [
  ["user", "agent"],
  ["user", "tools"],
  ["agent", "rag"],
  ["agent", "knowledge"],
  ["agent", "graph"],
  ["tools", "knowledge"],
  ["tools", "graph"],
  ["rag", "llm"],
  ["knowledge", "llm"],
  ["graph", "llm"],
  ["llm", "output"],
];

function findNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export default function HeroVisual() {
  return (
    <div className="relative aspect-[6/5] w-full">
      {/* Ambient glow behind the graph */}
      <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.10),transparent_65%)]" />

      <svg
        viewBox="0 0 600 400"
        className="relative h-full w-full"
        role="img"
        aria-label="Animated diagram of an AI system architecture: user, agent, tools, retrieval, knowledge, graph, LLM, production output"
      >
        <defs>
          <linearGradient id="edgeGrad" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0" />
            <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="staticEdge" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.35" />
          </linearGradient>
          <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.15" />
          </radialGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Static faint edges */}
        {edges.map(([a, b], i) => {
          const na = findNode(a);
          const nb = findNode(b);
          return (
            <motion.line
              key={`s-${i}`}
              x1={na.cx}
              y1={na.cy}
              x2={nb.cx}
              y2={nb.cy}
              stroke="url(#staticEdge)"
              strokeWidth={1}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.05 * i, ease: "easeOut" }}
            />
          );
        })}

        {/* Animated pulse along a subset of edges */}
        {edges.map(([a, b], i) => {
          const na = findNode(a);
          const nb = findNode(b);
          const dx = nb.cx - na.cx;
          const dy = nb.cy - na.cy;
          const len = Math.sqrt(dx * dx + dy * dy);
          return (
            <motion.circle
              key={`p-${i}`}
              r={1.8}
              fill="#2563eb"
              filter="url(#glow)"
              initial={{ cx: na.cx, cy: na.cy, opacity: 0 }}
              animate={{
                cx: [na.cx, nb.cx],
                cy: [na.cy, nb.cy],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + (len % 800) / 400,
                delay: 0.4 * i,
                repeat: Infinity,
                repeatDelay: 3 + (i % 4),
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((n, i) => (
          <motion.g
            key={n.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {n.primary && (
              <motion.circle
                cx={n.cx}
                cy={n.cy}
                r={n.r + 8}
                fill="none"
                stroke="#2563eb"
                strokeOpacity={0.35}
                strokeWidth={1}
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
              />
            )}
            <circle
              cx={n.cx}
              cy={n.cy}
              r={n.r + 4}
              fill="url(#nodeGrad)"
              opacity={0.35}
            />
            <circle
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              fill="#ffffff"
              stroke="#2563eb"
              strokeOpacity={n.primary ? 0.85 : 0.55}
              strokeWidth={1.2}
            />
            <circle cx={n.cx} cy={n.cy} r={n.r / 2.5} fill="#2563eb" />
            <text
              x={n.cx}
              y={n.cy + n.r + 16}
              textAnchor="middle"
              className="fill-fg-subtle font-mono"
              fontSize="9"
              letterSpacing="0.1em"
            >
              {n.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
