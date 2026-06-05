import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Anshu Sharma" },
      { name: "description", content: "About Anshu Sharma — Senior Frontend Engineer based in Noida, India." },
    ],
  }),
  component: About,
});

const skills = {
  Frontend: ["React.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Material UI"],
  State: ["Redux Toolkit", "Zustand", "React Query", "RTK Query", "Context API"],
  Backend: ["Node.js", "Express.js", "REST APIs", "WebSocket", "OpenAPI / Swagger"],
  "AI / Data": ["OpenAI API", "Streaming tokens", "Prompt engineering", "D3.js", "Recharts"],
  Testing: ["Jest", "React Testing Library", "75%+ coverage"],
  Tools: ["Git", "GitHub", "Postman", "Jira", "VS Code", "Agile / Scrum"],
};

function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">About</p>
        <h1 className="font-display text-4xl font-bold sm:text-5xl">
          A performance-minded engineer who <span className="text-gradient">cares about the details</span>
        </h1>
      </motion.div>

      <div className="mt-12 grid gap-12 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm a Senior Frontend Engineer with 8+ years building scalable, high-performance enterprise web applications in React, TypeScript, and Node.js. I've shipped products at <span className="font-medium text-foreground">Wipro</span> and <span className="font-medium text-foreground">GlobalLogic</span> serving everything from secure banking portals to multi-tenant analytics dashboards with 10,000+ daily active users.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            My work centers on three things: <span className="font-medium text-foreground">performance engineering</span> (Lighthouse, profilers, bundle audits), <span className="font-medium text-foreground">design-system architecture</span> (typed reusable components that scale across teams), and <span className="font-medium text-foreground">AI-powered UX</span> (streaming LLM interfaces with thoughtful state management).
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I mentor junior engineers, drive code-review culture, and own the boring-but-critical work — accessibility, testing, observability. Outside delivery, I'm always exploring how AI can make developer tools better.
          </p>
        </div>

        <div className="space-y-3">
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">Contact</h3>
            <div className="space-y-3 text-sm">
              <a href="mailto:anshu.devops@gmail.com" className="flex items-center gap-3 transition-colors hover:text-primary">
                <Mail className="h-4 w-4 text-primary" />
                anshu.devops@gmail.com
              </a>
              <a href="tel:+917701873990" className="flex items-center gap-3 transition-colors hover:text-primary">
                <Phone className="h-4 w-4 text-primary" />
                +91 7701873990
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                Noida, Uttar Pradesh, India
              </div>
              <a href="https://linkedin.com/in/anshu-sharma-738b962b8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-primary">
                <Linkedin className="h-4 w-4 text-primary" />
                LinkedIn Profile
              </a>
              <a href="https://github.com/anshu-devops" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-primary">
                <Github className="h-4 w-4 text-primary" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="mb-8 font-display text-3xl font-bold">Technical Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([cat, items], i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <h3 className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-primary">{cat}</h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map((s) => (
                  <span key={s} className="rounded-md border border-border bg-surface/60 px-2 py-1 text-xs">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
