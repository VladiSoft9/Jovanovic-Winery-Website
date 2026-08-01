import { motion } from 'motion/react';
import { DICTIONARY } from '../data/wineryData.js';
import { Wine, Star, ArrowUpRight } from 'lucide-react';

export default function SelectedWorks({ wines, lang, onSelectWine }) {
  const t = DICTIONARY[lang];

  return (
    <section id="vintages" className="bg-[#0a0a0a] py-16 md:py-24 border-t border-[#1f1f1f]">
      <div className="max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        {/* Header Section with Framer Motion */}
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
                {t.selectedWorksEyebrow}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#f5f5f5] tracking-tight">
              {lang === 'sr' ? (
                <>Naša Vrhunska <span className="font-display italic text-[#e63946]">Vina</span></>
              ) : (
                <>Featured <span className="font-display italic text-[#e63946]">Vintages</span></>
              )}
            </h2>
            <p className="text-sm md:text-base text-[#878787] max-w-lg mt-3">
              {t.selectedWorksSub}
            </p>
          </div>

          <button
            onClick={() => onSelectWine(wines[0])}
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-[#1f1f1f] bg-[#141414] hover:bg-[#261416] hover:text-[#f5f5f5] px-6 py-3 text-xs font-semibold text-[#f5f5f5] transition-all duration-500 ease-out hover:border-[#e63946]/30 hover:shadow-[0_4px_20px_rgba(230,57,70,0.1)] group cursor-pointer hover:scale-[1.02]"
          >
            <span>{t.btnViewAllWines}</span>
            <ArrowUpRight className="w-4 h-4 text-[#e63946]/90 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500 ease-out" />
          </button>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {wines.map((wine, index) => (
            <motion.div
              key={wine.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: false, amount: 0.2 }}
              onClick={() => onSelectWine(wine)}
              className={`${wine.spanCols} group relative rounded-3xl overflow-hidden bg-[#141414] border border-[#1f1f1f] hover:border-[#e63946]/30 cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 shadow-xl hover:shadow-[0_12px_30px_rgba(230,57,70,0.08)] flex flex-col justify-end min-h-[380px] md:min-h-[440px]`}
            >
              {/* Card Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={wine.image}
                  alt={wine.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] brightness-90 contrast-105"
                />
                {/* Halftone texture overlay */}
                <div
                  className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                    backgroundSize: '4px 4px',
                  }}
                />
                {/* Gradient vignette & crimson glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent group-hover:from-[#0a0a0a]/90 transition-colors duration-700 ease-out" />
                <div className="absolute inset-0 bg-[#e63946]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none" />
              </div>

              {/* Badge Pills on Card */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0a0a0a]/80 text-[#f5f5f5] border border-white/10 backdrop-blur-md group-hover:border-[#e63946]/20 transition-colors duration-500">
                  <span className={`w-2 h-2 rounded-full ${wine.type === 'rose' ? 'bg-[#e63946]' : 'bg-[#7A1C1C]'}`} />
                  {wine.year} • {wine.type.toUpperCase()}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#0a0a0a]/80 text-[#f5f5f5] border border-white/10 backdrop-blur-md group-hover:border-[#e63946]/20 transition-colors duration-500">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 group-hover:scale-110 transition-transform duration-500" />
                  {wine.rating}
                </span>
              </div>

              {/* Default Card Bottom Info */}
              <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end transition-all duration-500 ease-out group-hover:opacity-10 group-hover:translate-y-2">
                <p className="text-xs text-[#e63946]/90 uppercase tracking-[0.2em] font-medium mb-1">
                  {wine.grapeVariety}
                </p>
                <h3 className="text-2xl md:text-3xl font-display italic text-[#f5f5f5] mb-2 group-hover:text-white transition-colors duration-500">
                  {wine.name}
                </h3>
                <p className="text-xs md:text-sm text-[#878787] line-clamp-2">
                  {wine.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-[#f5f5f5]/80 font-mono">
                  <span>Alk. {wine.alcohol}</span>
                  <span className="text-[#e63946] font-bold text-sm">{wine.price}</span>
                </div>
              </div>

              {/* Hover Full Screen Overlay & Label */}
              <div className="absolute inset-0 z-20 bg-[#0a0a0a]/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out p-8 flex flex-col justify-between border border-transparent group-hover:border-[#e63946]/20 rounded-3xl">
                <div>
                  <span className="text-xs text-[#e63946] uppercase tracking-[0.25em] font-semibold">
                    {wine.subtitle}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-display italic text-[#f5f5f5] mt-2 mb-4">
                    {wine.name}
                  </h3>
                  <p className="text-sm text-[#878787] leading-relaxed mb-4">
                    {wine.description}
                  </p>
                  {wine.tastingNotes && (
                    <div className="text-xs text-[#f5f5f5]/90 space-y-1.5 border-l-2 border-[#e63946] pl-3 py-1.5 bg-[#141414]/70 rounded-r-lg shadow-inner">
                      <p><strong className="text-[#e63946]">Aroma:</strong> {wine.tastingNotes.aroma}</p>
                      <p><strong className="text-[#e63946]">Ukus:</strong> {wine.tastingNotes.taste}</p>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#1f1f1f]">
                  <div className="inline-flex items-center gap-2 rounded-full accent-gradient text-white px-5 py-2.5 text-xs font-bold shadow-lg hover:scale-105 transition-transform">
                    <Wine className="w-4 h-4 text-white animate-bounce" />
                    <span>Otkrijte Više — <em className="font-display font-normal">{wine.name}</em></span>
                  </div>
                  <span className="text-xs text-[#878787] font-mono font-semibold">{wine.volume}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
