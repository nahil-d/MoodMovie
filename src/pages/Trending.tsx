import { TrendingUp, Flame, Star, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Trending() {
  const topVibes = [
    { name: "Futuristic Noir", count: "12.4k", color: "from-blue-500 to-purple-600" },
    { name: "Cozy Nostalgia", count: "8.2k", color: "from-orange-400 to-red-500" },
    { name: "High-Octane Escape", count: "6.9k", color: "from-yellow-400 to-orange-600" },
    { name: "Eerie Silence", count: "5.1k", color: "from-gray-600 to-neutral-900" }
  ];

  return (
    <div className="space-y-16">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 rounded-full text-black font-black uppercase tracking-tighter shadow-[0_0_20px_rgba(249,115,22,0.3)]">
          <Flame className="w-5 h-5 fill-black" />
          Live Now
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter bg-gradient-to-r from-white via-white to-white/20 bg-clip-text text-transparent">
          The Weekly <br /> Vibe Check
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {topVibes.map((vibe, index) => (
          <motion.div
            key={vibe.name}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-[32px] bg-neutral-900 border border-white/5 p-8 flex flex-col justify-between min-h-[250px] hover:border-orange-500/30 transition-all"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${vibe.color} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`} />
            
            <div className="flex justify-between items-start">
              <span className="text-sm font-bold text-neutral-500 uppercase tracking-widest">#{index + 1} Trending Mood</span>
              <div className="flex items-center gap-2 text-xs font-black text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                <TrendingUp className="w-3 h-3" />
                {vibe.count} searches
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight mb-4">{vibe.name}</h2>
              <Link 
                to={`/recommendations?vibe=${encodeURIComponent(vibe.name)}`}
                className="inline-flex items-center gap-2 text-sm font-bold bg-white text-black px-6 py-2.5 rounded-xl hover:bg-orange-500 transition-colors"
              >
                Explore Vibe
                <Search className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-12 rounded-[40px] bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/5 relative overflow-hidden text-center">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
         <div className="relative space-y-6">
           <Star className="w-12 h-12 text-orange-500 mx-auto" fill="currentColor" />
           <h2 className="text-3xl font-bold tracking-tight">Our algorithm predicts "Escapist" <br /> will be the top mood tomorrow.</h2>
           <p className="text-neutral-500 text-lg">Curious to see what matches? Jump ahead of the trend.</p>
           <Link to="/recommendations?vibe=escapist" className="inline-block px-8 py-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 text-sm font-bold transition-all">
             See Escapist Picks
           </Link>
         </div>
      </div>
    </div>
  );
}
