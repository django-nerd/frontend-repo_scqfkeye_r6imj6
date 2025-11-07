import Spline from "@splinetool/react-spline";
import { Shield, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-xl px-3 py-1 text-xs text-slate-600 dark:text-slate-300 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
              <Shield className="size-3" />
              PCI-DSS Ready • 256-bit Encryption
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Modern, glassmorphic payments for the next era
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
              Build beautiful, secure checkout experiences with 3D design and real-time fraud protection. Fast integration, global scale.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition">
                Start free
                <ArrowRight className="size-4" />
              </button>
              <button className="px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 hover:bg-white/60 dark:hover:bg-white/5 transition">
                Live demo
              </button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2"><CheckCircle2 className="size-4 text-emerald-500"/> No-code widgets</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="size-4 text-emerald-500"/> Chargeback protection</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="size-4 text-emerald-500"/> 99.99% uptime</div>
            </div>
          </div>
          <div className="lg:col-span-6 relative h-[420px] sm:h-[520px] lg:h-[640px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/30 dark:border-white/10 bg-gradient-to-b from-white/60 to-white/20 dark:from-neutral-900/60 dark:to-neutral-900/20 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/50 dark:via-neutral-900/10 dark:to-neutral-900/60" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -z-[0] inset-0 overflow-hidden">
        <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
      </div>
    </section>
  );
}
