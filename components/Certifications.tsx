"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/data/credentials";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-36">
      <div className="container-x">
        <div className="section-label">§ 06 — Certifications</div>
        <h2 className="mt-8 max-w-2xl font-display text-display font-semibold leading-[1.05] tracking-tight text-balance gradient-text">
          Certified across the stack.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card card-hover glow-border group flex items-start gap-4 p-5"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-bg text-fg-muted transition-colors group-hover:border-border-strong group-hover:text-fg">
                <Award className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium leading-snug text-fg">
                  {c.name}
                </div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-fg-subtle">
                  {c.issuer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
