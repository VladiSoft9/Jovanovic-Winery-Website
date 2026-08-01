import { motion } from 'motion/react';
import { DICTIONARY } from '../data/wineryData.js';
import { ArrowUpRight, Clock, Calendar, BookOpen } from 'lucide-react';

export default function Journal({ entries, lang, onSelectEntry }) {
  const t = DICTIONARY[lang];

  return (
    <section id="journal" className="bg-[#0a0a0a] py-16 md:py-24 border-t border-[#1f1f1f]">
      <div className="max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#e63946]" />
              <span className="text-xs text-[#878787] uppercase tracking-[0.3em] font-medium">
                {t.journalEyebrow}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#f5f5f5] tracking-tight">
              {lang === 'sr' ? (
                <>Zapisi iz <span className="font-display italic text-[#e63946]">Podruma</span></>
              ) : (
                <>Cellar <span className="font-display italic text-[#e63946]">Chronicles</span></>
              )}
            </h2>
            <p className="text-sm md:text-base text-[#878787] max-w-lg mt-3">
              {t.journalSub}
            </p>
          </div>

          <button
            onClick={() => onSelectEntry(entries[0])}
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-[#1f1f1f] bg-[#141414] hover:bg-[#261416] hover:text-[#f5f5f5] px-6 py-3 text-xs font-semibold text-[#f5f5f5] transition-all duration-500 ease-out hover:border-[#e63946]/30 hover:shadow-[0_4px_20px_rgba(230,57,70,0.1)] group cursor-pointer hover:scale-[1.02]"
          >
            <span>{t.btnViewAllArticles}</span>
            <ArrowUpRight className="w-4 h-4 text-[#e63946]/90 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500 ease-out" />
          </button>
        </motion.div>

        {/* 4 Horizontal Pill Cards */}
        <div className="flex flex-col gap-4 md:gap-5">
          {entries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
              onClick={() => onSelectEntry(entry)}
              className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-4 sm:p-5 md:pr-8 bg-[#141414]/50 hover:bg-[#181113] border border-[#1f1f1f] hover:border-[#e63946]/30 rounded-3xl sm:rounded-full transition-all duration-500 ease-out cursor-pointer shadow-md hover:shadow-[0_8px_20px_rgba(230,57,70,0.08)] hover:-translate-y-1 overflow-hidden"
            >
              {/* Left Crimson Accent Indicator Bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#e63946]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center gap-5 w-full sm:w-auto pl-2">
                {/* Thumbnail Image */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 border border-white/10 group-hover:border-[#e63946]/40 group-hover:ring-2 group-hover:ring-[#e63946]/10 transition-all duration-500 ease-out shadow-md">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-[#e63946]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Title & Category */}
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-[#e63946] font-semibold uppercase tracking-wider mb-1">
                    <BookOpen className="w-3.5 h-3.5 group-hover:scale-105 transition-transform" />
                    <span>{entry.category}</span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-display italic text-[#f5f5f5] group-hover:text-white transition-colors duration-500 line-clamp-1">
                    {entry.title}
                  </h3>
                  <p className="text-xs text-[#878787] group-hover:text-[#a3a3a3] line-clamp-1 max-w-md hidden sm:block mt-0.5 font-light transition-colors duration-500">
                    {entry.summary}
                  </p>
                </div>
              </div>

              {/* Read time, Date & Arrow */}
              <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-[#1f1f1f]">
                <div className="flex items-center gap-4 text-xs text-[#878787]">
                  <span className="inline-flex items-center gap-1 font-mono group-hover:text-[#f5f5f5] transition-colors duration-500">
                    <Clock className="w-3.5 h-3.5 text-[#e63946]/90" />
                    {entry.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono hidden md:inline-flex group-hover:text-[#f5f5f5] transition-colors duration-500">
                    <Calendar className="w-3.5 h-3.5 text-[#878787] group-hover:text-[#e63946]/90 transition-colors duration-500" />
                    {entry.date}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-full bg-[#1f1f1f] group-hover:bg-[#e63946]/90 text-[#f5f5f5] flex items-center justify-center transition-all duration-500 ease-out flex-shrink-0 group-hover:scale-105 group-hover:shadow-[0_4px_15px_rgba(230,57,70,0.2)]">
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
