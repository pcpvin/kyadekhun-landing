import React, { useState } from 'react';
import { Sparkles, Bookmark, Filter, Search, ChevronRight, Zap } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'movies' | 'shows'>('all');

  return (
    <section className="relative py-24 md:py-32 bg-[#0A0A10] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>THE SOLUTION</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none mb-4">
            MEET KYADEKHUN.
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 font-normal">
            Your shortcut from <span className="text-white italic">"What should I watch?"</span> to <span className="text-purple-400 font-semibold">"Press Play."</span>
          </p>
        </div>

        {/* Central Mockup Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Phone Frame Device Wrapper */}
          <div className="relative mx-auto rounded-[38px] md:rounded-[48px] bg-[#0E0E17] p-3 md:p-5 border-[4px] md:border-[6px] border-[#222238] shadow-2xl shadow-purple-950/40">
            
            {/* Screen Inner Container */}
            <div className="relative rounded-[30px] md:rounded-[38px] bg-[#08080C] border border-white/10 overflow-hidden text-white">
              
              {/* Status Bar */}
              <div className="flex items-center justify-between px-6 pt-3 pb-2 text-[11px] font-medium text-gray-400 border-b border-white/5">
                <span>9:41</span>
                {/* Dynamic Island / Speaker Pill */}
                <div className="w-20 h-4 bg-black rounded-full border border-white/10 mx-auto" />
                <div className="flex items-center gap-1.5">
                  <span>5G</span>
                  <div className="w-4 h-2.5 border border-gray-400 rounded-sm p-0.5">
                    <div className="h-full bg-emerald-400 rounded-[1px]" />
                  </div>
                </div>
              </div>

              {/* App In-Header */}
              <div className="px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#141424] p-1 border border-purple-500/30 flex items-center justify-center">
                    <img src="/kyadekhun_logo.png" alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">KyaDekhun</div>
                    <div className="text-[10px] text-gray-400">Discovering for You</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-full bg-[#151526] text-gray-300 border border-white/5">
                    <Search className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-full bg-[#151526] text-purple-300 border border-purple-500/20">
                    <Filter className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="px-5 flex gap-2 pb-3 overflow-x-auto no-scrollbar">
                <button 
                  onClick={() => setActiveTab('all')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    activeTab === 'all' 
                      ? 'bg-purple-600 text-white shadow-sm shadow-purple-500/40' 
                      : 'bg-[#141422] text-gray-400 hover:text-white'
                  }`}
                >
                  ⚡ All Recommendations
                </button>
                <button 
                  onClick={() => setActiveTab('movies')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    activeTab === 'movies' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-[#141422] text-gray-400 hover:text-white'
                  }`}
                >
                  🎬 Movies
                </button>
                <button 
                  onClick={() => setActiveTab('shows')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    activeTab === 'shows' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-[#141422] text-gray-400 hover:text-white'
                  }`}
                >
                  📺 TV Series
                </button>
              </div>

              {/* Main Feed Content */}
              <div className="px-5 py-4 space-y-7 max-h-[580px] overflow-y-auto no-scrollbar pb-10">
                
                {/* TONIGHT'S PICK SPOTLIGHT HERO */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wide">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Tonight's Curated Pick</span>
                    </div>
                    <span className="text-[11px] text-purple-300 font-semibold">99% Vibe Match</span>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden bg-[#141422] border border-purple-500/30 group">
                    <div className="aspect-[16/9] w-full relative">
                      <img
                        src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&auto=format&fit=crop&q=80"
                        alt="Tonight Pick"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08080C] via-[#08080C]/40 to-transparent" />
                    </div>

                    <div className="absolute bottom-0 inset-x-0 p-4">
                      <div className="text-[11px] font-semibold text-purple-300 mb-1">
                        Because you enjoy Mystery • Thriller
                      </div>
                      <div className="text-xl font-bold text-white mb-1">FROM</div>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-amber-400 font-bold">★ 8.4 Score</span>
                          <span className="text-gray-400">• Prime Video</span>
                        </div>
                        <span className="px-3 py-1 rounded-lg bg-white text-black font-bold text-xs">
                          Watch Now
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RAIL 1: Because you enjoy Crime & Mystery */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <span className="text-purple-400">🕵️</span> Because you enjoy Crime & Mystery
                    </h4>
                    <span className="text-xs text-gray-400 flex items-center gap-0.5 hover:text-white cursor-pointer">
                      See All <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {/* Item 1 */}
                    <div className="rounded-xl bg-[#13131F] border border-white/5 p-2 group hover:border-purple-500/40 transition-all">
                      <div className="aspect-[2/3] rounded-lg overflow-hidden relative mb-2">
                        <img 
                          src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&auto=format&fit=crop&q=80" 
                          alt="Knives Out"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                        />
                        <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] font-bold text-amber-400">
                          ★ 7.9
                        </div>
                      </div>
                      <div className="text-xs font-bold text-white truncate">Knives Out</div>
                      <div className="text-[10px] text-gray-400">Netflix • 2h 10m</div>
                    </div>

                    {/* Item 2 */}
                    <div className="rounded-xl bg-[#13131F] border border-white/5 p-2 group hover:border-purple-500/40 transition-all">
                      <div className="aspect-[2/3] rounded-lg overflow-hidden relative mb-2">
                        <img 
                          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&auto=format&fit=crop&q=80" 
                          alt="True Detective"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                        />
                        <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] font-bold text-amber-400">
                          ★ 8.9
                        </div>
                      </div>
                      <div className="text-xs font-bold text-white truncate">True Detective</div>
                      <div className="text-[10px] text-gray-400">JioHotstar • 4 Seasons</div>
                    </div>

                    {/* Item 3 */}
                    <div className="hidden sm:block rounded-xl bg-[#13131F] border border-white/5 p-2 group hover:border-purple-500/40 transition-all">
                      <div className="aspect-[2/3] rounded-lg overflow-hidden relative mb-2">
                        <img 
                          src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&auto=format&fit=crop&q=80" 
                          alt="Mindhunter"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                        />
                        <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] font-bold text-amber-400">
                          ★ 8.6
                        </div>
                      </div>
                      <div className="text-xs font-bold text-white truncate">Mindhunter</div>
                      <div className="text-[10px] text-gray-400">Netflix • 2 Seasons</div>
                    </div>
                  </div>
                </div>

                {/* RAIL 2: Mind-Bending Sci-Fi */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <span className="text-purple-400">🧠</span> Mind-Bending Sci-Fi
                    </h4>
                    <span className="text-xs text-gray-400 flex items-center gap-0.5 hover:text-white cursor-pointer">
                      See All <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="rounded-xl bg-[#13131F] border border-white/5 p-2 group hover:border-purple-500/40 transition-all">
                      <div className="aspect-[2/3] rounded-lg overflow-hidden relative mb-2">
                        <img 
                          src="https://images.unsplash.com/photo-1507499739999-097706ad8914?w=400&auto=format&fit=crop&q=80" 
                          alt="Severance"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                        />
                        <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] font-bold text-amber-400">
                          ★ 8.7
                        </div>
                      </div>
                      <div className="text-xs font-bold text-white truncate">Severance</div>
                      <div className="text-[10px] text-gray-400">Apple TV+ • 2 Seasons</div>
                    </div>

                    <div className="rounded-xl bg-[#13131F] border border-white/5 p-2 group hover:border-purple-500/40 transition-all">
                      <div className="aspect-[2/3] rounded-lg overflow-hidden relative mb-2">
                        <img 
                          src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&auto=format&fit=crop&q=80" 
                          alt="Interstellar"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                        />
                        <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] font-bold text-amber-400">
                          ★ 8.7
                        </div>
                      </div>
                      <div className="text-xs font-bold text-white truncate">Interstellar</div>
                      <div className="text-[10px] text-gray-400">Prime Video • 2h 49m</div>
                    </div>

                    <div className="hidden sm:block rounded-xl bg-[#13131F] border border-white/5 p-2 group hover:border-purple-500/40 transition-all">
                      <div className="aspect-[2/3] rounded-lg overflow-hidden relative mb-2">
                        <img 
                          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=80" 
                          alt="Dark"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                        />
                        <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] font-bold text-amber-400">
                          ★ 8.8
                        </div>
                      </div>
                      <div className="text-xs font-bold text-white truncate">Dark</div>
                      <div className="text-[10px] text-gray-400">Netflix • 3 Seasons</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Navigation Bar */}
              <div className="px-6 py-3 bg-[#0B0B14] border-t border-white/5 flex items-center justify-around text-gray-400 text-[10px]">
                <div className="flex flex-col items-center gap-1 text-purple-400 font-bold">
                  <Sparkles className="w-4 h-4" />
                  <span>Discover</span>
                </div>
                <div className="flex flex-col items-center gap-1 hover:text-white">
                  <Zap className="w-4 h-4" />
                  <span>Vibes</span>
                </div>
                <div className="flex flex-col items-center gap-1 hover:text-white">
                  <Bookmark className="w-4 h-4" />
                  <span>Watchlist</span>
                </div>
              </div>

            </div>

          </div>

          {/* Floating Feature callouts */}
          <div className="hidden md:block absolute -left-12 top-1/4 bg-[#141424]/95 p-4 rounded-2xl border border-purple-500/30 shadow-2xl backdrop-blur-lg max-w-xs animate-float-slow">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-purple-600/20 text-purple-300 flex items-center justify-center font-bold text-sm">
                🎯
              </div>
              <div className="text-xs font-bold text-white">Real-Time Vibe Matching</div>
            </div>
            <p className="text-[11px] text-gray-300">
              Select your mood and instantly bypass 30 minutes of browsing across 7 platforms.
            </p>
          </div>

          <div className="hidden md:block absolute -right-12 bottom-1/4 bg-[#141424]/95 p-4 rounded-2xl border border-amber-500/30 shadow-2xl backdrop-blur-lg max-w-xs animate-float-delayed">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-amber-600/20 text-amber-300 flex items-center justify-center font-bold text-sm">
                🍿
              </div>
              <div className="text-xs font-bold text-white">Direct-to-App Play</div>
            </div>
            <p className="text-[11px] text-gray-300">
              One tap opens Netflix, Prime Video, or Hotstar straight to the selected title.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
