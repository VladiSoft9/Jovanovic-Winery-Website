import { useState, useEffect } from 'react';
import { DICTIONARY } from '../data/wineryData.js';
import { Wine, Globe } from 'lucide-react';

export default function Navbar({ lang, onLanguageToggle, onOpenReservation, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const t = DICTIONARY[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: t.navHome },
    { id: 'vintages', label: t.navWines },
    { id: 'journal', label: t.navStory },
    { id: 'gallery', label: t.navGallery },
    { id: 'contact', label: t.navContact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <div
        className={`group pointer-events-auto inline-flex items-center gap-2 sm:gap-3 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? 'bg-[#0a0a0a]/10 backdrop-blur-[3px] border border-white/5 opacity-40 hover:opacity-100 hover:bg-[#0a0a0a]/90 hover:backdrop-blur-md hover:border-white/15 hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)] scale-[0.98]'
            : 'bg-[#141414]/80 backdrop-blur-md border border-white/10 shadow-lg opacity-100'
        }`}
      >
        {/* 1. Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="group relative flex items-center justify-center w-10 h-10 rounded-full overflow-hidden transition-all duration-500 ease-out hover:scale-110 cursor-pointer flex-shrink-0"
          title="Vinarija Jovanović"
        >
          {/* Animated gradient ring on hover */}
          <span className="absolute inset-0 accent-gradient group-hover:rotate-180 transition-transform duration-700" />
          <span className="absolute inset-[1.5px] rounded-full bg-[#0a0a0a] flex items-center justify-center">
            <span className="font-display italic text-base text-[#e63946] group-hover:text-[#f5f5f5] transition-colors duration-500">
              JR
            </span>
          </span>
        </button>

        {/* 2. Divider */}
        <div className="hidden sm:block w-px h-5 bg-white/10 mx-1" />

        {/* 3. Nav Links */}
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xs sm:text-sm rounded-full px-3.5 sm:px-5 py-1.5 sm:py-2 transition-all duration-500 ease-out cursor-pointer whitespace-nowrap hover:scale-105 ${
                  isActive
                    ? 'text-white bg-white/15 font-medium border border-white/20 shadow-sm'
                    : 'text-[#a3a3a3] hover:text-white hover:bg-white/10 hover:border hover:border-[#e63946]/30 hover:shadow-[0_4px_15px_rgba(230,57,70,0.15)] border border-transparent'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* 4. Language Switcher */}
        <button
          onClick={onLanguageToggle}
          className="inline-flex items-center gap-1.5 text-xs text-[#a3a3a3] hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#e63946]/30 px-3 py-1.5 sm:py-2 rounded-full transition-all duration-500 ease-out hover:scale-105 cursor-pointer ml-1"
          title={lang === 'sr' ? 'Promeni na engleski' : 'Switch to Serbian'}
        >
          <Globe className="w-3.5 h-3.5 text-[#e63946]" />
          <span className="uppercase font-semibold text-[11px] tracking-wide">{lang}</span>
        </button>

        {/* 5. Divider */}
        <div className="w-px h-5 bg-white/10 mx-1 hidden sm:block" />

        {/* 6. CTA / Tasting Button */}
        <button
          onClick={onOpenReservation}
          className="group relative inline-flex items-center justify-center rounded-full text-xs sm:text-sm cursor-pointer overflow-hidden p-[1px] ml-1 transition-all duration-500 ease-out hover:scale-105"
        >
          {/* Gradient backdrop visible on hover */}
          <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative inline-flex items-center gap-2 rounded-full bg-[#141414]/90 group-hover:bg-[#0a0a0a] border border-white/15 group-hover:border-transparent px-4 sm:px-5 py-1.5 sm:py-2 text-[#f5f5f5] transition-all duration-500">
            <Wine className="w-3.5 h-3.5 text-[#e63946]" />
            <span className="hidden md:inline font-medium">{t.btnBook}</span>
            <span className="md:hidden font-medium">{lang === 'sr' ? 'Degustacija' : 'Tasting'}</span>
            <span className="text-xs transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#e63946]">
              ↗
            </span>
          </span>
        </button>
      </div>
    </nav>
  );
}
