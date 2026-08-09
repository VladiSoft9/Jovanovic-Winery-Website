import { motion } from 'motion/react';
import { DICTIONARY } from '../data/wineryData.js';
import { ArrowUpRight, Clock, Calendar, BookOpen } from 'lucide-react';

export default function Journal({ entries, lang, onSelectEntry }) {
  const t = DICTIONARY[lang];

  return (
    <section id="journal" className="bg-[#0a0a0a] py-20 md:py-28 border-t border-[#1a1a1a]">
      <div className="max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gradient-to-r from-[#991b1b] to-[#dc2626]" />
              <span className="text-xs text-[#a3a3a3] uppercase tracking-[0.3em] font-semibold">
                {t.journalEyebrow}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#f5f5f5] tracking-tight">
              {lang === 'sr' ? (
                <>Zapisi iz <span className="font-display italic text-[#dc2626]">Podruma</span></>
              ) : (
                <>Cellar <span className="font-display italic text-[#dc2626]">Chronicles</span></>
              )}
            </h2>
            <p className="text-sm md:text-base text-[#a3a3a3] max-w-lg mt-3 leading-relaxed">
              {t.journalSub}
            </p>
          </div>

          <button
            onClick={() => onSelectEntry(entries[0])}
            aria-label={t.btnViewAllArticles}
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#141414] hover:bg-[#1a0c0e] hover:text-[#f5f5f5] px-6 py-3 text-xs font-semibold text-[#f5f5f5] transition-all duration-500 ease-out hover:border-[#dc2626]/40 hover:shadow-[0_4px_24px_rgba(153,27,27,0.25)] group cursor-pointer hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626]"
          >
            <span>{t.btnViewAllArticles}</span>
            <ArrowUpRight className="w-4 h-4 text-[#dc2626] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500 ease-out" />
          </button>
        </motion.div>

        {/* Dynamic Journal Entries List */}
        <div className="flex flex-col gap-4">
          {entries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.15 }}
              onClick={() => onSelectEntry(entry)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectEntry(entry);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={entry.title}
              className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-4 sm:p-5 md:px-7 bg-[#141414] hover:bg-[#191012] border border-white/10 hover:border-[#dc2626]/40 rounded-2xl sm:rounded-full transition-all duration-500 ease-out cursor-pointer shadow-md hover:shadow-[0_12px_28px_rgba(153,27,27,0.22)] hover:-translate-y-1.5 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626]"
            >
              {/* Left Accent Bar on Hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#991b1b] to-[#dc2626] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center gap-5 w-full sm:w-auto pl-2">
                {/* Thumbnail Image */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 border border-white/10 group-hover:border-[#dc2626]/50 group-hover:ring-2 group-hover:ring-[#dc2626]/20 transition-all duration-500 ease-out shadow-md">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out brightness-95"
                  />
                  <div className="absolute inset-0 bg-[#991b1b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Title, Category & Summary */}
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-[#dc2626] font-semibold uppercase tracking-wider mb-1">
                    <BookOpen className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-300" />
                    <span>{entry.category}</span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-display italic text-[#f5f5f5] group-hover:text-white transition-colors duration-300 line-clamp-1">
                    {entry.title}
                  </h3>
                  <p className="text-xs text-[#a3a3a3] group-hover:text-[#c0c0c0] line-clamp-1 max-w-lg hidden sm:block mt-0.5 font-normal leading-relaxed transition-colors duration-300">
                    {entry.summary}
                  </p>
                </div>
              </div>

              {/* Read time, Date & Action Arrow */}
              <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-white/10">
                <div className="flex items-center gap-4 text-xs text-[#a3a3a3]">
                  <span className="inline-flex items-center gap-1 font-mono group-hover:text-[#f5f5f5] transition-colors duration-300">
                    <Clock className="w-3.5 h-3.5 text-[#dc2626]" />
                    {entry.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono hidden md:inline-flex group-hover:text-[#f5f5f5] transition-colors duration-300">
                    <Calendar className="w-3.5 h-3.5 text-[#a3a3a3] group-hover:text-[#dc2626] transition-colors duration-300" />
                    {entry.date}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#dc2626] group-hover:border-[#dc2626] text-white flex items-center justify-center transition-all duration-500 ease-out flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_4px_16px_rgba(220,38,38,0.4)]">
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500 ease-out" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
