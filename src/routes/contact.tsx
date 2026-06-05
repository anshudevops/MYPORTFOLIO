import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, MapPin, Phone, Linkedin, Github, CheckCircle2 } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Anshu Sharma" },
      { name: "description", content: "Get in touch with Anshu Sharma — senior frontend engineering opportunities, freelance, and collaboration." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1500),
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: typeof errors = {};
      for (const issue of result.error.issues) {
        errs[issue.path[0] as keyof typeof form] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Portfolio inquiry from ${result.data.name}`);
    const body = encodeURIComponent(`${result.data.message}\n\n— ${result.data.name}\n${result.data.email}`);
    window.location.href = `mailto:anshu.devops@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Contact</p>
        <h1 className="font-display text-4xl font-bold sm:text-5xl">
          Let's <span className="text-gradient">build something</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Open to senior frontend roles, freelance projects, and collaboration. Usually replies within 24 hours.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <form onSubmit={submit} className="space-y-5 rounded-2xl border border-border bg-card p-6 sm:p-8" noValidate>
            <Field label="Name" error={errors.name}>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Jane Doe"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="jane@company.com"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </Field>
            <Field label="Message" error={errors.message}>
              <textarea
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project, role, or idea…"
                className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </Field>

            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-primary to-primary-glow px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              {sent ? <CheckCircle2 className="h-4 w-4" /> : <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
              {sent ? "Opening your email client…" : "Send message"}
            </button>

            {sent && (
              <p className="text-center text-xs text-muted-foreground">
                If your mail client didn't open, email me directly at{" "}
                <a href="mailto:anshu.devops@gmail.com" className="text-primary underline">anshu.devops@gmail.com</a>
              </p>
            )}
          </form>
        </div>

        <div className="space-y-3 lg:col-span-2">
          <Info icon={Mail} label="Email" value="anshu.devops@gmail.com" href="mailto:anshu.devops@gmail.com" />
          <Info icon={Phone} label="Phone" value="+91 7701873990" href="tel:+917701873990" />
          <Info icon={MapPin} label="Location" value="Noida, Uttar Pradesh, India" />
          <Info icon={Linkedin} label="LinkedIn" value="anshu-sharma-738b962b8" href="https://linkedin.com/in/anshu-sharma-738b962b8" external />
          <Info icon={Github} label="GitHub" value="anshu-devops" href="https://github.com/anshu-devops" external />
        </div>
      </div>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function Info({ icon: Icon, label, value, href, external }: { icon: typeof Mail; label: string; value: string; href?: string; external?: boolean }) {
  const inner = (
    <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="truncate text-sm font-medium">{value}</div>
      </div>
    </div>
  );
  if (!href) return inner;
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a>
  ) : (
    <a href={href}>{inner}</a>
  );
}
