import { motion } from 'motion/react';
import { WINERY_STATS } from '../data/wineryData.js';

export default function Stats({ lang }) {
  return (
    <section className="bg-[#0a0a0a] py-16 md:py-24 border-t border-[#1f1f1f]">
      <div className="max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {WINERY_STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-3xl bg-[#141414]/50 border border-[#1f1f1f] hover:border-[#e63946]/20 transition-all duration-500 ease-out hover:-translate-y-1 shadow-md hover:shadow-[0_8px_20px_rgba(230,57,70,0.06)]"
            >
              {/* Stat number */}
              <div className="text-5xl md:text-6xl font-display italic text-[#f5f5f5] group-hover:text-[#e63946] transition-colors mb-2">
                {stat.number}
              </div>

              {/* Stat title */}
              <h3 className="text-base font-semibold text-[#f5f5f5] mb-2 tracking-tight">
                {lang === 'sr' ? stat.labelSR : stat.labelEN}
              </h3>

              {/* Stat details */}
              <p className="text-xs text-[#878787] font-light leading-relaxed">
                {lang === 'sr' ? stat.descSR : stat.descEN}
              </p>

              {/* Accent subtle bar */}
              <div className="mt-6 w-12 h-0.5 bg-[#1f1f1f] group-hover:w-full group-hover:bg-[#e63946] transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
