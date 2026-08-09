import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { DICTIONARY, heroBgImg } from '../data/wineryData.js';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Sparkles, Check, ArrowUpRight, Wine } from 'lucide-react';

export default function ContactSection({ lang }) {
  const marqueeRef = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: 2,
    winePreference: 'rose-and-red',
    message: ''
  });

  const t = DICTIONARY[lang];

  // GSAP marquee continuous loop
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const halfWidth = el.scrollWidth / 2;
    if (!halfWidth) return;

    const pixelsPerSecond = 35;
    const duration = halfWidth / pixelsPerSecond;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        x: -halfWidth,
        duration: duration,
        ease: 'none',
        repeat: -1
      });
    });

    return () => ctx.revert();
  }, [lang]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        guests: 2,
        winePreference: 'rose-and-red',
        message: ''
      });
    }, 6000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterSubscribed(false);
      setNewsletterEmail('');
    }, 5000);
  };

  const marqueeBlock = `${t.footerMarquee} ✦ `.repeat(12);

  return (
    <footer id="contact" className="bg-[#0a0a0a] pt-16 md:pt-24 pb-8 border-t border-[#1a1a1a] relative overflow-hidden">
      {/* GSAP Continuous Marquee Band */}
      <div className="w-full overflow-hidden whitespace-nowrap border-y border-white/10 bg-[#141414]/40 backdrop-blur-md py-5 mb-16 select-none shadow-inner">
        <div ref={marqueeRef} className="inline-flex whitespace-nowrap">
          <span className="font-display italic text-lg md:text-2xl text-[#f5f5f5]/90 font-normal tracking-wide pr-4">
            {marqueeBlock}
          </span>
          <span className="font-display italic text-lg md:text-2xl text-[#f5f5f5]/90 font-normal tracking-wide pr-4">
            {marqueeBlock}
          </span>
        </div>
      </div>

      <div className="max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 relative z-10">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#991b1b]/15 rounded-full blur-[140px] pointer-events-none -z-10" />

        {/* Main Grid: Info + Reservation Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 items-start">
          {/* Left Column: Contact Info & Location */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5 text-[#dc2626]" />
                <span className="text-[11px] text-[#a3a3a3] uppercase tracking-[0.25em] font-semibold">
                  {t.contactEyebrow}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#f5f5f5] tracking-tight mb-4 leading-[1.1]">
                {lang === 'sr' ? (
                  <>Posetite Naš <span className="font-display italic text-[#dc2626]">Podrum</span></>
                ) : (
                  <>Visit Our <span className="font-display italic text-[#dc2626]">Cellar</span></>
                )}
              </h2>

              <p className="text-sm md:text-base text-[#a3a3a3] leading-relaxed mb-8 max-w-md font-normal">
                {t.contactSub}
              </p>

              {/* Direct Contact Cards */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#141414] border border-white/10 hover:border-[#dc2626]/40 transition-all duration-300 group hover:-translate-y-0.5 shadow-md hover:shadow-[0_8px_20px_rgba(153,27,27,0.15)]">
                  <div className="w-10 h-10 rounded-lg bg-white/5 text-[#dc2626] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#991b1b]/20 transition-all duration-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#a3a3a3] uppercase tracking-wider font-semibold mb-0.5">
                      {lang === 'sr' ? 'Lokacija Podruma' : 'Winery Location'}
                    </p>
                    <p className="text-xs sm:text-sm text-[#f5f5f5] font-medium">{t.contactLocation}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#141414] border border-white/10 hover:border-[#dc2626]/40 transition-all duration-300 group hover:-translate-y-0.5 shadow-md hover:shadow-[0_8px_20px_rgba(153,27,27,0.15)]">
                  <div className="w-10 h-10 rounded-lg bg-white/5 text-[#dc2626] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#991b1b]/20 transition-all duration-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#a3a3a3] uppercase tracking-wider font-semibold mb-0.5">
                      {lang === 'sr' ? 'Telefon & WhatsApp' : 'Phone & WhatsApp'}
                    </p>
                    <a href={`tel:${t.contactPhone}`} className="text-xs sm:text-sm text-[#f5f5f5] font-medium hover:text-[#dc2626] transition-colors">
                      {t.contactPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#141414] border border-white/10 hover:border-[#dc2626]/40 transition-all duration-300 group hover:-translate-y-0.5 shadow-md hover:shadow-[0_8px_20px_rgba(153,27,27,0.15)]">
                  <div className="w-10 h-10 rounded-lg bg-white/5 text-[#dc2626] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#991b1b]/20 transition-all duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#a3a3a3] uppercase tracking-wider font-semibold mb-0.5">
                      {lang === 'sr' ? 'Email Za Upite' : 'Direct Email Inquiry'}
                    </p>
                    <a href={`mailto:${t.contactEmail}`} className="text-xs sm:text-sm text-[#f5f5f5] font-medium hover:text-[#dc2626] transition-colors">
                      {t.contactEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours & Access Badge */}
            <div className="rounded-xl border border-white/10 bg-[#141414] p-5 backdrop-blur-sm hover:border-[#dc2626]/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-2 text-xs text-[#a3a3a3]">
                <span className="flex items-center gap-1.5 font-semibold text-[#f5f5f5]">
                  <Clock className="w-3.5 h-3.5 text-[#dc2626]" />
                  {lang === 'sr' ? 'Radno Vreme Podruma' : 'Visiting Hours'}
                </span>
                <span className="font-semibold text-[#f5f5f5] bg-white/5 px-2.5 py-1 rounded-full text-[11px] font-mono">09:00 - 19:00h</span>
              </div>
              <p className="text-xs text-[#a3a3a3] leading-relaxed">
                {lang === 'sr'
                  ? 'Svrljig, 220 km od Beograda (auto-put E-75), 28 km od Niša. Dostupan besplatan parking i VIP privatni prevoz na zahtev.'
                  : 'Svrljig, 220 km from Belgrade via E-75, 28 km from Niš. On-site private parking and VIP transport available.'}
              </p>
            </div>
          </div>

          {/* Right Column: Clear Tasting Reservation Form */}
          <div className="lg:col-span-7 bg-[#141414] border border-white/10 hover:border-[#dc2626]/40 p-6 sm:p-10 md:p-12 rounded-3xl relative shadow-2xl backdrop-blur-xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.015] hover:shadow-[0_25px_60px_rgba(153,27,27,0.18)] group/form">
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#991b1b]/15 rounded-full blur-3xl pointer-events-none group-hover/form:bg-[#dc2626]/25 transition-colors duration-700" />

            <div className="relative z-10 mb-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display italic text-[#f5f5f5] mb-2 group-hover/form:text-white transition-colors duration-300">
                {t.contactTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#a3a3a3] leading-relaxed">
                {lang === 'sr'
                  ? 'Popunite rezervaciju za vođenu degustaciju u našem arhivskom podrumu. Potvrdu termina šaljemo u roku od 2 sata na e-mail ili telefon.'
                  : 'Submit a request for a guided tasting flight in our stone cellar. Confirmation will be sent within 2 hours.'}
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 sm:p-12 rounded-2xl bg-[#991b1b]/20 border border-[#dc2626]/40 text-center my-auto">
                <CheckCircle2 className="w-12 h-12 text-[#dc2626] mx-auto mb-4 animate-bounce" />
                <h4 className="text-xl sm:text-2xl font-display italic text-[#f5f5f5] mb-2">{t.formSuccess}</h4>
                <p className="text-xs sm:text-sm text-[#a3a3a3]">
                  {lang === 'sr' ? 'Radujemo se vašem dolasku u Vinariju Jovanović u Svrljigu!' : 'We look forward to welcoming you to Jovanović Winery in Svrljig!'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-[11px] text-[#a3a3a3] uppercase tracking-wider mb-1.5 font-semibold">
                      {t.formName} <span className="text-[#dc2626]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={lang === 'sr' ? 'npr. Marko Marković' : 'e.g. Alexander Smith'}
                      className="w-full bg-[#0a0a0a] border border-white/10 hover:border-white/25 focus:border-[#dc2626] focus:bg-[#0f0a0b] focus:shadow-[0_0_20px_rgba(220,38,38,0.2)] text-[#f5f5f5] placeholder-[#525252] rounded-xl px-4 py-3.5 text-xs sm:text-sm transition-all outline-none focus-visible:ring-1 focus-visible:ring-[#dc2626]"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-[11px] text-[#a3a3a3] uppercase tracking-wider mb-1.5 font-semibold">
                      {t.formEmail} <span className="text-[#dc2626]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={lang === 'sr' ? 'npr. marko@example.rs' : 'e.g. alexander@example.com'}
                      className="w-full bg-[#0a0a0a] border border-white/10 hover:border-white/25 focus:border-[#dc2626] focus:bg-[#0f0a0b] focus:shadow-[0_0_20px_rgba(220,38,38,0.2)] text-[#f5f5f5] placeholder-[#525252] rounded-xl px-4 py-3.5 text-xs sm:text-sm transition-all outline-none focus-visible:ring-1 focus-visible:ring-[#dc2626]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="contact-phone" className="block text-[11px] text-[#a3a3a3] uppercase tracking-wider mb-1.5 font-semibold">
                      {t.formPhone} <span className="text-xs text-[#a3a3a3]/60 font-normal">({lang === 'sr' ? 'opciono' : 'opt.'})</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+381 63 123 456"
                      className="w-full bg-[#0a0a0a] border border-white/10 hover:border-white/25 focus:border-[#dc2626] focus:bg-[#0f0a0b] focus:shadow-[0_0_20px_rgba(220,38,38,0.2)] text-[#f5f5f5] placeholder-[#525252] rounded-xl px-4 py-3.5 text-xs sm:text-sm transition-all outline-none focus-visible:ring-1 focus-visible:ring-[#dc2626]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-date" className="block text-[11px] text-[#a3a3a3] uppercase tracking-wider mb-1.5 font-semibold">
                      {t.formDate} <span className="text-[#dc2626]">*</span>
                    </label>
                    <input
                      id="contact-date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-white/10 hover:border-white/25 focus:border-[#dc2626] focus:bg-[#0f0a0b] focus:shadow-[0_0_20px_rgba(220,38,38,0.2)] text-[#f5f5f5] placeholder-[#525252] rounded-xl px-4 py-3.5 text-xs sm:text-sm transition-all outline-none focus-visible:ring-1 focus-visible:ring-[#dc2626] [color-scheme:dark]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-guests" className="block text-[11px] text-[#a3a3a3] uppercase tracking-wider mb-1.5 font-semibold">
                      {t.formGuests}
                    </label>
                    <select
                      id="contact-guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                      className="w-full bg-[#0a0a0a] border border-white/10 hover:border-white/25 focus:border-[#dc2626] focus:bg-[#0f0a0b] text-[#f5f5f5] rounded-xl px-4 py-3.5 text-xs sm:text-sm transition-all outline-none cursor-pointer focus-visible:ring-1 focus-visible:ring-[#dc2626]"
                    >
                      {[2, 3, 4, 5, 6, 8, 10, 15, 20].map((num) => (
                        <option key={num} value={num} className="bg-[#141414] text-[#f5f5f5]">
                          {num} {lang === 'sr' ? 'Osoba' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-preference" className="block text-[11px] text-[#a3a3a3] uppercase tracking-wider mb-1.5 font-semibold">
                    {t.formPreference}
                  </label>
                  <select
                    id="contact-preference"
                    value={formData.winePreference}
                    onChange={(e) => setFormData({ ...formData, winePreference: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-white/10 hover:border-white/25 focus:border-[#dc2626] focus:bg-[#0f0a0b] text-[#f5f5f5] rounded-xl px-4 py-3.5 text-xs sm:text-sm transition-all outline-none cursor-pointer focus-visible:ring-1 focus-visible:ring-[#dc2626]"
                  >
                    <option value="rose-and-red" className="bg-[#141414] text-[#f5f5f5]">
                      {lang === 'sr' ? 'Jovanović Rosé & Crveno Reserve (Kompletna Vođena Degustacija)' : 'Jovanović Rosé & Red Reserve (Complete Tasting Flight)'}
                    </option>
                    <option value="rose-only" className="bg-[#141414] text-[#f5f5f5]">
                      {lang === 'sr' ? 'Fokus na Rosé Berbe (Muskat Hamburg & Prokupac)' : 'Rosé Focus Flight (Muskat Hamburg & Prokupac)'}
                    </option>
                    <option value="red-only" className="bg-[#141414] text-[#f5f5f5]">
                      {lang === 'sr' ? 'Arhivska Crvena Vina (Vranac & Hrastova Bačva)' : 'Reserve Red Flight (Aged Vranac & Barrique)'}
                    </option>
                    <option value="full-vip" className="bg-[#141414] text-[#f5f5f5]">
                      {lang === 'sr' ? 'VIP Paket sa Obilaskom Vinograda & Tradicionalnim Ručkom' : 'VIP Experience with Vineyard Tour & Gourmet Lunch'}
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[11px] text-[#a3a3a3] uppercase tracking-wider mb-1.5 font-semibold">
                    {t.formMessage}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === 'sr' ? 'Alergije na hranu, posebne želje za hranom ili pitanja o prevozu...' : 'Dietary requirements, special notes or transport requests...'}
                    className="w-full bg-[#0a0a0a] border border-white/10 hover:border-white/25 focus:border-[#dc2626] focus:bg-[#0f0a0b] focus:shadow-[0_0_20px_rgba(220,38,38,0.2)] text-[#f5f5f5] placeholder-[#525252] rounded-xl px-4 py-3.5 text-xs sm:text-sm transition-all outline-none resize-none focus-visible:ring-1 focus-visible:ring-[#dc2626]"
                  />
                </div>

                <button
                  type="submit"
                  aria-label={t.btnSendReservation}
                  className="w-full group relative inline-flex items-center justify-center rounded-full text-xs sm:text-sm font-semibold py-4 bg-gradient-to-r from-[#991b1b] via-[#dc2626] to-[#991b1b] text-white hover:scale-[1.015] hover:shadow-[0_10px_35px_rgba(220,38,38,0.4)] active:scale-[0.985] transition-all duration-500 ease-out cursor-pointer mt-3 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626]"
                >
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Send className="w-4 h-4 mr-2 text-white group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  <span className="relative z-10">{t.btnSendReservation}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Newsletter Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 hover:border-[#dc2626]/40 bg-[#141414] p-8 sm:p-12 md:p-16 my-20 shadow-2xl backdrop-blur-xl text-center flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.015] hover:shadow-[0_25px_60px_rgba(153,27,27,0.18)] group/banner">
          <img
            src={heroBgImg}
            alt="Svrljig Vineyard"
            className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover/banner:opacity-25 group-hover/banner:scale-105 transition-all duration-1000 pointer-events-none mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pointer-events-none" />

          <div className="relative z-10 w-12 h-12 rounded-full bg-white/5 border border-white/10 group-hover/banner:border-[#dc2626]/40 group-hover/banner:bg-[#991b1b]/20 group-hover/banner:scale-110 flex items-center justify-center text-[#dc2626] mb-6 backdrop-blur-md shadow-lg transition-all duration-500">
            <Sparkles className="w-5 h-5 group-hover/banner:rotate-12 transition-transform duration-500" />
          </div>

          <h3 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-display italic text-[#f5f5f5] group-hover/banner:text-white transition-colors duration-300 max-w-2xl leading-tight mb-4">
            {t.newsletterTitle}
          </h3>

          <p className="relative z-10 text-xs sm:text-sm text-[#a3a3a3] max-w-xl mb-8 leading-relaxed">
            {t.newsletterSub}
          </p>

          {newsletterSubscribed ? (
            <div className="relative z-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#991b1b]/20 border border-[#dc2626]/40 text-xs sm:text-sm text-[#f5f5f5] animate-fade-in">
              <Check className="w-4 h-4 text-[#dc2626]" />
              <span>{t.newsletterSuccess}</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="relative z-10 inline-flex items-center w-full max-w-md bg-[#0a0a0a] border border-white/15 focus-within:border-[#dc2626] focus-within:shadow-[0_0_25px_rgba(220,38,38,0.25)] rounded-full p-1.5 transition-all shadow-xl">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder={lang === 'sr' ? 'Unesite vašu email adresu...' : 'Enter your email address...'}
                aria-label={t.newsletterPlaceholder}
                className="w-full bg-transparent px-4 py-2 text-xs sm:text-sm text-[#f5f5f5] placeholder-[#525252] outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#991b1b] to-[#dc2626] text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap shadow-md hover:shadow-[0_4px_20px_rgba(220,38,38,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626]"
              >
                {t.newsletterBtn}
              </button>
            </form>
          )}
        </div>

        {/* Footer Navigation Grid */}
        <div className="pt-12 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 items-start">
          <div className="lg:col-span-6 flex flex-col justify-between items-start space-y-6">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-display italic text-[#f5f5f5] font-normal leading-snug max-w-lg">
              {t.footerHeadline}
            </h4>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#dc2626]/40 text-xs sm:text-sm text-[#f5f5f5] transition-all duration-300 cursor-pointer group hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626]"
              >
                <Wine className="w-4 h-4 text-[#dc2626]" />
                <span>{t.btnBook}</span>
              </button>

              <div className="inline-flex items-center gap-2 bg-[#141414] border border-white/5 px-4 py-2 rounded-full text-xs text-[#a3a3a3]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t.cellarStatus}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-3 gap-6 sm:gap-8 text-xs">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#a3a3a3] mb-4">
                {t.footerColCompany}
              </p>
              <ul className="space-y-2.5">
                <li><a href="#hero" className="text-[#a3a3a3] hover:text-white transition-colors">{t.navHome}</a></li>
                <li><a href="#vintages" className="text-[#a3a3a3] hover:text-white transition-colors">{t.navWines}</a></li>
                <li><a href="#journal" className="text-[#a3a3a3] hover:text-white transition-colors">{t.navStory}</a></li>
                <li><a href="#gallery" className="text-[#a3a3a3] hover:text-white transition-colors">{t.navGallery}</a></li>
                <li><a href="#contact" className="text-[#a3a3a3] hover:text-white transition-colors">{t.navContact}</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#a3a3a3] mb-4">
                {t.footerColSocials}
              </p>
              <ul className="space-y-2.5">
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[#a3a3a3] hover:text-[#dc2626] transition-colors">
                    Instagram <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[#a3a3a3] hover:text-[#dc2626] transition-colors">
                    Facebook <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                </li>
                <li>
                  <a href="#vintages" className="inline-flex items-center gap-1 text-[#a3a3a3] hover:text-[#dc2626] transition-colors">
                    Vivino <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[#a3a3a3] hover:text-[#dc2626] transition-colors">
                    YouTube <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#a3a3a3] mb-4">
                {t.footerColLegal}
              </p>
              <ul className="space-y-2.5 text-[#a3a3a3]">
                <li>Privatnost</li>
                <li>Uslovi Korišćenja</li>
                <li>Odgovorno 18+</li>
                <li>Geografsko Poreklo</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a3a3a3]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#991b1b]/20 border border-[#dc2626]/30 flex items-center justify-center text-[#dc2626] font-display italic text-[11px] font-bold">
              VJ
            </div>
            <span>{t.rights}</span>
          </div>

          <p className="font-mono text-[11px] text-[#a3a3a3]">{t.madeIn}</p>
        </div>

        {/* Signature Watermark Logo */}
        <div className="mt-8 pt-4 overflow-hidden select-none pointer-events-none">
          <h1 className="font-display italic text-[13vw] sm:text-[15vw] md:text-[16vw] text-white/[0.04] hover:text-white/[0.08] transition-colors duration-700 text-center font-normal leading-none tracking-tighter whitespace-nowrap">
            Jovanović
          </h1>
        </div>
      </div>
    </footer>
  );
}
