import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Film, TrendingUp, Info, Home as HomeIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div id="app-root" className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-orange-500/30 selection:text-orange-500">
      {/* Cinematic Glow Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-orange-950/20 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-orange-600/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] bg-neutral-900/40 rounded-full blur-[150px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/5 backdrop-blur-xl bg-neutral-950/50">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-1.5 bg-orange-500 rounded-lg group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-shadow">
              <Film className="w-5 h-5 text-black" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold tracking-tighter bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              MoodMovie
            </span>
          </Link>

          <div className="flex items-center gap-1 md:gap-4">
            <NavLink to="/" icon={<HomeIcon className="w-4 h-4" />} active={location.pathname === "/"}>Home</NavLink>
            <NavLink to="/trending" icon={<TrendingUp className="w-4 h-4" />} active={location.pathname === "/trending"}>Trending</NavLink>
            <NavLink to="/about" icon={<Info className="w-4 h-4" />} active={location.pathname === "/about"}>About</NavLink>
          </div>
        </nav>
      </header>

      <main className="relative max-w-7xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="mt-auto border-t border-white/5 py-12 px-6 bg-neutral-950/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-neutral-500">© 2026 MoodMovie. Powered by Cinematic Vibes.</p>
          <div className="flex gap-4 text-xs font-medium text-neutral-400 uppercase tracking-widest">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ to, children, icon, active }: { to: string; children: React.ReactNode; icon: React.ReactNode; active: boolean }) {
  return (
    <Link 
      to={to} 
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
        active 
          ? "bg-white/10 text-orange-500 shadow-[0_0_15px_rgba(255,255,255,0.05)]" 
          : "text-neutral-400 hover:text-white hover:bg-white/5"
      }`}
    >
      {icon}
      <span className="hidden sm:inline">{children}</span>
    </Link>
  );
}
