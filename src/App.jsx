import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { WINES_DATA, JOURNAL_ENTRIES, GALLERY_ITEMS } from './data/wineryData.js';

import LoadingScreen from './components/LoadingScreen.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import SelectedWorks from './components/SelectedWorks.jsx';
import Journal from './components/Journal.jsx';
import Explorations from './components/Explorations.jsx';
import Stats from './components/Stats.jsx';
import ContactSection from './components/ContactSection.jsx';
import WineModal from './components/WineModal.jsx';
import HistoryModal from './components/HistoryModal.jsx';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [lang, setLang] = useState('sr');
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedWine, setSelectedWine] = useState(null);
  const [selectedJournal, setSelectedJournal] = useState(null);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'sr' ? 'en' : 'sr'));
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ScrollSpy to highlight active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'vintages', 'journal', 'gallery', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-[#f5f5f5] min-h-screen relative font-sans selection:bg-[#9b111e] selection:text-white overflow-x-hidden">
      {/* 1. Loading Screen Overlay */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} lang={lang} />
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!isLoading && (
        <>
          {/* Floating Pill Navbar */}
          <Navbar
            lang={lang}
            onLanguageToggle={toggleLanguage}
            onOpenReservation={() => scrollToSection('contact')}
            activeSection={activeSection}
          />

          {/* Section 2: Hero */}
          <Hero
            lang={lang}
            onOpenReservation={() => scrollToSection('contact')}
            onExploreWines={() => scrollToSection('vintages')}
          />

          {/* Section 3: Selected Works (Wines Bento Grid) */}
          <SelectedWorks
            wines={WINES_DATA}
            lang={lang}
            onSelectWine={(wine) => setSelectedWine(wine)}
          />

          {/* Section 4: Journal (Heritage & Terroir) */}
          <Journal
            entries={JOURNAL_ENTRIES}
            lang={lang}
            onSelectEntry={(entry) => setSelectedJournal(entry)}
          />

          {/* Section 5: Explorations (Parallax Photo Gallery) */}
          <Explorations
            items={GALLERY_ITEMS}
            lang={lang}
          />

          {/* Section 6: Winery Stats */}
          <Stats lang={lang} />

          {/* Section 7: Contact & Guided Tasting Booking & GSAP Marquee Footer */}
          <ContactSection lang={lang} />

          {/* Modals */}
          <WineModal
            wine={selectedWine}
            lang={lang}
            onClose={() => setSelectedWine(null)}
            onOpenTasting={() => scrollToSection('contact')}
          />

          <HistoryModal
            entry={selectedJournal}
            lang={lang}
            onClose={() => setSelectedJournal(null)}
          />
        </>
      )}
    </div>
  );
}
