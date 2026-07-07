import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { s as streamText, c as convertToModelMessages } from "../_libs/ai.mjs";
import { c as createOpenAICompatible } from "../_libs/ai-sdk__openai-compatible.mjs";
import { G as Github, L as Linkedin, M as Mail, S as Sun, a as Moon, X, b as Menu } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-j1luZfUk.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const ThemeContext = reactExports.createContext(null);
function ThemeProvider({ children }) {
  const [theme, setTheme] = reactExports.useState("dark");
  reactExports.useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem("theme");
    const prefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
  }, []);
  reactExports.useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeContext.Provider, { value: { theme, setTheme, toggle: () => setTheme(theme === "dark" ? "light" : "dark") }, children });
}
function useTheme() {
  const ctx = reactExports.useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "group flex items-center gap-2 font-display text-lg font-bold tracking-tight", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-lg shadow-primary/30 transition-transform group-hover:scale-110", children: "AS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Anshu Sharma" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-1 md:flex", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: n.to,
          activeOptions: { exact: n.to === "/" },
          activeProps: { className: "text-foreground bg-secondary" },
          inactiveProps: { className: "text-muted-foreground hover:text-foreground" },
          className: "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary",
          children: n.label
        },
        n.to
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/anshu-devops", target: "_blank", rel: "noopener noreferrer", "aria-label": "GitHub", className: "hidden rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://linkedin.com/in/anshu-sharma-738b962b8", target: "_blank", rel: "noopener noreferrer", "aria-label": "LinkedIn", className: "hidden rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:anshu.devops@gmail.com", "aria-label": "Email", className: "hidden rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: toggle,
            "aria-label": "Toggle theme",
            className: "rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
            children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setOpen(!open),
            "aria-label": "Menu",
            className: "rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground md:hidden",
            children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("border-t border-border/60 bg-background/95 backdrop-blur md:hidden", open ? "block" : "hidden"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: n.to,
        activeOptions: { exact: n.to === "/" },
        activeProps: { className: "text-foreground bg-secondary" },
        inactiveProps: { className: "text-muted-foreground" },
        onClick: () => setOpen(false),
        className: "rounded-md px-3 py-2 text-sm font-medium",
        children: n.label
      },
      n.to
    )) }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border/60 bg-surface/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Anshu Sharma · Built with React, TypeScript & AI."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/anshu-devops", target: "_blank", rel: "noopener noreferrer", "aria-label": "GitHub", className: "rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://linkedin.com/in/anshu-sharma-738b962b8", target: "_blank", rel: "noopener noreferrer", "aria-label": "LinkedIn", className: "rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:anshu.devops@gmail.com", "aria-label": "Email", className: "rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }) })
    ] })
  ] }) });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$6 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Anshu Sharma — Senior Frontend Engineer | React, TypeScript, Node" },
      { name: "description", content: "Portfolio of Anshu Sharma — Senior Frontend Engineer with 8+ years in React, TypeScript, and 2+ years in Node.js & Express." },
      { name: "author", content: "Anshu Sharma" },
      { property: "og:title", content: "Anshu Sharma — Senior Frontend Engineer" },
      { property: "og:description", content: "8+ yrs React/TS · 2+ yrs Node/Express · Building scalable, performant web apps." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@500&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$6.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) }) });
}
const $$splitComponentImporter$4 = () => import("./projects-DqFa9bJh.mjs");
const Route$5 = createFileRoute("/projects")({
  head: () => ({
    meta: [{
      title: "Projects — Anshu Sharma"
    }, {
      name: "description",
      content: "Selected work: banking portal, AI chatbot, analytics dashboard, form-builder, performance refactors."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./experience-CJfZM2_u.mjs");
const Route$4 = createFileRoute("/experience")({
  head: () => ({
    meta: [{
      title: "Experience — Anshu Sharma"
    }, {
      name: "description",
      content: "Career timeline: Wipro, GlobalLogic — frontend leadership, performance engineering, AI chatbot work."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-C7wIh6q3.mjs");
const Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Anshu Sharma"
    }, {
      name: "description",
      content: "Get in touch with Anshu Sharma — senior frontend engineering opportunities, freelance, and collaboration."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-Cd2aBZWG.mjs");
const Route$2 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Anshu Sharma"
    }, {
      name: "description",
      content: "About Anshu Sharma — Senior Frontend Engineer based in Noida, India."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-BvHWPgnB.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Anshu Sharma — Senior Frontend Engineer | React, TypeScript, Node"
    }, {
      name: "description",
      content: "8+ yrs React/TypeScript & 2+ yrs Node/Express. Building scalable, performant web apps."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
function createLovableAiGatewayProvider(lovableApiKey) {
  return createOpenAICompatible({
    name: "lovable",
    baseURL: "https://ai.gateway.lovable.dev/v1",
    headers: {
      "Lovable-API-Key": lovableApiKey,
      "X-Lovable-AIG-SDK": "vercel-ai-sdk"
    }
  });
}
const SYSTEM = `You are Anshu Sharma's friendly portfolio assistant. Answer questions about Anshu based on this resume. Keep answers concise (2-4 sentences), warm, and conversational. If asked something not in the resume, say so politely and suggest contacting Anshu directly. 

ABOUT ANSHU SHARMA: 
- Senior React Developer & Frontend Engineer based in Noida, Uttar Pradesh, India 
- 8+ years of experience building enterprise web apps across banking, fintech, analytics, and AI platforms 
- Contact: anshu.devops@gmail.com | +91-7701873990 
- LinkedIn: https://linkedin.com/in/anshu-sharma-738b962b8
- GitHub: https://github.com/anshu-devops

PROFESSIONAL EXPERIENCE:
1. Wipro Limited | Senior Frontend Engineer (Dec 2024 – Present)
   - Leads frontend development for a secure enterprise banking platform using React, TypeScript, and Material UI.
   - Slashed initial page load time by nearly 30% via route-level code splitting, lazy loading, and bundle optimization.
   - Built an AI-powered enterprise knowledge assistant utilizing React, Node.js, Express.js, and OpenAI APIs with streaming responses and conversation history.
   - Cut OpenAI API costs by ~25% through prompt caching, optimized request batching, and backend orchestration.
   - Designed a reusable library of 25+ strongly typed React components, accelerating feature delivery and reducing duplicate UI effort by nearly 40%.
   - Mentors junior engineers via code reviews, pair programming, and technical architecture discussions.

2. GlobalLogic | Senior React Developer (Mar 2021 – Dec 2024)
   - Architected a multi-tenant enterprise analytics dashboard serving 10,000+ daily active users with real-time KPI dashboards.
   - Handled datasets over 50,000 records using virtualization and memoization, keeping interaction latency under 100ms.
   - Led migration from legacy Redux to Redux Toolkit & RTK Query, cutting boilerplate by nearly 40%.
   - Designed a dynamic form framework using React Hook Form and TypeScript used across 8 enterprise workflows.
   - Boosted Lighthouse Performance score from 62 to 89 via asset caching, image optimization, and deferred loading.

3. Infogain | Software Engineer (May 2018 – Mar 2021)
   - Developed customer onboarding, account management, and payment workflows for enterprise banking applications.
   - Integrated 10+ REST APIs with reusable service layers and built real-time support interfaces using WebSockets.
   - Achieved WCAG 2.1 AA accessibility compliance and raised automated testing coverage to ~75% using Jest and React Testing Library.

TECH STACK: 
- Languages: JavaScript (ES6+), TypeScript, HTML5, CSS3
- Frontend: React.js, React Hooks, React Router, Redux Toolkit, RTK Query, React Query, Context API, Zustand, Material UI, Tailwind CSS, Bootstrap
- Architecture & Perf: Reusable Component Libraries, Code Splitting, Lazy Loading, Virtualization, Memoization, React Profiler
- Backend & Tools: Node.js, Express.js, REST APIs, WebSockets, OpenAPI/Swagger, Git, GitHub, Postman, Webpack, Jira, Agile/Scrum
- AI Development: OpenAI APIs, Prompt Engineering, LLM Integration, AI Chatbots, Prompt Caching

EDUCATION:
- Bachelor of Technology in Computer Science and Engineering (2014 – 2018) from Dr. A.P.J. Abdul Kalam Technical University, Lucknow

AVAILABILITY: Open to senior frontend roles permanent and freelance/contract engagements.`;
const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = await request.json();
        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });
        const gateway = createLovableAiGatewayProvider(key);
        const result = streamText({
          model: gateway("google/gemini-3-flash-preview"),
          system: SYSTEM,
          messages: await convertToModelMessages(messages)
        });
        return result.toUIMessageStreamResponse({ originalMessages: messages });
      }
    }
  }
});
const ProjectsRoute = Route$5.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$6
});
const ExperienceRoute = Route$4.update({
  id: "/experience",
  path: "/experience",
  getParentRoute: () => Route$6
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$6
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$6
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const ApiChatRoute = Route.update({
  id: "/api/chat",
  path: "/api/chat",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  ExperienceRoute,
  ProjectsRoute,
  ApiChatRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  cn as c,
  router as r
};
