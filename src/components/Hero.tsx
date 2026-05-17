import React from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  content: { title: string; subtitle: string };
  onMenuClick: () => void;
}

export default function Hero({ content, onMenuClick }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/50 to-brand-black" />
        <div className="absolute inset-0 bg-brand-black/30" />
        {/* Premium Jeongabok Background Photo */}
        <img 
          src="/src/assets/images/jeongabok_premium_hero_v2_1778991027317.png" 
          alt="Jeongabok - Premium Chinese Dining"
          className="w-full h-full object-cover opacity-60 scale-105"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs uppercase tracking-[0.5em] font-semibold text-brand-purple mb-6"
        >
          Premium Modern Chinese Dining
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 whitespace-pre-line"
        >
          {content.title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl font-medium tracking-tight text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed flex flex-col md:flex-row items-center justify-center gap-4"
        >
          {content.subtitle.includes('찬형각') ? (
            <>
              <span className="opacity-70">{content.subtitle.split('찬형각')[0]}</span>
              <span className="text-3xl md:text-5xl font-traditional text-brand-yellow font-bold drop-shadow-[0_0_20px_rgba(255,215,0,0.3)]">찬형각</span>
            </>
          ) : content.subtitle}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button 
            onClick={onMenuClick}
            className="group relative px-10 py-4 bg-brand-purple overflow-hidden transition-all shadow-lg shadow-brand-purple/20"
          >
            <span className="relative z-10 text-xs uppercase tracking-[0.3em] font-bold text-white">
              Explore Menu
            </span>
            <div className="absolute inset-0 bg-brand-purple-deep translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          <button className="group relative px-10 py-4 bg-transparent border border-white/20 overflow-hidden transition-all hover:border-brand-purple">
            <span className="relative z-10 text-xs uppercase tracking-[0.3em] font-bold group-hover:text-white transition-colors">
              Our Story
            </span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>

      {/* Atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
