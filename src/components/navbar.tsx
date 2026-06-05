import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-lg shadow-primary/30 transition-transform group-hover:scale-110">
            AS
          </span>
          <span className="hidden sm:inline">Anshu Sharma</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-foreground bg-secondary" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <a href="https://github.com/anshu-devops" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hidden rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:inline-flex">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://linkedin.com/in/anshu-sharma-738b962b8" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hidden rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:inline-flex">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="mailto:anshu.devops@gmail.com" aria-label="Email" className="hidden rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:inline-flex">
            <Mail className="h-4 w-4" />
          </a>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className={cn("border-t border-border/60 bg-background/95 backdrop-blur md:hidden", open ? "block" : "hidden")}>
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-foreground bg-secondary" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
