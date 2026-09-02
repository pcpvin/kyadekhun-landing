import React from 'react';
import { Instagram, Youtube, Linkedin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="about" className="bg-[#050508] border-t border-white/8 pt-16 pb-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#141424] p-1 border border-white/10 flex items-center justify-center">
                <img
                  src="/kyadekhun_logo.png"
                  alt="KyaDekhun Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-extrabold text-white tracking-tight">
                  Kya<span className="text-[#8B5CF6]">Dekhun</span>
                </div>
                <div className="text-[10px] font-semibold tracking-wider uppercase text-gray-400">
                  KNOW WHAT TO WATCH.
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              KyaDekhun helps movie lovers and casual viewers cut through streaming clutter with instant mood and vibe-based recommendations.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/kyadekhunapp/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#11111E] border border-white/5 hover:border-purple-500/40 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#11111E] border border-white/5 hover:border-purple-500/40 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/kyadekhunapp/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#11111E] border border-white/5 hover:border-purple-500/40 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-purple-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="#discover" className="hover:text-purple-300 transition-colors">Discover</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-purple-300 transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#features" className="hover:text-purple-300 transition-colors">Features</a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-300 transition-colors">About</a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Legal & Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-purple-300 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300 transition-colors">Contact Support</a>
              </li>
              <li>
                <span className="text-xs text-gray-400">OTT platform names and logos are property of their respective owners.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © 2026 <span className="text-white font-medium">KyaDekhun</span>. All rights reserved.
          </div>
          <div className="flex items-center flex-wrap justify-center sm:justify-end gap-1.5 text-xs text-gray-400">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 mx-0.5" />
            <span>for movie lovers everywhere by</span>
            <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/[0.04] border border-white/10 hover:border-lime-500/30 transition-all ml-1">
              <img 
                src="/techviora_logo.png" 
                alt="Techviora Logo" 
                className="h-4 w-auto object-contain" 
              />
              <span className="text-white font-semibold text-xs tracking-wide">Techviora</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
