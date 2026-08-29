"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-36">
      <div className="container-x">
        <div className="section-label">§ 08 — Contact</div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: pitch */}
          <div className="lg:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-hero-sm font-semibold leading-[1] tracking-tight text-balance"
            >
              <span className="gradient-text">Let&apos;s build something</span>
              <br />
              <span className="accent-text">intelligent.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 max-w-md text-lg leading-relaxed text-fg-muted"
            >
              If you&apos;re working on AI, automation, or software systems,
              I&apos;d love to connect.
            </motion.p>
          </div>

          {/* Right: contact links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3 lg:col-span-6"
          >
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center justify-between rounded-xl border border-border bg-bg-soft/40 p-5 transition-all hover:border-border-strong hover:bg-bg-soft/80"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg">
                  <Mail className="h-4 w-4 text-fg-muted" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-fg-faint">
                    Email
                  </div>
                  <div className="mt-0.5 text-sm text-fg">{site.email}</div>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-fg-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
            </a>

            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-xl border border-border bg-bg-soft/40 p-5 transition-all hover:border-border-strong hover:bg-bg-soft/80"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg">
                  <Linkedin className="h-4 w-4 text-fg-muted" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-fg-faint">
                    LinkedIn
                  </div>
                  <div className="mt-0.5 text-sm text-fg">
                    lokeshwari-hukumathirao
                  </div>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-fg-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
            </a>

            <a
              href={`tel:${site.phone.replace(/\s+/g, "")}`}
              className="group flex items-center justify-between rounded-xl border border-border bg-bg-soft/40 p-5 transition-all hover:border-border-strong hover:bg-bg-soft/80"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg font-mono text-xs text-fg-muted">
                  ☎
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-fg-faint">
                    Phone
                  </div>
                  <div className="mt-0.5 text-sm text-fg">{site.phone}</div>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-fg-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
