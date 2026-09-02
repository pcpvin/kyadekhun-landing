import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Play, Star, Maximize2, Flame, Download, Tv, Compass, CheckCircle2, Clapperboard } from 'lucide-react';
import { PLAY_STORE_URL } from './InteractiveVibeModal';

interface HeroProps {
  onFindWatch: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onFindWatch }) => {
  const [activeScreenTab, setActiveScreenTab] = useState<number>(0);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHoveringHero, setIsHoveringHero] = useState<boolean>(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const currentHero = heroRef.current;
    if (currentHero) {
      currentHero.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (currentHero) {
        currentHero.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // Curated backdrop poster artwork for the interactive cinematic marquee
  const backdropRow1 = [
    { title: "Dune: Part Two", genre: "Sci-Fi", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&auto=format&fit=crop&q=80" },
    { title: "Severance", genre: "Psychological Thriller", img: "https://images.unsplash.com/photo-1507499739999-097706ad8914?w=400&auto=format&fit=crop&q=80" },
    { title: "Interstellar", genre: "Sci-Fi Epic", img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&auto=format&fit=crop&q=80" },
    { title: "FROM", genre: "Mystery Horror", img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&auto=format&fit=crop&q=80" },
    { title: "Top Gun: Maverick", genre: "Action", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&auto=format&fit=crop&q=80" },
    { title: "Dark", genre: "Mind-Bending", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=80" },
    { title: "Spider-Man", genre: "Action Adventure", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&auto=format&fit=crop&q=80" },
    { title: "Past Lives", genre: "Romance Drama", img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&auto=format&fit=crop&q=80" },
  ];

  const backdropRow2 = [
    { title: "Ted Lasso", genre: "Feel-Good Comedy", img: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=400&auto=format&fit=crop&q=80" },
    { title: "Oppenheimer", genre: "Biographical Drama", img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&auto=format&fit=crop&q=80" },
    { title: "Black Mirror", genre: "Dystopian Sci-Fi", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&auto=format&fit=crop&q=80" },
    { title: "Knives Out", genre: "Whodunit Mystery", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&auto=format&fit=crop&q=80" },
    { title: "Chef", genre: "Chill Comedy", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&auto=format&fit=crop&q=80" },
    { title: "Stranger Things", genre: "Sci-Fi Horror", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&auto=format&fit=crop&q=80" },
    { title: "Succession", genre: "High Stakes Drama", img: "https://images.unsplash.com/photo-1507499739999-097706ad8914?w=400&auto=format&fit=crop&q=80" },
    { title: "The Batman", genre: "Noir Action", img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&auto=format&fit=crop&q=80" },
  ];

  const heroScreens = [
    {
      id: "vibes",
      name: "1. Vibe Matching",
      tag: "VIBE TUNING",
      label: "Pick up to 3 mood tags & watching partners",
      image: "/screenshots/vibes_screen.png",
      badge: "🎯 99% Precision Match",
      title: "Vibe & Mood Tuning",
      desc: "Tell us your mood (Mind-Bending, Intense, Emotional) and who you're watching with."
    },
    {
      id: "discover",
      name: "2. OTT & Theatres",
      tag: "DISCOVER HUB",
      label: "In Theatres, New on OTT & fresh trailers",
      image: "/screenshots/discover_screen.png",
      badge: "⚡ Unified Cross-Platform Feed",
      title: "Unified Discovery Hub",
      desc: "Cross-platform releases across Netflix, Prime, Hotstar & theatres with live trailers."
    },
    {
      id: "score",
      name: "3. KyaDekhun Score",
      tag: "TASTE INTELLIGENCE",
      label: "Multi-source rating & BookMyShow tickets",
      image: "/screenshots/details_theatre_screen.png",
      badge: "★ 75/100 Strong Watch",
      title: "KyaDekhun Score & Taste Match",
      desc: "Proprietary quality ranking, IMDb/TMDb/Metacritic scores, and direct theatre booking."
    },
    {
      id: "streaming",
      name: "4. Direct Play",
      tag: "1-TAP STREAM",
      label: "Direct deep-links to Prime Video & Netflix",
      image: "/screenshots/details_streaming_screen.png",
      badge: "🍿 Instant 'Press Play'",
      title: "Direct Streaming & 1-Tap Play",
      desc: "Real-time OTT availability tracking with 1-tap direct links into your streaming apps."
    }
  ];

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseEnter={() => setIsHoveringHero(true)}
      onMouseLeave={() => setIsHoveringHero(false)}
      className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden bg-[#08080C]"
    >
      {/* 1. DYNAMIC MOUSE-FOLLOWING SPOTLIGHT GLOW */}
      {isHoveringHero && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.18), rgba(99, 102, 241, 0.08) 40%, transparent 80%)`,
          }}
        />
      )}

      {/* 2. CINEMATIC POSTER MARQUEE BACKDROP (Subtle Angled Film Strips) */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-25 select-none -rotate-2 scale-105">
        
        {/* Top Marquee Row: Left Scroll */}
        <div className="animate-marquee-left flex gap-4 py-2">
          {[...backdropRow1, ...backdropRow1].map((p, i) => (
            <div
              key={i}
              className="w-44 sm:w-56 h-32 sm:h-40 rounded-2xl overflow-hidden relative flex-shrink-0 border border-white/10 shadow-lg group/item"
            >
              <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-2 left-3 right-3">
                <span className="text-[10px] text-purple-300 font-semibold">{p.genre}</span>
                <div className="text-xs font-bold text-white truncate">{p.title}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Marquee Row: Right Scroll */}
        <div className="animate-marquee-right flex gap-4 py-3">
          {[...backdropRow2, ...backdropRow2].map((p, i) => (
            <div
              key={i}
              className="w-44 sm:w-56 h-32 sm:h-40 rounded-2xl overflow-hidden relative flex-shrink-0 border border-white/10 shadow-lg"
            >
              <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-2 left-3 right-3">
                <span className="text-[10px] text-amber-300 font-semibold">{p.genre}</span>
                <div className="text-xs font-bold text-white truncate">{p.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. CINEMATIC GRADIENT VIGNETTES OVERLAY (Keeps Text Ultra-Crisp) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#08080C] via-[#08080C]/85 to-[#08080C] -z-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-[#7C3AED]/25 via-[#6366F1]/20 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* 4. FLOATING INTERACTIVE AMBIENT BADGES */}
      <div className="hidden xl:block absolute left-8 top-1/3 p-3.5 rounded-2xl bg-[#141424]/90 border border-purple-500/30 shadow-2xl backdrop-blur-xl animate-float-slow max-w-xs z-20">
        <div className="flex items-center gap-2.5 mb-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[10px] font-mono font-bold text-purple-300 uppercase tracking-wider">
            Live Taste Calibration
          </span>
        </div>
        <div className="text-xs font-bold text-white">Mind-Bending Mystery</div>
        <div className="text-[11px] text-gray-400 mt-0.5">Matched with <strong>Severance</strong> (99% Fit)</div>
      </div>

      <div className="hidden xl:block absolute right-8 top-1/3 p-3.5 rounded-2xl bg-[#141424]/90 border border-amber-500/30 shadow-2xl backdrop-blur-xl animate-float-delayed max-w-xs z-20">
        <div className="flex items-center gap-2.5 mb-1.5">
          <span className="text-amber-400 text-xs">🍿</span>
          <span className="text-[10px] font-mono font-bold text-amber-300 uppercase tracking-wider">
            1-Tap OTT Streaming
          </span>
        </div>
        <div className="text-xs font-bold text-white">FROM: Season 3</div>
        <div className="text-[11px] text-gray-400 mt-0.5">Direct play ready on <strong>Prime Video</strong></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        


        {/* Hero Headlines */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            STILL DON'T KNOW <br />
            <span className="bg-gradient-to-r from-white via-purple-100 to-[#A78BFA] bg-clip-text text-transparent">
              WHAT TO WATCH?
            </span>
          </h1>
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Thousands of movies. Hundreds of shows. Too many choices. <br className="hidden sm:inline" />
            <strong className="text-white font-semibold">KyaDekhun</strong> helps you find what you'll actually want to watch.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#6D28D9] hover:from-[#6D28D9] hover:to-[#5B21B6] shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 text-amber-300" />
              <span>Find Something to Watch</span>
              <Download className="w-4 h-4 ml-0.5" />
            </a>
            <button
              onClick={onFindWatch}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-gray-300 hover:text-white bg-[#141422]/90 hover:bg-[#1A1A2E] border border-white/10 hover:border-purple-500/30 transition-all duration-200"
            >
              <span>Try Vibe Matcher</span>
            </button>
          </div>

          {/* Supported Streaming Services Strip */}
          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap text-xs text-gray-400">
            <span className="text-gray-500">Works seamlessly across:</span>
            <span className="px-2.5 py-1 rounded bg-[#13131F]/80 border border-white/5 text-gray-300 font-medium">Netflix</span>
            <span className="px-2.5 py-1 rounded bg-[#13131F]/80 border border-white/5 text-gray-300 font-medium">Prime Video</span>
            <span className="px-2.5 py-1 rounded bg-[#13131F]/80 border border-white/5 text-gray-300 font-medium">JioHotstar</span>
            <span className="px-2.5 py-1 rounded bg-[#13131F]/80 border border-white/5 text-gray-300 font-medium">Apple TV+</span>
            <span className="px-2.5 py-1 rounded bg-[#13131F]/80 border border-white/5 text-gray-300 font-medium">SonyLIV</span>
          </div>
        </div>

        {/* 5. HERO INTERACTIVE MOBILE SHOWCASE */}
        <div className="relative max-w-6xl mx-auto mt-20 pt-10">
          
          {/* Section Header Inside Hero Showcase */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 mb-4">
              <Tv className="w-3.5 h-3.5 text-purple-400" />
              <span>REAL APP EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              DESIGNED FOR ZERO FRICTION.
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
              Actual screens from the KyaDekhun mobile app engineered to take you from indecision to immersed entertainment.
            </p>
          </div>

          {/* Interactive Screen Selector Tabs */}
          <div className="flex justify-center gap-2 sm:gap-3 mb-8 overflow-x-auto no-scrollbar px-2">
            {heroScreens.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveScreenTab(idx)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                  activeScreenTab === idx
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/40 scale-105'
                    : 'bg-[#12121E]/90 text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                <span>{s.name}</span>
              </button>
            ))}
          </div>

          {/* 4 Phone Mockups Grid in Hero */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {heroScreens.map((screen, idx) => {
              const isSelected = activeScreenTab === idx;
              return (
                <div
                  key={screen.id}
                  onClick={() => setActiveScreenTab(idx)}
                  className={`group relative rounded-3xl bg-[#0E0E18]/95 border transition-all duration-500 p-3.5 flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'border-purple-500 ring-2 ring-purple-500/40 shadow-glow-purple -translate-y-3 z-10'
                      : 'border-white/10 hover:border-purple-500/30 hover:-translate-y-1 opacity-85 hover:opacity-100 shadow-card'
                  }`}
                >
                  {/* Top Badge */}
                  <div className="flex items-center justify-between gap-1 mb-2.5 px-1">
                    <span className="text-[10px] font-mono font-bold text-purple-300 uppercase tracking-wider">
                      {screen.tag}
                    </span>
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {screen.badge}
                    </span>
                  </div>

                  {/* Phone Device Mockup Frame */}
                  <div className="relative rounded-[26px] bg-[#050508] p-1.5 border-[3px] border-[#222238] shadow-2xl overflow-hidden aspect-[9/19] w-full mb-3.5 group/phone">
                    
                    {/* Actual Screenshot */}
                    <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-black flex items-center justify-center">
                      <img
                        src={screen.image}
                        alt={screen.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/phone:scale-105"
                        loading="eager"
                      />

                      {/* Expand Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setFullscreenImage(screen.image);
                        }}
                        className="absolute bottom-2.5 right-2.5 p-2 rounded-full bg-black/75 backdrop-blur-md text-white border border-white/20 opacity-0 group-hover/phone:opacity-100 transition-opacity shadow-lg"
                        title="Expand screenshot"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>

                      {/* Bottom Gradient Fade */}
                      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Bottom Caption */}
                  <div className="px-1 pt-1 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                        {screen.name}
                      </div>
                      <p className="text-xs text-gray-400 line-clamp-2 mt-1 leading-relaxed">
                        {screen.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Hero Bottom Floating Feature Bar */}
          <div className="mt-10 p-4 rounded-2xl bg-[#11111E]/80 border border-white/5 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
            <div className="flex items-center gap-2 text-white font-medium">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Available now on Google Play Store</span>
            </div>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-purple-300 hover:text-white font-semibold transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Download KyaDekhun App →</span>
            </a>
          </div>

        </div>

        {/* Fullscreen Preview Modal */}
        {fullscreenImage && (
          <div
            onClick={() => setFullscreenImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full max-h-[90vh] rounded-3xl overflow-hidden bg-[#0A0A12] border border-purple-500/40 p-2 shadow-2xl"
            >
              <button
                onClick={() => setFullscreenImage(null)}
                className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-black/80 text-xs font-bold text-white border border-white/20 hover:bg-purple-600 transition-colors"
              >
                Close ✕
              </button>
              <img
                src={fullscreenImage}
                alt="App Screenshot"
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl mx-auto"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
