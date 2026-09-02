import React from 'react';
import { POPULAR_VS_PERSONAL } from '../data/landingData';
import { Sparkles, XCircle, CheckCircle, TrendingUp, UserCheck, ShieldCheck } from 'lucide-react';

export const PersonalizationSection: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#08080C] overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-96 h-96 bg-purple-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 mb-4">
            <UserCheck className="w-3.5 h-3.5 text-purple-400" />
            <span>INDIVIDUALIZED INTELLIGENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            NOT JUST POPULAR. <br />
            <span className="bg-gradient-to-r from-purple-300 via-indigo-200 to-purple-400 bg-clip-text text-transparent">
              PERSONAL.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Because the best recommendation isn't what everyone is watching. It's what <strong className="text-white">YOU</strong> will actually enjoy.
          </p>
        </div>

        {/* Split Screen Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT SIDE: "What's Popular" (Generic Algorithmic Feed) */}
          <div className="rounded-3xl bg-[#0F0F17]/80 border border-red-500/20 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-card">
            
            {/* Top Status Tag */}
            <div className="flex items-center justify-between pb-5 border-b border-white/5 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-300">What's Popular</h3>
                  <p className="text-xs text-gray-400">Traditional billboard ranking</p>
                </div>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 font-semibold">
                Generic Trending
              </span>
            </div>

            {/* List of Generic Items */}
            <div className="space-y-4 mb-6">
              {POPULAR_VS_PERSONAL.popular.items.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#141420]/70 border border-white/5 p-4 flex flex-col gap-2 relative group hover:border-red-500/30 transition-all opacity-80 hover:opacity-100"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-400">{item.genre}</span>
                    <span className="text-[11px] font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded">
                      {item.match}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-gray-300">{item.title}</h4>
                  
                  {/* Flaw callout */}
                  <div className="flex items-center gap-2 text-xs text-red-300/80 pt-2 border-t border-white/5">
                    <XCircle className="w-3.5 h-3.5 flex-shrink-0 text-red-400" />
                    <span>{item.flaw}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4 border-t border-white/5 text-xs text-gray-400">
              ❌ Wastes 20+ minutes browsing content promoted by commercial marketing.
            </div>
          </div>

          {/* RIGHT SIDE: "Picked For You" (KyaDekhun Smart Personalization) */}
          <div className="rounded-3xl bg-[#121222]/90 border border-purple-500/40 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-glow-purple">
            
            {/* Top Status Tag */}
            <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-300">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Picked For You</h3>
                  <p className="text-xs text-purple-300 font-medium">KyaDekhun Vibe Matching</p>
                </div>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-purple-600/30 border border-purple-500/40 text-purple-200 font-bold">
                🎯 Taste-Calibrated
              </span>
            </div>

            {/* List of Tailored Items */}
            <div className="space-y-4 mb-6">
              {POPULAR_VS_PERSONAL.personal.items.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#1A1A2E] border border-purple-500/30 p-4 flex flex-col gap-2 relative group hover:border-purple-400 transition-all shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-purple-300">{item.genre}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-amber-400">★ {item.rating}</span>
                      <span className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {item.match}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-extrabold text-white">{item.title}</h4>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-[#10101C] text-gray-300 border border-white/10 font-medium">
                      {item.platform}
                    </span>
                  </div>

                  {/* Advantage callout */}
                  <div className="flex items-center gap-2 text-xs text-emerald-300 pt-2 border-t border-white/5 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 flex-shrink-0 text-emerald-400" />
                    <span>{item.advantage}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4 border-t border-white/10 text-xs text-purple-200 font-medium flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span>KyaDekhun learns what you like and gets better at helping you decide.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
