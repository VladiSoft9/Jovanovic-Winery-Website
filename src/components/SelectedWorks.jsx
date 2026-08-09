import { motion } from 'motion/react';
import { DICTIONARY } from '../data/wineryData.js';
import { Star, ArrowUpRight } from 'lucide-react';

export default function SelectedWorks({ wines, lang, onSelectWine }) {
  const t = DICTIONARY[lang];

  return (
    <section id="vintages" className="bg-[#0a0a0a] py-20 md:py-28 border-t border-[#1a1a1a]">
      <div className="max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        {/* Header Section */}
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
                {t.selectedWorksEyebrow}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#f5f5f5] tracking-tight">
              {lang === 'sr' ? (
                <>Naša Vrhunska <span className="font-display italic text-[#dc2626]">Vina</span></>
              ) : (
                <>Featured <span className="font-display italic text-[#dc2626]">Vintages</span></>
              )}
            </h2>
            <p className="text-sm md:text-base text-[#a3a3a3] max-w-lg mt-3 leading-relaxed">
              {t.selectedWorksSub}
            </p>
          </div>

          <button
            onClick={() => onSelectWine(wines[0])}
            aria-label={t.btnViewAllWines}
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#141414] hover:bg-[#1a0c0e] hover:text-[#f5f5f5] px-6 py-3 text-xs font-semibold text-[#f5f5f5] transition-all duration-500 ease-out hover:border-[#dc2626]/40 hover:shadow-[0_4px_24px_rgba(153,27,27,0.25)] group cursor-pointer hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626]"
          >
            <span>{t.btnViewAllWines}</span>
            <ArrowUpRight className="w-4 h-4 text-[#dc2626] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500 ease-out" />
          </button>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {wines.map((wine, index) => (
            <motion.div
              key={wine.id}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.15 }}
              onClick={() => onSelectWine(wine)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectWine(wine);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`${wine.name} - ${wine.year}`}
              className={`${wine.spanCols} group relative rounded-2xl overflow-hidden bg-[#141414] border border-white/10 hover:border-[#dc2626]/40 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 shadow-xl hover:shadow-[0_16px_40px_rgba(153,27,27,0.22)] flex flex-col justify-end min-h-[400px] md:min-h-[460px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626]`}
            >
              {/* Background Image & Soft Vignette */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={wine.image}
                  alt={wine.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] brightness-95 contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent group-hover:from-[#0a0a0a]/90 transition-colors duration-500" />
              </div>

              {/* Top Badges */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10 pointer-events-none">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0a0a0a]/85 text-[#f5f5f5] border border-white/10 backdrop-blur-md group-hover:border-[#dc2626]/30 transition-colors duration-500">
                  <span className={`w-2 h-2 rounded-full ${wine.type === 'rose' ? 'bg-[#dc2626]' : 'bg-[#991b1b]'}`} />
                  {wine.year} • {wine.type.toUpperCase()}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#0a0a0a]/85 text-[#f5f5f5] border border-white/10 backdrop-blur-md group-hover:border-[#dc2626]/30 transition-colors duration-500">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 group-hover:scale-110 transition-transform duration-500" />
                  {wine.rating}
                </span>
              </div>

              {/* Single Distilled Card Content */}
              <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end">
                <p className="text-xs text-[#dc2626] uppercase tracking-[0.2em] font-semibold mb-1">
                  {wine.grapeVariety}
                </p>

                <h3 className="text-2xl md:text-3xl font-display italic text-[#f5f5f5] mb-2 group-hover:text-white transition-colors duration-300">
                  {wine.name}
                </h3>

                <p className="text-xs md:text-sm text-[#a3a3a3] line-clamp-2 leading-relaxed mb-4">
                  {wine.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono text-[#f5f5f5]/80">
                  <span>{lang === 'sr' ? 'Alk.' : 'Alc.'} {wine.alcohol}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-[#dc2626] font-bold text-sm md:text-base">{wine.price}</span>
                    <span className="w-7 h-7 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#991b1b] group-hover:border-[#dc2626] text-white flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
