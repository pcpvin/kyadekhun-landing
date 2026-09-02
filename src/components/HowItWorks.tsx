import React, { useState } from 'react';
import { Sparkles, Play, Sliders, CheckCircle2, ArrowRight, Star, ShieldCheck } from 'lucide-react';

interface HowItWorksProps {
  onFindWatch: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onFindWatch }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [selectedVibe, setSelectedVibe] = useState<string>('Mind-Bending');

  const vibeOptions = [
    { label: 'Something Intense', emoji: '🔥' },
    { label: 'Mind-Bending', emoji: '🧠' },
    { label: 'Feel-Good', emoji: '😂' },
    { label: 'Dark & Unsettling', emoji: '😱' },
    { label: 'Romantic', emoji: '❤️' },
    { label: 'Family Night', emoji: '🍿' },
    { label: 'High Adrenaline', emoji: '⚡' },
  ];

  return (
    <section id="how-it-works" className="relative py-24 md:py-32 bg-[#08080C] overflow-hidden border-t border-white/5">
      {/* Cinematic Ambient Glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 mb-4">
            <Sliders className="w-3.5 h-3.5 text-purple-400" />
            <span>SIMPLE 3-STEP MAGIC</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            FROM MOOD TO MOVIE <br />
            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              IN A FEW SECONDS.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
            No complicated forms. Just pick your energy, and we handle the discovery engine across all platforms.
          </p>
        </div>

        {/* Step Selector Pills (for Desktop & Mobile) */}
        <div className="flex justify-center gap-3 mb-12">
          {[1, 2, 3].map((step) => (
            <button
              key={step}
              onClick={() => setActiveStep(step)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeStep === step
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/40 scale-105'
                  : 'bg-[#12121E] text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${
                activeStep === step ? 'bg-white text-purple-700' : 'bg-white/10 text-gray-300'
              }`}>
                0{step}
              </span>
              <span>Step 0{step}</span>
            </button>
          ))}
        </div>

        {/* Interactive Step Display Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Step Explanation Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Step 1 Card */}
            <div
              onClick={() => setActiveStep(1)}
              className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border ${
                activeStep === 1
                  ? 'bg-[#141424] border-purple-500/40 shadow-glow-purple'
                  : 'bg-[#0E0E17]/60 border-white/5 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-300 font-mono text-xs font-bold">
                  STEP 01
                </span>
                <h3 className="text-xl font-bold text-white">Tell us your vibe.</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">
                Select how you want to feel tonight. Skip endless browsing categories and pinpoint your exact mental frequency.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {vibeOptions.slice(0, 4).map((v) => (
                  <span key={v.label} className="text-[11px] px-2.5 py-1 rounded-full bg-[#181829] text-gray-300 border border-white/5">
                    {v.emoji} {v.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Step 2 Card */}
            <div
              onClick={() => setActiveStep(2)}
              className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border ${
                activeStep === 2
                  ? 'bg-[#141424] border-purple-500/40 shadow-glow-purple'
                  : 'bg-[#0E0E17]/60 border-white/5 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-300 font-mono text-xs font-bold">
                  STEP 02
                </span>
                <h3 className="text-xl font-bold text-white">KyaDekhun understands your taste.</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">
                Our recommendation engine analyzes your genre history, ratings, mood alignment, and streaming availability in milliseconds.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Genre & Mood Vector</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ratings & Watch History</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Content Type & Runtime</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Streaming Availability</span>
                </div>
              </div>
            </div>

            {/* Step 3 Card */}
            <div
              onClick={() => setActiveStep(3)}
              className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border ${
                activeStep === 3
                  ? 'bg-[#141424] border-purple-500/40 shadow-glow-purple'
                  : 'bg-[#0E0E17]/60 border-white/5 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-300 font-mono text-xs font-bold">
                  STEP 03
                </span>
                <h3 className="text-xl font-bold text-white">Know what to watch.</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Get an instant, high-confidence recommendation card with direct streaming access. No second guessing. Press play immediately.
              </p>
            </div>

          </div>

          {/* Right Column: Live Interactive Simulation Preview */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-[#0E0E18] border border-white/10 p-6 shadow-2xl relative">
              
              {/* Dynamic State 1: Vibe Selector */}
              {activeStep === 1 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Select Your Current Vibe
                    </span>
                    <span className="text-[11px] text-gray-400">Interactive</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {vibeOptions.map((v) => (
                      <button
                        key={v.label}
                        onClick={() => {
                          setSelectedVibe(v.label);
                          setActiveStep(2);
                        }}
                        className={`p-3.5 rounded-xl text-left border transition-all flex items-center gap-3 ${
                          selectedVibe === v.label
                            ? 'bg-purple-900/40 border-purple-500 text-white shadow-md'
                            : 'bg-[#141422] border-white/5 text-gray-300 hover:bg-[#1A1A2C] hover:border-purple-500/30'
                        }`}
                      >
                        <span className="text-xl">{v.emoji}</span>
                        <div className="text-xs font-bold truncate">{v.label}</div>
                      </button>
                    ))}
                  </div>

                  <div className="pt-3 text-center">
                    <button
                      onClick={() => setActiveStep(2)}
                      className="inline-flex items-center gap-2 text-xs text-purple-400 hover:text-purple-300 font-semibold"
                    >
                      <span>Proceed to Taste Analysis</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Dynamic State 2: Taste Understanding Engine */}
              {activeStep === 2 && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" /> Taste Vector Synthesis
                    </span>
                    <span className="text-[11px] text-purple-300 font-mono">Calibrated: {selectedVibe}</span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-[#141422] border border-white/5">
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-gray-300">Vibe Affinity ({selectedVibe})</span>
                        <span className="text-purple-400 font-bold">99.2%</span>
                      </div>
                      <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full w-[99%]" />
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#141422] border border-white/5">
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-gray-300">Genre Alignment (Mystery • Thriller)</span>
                        <span className="text-indigo-400 font-bold">94.8%</span>
                      </div>
                      <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full w-[95%]" />
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#141422] border border-white/5">
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-gray-300">Platform Availability (Active Subscriptions)</span>
                        <span className="text-emerald-400 font-bold">100% Ready</span>
                      </div>
                      <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full w-[100%]" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 text-center">
                    <button
                      onClick={() => setActiveStep(3)}
                      className="w-full py-3 rounded-xl bg-purple-600 text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/30"
                    >
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>Generate Tonight's Pick</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Dynamic State 3: Recommendation Result Card */}
              {activeStep === 3 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between pb-2 border-b border-white/5">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-amber-400" /> Your Pick Tonight
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold">
                      98% Match
                    </span>
                  </div>

                  {/* Recommendation Card */}
                  <div className="relative rounded-2xl overflow-hidden bg-[#151526] border border-purple-500/30 group">
                    <div className="aspect-[16/10] w-full relative">
                      <img
                        src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&auto=format&fit=crop&q=80"
                        alt="FROM TV Show"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#09090E] via-[#09090E]/50 to-transparent" />
                    </div>

                    <div className="p-4 relative -mt-12 bg-gradient-to-t from-[#09090E] via-[#09090E] to-transparent">
                      <div className="text-[11px] font-semibold text-purple-300 mb-0.5">
                        Because you enjoy Mystery • Thriller
                      </div>
                      <h4 className="text-2xl font-extrabold text-white mb-1">
                        FROM
                      </h4>
                      <p className="text-xs text-gray-300 mb-3">
                        A mysterious town that traps anyone who enters. At night, terrifying creatures emerge from the forest.
                      </p>

                      <div className="flex items-center justify-between pt-2 border-t border-white/5">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-extrabold text-amber-400 flex items-center gap-1">
                            ★ 8.2
                          </span>
                          <span className="text-xs text-blue-400 font-medium bg-blue-500/10 px-2 py-0.5 rounded">
                            Prime Video
                          </span>
                        </div>

                        <button
                          onClick={onFindWatch}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white font-bold text-xs shadow-md shadow-purple-600/30 hover:scale-105 transition-all"
                        >
                          <Play className="w-3.5 h-3.5 fill-white" />
                          <span>Watch Now</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="text-center pt-1">
                    <button
                      onClick={() => setActiveStep(1)}
                      className="text-xs text-gray-400 hover:text-white underline"
                    >
                      Try another vibe
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
