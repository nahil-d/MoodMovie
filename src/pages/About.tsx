import React from "react";
import { Brain, Cpu, Heart, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-24">
      <section className="text-center space-y-8">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="w-20 h-20 bg-orange-500 rounded-[24px] flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(249,115,22,0.3)]"
        >
          <Brain className="w-10 h-10 text-black" strokeWidth={2.5} />
        </motion.div>
        
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Beyond The <br /> Grid</h1>
          <p className="text-xl text-neutral-400 font-medium max-w-2xl mx-auto leading-relaxed">
            MoodMovie isn't just a database. It's an emotional resonance engine designed to map the nuance of human feeling to the art of cinema.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <FeatureCard 
          icon={<Cpu className="w-6 h-6" />}
          title="The Engine"
          description="Our algorithm processes natural language to identify hidden emotional cues. Whether you're feeling 'futuristic' or 'brooding', we map your vibe to the perfect narrative arc."
        />
        <FeatureCard 
          icon={<Heart className="w-6 h-6" />}
          title="Curated with Love"
          description="Every entry in our 200-movie database is hand-selected to represent the absolute peak of its feeling. No filler, only the most impactful stories."
        />
        <FeatureCard 
          icon={<Sparkles className="w-6 h-6" />}
          title="Cinematic Focus"
          description="We prioritize the visual 'glow'—movies with distinct styling, legendary cinematography, and soundtracks that haunt you for days."
        />
        <FeatureCard 
          icon={<Brain className="w-6 h-6" />}
          title="AI-Mood Tech"
          description="By analyzing the color palette and pacing of thousands of frames, we ensure that the visual energy of the recommendation matches your current state of mind."
        />
      </div>

      <div className="py-24 border-y border-white/5 text-center space-y-8">
         <h2 className="text-4xl font-bold tracking-tight italic">"The right movie at the wrong time is just a movie. The right movie at the right time is a memory."</h2>
         <p className="text-neutral-500 uppercase tracking-widest text-xs font-bold">— The Architects of Mood</p>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="space-y-4 group">
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-bold uppercase tracking-tight">{title}</h3>
      <p className="text-neutral-500 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
