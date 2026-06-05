import { useState, useRef } from "react";
import { ChevronDown, FileText, FileType2, Download } from "lucide-react";
import { cn } from "@/lib/utils";

export function DownloadResumeButton({ variant = "primary", className }: { variant?: "primary" | "ghost"; className?: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className={cn("relative inline-block", className)}>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all",
          variant === "primary"
            ? "bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
            : "border border-border bg-surface/60 text-foreground hover:bg-secondary"
        )}
      >
        <Download className="h-4 w-4" />
        Download Resume
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 z-20 mt-2 w-56 overflow-hidden rounded-xl border border-border bg-popover shadow-2xl">
            <a
              href="/resume/Anshu_Sharma_Resume.pdf"
              download
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-secondary"
            >
              <FileText className="h-4 w-4 text-primary" />
              <div>
                <div className="font-medium">Download PDF</div>
                <div className="text-xs text-muted-foreground">Best for sharing</div>
              </div>
            </a>
            <div className="h-px bg-border" />
            <a
              href="/resume/Anshu_Sharma_Resume.docx"
              download
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-secondary"
            >
              <FileType2 className="h-4 w-4 text-accent" />
              <div>
                <div className="font-medium">Download Word</div>
                <div className="text-xs text-muted-foreground">.docx format</div>
              </div>
            </a>
          </div>
        </>
      )}
    </div>
  );
}
