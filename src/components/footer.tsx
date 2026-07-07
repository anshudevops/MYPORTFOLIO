import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Anshu Sharma · Built with React, TypeScript & AI.
        </p>
        <div className="flex items-center gap-2">
          <a href="https://github.com/anshu-devops" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://linkedin.com/in/anshu-sharma-738b962b8" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="mailto:anshu.devops@gmail.com" aria-label="Email" className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
