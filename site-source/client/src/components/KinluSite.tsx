import { Link } from "wouter";
import { ArrowRight, ChevronDown, Check, Sparkles } from "lucide-react";
import { useState } from "react";

export const ORANGE = "#f26a21";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5 group" aria-label="KINLU home">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#f26a21] text-white shadow-[0_8px_20px_rgba(242,106,33,0.22)] transition-transform duration-200 group-hover:-rotate-3">
        <span className="font-serif text-xl font-black leading-none">K</span>
      </span>
      {!compact && <span className="font-sans text-[1.05rem] font-bold tracking-[0.2em] text-[#171717]">KINLU</span>}
    </Link>
  );
}

const solutions = [
  { href: "/solutions/customer-churn", label: "Customer Churn", detail: "Act before customers leave" },
  { href: "/solutions/customer-lifetime-value", label: "Customer Lifetime Value", detail: "Prioritize valuable relationships" },
  { href: "/solutions/customer-segmentation", label: "Customer Segmentation", detail: "Make every group more relevant" },
];

const comingSoon = [
  { label: "Conversion Prediction", detail: "Coming soon" },
  { label: "Revenue Forecasting", detail: "Coming soon" },
];

const products = [
  { href: "/product", label: "Platform overview", detail: "One predictive intelligence system" },
  { href: "/product/chat", label: "KINLU CHAT", detail: "Build custom ML models" },
  { href: "/product/predict", label: "KINLU PREDICT", detail: "Deploy and run models" },
  { href: "/product/how-it-works", label: "How it works", detail: "From data to decision" },
  { href: "/product/integrations", label: "Data integrations", detail: "Connect the data you already have" },
  { href: "/product/enterprise-readiness", label: "Enterprise readiness", detail: "Control, evidence, repeatability" },
];

function MenuLink({ href, label, detail }: { href: string; label: string; detail?: string }) {
  return (
    <Link href={href} className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-[#fff5ed]">
      <span className="block text-sm font-semibold text-[#171717]">{label}</span>
      {detail && <span className="mt-0.5 block text-xs leading-5 text-[#77736e]">{detail}</span>}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[#e9e4df]/80 bg-[#fffdf9]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          <Link href="/" className="nav-link">Platform</Link>
          <div className="relative" onMouseEnter={() => setOpen("product")} onMouseLeave={() => setOpen(null)}>
            <button className="nav-link inline-flex items-center gap-1.5" onClick={() => setOpen(open === "product" ? null : "product")}>
              Product <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open === "product" ? "rotate-180" : ""}`} />
            </button>
            {open === "product" && (
              <div className="absolute left-1/2 top-full w-[315px] -translate-x-1/2 pt-3">
                <div className="rounded-2xl border border-[#e6ded7] bg-white p-2.5 shadow-[0_24px_60px_rgba(39,26,16,0.13)]">
                  {products.map((item) => <MenuLink key={item.href} {...item} />)}
                </div>
              </div>
            )}
          </div>
          <div className="relative" onMouseEnter={() => setOpen("solutions")} onMouseLeave={() => setOpen(null)}>
            <button className="nav-link inline-flex items-center gap-1.5" onClick={() => setOpen(open === "solutions" ? null : "solutions")}>
              Solutions <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open === "solutions" ? "rotate-180" : ""}`} />
            </button>
            {open === "solutions" && (
              <div className="absolute left-1/2 top-full w-[330px] -translate-x-1/2 pt-3">
                <div className="rounded-2xl border border-[#e6ded7] bg-white p-2.5 shadow-[0_24px_60px_rgba(39,26,16,0.13)]">
                  {solutions.map((item) => <MenuLink key={item.href} {...item} />)}
                  <div className="my-2 border-t border-[#eee7e0]" />
                  <p className="px-3 pb-1 pt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#a49b93]">On the roadmap</p>
                  {comingSoon.map((item) => (
                    <div key={item.label} className="flex items-center justify-between rounded-xl px-3 py-2.5 opacity-60">
                      <span className="text-sm font-semibold text-[#171717]">{item.label}</span>
                      <span className="rounded-full bg-[#f4eee8] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#8b7d71]">Soon</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/outcomes" className="nav-link">Outcomes</Link>
          <Link href="/product/integrations" className="nav-link">Data</Link>
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <Link href="/login" className="text-sm font-semibold text-[#77736e] transition-colors hover:text-[#171717]">Sign in</Link>
          <Link href="/book-demo" className="button-orange">Book a demo <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <button className="grid h-10 w-10 place-items-center rounded-lg border border-[#e9e4df] lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 top-0 h-px w-5 bg-[#171717] transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-2 h-px w-5 bg-[#171717] transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-4 h-px w-5 bg-[#171717] transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      {mobileOpen && (
        <div className="border-t border-[#eee7e0] bg-[#fffdf9] px-5 py-5 lg:hidden">
          <div className="mx-auto grid max-w-[1240px] gap-1">
            <Link href="/" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Platform</Link>
            <p className="mobile-label">Product</p>
            {products.slice(1).map((item) => <MenuLink key={item.href} {...item} />)}
            <p className="mobile-label mt-3">Solutions</p>
            {solutions.map((item) => <MenuLink key={item.href} {...item} />)}
            <Link href="/book-demo" className="button-orange mt-4 justify-center" onClick={() => setMobileOpen(false)}>Book a demo <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function ButtonLink({ href, children, variant = "orange", className = "" }: { href: string; children: React.ReactNode; variant?: "orange" | "outline" | "text"; className?: string }) {
  const styles = variant === "orange" ? "button-orange" : variant === "outline" ? "button-outline" : "button-text";
  return <Link href={href} className={`${styles} ${className}`}>{children}</Link>;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow"><span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#f26a21] align-middle" />{children}</p>;
}

export function DemoStrip({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`relative overflow-hidden bg-[#171717] text-white ${compact ? "py-14" : "py-20 md:py-28"}`}>
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#f26a21]/20 blur-3xl" />
      <div className="relative mx-auto flex max-w-[1060px] flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center lg:px-0">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#f6a06f]">Bring one business question</p>
          <h2 className="max-w-2xl font-serif text-3xl font-bold leading-[1.08] md:text-5xl">See what KINLU can build and run for your team.</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/65">A guided demo tailored to your data, your mission, and the decision you need to make next.</p>
        </div>
        <ButtonLink href="/book-demo" variant="orange" className="shrink-0">Book a demo <ArrowRight className="h-4 w-4" /></ButtonLink>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#e9e4df] bg-[#fffdf9]">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-6 text-[#77736e]">Autonomous machine learning for marketing teams that need better answers from the data they already have.</p>
          <p className="mt-6 text-xs font-semibold text-[#9a9189]">Early access · Guided onboarding</p>
        </div>
        <div><p className="footer-heading">Product</p>{products.slice(0, 4).map((item) => <Link key={item.href} href={item.href} className="footer-link">{item.label}</Link>)}</div>
        <div><p className="footer-heading">Solutions</p>{solutions.map((item) => <Link key={item.href} href={item.href} className="footer-link">{item.label}</Link>)}<span className="footer-link opacity-50">Conversion prediction · Soon</span><span className="footer-link opacity-50">Revenue forecasting · Soon</span></div>
        <div><p className="footer-heading">Company</p><Link href="/book-demo" className="footer-link">Book a demo</Link><Link href="/product/enterprise-readiness" className="footer-link">Enterprise readiness</Link><a href="mailto:sarim@kinlu.ai" className="footer-link">sarim@kinlu.ai</a><span className="footer-link">Privacy · Terms</span></div>
      </div>
      <div className="border-t border-[#e9e4df] px-5 py-5 text-center text-xs text-[#9a9189]">© 2026 KINLU. Predictive intelligence for marketing teams.</div>
    </footer>
  );
}

export function ModelFlowVisual({ mode = "platform" }: { mode?: "platform" | "chat" | "predict" }) {
  if (mode === "chat") {
    return <div className="product-visual">
      <div className="visual-topline"><span className="status-dot" /> KINLU CHAT <span className="ml-auto text-[#a39a91]">Model workspace</span></div>
      <div className="chat-bubble">Which customers are most likely to churn in the next 30 days?</div>
      <div className="chat-response"><span className="response-mark"><Sparkles className="h-3.5 w-3.5" /></span><div><p className="text-sm font-semibold text-[#171717]">I’ll build a churn model from your customer history.</p><p className="mt-1 text-xs leading-5 text-[#8a8178]">Preparing data · training candidates · validating output</p></div></div>
      <div className="model-progress"><div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.12em] text-[#8a8178]"><span>Model validation</span><span className="text-[#f26a21]">92%</span></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#eee6de]"><div className="h-full w-[92%] rounded-full bg-[#f26a21]" /></div></div>
      <div className="flex items-center gap-2 pt-1 text-xs font-semibold text-[#5f5a55]"><Check className="h-4 w-4 text-[#f26a21]" /> Exportable model artifact ready</div>
    </div>;
  }
  if (mode === "predict") {
    return <div className="product-visual">
      <div className="visual-topline"><span className="status-dot" /> KINLU PREDICT <span className="ml-auto text-[#a39a91]">Operations</span></div>
      <div className="flex items-center justify-between border-b border-[#eee7e0] pb-4"><div><p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8a8178]">Enabled mission</p><p className="mt-1 text-lg font-bold text-[#171717]">Customer churn</p></div><div className="toggle-on"><span /></div></div>
      <div className="mt-5 grid grid-cols-3 gap-2"><div className="metric-box"><span>Model</span><strong>Active</strong></div><div className="metric-box"><span>Next run</span><strong>02:00</strong></div><div className="metric-box"><span>Records</span><strong>12.4k</strong></div></div>
      <div className="mt-5 rounded-xl bg-[#fff8f2] p-4"><div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[0.12em] text-[#8a8178]">Prediction update</span><span className="rounded-full bg-[#eaf7ec] px-2 py-1 text-[10px] font-bold text-[#2b8152]">Scheduled</span></div><div className="mt-4 flex items-end gap-1.5"><div className="h-10 w-3 rounded-t bg-[#f7c5a5]" /><div className="h-14 w-3 rounded-t bg-[#f3a073]" /><div className="h-12 w-3 rounded-t bg-[#f26a21]" /><div className="h-19 w-3 rounded-t bg-[#f26a21]" /><div className="h-16 w-3 rounded-t bg-[#d95516]" /><div className="h-21 w-3 rounded-t bg-[#f26a21]" /><span className="ml-2 text-xs font-semibold text-[#5f5a55]">Updated on latest data</span></div></div>
    </div>;
  }
  return <div className="product-visual platform-visual">
    <div className="visual-topline"><span className="status-dot" /> KINLU PLATFORM <span className="ml-auto text-[#a39a91]">Predictive workspace</span></div>
    <div className="flow-stack">
      <div className="flow-step question"><span className="flow-index">01</span><div><span className="flow-label">Business question</span><strong>Who is most likely to churn?</strong></div><span className="flow-icon">?</span></div>
      <div className="flow-line" />
      <div className="flow-step model"><span className="flow-index">02</span><div><span className="flow-label">Custom ML model</span><strong>Built and validated on your data</strong></div><span className="flow-icon"><Sparkles className="h-4 w-4" /></span></div>
      <div className="flow-line" />
      <div className="flow-step outcome"><span className="flow-index">03</span><div><span className="flow-label">Prediction outcome</span><strong>147 customers need attention</strong></div><span className="flow-icon"><ArrowRight className="h-4 w-4" /></span></div>
    </div>
    <div className="visual-foot"><span><span className="status-dot green" /> Prediction updated</span><span>Today, 02:00 UTC</span></div>
  </div>;
}

export function MissionVisual({ kind }: { kind: "churn" | "clv" | "segmentation" }) {
  if (kind === "churn") return <div className="mission-visual churn-visual"><div className="visual-topline"><span className="status-dot" /> CHURN RISK <span className="ml-auto text-[#a39a91]">Latest run</span></div>{["Maya Chen", "Adeel Khan", "Sofia Malik"].map((name, i) => <div key={name} className="risk-row"><div className="avatar">{name.split(" ").map((n) => n[0]).join("")}</div><div className="min-w-0 flex-1"><div className="flex justify-between gap-2"><span className="truncate text-sm font-semibold text-[#171717]">{name}</span><span className={`text-xs font-bold ${i === 0 ? "text-[#d44d18]" : "text-[#9b7b63]"}`}>{[87, 74, 62][i]}%</span></div><div className="mt-2 h-1.5 rounded-full bg-[#eee6de]"><div className={`h-full rounded-full ${i === 0 ? "bg-[#d95516]" : "bg-[#f6a477]"}`} style={{ width: `${[87, 74, 62][i]}%` }} /></div></div></div>)}<div className="mt-4 rounded-lg bg-[#fff5ed] px-3 py-2.5 text-xs font-semibold text-[#9d4b22]">Prioritize a win-back action before the next purchase window.</div></div>;
  if (kind === "clv") return <div className="mission-visual clv-visual"><div className="visual-topline"><span className="status-dot" /> CUSTOMER VALUE <span className="ml-auto text-[#a39a91]">Model output</span></div><div className="flex items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8a8178]">Highest-value cohort</p><p className="mt-2 font-serif text-4xl font-bold text-[#171717]">$482k</p><p className="mt-1 text-xs text-[#8a8178]">projected lifetime value</p></div><span className="rounded-full bg-[#eaf7ec] px-2 py-1 text-[10px] font-bold text-[#2b8152]">+18.4%</span></div><div className="mt-7 flex h-28 items-end gap-2 border-b border-l border-[#e8ded5] px-3 pb-0"><div className="chart-bar h-[38%]" /><div className="chart-bar h-[48%]" /><div className="chart-bar h-[44%]" /><div className="chart-bar h-[62%]" /><div className="chart-bar h-[68%]" /><div className="chart-bar h-[82%]" /><div className="chart-bar active h-[98%]" /></div><div className="mt-3 flex justify-between text-[10px] font-semibold text-[#a39a91]"><span>Low value</span><span>Highest-value relationships</span></div></div>;
  return <div className="mission-visual segmentation-visual"><div className="visual-topline"><span className="status-dot" /> CUSTOMER SEGMENTS <span className="ml-auto text-[#a39a91]">5 groups found</span></div><div className="cluster-field"><span className="cluster c1">Repeat buyers</span><span className="cluster c2">Weekend spenders</span><span className="cluster c3">New visitors</span><span className="cluster c4">High-intent</span><span className="cluster c5">At-risk</span><span className="cluster c6">Loyal core</span></div><div className="mt-4 flex items-center justify-between rounded-lg bg-[#f6f2ed] px-3 py-2.5"><span className="text-xs font-semibold text-[#5f5a55]">Next action</span><span className="text-xs font-bold text-[#d95516]">Tailor the message →</span></div></div>;
}
