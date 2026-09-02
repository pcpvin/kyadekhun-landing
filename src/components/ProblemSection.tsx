import React from 'react';
import { Layers, Clock, ThumbsDown, AlertCircle, ArrowUpRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const cards = [
    {
      id: "choices",
      icon: Layers,
      iconColor: "text-purple-400",
      accentBg: "bg-purple-500/10",
      stat: "10,000+",
      statLabel: "Titles across 6+ apps",
      title: "Too Many Choices",
      description: "Thousands of movies and shows. Where do you even start? Browsing Netflix, Prime, and Hotstar back-to-back causes instant decision fatigue.",
      visualTag: "Choice Paralysis"
    },
    {
      id: "scrolling",
      icon: Clock,
      iconColor: "text-amber-400",
      accentBg: "bg-amber-500/10",
      stat: "28 Mins",
      statLabel: "Average nightly scroll time",
      title: "Endless Scrolling",
      description: "30 minutes of browsing. Still haven't pressed play. Your food gets cold while you stare at endless auto-playing trailers and carousel grids.",
      visualTag: "Time Wasted"
    },
    {
      id: "recommendations",
      icon: ThumbsDown,
      iconColor: "text-rose-400",
      accentBg: "bg-rose-500/10",
      stat: "65%",
      statLabel: "Abandoned after 10 mins",
      title: "Wrong Recommendations",
      description: "Popular doesn't always mean right for you. Algorithms push high-budget marketing titles rather than films that actually match your mood.",
      visualTag: "Algorithm Fatigue"
    }
  ];

  return (
    <section className="relative py-24 bg-[#08080C] overflow-hidden border-t border-b border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-semibold text-rose-300 mb-4">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>THE STREAMING PARADOX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            CHOOSING WHAT TO WATCH <br />
            <span className="text-gray-400">SHOULDN'T FEEL LIKE A FULL-TIME JOB.</span>
          </h2>
        </div>

        {/* 3 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group relative rounded-2xl bg-[#0E0E17] border border-white/8 hover:border-purple-500/40 p-8 transition-all duration-300 hover:-translate-y-1.5 shadow-card hover:shadow-glow-purple flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle top indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-purple-500/50 transition-all" />

                <div>
                  {/* Icon & Visual Tag */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-12 h-12 rounded-xl ${card.accentBg} flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-6 h-6 ${card.iconColor}`} />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 px-3 py-1 rounded-full bg-[#141422] border border-white/5">
                      {card.visualTag}
                    </span>
                  </div>

                  {/* Stat Metric */}
                  <div className="mb-4">
                    <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {card.stat}
                    </div>
                    <div className="text-xs font-medium text-gray-400 mt-0.5">
                      {card.statLabel}
                    </div>
                  </div>

                  {/* Card Title & Copy */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                  <span className="font-mono font-medium text-gray-400">0{idx + 1} / DILEMMA</span>
                  <span className="group-hover:text-white transition-colors flex items-center gap-1 font-semibold">
                    The Problem <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
