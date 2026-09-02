import React from 'react';
import { FEATURES } from '../data/landingData';
import { Sparkles, Flame, Film, Layers, Star, Tv, BookmarkCheck, Compass, LayoutGrid } from 'lucide-react';

export const FeatureGrid: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Sparkles,
    Flame,
    Film,
    Layers,
    Star,
    Tv,
    BookmarkCheck,
    Compass,
  };

  return (
    <section id="features" className="relative py-24 md:py-32 bg-[#0A0A10] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 mb-4">
            <LayoutGrid className="w-3.5 h-3.5 text-purple-400" />
            <span>DISCOVERY TOOLKIT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            EVERYTHING YOU NEED <br />
            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              TO FIND YOUR NEXT WATCH.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
            A unified suite of intelligence tools engineered to kill decision fatigue across all your OTT platforms.
          </p>
        </div>

        {/* 8-Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feat, idx) => {
            const Icon = iconMap[feat.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="group rounded-2xl bg-[#0E0E18] border border-white/8 hover:border-purple-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-card hover:shadow-glow-purple"
              >
                <div>
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-[#171728] border border-white/10 group-hover:border-purple-500/30 group-hover:bg-purple-600/20 flex items-center justify-center text-purple-400 group-hover:text-purple-300 transition-all duration-300 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {feat.title}
                  </h3>

                  {/* 1 Sentence Description */}
                  <p className="text-xs text-gray-400 leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500 group-hover:text-purple-400 font-medium transition-colors">
                  <span>Feature 0{idx + 1}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">Ready →</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
