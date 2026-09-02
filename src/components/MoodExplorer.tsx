import React, { useState } from 'react';
import { MOODS, MoodCategory } from '../data/landingData';
import { ArrowRight, Sparkles, Check } from 'lucide-react';

interface MoodExplorerProps {
  onSelectMood: (mood: MoodCategory) => void;
}

export const MoodExplorer: React.FC<MoodExplorerProps> = ({ onSelectMood }) => {
  const [selectedMoodId, setSelectedMoodId] = useState<string>(MOODS[0].id);

  const currentMood = MOODS.find((m) => m.id === selectedMoodId) || MOODS[0];

  return (
    <section id="discover" className="relative py-24 md:py-32 bg-[#0A0A12] overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-purple-700/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>MOOD DISCOVERY ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            WHAT'S YOUR VIBE TONIGHT?
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            Pick a mood card to explore instant curated recommendations tailored to your exact energy.
          </p>
        </div>

        {/* 7 Mood Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-14">
          {MOODS.map((mood) => {
            const isSelected = selectedMoodId === mood.id;
            return (
              <div
                key={mood.id}
                onClick={() => {
                  setSelectedMoodId(mood.id);
                  onSelectMood(mood);
                }}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 border ${
                  isSelected
                    ? 'border-purple-500 ring-2 ring-purple-500/40 shadow-glow-purple scale-[1.02]'
                    : 'border-white/10 hover:border-purple-500/50 shadow-card hover:scale-[1.01]'
                }`}
              >
                {/* Background Poster Artwork */}
                <div className="aspect-[16/10] w-full relative overflow-hidden bg-[#141422]">
                  <img
                    src={mood.bgImage}
                    alt={mood.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A12] via-[#0A0A12]/60 to-transparent" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${mood.gradient} opacity-40 group-hover:opacity-70 transition-opacity`} />
                </div>

                {/* Mood Card Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                  
                  {/* Top Bar: Emoji & Selection Marker */}
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-xl shadow">
                      {mood.emoji}
                    </span>
                    {isSelected && (
                      <span className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs shadow">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>

                  {/* Bottom Area: Title, Subtitle, and Hover Action */}
                  <div>
                    <h3 className="text-lg font-extrabold text-white group-hover:text-purple-300 transition-colors mb-1 leading-snug">
                      {mood.title}
                    </h3>
                    <p className="text-xs text-gray-300 line-clamp-2 mb-3">
                      {mood.subtitle}
                    </p>

                    {/* Hover Reveal CTA */}
                    <div className="flex items-center gap-1 text-xs font-bold text-purple-400 group-hover:text-white transition-colors">
                      <span>Explore Picks</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Live Recommendation Preview Drawer for the selected mood */}
        <div className="rounded-3xl bg-[#11111E]/90 border border-purple-500/20 p-6 md:p-8 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 mb-1">
                <span>{currentMood.emoji}</span>
                <span>Active Vibe Selection: {currentMood.title}</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Handpicked for this Vibe
              </h3>
            </div>
            <button
              onClick={() => onSelectMood(currentMood)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all shadow-md shadow-purple-600/30"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Explore All {currentMood.title} Titles</span>
            </button>
          </div>

          {/* Curated Picks Grid for Active Mood */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {currentMood.featuredPicks.map((pick) => (
              <div
                key={pick.id}
                className="rounded-2xl bg-[#171728] border border-white/5 p-4 flex flex-col sm:flex-row gap-4 hover:border-purple-500/30 transition-all"
              >
                <img
                  src={pick.poster}
                  alt={pick.title}
                  className="w-full sm:w-28 sm:h-36 rounded-xl object-cover flex-shrink-0"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-medium text-purple-300">{pick.genre}</span>
                      <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                        ★ {pick.rating}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">{pick.title}</h4>
                    <p className="text-xs text-gray-400 line-clamp-2 mb-2 font-normal">
                      "{pick.reason}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <div className="flex items-center gap-1.5">
                      {pick.streamingOn.map((p) => (
                        <span key={p.name} className="text-[11px] px-2 py-0.5 rounded bg-[#10101C] text-gray-300 border border-white/5">
                          {p.name}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> {pick.matchScore}% Match
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
