import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue via-accent-sky to-accent-cyan text-[10px] font-bold text-white">
                L
              </span>
              <span className="text-sm font-medium text-fg">{site.name}</span>
            </div>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-fg-subtle">
              AI Engineer & Full-Stack Engineer building production-grade
              agentic systems.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm md:col-span-2 md:grid-cols-4">
            <FooterCol
              label="Site"
              links={[
                { name: "About", href: "#about" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
              ]}
            />
            <FooterCol
              label="Connect"
              links={[
                { name: "Email", href: `mailto:${site.email}` },
                { name: "LinkedIn", href: site.linkedin, external: true },
              ]}
            />
            <FooterCol
              label="Resources"
              links={[{ name: "Resume", href: site.resumeUrl, download: true }]}
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <div className="font-mono text-[11px] uppercase tracking-widest text-fg-faint">
            © {new Date().getFullYear()} {site.name} — All rights reserved
          </div>
          <div className="font-mono text-[11px] uppercase tracking-widest text-fg-faint">
            {/* Built with Next.js & Tailwind */}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  label,
  links,
}: {
  label: string;
  links: { name: string; href: string; external?: boolean; download?: boolean }[];
}) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-fg-faint">
        {label}
      </div>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.name}>
            <a
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noreferrer" : undefined}
              download={l.download}
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {l.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
