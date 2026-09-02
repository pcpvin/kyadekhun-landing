import React from 'react';
import { TESTIMONIALS } from '../data/landingData';
import { Quote, Star, MessageSquareHeart } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#08080C] overflow-hidden border-t border-white/5">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-80 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 mb-4">
            <MessageSquareHeart className="w-3.5 h-3.5 text-purple-400" />
            <span>REAL VIEWERS. REAL RELIEF.</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            BUILT FOR PEOPLE WHO <br />
            <span className="text-gray-400">SPEND TOO LONG DECIDING.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
            From couples with mismatched taste to solo midnight binge-watchers, here is how KyaDekhun saves the night.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#0E0E17] border border-white/10 hover:border-purple-500/30 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-card relative group"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                  <Quote className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1 text-amber-400 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Quote Content */}
              <p className="text-base text-gray-200 leading-relaxed font-normal mb-8 italic">
                "{t.quote}"
              </p>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                    {t.author}
                  </div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
                <span className="text-[11px] font-semibold text-purple-300 px-2.5 py-1 rounded-full bg-[#161626] border border-purple-500/20">
                  {t.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
