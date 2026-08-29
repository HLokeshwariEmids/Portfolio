import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hlokeshwariemids.github.io/Portfolio"),
  title: {
    default: "Lokeshwari Hukumathirao — AI Engineer & Full-Stack Engineer",
    template: "%s · Lokeshwari Hukumathirao",
  },
  description:
    "AI Engineer building production-grade agentic AI systems, LLM applications, RAG and GraphRAG platforms, and cloud-native full-stack applications for healthcare and enterprise.",
  keywords: [
    "AI Engineer",
    "Agentic AI",
    "LLM",
    "RAG",
    "GraphRAG",
    "Healthcare AI",
    "Full-Stack Engineer",
    "Multi-agent Systems",
    "Google ADK",
    "FastAPI",
    "React",
    "Next.js",
    "Neo4j",
    "Azure",
  ],
  authors: [{ name: "Lokeshwari Hukumathirao" }],
  creator: "Lokeshwari Hukumathirao",
  openGraph: {
    title: "Lokeshwari Hukumathirao — AI Engineer & Full-Stack Engineer",
    description:
      "Building production-grade AI systems, agentic workflows, and RAG platforms for real-world problems.",
    url: "https://hlokeshwariemids.github.io/Portfolio",
    siteName: "Lokeshwari Hukumathirao",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokeshwari Hukumathirao — AI Engineer",
    description:
      "AI Engineer building production-grade agentic systems and RAG platforms.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f9ff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="bg-bg text-fg">{children}</body>
    </html>
  );
}
