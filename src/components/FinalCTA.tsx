import React from 'react';
import { Sparkles, ArrowRight, Download } from 'lucide-react';
import { PLAY_STORE_URL } from './InteractiveVibeModal';

interface FinalCTAProps {
  onFindWatch: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onFindWatch }) => {
  return (
    <section className="relative py-28 md:py-36 bg-[#08080C] overflow-hidden border-t border-white/5">
      
      {/* Background Poster Collage with Dark Vignette */}
      <div className="absolute inset-0 opacity-15 overflow-hidden pointer-events-none">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 -rotate-6 scale-110">
          <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&auto=format&fit=crop&q=80" alt="Poster 1" className="rounded-xl object-cover h-64 w-full" />
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=80" alt="Poster 2" className="rounded-xl object-cover h-64 w-full" />
          <img src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&auto=format&fit=crop&q=80" alt="Poster 3" className="rounded-xl object-cover h-64 w-full" />
          <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&auto=format&fit=crop&q=80" alt="Poster 4" className="rounded-xl object-cover h-64 w-full" />
          <img src="https://images.unsplash.com/photo-1507499739999-097706ad8914?w=400&auto=format&fit=crop&q=80" alt="Poster 5" className="rounded-xl object-cover h-64 w-full" />
          <img src="https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=400&auto=format&fit=crop&q=80" alt="Poster 6" className="rounded-xl object-cover h-64 w-full" />
        </div>
      </div>

      {/* Radial Gradient Glow & Dark Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#08080C] via-[#08080C]/80 to-[#08080C]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Prominent Official KyaDekhun Logo */}
        <div className="flex justify-center mb-6">
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-[#141424]/90 p-2.5 border border-purple-500/40 shadow-2xl shadow-purple-600/30 flex items-center justify-center animate-pulse-subtle">
            <img
              src="/kyadekhun_logo.png"
              alt="KyaDekhun Logo"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* Brand Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold text-purple-300 tracking-widest uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>KNOW WHAT TO WATCH</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-none mb-6">
          STOP SCROLLING. <br />
          <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            START WATCHING.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-normal">
          Let KyaDekhun help you find your next movie or show.
        </p>

        {/* Action Button Linking Directly to Google Play Store */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-lg font-extrabold text-white bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#6D28D9] hover:from-[#6D28D9] hover:to-[#5B21B6] shadow-xl shadow-purple-600/40 hover:shadow-purple-600/60 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            <Sparkles className="w-5 h-5 text-amber-300" />
            <span>Find My Next Watch</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <button
            onClick={onFindWatch}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-5 rounded-full text-base font-semibold text-gray-300 hover:text-white bg-[#141422]/90 hover:bg-[#1A1A2E] border border-white/10 hover:border-purple-500/30 transition-all"
          >
            <span>Try Interactive Discovery</span>
          </button>
        </div>

        {/* Secondary Brand Reassurance with Play Store Link */}
        <div className="mt-8 text-sm text-gray-400 font-medium flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Available on Android Google Play Store • Free download</span>
        </div>

      </div>
    </section>
  );
};
