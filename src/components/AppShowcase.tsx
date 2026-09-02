import React, { useState } from 'react';
import { Tv, Sparkles, Maximize2, ExternalLink } from 'lucide-react';

export const AppShowcase: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<number>(0);
  const [selectedPreviewImage, setSelectedPreviewImage] = useState<string | null>(null);

  const screens = [
    {
      id: "vibes",
      title: "Vibe & Mood Tuning",
      subtitle: "Filter who you're watching with and select multiple real-time vibes (Mind-Bending, Intense, Emotional) for instant calibrated recommendations.",
      tag: "Screen 1 • Vibe Discovery",
      badge: "Vibe Selector",
      imageSrc: "/screenshots/vibes_screen.png",
      highlights: ["Who are you watching with?", "Pick up to 3 mood tags", "Picked for your vibe rails"]
    },
    {
      id: "discover",
      title: "Unified Discovery Hub",
      subtitle: "Seamlessly browse what's playing in theatres, new drops on OTT (Netflix, Prime, Hotstar), and watch fresh high-res trailers.",
      tag: "Screen 2 • Discover & OTT",
      badge: "New & Fresh",
      imageSrc: "/screenshots/discover_screen.png",
      highlights: ["In Theatres & OTT Filter", "TMDb & Verified Ratings", "New Trailer Reels"]
    },
    {
      id: "taste-match",
      title: "KyaDekhun Score & Taste Match",
      subtitle: "Proprietary KyaDekhun Score (75/100 Strong Watch), multi-source ratings (IMDb, TMDb, Metacritic), and exact personal vibe fit analysis.",
      tag: "Screen 3 • Taste Intelligence",
      badge: "KyaDekhun Score",
      imageSrc: "/screenshots/details_theatre_screen.png",
      highlights: ["Aggregated multi-platform score", "BookMyShow & District tickets", "Personalized vibe alignment"]
    },
    {
      id: "streaming",
      title: "Direct Streaming & 1-Tap Play",
      subtitle: "Instant OTT availability tracking with direct deep links to Prime Video, Netflix, and Hotstar without endless searching.",
      tag: "Screen 4 • 1-Tap Play",
      badge: "Direct Streaming",
      imageSrc: "/screenshots/details_streaming_screen.png",
      highlights: ["Real-time OTT availability", "Official Watch Now button", "Community score breakdown"]
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#0A0A12] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 mb-4">
            <Tv className="w-3.5 h-3.5 text-purple-400" />
            <span>REAL APP EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            DESIGNED FOR ZERO FRICTION.
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            Actual screens from the KyaDekhun mobile app engineered to take you from indecision to immersed entertainment.
          </p>
        </div>

        {/* 4 Floating Mobile Screens Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {screens.map((screen, idx) => (
            <div
              key={screen.id}
              onClick={() => setActiveScreen(idx)}
              className={`group rounded-3xl bg-[#0E0E18] border transition-all duration-300 p-3.5 md:p-4 flex flex-col justify-between cursor-pointer ${
                activeScreen === idx
                  ? 'border-purple-500 ring-2 ring-purple-500/30 shadow-glow-purple -translate-y-2'
                  : 'border-white/10 hover:border-purple-500/40 hover:-translate-y-1 shadow-card'
              }`}
            >
              {/* Phone Device Frame */}
              <div className="relative rounded-[28px] md:rounded-[32px] bg-[#050508] p-1.5 md:p-2 border-[3px] md:border-[4px] border-[#222238] shadow-2xl overflow-hidden aspect-[9/19] w-full mb-4 group/frame">
                
                {/* Real App Screenshot */}
                <div className="relative w-full h-full rounded-[22px] md:rounded-[26px] overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={screen.imageSrc}
                    alt={screen.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover/frame:scale-105"
                    loading="lazy"
                  />

                  {/* Quick Expand Button overlay */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPreviewImage(screen.imageSrc);
                    }}
                    className="absolute bottom-3 right-3 p-2 rounded-full bg-black/70 backdrop-blur-md text-white/80 hover:text-white border border-white/20 opacity-0 group-hover/frame:opacity-100 transition-opacity shadow-lg"
                    title="View full screenshot"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>

                  {/* Subtle bottom gradient for frame depth */}
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Caption & Metadata */}
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-mono text-purple-400 font-bold uppercase tracking-wider">
                      {screen.tag}
                    </span>
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
                      {screen.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-purple-300 transition-colors">
                    {screen.title}
                  </h3>
                  
                  <p className="text-xs text-gray-400 leading-relaxed font-normal mb-3">
                    {screen.subtitle}
                  </p>
                </div>

                {/* Key Highlights list */}
                <div className="pt-2.5 border-t border-white/5 space-y-1">
                  {screen.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="text-[11px] text-gray-300 flex items-center gap-1.5 font-medium">
                      <span className="w-1 h-1 rounded-full bg-purple-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Image Preview Modal */}
        {selectedPreviewImage && (
          <div 
            onClick={() => setSelectedPreviewImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full max-h-[90vh] rounded-3xl overflow-hidden bg-[#0A0A12] border border-purple-500/40 p-2 shadow-2xl"
            >
              <button
                onClick={() => setSelectedPreviewImage(null)}
                className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-black/80 text-xs font-bold text-white border border-white/20 hover:bg-purple-600 transition-colors"
              >
                Close ✕
              </button>
              <img
                src={selectedPreviewImage}
                alt="Full App Screenshot"
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl mx-auto"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
