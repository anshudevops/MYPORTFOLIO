import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { C as CircleCheck, c as Send, M as Mail, P as Phone, d as MapPin, L as Linkedin, G as Github } from "../_libs/lucide-react.mjs";
import { o as object, c as string } from "../_libs/zod.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const schema = object({
  name: string().trim().min(2, "Name is required").max(100),
  email: string().trim().email("Enter a valid email").max(255),
  message: string().trim().min(10, "Message must be at least 10 characters").max(1500)
});
function Contact() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = reactExports.useState({});
  const [sent, setSent] = reactExports.useState(false);
  const submit = (e) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs = {};
      for (const issue of result.error.issues) {
        errs[issue.path[0]] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Portfolio inquiry from ${result.data.name}`);
    const body = encodeURIComponent(`${result.data.message}

— ${result.data.name}
${result.data.email}`);
    window.location.href = `mailto:anshu.devops@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 py-16 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-sm font-medium uppercase tracking-widest text-primary", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl font-bold sm:text-5xl", children: [
        "Let's ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "build something" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-lg text-muted-foreground", children: "Open to senior frontend roles, freelance projects, and collaboration. Usually replies within 24 hours." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid gap-8 lg:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-5 rounded-2xl border border-border bg-card p-6 sm:p-8", noValidate: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", error: errors.name, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: form.name, onChange: (e) => setForm({
          ...form,
          name: e.target.value
        }), placeholder: "Jane Doe", className: "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", error: errors.email, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: form.email, onChange: (e) => setForm({
          ...form,
          email: e.target.value
        }), placeholder: "jane@company.com", className: "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Message", error: errors.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 6, value: form.message, onChange: (e) => setForm({
          ...form,
          message: e.target.value
        }), placeholder: "Tell me about your project, role, or idea…", className: "w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-primary to-primary-glow px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl", children: [
          sent ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" }),
          sent ? "Opening your email client…" : "Send message"
        ] }),
        sent && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-muted-foreground", children: [
          "If your mail client didn't open, email me directly at",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:anshu.devops@gmail.com", className: "text-primary underline", children: "anshu.devops@gmail.com" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: Mail, label: "Email", value: "anshu.devops@gmail.com", href: "mailto:anshu.devops@gmail.com" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: Phone, label: "Phone", value: "+91 7701873990", href: "tel:+917701873990" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: MapPin, label: "Location", value: "Noida, Uttar Pradesh, India" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: Linkedin, label: "LinkedIn", value: "anshu-sharma-738b962b8", href: "https://linkedin.com/in/anshu-sharma-738b962b8", external: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: Github, label: "GitHub", value: "anshu-devops", href: "https://github.com/anshu-devops", external: true })
      ] })
    ] })
  ] });
}
function Field({
  label,
  error,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: label }),
    children,
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-xs text-destructive", children: error })
  ] });
}
function Info({
  icon: Icon,
  label,
  value,
  href,
  external
}) {
  const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-sm font-medium", children: value })
    ] })
  ] });
  if (!href) return inner;
  return external ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, target: "_blank", rel: "noopener noreferrer", children: inner }) : /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, children: inner });
}
export {
  Contact as component
};
