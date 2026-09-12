import { motion } from 'motion/react';
import { X, Clock, Calendar, BookOpen, Share2 } from 'lucide-react';

export default function HistoryModal({ entry, lang, onClose }) {
  if (!entry) return null;

  return (
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
          className="relative max-w-3xl w-full bg-[#141414] border border-white/15 rounded-3xl overflow-hidden shadow-2xl my-auto max-h-[90vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Zatvori priču"
            className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-[#0a0a0a]/80 text-[#f5f5f5] hover:bg-[#dc2626] flex items-center justify-center transition-colors cursor-pointer border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626]"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Image */}
          <div className="relative h-64 sm:h-80 w-full bg-[#0a0a0a] flex-shrink-0 overflow-hidden">
            <img
              src={entry.image}
              alt={entry.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#991b1b] to-[#dc2626] text-white uppercase tracking-wider mb-2 shadow-md">
                <BookOpen className="w-3 h-3" />
                {entry.category}
              </span>
              <h2 className="text-2xl sm:text-4xl font-display italic text-[#f5f5f5]">
                {entry.title}
              </h2>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div className="flex items-center gap-6 text-xs text-[#a3a3a3] border-b border-white/10 pb-4 font-mono">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#dc2626]" /> {entry.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#a3a3a3]" /> {entry.date}
              </span>
              <span className="text-[#dc2626] font-semibold ml-auto">
                VINARIJA JOVANOVIĆ • SVRLJIG
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#f5f5f5] font-serif italic border-l-2 border-[#dc2626] pl-4 py-1">
              "{entry.summary}"
            </p>

            <div className="text-xs sm:text-sm text-[#a3a3a3] font-normal leading-relaxed whitespace-pre-line space-y-4">
              {entry.content}
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#a3a3a3]">
              <span>Podrum Jovanović • Svrljiške Planine</span>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: entry.title, text: entry.summary, url: window.location.href }).catch(() => { });
                  }
                }}
                className="inline-flex items-center gap-1 hover:text-[#dc2626] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626] rounded-md px-1"
              >
                <Share2 className="w-3.5 h-3.5" /> Podeli priču
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
  );
}
