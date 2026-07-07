import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-BR9za3tD.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { G as Github, E as ExternalLink } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/ai.mjs";
import "../_libs/ai-sdk__gateway.mjs";
import "../_libs/ai-sdk__provider-utils.mjs";
import "../_libs/ai-sdk__provider.mjs";
import "../_libs/eventsource-parser.mjs";
import "../_libs/zod.mjs";
import "../_libs/@vercel/oidc.mjs";
import "path";
import "fs";
import "os";
import "../_libs/opentelemetry__api.mjs";
import "../_libs/ai-sdk__openai-compatible.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const projects = [{
  title: "Secure Smart-Card Banking Portal",
  category: "Frontend",
  description: "React + TypeScript banking portal for a US-based client. Reduced load times 30% via lazy loading and route-level code splitting.",
  stack: ["React", "TypeScript", "Redux Toolkit", "React Query"],
  accent: "from-primary to-primary-glow"
}, {
  title: "AI Banking Chatbot Platform",
  category: "Full-Stack",
  description: "Streaming OpenAI chatbot UI with conversation history and system-prompt templating. Node/Express backend with prompt caching cut API spend 25%.",
  stack: ["React", "TypeScript", "Node.js", "Express", "OpenAI API"],
  accent: "from-accent to-amber-400"
}, {
  title: "Multi-Tenant Analytics Dashboard",
  category: "Frontend",
  description: "D3.js + Recharts real-time KPI dashboard serving 10,000+ daily active users with drill-down charts and per-tenant theming.",
  stack: ["React", "D3.js", "Recharts", "Zustand"],
  accent: "from-purple-500 to-pink-500"
}, {
  title: "Shared Component Library",
  category: "Frontend",
  description: "20+ fully-typed reusable UI modules adopted across 3 product teams. Cut new-feature scaffolding time by ~40%.",
  stack: ["React", "TypeScript", "Storybook", "Tailwind"],
  accent: "from-green-500 to-emerald-400"
}, {
  title: "Form Builder Component",
  category: "Frontend",
  description: "Reusable form-builder (React Hook Form + Zod) deployed across 8 enterprise workflow screens, eliminating duplicated validation logic.",
  stack: ["React", "TypeScript", "React Hook Form", "Zod"],
  accent: "from-cyan-500 to-blue-500"
}, {
  title: "Lighthouse Performance Overhaul",
  category: "Full-Stack",
  description: "Took a client-facing portal from Lighthouse 62 → 89 via image optimisation, bundle splitting, and deferred third-party scripts.",
  stack: ["React", "Webpack", "Node.js"],
  accent: "from-orange-500 to-red-500"
}];
const filters = ["All", "Frontend", "Full-Stack"];
function Projects() {
  const [filter, setFilter] = reactExports.useState("All");
  const filtered = projects.filter((p) => filter === "All" || p.category === filter);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 py-16 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-sm font-medium uppercase tracking-widest text-primary", children: "Projects" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl font-bold sm:text-5xl", children: [
        "Selected ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "work & impact" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-lg text-muted-foreground", children: "A snapshot of recent production work. Most are under enterprise NDA — happy to share details on a call." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex flex-wrap gap-2", children: filters.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setFilter(f), className: cn("rounded-full border px-4 py-1.5 text-sm font-medium transition-all", filter === f ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/30" : "border-border bg-surface/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"), children: [
      f,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-xs opacity-60", children: f === "All" ? projects.length : projects.filter((p) => p.category === f).length })
    ] }, f)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layout: true, className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: filtered.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { layout: true, initial: {
      opacity: 0,
      scale: 0.95
    }, animate: {
      opacity: 1,
      scale: 1
    }, exit: {
      opacity: 0,
      scale: 0.95
    }, transition: {
      duration: 0.2
    }, className: "group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("h-32 bg-gradient-to-br", p.accent, "relative"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-3 top-3 rounded-full bg-black/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur", children: p.category })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold leading-tight", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: p.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-1.5", children: p.stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-secondary px-2 py-0.5 text-[11px] font-medium text-secondary-foreground", children: s }, s)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-3 border-t border-border pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://github.com/anshu-devops", target: "_blank", rel: "noopener noreferrer", "aria-label": "View source", className: "inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-3.5 w-3.5" }),
            "Source"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://linkedin.com/in/anshu-sharma-738b962b8", target: "_blank", rel: "noopener noreferrer", "aria-label": "Live demo", className: "inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3.5 w-3.5" }),
            "Case study"
          ] })
        ] })
      ] })
    ] }, p.title)) }) })
  ] });
}
export {
  Projects as component
};
