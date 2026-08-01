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

  // HLS stream video or fallback ambient background video
  const hlsUrl = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: false });
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      return () => hls.destroy();
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hlsUrl;
      video.play().catch(() => {});
    }
  }, []);

  // Cycle role text every 2.2s
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % roles.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [roles.length]);

  // GSAP entrance animation
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
      {/* Background Video & Fallback Image */}
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
        {/* Dark Overlay & Warm Red Accent Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,57,70,0.08)_0%,transparent_70%)]" />
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </div>

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-7xl 2xl:max-w-[1400px] mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="blur-in inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414]/80 border border-white/10 backdrop-blur-md mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e63946] animate-pulse" />
          <span className="text-xs text-[#878787] uppercase tracking-[0.3em] font-semibold">
            {t.heroEyebrow}
          </span>
        </div>

        {/* Main Name */}
        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-[#f5f5f5] mb-6">
          {t.heroTitle}
        </h1>

        {/* Dynamic Role Line */}
        <p className="blur-in text-lg md:text-2xl text-[#878787] font-light mb-6 tracking-wide">
          {lang === 'sr' ? 'Autentična ' : 'Authentic '}
          <span
            key={roleIndex}
            className="font-display italic text-[#e63946] font-normal animate-role-fade-in inline-block border-b border-[#e63946]/30 pb-0.5 mx-1"
          >
            {roles[roleIndex]}
          </span>
          {lang === 'sr' ? ' iz Svrljiga.' : ' from Svrljig.'}
        </p>

        {/* Description */}
        <p className="blur-in text-sm md:text-base text-[#878787] max-w-2xl mb-10 leading-relaxed font-normal">
          {t.heroDesc}
        </p>

        {/* CTA Buttons */}
        <div className="blur-in flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Primary CTA */}
          <button
            onClick={onExploreWines}
            className="group relative inline-flex items-center justify-center rounded-full text-sm font-semibold px-8 py-4 bg-[#f5f5f5] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#f5f5f5] border border-transparent hover:border-[#e63946]/30 transition-all duration-500 ease-out hover:scale-[1.02] cursor-pointer w-full sm:w-auto shadow-xl hover:shadow-[0_6px_25px_rgba(230,57,70,0.15)]"
          >
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1.5px] -z-10" />
            <Wine className="w-4 h-4 mr-2 text-[#9b111e] group-hover:text-[#e63946] group-hover:rotate-6 transition-all duration-500" />
            <span>{t.btnExplore}</span>
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onOpenReservation}
            className="group relative inline-flex items-center justify-center rounded-full text-sm font-semibold px-8 py-4 border border-[#1f1f1f] bg-[#0a0a0a]/90 text-[#f5f5f5] hover:border-[#e63946]/30 hover:bg-[#141414] transition-all duration-500 ease-out hover:scale-[1.02] cursor-pointer w-full sm:w-auto backdrop-blur-md hover:shadow-[0_6px_20px_rgba(230,57,70,0.12)]"
          >
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1.5px] -z-10" />
            <Award className="w-4 h-4 mr-2 text-[#e63946] group-hover:scale-110 transition-transform duration-500" />
            <span>{t.btnBook}</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] text-[#878787] uppercase tracking-[0.25em] font-medium">
          SCROLL
        </span>
        <div className="relative w-px h-10 bg-[#1f1f1f] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[#e63946] animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
