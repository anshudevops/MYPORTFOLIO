import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Anshu Sharma" },
      { name: "description", content: "Selected work: banking portal, AI chatbot, analytics dashboard, form-builder, performance refactors." },
    ],
  }),
  component: Projects,
});

type Cat = "All" | "Frontend" | "Full-Stack";

const projects = [
  {
    title: "Secure Smart-Card Banking Portal",
    category: "Frontend" as const,
    description: "React + TypeScript banking portal for a US based client. Reduced load times 30% via lazy loading and route-level code splitting.",
    stack: ["React", "TypeScript", "Redux Toolkit", "React Query"],
    accent: "from-primary to-primary-glow",
  },
  {
    title: "AI Banking Chatbot Platform",
    category: "Full-Stack" as const,
    description: "Streaming OpenAI chatbot UI with conversation history and system-prompt templating. Node/Express backend with prompt caching cut API spend 25%.",
    stack: ["React", "TypeScript", "Node.js", "Express", "OpenAI API"],
    accent: "from-accent to-amber-400",
  },
  {
    title: "Multi-Tenant Analytics Dashboard",
    category: "Frontend" as const,
    description: "D3.js + Recharts real-time KPI dashboard serving 10,000+ daily active users with drill-down charts and per-tenant theming.",
    stack: ["React", "D3.js", "Recharts", "Zustand"],
    accent: "from-purple-500 to-pink-500",
  },
  {
    title: "Shared Component Library",
    category: "Frontend" as const,
    description: "20+ fully-typed reusable UI modules adopted across 3 product teams. Cut new-feature scaffolding time by ~40%.",
    stack: ["React", "TypeScript", "Storybook", "Tailwind"],
    accent: "from-green-500 to-emerald-400",
  },
  {
    title: "Form Builder Component",
    category: "Frontend" as const,
    description: "Reusable form-builder (React Hook Form + Zod) deployed across 8 enterprise workflow screens, eliminating duplicated validation logic.",
    stack: ["React", "TypeScript", "React Hook Form", "Zod"],
    accent: "from-cyan-500 to-blue-500",
  },
  {
    title: "Lighthouse Performance Overhaul",
    category: "Full-Stack" as const,
    description: "Took a client-facing portal from Lighthouse 62 → 89 via image optimisation, bundle splitting, and deferred third-party scripts.",
    stack: ["React", "Webpack", "Node.js"],
    accent: "from-orange-500 to-red-500",
  },
];

const filters: Cat[] = ["All", "Frontend", "Full-Stack"];

function Projects() {
  const [filter, setFilter] = useState<Cat>("All");
  const filtered = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Projects</p>
        <h1 className="font-display text-4xl font-bold sm:text-5xl">
          Selected <span className="text-gradient">work & impact</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          A snapshot of recent production work. Most are under enterprise NDA — happy to share details on a call.
        </p>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-all",
              filter === f
                ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/30"
                : "border-border bg-surface/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
            )}
          >
            {f}
            <span className="ml-2 text-xs opacity-60">
              {f === "All" ? projects.length : projects.filter((p) => p.category === f).length}
            </span>
          </button>
        ))}
      </div>

      <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className={cn("h-32 bg-gradient-to-br", p.accent, "relative")}>
                <div className="absolute inset-0 bg-grid opacity-20" />
                <span className="absolute right-3 top-3 rounded-full bg-black/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
                  {p.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-display text-lg font-semibold leading-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-md bg-secondary px-2 py-0.5 text-[11px] font-medium text-secondary-foreground">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <a
                    href="https://github.com/anshu-devops"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View source"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Source
                  </a>
                  <a
                    href="https://linkedin.com/in/anshu-sharma-738b962b8"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live demo"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Case study
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
