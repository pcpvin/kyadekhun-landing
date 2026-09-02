import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowRight, Download } from 'lucide-react';
import { PLAY_STORE_URL } from './InteractiveVibeModal';

interface NavbarProps {
  onOpenModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Discover', href: '#discover' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-lg shadow-black/40 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-[#141420]/80 p-1 border border-white/10 group-hover:border-purple-500/40 transition-all duration-300">
              <img 
                src="/kyadekhun_logo.png" 
                alt="KyaDekhun Logo" 
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-purple-300 transition-colors">
                Kya<span className="text-[#8B5CF6]">Dekhun</span>
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-widest text-gray-400">
                Know What To Watch
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 bg-[#13131F]/70 px-6 py-2 rounded-full border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8B5CF6] transition-all duration-200 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] hover:from-[#6D28D9] hover:to-[#7C3AED] shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Get App</span>
              <Download className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#8B5CF6] text-white flex items-center gap-1"
            >
              <Download className="w-3 h-3" />
              <span>Get App</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#141420] text-gray-300 hover:text-white border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-t border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 bg-[#0B0B12]/95 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-200 hover:bg-[#181829] hover:text-purple-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] shadow-lg shadow-purple-600/30"
            >
              <Download className="w-5 h-5" />
              <span>Get on Google Play Store</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
