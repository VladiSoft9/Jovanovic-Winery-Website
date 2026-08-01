import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function LoadingScreen({ onComplete, lang }) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  const words = lang === 'sr' 
    ? ['Tradicija', 'Svrljig', 'Strast', 'Jovanović']
    : ['Heritage', 'Svrljig', 'Passion', 'Jovanović'];

  useEffect(() => {
    let startTime = null;
    const duration = 2700; // 2700ms

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * 100);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setTimeout(() => {
          onComplete();
        }, 400);
      }
    };

    const animFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrame);
  }, [onComplete]);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 900);
    return () => clearInterval(wordInterval);
  }, [words.length]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }}
      className="fixed inset-0 z-[9999] flex flex-col justify-between bg-[#0a0a0a] p-8 md:p-12 select-none overflow-hidden"
    >
      {/* Top Left Label */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex items-center gap-3"
      >
        <span className="inline-block w-2 h-2 rounded-full bg-[#e63946] animate-pulse" />
        <span className="text-xs text-[#878787] uppercase tracking-[0.3em] font-medium">
          VINARIJA JOVANOVIĆ • SVRLJIG
        </span>
      </motion.div>

      {/* Center Rotating Words */}
      <div className="flex items-center justify-center my-auto min-h-[140px]">
        <AnimatePresence mode="wait">
          <motion.h2
            key={wordIndex}
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -25, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-[#f5f5f5]/90 text-center tracking-tight"
          >
            {words[wordIndex]}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* Bottom Counter & Label */}
      <div className="flex items-end justify-between w-full">
        <div className="hidden sm:block">
          <p className="text-xs text-[#878787] uppercase tracking-[0.2em]">EST. 1994</p>
          <p className="text-xs text-[#f5f5f5]/60 font-serif italic">Svrljiški Okrug, Serbia</p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display text-[#f5f5f5] tabular-nums leading-none font-normal"
        >
          {String(count).padStart(3, '0')}
        </motion.div>
      </div>

      {/* Bottom Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1f1f1f]/50 overflow-hidden">
        <div
          className="h-full accent-gradient transition-all duration-75 ease-out origin-left"
          style={{
            transform: `scaleX(${count / 100})`,
            boxShadow: '0 0 14px rgba(230, 57, 70, 0.45)',
          }}
        />
      </div>
    </motion.div>
  );
}
