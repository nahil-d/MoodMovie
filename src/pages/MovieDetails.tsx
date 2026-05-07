import { useParams, Link, useNavigate } from "react-router-dom";
import { MOVIE_DATABASE, Movie } from "../data/MovieDatabase";
import { Star, Play, Share2, Plus, ArrowLeft, Calendar, Film } from "lucide-react";
import { motion } from "motion/react";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find movie in database
  let movie: Movie | undefined;
  for (const cat in MOVIE_DATABASE) {
    const found = MOVIE_DATABASE[cat].find(m => m.id === id);
    if (found) {
      movie = found;
      break;
    }
  }

  if (!movie) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Movie not found</h2>
        <Link to="/" className="text-orange-500 hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="relative h-[400px] md:h-[500px] w-full rounded-[40px] overflow-hidden">
        <img 
          src={movie.image} 
          alt={movie.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
        
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end gap-6">
          <div className="flex flex-wrap gap-4 items-center mb-2">
            <span className="px-4 py-1.5 rounded-full bg-orange-500 text-black text-xs font-black uppercase tracking-widest leading-none">
              {movie.category}
            </span>
            <div className="flex items-center gap-1.5 text-sm font-bold text-white uppercase tracking-wider">
               <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
               {movie.rating} rating
            </div>
            <div className="flex items-center gap-1.5 text-sm font-bold text-white/60 uppercase tracking-wider">
               <Calendar className="w-4 h-4" />
               {movie.year}
            </div>
          </div>

          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none"
          >
            {movie.title}
          </motion.h1>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-400 text-black rounded-2xl font-black uppercase tracking-widest transition-all hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]">
              <Play className="w-5 h-5 fill-black" />
              Watch Now
            </button>
            <button className="flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-black uppercase tracking-widest transition-all border border-white/5 backdrop-blur-md">
              <Plus className="w-5 h-5" />
              Playlist
            </button>
            <button className="flex items-center justify-center p-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl transition-all border border-white/10">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Film className="w-6 h-6 text-orange-500" />
              Synopsis
            </h2>
            <p className="text-xl text-neutral-400 leading-relaxed font-medium">
              {movie.description}
            </p>
          </div>

          <div className="p-8 bg-neutral-900/50 rounded-3xl border border-white/5 space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-widest text-neutral-500">Why it fits your mood</h3>
            <p className="text-neutral-300">
               This film was selected by our Mood-Engine because of its unique "{movie.category.toLowerCase()}" elements. 
               The color palette, pacing, and thematic core resonate with the feelings of being reflective yet energetic.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-xl font-bold">Cast & Crew</h2>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center font-bold text-orange-500">
                    A{i}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Leading Role {i}</h4>
                    <p className="text-xs text-neutral-500">Portraying Protagonist</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
