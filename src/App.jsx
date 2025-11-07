import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900 text-slate-900 dark:text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <footer className="py-12 border-t border-white/30 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} Glasmint Payments. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
              <a href="#security">Security</a>
              <a href="#pricing">Pricing</a>
              <a href="#features">Docs</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
