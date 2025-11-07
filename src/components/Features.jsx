import { ShieldCheck, Zap, Globe2, Cpu } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Bank‑grade security",
    description:
      "End‑to‑end encryption, tokenization, and continuous risk scoring protect every transaction.",
  },
  {
    icon: Zap,
    title: "Lightning‑fast",
    description:
      "Optimized SDKs and edge processing keep checkout under 200ms globally.",
  },
  {
    icon: Globe2,
    title: "Global by default",
    description:
      "Accept 135+ currencies with local payment methods and automatic tax handling.",
  },
  {
    icon: Cpu,
    title: "AI‑assisted",
    description:
      "Smart routing and anomaly detection boost approvals and block fraud in real time.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Everything you need to scale payments
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Built for modern fintech teams who care about performance and design.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group relative rounded-2xl border border-white/30 dark:border-white/10 bg-white/60 dark:bg-neutral-900/50 backdrop-blur-xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <div className="size-11 grid place-items-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 text-white shadow-inner">
                <f.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
