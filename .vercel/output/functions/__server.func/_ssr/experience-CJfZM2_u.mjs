import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { B as Briefcase } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const roles = [{
  company: "Wipro",
  title: "Senior Frontend Engineer",
  period: "Dec 2024 – Present",
  location: "Noida, India",
  summary: "Banking & smart-card web apps for enterprise clients. Internal AI chatbot platform for the Noida delivery centre.",
  achievements: [{
    tag: "Frontend",
    text: "Led full frontend development of a secure smart-card banking portal in React.js & TypeScript — 30% faster page loads via lazy loading and route-level code splitting."
  }, {
    tag: "Frontend",
    text: "Architected a shared component library of 20+ reusable typed UI modules adopted across 3 product teams (~40% faster feature scaffolding)."
  }, {
    tag: "Full-stack",
    text: "Built a full-stack AI chatbot using the OpenAI API with streaming token rendering, conversation history, and system-prompt templating for banking workflows."
  }, {
    tag: "Backend",
    text: "Reduced OpenAI API spend by ~25% via prompt caching and API-key rotation middleware on the Node.js / Express.js layer."
  }, {
    tag: "Frontend",
    text: "Profiled render bottlenecks with React Profiler and resolved them via memoisation and optimised hook patterns."
  }, {
    tag: "Leadership",
    text: "Mentored 2 junior developers on TypeScript and component architecture through weekly code reviews & pair programming."
  }]
}, {
  company: "GlobalLogic",
  title: "Senior React Developer",
  period: "Mar 2021 – Dec 2024",
  location: "Noida, India",
  summary: "Enterprise analytics platforms & workflow tools for Fortune-500 clients in Gurugram and Bengaluru.",
  achievements: [{
    tag: "Frontend",
    text: "Architected a multi-tenant analytics dashboard with D3.js and Recharts — real-time KPI visualisation for 10,000+ daily active users."
  }, {
    tag: "Frontend",
    text: "Led Redux → Redux Toolkit migration across the entire codebase, eliminating ~40% of boilerplate and improving state debugging via RTK Query caching."
  }, {
    tag: "Frontend",
    text: "Designed a reusable form-builder component (React Hook Form + Zod) deployed across 8 enterprise workflow screens."
  }, {
    tag: "Performance",
    text: "Improved Lighthouse score from 62 → 89 on a client-facing portal through image optimisation, bundle splitting, and deferred third-party scripts."
  }]
}, {
  company: "Infogain",
  title: "React Developer",
  period: "May 2018 – Mar 2021",
  location: "Noida, India",
  summary: "Banking and customer-facing web applications for clients across Delhi NCR (110001) — foundational React.js and REST API integration experience.",
  achievements: [{
    tag: "Frontend",
    text: "Built customer account management screens and a transaction dashboard in React.js, integrating 10+ REST API endpoints via Axios with centralised error-handling middleware."
  }, {
    tag: "Frontend",
    text: "Developed a real-time chat-based support interface for live banking alerts — implemented HTTP polling, WebSocket fallback, and notification state management."
  }, {
    tag: "Frontend",
    text: "Delivered WCAG 2.1 AA-compliant UI components across 4 banking products, ensuring accessibility compliance for a diverse customer base."
  }, {
    tag: "Performance",
    text: "Achieved 75% unit and integration test coverage on critical user flows using Jest and React Testing Library, reducing production regression incidents significantly."
  }]
}];
const tagColors = {
  Frontend: "bg-primary/15 text-primary border-primary/30",
  Backend: "bg-accent/15 text-accent border-accent/30",
  "Full-stack": "bg-purple-500/15 text-purple-500 border-purple-500/30 dark:text-purple-300",
  Performance: "bg-green-500/15 text-green-600 border-green-500/30 dark:text-green-400",
  Leadership: "bg-orange-500/15 text-orange-600 border-orange-500/30 dark:text-orange-400"
};
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 py-16 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-sm font-medium uppercase tracking-widest text-primary", children: "Experience" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl font-bold sm:text-5xl", children: [
        "8+ years of ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "shipping production React" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-lg text-muted-foreground", children: "Frontend leadership across banking, analytics, and AI-powered platforms." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent sm:left-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12", children: roles.map((role, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: -20
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.1
      }, className: "relative pl-12 sm:pl-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full border-2 border-primary bg-background sm:left-2 sm:h-9 sm:w-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-4 w-4 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-xl hover:shadow-primary/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold", children: role.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-base", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: role.company }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                  " · ",
                  role.location
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground", children: role.period })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm italic text-muted-foreground", children: role.summary }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3", children: role.achievements.map((a, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-sm leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `mt-0.5 inline-block shrink-0 rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${tagColors[a.tag]}`, children: a.tag }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90", children: a.text })
          ] }, idx)) })
        ] })
      ] }, role.company)) })
    ] })
  ] });
}
export {
  Experience as component
};
