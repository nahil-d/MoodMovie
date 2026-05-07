import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  const [vibe, setVibe] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (vibe.trim()) {
      navigate(`/recommendations?vibe=${encodeURIComponent(vibe)}`);
    }
  };

  const suggestions = ["futuristic", "romantic", "dark", "magical", "funny", "serious"];

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4 max-w-2xl"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-widest border border-orange-500/20">
          Discover your next story
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent leading-[1.1]">
          What's your feeling <br /> tonight?
        </h1>
        <p className="text-lg text-neutral-400 font-medium">
          Tell us the vibe, and our AI-Mood algorithm will find the perfect cinema matches for you.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="relative w-full max-w-xl group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex items-center bg-neutral-900 border border-white/5 rounded-2xl p-2 focus-within:ring-2 focus-within:ring-orange-500/50 transition-all">
          <Search className="w-6 h-6 ml-4 text-neutral-500" />
          <input
            id="vibe-input"
            type="text"
            value={vibe}
            onChange={(e) => setVibe(e.target.value)}
            placeholder="e.g. futuristic and dark, lonely but reflective..."
            className="w-full bg-transparent border-none focus:ring-0 px-4 py-4 text-white placeholder:text-neutral-600 text-lg"
          />
          <button
            id="recommend-button"
            type="submit"
            className="bg-orange-500 hover:bg-orange-400 text-black font-bold h-14 w-14 md:w-auto md:px-8 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            <span className="hidden md:inline">Generate</span>
          </button>
        </div>
      </motion.form>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-3"
      >
        <span className="text-sm text-neutral-500 py-1.5 px-2">Popular:</span>
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => setVibe(s)}
            className="px-4 py-1.5 rounded-full border border-white/10 text-sm text-neutral-400 hover:border-orange-500/40 hover:text-orange-500 hover:bg-orange-500/5 transition-all"
          >
            {s}
          </button>
        ))}
      </motion.div>
    </div>
  );
}
