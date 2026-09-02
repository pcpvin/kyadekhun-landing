import React, { useState } from 'react';
import { X, Sparkles, Play, RotateCcw, Check, Film, Tv, CheckCircle2, Download } from 'lucide-react';
import { MOODS, MoodCategory, MovieRecommendation } from '../data/landingData';

interface InteractiveVibeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMood?: MoodCategory;
}

export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.kyadekhun.app";

export const InteractiveVibeModal: React.FC<InteractiveVibeModalProps> = ({
  isOpen,
  onClose,
  initialMood,
}) => {
  const [selectedMoodId, setSelectedMoodId] = useState<string>(initialMood ? initialMood.id : MOODS[0].id);
  const [contentType, setContentType] = useState<'any' | 'movie' | 'show'>('any');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([
    'Netflix',
    'Prime Video',
    'JioHotstar',
    'Apple TV+',
  ]);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [resultPick, setResultPick] = useState<MovieRecommendation | null>(null);

  if (!isOpen) return null;

  const currentMood = MOODS.find((m) => m.id === selectedMoodId) || MOODS[0];

  const handleGenerate = () => {
    setIsGenerating(true);
    setResultPick(null);

    setTimeout(() => {
      // Pick the best match from the chosen mood
      const pool = currentMood.featuredPicks;
      const pick = pool[Math.floor(Math.random() * pool.length)] || pool[0];
      setResultPick(pick);
      setIsGenerating(false);
    }, 500);
  };

  const togglePlatform = (pName: string) => {
    if (selectedPlatforms.includes(pName)) {
      if (selectedPlatforms.length > 1) {
        setSelectedPlatforms(selectedPlatforms.filter((p) => p !== pName));
      }
    } else {
      setSelectedPlatforms([...selectedPlatforms, pName]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in" 
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#0E0E18] border border-purple-500/30 p-6 sm:p-8 shadow-2xl shadow-purple-950/80 z-10 my-8 overflow-hidden text-white animate-in zoom-in-95 duration-200">
        
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#181829] text-gray-400 hover:text-white border border-white/10 hover:border-white/20 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#17172C] p-1.5 border border-purple-500/40 flex items-center justify-center">
            <img src="/kyadekhun_logo.png" alt="KyaDekhun" className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-white">Find Your Tonight's Watch</h3>
            <p className="text-xs text-gray-400">Personalized discovery engine by KyaDekhun</p>
          </div>
        </div>

        {!resultPick ? (
          <div className="space-y-6">
            
            {/* 1. Mood Selector */}
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2.5">
                1. What's your vibe tonight?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {MOODS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMoodId(m.id)}
                    className={`p-3 rounded-xl text-left border transition-all flex items-center gap-2.5 ${
                      selectedMoodId === m.id
                        ? 'bg-purple-600/30 border-purple-500 text-white font-bold shadow-md shadow-purple-600/20'
                        : 'bg-[#141422] border-white/5 text-gray-400 hover:text-white hover:bg-[#1A1A2D]'
                    }`}
                  >
                    <span className="text-lg">{m.emoji}</span>
                    <span className="text-xs truncate">{m.vibeTag}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Format Preference */}
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2.5">
                2. Content Format
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'any', label: 'Any Format', icon: Sparkles },
                  { id: 'movie', label: 'Movie (< 2h)', icon: Film },
                  { id: 'show', label: 'TV Series', icon: Tv },
                ].map((f) => {
                  const Icon = f.icon;
                  return (
                    <button
                      key={f.id}
                      onClick={() => setContentType(f.id as any)}
                      className={`p-3 rounded-xl border flex items-center justify-center gap-2 transition-all ${
                        contentType === f.id
                          ? 'bg-purple-600/30 border-purple-500 text-white font-bold'
                          : 'bg-[#141422] border-white/5 text-gray-400 hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4 text-purple-400" />
                      <span className="text-xs">{f.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Streaming Subscriptions */}
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2.5">
                3. Your Active Streaming Apps
              </label>
              <div className="flex flex-wrap gap-2">
                {['Netflix', 'Prime Video', 'JioHotstar', 'Apple TV+', 'SonyLIV', 'YouTube'].map((p) => {
                  const isChecked = selectedPlatforms.includes(p);
                  return (
                    <button
                      key={p}
                      onClick={() => togglePlatform(p)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition-all ${
                        isChecked
                          ? 'bg-[#1D1D30] border-purple-500/60 text-purple-300'
                          : 'bg-[#12121E] border-white/5 text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      <span className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] ${
                        isChecked ? 'bg-purple-600 text-white' : 'border border-gray-600'
                      }`}>
                        {isChecked && <Check className="w-3 h-3" />}
                      </span>
                      <span>{p}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Generate / Find My Match Action Button -> Links to Google Play Store */}
            <div className="pt-3">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#6D28D9] hover:from-[#6D28D9] hover:to-[#5B21B6] text-white font-extrabold text-sm shadow-xl shadow-purple-600/40 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all text-center"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Find My Match on Google Play</span>
                <Download className="w-4 h-4 ml-1" />
              </a>
            </div>

          </div>
        ) : (
          /* Result View */
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex items-center justify-between p-3 rounded-xl bg-purple-900/20 border border-purple-500/30 text-xs text-purple-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Found 1 high-confidence match for <strong>{currentMood.vibeTag}</strong></span>
              </div>
              <span className="font-mono font-bold text-amber-300">{resultPick.matchScore}% Match Rate</span>
            </div>

            {/* Poster & Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center rounded-2xl bg-[#141424] border border-white/10 p-4">
              <div className="sm:col-span-4 aspect-[2/3] rounded-xl overflow-hidden shadow-lg border border-white/10 relative">
                <img src={resultPick.poster} alt={resultPick.title} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[11px] font-bold text-amber-400">
                  ★ {resultPick.rating}
                </div>
              </div>

              <div className="sm:col-span-8 flex flex-col justify-between h-full space-y-3">
                <div>
                  <div className="text-xs font-semibold text-purple-300 mb-1">{resultPick.genre}</div>
                  <h4 className="text-2xl font-extrabold text-white leading-tight mb-1">{resultPick.title}</h4>
                  <p className="text-xs text-gray-300 italic mb-2">"{resultPick.tagline}"</p>
                  <p className="text-xs text-gray-400 leading-relaxed font-normal">{resultPick.reason}</p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-gray-400">Stream on:</span>
                    {resultPick.streamingOn.map((s) => (
                      <span key={s.name} className="text-xs font-bold text-white bg-[#1C1C30] px-2.5 py-1 rounded border border-white/10">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:flex-1 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 transition-all text-center"
              >
                <Download className="w-4 h-4" />
                <span>Get KyaDekhun on Google Play</span>
              </a>
              <button
                onClick={() => setResultPick(null)}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#161626] hover:bg-[#1E1E34] text-gray-300 hover:text-white border border-white/10 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Try Another Vibe</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
