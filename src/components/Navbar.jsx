import { Rocket, CreditCard, Shield, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/50 dark:bg-neutral-900/50 rounded-2xl border border-white/30 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="size-9 grid place-items-center rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 text-white shadow-inner">
                <CreditCard className="size-5" />
              </div>
              <div className="leading-tight">
                <p className="font-semibold text-slate-900 dark:text-white">Glasmint</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Fintech Studio</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#features" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Features</a>
              <a href="#security" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Security</a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Pricing</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-white/60 dark:hover:bg-white/5 transition">
                Sign in
              </button>
              <button className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition inline-flex items-center gap-2">
                <Rocket className="size-4" />
                Get started
              </button>
            </div>

            <button className="md:hidden p-2 rounded-lg border border-slate-200/70 dark:border-slate-800" onClick={() => setOpen((v) => !v)}>
              <Menu className="size-5 text-slate-700 dark:text-slate-200" />
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                <a href="#features" className="px-3 py-2 rounded-lg hover:bg-white/60 dark:hover:bg-white/5 text-slate-700 dark:text-slate-200">Features</a>
                <a href="#security" className="px-3 py-2 rounded-lg hover:bg-white/60 dark:hover:bg-white/5 text-slate-700 dark:text-slate-200">Security</a>
                <a href="#pricing" className="px-3 py-2 rounded-lg hover:bg-white/60 dark:hover:bg-white/5 text-slate-700 dark:text-slate-200">Pricing</a>
                <div className="flex gap-2 pt-2">
                  <button className="flex-1 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200">
                    Sign in
                  </button>
                  <button className="flex-1 px-4 py-2 rounded-xl bg-slate-900 text-white">
                    Get started
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
