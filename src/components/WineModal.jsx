import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, Wine, Thermometer, Utensils, Star, CheckCircle, Send } from 'lucide-react';

export default function WineModal({ wine, lang, onClose, onOpenTasting }) {
  const [inquirySent, setInquirySent] = useState(false);

  if (!wine) return null;

  const handleOrderInquiry = (e) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
    }, 5000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl w-full bg-[#141414] border border-white/15 rounded-3xl overflow-hidden shadow-2xl my-auto max-h-[90vh] flex flex-col md:flex-row"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Zatvori prozor"
            className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-[#0a0a0a]/80 text-[#f5f5f5] hover:bg-[#dc2626] flex items-center justify-center transition-colors cursor-pointer border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626]"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Column: Wine Image & Badges */}
          <div className="md:w-5/12 relative bg-[#0a0a0a] min-h-[320px] md:min-h-full flex items-center justify-center p-8 overflow-hidden">
            <img
              src={wine.image}
              alt={wine.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover max-h-[420px] rounded-2xl brightness-95 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-[#f5f5f5] font-mono z-10">
              <span className="bg-[#141414]/90 px-3 py-1 rounded-full border border-white/10">
                {lang === 'sr' ? 'BERBA' : 'VINTAGE'} {wine.year}
              </span>
              <span className="bg-gradient-to-r from-[#991b1b] to-[#dc2626] text-white px-3.5 py-1 rounded-full font-semibold shadow-md">
                {wine.price}
              </span>
            </div>
          </div>

          {/* Right Column: Deep Details & Sensory Profile */}
          <div className="md:w-7/12 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#dc2626] font-semibold uppercase tracking-widest mb-1">
                <Wine className="w-3.5 h-3.5" />
                <span>{wine.subtitle}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display italic text-[#f5f5f5] mb-2">
                {wine.name}
              </h2>

              <div className="flex items-center gap-3 text-xs text-[#a3a3a3] mb-6 font-mono">
                <span>{wine.grapeVariety}</span>
                <span>•</span>
                <span>{lang === 'sr' ? 'Alk.' : 'Alc.'} {wine.alcohol}</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-amber-400 font-semibold">
                  <Star className="w-3 h-3 fill-amber-400" /> {wine.rating}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#a3a3a3] leading-relaxed mb-6 font-normal">
                {wine.description}
              </p>

              {/* Sensory Tasting Notes */}
              {wine.tastingNotes && (
                <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 mb-6 space-y-2 text-xs text-[#f5f5f5]/90">
                  <p className="text-[#a3a3a3] font-semibold uppercase tracking-wider text-[11px] mb-2 border-b border-white/10 pb-1">
                    {lang === 'sr' ? 'Profil Ukusa i Arome' : 'Flavor & Aroma Profile'}
                  </p>
                  <p><strong className="text-[#dc2626]">Aroma:</strong> {wine.tastingNotes.aroma}</p>
                  <p><strong className="text-[#dc2626]">{lang === 'sr' ? 'Ukus:' : 'Taste:'}</strong> {wine.tastingNotes.taste}</p>
                  <p><strong className="text-[#dc2626]">{lang === 'sr' ? 'Završnica:' : 'Finish:'}</strong> {wine.tastingNotes.finish}</p>
                </div>
              )}

              {/* Grid: Temperature & Food Pairing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-[#0a0a0a] p-3.5 rounded-xl border border-white/10 flex items-start gap-3">
                  <Thermometer className="w-4 h-4 text-[#dc2626] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-[#a3a3a3] uppercase font-semibold block">
                      {lang === 'sr' ? 'Temperatura Služenja' : 'Serving Temp'}
                    </span>
                    <span className="text-xs text-[#f5f5f5] font-semibold">{wine.servingTemp}</span>
                  </div>
                </div>

                <div className="bg-[#0a0a0a] p-3.5 rounded-xl border border-white/10 flex items-start gap-3">
                  <Utensils className="w-4 h-4 text-[#dc2626] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-[#a3a3a3] uppercase font-semibold block">
                      {lang === 'sr' ? 'Preporučeno uz hranu' : 'Food Pairing'}
                    </span>
                    <span className="text-xs text-[#f5f5f5] font-normal line-clamp-1">{wine.foodPairing.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Awards */}
              {wine.awards && wine.awards.length > 0 && (
                <div className="mb-6">
                  <span className="text-[11px] text-[#a3a3a3] uppercase tracking-wider font-semibold block mb-2">
                    {lang === 'sr' ? 'Priznanja & Medalje' : 'Awards & Honors'}
                  </span>
                  <div className="space-y-1">
                    {wine.awards.map((award, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-amber-300">
                        <Award className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{award}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenTasting();
                }}
                className="w-full sm:w-1/2 py-3 px-4 rounded-full text-xs font-semibold bg-gradient-to-r from-[#991b1b] to-[#dc2626] text-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626]"
              >
                <Wine className="w-4 h-4" />
                <span>{lang === 'sr' ? 'Rezervišite Degustaciju' : 'Book Tasting Flight'}</span>
              </button>

              <button
                onClick={handleOrderInquiry}
                className="w-full sm:w-1/2 py-3 px-4 rounded-full text-xs font-semibold bg-[#0a0a0a] hover:bg-[#1f1f1f] text-[#f5f5f5] border border-white/10 hover:border-[#dc2626]/40 transition-colors flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626]"
              >
                <Send className="w-4 h-4 text-[#dc2626]" />
                <span>{lang === 'sr' ? 'Upit za Porudžbinu Boca' : 'Bottle Order Inquiry'}</span>
              </button>
            </div>

            {inquirySent && (
              <div className="mt-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs text-center flex items-center justify-center gap-2 animate-fade-in">
                <CheckCircle className="w-4 h-4" />
                <span>
                  {lang === 'sr' 
                    ? `Upit za ${wine.name} je uspešno poslat! Stupićemo u kontakt uskoro.`
                    : `Inquiry for ${wine.name} sent successfully! We will contact you soon.`}
                </span>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
