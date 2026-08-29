import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import BackgroundEffects from "@/components/BackgroundEffects";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} — Case Study`,
    description: project.tagline,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <BackgroundEffects />
      <div className="relative z-10">
        <div className="container-x pt-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-fg-subtle transition-colors hover:text-fg"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to projects
          </Link>
        </div>

        <article className="container-x pt-12 pb-24 md:pt-20">
          {/* Header */}
          <header>
            <div className="flex items-center gap-3 font-mono text-xs text-fg-subtle">
              <span>{project.index}</span>
              <span className="h-px w-6 bg-border-strong" />
              <span className="uppercase tracking-widest">
                {project.domain}
              </span>
              <span className="ml-auto">{project.year}</span>
            </div>

            <h1 className="mt-8 font-display text-hero-sm font-semibold leading-[1] tracking-tight text-balance gradient-text">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-fg-muted">
              {project.tagline}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  <Github className="h-4 w-4" /> View code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  <ExternalLink className="h-4 w-4" /> Live demo
                </a>
              )}
              {!project.githubUrl && !project.liveUrl && (
                <span className="rounded-full border border-border bg-bg-soft/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-fg-subtle">
                  Enterprise · Confidential
                </span>
              )}
            </div>
          </header>

          {/* Overview grid */}
          <section className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Block label="Problem" body={project.problem} />
            <Block label="Solution" body={project.solution} />
          </section>

          {/* Architecture */}
          <section className="mt-16">
            <div className="section-label">Architecture</div>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight md:text-3xl">
              System flow
            </h2>

            <div className="mt-8 card p-6 md:p-10">
              <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center md:justify-between md:gap-2">
                {project.architecture.map((step, i) => (
                  <div
                    key={i}
                    className="flex flex-1 items-center gap-3 md:flex-col md:gap-2"
                  >
                    <div className="flex flex-1 items-center gap-3 rounded-lg border border-border bg-bg-soft/60 px-4 py-3 md:w-full md:flex-col md:items-start">
                      <span className="font-mono text-[10px] text-fg-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium text-fg">
                        {step}
                      </span>
                    </div>
                    {i < project.architecture.length - 1 && (
                      <div className="hidden text-fg-faint md:block">→</div>
                    )}
                    {i < project.architecture.length - 1 && (
                      <div className="ml-4 h-4 w-px bg-border-strong md:hidden" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Impact */}
          <section className="mt-16">
            <div className="section-label">Impact</div>
            <div className="mt-4 card p-8 md:p-10">
              <p className="max-w-2xl font-display text-2xl leading-tight tracking-tight text-fg text-balance md:text-3xl">
                {project.impact}
              </p>
            </div>
          </section>

          {/* Stack */}
          <section className="mt-16">
            <div className="section-label">Technology Stack</div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border bg-bg-soft/50 px-3 py-1.5 font-mono text-sm text-fg-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>

          {/* Other projects nav */}
          <section className="mt-24 border-t border-border pt-12">
            <div className="section-label">Explore more</div>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {projects
                .filter((p) => p.slug !== project.slug)
                .slice(0, 2)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="card card-hover glow-border group flex items-center justify-between p-6"
                  >
                    <div>
                      <div className="font-mono text-xs text-fg-faint">
                        {p.index} · {p.year}
                      </div>
                      <div className="mt-2 font-display text-lg font-semibold tracking-tight">
                        {p.title}
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-fg-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                ))}
            </div>
          </section>
        </article>

        <Footer />
      </div>
    </>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div className="card p-6 md:p-8">
      <div className="font-mono text-[10px] uppercase tracking-widest text-fg-faint">
        {label}
      </div>
      <p className="mt-4 text-base leading-relaxed text-fg-muted">{body}</p>
    </div>
  );
}
