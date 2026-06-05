import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Zap, Sparkles, Server } from "lucide-react";
import { DownloadResumeButton } from "@/components/download-resume-button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anshu Sharma — Senior Frontend Engineer | React, TypeScript, Node" },
      { name: "description", content: "8+ yrs React/TypeScript & 2+ yrs Node/Express. Building scalable, performant web apps." },
    ],
  }),
  component: Home,
});

const highlights = [
  { icon: Code2, label: "8+ yrs", sub: "React · TS · JS" },
  { icon: Server, label: "2+ yrs", sub: "Node · Express" },
  { icon: Zap, label: "Lighthouse", sub: "62 → 89" },
  { icon: Sparkles, label: "10K+ DAU", sub: "Dashboards" },
];

function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

      <section className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for new roles & freelance
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Senior Frontend Engineer<br />
            <span className="text-gradient">crafting scalable React apps</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I'm <span className="font-medium text-foreground">Anshu Sharma</span> — 8+ years building production React &amp; TypeScript interfaces, plus 2+ years on Node &amp; Express APIs. I ship fast UIs, design systems, and AI-powered experiences.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-primary to-primary-glow px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40"
            >
              View Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <DownloadResumeButton variant="ghost" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {highlights.map((h) => (
            <div key={h.label} className="rounded-2xl border border-border bg-card/60 p-4 text-center backdrop-blur transition-colors hover:border-primary/40">
              <h.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
              <div className="font-display text-lg font-bold">{h.label}</div>
              <div className="text-xs text-muted-foreground">{h.sub}</div>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="relative border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Frontend Excellence", body: "React, TypeScript, Redux Toolkit, React Query, Zustand. Built shared component libraries adopted by 3+ teams." },
              { title: "Performance Obsession", body: "30% faster page loads. Lighthouse 62 → 89. Profiler-driven optimization with memoization and code splitting." },
              { title: "AI-Powered Interfaces", body: "Built streaming OpenAI chatbot for banking workflows. Reduced API spend 25% via caching & key rotation." },
            ].map((c) => (
              <div key={c.title} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                <h3 className="mb-2 font-display text-lg font-semibold">{c.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
