import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    caption: "+ 2.9% + 30¢ per transaction",
    features: [
      "Hosted checkout",
      "Basic analytics",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Scale",
    price: "$99",
    caption: "/month + lower fees",
    features: [
      "Embedded UI toolkit",
      "Advanced fraud controls",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    caption: "volume pricing",
    features: [
      "Dedicated environment",
      "SLAs & SSO",
      "Solution architect",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Transparent pricing</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Only pay for what you use. Simple tiers for any stage.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-2xl border ${t.highlighted ? "border-slate-900 dark:border-white bg-slate-900 text-white" : "border-white/30 dark:border-white/10 bg-white/60 dark:bg-neutral-900/50"} backdrop-blur-xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)]`}>
              <div className="flex items-baseline justify-between">
                <h3 className={`text-lg font-semibold ${t.highlighted ? "text-white" : "text-slate-900 dark:text-white"}`}>{t.name}</h3>
                <div className={`text-3xl font-bold ${t.highlighted ? "text-white" : "text-slate-900 dark:text-white"}`}>{t.price}</div>
              </div>
              <p className={`mt-1 text-sm ${t.highlighted ? "text-white/80" : "text-slate-600 dark:text-slate-300"}`}>{t.caption}</p>
              <ul className="mt-6 grid gap-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className={`inline-flex size-5 items-center justify-center rounded-full ${t.highlighted ? "bg-white/10" : "bg-slate-900/10"}`}>
                      <Check className={`size-3 ${t.highlighted ? "text-white" : "text-slate-900"}`} />
                    </span>
                    <span className={t.highlighted ? "text-white" : "text-slate-700 dark:text-slate-200"}>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full px-4 py-2 rounded-xl border ${t.highlighted ? "border-white text-white hover:bg-white/10" : "border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 hover:bg-white/60 dark:hover:bg-white/5"}`}>
                Choose {t.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
