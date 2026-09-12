import { useState, useEffect } from 'react';
import { DICTIONARY } from '../data/wineryData.js';
import { scrollToSection } from '../utils/scrollToSection.js';
import { Wine, Globe, Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar({ lang, onLanguageToggle, onOpenReservation, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = DICTIONARY[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      if (window.scrollY > 100) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  const navItems = [
    { id: 'hero', label: t.navHome },
    { id: 'vintages', label: t.navWines },
    { id: 'journal', label: t.navStory },
    { id: 'gallery', label: t.navGallery },
    { id: 'contact', label: t.navContact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-3 sm:pt-4 md:pt-6 px-3 sm:px-4 pointer-events-none">
      {/* Primary Floating Nav Bar */}
      <div
        className={`group pointer-events-auto relative flex items-center justify-between gap-2 sm:gap-3 rounded-full px-3.5 sm:px-6 py-2 sm:py-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] max-w-[calc(100vw-1.5rem)] sm:max-w-none ${scrolled
          ? 'bg-[#0a0a0a]/30 backdrop-blur-[6px] border border-white/10 opacity-70 hover:opacity-100 hover:bg-[#0a0a0a]/95 hover:backdrop-blur-xl hover:border-white/20 shadow-lg scale-[0.99]'
          : 'bg-[#141414]/90 backdrop-blur-md border border-white/15 shadow-xl opacity-100 scale-100'
          }`}
      >
        {/* 1. Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="group relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden transition-all duration-500 ease-out hover:scale-110 cursor-pointer flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626]"
          title="Vinarija Jovanović"
          aria-label="Vinarija Jovanović"
        >
          {/* Animated gradient ring on hover */}
          <span className="absolute inset-0 bg-gradient-to-r from-[#991b1b] to-[#dc2626] group-hover:rotate-180 transition-transform duration-700" />
          <span className="absolute inset-[1.5px] rounded-full bg-[#0a0a0a] flex items-center justify-center">
            <span className="font-display italic text-sm sm:text-base text-[#dc2626] group-hover:text-[#f5f5f5] transition-colors duration-500">
              VJ
            </span>
          </span>
        </button>

        {/* 2. Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1 sm:gap-1.5">
          <div className="w-px h-5 bg-white/10 mx-1" />
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs sm:text-sm rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 transition-all duration-500 ease-out cursor-pointer whitespace-nowrap hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626] ${isActive
                  ? 'text-white bg-white/15 font-medium border border-white/20 shadow-sm'
                  : 'text-[#a3a3a3] hover:text-white hover:bg-white/10 hover:border hover:border-[#dc2626]/30 hover:shadow-[0_4px_15px_rgba(153,27,27,0.2)] border border-transparent'
                  }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* 3. Language Switcher */}
          <button
            onClick={onLanguageToggle}
            className="inline-flex items-center gap-1 text-xs text-[#a3a3a3] hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#dc2626]/30 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626]"
            title={lang === 'sr' ? 'Promeni na engleski' : 'Switch to Serbian'}
            aria-label={lang === 'sr' ? 'Promeni na engleski' : 'Switch to Serbian'}
          >
            <Globe className="w-3.5 h-3.5 text-[#dc2626]" />
            <span className="uppercase font-semibold text-[10px] sm:text-[11px] tracking-wide">{lang}</span>
          </button>

          {/* 4. CTA Tasting Button */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenReservation();
            }}
            className="group relative inline-flex items-center justify-center rounded-full text-xs sm:text-sm cursor-pointer overflow-hidden p-[1px] transition-all duration-500 ease-out hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626]"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#991b1b] to-[#dc2626] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#141414]/90 group-hover:bg-[#0a0a0a] border border-white/15 group-hover:border-transparent px-3 sm:px-4 py-1.5 sm:py-2 text-[#f5f5f5] transition-all duration-500">
              <Wine className="w-3.5 h-3.5 text-[#dc2626] group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xs sm:text-sm font-medium">{lang === 'sr' ? 'Degustacija' : 'Tasting'}</span>
              <span className="text-xs text-[#dc2626] hidden sm:inline">↗</span>
            </span>
          </button>

          {/* 5. Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-[#f5f5f5] transition-colors duration-300 ml-0.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 text-[#dc2626]" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto mt-2 w-full max-w-[calc(100vw-2rem)] sm:max-w-md bg-[#121212]/95 border border-white/15 rounded-3xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur-2xl animate-in fade-in slide-in-from-top-3 duration-300">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between text-left text-sm px-4 py-3 rounded-2xl transition-all duration-300 cursor-pointer ${isActive
                    ? 'bg-white/10 text-white font-medium border border-white/15'
                    : 'text-[#a3a3a3] hover:text-white hover:bg-white/5'
                    }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'text-[#dc2626]' : 'opacity-40'}`} />
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#a3a3a3] px-2">
            <span>Vinarija Jovanović • Svrljig</span>
            <span className="text-[#dc2626] font-medium">{t.cellarStatus ? 'Otvoreno' : 'Open'}</span>
          </div>
        </div>
      )}
    </nav>
  );
}