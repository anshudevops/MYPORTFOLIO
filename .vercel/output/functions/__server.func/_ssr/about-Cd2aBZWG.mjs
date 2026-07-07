import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { M as Mail, P as Phone, d as MapPin, L as Linkedin, G as Github } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const skills = {
  Frontend: ["React.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Material UI"],
  State: ["Redux Toolkit", "Zustand", "React Query", "RTK Query", "Context API"],
  Backend: ["Node.js", "Express.js", "REST APIs", "WebSocket", "OpenAPI / Swagger"],
  "AI / Data": ["OpenAI API", "Streaming tokens", "Prompt engineering", "D3.js", "Recharts"],
  Testing: ["Jest", "React Testing Library", "75%+ coverage"],
  Tools: ["Git", "GitHub", "Postman", "Jira", "VS Code", "Agile / Scrum"]
};
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 py-16 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.4
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-sm font-medium uppercase tracking-widest text-primary", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl font-bold sm:text-5xl", children: [
        "A performance-minded engineer who ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "cares about the details" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid gap-12 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed text-muted-foreground", children: [
          "I'm a Senior Frontend Engineer with 8+ years building scalable, high-performance enterprise web applications in React, TypeScript, and Node.js. I've shipped products at ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "Wipro" }),
          " and ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "GlobalLogic" }),
          " serving everything from secure banking portals to multi-tenant analytics dashboards with 10,000+ daily active users."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed text-muted-foreground", children: [
          "My work centers on three things: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "performance engineering" }),
          " (Lighthouse, profilers, bundle audits), ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "design-system architecture" }),
          " (typed reusable components that scale across teams), and ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "AI-powered UX" }),
          " (streaming LLM interfaces with thoughtful state management)."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-muted-foreground", children: "I mentor junior engineers, drive code-review culture, and own the boring-but-critical work — accessibility, testing, observability. Outside delivery, I'm always exploring how AI can make developer tools better." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:anshu.devops@gmail.com", className: "flex items-center gap-3 transition-colors hover:text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-primary" }),
            "anshu.devops@gmail.com"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+917701873990", className: "flex items-center gap-3 transition-colors hover:text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-primary" }),
            "+91 7701873990"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-primary" }),
            "Noida, Uttar Pradesh, India"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://linkedin.com/in/anshu-sharma-738b962b8", target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-3 transition-colors hover:text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4 text-primary" }),
            "LinkedIn Profile"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://github.com/anshu-devops", target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-3 transition-colors hover:text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4 text-primary" }),
            "GitHub"
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-8 font-display text-3xl font-bold", children: "Technical Skills" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: Object.entries(skills).map(([cat, items], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.05
      }, className: "rounded-2xl border border-border bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 font-display text-sm font-bold uppercase tracking-wider text-primary", children: cat }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: items.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md border border-border bg-surface/60 px-2 py-1 text-xs", children: s }, s)) })
      ] }, cat)) })
    ] })
  ] });
}
export {
  About as component
};
