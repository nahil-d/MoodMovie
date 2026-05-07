import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { getMoodRecommendations } from "../services/VibeEngine";
import { Movie } from "../data/MovieDatabase";
import { Star, Clock, ChevronRight, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

export default function Recommendations() {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState<Movie[]>([]);
  const vibe = searchParams.get("vibe") || "";

  useEffect(() => {
    if (vibe) {
      setMovies(getMoodRecommendations(vibe));
    }
  }, [vibe]);

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <Link to="/" className="flex items-center gap-2 text-sm text-neutral-500 hover:text-orange-500 transition-colors mb-4 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Search
          </Link>
          <h2 className="text-4xl font-bold tracking-tight">Curated for you</h2>
          <p className="text-neutral-400">Based on your mood: <span className="text-orange-500 italic">"{vibe}"</span></p>
        </div>
        <div className="flex bg-neutral-900 border border-white/5 p-1 rounded-full text-xs font-bold uppercase tracking-wider text-neutral-500">
           <span className="px-4 py-2 bg-white/5 text-white rounded-full">Top Picks</span>
           <span className="px-4 py-2 hover:text-white cursor-pointer transition-colors">By Rating</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {movies.map((movie, index) => (
          <motion.div
            key={movie.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-neutral-900/40 rounded-3xl overflow-hidden border border-white/5 hover:border-orange-500/20 transition-all hover:bg-neutral-900/60"
          >
            <div className="aspect-[16/9] relative overflow-hidden">
               <img 
                 src={movie.image} 
                 alt={movie.title} 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
               <div className="absolute bottom-4 left-4 flex gap-2">
                 <span className="px-3 py-1 rounded-lg bg-orange-500/90 text-black text-[10px] font-black uppercase tracking-widest">{movie.category}</span>
               </div>
            </div>

            <div className="p-6 space-y-4">
               <div>
                 <h3 className="text-xl font-bold group-hover:text-orange-500 transition-colors uppercase tracking-tight line-clamp-1">{movie.title}</h3>
                 <div className="flex items-center gap-4 text-xs font-medium text-neutral-500 mt-1">
                   <span className="flex items-center gap-1"><Star className="w-3 h-3 text-orange-500" fill="currentColor" /> {movie.rating}</span>
                   <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {movie.year}</span>
                 </div>
               </div>
               
               <p className="text-sm text-neutral-500 line-clamp-2 leading-relaxed">
                 {movie.description}
               </p>

               <Link 
                 to={`/movie/${movie.id}`}
                 className="flex items-center justify-between w-full p-4 rounded-2xl bg-white/5 hover:bg-orange-500 hover:text-black text-sm font-bold transition-all group/btn"
               >
                 View Details
                 <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
               </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {movies.length === 0 && (
        <div className="text-center py-20 bg-neutral-900/20 rounded-3xl border border-dashed border-white/10">
          <p className="text-neutral-500">No matches found for that specific vibe. Try something else!</p>
        </div>
      )}
    </div>
  );
}
