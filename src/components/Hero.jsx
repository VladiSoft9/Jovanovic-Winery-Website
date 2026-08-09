import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Hls from 'hls.js';
import { DICTIONARY, heroBgImg } from '../data/wineryData.js';
import { Award, Wine } from 'lucide-react';

export default function Hero({ lang, onOpenReservation, onExploreWines }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [roleIndex, setWordIndex] = useState(0);

  const t = DICTIONARY[lang];
  const roles = t.roles;

  const hlsUrl = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: false });
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => { });
      });
      return () => hls.destroy();
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hlsUrl;
      video.play().catch(() => { });
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % roles.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.name-reveal',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.blur-in',
        { opacity: 0, filter: 'blur(10px)', y: 20 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.0, delay: 0.3, stagger: 0.1, ease: 'power3.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#0a0a0a] text-center pt-24 pb-16 px-6"
    >
      {/* Background Video & Background Vignette */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={heroBgImg}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 opacity-35 filter brightness-90 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(153,27,27,0.12)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </div>

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-7xl 2xl:max-w-[1400px] mx-auto flex flex-col items-center">
        {/* Eyebrow Badge */}
        <div className="blur-in inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414]/80 border border-white/10 backdrop-blur-md mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] animate-pulse" />
          <span className="text-xs text-[#a3a3a3] uppercase tracking-[0.3em] font-semibold">
            {t.heroEyebrow}
          </span>
        </div>

        {/* Main Name */}
        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-[#f5f5f5] mb-6">
          {t.heroTitle}
        </h1>

        {/* Dynamic Role Line */}
        <p className="blur-in text-lg md:text-2xl text-[#a3a3a3] font-light mb-6 tracking-wide">
          {lang === 'sr' ? roleIndex === 1 ? 'Autentičan ' : 'Autentična '
            : 'Authentic '}
          <span
            key={roleIndex}
            className="font-display italic text-[#dc2626] font-normal animate-role-fade-in inline-block border-b border-[#dc2626]/30 pb-0.5 mx-1"
          >
            {roles[roleIndex]}
          </span>
          {lang === 'sr' ? ' iz Svrljiga.' : ' from Svrljig.'}
        </p>

        {/* Description */}
        <p className="blur-in text-sm md:text-base text-[#a3a3a3] max-w-2xl mb-10 leading-relaxed font-normal">
          {t.heroDesc}
        </p>

        {/* CTA Buttons */}
        <div className="blur-in flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Primary CTA */}
          <button
            onClick={onExploreWines}
            aria-label={t.btnExplore}
            className="group relative inline-flex items-center justify-center rounded-full text-sm font-semibold px-8 py-4 bg-gradient-to-r from-[#991b1b] to-[#dc2626] text-white hover:scale-[1.03] transition-all duration-500 ease-out cursor-pointer w-full sm:w-auto shadow-xl hover:shadow-[0_6px_30px_rgba(220,38,38,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626]"
          >
            <Wine className="w-4 h-4 mr-2 text-white group-hover:rotate-12 transition-transform duration-300" />
            <span>{t.btnExplore}</span>
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onOpenReservation}
            aria-label={t.btnBook}
            className="group relative inline-flex items-center justify-center rounded-full text-sm font-semibold px-8 py-4 border border-white/10 bg-[#141414] text-[#f5f5f5] hover:border-[#dc2626]/40 hover:bg-[#1a0c0e] transition-all duration-500 ease-out hover:scale-[1.03] cursor-pointer w-full sm:w-auto backdrop-blur-md hover:shadow-[0_6px_24px_rgba(153,27,27,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626]"
          >
            <Award className="w-4 h-4 mr-2 text-[#dc2626] group-hover:scale-110 transition-transform duration-300" />
            <span>{t.btnBook}</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] text-[#a3a3a3] uppercase tracking-[0.25em] font-medium">
          SCROLL
        </span>
        <div className="relative w-px h-10 bg-white/10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[#dc2626] animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
