import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DICTIONARY } from '../data/wineryData.js';
import { Camera, MapPin, X, Maximize2 } from 'lucide-react';

export default function Explorations({ items, lang }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const t = DICTIONARY[lang];

  return (
    <section id="gallery" className="bg-[#0a0a0a] py-20 md:py-28 relative overflow-hidden border-t border-[#1a1a1a]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#991b1b]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-white/10 mb-4">
            <Camera className="w-3.5 h-3.5 text-[#dc2626]" />
            <span className="text-xs text-[#a3a3a3] uppercase tracking-[0.3em] font-semibold">
              {t.explorationsEyebrow}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#f5f5f5] tracking-tight mb-4">
            {lang === 'sr' ? (
              <>Atmosfera <span className="font-display italic text-[#dc2626]">Vinograda</span></>
            ) : (
              <>Vineyard <span className="font-display italic text-[#dc2626]">Atmosphere</span></>
            )}
          </h2>
          <p className="text-sm md:text-base text-[#a3a3a3] font-normal leading-relaxed">
            {t.explorationsSub}
          </p>
        </motion.div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedImage(item);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={item.title}
              className={`group relative bg-[#141414] border border-white/10 p-4 rounded-3xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-[#dc2626]/40 cursor-pointer shadow-lg hover:shadow-[0_12px_28px_rgba(153,27,27,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626] ${item.rotation}`}
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-[#0a0a0a]">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-[#0a0a0a]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#991b1b] to-[#dc2626] text-[#f5f5f5] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Title & Location */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-display italic text-[#f5f5f5] group-hover:text-[#dc2626] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#a3a3a3] font-normal mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                <span className="inline-flex items-center gap-1 text-[11px] text-[#a3a3a3] font-mono bg-[#0a0a0a] px-2.5 py-1 rounded-full border border-white/10">
                  <MapPin className="w-3 h-3 text-[#dc2626]" />
                  {item.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#141414] border border-white/15 rounded-3xl overflow-hidden p-4 sm:p-6 shadow-2xl cursor-default"
            >
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Zatvori galeriju"
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-[#0a0a0a]/80 text-[#f5f5f5] hover:bg-[#dc2626] flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-black">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-2">
                <div>
                  <span className="text-xs text-[#dc2626] uppercase tracking-[0.2em] font-semibold">
                    {selectedImage.location}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display italic text-[#f5f5f5]">
                    {selectedImage.title}
                  </h3>
                  <p className="text-sm text-[#a3a3a3] mt-1">
                    {selectedImage.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
